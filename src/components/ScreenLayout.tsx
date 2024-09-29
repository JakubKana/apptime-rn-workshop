import { Spinner } from 'src/components/Spinner';
import useCacheAssets from 'src/hooks/useCacheAssets';

import { ReactNode } from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenLayoutProps {
  children: ReactNode;
  testID?: string;
  layoutStyles?: ViewStyle;
}

const ScreenLayout = ({ children, testID, layoutStyles }: ScreenLayoutProps) => {
  const areAssetsCached = useCacheAssets();

  return (
    <SafeAreaView testID={testID} style={[styles.layout, layoutStyles]}>
      {areAssetsCached ? children : <Spinner />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingHorizontal: 20
  }
});

export { ScreenLayout };
