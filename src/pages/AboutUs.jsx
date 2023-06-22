import About from 'components/About/About';
import Pictures from 'components/About/Pictures';
import Values from 'components/About/Values';
const AboutUs = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[1280px]'>
        <About />

        <Pictures />

        <h1 className='font-playfair text-yellow text-center text-[42px]'>
          Our Values
        </h1>

        <div className='flex flex-col w-[900px] mx-auto  justify-center gap-5 p-5 pb-10'>
          <p className='font-poppins text-[20px] text-center text-slate-500'>
            From 2015 we've been acheve greatness. We achieved because we know
            what we have. yes it its VALUES. So here some values that we believe
          </p>

          <div className=' flex gap-24 items-center mx-auto'>
            <div className='flex flex-col gap-5'>
              <Values value='Quality' />
              <Values value='Customer Oriented' />
              <Values value='Local' />
            </div>

            <div className='flex flex-col gap-5'>
              <Values value='Fair Trade' />
              <Values value='Community Support' />
              <Values value='Innovation' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
