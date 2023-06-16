import testi from 'assets/Rectangle 9 (1).png';

const Testimonial = () => {
  return (
    <div className="w-screen flex my-10">
      <div className="w-3/4 mx-auto">
        <h1 className="text-center text-[28px] lg:text-[54px] font-playfair text-coffee font-bold">
          Our coffee perfection feedback
        </h1>
        <p className="text-center lg:text-[20px] font-playfair pb-5">
          Our customers has amazing things to say about us
        </p>

        <div className="mx-auto w-9/10 lg:w-[800px] h-[450px]  p-5 lg:p-20 bg-card border border-yellow">
          <p className="font-playfair text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et
            fuga velit quis recusandae doloribus nam temporibus soluta enim.
            Ipsam earum animi obcaecati pariatur magnam adipisci modi eveniet
            necessitatibus quae?
          </p>

          <h1 className="text-center text-[20px] lg:text-[32px] font-playfair text-coffee font-bold">
            Jonny Thomas
          </h1>
          <img className="mx-auto w-[120px]" src={testi} alt="" />
          <p className="font-playfair text-center ">Project Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
