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
    </>
  );
};

export default HomePage;
