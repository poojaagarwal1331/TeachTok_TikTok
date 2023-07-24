import { ImageSourcePropType } from "react-native";
import { Segments } from "../../../constants/Enum";
export interface SegmentProps {
  segment: Segments;
  heading: string;
  icon: ImageSourcePropType;
};
