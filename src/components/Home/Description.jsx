import beans from 'assets/beans.png';
import coffeBlast from 'assets/coffee_blast.png';

const Description = () => {
  return (
    <section className='w-screen h-[650px] relative '>
      <div className='w-5/6 lg:w-[1280px] lg:flex justify-between items-center mx-auto py-8 lg:py-20'>
        <div className='flex flex-col gap-5 lg:w-1/2'>
          <h2 className='font-playfair text-[32px] lg:text-[54px] text-coffee font-semibold'>
            Discover the best coffee
          </h2>

          <p className='font-playfair lg:text-[20px] text-coffee'>
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>

          <button
            className={`bg-yellow rounded-3xl px-5 py-3 w-[134px] h-[48px] font-playfair hover:brightness-95 font-semibold`}
          >
            Learn More
          </button>
        </div>

        <img
          className='w-[300px] mx-auto lg:w-[500px]'
          src={beans}
          alt='bens/img'
        />
      </div>

      <img
        className='hidden lg:block lg:absolute top-[400px] border'
        src={coffeBlast}
        alt='blast/img'
      />
    </section>
  );
};

export default Description;
