import 'expo-dev-client';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { appTheme } from 'src/config/theme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.appwrapper}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appwrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: appTheme.background
  }
});
