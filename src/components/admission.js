import React from "react";

const Admission = () => {
  return (
    <div className="w-full rounded-xl p-4 bg-gradient-to-b from-black to-cs-gray  text-neutral-50 md:shadow-xl">
      <div className="grid grid-cols-5 grid-flow-row gap-4">
        <div className="col-span-3">
          <h1 className="text-base md:text-base font-medium tracking-wide text-cs-orange md:text-xl">
            Admission Information
          </h1>
        </div>
        <div className="col-span-2">
          <h1 className="text-base md:text-base font-medium tracking-wide text-cs-orange md:text-xl">
            Date
          </h1>
        </div>

        <div className="col-span-3">Application forms available</div>
        <div className="col-span-2">until 23 March 2022</div>

        <div className="col-span-3">Induction Program (Online)</div>
        <div className="col-span-2">26 March 2022</div>

        <div className="col-span-3">Intensive Courses</div>
        <div className="col-span-2">28 March - 13 May 2022</div>

        <div className="col-span-3">Registration Period</div>
        <div className="col-span-2">31 May - 1 June 2022</div>

        <div className="col-span-3 text-cs-yellow">Class begins</div>
        <div className="col-span-2 text-cs-yellow">6 June 2022</div>
      </div>
    </div>
  );
};

export default Admission;
