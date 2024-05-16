import IconPrototype from "/IconPrototype.svg";

// type SubjectDetailsProp = {
//   title: string;
//   description: string;
// };

export const SubjectDetails = () => {
  return (
    <>
      <div className="flex justify-between p-6 h-4/6">
        <div className="flex items-center justify-between mb-4">
          <img src={IconPrototype} alt="" className="mr-4" />
        </div>
        <div className="h-48">
          <h1 className="text-xl font-bold mb-10">Här är titeln</h1>
          <h2 className="text-lg mb-40">Här är description</h2>
          <h2 className="text-lg">Här är länkarna</h2>
        </div>
        <div className="mb-4"></div>
        <div></div>
      </div>
    </>
  );
};
