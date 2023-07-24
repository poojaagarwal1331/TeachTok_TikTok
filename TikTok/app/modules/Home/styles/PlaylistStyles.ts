import { StyleSheet } from "react-native";
import { width } from "../../../utils/Responsive";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: width,
    flexDirection: 'row',
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  playlistIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain'
  },
  text: {
    color: 'white',
    fontSize: 13,
    marginLeft: 5
  },
  rightArrow: {
    height: 20,
    width: 7,
    resizeMode: 'contain'
  },
  dot: {
    fontWeight: 'bold'
  },
  playlistContainerStyle: {
    flexDirection: 'row'
  }
});

export default styles;
