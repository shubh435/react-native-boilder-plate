import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ChevronRightSmallIconProps {
  size?: number;
  color?: string;
}

const ChevronRightSmallIcon = ({size = 24, color = '#000000'}: ChevronRightSmallIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronRightSmallIcon;
