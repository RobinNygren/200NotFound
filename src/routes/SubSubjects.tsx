import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalSubjects } from "../state/GlobalStateContext";
import { SubjectCard } from "../components/SubjectCard/SubjectCard";

const SubSubjects = () => {
  const { choice } = useParams();
  const { state } = useContext(GlobalSubjects);

  console.log(choice, "choice in SubSubjects");

  const subSubjectData = state.subSubjects.filter(
    (subject) => subject.specificType === choice
  );

  console.log(subSubjectData, "subSubjectData for SubSubjects");

  return (
    <>
      {subSubjectData.length > 0 ? (
        subSubjectData.map((subSubject) => (
          <SubjectCard
            key={subSubject.subSubject}
            imgSrc={subSubject.image}
            info={subSubject.info}
            subject={subSubject.subSubject}
          />
        ))
      ) : (
        <div>No subjects found for the chosen category</div>
      )}
    </>
  );
};

export default SubSubjects;
