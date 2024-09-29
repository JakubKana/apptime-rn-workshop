import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { appTheme } from 'src/config/theme';

interface LinkButtonProps {
  onPress?: () => void;
  title: string;
}

export const Button = ({ title, onPress }: LinkButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ height: 50 }}>
      <View testID="touchable-button-view" style={styles.touchable}>
        <Text testID="touchable-button-text" style={styles.text}>
          {title.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#000'
  },

  text: {
    fontSize: 16,
    color: appTheme.primary,
    fontWeight: '600'
  }
});
