// import clsxm from 'config/clsxm';

const Button = ({ text, width, height, func }) => {
  return (
    <button
      onClick={func}
      type='button'
      className={`bg-yellow rounded-3xl px-5 py-3 text-[12px] lg:text-[13px] lg:w-[${width}] lg:h-[${height}] font-poppins hover:brightness-95 font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
