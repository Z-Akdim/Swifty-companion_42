import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { typeColor } from "../../../styles/global.styles";
import { TYPE_FONT_Famliy, TYPE_SIZES } from "../../../styles/base.styles";
const useStyle = (type, percentage) => {
  const Colors = typeColor(type);

  return useMemo(
    () =>
      StyleSheet.create({
        levelStyleContainer: {
          backgroundColor: Colors.placHoColor,
          flex: 0.7,
          borderRadius: 10,
          flexDirection: "row",
          overflow: "hidden",
          position: "relative",
        },
        levelPercentageContent: {
          backgroundColor: Colors.titleColor,
          width: percentage,
          zIndex: 1,
        },
        containerTextStyle: {
          zIndex: 2,
          position: "absolute",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
        textLevelStyle: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_MEDIUM,
          fontSize: TYPE_SIZES.FONT_SIZE_18,
          color: "#ffff",
        },
      }),
    [type, percentage]
  );
};
export default useStyle;
