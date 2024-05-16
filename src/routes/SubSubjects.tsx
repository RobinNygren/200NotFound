// Här lägger vi in mer specifik info om HeadSubjects, såsom länkar och info om olika vårdcentraler, nummer till 1177 etc. Eller tex för nöjen olika sporter ifall du valt sport som headSubject.

export const SubSubjects = () => {
  const data = [
    {
      title: "Nöjen",
      description:
        "Utforska olika nöjesaktiviteter och evenemang för att roa dig och koppla av.",
    },
    {
      title: "Myndigheter",
      description:
        "Få information om olika myndigheter och deras funktioner för att underlätta din vardag och förstå dina rättigheter.",
    },
  ];
  return (
    <>
      <div>
        <SubjectCard imgSrc={""} info="" subject="" />
      </div>
    </>
  );
};
