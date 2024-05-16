import { createContext } from "react";
// import { SongType } from "../Types/SongTypes";
// import { uuid } from 'uuidv4';

import { mainSubjectTypes } from "../../types/types";

export const initialMainSubjects: mainSubjectTypes[] = [
  {
    mainSubject: "Sport",
    image: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "nöjen",
  },
  {
    mainSubject: "Badplatser",
    image: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "nöjen",
  },
  {
    mainSubject: "Djurparken",
    image: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "nöjen",
  },
  {
    mainSubject: "Mat och dryck",
    image: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "nöjen",
  },

  {
    mainSubject: "Sjukhus",
    image: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/vård-och-omsorg",
    type: "vård",
  },
  {
    mainSubject: "Vårdcentral",
    image: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/vård-och-omsorg",
    type: "vård",
  },
  {
    mainSubject: "1177",
    image: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/vård-och-omsorg",
    type: "vård",
  },
];

export const MainSubjectContext = createContext([] as any);
