import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { typeColor } from "../../styles/global.styles";
import { TYPE_FONT_Famliy, TYPE_SIZES } from "../../styles/base.styles";
const useStle = (type) => {
  const Colors = typeColor(type);
  return useMemo(
    () =>
      StyleSheet.create({
        profileCardContainer: {
          flex: 0.5,
          borderWidth: 0.5,
          marginVertical: 21,
          borderRadius: 10,
          borderColor: Colors.borderColor,
          backgroundColor: Colors.bgColor,
          overflow: "hidden",
        },
        childOne: {
          flex: 1,
          padding: 13,
          gap: 20,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        },
        imageProfile: {
          width: 75,
          height: 75,
          borderRadius: 100,
          borderWidth: 3,
          borderColor: Colors.titleColor,
        },
        fullNameStyle: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_SEMI_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_20,
          color: Colors.titleColor,
        },
        userNameStyle: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_REGULAR,
          fontSize: TYPE_SIZES.FONT_SIZE_18,
          color: Colors.placHoColor,
        },
        logoStyle: {
          width: 30,
          height: 32,
          backgroundColor: "green",
        },
        nameLogoContainer: {
          flexDirection: "row",
          gap: 13,
        },
        childTow: {
          flex: 1,
          paddingHorizontal: 13,
        },
        gradeStyle: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_SEMI_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_16,
          color: Colors.titleColor,
        },
        typeGrade: {
          flex: 1,
          fontFamily: TYPE_FONT_Famliy.POPPINS_MEDIUM,
          fontSize: TYPE_SIZES.FONT_SIZE_16,
          color: Colors.placHoColor,
        },
        CTow_Bloc1: {
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        },
        CTow_Bloc2: {
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        },
        childThree: {
          flex: 1,
        },
      }),
    [type]
  );
};

export default useStle;
