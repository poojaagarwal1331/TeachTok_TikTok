import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils';
import { horizontalScale, scaleFont, verticalScale } from '../../../utils/Responsive';

const styles = StyleSheet.create({
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  timerIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    marginRight: horizontalScale(5),
    resizeMode: 'contain'
  },
  timerText: {
    fontSize: scaleFont(16),
    color: Colors.white,
  },
});

export default styles;
