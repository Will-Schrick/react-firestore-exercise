import { useEffect, useState } from 'react';
import { getSongs } from '../hooks/useSongs';

const SongList = () => {
  const [songs, setSongs] = useState([]);

  // ✅ Fetch songs from Firestore on component mount
  useEffect(() => {
    getSongs().then(setSongs);
  }, []);

  return (
    <div>
      <h2>Song Collection</h2>
      {songs.length === 0 ? (
        <p>No songs available.</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              {song.title} - {song.artist} ({song.year}) [{song.genre}]
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongList;
