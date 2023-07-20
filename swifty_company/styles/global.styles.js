import { StyleSheet } from "react-native";
import { useMemo } from "react";
import { TYPE_SIZES, TYPE_FONT_Famliy } from "./base.styles";

export const typeColor = (type) => {
  const colors = {
    commodore: {
      placHoColor: "#5B835A",
      bgColor: "#E5FFE2",
      titleColor: "#235A16",
      borderColor: "#5D9B5B",
      homeIconColor: "#BBE2B8",
      primaryGreen: "#59AC57",
      LINEAR_GRADIENT: ["#E5FFE2", "#CEFFCADE", "#E5FFE2"],
      Title: "Commodore",
    },
    bois: {
      placHoColor: "#5A8383",
      bgColor: "#E2FFFF",
      borderColor: "#5B9B9B",
      titleColor: "#00B7BA",
      sousTitle: "#50A697",
      homeIconColor: "#B8E2DF",
      primaryGreen: "#50A697",
      LINEAR_GRADIENT: ["#E0FEFCE3", "#C8FFFCDE", "#E0FEFCE3"],
      Title: "Bois",
    },
    freax: {
      placHoColor: "#837A5A",
      bgColor: "#FEFFE1",
      titleColor: "#F5BC39",
      borderColor: "#B9AF56",
      homeIconColor: "#E2DBB8",
      primaryGreen: "#D5AF67",
      LINEAR_GRADIENT: ["#FEFFE1E3", "#FEFFC7DE", "#FEFFE1E3"],
      Title: "Freax",
    },
    pandora: {
      placHoColor: "#835A7C",
      bgColor: "#FFEAF9",
      titleColor: "#B61282",
      borderColor: "#9B5B7A",
      homeIconColor: "#FFEAF9",
      primaryGreen: "#A6509D",
      LINEAR_GRADIENT: ["#FFE2F5E3", "#FFD0EFDE", "#FFE2F5E3"],
      Title: "Pandora",
    },
  };
  const Color = colors[type];
  return Color;
};

const useGlobalStyle = (type) => {
  const Colors = typeColor(type);
  return useMemo(
    () =>
      StyleSheet.create({
        Paragraph: {
          fontSize: TYPE_SIZES.FONT_SIZE_18,
          fontFamily: TYPE_FONT_Famliy.POPPINS_REGULAR,
          letterSpacing: 0.5,
          lineHeight: 30,
          textAlign: "center",
          color: Colors.placHoColor,
        },
        Title: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_30,
        },
        Subtitle: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_EXTRA_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_18,
        },
        User_N_G_C: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_SEMI_BOLD,
          fontSize: TYPE_SIZES.FONT_SIZE_24,
        },
      }),
    [type]
  );
};

export default useGlobalStyle;
