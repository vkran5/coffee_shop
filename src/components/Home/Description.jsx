import beans from 'assets/beans.png';
import coffeBlast from 'assets/coffee_blast.png';

const Description = () => {
  return (
    <section className='relative h-[650px] w-screen '>
      <div className='mx-auto w-5/6 items-center justify-between py-8 lg:flex lg:w-[1280px] lg:py-20'>
        <div className='flex flex-col gap-5 lg:w-1/2'>
          <h2 className='font-playfair text-[32px] font-semibold text-coffee lg:text-[54px]'>
            Discover the best coffee
          </h2>

          <p className='text-coffee lg:text-[20px]'>
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>

          <button
            className={`h-[48px] w-[134px] rounded-3xl bg-yellow px-5 py-3 font-semibold hover:brightness-95`}
          >
            Learn More
          </button>
        </div>

        <img
          className='mx-auto w-[300px] lg:w-[500px]'
          src={beans}
          alt='bens/img'
        />
      </div>

      <img
        className='top-[400px] hidden border lg:absolute lg:block'
        src={coffeBlast}
        alt='blast/img'
      />
    </section>
  );
};

export default Description;
