import { useEffect } from 'react';

const ErrorMassage = ({ func, isMassage }) => {
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
      <p className='text-center text-red-500 pt-3 font-semibold text-[14px]'>
        Oops something wrong is happened
      </p>
      <p className='text-center text-red-500 pt-3 text-[14px]'>
        Please check your credential
      </p>
    </div>
  );
};

export default ErrorMassage;
