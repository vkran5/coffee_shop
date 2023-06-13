// import supabase from '../config/supabaseClient';

import HeaderComponent from 'components/Home/Header';
import Description from 'components/Home/Description';
import Megatron from 'components/Home/Megatron';
import ProdcutComponent from 'components/Home/ProductSample';
import Subscription from 'components/Home/Subscription';
import left from 'assets/left_cup.png';
import right from 'assets/right_cup.png';
import Testimonial from 'components/Home/Testimonial';

const HomePage = () => {
  // const signUp = async () => {
  //   try {
  //     const { data, error } = await supabase.auth.signUp({
  //       email: 'vikriagung7@gmail.com',
  //       password: 'v110597an',
  //     });

  //     console.log(data, error);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const signIn = async () => {
  //   try {
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email: 'vikriagung7@gmail.com',
  //       password: 'v110597an',
  //     });

  //     console.log(data, error);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <HeaderComponent />
      <Description />
      <ProdcutComponent />
      <Megatron />
      <Testimonial />
      <Subscription />

      <img
        className="absolute z-10 left-0 bottom-[50vh] 2xl:bottom-[40vh]"
        src={left}
        alt="lleft/img"
      />

      <img
        className="absolute z-10 right-0 bottom-[50vh] 2xl:bottom-[40vh]"
        src={right}
        alt="left/immg"
      />
    </>
  );
};

export default HomePage;
