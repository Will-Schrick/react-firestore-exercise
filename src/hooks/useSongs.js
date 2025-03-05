import { db } from '../config/firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

//define songs
const songsCollection = collection(db, 'Songs');

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

// Add this export to enable editing
export const updateSong = async (id, updatedSong) => {
  const songDoc = doc(db, 'Songs', id);
  await updateDoc(songDoc, updatedSong);
};
