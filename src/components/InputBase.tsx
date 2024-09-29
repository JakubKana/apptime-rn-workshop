import { TextInput, View, ViewStyle, StyleSheet, TextInputProps } from 'react-native';

export const InputBase = ({
  containerStyles,
  inputStyle,
  text,
  setText,
  ...textInputProps
}: {
  containerStyles?: ViewStyle;
  inputStyle?: ViewStyle;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
} & TextInputProps) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <TextInput
        style={[styles.input, inputStyle]}
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  input: {
    textAlignVertical: 'top',
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  }
});
