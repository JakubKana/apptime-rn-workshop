import { Stack } from 'expo-router';

import { ScreenLayout } from 'src/components/ScreenLayout';
import { appTheme } from 'src/config/theme';
import { View, Text, StyleSheet } from 'react-native';

export default function PostsScreen() {
  return (
    <ScreenLayout testID="posts-screen-layout">
      <View testID="posts-screen-content">
        <Stack.Screen options={{ title: 'Posts' }} />
        <Text style={styles.title} testID="posts-screen-title">
          Posts Screen
        </Text>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: appTheme.primary,
    fontFamily: 'helvetica',
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 20
  },
  text: {
    color: appTheme.primary,
    fontFamily: 'helvetica',
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 15
  }
});
