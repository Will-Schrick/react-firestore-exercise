import { useEffect, useState } from 'react';
import { getSongs, deleteSong, updateSong } from '../hooks/useSongs';
import {
  Button,
  TextField,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    title: '',
    artist: '',
    year: '',
    genre: '',
  });

  useEffect(() => {
    getSongs()
      .then((data) => setSongs(data.sort((a, b) => b.year - a.year)))
      .catch((error) => alert('Failed to fetch songs.'))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      setDeleting(id);
      await deleteSong(id);
      setSongs(songs.filter((song) => song.id !== id));
      setDeleting(null);
    }
  };

  const handleEdit = (song) => {
    setEditingId(song.id);
    setEditData(song);
  };

  const handleSave = async () => {
    if (
      !editData.title ||
      !editData.artist ||
      !editData.year ||
      !editData.genre
    ) {
      alert('All fields are required');
      return;
    }

    await updateSong(editingId, editData);
    setSongs(
      songs.map((song) =>
        song.id === editingId ? { ...song, ...editData } : song
      )
    );
    setEditingId(null);
    setEditData({ title: '', artist: '', year: '', genre: '' });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({ title: '', artist: '', year: '', genre: '' });
  };

  if (loading)
    return (
      <CircularProgress style={{ display: 'block', margin: '20px auto' }} />
    );

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Song Collection
      </Typography>
      {songs.length === 0 ? (
        <Typography>No songs available.</Typography>
      ) : (
        <div>
          {songs.map((song) => (
            <Paper
              key={song.id}
              className="paper-card" // Adds the hover effect class
              style={{
                marginBottom: '10px',
                padding: '10px',
                backgroundColor: '#e0e0e0',
              }}
            >
              {editingId === song.id ? (
                <div>
                  <TextField
                    label="Title"
                    variant="outlined"
                    size="small"
                    value={editData.title}
                    onChange={(e) =>
                      setEditData({ ...editData, title: e.target.value })
                    }
                    style={{ marginBottom: '5px', marginRight: '5px' }}
                  />
                  <TextField
                    label="Artist"
                    variant="outlined"
                    size="small"
                    value={editData.artist}
                    onChange={(e) =>
                      setEditData({ ...editData, artist: e.target.value })
                    }
                    style={{ marginBottom: '5px', marginRight: '5px' }}
                  />
                  <TextField
                    label="Year"
                    type="number"
                    variant="outlined"
                    size="small"
                    value={editData.year}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        year: parseInt(e.target.value),
                      })
                    }
                    style={{ marginBottom: '5px', marginRight: '5px' }}
                  />
                  <TextField
                    label="Genre"
                    variant="outlined"
                    size="small"
                    value={editData.genre}
                    onChange={(e) =>
                      setEditData({ ...editData, genre: e.target.value })
                    }
                    style={{ marginBottom: '5px', marginRight: '5px' }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleCancel}
                    style={{ marginLeft: '5px' }}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <div>
                  <Typography variant="subtitle1">
                    {song.title} - {song.artist} ({song.year}) [{song.genre}]
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleEdit(song)}
                    style={{ marginRight: '5px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => handleDelete(song.id)}
                    disabled={deleting === song.id}
                  >
                    {deleting === song.id ? 'Deleting...' : 'Delete'}
                  </Button>
                </div>
              )}
            </Paper>
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;

/*import { useEffect, useState } from 'react';
import { getSongs, deleteSong, updateSong } from '../hooks/useSongs';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    title: '',
    artist: '',
    year: '',
    genre: '',
  }); // Fixed: Initialize editData properly

  useEffect(() => {
    getSongs()
      .then((data) => {
        const sortedSongs = data.sort((a, b) => b.year - a.year);
        setSongs(sortedSongs);
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
        alert('Failed to fetch songs.');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      setDeleting(id);
      await deleteSong(id);
      setSongs(songs.filter((song) => song.id !== id));
      setDeleting(null);
    }
  };

  const handleEdit = (song) => {
    setEditingId(song.id);
    setEditData(song);
  };

  const handleSave = async () => {
    if (
      !editData.title ||
      !editData.artist ||
      !editData.year ||
      !editData.genre
    ) {
      alert('All fields are required');
      return;
    }

    await updateSong(editingId, editData);
    setSongs(
      songs.map((song) =>
        song.id === editingId ? { ...song, ...editData } : song
      )
    );
    setEditingId(null);
    setEditData({ title: '', artist: '', year: '', genre: '' }); // Reset form
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({ title: '', artist: '', year: '', genre: '' }); // Reset form
  };

  if (loading) return <p>Loading songs...</p>;

  return (
    <div>
      <h2>Song Collection</h2>
      {songs.length === 0 ? (
        <p>No songs available.</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              {editingId === song.id ? (
                <div>
                  <input
                    type="text"
                    placeholder="Title"
                    value={editData.title}
                    onChange={(e) =>
                      setEditData({ ...editData, title: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Artist"
                    value={editData.artist}
                    onChange={(e) =>
                      setEditData({ ...editData, artist: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Year"
                    value={editData.year}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        year: parseInt(e.target.value),
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Genre"
                    value={editData.genre}
                    onChange={(e) =>
                      setEditData({ ...editData, genre: e.target.value })
                    }
                  />
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <div>
                  {song.title} - {song.artist} ({song.year}) [{song.genre}]
                  <button onClick={() => handleEdit(song)}>Edit</button>
                  <button
                    onClick={() => handleDelete(song.id)}
                    disabled={deleting === song.id}
                    style={{
                      marginLeft: '10px',
                      color: deleting === song.id ? 'gray' : 'red',
                      cursor: deleting === song.id ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {deleting === song.id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongList;
*/
