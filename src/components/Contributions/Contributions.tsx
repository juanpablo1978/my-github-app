import image2021 from "../../assets/2021print.png"
import image2022 from "../../assets/2022print.png"
import image2023 from "../../assets/contributors23.png"
import image2024 from "../../assets/2024-print.png"
import image2025 from "../../assets/2025print.png"

//https://chatgpt.com/c/68602e7c-f720-800e-b98a-0e50cd870869

type ContributionsProps = {
  year: number;
};

const imageByYear: Record<number, string> = {
  2021: image2021,
  2022: image2022,
  2023: image2023,
  2024: image2024,
  2025: image2025,
};

const Contributions: React.FC<ContributionsProps> = ({ year }) => {
  return (
    <article className="w-[355px] h-[190px] lg:w-[725px] lg:h-[175px] border border-gray-500 rounded-md p-4 flex flex-col">
      <div className="overflow-x-auto flex h-[140px] items-center text-[12px] font-semibold" style={{ scrollbarColor: "#707070 #404040" }}>
        <div className="text-white flex flex-col gap-y-2 mr-1">
          <span>Mon</span>
          <span>Wen</span>
          <span>Fri</span>
        </div>
        <div>
          <div className="flex text-white gap-x-[29px] mb-[1px] lg:gap-x-[35px]">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
          <div className="object-cover h-24 w-[575px] lg:w-[645px]">
            <img className="w-full h-full object-cover" src={imageByYear[year]} alt={`Contributions ${year}`} />
          </div>
        </div>
      </div>
      <div className="flex text-[11px] gap-x-[3px] items-center mt-2 font-medium lg:justify-between lg:px-4">
        <div>
          <a href="https://docs.github.com/es/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile">
            <p className="mr-[6px] hover:text-blue-500">Learn how we count contributions</p>
          </a>
        </div>
        <div className="flex gap-x-[3px] items-center">
          <p>Less</p>
          <span className="w-[11px] h-[11px] bg-white/15 rounded-sm inline-block"></span>
          <span className="w-[11px] h-[11px] bg-green-950 rounded-sm inline-block"></span>
          <span className="w-[11px] h-[11px] bg-green-800 rounded-sm inline-block"></span>
          <span className="w-[11px] h-[11px] bg-green-600 rounded-sm inline-block"></span>
          <span className="w-[11px] h-[11px] bg-green-400 rounded-sm inline-block"></span>
          <p>More</p>
        </div>
      </div>
    </article>
  );
};

export default Contributions;
