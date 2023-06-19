import { Text, View } from "react-native";
import Styles from "./style.login";
import useStyle from "../../styles/global.styles";
const Login = () => {
  const styles = useStyle();
  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <Text style={Styles.title}>Swifty Company</Text>
        <Text style={[styles.Paragraph, Styles.m_h]}>
          swifty make it easy to know all information about students 42 network
          that you need
        </Text>
      </View>
    </View>
  );
};

export default Login;
