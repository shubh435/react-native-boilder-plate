import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface InfoIconProps {
  size?: number;
  color?: string;
}

const InfoIcon = ({size = 24, color = '#000000'}: InfoIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16V12M12 8H12.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default InfoIcon;
