type SubjectCardProps = { imgSrc: any; subject: string; info: string };

export const SubjectCard = ({ imgSrc, subject, info }: SubjectCardProps) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl">{subject}</h1>
        <img src={imgSrc} alt="" />
        <p>{info}</p>
      </div>
    </>
  );
};
