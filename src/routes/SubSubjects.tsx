// Här lägger vi in mer specifik info om HeadSubjects, såsom länkar och info om olika vårdcentraler, nummer till 1177 etc. Eller tex för nöjen olika sporter ifall du valt sport som headSubject.
import { GlobalSubjects } from "../state/GlobalStateContext";
import { SubjectCard } from "../components/SubjectCard/SubjectCard";
import { useContext } from "react";

export const SubSubjects = () => {
  // Lägga en banner
  const { state } = useContext(GlobalSubjects);
  return (
    <>
      <div>
        {}
        {state.subSubjects.map((subject) => (
          <SubjectCard imgSrc={subject.sport} info="" subject="" />
        ))}
      </div>
    </>
  );
};
