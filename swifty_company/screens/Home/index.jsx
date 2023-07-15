import { View, Text } from "react-native";
import useStyle from "./style.home";
import Input from "../../components/Input";
import UserCarad from "../../components/userCard";
import LogoTeam from "../../components/atoms/icons/logoTeam";
const HomePage = (props) => {
  const { type } = props;
  const Styles = useStyle(type);
  return (
    <View>
      <View>
        <LogoTeam type={type} />
        <Text>commodore</Text>
      </View>
      <View></View>
      <View>
        <Input type={type} />
      </View>
      <View>
        <UserCarad type={type} error={false} />
      </View>
    </View>
  );
};

export default HomePage;
