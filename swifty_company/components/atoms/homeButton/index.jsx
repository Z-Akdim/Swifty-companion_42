import { View } from "react-native";
import HomeIcon from "../icons/homeIcon";
import useStyle from "./style.homeButton";
const HomeButton = (props) => {
  const { type } = props;
  const Styles = useStyle(type);
  return (
    <View style={Styles.containerHomeButton}>
      <HomeIcon Color={Styles.HomeColor.color} />
    </View>
  );
};

export default HomeButton;
