import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { GlobalSubjects } from "../state/GlobalStateContext";
import { SubjectCard } from "../components/SubjectCard/SubjectCard";

const SubSubjects = () => {
  const { choice, page } = useParams();
  const { state } = useContext(GlobalSubjects);

  console.log(choice, "choice in SubSubjects");

  const subSubjectData = state.subSubjects.filter(
    (subject) => subject.type === page && subject.specificType === choice
  );

  console.log(subSubjectData, "subSubjectData for SubSubjects");

  return (
    <>
      {subSubjectData.length > 0 ? (
        subSubjectData.map((subSubject) => (
          <NavLink
            key={subSubject.subSubject}
            to={`/${page}/${choice}/${subSubject.subSubject}`}
          >
            <SubjectCard
              imgSrc={subSubject.image}
              info={subSubject.info}
              subject={subSubject.subSubject}
            />
          </NavLink>
        ))
      ) : (
        <div>No subjects found for the chosen category</div>
      )}
    </>
  );
};

export default SubSubjects;
