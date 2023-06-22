import { View, Text, Image } from "react-native";
import useStyle from "./style.userCard";

const UserCarad = (props) => {
  const { type, error } = props;
  const Styles = useStyle(type);

  return (
    <View style={Styles.containerUserCard}>
      <View style={Styles.contentUserCard}>
        {!error ? (
          <View style={Styles.childOne}>
            <Image style={Styles.imageAvatarStyle} />
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
