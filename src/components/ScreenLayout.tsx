import { Spinner } from 'src/components/Spinner';
import useCacheAssets from 'src/hooks/useCacheAssets';

import { ReactNode } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface ScreenLayoutProps {
  children: ReactNode;
  testID?: string;
  layoutStyles?: ViewStyle;
}

const ScreenLayout = ({ children, testID, layoutStyles }: ScreenLayoutProps) => {
  const areAssetsCached = useCacheAssets();

  return (
    <View testID={testID} style={[styles.layout, layoutStyles]}>
      {areAssetsCached ? children : <Spinner />}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});

export { ScreenLayout };
