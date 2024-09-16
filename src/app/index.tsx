import { Stack } from 'expo-router';

import { Text, StyleSheet, View } from 'react-native';

import { ScreenLayout } from 'src/components/ScreenLayout';
import { appTheme } from 'src/config/theme';

export default function HomeScreen() {

  return (
    <ScreenLayout testID="create-screen-layout">
      <View testID="create-screen-content">
        <Stack.Screen options={{ title: 'Create' }} />
        <Text style={styles.title} testID="create-screen-title">
          Create Post
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
