// Här lägger vi in cards för varje sub heading, alltså t.ex: Vård, Nöje etc.
import { useContext } from "react";
import { SubjectCard } from "../components/SubjectCard/SubjectCard";
import { GlobalSubjects } from "../state/GlobalStateContext";
import { mainSubjectTypes } from "../types/types";
import { useParams } from "react-router-dom";

type MainSubjectProps = {
  subject: string;
};

export const MainSubject = () => {
  const { page } = useParams();

  const { state } = useContext(GlobalSubjects);
  return (
    <>
      {state.mainSubjects.map((subject: mainSubjectTypes) => (
        <SubjectCard
          imgSrc={subject.image}
          info={subject.info}
          subject={subject.mainSubject}
        />
      ))}
      <button onClick={() => console.log(page, "useparams")}>click</button>
    </>
  );
};
