import { mainSubjectTypes, subSubjectTypes } from "../../types/types";

export const initialMainSubjects: mainSubjectTypes[] = [
  {
    mainSubject: "Sport",
    image:
      "https://media.istockphoto.com/id/1195696200/sv/vektor/bollar-f%C3%B6r-fotboll-rugby-baseball-och-andra-sporter.jpg?s=612x612&w=0&k=20&c=qLtE0pB7Wzj-gAbULGhls29C24AtAqmi9sE_JJQEWQg=",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "sport",
  },
  {
    mainSubject: "Badplatser",
    image:
      "https://www.boras.se/images/18.12bf08d215c19e09dfacc5b1/1495554027557/72dpi_rammsjon_badplats_foto_anna.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "bad",
  },
  {
    mainSubject: "Djurparken",
    image:
      "https://static-cdn.sr.se/images/95/3332011_2048_1152.jpg?preset=1024x576",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "djur",
  },
  {
    mainSubject: "Mat och dryck",
    image:
      "https://cms.dramaten.se/media/jvgnwege/paulikafe-t_0582.jpg?width=1920&height=1080&mode=crop",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "mat",
  },
];

export const initialSubSubjects: subSubjectTypes[] = [
  {
    subSubject: "Fotboll",
    info: "Information about football",
    image:
      "https://elfsborg.se/wp-content/uploads/2017/04/BB170403JJ013-770x530.jpg",
    type: "nöjen-och-aktiviteter",
    specificType: "sport",
  },
  {
    subSubject: "Basket",
    info: "Information about basketball",
    image:
      "https://imengine.gota.infomaker.io/?uuid=986e4f87-c567-5179-b6be-dbf5bd21a146&width=960&height=640&type=preview&source=false&q=90&z=100&x=0.045&y=0.000&crop_w=0.910&crop_h=1.000&function=cropresize",
    type: "nöjen-och-aktiviteter",
    specificType: "sport",
  },
  {
    subSubject: "Hockey",
    info: "Information about hockey",
    image:
      "https://www.borashockey.se/wp-content/uploads/2021/09/blank_blogg.jpg",
    type: "nöjen-och-aktiviteter",
    specificType: "sport",
  },
  {
    subSubject: "Almenäs",
    info: "Information about Almenäs",
    image:
      "https://www.boras.se/images/18.4f4814b215c171faa9349338/1495205883290/72dpi_almenas_badramp_foto_anna.jpg",
    type: "nöjen-och-aktiviteter",
    specificType: "bad",
  },
  {
    subSubject: "Kypesjön",
    info: "Information about Kypesjön",
    image:
      "https://www.boras.se/images/18.12bf08d215c19e09dfaa8055/1495469983322/72dpi_kype_badplats_foto_anna.jpg",
    type: "nöjen-och-aktiviteter",
    specificType: "bad",
  },
  {
    subSubject: "Rammsjön",
    info: "Information about Rammsjön",
    image:
      "https://www.boras.se/images/18.12bf08d215c19e09dfacce4d/1495555180099/72dpi_rammsjon_badplats_foto_anna.jpg",
    type: "nöjen-och-aktiviteter",
    specificType: "bad",
  },
];
