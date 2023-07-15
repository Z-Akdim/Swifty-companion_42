import { StyleSheet } from "react-native";
import {
  TYPE_PORDER_RADIUS,
  TYPE_SIZES,
  TYPE_FONT_Famliy,
} from "../../styles/base.styles";
import { typeColor } from "../../styles/global.styles";

const useStyle = (type) => {
  const Colors = typeColor(type);
  return StyleSheet.create({
    containerUserCard: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      marginHorizontal: 37,
    },
    contentUserCard: {
      width: "100%",
      borderRadius: TYPE_PORDER_RADIUS.BORDER_RADIUS_10,
      backgroundColor: Colors.bgColor,
      justifyContent: "center",
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    imageAvatarStyle: {
      alignItems: "center",
      justifyContent: "center",
      height: 70,
      width: 70,
      borderRadius: TYPE_PORDER_RADIUS.BORDER_RADIUS_50,
    },
    childOne: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    userNameStyle: {
      fontSize: TYPE_SIZES.FONT_SIZE_18,
      fontFamily: TYPE_FONT_Famliy.POPPINS_REGULAR,
      letterSpacing: 0.5,
      lineHeight: 30,
      textAlign: "left",
      color: Colors.placHoColor,
      textTransform: "capitalize",
      maxWidth: 165,
    },
    popupstyle: {
      alignItems: "center",
      marginHorizontal: 50,
    },
    popupTitle: {
      fontSize: TYPE_SIZES.FONT_SIZE_30,
      fontFamily: TYPE_FONT_Famliy.POPPINS_SEMI_BOLD,
      textAlign: "center",
      color: Colors.title,
    },
    sousTitle: {
      fontSize: TYPE_SIZES.FONT_SIZE_16,
      fontFamily: TYPE_FONT_Famliy.POPPINS_REGULAR,
      letterSpacing: 0.5,
      //   lineHeight: 30,
      textAlign: "center",
      color: Colors.placHoColor,
    },
  });
};

export default useStyle;
