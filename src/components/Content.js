import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isUserAuthenticatedState } from '../atom';
import { getGoogleUrl, handleLogin } from "../utils/auth";
const Content = () => {

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    if (accessToken !== null) {
      localStorage.setItem('token', accessToken);
      handleLogin(accessToken);
      setIsUserAuthenticated(true);
      navigate("/");
    }
  }, []);

  const [isUserAuthenticated, setIsUserAuthenticated] = useRecoilState(isUserAuthenticatedState);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const redirectToGoogle = async () => {
    try {
      const googleUrl = await getGoogleUrl();
      window.location.href = googleUrl;
    } catch (error) {
      console.log("Failed to get Google URL:", error);
      // Handle the error if needed
    }
  };

  const redirectToMicrosoft = () => {
    window.location.href = "https://www.microsoft.com";
  };

  return (
    <div className="w-[496px] flex flex-col items-start justify-start gap-[40px] text-left text-base text-neutrals-grey-10 font-body-l-semibold">
      <div className="h-[62px] flex flex-row items-end justify-start gap-[6px]">
        <div className="h-[85px] overflow-hidden flex flex-col items-center justify-end">
          <div className="relative w-10 h-[61.21px]">
            <div className="absolute top-[0px] left-[0px] w-10 h-[61.21px]">
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[2.86px] h-[61.21px]" />
              <div className="absolute top-[0px] left-[6px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[2.86px] h-[31.2px]" />
              <div className="absolute top-[50.73px] left-[6.19px] bg-mediumturquoise w-[2.86px] h-[10.48px]" />
              <div className="absolute top-[0px] left-[12.38px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[2.86px] h-[28.58px]" />
              <div className="absolute top-[53.59px] left-[12.38px] bg-mediumturquoise w-[2.86px] h-[7.62px]" />
              <div className="absolute top-[0px] left-[18.58px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[2.86px] h-[31.2px]" />
              <div className="absolute top-[50.73px] left-[18.58px] bg-mediumturquoise w-[2.86px] h-[10.48px]" />
              <div className="absolute top-[0px] left-[24.77px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[2.86px] h-[61.21px]" />
              <div className="absolute top-[0px] left-[30.95px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[2.86px] h-[61.21px]" />
              <div className="absolute top-[0px] left-[37.14px] [background:linear-gradient(180deg,_#6758ff,_#46d7d0)] w-[2.86px] h-[61.21px]" />
              <div className="absolute top-[33.34px] left-[6.19px] rounded-[50%] bg-mediumslateblue w-[15.24px] h-[15.24px]" />
            </div>
          </div>
        </div>
        <img
          className="relative w-[140.41px] h-[43.35px] hidden"
          alt=""
          src="/metaphy2.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-17xl">
        <div className="self-stretch relative leading-[44px]">
          <span>Automate your</span>
          <span className="font-medium text-neutrals-grey-100">{` `}</span>
          <b className="bg-gradient-to-r from-[#6758ff] to-[#46d7d0] bg-clip-text text-transparent">
            Meeting
          </b>
        </div>
        <div className="self-stretch relative text-lg tracking-[0.15px] leading-[28px] font-medium text-neutrals-grey-20">
          <p className="m-0">
            Transcribe, summarize, search and analyze all your meet
            conversations.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`Etiam tristique lorem erat, vel volutpat magna faucibus nec. Nullam ultrices turpis non semper feugiat. Morbi ut pharetra est. Donec tempor, leo ut tincidunt tincidunt, ex velit cursus nunc, a condimentum odio nisi eget dui. `}
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-lightgray">
        <div className="flex items-center gap-2 text-lightgray">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="h-5 w-5 rounded-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-base font-medium">
            I agree with{" "}
            <span className="bg-gradient-to-r from-[#82dbf7] to-[#b6f09c] bg-clip-text text-transparent">
              Terms Of Service
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-[#82dbf7] to-[#b6f09c] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center text-neutrals-grey-100">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <button
            className={`rounded-3xs bg-gray-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.2)] w-[496px] h-14 flex flex-row py-2 px-6 box-border items-center justify-center gap-[12px] ${
              !isChecked ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
            onClick={redirectToGoogle}
            disabled={!isChecked}
          >
            <img className="relative w-6 h-6" alt="" src="/iconsgoogle.svg" />
            <div className="relative tracking-[0.15px] leading-[24px] font-semibold text-white">
              Continue with Google
            </div>
          </button>
          <button
            className={`rounded-3xs bg-gray-100 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.2)] w-[496px] h-14 flex flex-row py-2 px-6 box-border items-center justify-center gap-[12px] ${
              !isChecked ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
            onClick={redirectToMicrosoft}
            disabled={!isChecked}
          >
            <img
              className="relative w-6 h-6"
              alt=""
              src="/iconsmicrosoft.svg"
            />
            <div className="relative tracking-[0.15px] leading-[24px] font-semibold text-white">
              Continue with Microsoft
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
