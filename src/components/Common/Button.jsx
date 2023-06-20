// import clsxm from 'config/clsxm';

const Button = ({ text, width, height, func }) => {
  return (
    <button
      onClick={func}
      type='button'
      className={`bg-yellow rounded-3xl px-5 py-3 w-[${width}] h-[${height}] font-playfair hover:brightness-95 font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
