import { ViewStyle, View, StyleSheet } from 'react-native';

export const Separator = ({ style, height }: { style?: ViewStyle; height?: number }) => {
  return <View style={[styles.separator, style, { height }]} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});
