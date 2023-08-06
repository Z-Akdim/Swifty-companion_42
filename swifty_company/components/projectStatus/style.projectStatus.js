import { StyleSheet } from "react-native";
import { typeColor } from "../../styles/global.styles";
import { TYPE_FONT_Famliy, TYPE_SIZES } from "../../styles/base.styles";
import { useMemo } from "react";

const useStyle = (type) => {
  const Colors = typeColor(type);
  return useMemo(
    () =>
      StyleSheet.create({
        containerProject: {
          flex: 1,
        },
        containerTabView: {
          flex: 0.1,
          flexDirection: "row",
        },
        viewTyopContainer: {
          flex: 1,
        },
        tabView: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
        brderColor: {},
        borderA: {
          borderBottomWidth: 5,
          borderColor: Colors.titleColor,
          backgroundColor: Colors.homeIconColor,
        },
        borderD: {
          borderBottomWidth: 5,
          borderColor: Colors.bgColor,
        },
        tabViewTitleD: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_MEDIUM,
          fontSize: TYPE_SIZES.FONT_SIZE_16,
          color: Colors.placHoColor,
        },
        tabViewTitleA: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_16,
          color: Colors.titleColor,
        },
      }),
    [type]
  );
};

export default useStyle;
