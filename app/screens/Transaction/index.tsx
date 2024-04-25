import * as React from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import useFetch from "./hooks/useFetch";
import usePost from "./hooks/usePost";
import { MaterialIcons } from "@expo/vector-icons";
import TransactionModal from "./components/TransactionModal";
import CreateTransactionFrom from "./components/CreateTransactionForm";
import Card from "./components/Card";
import Header from "./components/Header";

const ScreenWidth = Dimensions.get("screen").width;

const TransactionScreen = () => {
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState<number>();
  const [type, setType] = React.useState<"increase" | "decrease">();
  const [description, setDescription] = React.useState<string>();
  const { fetchData, data, posting } = useFetch();

  React.useEffect(() => {
    fetchData();
  }, []);

  const total = React.useMemo(() => {
    if (data) {
      return data.reduce((acc, val) => acc + val.value, 0);
    }

    return 0;
  }, [data]);

  const { save } = usePost({
    value,
    type,
    description,
    total,
    fetchData,
    handleClose: () => setShow(false),
  });

  const handleIncrease = React.useCallback(() => {
    setType("increase");
    setShow(true);
  }, []);

  const handleDecrease = React.useCallback(() => {
    setType("decrease");
    setShow(true);
  }, []);

  const handleItemPress = React.useCallback((d: any) => {
    alert(
      `Transact: ${d.value} 
      \n Total Balance: ${d.balance}
      \n Date: ${d.date}
        `
    );
  }, []);

  return (
    <View style={Styles.container}>
      <Header
        total={total}
        hanldeDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        fetchData={fetchData}
      />
      <ScrollView style={Styles.list} showsHorizontalScrollIndicator={false}>
        <Text style={{ textAlign: "center" }}>Transactions</Text>
        {data && (
          <View>
            {data.map((d) => (
              <Pressable key={d.id} onPress={() => handleItemPress(d)}>
                <Card data={d} />
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>
      <TransactionModal show={show} type={type} onClose={() => setShow(false)}>
        <CreateTransactionFrom
          handleSave={save}
          setDescription={setDescription}
          setValue={setValue}
        />
      </TransactionModal>
    </View>
  );
};

const Styles = StyleSheet.create({
  total: {
    fontSize: 48,
  },
  totalContainer: {
    alignItems: "center",
    marginVertical: 8,
  },
  list: {
    width: "100%",
    backgroundColor: "#fff",
  },
  // @ts-ignore
  card: (isDebit: any) => ({
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 3,
    marginHorizontal: 6,
    borderWidth: 2,
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    borderRadius: 100,
    borderColor: isDebit ? "green" : "red",
  }),
  container: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: ScreenWidth,
    height: "95%",
  },
});
export default TransactionScreen;
