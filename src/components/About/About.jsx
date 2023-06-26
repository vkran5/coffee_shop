const About = () => {
  return (
    <div className='md:flex'>
      <div className='flex items-center'>
        <h1 className='text-center font-playfair text-[20px] md:p-5 md:text-start md:text-[42px]  '>
          We Deliver best coffees from every corner in{' '}
          <span className='text-slate-500'>Indonesia</span>
        </h1>
      </div>

      <div className='mx-auto flex  justify-center gap-5 p-5 md:w-[1000px]'>
        <div className=' flex flex-col items-center justify-center gap-5'>
          <p className='text-center font-poppins text-[12px] md:text-start lg:text-[20px] '>
            At Bean Scene, we have a deep appreciation for the rich and diverse
            coffee culture of Indonesia. Renowned as one of the world's top
            coffee-producing countries, Indonesia offers a unique array of
            flavors and aromas that captivate coffee enthusiasts worldwide.
          </p>

          <p className='text-center font-poppins text-[12px] md:text-start lg:text-[20px]'>
            We proudly source our beans from the lush plantations of Sumatra,
            Java, Bali, and other Indonesian islands. By partnering directly
            with local farmers and cooperatives, we ensure that each bean is
            carefully cultivated and harvested with the utmost care, preserving
            the distinctive qualities that make Indonesian coffee truly
            exceptional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
