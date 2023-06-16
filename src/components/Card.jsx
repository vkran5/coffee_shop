import Button from './Button';

const CardComponent = ({ img, name, price, composition }) => {
  return (
    <div className="w-[280px] h-[388px] bg-card border border-[#f0e4d7] my-8 relative">
      <img
        src={`https://nwnvjsefgvlgbbdmczcm.supabase.co/storage/v1/object/public/products_img/coffee_img/${img}`}
        alt="ccoffe/img"
      />

      <div className="flex flex-col justify-between items-center py-3">
        <p className="font-playfair text-coffee font-semibold text-center text-[22px]">
          {name}
        </p>
        <p className="text-[20px] font-playfair">{composition}</p>
        <p className="font-playfair text-coffee font-semibold text-center text-[22px]">
          ${price}
        </p>
      </div>

      <div className="flex absolute left-[30%] top-[93%]">
        <div className="mx-auto">
          <Button text={'Order Now'} height={'48px'} width={'140px'} />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
