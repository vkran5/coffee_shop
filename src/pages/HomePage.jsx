import HeaderComponent from 'components/Home/Header';
import Description from 'components/Home/Description';
import Megatron from 'components/Home/Megatron';
import ProdcutComponent from 'components/Home/ProductSample';
import Subscription from 'components/Home/Subscription';
import Testimonial from 'components/Home/Testimonial';
import HeadComponent from 'components/Common/Helmet';

const HomePage = () => {
  return (
    <>
      <HeadComponent
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
