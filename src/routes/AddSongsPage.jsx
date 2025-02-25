import { useState } from 'react';
import { addSong } from '../hooks/useSongs';
import { useNavigate } from 'react-router-dom';

const AddSongPage = () => {
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    year: '',
    genre: '',
  });
  const navigate = useNavigate();

  const handleAddSong = async () => {
    if (!newSong.title || !newSong.artist || !newSong.year || !newSong.genre) {
      alert('All fields are required');
      return;
    }
    await addSong(newSong);
    navigate('/songs');
  };

  return (
    <div>
      <h1>Add a New Song</h1>
      <input
        type="text"
        placeholder="Title"
        value={newSong.title}
        onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Artist"
        value={newSong.artist}
        onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
      />
      <input
        type="number"
        placeholder="Year"
        value={newSong.year}
        onChange={(e) =>
          setNewSong({ ...newSong, year: parseInt(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="Genre"
        value={newSong.genre}
        onChange={(e) => setNewSong({ ...newSong, genre: e.target.value })}
      />
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
};

export default AddSongPage;
