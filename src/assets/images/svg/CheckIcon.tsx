import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface CheckIconProps {
  size?: number;
  color?: string;
}

const CheckIcon = ({size = 24, color = '#FFFFFF'}: CheckIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 6L9 17L4 12"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CheckIcon;
