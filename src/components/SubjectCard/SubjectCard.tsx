type SubjectCardProps = { imgSrc: string; subject: string; info: string };

export const SubjectCard = ({ imgSrc, subject, info }: SubjectCardProps) => {
  return (
    <div className="w-60 bg-white shadow-lg rounded-lg overflow-hidden mx-2">
      <div
        className="flex justify-center items-center mb-4"
        style={{ minHeight: "200px" }}
      >
        <img
          src={imgSrc}
          alt={subject}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-center p-4">
        <h1 className="text-xl font-semibold text-gray-800 truncate mb-2">
          {subject}
        </h1>
        <p className="text-gray-600">{info}</p>
      </div>
    </div>
  );
};
