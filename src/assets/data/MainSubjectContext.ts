import { createContext } from "react";
// import { SongType } from "../Types/SongTypes";
// import { uuid } from 'uuidv4';

import { mainSubjectTypes } from "../../types/types";

export const initialMainSubjects: mainSubjectTypes[] = [
  {
    mainSubject: "Sport",
    image:
      "https://st3.depositphotos.com/3591429/18305/i/450/depositphotos_183057156-stock-photo-sports-tools-green-grass-concept.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "nöjen",
  },
  {
    mainSubject: "Badplatser",
    image:
      "https://www.sjoriketskane.se/wp-content/uploads/2017/07/170607_10-53-e1518607087560.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "nöjen",
  },
  {
    mainSubject: "Djurparken",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Savannen.JPG/1200px-Savannen.JPG",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "nöjen",
  },
  {
    mainSubject: "Mat och dryck",
    image:
      "https://www.allaaktiviteter.se/wp-content/uploads/2020/05/mat-och-dryck-1.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "nöjen",
  },

  {
    mainSubject: "Sjukhus",
    image:
      "https://sas.vgregion.se/contentassets/bf2f11fdeb6a47e2af7f60aa5cdc3361/cropped-vgr16-sc384sc384s20entrc3a9202015_03381.jpg?w=1200&h=675&mode=crop&anchor=topcenter",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/vård-och-omsorg",
    type: "vård",
  },
  {
    mainSubject: "Vårdcentral",
    image:
      "https://www.tiohundra.se/globalassets/mediaflow/hallstviksvc_var_sommar_host/",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/vård-och-omsorg",
    type: "vård",
  },
  {
    mainSubject: "1177",
    image:
      "https://storage.googleapis.com/gcp-bloggse-storage/574/574364/1177_vardguiden1470x810_noga-kopia_5a32d9ef9606ee0183f211fe.png",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/vård-och-omsorg",
    type: "vård",
  },
];

export const MainSubjectContext = createContext([] as any);
