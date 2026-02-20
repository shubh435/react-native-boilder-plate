import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface AwardIconProps {
  size?: number;
  color?: string;
}

const AwardIcon = ({size = 24, color = '#000000'}: AwardIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle
        cx={12}
        cy={8}
        r={7}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default AwardIcon;
