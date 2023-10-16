import CustomButton from "../custom-button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = () => {
    const ele = document.getElementById("catalogue");
    ele?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title"> Feel the Freedom, Start the Journey!</h1>
        <p>
          Are you ready for an unforgettable journey with gold standard service?
          With Golden Options, you can make every moment special by upgrading
          your car rental experience.
        </p>

        <CustomButton
          title="Explore Cars"
          designs="bg-primary-blue text-white hover:bg-blue-800 transition rounded-full mt-10"
          handleClick={scrollTo}
        />
      </div>

      <div className="w-100 pt-16 flex justify-center">
        <motion.img
          initial={{ translateX: 200 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1 }}
          src="/hero.png"
          alt="Hero Image"
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
}
