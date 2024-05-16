import { mainSubjectTypes, subSubjectTypes } from "../../types/types";

export const initialMainSubjects: mainSubjectTypes[] = [
  {
    mainSubject: "Sport",
    image:
      "https://www.boras.se/upplevaochgora/senior/halsaochlevnadsvanor/fysiskaktivitet.4.4c20058116c7af11d002b5a3.html",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "sport",
  },
  {
    mainSubject: "Badplatser",
    image: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "bad",
  },
  {
    mainSubject: "Djurparken",
    image: "",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto cumque reiciendis, laboriosam odit voluptas, nesciunt soluta illo unde exercitationem magni. Aut facilis ut ipsam tempora ducimus! Animi, officiis odio!",
    link: "/nöjen-och-aktiviteter",
    type: "djur",
  },
  {
    mainSubject: "Mat och dryck",
    image: "",
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
    image: "",
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
