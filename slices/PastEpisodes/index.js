import React from "react";
import { RichText } from "prismic-reactjs";

const PastEpisodes = ({ slice, themes }) => {
  console.log(themes);
  return (
    <section>
      <span className="title">
        Past episodes
        {slice.primary.title ? (
          <RichText render={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      {slice.primary.description ? (
        <RichText render={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Prismic builder!</p>
      )}
      <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
      `}</style>
    </section>
  );
};

export default PastEpisodes;
