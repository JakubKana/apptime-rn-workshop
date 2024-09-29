import { useSQLiteContext } from 'expo-sqlite';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { deleteAllPosts, fetchPosts } from 'src/store/db';

import { Card } from './Card';
import { Title } from './Title';
import { Button } from './Button';
import { Separator } from './Separator';
import { useNavigation } from 'expo-router';

interface Post {
  id: number;
  title: string;
  content: string;
}

export const PostsList = () => {
  const db = useSQLiteContext();
  const [posts, setPosts] = useState<Post[]>([]);

  const navigation = useNavigation();

  const reloadPosts = useCallback(async () => {
    const result = await fetchPosts(db);
    setPosts(result ?? []);
  }, []);

  const deleteAllPostsHandler = useCallback(async () => {
    await deleteAllPosts(db);
    setPosts([]);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      reloadPosts();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <FlatList<Post>
      data={posts}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item: post }) => (
        <Card style={styles.cardContainer}>
          <Title text={post.title} />
          <View>
            <Text>{post.content}</Text>
          </View>
        </Card>
      )}
      ListFooterComponent={() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Separator height={20} />
          <Button title="Delete Posts" onPress={deleteAllPostsHandler} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'stretch'
  }
});
