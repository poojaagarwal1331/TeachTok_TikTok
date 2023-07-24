import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
import { GlobalMetrics, height, horizontalScale, moderateScale, scaleFont, verticalScale, width } from "../../../utils/Responsive";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: height - (GlobalMetrics.isIos ? verticalScale(120) : verticalScale(50)),
    width: width
  },
  questionSubContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: horizontalScale(20),
    rowGap: verticalScale(10),
  },
  imageBackground: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: scaleFont(24),
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: horizontalScale(10),
    lineHeight: 40
  },
  actionContainer: {
    justifyContent: 'flex-end'
  },
  optionsContainer: {
    justifyContent: 'flex-end',
  },
  option: {
    backgroundColor: Colors.white,
    marginTop: verticalScale(8),
    paddingVertical: verticalScale(10),
    borderRadius: 8,
    paddingHorizontal: horizontalScale(5),
    flexDirection: 'row',
    minHeight: verticalScale(60),
    columnGap: horizontalScale(10),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionText: {
    color: Colors.white,
    fontSize: scaleFont(20),
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1.5 },
    fontWeight: '600',
    left: horizontalScale(5),
    width: '85%'
  },
  gifStyle: {
    width: moderateScale(56),
    height: moderateScale(56),
    paddingRight: horizontalScale(8),
    transform: [{ rotate: '90deg' }],
    alignSelf: 'center',
    position: 'absolute',
    right: horizontalScale(5),
  },
  bottomContainerStyle: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: verticalScale(10),
    rowGap: verticalScale(10)
  },
  questionContainerStyle: {
    backgroundColor: Colors.forYouMainContainerColor,
    flex: 1,
    flexDirection: 'row'
  },
  transparentContainerStyle: {
    backgroundColor: Colors.transparentBackgroundColor,
    borderRadius: 10,
    padding: 5
  }
});

export default styles;
