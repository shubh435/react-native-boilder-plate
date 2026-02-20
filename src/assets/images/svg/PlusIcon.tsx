import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface PlusIconProps {
  size?: number;
  color?: string;
}

const PlusIcon = ({size = 24, color = '#FFFFFF'}: PlusIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 5V19M5 12H19"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon;
