import { createContext } from "react";
// import { uuid } from 'uuidv4';
import { subSubjectTypes } from "../../types/types";

export const initialSubSubjects: subSubjectTypes[] = [
  {
    subSubject: "Sport",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    image: "",
  },
];

export const SongContext = createContext([] as any);
