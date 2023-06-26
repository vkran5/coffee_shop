const Subscription = () => {
  return (
    <section className='flex h-[374px] w-screen bg-subscription bg-cover bg-center  bg-no-repeat'>
      <div className='mx-auto flex w-3/4 flex-col items-center justify-center'>
        <div className=' mx-auto '>
          <h1 className='text-center font-playfair text-[32px] text-white lg:text-[54px]'>
            Subscribe to get the Latest News
          </h1>

          <p className='text-center text-white lg:text-[20px]'>
            Don’t miss out on our latest news, updates, tips and special offers
          </p>
        </div>

        <div className='mt-10 flex'>
          <input
            className='h-[50px] w-[200px] p-5 lg:h-[66px] lg:w-[642px]'
            type='text'
            placeholder='Insert your email here'
          />
          <button className='h-[50px] w-[137px] rounded-none bg-yellow font-semibold hover:brightness-90 lg:h-[66px] lg:text-[18px]'>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
