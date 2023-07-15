import { Pressable, Text, View } from "react-native";
import Styles from "./style.login";

const Login = (props) => {
  const { type } = props;
  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <Text style={Styles.title}>Swifty Company</Text>
        <Text style={[Styles.Paragraph1, Styles.m_h]}>
          swifty make it easy to know all information about students 42 network
          that you need
        </Text>
        <Pressable
          style={Styles.button}
          onPress={() => console.log("go to intra login")}
        >
          <Text style={{ color: "white" }}>login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
