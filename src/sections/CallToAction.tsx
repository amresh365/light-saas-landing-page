import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import Image from "next/image";
export const CallToAction = () => {
  return (
    <section className="mt-3 relative h-[450px]">
      <Image
        src={starImage}
        height={250}
        width={250}
        alt="starImage"
        className="absolute left-0 top-[0px] hidden md:block"
      />
      <Image
        src={springImage}
        height={250}
        width={250}
        alt="springImage"
        className="absolute right-0 bottom-[0px] hidden md:block"
      />
      <div className="container flex flex-col justify-center items-center text-center mt-10 mb-4">
        <div className="relative">
          <h2 className="section-title">Sign up for free</h2>
          <p className="section-description ml-9 mr-9">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="flex gap-1 items-center mt-[30px]">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
          </button>
        </div>
      </div>
    </section>
  );
};
