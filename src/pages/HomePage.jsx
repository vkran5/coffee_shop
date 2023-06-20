import HeaderComponent from 'components/Home/Header';
import Description from 'components/Home/Description';
import Megatron from 'components/Home/Megatron';
import ProdcutComponent from 'components/Home/ProductSample';
import Subscription from 'components/Home/Subscription';
import left from 'assets/left_cup.png';
import right from 'assets/right_cup.png';
import Testimonial from 'components/Home/Testimonial';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet
        title={'BEAN SCENE | HOME'}
        description={'Home Page'}
        type={'website'}
      />
      <HeaderComponent />
      <Description />
      <ProdcutComponent />
      <Megatron />
      <Testimonial />
      <Subscription />
      <img
        className='absolute hidden lg:block z-10 left-0 top-[4200px] 2xl:top-[450vh] '
        src={left}
        alt='lleft/img'
      />

      <img
        className='absolute z-10 hidden lg:block right-0 top-[4200px]  2xl:top-[450vh]'
        src={right}
        alt='left/immg'
      />
    </>
  );
};

export default HomePage;
