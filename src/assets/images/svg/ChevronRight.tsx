import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ChevronRightProps {
  size?: number;
  color?: string;
}

const ChevronRight: React.FC<ChevronRightProps> = ({
  size = 24,
  color = '#FFFFFF',
}) => {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M9 18L15 12L9 6"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default ChevronRight;
