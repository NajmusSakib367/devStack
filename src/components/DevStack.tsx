import type { ITechnology } from "../../types/technology";
interface DevStackProps {
  stack: ITechnology,
  handleRemoveSelectedStack: (technology: ITechnology)=> void
}
const DevStack = ({stack, handleRemoveSelectedStack}:DevStackProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#E2E8F0] p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={stack.icon}
          alt={stack.name}
          className="h-8 w-8"
        />
        <div>
          <h3 className="text-sm font-semibold text-[#334155]">
            {stack.name}
          </h3>
          <p className="text-xs text-[#94A3B8]">
            {stack.category}
          </p>
        </div>
      </div>
      <button onClick={()=>handleRemoveSelectedStack(stack)} className="text-xl text-[#94A3B8] hover:text-red-500 cursor-pointer">
        ×
      </button>
    </div>
  );
};

export default DevStack;