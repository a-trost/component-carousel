import React from "react";
import Image from "next/image";
import {
  AiOutlineYoutube,
  AiOutlineCodepen,
  AiOutlineLink,
  AiOutlineCodeSandbox,
  AiOutlineRead,
} from "react-icons/ai";

const data = {
  heading: "3D Burger Drum Kit",
  guest: { name: "Steve Gardner", image: "steve-gardner.png" },
  description:
    "We learned how to use Three.js and GreenSock to make a burger drumkit that you can actually play!",
  componentImage: "/images/component-image-delete.png",
  youtubeLink: "https://youtube.com",
  codePenLink: "https://codepen.io",
  articleLink: "https://codepen.io",
  siteLink: "https://codepen.io",
};

export default function PastEpisode() {
  return (
    <section className="justify-between max-w-screen-xl gap-4 p-4 mx-auto md:flex">
      <div className="">
        <h3 className="mb-2 text-2xl leading-tight font-display md:text-4xl text-cc-blue">
          {data.heading}
        </h3>
        <p className="mb-4 text-xl font-displayMedium md:text-2xl text-textBlack">
          By {data.guest.name}
        </p>
        <p className="max-w-sm mb-8 text-base font-body text-textBlack md:text-lg">
          {data.description}
        </p>
        <div className="">
          {data.youtubeLink && (
            <IconLink type="youtube" url={data.youtubeLink} />
          )}
          {data.codePenLink && (
            <IconLink type="codepen" url={data.codePenLink} />
          )}
          {data.articleLink && (
            <IconLink type="article" url={data.articleLink} />
          )}
          {data.siteLink && <IconLink type="site" url={data.siteLink} />}
        </div>
      </div>
      <div className="relative ">
        <Image
          src={data.componentImage}
          width={543}
          height={285}
          quality={85}
        />
        <img src={data.guest.image} alt="" className="absolute top-0 right-0" />
      </div>
    </section>
  );
}

const IconLink = ({ type }) => {
  const map = {
    youtube: { icon: <AiOutlineYoutube />, text: "Watch on Youtube" },
    codepen: { icon: <AiOutlineCodepen />, text: "View on CodePen" },
    codesandbox: {
      icon: <AiOutlineCodeSandbox />,
      text: "View on CodeSandbox",
    },
    article: { icon: <AiOutlineRead />, text: "Read the article" },
    site: { icon: <AiOutlineLink />, text: "View on the site" },
  };

  return (
    <a
      className="flex items-center gap-3 mb-3 text-xl font-semibold text-cc-blue hover:underline"
      href={data.youtubeLink}
    >
      {map[type].icon} {map[type].text}
    </a>
  );
};
