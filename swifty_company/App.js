import { StyleSheet } from "react-native";
import { TYPE_GRADIENTS } from "./styles/base.styles";
import { LinearGradient } from "expo-linear-gradient";
import Login from "./screens/Login";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Input from "./components/Input";
import UserCarad from "./components/userCard";
import AvatarButton from "./components/atoms/avatarButton";
import { View } from "react-native";
import HomeIcon from "./components/atoms/icons/homeIcon";
import HomeButton from "./components/atoms/homeButton";
import LogoTeam from "./components/atoms/icons/logoTeam";
import { typeColor } from "./styles/global.styles";
import HomePage from "./screens/Home";
import Profile from "./screens/Profile";
export default function App() {
  const type = "pandora";
  const Colors = typeColor(type);
  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <LinearGradient colors={Colors.LINEAR_GRADIENT} style={styles.container}>
      {/* <Login type={type} /> */}
      {/* <Input type={type} /> */}
      {/* <UserCarad type={type} error={false} /> */}
      {/* <AvatarButton type={type} /> */}
      {/* <HomeButton type={type} /> */}
      {/* <LogoTeam Color={Colors.titleColor} /> */}
      {/* <HomePage type={type} /> */}
      <Profile type={type} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
