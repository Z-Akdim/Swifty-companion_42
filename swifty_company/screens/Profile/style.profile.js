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
          height: 120,
          alignItems: "flex-start",
          marginBottom: -15,
        },
        profileContentStyle: {
          backgroundColor: "red",
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }),
    [type]
  );
};
export default useStyle;
