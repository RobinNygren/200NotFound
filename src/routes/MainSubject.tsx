import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GlobalSubjects } from "../state/GlobalStateContext";
import { SubjectCard } from "../components/SubjectCard/SubjectCard";

const MainSubject = () => {
  const { page } = useParams();
  const { state } = useContext(GlobalSubjects);

  const subjectData = state.mainSubjects.filter(
    (item) => item.link === `/${page}`
  );

  console.log(page, "page in MainSubject");
  console.log(subjectData, "subjectData for MainSubject");

  return (
    <>
      {subjectData.length > 0 ? (
        subjectData.map((data) => (
          <NavLink to={`/${page}/${data.type}`} key={data.mainSubject}>
            <SubjectCard
              imgSrc={data.image}
              info={data.info}
              subject={data.mainSubject}
            />
          </NavLink>
        ))
      ) : (
        <div>No subject found</div>
      )}
    </>
  );
};

export default MainSubject;
