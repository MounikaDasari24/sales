import { useNavigate } from "react-router-dom";

const Failure = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/");
  };
  return (
    <div className="relative rounded-3xl bg-surfaces-primary-surface shadow-[20px_20px_80px_rgba(0,_0,_0,_0.14)] w-full h-[1024px] overflow-hidden text-left text-base text-neutrals-grey-100 font-body-l-semibold">
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl overflow-hidden mix-blend-normal">
        <img
          className="absolute top-[397px] left-[407px] w-[627px] h-[627px] object-cover"
          alt=""
          src="/m028t0154-a-icon-18sep22removebgpreview-1@2x.png"
        />
        <div className="absolute top-[396px] left-[calc(50%_-_143px)] rounded-3xs bg-forestgreen w-[286px] h-14 flex flex-row py-2 px-6 box-border items-center justify-center gap-[12px]">
          <img
            className="relative w-6 h-6 hidden"
            alt=""
            src="/alertcircle.svg"
          />
          <div
            className="absolute top-[396px] left-[calc(50%_-_143px)] rounded-3xs bg-forestgreen w-[286px] h-14 flex flex-row py-2 px-6 box-border items-center justify-center gap-[12px]"
            onClick={handleRetry}
          >
            <img
              className="relative w-6 h-6 hidden"
              alt=""
              src="/alertcircle.svg"
            />
          </div>
        </div>
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
            src="/metaphy.svg"
          />
        </div>
        <b className="absolute top-[252px] left-[calc(50%_-_490px)] text-29xl leading-[56px] flex text-neutrals-grey-10 text-center items-center justify-center w-[979px]">
          Hmm... Looks like some gremlins are not letting us connect to your
          calendar
        </b>
      </div>
      </div>
      );
};

      export default Failure;