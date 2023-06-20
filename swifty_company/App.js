import { StyleSheet } from "react-native";
import { TYPE_GRADIENTS } from "./styles/base.styles";
import { LinearGradient } from "expo-linear-gradient";
import Login from "./screens/Login";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Input from "./components/Input";
export default function App() {
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
    <LinearGradient
      colors={TYPE_GRADIENTS.LINEAR_GRADIENT_GREEN}
      style={styles.container}
    >
      {/* <Login /> */}
      <Input type="pandora" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
