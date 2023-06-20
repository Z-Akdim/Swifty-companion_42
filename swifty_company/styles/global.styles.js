import { StyleSheet } from "react-native";
import { useMemo } from "react";
import { TYPE_SIZES, TYPE_FONT_Famliy } from "./base.styles";

export const typeColor = (type) => {
  const colors = {
    commodore: {
      placHoColor: "#5B835A",
      bgColor: "#E5FFE2",
      borderColor: "#5D9B5B",
    },
    bois: {
      placHoColor: "#5A8383",
      bgColor: "#E2FFFF",
      borderColor: "#5B9B9B",
    },
    freax: {
      placHoColor: "#837A5A",
      bgColor: "#FEFFE1",
      borderColor: "#B9AF56",
    },
    pandora: {
      placHoColor: "#835A7C",
      bgColor: "#FFEAF9",
      borderColor: "#9B5B7A",
    },
  };
  const Color = colors[type];
  return Color;
};

const useGlobalStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        Paragraph: {
          fontSize: TYPE_SIZES.FONT_SIZE_20,
          fontFamily: TYPE_FONT_Famliy.POPPINS_REGULAR,
          letterSpacing: 0.5,
          lineHeight: 30,
          textAlign: "center",
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

export default useGlobalStyle;
