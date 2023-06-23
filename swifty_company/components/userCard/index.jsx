import { View, Text, Image } from "react-native";
import useStyle from "./style.userCard";
import Avatar from "../atoms/avatar";
import img from "../../assets/tanjiro.jpg";
const UserCarad = (props) => {
  const { type, error } = props;
  const Styles = useStyle(type);

  return (
    <View style={Styles.containerUserCard}>
      <View style={Styles.contentUserCard}>
        {!error ? (
          <View style={Styles.childOne}>
            <Avatar
              firstName="zakaria"
              lastName="akdim"
              img={img}
              classNameAvatar={Styles.imageAvatarStyle}
            />
            <Text style={Styles.userNameStyle}>zakdim</Text>
          </View>
        ) : (
          <View style={Styles.popupstyle}>
            <Text style={Styles.popupTitle}>Oops!</Text>
            <Text style={Styles.sousTitle}>
              The user you are looking for is not here, Please check the name
              again
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default UserCarad;
