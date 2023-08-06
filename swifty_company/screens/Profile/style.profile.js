import { StyleSheet } from "react-native";
import { typeColor } from "../../styles/global.styles";
import { useMemo } from "react";

const useStyle = ({ type }) => {
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
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        projectContainer: {
          flex: 1,
          marginHorizontal: 21,
        },
      }),
    [type]
  );
};
export default useStyle;
