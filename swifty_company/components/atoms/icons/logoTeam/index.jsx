import { Svg, Path, Rect } from "react-native-svg";
import { typeColor } from "../../../../styles/global.styles";
const LogoTeam = (props) => {
  const { width = 70, height = 78, type } = props;
  const Colors = typeColor(type);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 89 98"
      fill={Colors.titleColor}
    >
      <Rect x="6" width="76" height="61" fill={Colors.titleColor} />
      <Path
        d="M43.7688 97.5888L6.21365 60.0048L82.0235 60.717L43.7688 97.5888Z"
        fill={Colors.titleColor}
      />
    </Svg>
  );
};

export default LogoTeam;
