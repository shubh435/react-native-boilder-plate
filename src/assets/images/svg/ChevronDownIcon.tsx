import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ChevronDownIconProps {
  size?: number;
  color?: string;
  style?: any;
}

const ChevronDownIcon = ({
  size = 24,
  color = '#000000',
  style,
}: ChevronDownIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <Path
        d="M6 9L12 15L18 9"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronDownIcon;
