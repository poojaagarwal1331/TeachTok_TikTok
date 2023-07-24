import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getFollowingData, getForYouData, getRevealAnswer } from '../../../redux/Home/service';
import { Segments } from '../../../constants/Enum';

export const useHomeHook = () => {
  const [selectedOption, setSelectedOption] = useState<Segments>(Segments.following);
  const [prevForYouId, setPrevForYouId] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const { followingDataList, forYouDataList } = useAppSelector(state => state.homeData);

  const fetchForYouData = useCallback(async () => {
    const action = await dispatch(getForYouData());
    const forYouData = action.payload;
    if (forYouData?.id && forYouData.id !== prevForYouId) {
      dispatch(getRevealAnswer({ id: forYouData.id }));
      setPrevForYouId(forYouData.id);
    }
  }, [dispatch, prevForYouId]);

  useEffect(() => {
    dispatch(getFollowingData());
    fetchForYouData();
  }, [dispatch, fetchForYouData]);

  const getMoreFollowingData = () => {
    dispatch(getFollowingData());
  };

  const getMoreForYouData = () => {
    fetchForYouData();
  };

  const handleOptionChange = (option: Segments) => {
    setSelectedOption(option);
  };

  return {
    selectedOption,
    followingDataList,
    forYouDataList,
    handleOptionChange,
    getMoreFollowingData,
    getMoreForYouData,
  };
};
