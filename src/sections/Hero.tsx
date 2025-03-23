"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import cylenderImage from "@/assets/cylinder.png";
import noodleimage from "@/assets/noodle.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { inflate } from "zlib";
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_at_bottom_left,#183EC2,#EAEEFE66_70%)]">
      <div className="container md:flex">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="py-1 px-3 text-sm inline-flex border border-[#222]/10 rounded-lg tracking-tight">
              Version 2.0 is Here{" "}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway your productivity
            </h1>
            <p className=" text-[22px] leading-[30px] p-4 ">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website in just minutes, with the set of free
              components for Framer.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 w-[400px] ml-6 md:h-[648px] md:mt-0 md:flex-1">
          <Image
            src={cylenderImage}
            alt="Cylinder Image"
            width={200}
            height={200}
            className="absolute hidden lg:block"
          />
          <motion.img
            src={CogImage.src}
            alt="Cog Image"
            width={300}
            height={300}
            className=" md:h-[600px] md:w-auto md:ml-20 md:mt-10"
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <Image
            src={noodleimage}
            alt="Noodle Image"
            width={200}
            className=" hidden lg:block md:h-[250px] md:w-auto absolute top-[670px] right-[130px] rotate-[30deg]"
          />
        </div>
      </div>
    </section>
  );
};
