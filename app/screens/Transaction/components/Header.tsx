import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  total: number;
  hanldeDecrease: () => void;
  handleIncrease: () => void;
  fetchData: () => void;
};

const Header = ({
  total,
  hanldeDecrease,
  handleIncrease,
  fetchData,
}: Props) => {
  return (
    <View style={Styles.container}>
      <Text>Total</Text>
      <View style={Styles.buttonContainer}>
        <View style={Styles.decreaseButton}>
          <MaterialIcons
            name="remove"
            size={36}
            color="red"
            onPress={hanldeDecrease}
          />
        </View>
        <Text style={Styles.totalText}>
          {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
        <View style={Styles.increaseButton}>
          <MaterialIcons
            name="add"
            size={36}
            onPress={handleIncrease}
            color="green"
          />
        </View>
      </View>
      <MaterialIcons name="refresh" size={24} onPress={fetchData} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 8,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    gap: 8,
    justifyContent: "center",
  },
  increaseButton: {
    borderWidth: 2,
    borderRadius: 100,
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderColor: "green",
  },
  decreaseButton: {
    borderWidth: 2,
    borderRadius: 100,
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderColor: "red",
  },
  totalText: {
    fontSize: 48,
  },
});

export default Header;
