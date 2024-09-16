import 'expo-dev-client';
import { ThemeProvider as NavProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { appTheme, navTheme } from 'src/config/theme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.appwrapper}>
        <NavProvider value={navTheme}>
          <Slot screenOptions={{ headerShown: false }} />
        </NavProvider>
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
