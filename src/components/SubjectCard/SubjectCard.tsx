type SubjectCardProps = { imgSrc: any; subject: string; info: string };

export const SubjectCard = ({ imgSrc, subject, info }: SubjectCardProps) => {
  return (
    <>
    
      <div className="flex flex-col justify-center items-center gap-5 border-color-scheme-primary border w-fit rounded-xl h-fit">
        <h1 className="text-4xl">{subject}</h1>
        <img src={imgSrc} alt="#" />
        <p className="p-3 ml-5 w-72">{info}</p>
        
      </div>
      
    </>
  );
};
