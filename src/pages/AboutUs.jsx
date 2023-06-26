import About from 'components/About/About';
import Pictures from 'components/About/Pictures';
import Values from 'components/About/Values';
const AboutUs = () => {
  return (
    <div className='flex w-full justify-center'>
      <div className='w-[370px] max-w-full md:w-[730px] lg:w-[1280px]'>
        <About />
        <Pictures />

        <div className='mx-auto flex h-[250px] flex-col items-center p-5 md:flex-row md:gap-10  md:pb-10'>
          <div className=' flex flex-col pb-[30px] md:w-1/2'>
            <h1 className='text-center font-playfair text-[20px] md:text-start md:text-[42px]'>
              Our Values
            </h1>
            <p className='text-center font-poppins text-[12px] text-slate-500 md:text-start md:text-[16px]'>
              From 2015 we've been acheve greatness. We achieved because we know
              what we have. yes it its VALUES. So here some values that we
              believe
            </p>
          </div>

          <div className='mx-auto flex items-center justify-center gap-3 md:w-1/2 md:gap-24'>
            <div className='flex flex-col gap-2 md:gap-5'>
              <Values value='Quality' />
              <Values value='Customer Oriented' />
              <Values value='Local' />
            </div>

            <div className='flex flex-col gap-2 md:gap-5'>
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
