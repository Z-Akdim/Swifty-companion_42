import { View, Text } from "react-native";
import useStyle from "./style.home";
import Input from "../../components/Input";
import UserCarad from "../../components/userCard";
import LogoTeam from "../../components/atoms/icons/logoTeam";
import { typeColor } from "../../styles/global.styles";
import AvatarButton from "../../components/atoms/avatarButton";
const HomePage = (props) => {
  const { type } = props;
  const Styles = useStyle(type);
  const Colors = typeColor(type);
  return (
    <View style={Styles.HomeContainer}>
      <View style={Styles.HeaderContainer}>
        <View style={{ alignItems: "center", position: "relative" }}>
          <View
            style={{
              width: 44,
              height: 48,
              backgroundColor: "red",
              position: "absolute",
              zIndex: 999,
              // top: 50,
              bottom: 35,
            }}
          ></View>
          <LogoTeam type={type} height={110} width={100} />
        </View>
        <Text style={Styles.logoTitleStyle}>{Colors.Title}</Text>
      </View>
      <View style={Styles.HomeContent}>
        <View style={Styles.searchTestContainer}>
          <Text style={Styles.startSearchStyle}>Start Search</Text>
        </View>
        <View style={Styles.InputViewStyle}>
          <Input type={type} />
        </View>
        <View>
          <UserCarad type={type} error={true} />
        </View>
      </View>
      <View style={Styles.AvatarBStyle}>
        <AvatarButton type={type} />
      </View>
    </View>
  );
};

export default HomePage;
