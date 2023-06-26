import testi from 'assets/Rectangle 9 (1).png';

const Testimonial = () => {
  return (
    <div className='my-10 flex w-screen'>
      <div className='mx-auto w-3/4'>
        <h1 className='text-center font-playfair text-[28px] font-bold text-coffee lg:text-[54px]'>
          Our coffee perfection feedback
        </h1>
        <p className='pb-5 text-center font-playfair lg:text-[20px]'>
          Our customers has amazing things to say about us
        </p>

        <div className='w-9/10 mx-auto h-[450px] border  border-yellow bg-card p-5 lg:w-[800px] lg:p-20'>
          <p className=' text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et
            fuga velit quis recusandae doloribus nam temporibus soluta enim.
            Ipsam earum animi obcaecati pariatur magnam adipisci modi eveniet
            necessitatibus quae?
          </p>

          <h1 className='text-center font-playfair text-[20px] font-bold text-coffee lg:text-[32px]'>
            Jonny Thomas
          </h1>
          <img className='mx-auto w-[120px]' src={testi} alt='' />
          <p className='text-center font-playfair '>Project Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
