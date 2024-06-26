import { StyleSheet } from "react-native";
import {
  TYPE_SIZES,
  TYPE_FONT_Famliy,
  TYPE_PORDER_RADIUS,
} from "./../../styles/base.styles";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: TYPE_SIZES.FONT_SIZE_30,
    fontFamily: TYPE_FONT_Famliy.POPPINS_BOLD,
    color: "black",
  },
  m_h: {
    marginHorizontal: 20,
  },
  button: {
    width: 171,
    height: 67,
    backgroundColor: "black",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: TYPE_PORDER_RADIUS.BORDER_RADIUS_10,
  },
  Paragraph1: {
    fontSize: TYPE_SIZES.FONT_SIZE_18,
    fontFamily: TYPE_FONT_Famliy.POPPINS_REGULAR,
    letterSpacing: 0.5,
    lineHeight: 30,
    textAlign: "center",
    color: "black",
  },
});

export default Styles;
