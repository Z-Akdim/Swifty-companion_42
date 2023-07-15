import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { typeColor } from "../../styles/global.styles";

const useStyle = (type) => {
  const Colors = typeColor(type);
  return useMemo(() => StyleSheet.create({}), []);
};

export default useStyle;
