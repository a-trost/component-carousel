import React from "react";
import Image from "next/image";
import { FiCalendar, FiClock } from "react-icons/fi";

const NextEpisode = ({ slice, nextEpisode: { data: episode, guest } }) => {
  console.log(guest);
  const heading = slice.primary.heading[0].text;
  const description = episode.intro_text[0].text;
  // const date = episode.date;
  // const time = episode.date;

  var d = new Date(episode.date);

  const time = d.toLocaleTimeString([], { timeStyle: "short" });
  const date = d.toLocaleDateString([], { dateStyle: "short" });

  return (
    <section className="pt-12" aria-labelledby="next-episode">
      <div className="max-w-screen-xl mx-auto">
        <h2
          className="text-xl font-extrabold tracking-widest text-center uppercase sm:text-2xl md:text-3xl text-cc-blue"
          id="next-episode"
        >
          {heading}
        </h2>
        <article className="flex flex-col w-auto gap-8 mt-8 border md:flex-row text-textBlack">
          <div className="max-w-lg">
            <h3 className="text-2xl leading-tight font-display text-cc-blue sm:text-3xl md:text-4xl">
              {episode.title}
            </h3>
            <dl>
              <div className="text-xl md:text-2xl ">
                <dt className="inline">Guest:</dt>{" "}
                <dd className="inline">{guest.data.name}</dd>
              </div>
              {episode.intro_text && (
                <div className="mt-6 text-lg md:text-xl ">
                  <dt className="sr-only">Description</dt>
                  <dd>{description}</dd>
                </div>
              )}
              <div className="flex items-center gap-2 mt-6 text-base ">
                <dt>
                  <FiCalendar
                    aria-hidden="true"
                    focusable="false"
                    className="text-2xl "
                  />
                  <span className="sr-only">Date</span>
                </dt>
                <time datetime={episode.date}>{date}</time>
                <dt>
                  <FiClock
                    aria-hidden="true"
                    focusable="false"
                    className="ml-4 text-2xl"
                  />
                  <span className="sr-only">Time</span>
                </dt>
                <dd>{time}</dd>
              </div>
            </dl>
          </div>
          <div className="justify-self-end">
            <Image src={episode.share_image.url} width={510} height={267} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default NextEpisode;
