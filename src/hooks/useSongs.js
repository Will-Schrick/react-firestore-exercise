import { db, songsCollection } from '../config/firebase';
import { addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

//  Fetch all songs (Read)
export const getSongs = async () => {
  const snapshot = await getDocs(songsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new song (Create)
export const addSong = async (song) => {
  await addDoc(songsCollection, song);
};

// Delete a song (Delete)
export const deleteSong = async (id) => {
  const songDoc = doc(db, 'Songs', id);
  await deleteDoc(songDoc);
};
