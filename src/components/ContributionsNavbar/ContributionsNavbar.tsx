// ContributionsNavbar.tsx
type ContributionsNavbarProps = {
  selectedYear: number;
  onYearChange: (year: number) => void;
};

const years = [2025, 2024, 2023, 2022, 2021];

const ContributionsNavbar: React.FC<ContributionsNavbarProps> = ({ selectedYear, onYearChange }) => {
  return (
    <nav className="text-gray-400 text-[13px] flex flex-col gap-y-2">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={`hover:bg-white/15 background-blur-sm w-28 h-[34px] pr-14 rounded-lg ${
            selectedYear === year ? "bg-blue-600" : ""
          } ${ selectedYear === year ? "text-white" : "text-gray-300"}`}
        >
          {year}
        </button>
      ))}
    </nav>
  );
};

export default ContributionsNavbar;
