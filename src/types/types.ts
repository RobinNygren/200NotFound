/* export type GlobalState = {};

export type Action = {
    | { type: "ADD_FAVORITE_BOOK"; payload:  }
  | { type: "REMOVE_FAVORITE_BOOK"; payload:  }
  | { type: "ADD_FAVORITE_AUTHOR"; payload:  }
  | { type: "REMOVE_FAVORITE_AUTHOR"; payload:  }
  | { type: "ADD_STATISTICS"; payload: };
};

export type GlobalStateProviderProp = {
    children: React.ReactNode;
};

export type ApiRespone = {

}; */

export type CarouselProps = {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  title: string;
};

export type CardProps = {
  src: string;
  alt?: string;
};

export type RenderCarouselProps = {
  images: { src: string; alt?: string; link: string }[];
};

export type subSubjectTypes = {
  subSubject: string;
  info: string;
  image: string;
  type: string;
  specificType: string;
};
export type mainSubjectTypes = {
  mainSubject: string;
  image: any;
  info: string;
  link: string;
  type: string;
};
