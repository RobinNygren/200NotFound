type SubjectCardProps = { imgSrc: string; subject: string; info: string };

export const SubjectCard = ({ imgSrc, subject, info }: SubjectCardProps) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src={imgSrc} alt={subject} />
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2">{subject}</h1>
          <p className="text-gray-700 text-base">{info}</p>
        </div>
      </div>
    </>
  );
};
