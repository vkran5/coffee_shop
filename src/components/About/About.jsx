const About = () => {
  return (
    <>
      <h1 className='font-playfair text-yellow text-center text-[42px]'>
        About Us
      </h1>

      <div className='flex w-[1000px] mx-auto justify-center gap-5 p-5'>
        <div className=' flex flex-col gap-5 justify-center items-center'>
          <p className='font-poppins text-[20px] text-center text-slate-500'>
            At Bean Scene, we have a deep appreciation for the rich and diverse
            coffee culture of Indonesia. Renowned as one of the world's top
            coffee-producing countries, Indonesia offers a unique array of
            flavors and aromas that captivate coffee enthusiasts worldwide.
          </p>

          <p className='font-poppins text-[20px] text-center text-slate-500'>
            We proudly source our beans from the lush plantations of Sumatra,
            Java, Bali, and other Indonesian islands. By partnering directly
            with local farmers and cooperatives, we ensure that each bean is
            carefully cultivated and harvested with the utmost care, preserving
            the distinctive qualities that make Indonesian coffee truly
            exceptional.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
