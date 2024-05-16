import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalSubjects } from "../../state/GlobalStateContext";

const SubSubjectDetail = () => {
  const { subSubject } = useParams();
  const { state } = useContext(GlobalSubjects);

  const subSubjectData = state.subSubjects.find(
    (subject) => subject.subSubject === subSubject
  );

  if (!subSubjectData) {
    return <div>No data found for {subSubject}</div>;
  }

  return (
    <div>
      <h1>{subSubjectData.subSubject}</h1>
      <img src={subSubjectData.image} alt={subSubjectData.subSubject} />
      <p>{subSubjectData.info}</p>
    </div>
  );
};

export default SubSubjectDetail;
