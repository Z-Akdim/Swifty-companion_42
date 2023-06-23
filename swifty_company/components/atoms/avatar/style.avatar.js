import { StyleSheet } from "react-native";
import {
  TYPE_SIZES,
  TYPE_FONT_Famliy,
  TYPE_PORDER_RADIUS,
} from "../../../styles/base.styles";
const Styles = StyleSheet.create({
  containerAvatar: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0699AD",
  },
  userNameStyle: {
    color: "#fff",
    fontSize: TYPE_SIZES.FONT_SIZE_24,
    textTransform: "uppercase",
    fontFamily: TYPE_FONT_Famliy.POPPINS_MEDIUM,
  },
  imageAvatarStyle: {
    width: "100%",
    height: "100%",
    borderRadius: TYPE_PORDER_RADIUS.BORDER_RADIUS_50,
  },
});

export default Styles;
