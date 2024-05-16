// Här lägger vi in mer specifik info om HeadSubjects, såsom länkar och info om olika vårdcentraler, nummer till 1177 etc. Eller tex för nöjen olika sporter ifall du valt sport som headSubject.
import { GlobalSubjects } from "../state/GlobalStateContext";
import { SubjectCard } from "../components/SubjectCard/SubjectCard";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const SubSubjects = () => {
  // Lägga en banner
  const { state } = useContext(GlobalSubjects);
  const { choice } = useParams();

  const specificTypes = ["bad", "sport"]; // replace with your specific types

  const filteredSubSubjects = state.subSubjects.filter(
    (subject) =>
      subject.type === choice && specificTypes.includes(subject.specificType)
  );
  console.log(filteredSubSubjects, "filtered");

  return (
    <>
      {filteredSubSubjects.length > 0 ? (
        filteredSubSubjects.map((data: any) => (
          <SubjectCard
            imgSrc={data.image}
            info={data.info}
            subject={data.mainSubject}
          />
        ))
      ) : (
        <div>No subject found</div>
      )}
    </>

    // <>
    //   <div>
    //     {filteredSubSubjects.length > 0 ? (
    //       filteredSubSubjects.map((subject) => (
    //         <SubjectCard
    //           imgSrc={subject.image}
    //           info={subject.info}
    //           subject={subject.subSubject}
    //         />
    //       ))
    //     ) : (
    //       <div>No subSubjects found</div>
    //     )}
    //   </div>
    // </>
  );
};
