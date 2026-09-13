import TechnologyCard from "./TechnologyCard";
import DevStack from "./DevStack";
import { use, useState } from "react";
import type { ITechnology } from "../types/technology";
import { toast } from "react-toastify";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([])
  const technologies = use(technologiesPromise);


  const handleSelectedStack = (selectedTechnology: ITechnology) => {
    if (selectedStack.includes(selectedTechnology)) {
      toast.warning(`${selectedTechnology.name} stack already added`);
    } else {
      setSelectedStack([...selectedStack, selectedTechnology])
      toast.success(`${selectedTechnology.name} stack added successfully`);
    }
  }

  const handleRemoveSelectedStack = (revomveStack: ITechnology) => {
    const selectStack = selectedStack.filter((stack) => stack.id !== revomveStack.id);
    setSelectedStack(selectStack);

    toast.info(`${revomveStack.name} removed from your stack!`);
  }

  const handleRemoveAllStack = () => {
    setSelectedStack([])
    toast.warning(`Removed all from your stack!`);
  }

  return (
    <section className="bg-white font-jakarta">
      <div className="mx-auto w-full max-w-304 px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#0F172A] text-[24px] text-center lg:text-left lg:text-5xl">
            Explore the{" "}
            <span className="brand-gradient-text">
              Technologies
            </span>
          </h1>
          <p className="mt-2 tx-[12] lg:text-lg lg:text-left text-center text-[#64748B]">
            Pick one technologyto build your ideal stack.
          </p>
        </div>
        <div className="flex flex-col gap-8 xl:flex-row">
          <div className="w-full xl:w-228 grid flex-1 grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              technologies.map((technology) => <TechnologyCard
                key={technology.id}
                technology={technology}
                handleSelectedStack={handleSelectedStack}
                isSelected={selectedStack.some((stack) => stack.id === technology.id)}
              />)
            }
          </div>
          <aside className="w-full xl:w-76">
            <div className="rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-[#0F172A]">
                  Your Stack
                </h2>
                <p className="mt-1 text-sm text-[#94A3B8]">
                  {
                    selectedStack.length === 0 ? ("No technologies selected yet") : (`${selectedStack.length} Technology Selected `)
                  }
                </p>
              </div>
              <div className="space-y-2">
                {
                  selectedStack.map((technology) => <DevStack
                    key={technology.id}
                    stack={technology}
                    handleRemoveSelectedStack={handleRemoveSelectedStack}
                  />)
                }
              </div>
              {
                selectedStack.length === 0 ? (

                  <div className="mt-6 flex h-20 items-center justify-center rounded-2xl border-2 border-dashed border-[#E2E8F0] bg-[#FAFAFA]">
                    <p className="text-md font-medium text-[#94A3B8]">
                      Your stack is empty.
                    </p>
                  </div>

                ) : (

                  <button
                    onClick={handleRemoveAllStack}
                    className="mt-12 w-full cursor-pointer rounded-lg border border-[#C2413B] bg-white py-2 text-sm font-semibold text-[#C2413B] transition hover:bg-[#FFF5F5]"
                  >
                    Remove All
                  </button>

                )
              }
            </div>
          </aside>

        </div>

      </div>
    </section>
  );
};

export default Technologies;