import { createContext } from "react";
import { initialMainSubjects } from "../assets/data/MainCategoryContext";
import { initialSubSubjects } from "../assets/data/SubCategoryContext";
// import { initialSongs } from "../data/SongContext";
// import { SongType } from "../Types/SongTypes";
// import { Action } from "../Types/ReducerTypes";
import { SubSubjects } from "../routes/SubCategory";
import { MainSubject } from "../routes/MainCategory";
import { mainSubjectTypes, subSubjectTypes } from "../types/types";

type GlobalContextType = {
  subSubjects: subSubjectTypes[];
  mainSubjects: mainSubjectTypes[];
};

export const initialSubjects: GlobalContextType = {
  subSubjects: initialSubSubjects,
  mainSubjects: initialMainSubjects,
};

export const GlobalSubjects = createContext<{
  state: GlobalContextType;
}>({
  state: initialSubjects,
});

// import { createContext } from "react";
// // import { GlobalState, Action } from "../types/types";

// export const initialState = {};

// export const GlobalStateContext = createContext<{
//   state: GlobalState;
//   dispatch: React.Dispatch<Action>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });
