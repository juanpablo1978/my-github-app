import { useState } from "react";
import Contributions from "../Contributions/Contributions";
import { IoMdArrowDropdown } from "react-icons/io";

const years = [2025, 2024, 2023, 2022, 2021];

const ContributorsSection = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setIsMobileMenuOpen(false); // cerrar menú en mobile
  };

  return (
    <section className="flex gap-6 relative">
 
      {/* CONTRIBUTIONS */}
      <div className="flex flex-col">
        <h3 className="text-white mb-2 text-[16px] font-medium">
          74 contributions in the last year
        </h3>
        <Contributions year={selectedYear} />
      </div>

           {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex">
        <nav className="text-white text-[14px] flex flex-col gap-y-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => handleYearChange(year)}
              className={`hover:bg-white/15 background-blur-sm w-28 h-[34px] pr-14 rounded-lg ${
                selectedYear === year ? "bg-blue-600" : ""
              }`}
            >
              {year}
            </button>
          ))}
        </nav>
      </div>

      {/* MOBILE NAVBAR BUTTON */}
      <div className="lg:hidden flex justify-end pr-4 mt-6 cursor-pointer relative right-[139px] top-[220px] z-20">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-28 h-8 rounded-md border-[1px] border-gray-500 bg-white/15 background-blur-sm 
          flex justify-center items-center"
        >
          <p className="text-gray-400">
            Year
          </p>
          <span className="text-white pl-1">
            <IoMdArrowDropdown />
          </span>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="absolute right-6 top-[280px] z-10">
          <article className="text-white text-[14px] w-[200px] h-[190px] bg-black flex flex-col gap-y-4
            rounded-lg border-[1px] border-gray-500 p-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`hover:bg-white/15 background-blur-sm w-[180px] h-[34px] pr-20 rounded-lg ${
                  selectedYear === year ? "bg-blue-600" : ""
                }`}
              >
                {year}
              </button>
              
            ))}
          </article>
        </div>
      )}
    </section>
  );
};

export default ContributorsSection;
