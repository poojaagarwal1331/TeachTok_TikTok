import { StyleSheet } from "react-native";
import { GlobalMetrics, getNewSize, height, horizontalScale, moderateScale, scaleFont, scaleHeight, verticalScale } from "../../../utils/Responsive";
import { Colors } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height - (GlobalMetrics.isIos ? scaleHeight(120) : scaleHeight(50)),
    width: '100%'
  },
  gradientContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: scaleFont(24),
    color: Colors.white,
    fontWeight: 'bold'
  },
  actionContainer: {
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(20),
    paddingRight: GlobalMetrics.isIos ? getNewSize(10) : moderateScale(15)
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(20),
    rowGap: verticalScale(10)
  },
  bottomSubContainerStyle: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: verticalScale(10),
    rowGap: verticalScale(10)
  },
  answerContainerStyle: {
    paddingTop: verticalScale(10),
    rowGap: verticalScale(20)
  },
  lineStyle: {
    height: verticalScale(1),
    backgroundColor: Colors.white,
    width: '85%'
  },
  answerHeadingStyle: {
    color: Colors.answerTextColor,
    fontSize: scaleFont(13),
    fontWeight: '800'
  },
  answerStyle: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: scaleFont(21)
  },
  ratingTextStyle: {
    alignSelf: 'center',
    color: Colors.white,
    fontWeight: '600',
    fontSize: 17
  },
  ratingContainerStyle: {
    borderRadius: 8,
    width: moderateScale(50),
    height: moderateScale(50),
    justifyContent: 'center'
  },
  selectedRatingTextStyle: {
    alignSelf: 'center',
    color: Colors.white,
    fontWeight: '600',
    fontSize: scaleFont(17)
  },
  selectedRatingContainerStyle: {
    borderRadius: 8,
    flex: 1,
    height: verticalScale(50),
    justifyContent: 'center'
  },
  ratingMainContainerStyle: {
    flexDirection: 'row',
    columnGap: horizontalScale(10)
  },
  ratingHeadingStyle: {
    paddingTop: verticalScale(10),
    color: Colors.white,
    fontWeight: '400',
    fontSize: scaleFont(15)
  },
  ratingViewStyle: {
    rowGap: verticalScale(10)
  }
});

export default styles;
