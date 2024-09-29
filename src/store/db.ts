import * as SQLite from 'expo-sqlite';

export const createDatabase = async (db: SQLite.SQLiteDatabase) => {
  // Function to create the database
  try {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL
            );
      `
    );
    console.log('Database posts created successfully.');
  } catch (error) {
    console.log('Unable to create database: ', error);
  }
};

export const insertPost = async (title: string, content: string, db: SQLite.SQLiteDatabase) => {
  // Function to insert a post into the database
  try {
    await db.execAsync(`INSERT INTO posts (title, content) VALUES ('${title}', '${content}');`);
  } catch (error) {
    console.log('Unable to insert post: ', error);
  }
};

export const deletePost = async (id: number, db: SQLite.SQLiteDatabase) => {
  // Function to delete a post from the database
  try {
    await db.execAsync(`DELETE FROM posts WHERE id = ${id};`);
  } catch (error) {
    console.log('Unable to delete post: ', error);
  }
};

export const deleteAllPosts = async (db: SQLite.SQLiteDatabase) => {
  // Function to delete all posts from the database
  try {
    await db.execAsync('DELETE FROM posts;');
  } catch (error) {
    console.log('Unable to delete all posts: ', error);
  }
};

export const fetchPosts = async (db: SQLite.SQLiteDatabase) => {
  // Function to fetch all posts from the database
  return await db.getAllAsync<{ id: number; title: string; content: string }>('SELECT id, title, content FROM posts');
};
