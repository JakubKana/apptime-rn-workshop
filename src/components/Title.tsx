import { StyleSheet, TextStyle, Text } from 'react-native';
import { appTheme } from 'src/config/theme';

export const Title = ({ text, titleStyle }: { text: string; titleStyle?: TextStyle }) => {
  return <Text style={[styles.title, titleStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: appTheme.primary,
    fontFamily: 'helvetica',
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 5
  }
});
