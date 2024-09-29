import { ScreenLayout } from 'src/components/ScreenLayout';

import { SQLiteProvider } from 'expo-sqlite';
import { PostsList } from 'src/components/PostsList';
import { View } from 'react-native-animatable';

export default function PostsScreen() {
  return (
    <ScreenLayout testID="posts-screen-layout">
      <SQLiteProvider databaseName="posts.db">
        <View animation="fadeIn" style={{ flex: 1, paddingBottom: 30 }} testID="posts-screen">
          <PostsList />
        </View>
      </SQLiteProvider>
    </ScreenLayout>
  );
}
