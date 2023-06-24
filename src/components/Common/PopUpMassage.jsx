import { useEffect } from 'react';

const PopUpMassage = ({ title, description, type, close }) => {
  return (
    <div className='top-2/5 fixed left-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2 transform justify-center'>
      <div
        className={`${
          type === 'success'
            ? 'border-green-500 bg-green-600'
            : 'border-red-500 bg-red-600'
        } pop-modal absolute  h-[72px] w-[340px] rounded-xl border `}
      >
        <p className='pt-3 text-center text-[14px] font-semibold text-white'>
          {title}
        </p>
        <p className='pt-3 text-center text-[14px] text-white'>{description}</p>
      </div>
      <button onClick={close}>Exit</button>
    </div>
  );
};

export default PopUpMassage;
