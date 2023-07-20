import { StyleSheet } from "react-native";
import { typeColor } from "../../styles/global.styles";
import { useMemo } from "react";

const useStyle = ({ type }) => {
  // const Colors = typeColor(type);
  return useMemo(
    () =>
      StyleSheet.create({
        profileContainerStyle: {
          flex: 1,
        },
        navBarStyle: {
          height: 110,
          backgroundColor: "blue",
          alignItems: "flex-start",
        },
        profileContentStyle: {
          // backgroundColor: "red",
          flex: 1,
          marginHorizontal: 21,
          // borderRadius: 10,
        },
      }),
    [type]
  );
};
export default useStyle;
