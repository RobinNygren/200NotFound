import { createContext, ReactNode, useReducer } from "react";
import {
  initialMainSubjects,
  initialSubSubjects,
} from "../assets/data/initialData";
import {
  mainSubjectTypes,
  subSubjectTypes,
  GlobalContextType,
} from "../types/types";

export const initialSubjects: GlobalContextType = {
  subSubjects: initialSubSubjects,
  mainSubjects: initialMainSubjects,
};

export const GlobalSubjects = createContext<{
  state: GlobalContextType;
}>({
  state: initialSubjects,
});

export const GlobalSubjectsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state] = useReducer((state: GlobalContextType, action: any) => {
    switch (action.type) {
      default:
        return state;
    }
  }, initialSubjects);

  return (
    <GlobalSubjects.Provider value={{ state }}>
      {children}
    </GlobalSubjects.Provider>
  );
};

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
