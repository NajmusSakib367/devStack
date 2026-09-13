import type { ITechnology } from "../types/technology";

interface TechnologyCardProps {
  technology: ITechnology,
  isSelected:boolean,
  handleSelectedStack: (technology: ITechnology)=> void
}

const TechnologyCard = ({ technology, isSelected, handleSelectedStack }: TechnologyCardProps) => {


  return (
    <div className=
    {`"w-full max-w-[320px] rounded-3xl border ${isSelected ? "border-[#C95A7B]" : "border-[#E5E7EB]"} bg-white p-5 shadow-sm"`}>
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />
        <span className="rounded-full border border-[#F3D6D6] bg-[#FFF7F7] px-3 py-1 text-sm font-medium text-[#C95A5A]">
          {technology.badge}
        </span>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-[#0F172A]">
          {technology.name}
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#64748B]">
          {technology.description}
        </p>
      </div>
      <div className="my-5 border-t border-[#E5E7EB]" />
      <div className="flex items-center justify-between text-sm">
        <span className="rounded-md bg-[#F1F5F9] px-3 py-1.5 text-[#64748B]">
          {technology.category}
        </span>
        <span className="text-[#64748B]">
          {technology.difficulty}
        </span>
        <span className="flex items-center gap-1 font-medium text-[#475569]">
          <span className="text-[#F59E0B]">★</span>
          {technology.rating}
        </span>
      </div>
      <button
        onClick={()=>handleSelectedStack(technology)}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300
          ${isSelected? "bg-[#F8F5F7] text-[#C95A7B]" : "bg-[#111827] text-white hover:scale-[1.02] hover:shadow-lg cursor-pointer"}`
        }
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;