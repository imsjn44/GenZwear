import Title from "./../components/Title";
import { assets } from "./../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-slate-300 ">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded-md"
          src={assets.about_img}
          alt="about_img"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Genzwear was created with one simple idea of fashion should reflect
            who you are. Born from the energy, creativity, and bold mindset of
            Generation Z, Genzwear started as a vision to build a streetwear
            brand that represents confidence, individuality, and modern youth
            culture in Nepal.
          </p>

          <p>
            We saw that young people wanted more than just clothing — they
            wanted style that speaks, comfort that lasts, and designs that stand
            out. So, Genzwear was built to bring trendy, expressive, and
            affordable street fashion to the new generation.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower the new generation to express their
            individuality through bold, modern, and affordable streetwear. We
            aim to deliver high-quality fashion that blends comfort, confidence,
            and creativity, allowing every young individual to stand out and
            feel authentic.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US?"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-slate-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Asssurance:</b>
          <p className="text-gray-600">
            At GenzWear, every product is carefully inspected to ensure premium
            quality, durability, and comfort. We are committed to delivering
            fashion that meets high standards you can trust.
          </p>
        </div>

        <div className="border border-slate-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With secure payments and easy ordering , we offer a smooth and
            user-friendly shopping experience from browsing to checkout with
            secure payments.
          </p>
        </div>

        <div className="border border-slate-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We prioritize your satisfaction and strive to provide a hassle-free
            shopping experience every times.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
