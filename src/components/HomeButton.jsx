import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Button
      variant="outlined"
      color="primary"
      component={Link}
      to="/"
      style={{ margin: '20px 0' }}
    >
      Home
    </Button>
  );
};

export default HomeButton;
