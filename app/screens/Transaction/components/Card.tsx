import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const renderDateBadge = (date: Date) => {
  return (
    <View style={Styles.badge}>
      <Text>
        {`${date.toLocaleDateString("defualt", {
          month: "short",
        })} ${date.getDate()}`}
      </Text>
    </View>
  );
};

const Card = ({ data }: any) => {
  return (
    // @ts-ignore
    <View style={Styles.container(true)}>
      <View style={Styles.infoContainer}>
        {renderDateBadge(data.date)}
        <Text>{data.description}</Text>
      </View>
      <Text>
        {`${data.type === 2 ? "-" : ""} ${data.balance
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  // @ts-ignore
  container: (isDebit) => ({
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 3,
    marginHorizontal: 6,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 100,
    borderColor: isDebit ? "green" : "red",
  }),
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    gap: 8,
    alignItems: "center",
  },
  badge: {
    borderWidth: 2,
    borderRadius: 100,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  textContainer: {
    borderWidth: 2,
    borderRadius: 100,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});

export default Card;
