import beans from 'assets/footer_img.png';
import icons from 'assets/icons.png';

const Footer = () => {
  return (
    <>
      <img
        className="absolute bottom-0 w-screen -z-10"
        src={beans}
        alt="bg/img"
      />

      <div className="w-screen h-[492px] bg-footer flex ">
        <div className="w-3/4 mx-auto">
          <div className="pt-[90px] flex gap-20">
            <div className="w-1/3">
              <h1 className="text-white text-[54px] font-clicker">
                Bean Scene
              </h1>
              <p className="font-playfair text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                suscipit quam doloribus in non minima at unde amet facere
                deserunt. Labore, corrupti quae.
              </p>

              <img className="pt-10" src={icons} alt="icons/img" />
            </div>

            <div className="flex w-3/4 pt-5 justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-white font-semibold font-playfair text-[26px]">
                  About
                </h1>
                <p className="text-white font-playfair">Menu</p>
                <p className="text-white font-playfair">Feartures</p>
                <p className="text-white font-playfair">News & Blogs</p>
                <p className="text-white font-playfair">Help</p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-white font-semibold font-playfair text-[26px]">
                  Company
                </h1>
                <p className="text-white font-playfair">How we work</p>
                <p className="text-white font-playfair">Term of service</p>
                <p className="text-white font-playfair">Pricing</p>
                <p className="text-white font-playfair">FAQ</p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-white font-semibold font-playfair text-[26px]">
                  Contact Us
                </h1>
                <p className="text-white font-playfair">
                  Akshya Nagar 1st Block 1st Cross, <br />
                  <span>Rammurthy nagar, Bangalore-560016</span>
                </p>
                <p className="text-white font-playfair">+1 202-918-2132</p>
                <p className="text-white font-playfair">+1 202-918-2132</p>
                <p className="text-white font-playfair">Hwww.beanscene.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
