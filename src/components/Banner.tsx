import BannerImg from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="min-h-screen bg-white font-jakarta">
      <div className="mx-auto flex w-full max-w-304 flex-col items-center gap-8 px-4 py-16 lg:flex-row">
        <div className="w-full lg:w-174">
          <h1 className="font-inter text-5xl font-bold leading-tight text-[#0F172A] text-[30px] text-center lg:text-left lg:text-6xl">
            Build Your Ideal
            <br />
            
            <span className="brand-gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="py-6  text-[14px] lg:text-lg lg:text-left text-center leading-relaxed text-[#475569]">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden lg:block" />
            compare them side by side, and put together the stack that fits your
            <br className="hidden lg:block" />
            next project.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm lg:justify-start">
           
            <button className="brand-gradient rounded-xl px-6 py-3 font-semibold text-white transition hover:scale-105">
              Explore Technologies
            </button>
            <button className="btn btn-outline border-[#E5E7EB] text-[#374151] rounded-lg px-6 transition hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full lg:w-122">
          <img
            alt="Development Stack"
            src={BannerImg}
            className="w-full rounded-lg transition-all duration-300 hover:scale-105"
        
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;