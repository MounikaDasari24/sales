import { useState } from 'react';
const Success = () => {

  const [isButtonHighlighted, setButtonHighlighted] = useState(false);

  const handleButtonClick = () => {
    window.close();
  };

  const handleButtonHover = () => {
    setButtonHighlighted(true);
  };

  const handleButtonLeave = () => {
    setButtonHighlighted(false);
  };

  const buttonClassName = `relative tracking-[0.15px] leading-[24px] font-semibold ${isButtonHighlighted ? 'bg-mediumslateblue text-white' : 'text-mediumslateblue'
    }`;


  return (
    <div className="relative rounded-3xl bg-surfaces-primary-surface shadow-[20px_20px_80px_rgba(0,_0,_0,_0.14)] w-full h-[1024px] overflow-hidden text-center text-29xl text-neutrals-grey-10 font-body-l-semibold">
      <div className="absolute top-[0px] left-[calc(50%_-_40px)] h-[124px] flex flex-row items-end justify-start gap-[12px]">
        <div className="h-[170px] overflow-hidden flex flex-col items-center justify-end">
          <div className="relative w-20 h-[122.42px]">
            <div className="absolute top-[0px] left-[0px] w-20 h-[122.42px]">
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[5.72px] h-[122.42px]" />
              <div className="absolute top-[0px] left-[12px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[5.72px] h-[62.4px]" />
              <div className="absolute top-[101.46px] left-[12.38px] bg-mediumturquoise w-[5.72px] h-[20.96px]" />
              <div className="absolute top-[0px] left-[24.77px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[5.72px] h-[57.16px]" />
              <div className="absolute top-[107.18px] left-[24.77px] bg-mediumturquoise w-[5.72px] h-[15.24px]" />
              <div className="absolute top-[0px] left-[37.15px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[5.72px] h-[62.4px]" />
              <div className="absolute top-[101.46px] left-[37.15px] bg-mediumturquoise w-[5.72px] h-[20.96px]" />
              <div className="absolute top-[0px] left-[49.54px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[5.72px] h-[122.42px]" />
              <div className="absolute top-[0px] left-[61.9px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[5.72px] h-[122.42px]" />
              <div className="absolute top-[0px] left-[74.28px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[5.72px] h-[122.42px]" />
              <div className="absolute top-[66.69px] left-[12.38px] rounded-[50%] bg-mediumslateblue w-[30.49px] h-[30.49px]" />
            </div>
          </div>
        </div>
        <img
          className="relative w-[280.83px] h-[86.71px] hidden"
          alt=""
          src="/metaphy1.svg"
        />
      </div>
      <div className="absolute top-[228px] left-[161px] flex flex-col items-center justify-start gap-[24px]">
        <b className="relative leading-[44px] flex items-center w-[841px]">
          <span className="[line-break:anywhere] w-full">
            <span>{`That’s it! You’re ready to `}</span>
            <span className="bg-gradient-to-r from-[#6758ff] to-[#46d7d0] bg-clip-text text-transparent">
              ToMoBo!
            </span>
          </span>
        </b>
        <div className="relative text-5xl tracking-[0.15px] leading-[32px] font-medium text-neutrals-grey-20 flex items-center w-[1118px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">{`Take a deep breath and relax ❤️ `}</p>
            <p className="m-0">
              ToMoBo will join your meetings as and when you schedule one.
            </p>
          </span>
        </div>
      </div>
      <img
        className="absolute top-[480px] left-[458px] w-[525px] h-[525px] object-cover"
        alt=""
        src="/blowing-rocket-3d-cartoon-style-iconremovebgpreview-1@2x.png"
      />
      <div className="absolute top-[408px] left-[calc(50%_-_143px)] rounded-3xs box-border w-[286px] h-14 flex flex-row py-2 px-6 items-center justify-center gap-[12px] text-left text-base text-mediumslateblue border-[2px] border-solid border-mediumslateblue">
        <img
          className="relative w-6 h-6 hidden"
          alt=""
          src="/alertcircle1.svg"
        />
        <div
          className={buttonClassName}
          onClick={handleButtonClick}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Close this window
        </div>
        <img
          className="relative w-6 h-6 hidden"
          alt=""
          src="/alertcircle1.svg"
        />
      </div>
    </div>
  );
};

export default Success;
