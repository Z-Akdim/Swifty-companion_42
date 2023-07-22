import { View, Text } from "react-native";
import useStyle from "./style.levelPercentage";

const LevelPercentage = (props) => {
  const { type, percentage } = props;
  const Styles = useStyle(type, percentage);
  return (
    <View style={Styles.levelStyleContainer}>
      <View style={Styles.levelPercentageContent}></View>
      <View style={Styles.containerTextStyle}>
        <Text style={Styles.textLevelStyle}>level 10 - 50%</Text>
      </View>
    </View>
  );
};

export default LevelPercentage;
