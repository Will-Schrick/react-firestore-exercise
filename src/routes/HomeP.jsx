import { Link } from 'react-router-dom';
import { Button, Paper, Typography } from '@mui/material';
import '../App.css';

const HomePage = () => {
  return (
    <Paper
      className="paper-card"
      style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        marginTop: '30px',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Firestore Songs App
      </Typography>
      <div style={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/songs"
          style={{ marginRight: '10px' }}
        >
          View Songs
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/add-song"
        >
          Add New Song
        </Button>
      </div>
    </Paper>
  );
};

export default HomePage;
