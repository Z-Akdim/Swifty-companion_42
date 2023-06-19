import { StyleSheet } from "react-native";
import { TYPE_SIZES, TYPE_FONT_Famliy } from "./../../styles/base.styles";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  content: {
    flex: 1,
    marginHorizontal: 30,
    alignItems: "center",
  },
  title: {
    fontSize: TYPE_SIZES.FONT_SIZE_36,
    fontFamily: TYPE_FONT_Famliy.POPPINS_BOLD,
  },
  m_h: {
    marginHorizontal: 54,
  },
});

export default Styles;
