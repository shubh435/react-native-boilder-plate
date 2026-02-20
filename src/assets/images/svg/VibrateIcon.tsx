import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface VibrateIconProps {
  size?: number;
  color?: string;
}

const VibrateIcon = ({size = 24, color = '#000000'}: VibrateIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x={7}
        y={3}
        width={10}
        height={18}
        rx={2}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 8V16M21 8V16M1 12H3M21 12H23"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default VibrateIcon;
