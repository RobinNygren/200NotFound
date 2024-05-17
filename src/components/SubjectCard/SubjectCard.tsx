type SubjectCardProps = { imgSrc: any; subject: string; info: string };

export const SubjectCard = ({ imgSrc, subject, info }: SubjectCardProps) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-xl border border-gray-300 m-4  bg-color-scheme-primary ">
        <img className="w-full" src={imgSrc} alt={subject} />
        <div className="px-6 py-4">
          <h1 className="font-bold text-white text-xl mb-2">{subject}</h1>
          <p className="text-white text-base">{info}</p>
        </div>
      </div>
    </>
  );
};
