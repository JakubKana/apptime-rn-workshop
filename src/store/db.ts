import * as SQLite from 'expo-sqlite';

const db = async () => await SQLite.openDatabaseAsync('posts.db');

export const createDatabase = async () => {
  // Function to create the database
};

export const insertPost = async (title: string, content: string) => {
  // Function to insert a post into the database
};

export const deletePost = async (id: number) => {
  // Function to delete a post from the database
};

export const fetchPosts = async () => {
  // Function to fetch all posts from the database
};
