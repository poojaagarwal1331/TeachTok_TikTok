import { StyleSheet } from "react-native";
import { horizontalScale, scaleFont, verticalScale } from "../../../utils/Responsive";
import { Colors } from "../../../utils";

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
    rowGap: verticalScale(5),
    paddingHorizontal: horizontalScale(10)
  },
  titleStyle: {
    color: Colors.white,
    fontSize: scaleFont(15),
    fontWeight: '600'
  },
  descriptionStyle: {
    color: Colors.white,
    fontSize: scaleFont(12),
    fontWeight: '700'
  }
});

export default styles;
