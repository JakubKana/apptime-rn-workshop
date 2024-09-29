import { SQLiteProvider } from 'expo-sqlite';

import { CreatePost } from 'src/components/CreatePost';

import { ScreenLayout } from 'src/components/ScreenLayout';

import { createDatabase } from 'src/store/db';

export default function HomeScreen() {
  return (
    <ScreenLayout testID="create-screen-layout">
      <SQLiteProvider databaseName="posts.db" onInit={createDatabase}>
        <CreatePost />
      </SQLiteProvider>
    </ScreenLayout>
  );
}
