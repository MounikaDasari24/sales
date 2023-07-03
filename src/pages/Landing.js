import Content from "../components/Content";

const Landing = () => {
  return (
    <div className="relative bg-surfaces-primary-surface shadow-[20px_20px_80px_rgba(0,_0,_0,_0.14)] w-full h-[1024px] overflow-hidden flex flex-row items-center justify-start gap-[117px] text-left text-17xl text-neutrals-grey-100 font-body-l-semibold">
      <div className="w-[710px] overflow-hidden shrink-0 flex flex-col items-center justify-center bg-[url(/public/illustration@3x.png)] bg-cover bg-no-repeat bg-[top] mix-blend-normal rounded-none">
        <div className="bg-gray-200 w-[710px] h-[1024px] overflow-hidden shrink-0 flex flex-col py-[115px] px-[72px] box-border items-end justify-end mix-blend-normal rounded-none">
          <div className="self-stretch relative leading-[44px]">
            <span>{`Empowering Sales Success with ToMoBo  by `}</span>
            <span className="font-extrabold text-gainsboro">Metaphy Labs!</span>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default Landing;
