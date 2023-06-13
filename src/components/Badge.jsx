const Badge = ({ img, title, description }) => {
  return (
    <div className="w-[280px] h-[288px] bg-card p-10 justify-arround border border-[#f0e4d7] my-3">
      <img className="mx-auto" src={img} alt="ccoffe/img" />

      <div className="flex flex-col justify-between items-center py-3">
        <p className="font-playfair text-coffee font-semibold text-center text-[24px]">
          {title}
        </p>
        <p className="text-[16px] text-center font-playfair">{description}</p>
      </div>
    </div>
  );
};

export default Badge;
