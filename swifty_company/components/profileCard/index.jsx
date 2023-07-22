import { View, Text, Image } from "react-native";
import useStle from "./style.profileCard";
import imgP from "../../assets/tanjiro.jpg";
import FlechIcon from "../atoms/icons/flech";
import LevelPercentage from "../atoms/levelPercentage/levelPercentage";
const ProfileCard = (props) => {
  const { type } = props;
  let nbr = 20;
  const Styles = useStle(type);
  return (
    <View style={Styles.profileCardContainer}>
      <View style={Styles.childOne}>
        <Image source={imgP} style={Styles.imageProfile} />
        <View>
          <View style={Styles.nameLogoContainer}>
            <Text style={Styles.fullNameStyle}>Zakarya Akdim</Text>
            <View style={Styles.logoStyle}></View>
          </View>
          <Text style={Styles.userNameStyle}>@Zakdim</Text>
        </View>
      </View>
      <View style={Styles.childTow}>
        <View style={Styles.CTow_Bloc1}>
          <Text style={Styles.gradeStyle}>Grade : </Text>
          <Text style={Styles.typeGrade}>Member</Text>
        </View>
        <View style={Styles.CTow_Bloc2}>
          <Text style={Styles.gradeStyle}>Cursus : </Text>
          <View style={Styles.flechContent}>
            <Text style={Styles.typeGrade}>42Cursus</Text>
            <FlechIcon type={type} />
          </View>
        </View>
      </View>
      <View style={Styles.childThree}>
        <LevelPercentage type={type} percentage={`${nbr}%`} />
      </View>
    </View>
  );
};

export default ProfileCard;
