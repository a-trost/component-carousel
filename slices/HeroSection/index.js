import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Button from "../../components/Button";

const HeroSection = ({ slice, theme }) => {
  return (
    <section className="flex flex-col max-w-5xl gap-8 pt-12 mx-auto md:flex-row text-textBlack">
      <div className="flex flex-col flex-1 order-2 gap-4 sm:order-none">
        <RichText
          render={slice.primary.heading}
          Component="div"
          className="text-4xl leading-tight md:text-5xl text-cc-blue font-display"
        />
        <RichText render={slice.primary.description} />
        <div className="flex gap-4 ">
          <Button href={slice.primary.primaryButtonLink} bgColor="bg-cc-pink">
            {slice.primary.primaryButtonText}
          </Button>
          <Button
            href={slice.primary.secondaryButtonLink}
            bgColor="bg-gray-500"
          >
            {slice.primary.secondaryButtonText}
          </Button>
        </div>
      </div>
      <div className="relative flex-1 ">
        <Image
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
          width={353}
          height={347}
        />
      </div>
    </section>
  );
};

HeroSection.displayName = HeroSection;

export default HeroSection;
