import React from "react";

const Members = () => {
  const data_student = [
    { carne: "5090-22-1172", name: "VICTOR MANUEL MONJE OXLAJ" },
    { carne: "5090-22-3700", name: "ELMER DANIEL PÉREZ AVILA" },
    { carne: "5090-22-2434", name: "RAMIRO JOSÉ INTERIANO ORANTES " },
    { carne: "5090-22-3128", name: "DAVID ANTONIO MÉNDEZ ESTRADA " },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 m-4">
      {data_student.map((link, index) => {
        return (
          <figure
            key={index}
            className="flex flex-col items-center justify-center bg-green-100 rounded-xl p-5 w-full h-32"
          >
            <div className="pt-4 text-center space-y-1">
              <figcaption className="font-medium">
                <div className="text-lg">{link.name}</div>
                <div className="text-slate-700 dark:text-slate-500">
                  {link.carne}
                </div>
              </figcaption>
            </div>
          </figure>
        );
      })}
    </div>
  );
};

export default Members;
