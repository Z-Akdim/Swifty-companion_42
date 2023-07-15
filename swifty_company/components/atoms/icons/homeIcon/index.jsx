import { Svg, Path } from "react-native-svg";
const HomeIcon = (props) => {
  const { width = 45, height = 45, Color } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 45 39" fill={Color}>
      <Path
        d="M22.0483 0L0 16.5362H5.51207V38.5845H16.5362V27.5603H27.5603V38.5845H38.5845V16.3708L44.0966 16.5362L22.0483 0Z"
        fill={Color}
      />
    </Svg>
  );
};
export default HomeIcon;
