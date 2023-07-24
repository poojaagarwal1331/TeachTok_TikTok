import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ActionType } from "../../constants";
import { callFollowingDataAPI, callForYouDataAPI, callRevealAnswerAPI } from "./Api";
import { RevealAnswerRequest } from "./types";

const getFollowingData = createAsyncThunk(
  ActionType.following, async () => {
    try {
      const response = await callFollowingDataAPI();
      return response?.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log('error in followingData', error?.response);
    }
  }
)

const getForYouData = createAsyncThunk(
  ActionType.foryou, async () => {
    try {
      const response = await callForYouDataAPI();
      return response?.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log('error in forYouData', error?.response);
    }
  }
)

const getRevealAnswer = createAsyncThunk(
  ActionType.revealAnswer, async (payload: RevealAnswerRequest) => {
    try {
      const response = await callRevealAnswerAPI(payload);
      return response?.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log('error in revealAnswer', error?.response);
    }
  }
)

export {
  getFollowingData,
  getForYouData,
  getRevealAnswer
};
