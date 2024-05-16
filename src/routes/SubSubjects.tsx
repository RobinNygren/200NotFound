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
  const bad = state.subSubjects.filter(
    (subject) => subject.specificType === "bad"
  );
  const sport = state.subSubjects.filter(
    (subject) => subject.specificType === "sport"
  );
  //   const bad = state.subSubjects.some(
  //     (subject) => subject.specificType === "bad"
  //   );
  //   console.log(bad, "bad");

  return (
    <>
      <div>
        {state.subSubjects.map(
          (subSubject) =>
            subSubject.specificType === "sport" && (
              <SubjectCard
                imgSrc={subSubject.image}
                info={subSubject.info}
                subject={subSubject.subSubject}
              />
            )
        )}
      </div>
      <div>
        {state.subSubjects.map(
          (subSubject) =>
            subSubject.specificType === "bad" && (
              <SubjectCard
                imgSrc={subSubject.image}
                info={subSubject.info}
                subject={subSubject.subSubject}
              />
            )
        )}
      </div>
    </>
  );
  //   return (
  //     <>
  //       {sport.length > 0 ? (
  //         sport.map((data: any) => (
  //           <SubjectCard
  //             key={data.subSubject} // Remember to add a unique key
  //             imgSrc={data.image}
  //             info={data.info}
  //             subject={data.subSubject} // Use subSubject instead of mainSubject
  //           />
  //         ))
  //       ) : (
  //         <div>No subjects found for the chosen specific type and type</div>
  //       )}
  //       {bad.length > 0 ? (
  //         bad.map((data: any) => (
  //           <SubjectCard
  //             key={data.subSubject} // Remember to add a unique key
  //             imgSrc={data.image}
  //             info={data.info}
  //             subject={data.subSubject} // Use subSubject instead of mainSubject
  //           />
  //         ))
  //       ) : (
  //         <div>No subjects found for the chosen specific type and type</div>
  //       )}
  //     </>

  //     // <>
  //     //   <div>
  //     //     {filteredSubSubjects.length > 0 ? (
  //     //       filteredSubSubjects.map((subject) => (
  //     //         <SubjectCard
  //     //           imgSrc={subject.image}
  //     //           info={subject.info}
  //     //           subject={subject.subSubject}
  //     //         />
  //     //       ))
  //     //     ) : (
  //     //       <div>No subSubjects found</div>
  //     //     )}
  //     //   </div>
  //     // </>
  //   );
};
