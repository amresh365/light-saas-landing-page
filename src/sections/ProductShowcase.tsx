import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF]  to-[#D2DCFF]">
      <div className="container justify-center items-center flex flex-col">
        <div className="border w-52 p-1 rounded-lg text-center ">
          Boost Your Productivity
        </div>
        <h2 className="section-title">A more Effective way to track Product</h2>
        <p className="section-description">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col  relative">
        <Image
          src={productImage}
          alt="Product Showcase"
          className="rounded-lg w-full mt-10"
        />
        <Image
          src={pyramidImage}
          alt="Pyramid"
          height={100}
          width={100}
          className="rounded-lg hidden mt-10 absolute top-0 right-0 md:h-[262px] md:w-[262px] md:block "
        />
        <Image
          src={tubeImage}
          alt="Tube"
          height={100}
          width={100}
          className="rounded-lg hidden mt-10 absolute bottom-24 left-0 md:h-[262px] md:w-[262px] md:block"
        />
      </div>
    </section>
  );
};
