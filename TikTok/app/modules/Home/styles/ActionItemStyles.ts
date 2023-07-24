import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
import { moderateScale, verticalScale } from "../../../utils/Responsive";

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
    height: verticalScale(350),
    width: moderateScale(40),
    rowGap: verticalScale(20)
  },
  profileActionButtonStyle: {
    borderRadius: 15,
    width: moderateScale(30),
    height: moderateScale(30),
    borderWidth: 1,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionImageStyle: {
    resizeMode: 'cover'
  },
  flipActionButtonStyle: {
    borderRadius: 22.5,
    width: moderateScale(45),
    height: moderateScale(45),
    backgroundColor: Colors.flipActionButtonColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButtonStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;