import IconPrototype from "/IconPrototype.svg";

// type SubjectDetailsProp = {
//   title: string;
//   description: string;
// };
export const SubjectDetails = () => {
  return (
    <>
      <div className="flex justify-center p-6">
        <div className="flex flex-col items-center">
          <img src={IconPrototype} alt="" className="mb-4" />
          <div className="text-center">
            <h1 className="text-xl font-bold mb-10">Här är titeln</h1>
            <p className="text-lg mb-10 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              labore ipsa laudantium corrupti, minus rerum? Sunt iure error iste
              totam nostrum, excepturi a aliquid reprehenderit atque cupiditate,
              dignissimos nam tempore. Lorem ipsum dolor sit amet, consectetur
            </p>
            <h2 className="text-lg">Här är länkarna</h2>
          </div>
        </div>
      </div>
    </>
  );
};
