import * as React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  handleSave: () => void;
  setDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
  setValue: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const CreateTransactionFrom = ({
  handleSave,
  setDescription,
  setValue,
}: Props) => {
  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.text}>Description</Text>
        <View style={Styles.inputContainer}>
          <TextInput
            onChangeText={(description) => setDescription(description)}
          />
        </View>
      </View>
      <View>
        <Text style={Styles.text}>Value</Text>
        <View style={Styles.inputContainer}>
          <TextInput
            // style={Styles.input}
            keyboardType="numeric"
            onChangeText={(value) => setValue(Number(value))}
          />
        </View>
      </View>
      <View style={Styles.buttonContainer}>
        <Pressable style={Styles.button} onPress={handleSave}>
          <Text style={{ color: "#fff", fontSize: 24 }}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  buttonContainer: {
    padding: 6,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#25292e",
  },
  text: {
    paddingHorizontal: 6,
    fontSize: 24,
  },
  inputContainer: {
    padding: 6,
    margin: 6,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
});

export default CreateTransactionFrom;
