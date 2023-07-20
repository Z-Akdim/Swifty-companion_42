import { StyleSheet } from "react-native";
import { typeColor } from "../../../styles/global.styles";

import { useMemo } from "react";

const useStyle = (type) => {
  const Colors = typeColor(type);
  return useMemo(
    () =>
      StyleSheet.create({
        containerAvatarButton: {
          width: 75,
          height: 75,
          borderWidth: 3,
          borderColor: Colors.titleColor,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          overflow: "hidden",
          shadowColor: Colors.titleColor,
          elevation: 12,
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
