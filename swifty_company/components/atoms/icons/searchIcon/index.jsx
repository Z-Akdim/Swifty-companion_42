import { Svg, Path } from "react-native-svg";
import { typeColor } from "../../../../styles/global.styles";

export default function SearchIcon(props) {
  const { width = 40, height = 40 } = props;
  const fill = typeColor(props.type);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill={fill.borderColor}
    >
      <Path
        d="M29.976 27L24.451 27.176L33.95 36.778L36.778 33.95L29.976 27Z"
        fill={fill.borderColor}
      />
      <Path
        d="M24.313 27C22.525 28.256 20.351 29 18 29C11.925 29 7 24.075 7 18C7 11.925 11.925 7 18 7C24.075 7 29 11.925 29 18C29 20.659 28.056 23.098 26.485 25H31.261C32.368 22.909 33 20.53 33 18C33 9.716 26.284 3 18 3C9.716 3 3 9.716 3 18C3 26.284 9.716 33 18 33C22.903 33 27.243 30.637 29.98 27H24.313Z"
        fill={fill.borderColor}
      />
    </Svg>
  );
}
