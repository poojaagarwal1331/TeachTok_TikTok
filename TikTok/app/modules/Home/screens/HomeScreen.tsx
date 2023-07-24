import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Icons from '../../../assets';
import { Segments } from '../../../constants/Enum';
import { GlobalMetrics } from '../../../utils/Responsive';
import FollowingListItem from '../components/FollowingListItem';
import ForYouListItem from '../components/ForYouListItem';
import TimerView from '../components/TimerView';
import { useHomeHook } from '../hooks/useHomeHook';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = () => {
  const {
    selectedOption,
    followingDataList,
    forYouDataList,
    handleOptionChange,
    getMoreFollowingData,
    getMoreForYouData,
  } = useHomeHook();

  const [appStartTime, setAppStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    if (!appStartTime) {
      // Set the app start time when the component mounts
      setAppStartTime(Date.now());
    }

    const timer = setInterval(() => {
      // Update the elapsed time every second
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [appStartTime]);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TimerView elapsedTime={elapsedTime} />
        <TouchableOpacity
          onPress={() => handleOptionChange(Segments.following)}
          style={[styles.tab, selectedOption === Segments.following && styles.selectedTab]}
        >
          <Text style={[styles.tabText, selectedOption === Segments.following && styles.selectedTabText]}>
            Following
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOptionChange(Segments.foryou)}
          style={[styles.tab, selectedOption === Segments.foryou && styles.selectedTab]}
        >
          <Text style={[styles.tabText, selectedOption === Segments.foryou && styles.selectedTabText]}>
            For You
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
        >
          <Image source={Icons.searchIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {selectedOption === Segments.following ? (
          <FlatList
            data={followingDataList}
            renderItem={({ item }) => <FollowingListItem item={item} />}
            keyExtractor={item => item.id.toString()}
            onEndReached={getMoreFollowingData}
            onEndReachedThreshold={0.9}
            pagingEnabled={GlobalMetrics.isIos}
          />
        ) : (
          <FlatList
            data={forYouDataList}
            renderItem={({ item }) => <ForYouListItem item={item} />}
            keyExtractor={item => item.id.toString()}
            onEndReached={getMoreForYouData}
            onEndReachedThreshold={0.9}
            pagingEnabled={GlobalMetrics.isIos}
          />
        )}
      </View>
      {renderHeader()}
    </View>
  );
};

export default HomeScreen;
