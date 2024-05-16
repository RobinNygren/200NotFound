type SubjectCardProps = { imgSrc: any; subject: string; info: string };

export const SubjectCard = ({ imgSrc, subject, info }: SubjectCardProps) => {
  return (
    <>
    
      
        <h1 className="text-4xl">{subject}</h1>
        <img src={imgSrc} alt="" />
        <p className="p-3 ml-5 w-72">{info}</p>
        
    
      
    </>
  );
};
