import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });





//  adds it to the database
export const putDb = async (content) => {
  console.log('Post to the ase');

  // Create a connection to the database database 
  const notesDb = await openDB('jate', 1);

  // Create a new transaction and specify the database
  const tx = notesDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .add() method on the store 
  const request = store.put({ id:1, value: content }); //

  // Get confirmation 
  const result = await request;
  console.log(' - data saved to the database', result);
};


















// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
