import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
export interface ActionButtonsProps {
  onCommentPress?: () => void;
  onBookmarkPress?: () => void;
  onSharePress?: () => void;
  onFlipPress?: () => void;
  onHeartPress?: () => void;
  onProfilePress?: () => void;
  isFollowingScreen: boolean;
}
export interface ActionItemProps {
  onPress?: () => void;
  icon: ImageSourcePropType;
  containerStyle: StyleProp<ViewStyle>
};
