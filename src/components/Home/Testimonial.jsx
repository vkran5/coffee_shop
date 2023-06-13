import testi from 'assets/rectangle 9 (1).png';

const Testimonial = () => {
  return (
    <div className="w-screen flex mb-10">
      <div className="w-3/4 mx-auto">
        <h1 className="text-center text-[54px] font-playfair text-coffee font-bold">
          Our coffee perfection feedback
        </h1>
        <p className="text-center text-[20px] font-playfai pb-5">
          Our customers has amazing things to say about us
        </p>

        <div className="mx-auto w-[800px] h-[450px]  p-20 bg-card border border-yellow">
          <p className="font-playfair">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et
            fuga velit quis recusandae doloribus nam temporibus soluta enim.
            Ipsam earum animi obcaecati pariatur magnam adipisci modi eveniet
            necessitatibus quae?
          </p>

          <h1 className="text-center text-[32px] font-playfair text-coffee font-bold">
            Jonny Thomas
          </h1>
          <p className="font-playfair text-center">Project Manager</p>
          <img className="mx-auto w-[120px]" src={testi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
