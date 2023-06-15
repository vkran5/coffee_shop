import { useEffect } from 'react';

const RegisterSuccessMassage = ({ setMassage, massage }) => {
  return (
    <div
      onClick={() => {
        setMassage(false);
      }}
      style={{ animation: 'pop-modal .3s' }}
      className={`${
        massage ? 'pop-modal' : 'close-modal'
      } rounded-xl pop-modal border-green-500 bg-green-100 absolute border w-[340px] h-[72px] top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <p className="text-center text-green-500 pt-3 font-semibold text-[14px]">
        Register success
      </p>
      <p className="text-center text-green-500 pt-3 text-[14px]">
        Please check you mail box to verify
      </p>
    </div>
  );
};

export default RegisterSuccessMassage;
