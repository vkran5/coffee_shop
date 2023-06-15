import Button from 'components/Button';

const HeaderComponent = () => {
  return (
    <div className="w-screen h-screen flex items-center background-image">
      <div className="w-4/5 lg:w-3/4 mx-auto pt-[84px]">
        <p className="font-playfair text-[12px] lg:text-[22px] font-medium text-white ">
          We’ve got your morning covered with
        </p>
        <p className="font-clicker text-[100px] lg:text-[220px] text-white">
          Coffee
        </p>
        <p className="font-playfair w-5/6 lg:w-[530px] py-2 text-[12px] lg:text-[20px] font-medium   text-white">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>

        <div className="pt-3">
          <Button text={'Order Now'} height={'48px'} width={'148px'} />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
