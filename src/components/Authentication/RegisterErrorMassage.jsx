import { useEffect } from 'react';

const RegisterErrorMassage = ({ func, isMassage }) => {
  //   useEffect(() => {
  //     if (massage) {
  //       setTimeout(setMassage(false), 8000);
  //     }
  //   }, [massage]);

  return (
    <div
      onClick={() => {
        func(false);
      }}
      style={{ animation: 'pop-modal .3s' }}
      className={`${
        isMassage ? 'pop-modal' : 'close-modal'
      } bg-red-100 rounded-xl transition ease-in-out delay-150 duration-200 border-red-500 absolute border w-[340px] h-[72px] top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <p className="text-center text-red-500 pt-3 font-semibold text-[14px]">
        Oops something wrong is happened
      </p>
      <p className="text-center text-red-500 pt-3 text-[14px]">
        Please try later or Check your form
      </p>
    </div>
  );
};

export default RegisterErrorMassage;
