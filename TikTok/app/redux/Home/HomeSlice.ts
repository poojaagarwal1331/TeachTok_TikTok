import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getFollowingData, getForYouData, getRevealAnswer } from "./service";
import { FollowingData, ForYouData, HomeData, RevealAnswerData } from "./types";

const initialState: HomeData = {
  loading: false,
  success: false,
  followingDataList: [],
  forYouDataList: [],
  revealAnswersList: []
}

const homeSlice = createSlice({
  name: 'Home',
  initialState: initialState,
  reducers: {
    clearHomeData: () => initialState,
    updateRatings: (state, action) => {
      state.followingDataList = state.followingDataList.map(item => {
        if (item?.id === action.payload?.id) {
          return {
            ...item,
            rating: action?.payload?.rating
          };
        } else {
          return item;
        }
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getFollowingData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getFollowingData.fulfilled, (state, action: PayloadAction<FollowingData>) => {
      state.loading = false;
      state.success = true;
      const data = action.payload;
      // Check if the data is not already in the list before adding it
      if (!state.followingDataList.some(item => item?.id === data?.id)) {
        state.followingDataList.push(data);
      }
    });

    builder.addCase(getFollowingData.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getForYouData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getForYouData.fulfilled, (state, action: PayloadAction<ForYouData>) => {
      state.loading = false;
      state.success = true;
      const data = action.payload;

      // Check if the data is not already in the list before adding it
      if (!state.forYouDataList.some(item => item?.id === data?.id)) {
        state.forYouDataList.push(data);

        // If the "Reveal Answer" data for the same id is available, add it to the "For You" data
        const revealAnswerData = state.revealAnswersList.find(item => item?.id === data?.id);
        if (revealAnswerData) {
          data.revealAnswer = revealAnswerData;
        }
      }
    });

    builder.addCase(getForYouData.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getRevealAnswer.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getRevealAnswer.fulfilled, (state, action: PayloadAction<RevealAnswerData>) => {
      state.loading = false;
      state.success = true;
      const data = action.payload;
      // Check if the data is not already in the list before adding it
      if (!state.revealAnswersList.some(item => item?.id === data?.id)) {
        state.revealAnswersList.push(data);

        // Find the corresponding "For You" data with the same id
        const forYouData = state.forYouDataList.find(item => item?.id === data?.id);
        if (forYouData) {
          forYouData.revealAnswer = data;
        }
      }
    });

    builder.addCase(getRevealAnswer.rejected, (state) => {
      state.loading = false;
    });
  }
}
);

const { reducer } = homeSlice;

export const {
  clearHomeData,
  updateRatings
} = homeSlice.actions;

export default reducer;
