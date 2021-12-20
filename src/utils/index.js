import {Dimensions, Platform, PixelRatio} from 'react-native';
import { colors } from './colors';

export const getIndicatorIconColor = indicator => {
  switch (indicator) {
    case 1:
      return colors.blue;
    case 2:
      return colors.green;
    case 3:
      return colors.yellow;
    case 4:
      return colors.purple;
    default:
      return colors.green;
  }
};

export const indicatorFormatter = (value, unit) => {};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
