import Button from 'components/Button';
import cup from 'assets/cup.png';

const Megatron = () => {
  return (
    <div className="w-screen flex h-[574px] megatron-background items-center">
      <div className="w-3/4 mx-auto flex ">
        <div className="w-2/3">
          <h1 className="font-playfair text-[54px] text-white">
            Get a chance to have an Amazing morning
          </h1>
          <p className="font-playfair text-[20px] text-white">
            We are giving you are one time opportunity to
            <br />
            <span>experience a better life with coffee.</span>
          </p>

          <div className="mt-5">
            <Button text={'Order Now'} height={'48'} width={'100'} />
          </div>
        </div>

        <div>
          <img className="relative" src={cup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Megatron;
