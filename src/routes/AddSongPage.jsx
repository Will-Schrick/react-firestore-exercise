import { useState } from 'react';
import { addSong } from '../hooks/useSongs';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Paper, Typography } from '@mui/material';
import HomeButton from '../components/HomeButton'; // Import HomeButton
import '../App.css';

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
    <Paper
      className="paper-card"
      style={{
        padding: '20px',
        maxWidth: '500px',
        margin: '30px auto',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add a New Song
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <TextField
          label="Title"
          variant="outlined"
          value={newSong.title}
          onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
          fullWidth
        />
        <TextField
          label="Artist"
          variant="outlined"
          value={newSong.artist}
          onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
          fullWidth
        />
        <TextField
          label="Year"
          type="number"
          variant="outlined"
          value={newSong.year}
          onChange={(e) =>
            setNewSong({ ...newSong, year: parseInt(e.target.value) })
          }
          fullWidth
        />
        <TextField
          label="Genre"
          variant="outlined"
          value={newSong.genre}
          onChange={(e) => setNewSong({ ...newSong, genre: e.target.value })}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddSong}
          style={{ marginTop: '10px' }}
        >
          Add Song
        </Button>
      </div>
      <HomeButton /> {/* Add Home button here */}
    </Paper>
  );
};

export default AddSongPage;
