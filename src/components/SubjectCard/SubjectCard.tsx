type SubjectCardProps = { imgSrc: any; subject: any; info: string };

export const SubjectCard = ({ imgSrc, subject, info }: SubjectCardProps) => {
  return (
    <>
      <div className="flex">
        <h1>{subject}</h1>
        <img src={imgSrc} alt={imgSrc} />
        <p>{info}</p>
      </div>
    </>
  );
};
