import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, Line } from 'react-native-svg';

interface CalendarIconProps {
  size?: number;
  color?: string;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({
  size = 80,
  color = '#FFFFFF',
}) => {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* Calendar body */}
        <Rect
          x={3}
          y={4}
          width={18}
          height={18}
          rx={2}
          stroke={color}
          strokeWidth={2}
        />
        {/* Top hooks */}
        <Line
          x1={8}
          y1={2}
          x2={8}
          y2={6}
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Line
          x1={16}
          y1={2}
          x2={16}
          y2={6}
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
        />
        {/* Header divider */}
        <Line x1={3} y1={10} x2={21} y2={10} stroke={color} strokeWidth={2} />
        {/* Grid dots - row 1 */}
        <Rect x={7} y={13} width={2} height={2} rx={0.5} fill={color} />
        <Rect x={11} y={13} width={2} height={2} rx={0.5} fill={color} />
        <Rect x={15} y={13} width={2} height={2} rx={0.5} fill={color} />
        {/* Grid dots - row 2 */}
        <Rect x={7} y={17} width={2} height={2} rx={0.5} fill={color} />
        <Rect x={11} y={17} width={2} height={2} rx={0.5} fill={color} />
        <Rect x={15} y={17} width={2} height={2} rx={0.5} fill={color} />
      </Svg>
    </View>
  );
};

export default CalendarIcon;
