import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalSubjects } from "../../state/GlobalStateContext";

const MainSubjectDetail = () => {
  const { page } = useParams();
  const { state } = useContext(GlobalSubjects);

  const mainSubjectData = state.mainSubjects.find(
    (subject) => subject.link === `/${page}`
  );

  if (!mainSubjectData) {
    return <div>No data found for {page}</div>;
  }

  return (
    <div>
      <h1>{mainSubjectData.mainSubject}</h1>
      <img src={mainSubjectData.image} alt={mainSubjectData.mainSubject} />
      <p>{mainSubjectData.info}</p>
      <p>More detailed information about {mainSubjectData.mainSubject}...</p>
    </div>
  );
};

export default MainSubjectDetail;
