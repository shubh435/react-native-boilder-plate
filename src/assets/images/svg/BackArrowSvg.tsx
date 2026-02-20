import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface BackArrowSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const BackArrowSvg: React.FC<BackArrowSvgProps> = ({
  width = 24,
  height = 24,
  color = '#1DB954',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 12H5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 19L5 12L12 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackArrowSvg;
