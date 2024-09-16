import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface LinkButtonProps {
  onPress?: () => void;
  title: string;
}

export const Button = ({ title, onPress }: LinkButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View testID="touchable-button-view" style={styles.touchable}>
        <Text testID="touchable-button-text" style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontWeight: '600'
  }
});
