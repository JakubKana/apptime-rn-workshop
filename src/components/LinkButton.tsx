import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Link } from 'expo-router';

interface LinkButtonProps {
  href: string;
  containerStyle?: ViewStyle;
  text: string;
}

export const LinkButton = ({ href, text, containerStyle }: LinkButtonProps) => {
  if (href.substring(0, 1) !== '/') {
    throw new Error('LinkButton href must start with a forward slash (/)');
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <Link href={href} style={styles.internalLink}>
        <Text style={styles.text} testID="link-button">
          {text}
        </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 200,
    alignSelf: 'center'
  },
  internalLink: {
    padding: 10,
    borderColor: '#d45800',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ff6600'
  },
  text: {
    color: '#fff',
    fontWeight: '600'
  }
});
