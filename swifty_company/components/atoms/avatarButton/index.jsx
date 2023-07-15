import { View } from "react-native";
import useStyle from "./style.avatarButton";
import { Image } from "react-native";
import img from "../../../assets/tanjiro.jpg";
import HomeIcon from "../icons/homeIcon";
const AvatarButton = (props) => {
  const { type } = props;
  const Styles = useStyle(type);
  return (
    <View style={Styles.containerAvatarButton}>
      <Image source={img} style={Styles.ImageButton} />
    </View>
  );
};

export default AvatarButton;
