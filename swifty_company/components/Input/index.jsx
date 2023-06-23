import { TextInput, View } from "react-native";
import useStyles from "./style.input";
import { Input as RNEInput } from "@rneui/base";
import SearchIcon from "../atoms/icons/searchIcon/index.jsx";

const Input = (props) => {
  const { type } = props;
  const Styles = useStyles(type);
  return (
    <RNEInput
      inputContainerStyle={Styles.inputContainerStyle}
      containerStyle={Styles.containerStyle}
      inputStyle={Styles.inputStyle}
      leftIconContainerStyle={Styles.leftIconContainerStyle}
      leftIcon={<SearchIcon type={type} />}
      placeholder="Enter user name"
      placeholderTextColor={Styles.placeholderTextColor.color}
    />
  );
};

export default Input;
