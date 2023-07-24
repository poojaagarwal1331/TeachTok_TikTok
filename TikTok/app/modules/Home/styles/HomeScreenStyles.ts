import { StyleSheet } from "react-native";
import { scaleFont } from "../../../utils/Responsive";
import { Colors } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  iconContainer: {
    padding: 10
  },
  tab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.transparent
  },
  selectedTab: {
    borderBottomColor: Colors.white,
  },
  tabText: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    color: Colors.grey
  },
  selectedTabText: {
    color: Colors.white
  },
  content: {
    flexGrow: 1,
  }
});

export default styles;