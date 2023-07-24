export interface HomeData {
  loading: boolean;
  success: boolean;
  revealAnswersList: RevealAnswerData[];
  followingDataList: FollowingData[];
  forYouDataList: ForYouData[];
};

export interface RevealAnswerRequest {
  id?: number;
}

export interface RevealAnswerData {
  id?: number;
  correct_options?: CorrectOptionsList[];
}

export interface CorrectOptionsList {
  id?: string;
  answer?: string;
}

export interface ForYouData {
  type?: string;
  id: number;
  playlist?: string;
  description?: string;
  image?: string;
  question?: string;
  options?: OptionsList[];
  user?: UserData;
  revealAnswer?: RevealAnswerData;
}

export interface OptionsList {
  id?: string;
  answer?: string
}

export interface FollowingData {
  type?: string;
  id: string;
  playlist?: string;
  flashcard_front?: string;
  flashcard_back?: string;
  description?: string;
  user?: UserData;
  rating?: number;
}

export interface UserData {
  name?: string;
  avatar?: string;
}