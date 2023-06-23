import Styles from "./style.avatar";
import { View, Text, Image } from "react-native";

const Avatar = (props) => {
  const { img, firstName, lastName, classNameAvatar } = props;
  return (
    <View style={[Styles.containerAvatar, classNameAvatar]}>
      {img ? (
        <Image style={Styles.imageAvatarStyle} source={img} />
      ) : (
        <Text style={Styles.userNameStyle}>
          {firstName[0]}
          {lastName[0]}
        </Text>
      )}
    </View>
  );
};

export default Avatar;
