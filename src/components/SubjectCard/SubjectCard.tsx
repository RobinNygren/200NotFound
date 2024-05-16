type SubjectCardProps = { imgSrc: any; subject: string; info: string };

export const SubjectCard = ({ imgSrc, subject, info }: SubjectCardProps) => {
  return (
    <>
      <div>
        <h1>{subject}</h1>
        <img src={imgSrc} alt="" />
        <p>{info}</p>
      </div>
    </>
  );
};
