import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { typeColor } from "../../../styles/global.styles";

const useStyle = (type) => {
  const Colors = typeColor(type);
  return useMemo(
    () =>
      StyleSheet.create({
        containerHomeButton: {
          marginTop: 50,
          width: 73,
          height: 73,
          backgroundColor: Colors.title,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
        },
        HomeColor: {
          color: Colors.homeIconColor,
        },
      }),
    [type]
  );
};

export default useStyle;
