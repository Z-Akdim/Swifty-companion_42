import { StyleSheet } from "react-native";
import { typeColor } from "../../../styles/global.styles";

import { useMemo } from "react";

const useStyle = (type) => {
  const Colors = typeColor(type);
  return useMemo(
    () =>
      StyleSheet.create({
        containerAvatarButton: {
          marginTop: 50,
          width: 73,
          height: 73,
          borderWidth: 3,
          borderColor: Colors.title,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          overflow: "hidden",
        },
        ImageButton: {
          width: "100%",
          height: "100%",
        },
        HomeColor: {
          color: Colors.homeIconColor,
        },
      }),
    [type]
  );
};

export default useStyle;
