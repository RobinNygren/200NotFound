// Här lägger vi in mer specifik info om HeadSubjects, såsom länkar och info om olika vårdcentraler, nummer till 1177 etc. Eller tex för nöjen olika sporter ifall du valt sport som headSubject.

import { useParams } from "react-router-dom";
import { SubjectDetails } from "../components/SubjectDetails/SubjectDetails";

export const SubSubjects = () => {
  // const {key} = useParams();
  // const data = [
  //   {
  //     img: "insert IMG here",
  //     title: "Sport",
  //     description: "Här kan du spela olika sporter",
  //   },
  // ];

  // const details = placeholderJSON.some(
  //   (placeholder) => placeholder.key === key
  // );

  return (
    <>
      <div>
        <SubjectDetails />
      </div>
    </>
  );
};
