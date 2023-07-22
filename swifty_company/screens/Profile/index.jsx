import { View, Text, Image } from "react-native";
import useStyle from "./style.profile";
import img from "../../assets/Commodore_BG.jpg";
import { typeColor } from "../../styles/global.styles";
import ProfileCard from "../../components/profileCard";
import { LinearGradient } from "expo-linear-gradient";
const Profile = (props) => {
  const { type } = props;
  const Styles = useStyle(type);
  const Colors = typeColor(type);
  return (
    <View style={Styles.profileContainerStyle}>
      <View style={Styles.navBarStyle}>
        <Image source={img} style={{ width: "100%", height: "100%" }} />
      </View>
      <LinearGradient
        colors={Colors.LINEAR_GRADIENT}
        style={Styles.profileContentStyle}
      >
        <ProfileCard type={type} />
        <View style={{ flex: 1 }}></View>
      </LinearGradient>
    </View>
  );
};

export default Profile;
