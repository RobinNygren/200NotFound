// Här lägger vi in cards för varje sub heading, alltså t.ex: Vård, Nöje etc.
import { useContext } from "react";
import { SubjectCard } from "../components/SubjectCard/SubjectCard";
import { GlobalSubjects } from "../state/GlobalStateContext";
import { mainSubjectTypes } from "../types/types";
import { NavLink, useParams } from "react-router-dom";
import { MenuItem } from "@headlessui/react";

type MainSubjectProps = {
  subject: string;
};

export const MainSubject = () => {
  const { page, choice } = useParams();

  const { state } = useContext(GlobalSubjects);

  const subjectData = state.mainSubjects.filter(
    (item: any) => item.link === `/${page}`
  );

  console.log(subjectData, "subjectdata");

  return (
    <>
      {subjectData.length > 0 ? (
         <div className="flex flex-wrap justify-center items-center mt-48">
        {subjectData.map((data: any) => (
          <NavLink to={`/${page}/${data.type}`} key={data.mainSubject}>
            <div className="p-3">
            <SubjectCard
              imgSrc={data.image}
              info={data.info}
              subject={data.mainSubject}
            />
            </div>
          </NavLink>
        ))}
        </div>
      ) : (
        <div>No subject found</div>
      )}
    </>
  );
};


