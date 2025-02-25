import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Firestore Songs App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/songs">View Songs</Link>
          </li>
          <li>
            <Link to="/add-song">Add New Song</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
