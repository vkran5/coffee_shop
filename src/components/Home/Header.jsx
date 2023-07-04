import Button from 'components/Common/Button';
import HeadComponent from 'components/Common/Helmet';

const HeaderComponent = () => {
  return (
    <>
      <HeadComponent
        title={'BEAN SCENE | HOME'}
        description={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ex numquam sed tempora cum autem earum deleniti, praesentium libero odit totam amet, minima eaque culpa eos maxime saepe fugiat nobis corporis eum. Nam eius beatae odit soluta incidunt. Impedit architecto, nemo deserunt dicta incidunt accusamus?'
        }
      />

      <section className='flex h-screen w-full items-center bg-header bg-cover bg-center bg-no-repeat'>
        <div className='mx-auto w-4/5 max-w-full pt-[84px] lg:w-[1280px]'>
          <p className='font-playfair text-[12px] font-medium text-white lg:text-[22px] '>
            We’ve got your morning covered with
          </p>
          <p className='font-clicker text-[100px] text-white lg:text-[220px]'>
            Coffee
          </p>
          <p className='w-5/6 py-2 font-playfair text-[12px] font-medium text-white lg:w-[530px]   lg:text-[20px]'>
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>

          <div className='pt-3'>
            <Button text={'Order Now'} height={'48px'} width={'148px'}>
              Order Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
