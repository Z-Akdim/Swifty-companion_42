import { StyleSheet } from "react-native";
import { useMemo } from "react";
import {
  TYPE_PORDER_RADIUS,
  TYPE_FONT_Famliy,
  TYPE_SIZES,
} from "../../styles/base.styles";
import { typeColor } from "../../styles/global.styles";

const useStyles = (type) => {
  const Color = typeColor(type);
  return useMemo(
    () =>
      StyleSheet.create({
        inputContainerStyle: {
          borderStyle: "solid",
          borderWidth: 1,
          marginHorizontal: 37,
          height: 60,
          borderRadius: TYPE_PORDER_RADIUS.BORDER_RADIUS_5,
          backgroundColor: Color.bgColor,
          borderColor: Color.borderColor,
        },
        inputStyle: {
          fontFamily: TYPE_FONT_Famliy.POPPINS_REGULAR,
          fontSize: TYPE_SIZES.FONT_SIZE_16,
          color: Color.placHoColor,
        },

        leftIconContainerStyle: { marginHorizontal: 7 },
        containerStyle: {
          paddingRight: 0,
          paddingLeft: 0,
        },
        placeholderTextColor: {
          color: Color.placHoColor,
        },
      }),
    [type]
  );
};

export default useStyles;
