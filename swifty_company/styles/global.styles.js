import { StyleSheet } from "react-native";
import { useMemo } from "react";
import { TYPE_SIZES, TYPE_FONT_Famliy } from "./base.styles";

const useStyle = (props) => {
  return useMemo(
    () =>
      StyleSheet.create({
        Paragraph: {
          fontSize: TYPE_SIZES.FONT_SIZE_20,
          fontFamily: TYPE_FONT_Famliy.POPPINS_REGULAR,
          letterSpacing: 0.5,
          lineHeight: 30,
        },
        Title: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_36,
        },
        Subtitle: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_EXTRA_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_36,
        },
        User_N_G_C: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_SEMI_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_24,
        },
      }),
    []
  );
};
export default useStyle;
