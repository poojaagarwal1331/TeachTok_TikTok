import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const Icons = {
  bookmarkIcon: resolveAssetSource(require('./icons/bookmark/bookmark.png')),
  commentIcon: resolveAssetSource(require('./icons/comments/comments.png')),
  profileIcon: resolveAssetSource(require('./icons/profile/profileIcon.png')),
  profileWithoutPlus: resolveAssetSource(require('./icons/profile/profileIconWithoutPlus.png')),
  heartIcon: resolveAssetSource(require('./icons/heart/heart.png')),
  shareIcon: resolveAssetSource(require('./icons/share/share.png')),
  searchIcon: resolveAssetSource(require('./icons/search/searchIcon.png')),
  homeTabBarIcon: resolveAssetSource(require('./icons/TabBar/home/home_tabBar.png')),
  activityTabBarIcon: resolveAssetSource(require('./icons/TabBar/activity/activity_tabBar.png')),
  bookmarkTabBarIcon: resolveAssetSource(require('./icons/TabBar/bookmark/bookmark_tabBar.png')),
  discoverTabBarIcon: resolveAssetSource(require('./icons/TabBar/discover/discover_tabBar.png')),
  profileTabBarIcon: resolveAssetSource(require('./icons/TabBar/profile/profile_tabBar.png')),
  timerIcon: resolveAssetSource(require('./icons/timer/timerIcon.png')),
  rightArrow: resolveAssetSource(require('./icons/rightArrow/rightArrow.png')),
  playlistIcon: resolveAssetSource(require('./icons/playlist/playlistIcon.png')),
  flipIcon: resolveAssetSource(require('./icons/flip/flip.png')),
  correctAnswerGif: resolveAssetSource(require('./icons/correctAnswer/correctAnswer.gif')),
  wrongAnswerGif: resolveAssetSource(require('./icons/wrongAnswer/wrongAnswer.gif'))
};

export default Icons;
