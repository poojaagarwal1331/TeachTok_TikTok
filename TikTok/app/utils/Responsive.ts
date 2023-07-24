import { Dimensions, PixelRatio, Platform, type ScaledSize } from 'react-native';
import DeviceInfo from 'react-native-device-info';


const WINDOW_WIDTH: number = Dimensions.get('screen').width;

const WINDOW_HEIGHT: number = Dimensions.get('screen').height;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

const scale: number = WINDOW_WIDTH / guidelineBaseWidth;
const scaleH: number = WINDOW_HEIGHT / guidelineBaseHeight;

/**
 * Get the width and height of the device screen.
 * @returns {ScaledSize} - the width and height of the device screen.
 */
let { width, height }: ScaledSize = Dimensions.get('window');

if (width > height) {
  [width, height] = [height, width];
}

/**
 * @param size height value (in pixel)
 * @returns scaled Height Value based on the device Display size.
 */
export const scaleHeight = (size: number) => {
  const newSize = size * scaleH;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export function getNewSize(size: number): number {
  const aspectRatio = height / width;
  let newSize = size;
  if (aspectRatio > 1.77) {
    // Iphone 13
    newSize = size;
  } else if (aspectRatio > 1.6) {
    // Android pixel 2
    newSize = size * 0.85;
  } else if (aspectRatio > 1.329) {
    // iPhone Ipad Pro 12.9 inch 3rd gen
    return size * 0.9;
  } else {
    newSize = size * 1.5;
  }
  return newSize;
}

export const scaleFont = (size: number) => verticalScale(size);

/**
 * Converts provided width to based on provided guideline size width.
 * @param  {number} size The screen's width that UI element should cover
 * @return {number} The calculated scale depending on current device's screen width.
 */
export function horizontalScale(size: number, skipAspectRatio: boolean = false): number {
  const changeSize = skipAspectRatio ? size : getNewSize(size);
  return (width / guidelineBaseWidth) * changeSize;
}

/**
 * Converts provided height to based on provided guideline size height.
 * @param  {number} size The screen's height that UI element should cover
 * @return {number} The calculated vertical scale depending on current device's screen height.
 */
export function verticalScale(size: number, skipAspectRatio: boolean = false): number {
  const changeSize = skipAspectRatio ? size : getNewSize(size);
  return (height / guidelineBaseHeight) * changeSize;
}

/**
 * Converts provided size to based on provided guideline size width.
 * @param  {number} size - The size of the font you want to scale
 * @param {number} [factor=0.5] - The amount of scaling to apply to font sizes. Defaults to 0.5.
 * @return {number} The calculated moderate scale depending on current device's screen width.
 */
export function moderateScale(
  size: number,
  skipAspectRatio: boolean = false,
  factor = 0.5
): number {
  const changeSize = skipAspectRatio ? size : getNewSize(size);
  return changeSize + (horizontalScale(changeSize) - changeSize) * factor;
}

/**
 * A type that contains the global metrics for the current device.
 * @typedef {Object} GlobalMetricsType - A type that contains the global metrics for the current device.
 * @property {boolean} isAndroid - Whether the current device is an Android device.
 */
type GlobalMetricsType = {
  isAndroid: boolean;
  isIos: boolean;
  isTablet: boolean;
  isIphoneX: boolean;
  isLargeDisplay: boolean;
  behavior: { behavior: 'height' | 'padding' | 'position' | undefined } | {};
  headerHeight: number;
  extraScrollHeight: number;
};

/**
 * A type that contains the global metrics for the app.
 * @type {GlobalMetricsType}
 */
const isIos: boolean = Platform.OS === 'ios';
const isTablet: boolean =
  (Platform.OS === 'ios' && Platform.isPad) || DeviceInfo.getDeviceType() === 'Tablet';
export const isLargeDisplay: boolean = height > 750;

const isDensity780: boolean = height === 780 || width === 780;
const isDensity812: boolean = height === 812 || width === 812;
const isDensity844: boolean = height === 844 || width === 844;
const isDensity896: boolean = height === 896 || width === 896;
const isDensity926: boolean = height === 926 || width === 926;
const iphoneXDisplay: boolean =
  isDensity780 || isDensity812 || isDensity844 || isDensity896 || isDensity926;
const isIphoneX: boolean =
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV && iphoneXDisplay;

export const GlobalMetrics: GlobalMetricsType = {
  isAndroid: Platform.OS === 'android',
  isIos: isIos,
  isTablet: isTablet,
  isIphoneX: isIphoneX,
  isLargeDisplay: isLargeDisplay,
  behavior: isIos ? { behavior: 'padding' } : {},
  headerHeight: isTablet ? 36 : 50,
  extraScrollHeight: isTablet ? 150 : 70
};
export { height, width };

