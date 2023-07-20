import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { typeColor } from "../../styles/global.styles";
import { TYPE_FONT_Famliy, TYPE_SIZES } from "../../styles/base.styles";

const useStyle = (type) => {
  const Colors = typeColor(type);
  return useMemo(
    () =>
      StyleSheet.create({
        HomeContainer: {
          flex: 1,
        },
        HeaderContainer: {
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 28,
        },
        logoTitleStyle: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_30,
          color: Colors.titleColor,
          paddingLeft: 10,
        },
        HomeContent: {
          flex: 1,
          alignItems: "center",
          gap: 30,
          paddingTop: 100,
        },
        searchTestContainer: {
          marginHorizontal: 37,
        },
        startSearchStyle: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_EXTRA_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_36,
          color: Colors.primaryGreen,
          opacity: 0.81,
        },
        InputViewStyle: {
          width: "100%",
        },
        AvatarBStyle: {
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
        },
      }),
    [type]
  );
};

export default useStyle;
