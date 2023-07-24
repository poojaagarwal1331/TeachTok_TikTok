import { ApiConstants } from "../../constants";
import { getRequest } from "../services/Apiservices/HttpCoreService";
import { RevealAnswerRequest } from "./types";

const callFollowingDataAPI = async () => {
  const tempPlayload = {
    url: `${ApiConstants.following}`
  }
  return getRequest({ ...tempPlayload });
}

const callForYouDataAPI = async () => {
  const tempPlayload = {
    url: `${ApiConstants.foryou}`
  }
  return getRequest({ ...tempPlayload });
}

const callRevealAnswerAPI = async ({ id }: RevealAnswerRequest) => {
  const tempPlayload = {
    url: `${ApiConstants.revealAnswer}?id=${id}`
  }
  return getRequest({ ...tempPlayload });
}

export {
  callFollowingDataAPI,
  callForYouDataAPI,
  callRevealAnswerAPI
};
