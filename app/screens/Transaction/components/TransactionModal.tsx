import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { Modal, View, StyleSheet, Text, Pressable } from "react-native";

type Props = {
  show: boolean;
  type: "increase" | "decrease" | undefined;
  children: any;
  onClose: () => void;
};

const TransactionModal = ({ show, type, children, onClose }: Props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.modalContent}>
        {/* @ts-ignore */}
        <View style={styles.titleContainer(type)}>
          <Text style={styles.title}>New Transaction</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={24} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "40%",
    width: "100%",
    // backgroundColor: "#25292e",
    backgroundColor: "#eee",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  // @ts-ignore
  titleContainer: (type) => ({
    height: "16%",
    backgroundColor: `${type === "increase" ? "green" : "red"}`,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  title: {
    color: "#fff",
    fontSize: 24,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});

export default TransactionModal;
