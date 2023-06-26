import Button from 'components/Common/Button';
import cup from 'assets/cup.png';

const Megatron = () => {
  return (
    <section className='flex h-[574px] w-screen items-center bg-megatron bg-cover bg-center bg-no-repeat'>
      <div className='mx-auto flex w-3/4 flex-col md:flex-row'>
        <div className='md:w-2/3'>
          <h1 className='text-center font-playfair text-[20px] text-white md:text-start md:text-[54px]'>
            Get a chance to have an Amazing morning
          </h1>
          <p className=' hidden text-[20px] text-white md:block'>
            We are giving you are one time opportunity to
            <br />
            <span>experience a better life with coffee.</span>
          </p>

          <div className='mt-5 flex justify-center md:block'>
            <Button text='Order Now' height={'48'} width={'100'}>
              Order Now
            </Button>
          </div>
        </div>

        <div className='mx-auto'>
          <img className='relative w-[175px] md:w-[250px]' src={cup} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Megatron;
