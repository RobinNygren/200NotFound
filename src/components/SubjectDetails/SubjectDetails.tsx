type SubjectDetailsProp = {
  title: string;
  description: string;
};

export const SubjectDetails = ({ title, description }: SubjectDetailsProp) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
};
