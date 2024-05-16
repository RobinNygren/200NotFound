// Här lägger vi in mer specifik info om HeadSubjects, såsom länkar och info om olika vårdcentraler, nummer till 1177 etc. Eller tex för nöjen olika sporter ifall du valt sport som headSubject.

import { SubjectCard } from "../components/SubjectCard/SubjectCard";

export const SubSubjects = () => {
  const data = [
    {
      img: "insert IMG here",
      title: "Sport",
      description: "Här kan du spela olika sporter",
    },
  ];
  return (
    <>
      <div>
        {data.map((title) => (
          <SubjectCard
            imgSrc={title.img}
            info={title.description}
            subject={title.title}
          />
        ))}
      </div>
    </>
  );
};
