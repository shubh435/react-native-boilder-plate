import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface MailIconProps {
  size?: number;
  color?: string;
}

const MailIcon = ({size = 24, color = '#6B7280'}: MailIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x={3}
        y={5}
        width={18}
        height={14}
        rx={2}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 7L12 13L21 7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MailIcon;
