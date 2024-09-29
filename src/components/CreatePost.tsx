import { StyleSheet, Alert, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Card } from './Card';
import { InputBase } from './InputBase';
import { Title } from './Title';

import { insertPost } from 'src/store/db';
import { useSQLiteContext } from 'expo-sqlite';
import { useCallback, useState } from 'react';
import { Button } from './Button';
import { Separator } from './Separator';

export const CreatePost = () => {
  const db = useSQLiteContext();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const eraseForm = useCallback(() => {
    setTitle('');
    setContent('');
  }, []);

  const createPost = useCallback(async (title: string, content: string) => {
    insertPost(title, content, db)
      .then(() => {
        eraseForm();
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  }, []);

  return (
    <KeyboardAvoidingView role="form" behavior="padding">
      <Card style={styles.cardContainer}>
        <Title text="Header" />
        <InputBase text={title} setText={setTitle} />
        <Separator />
        <Title text="Content" />
        <InputBase text={content} setText={setContent} inputStyle={styles.textAreaContainer} multiline />
        <Separator />
        <Button
          title="Post"
          onPress={() => {
            createPost(title, content);
            Keyboard.dismiss();
          }}
        />
      </Card>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textAreaContainer: {
    flexGrow: 1,
    flexBasis: 200,
    flex: 4
  },
  cardContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
});
