import { Svg, Path } from "react-native-svg";
import { typeColor } from "./../../../../styles/global.styles";

const FlechIcon = (props) => {
  const { type, width = 15, height = 18 } = props;
  const Colors = typeColor(type);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 21 14"
      fill={Colors.titleColor}
    >
      <Path
        d="M3.81818 0L0 3.81818L10.1818 14L20.3636 3.81818L16.5455 0L10.1818 6.36364L3.81818 0Z"
        fill={Colors.titleColor}
      />
    </Svg>
  );
};
export default FlechIcon;
