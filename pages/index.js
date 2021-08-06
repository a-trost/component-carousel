import Prismic from "prismic-javascript";
import { asDate } from "@prismicio/helpers";
import { Client as CCClient } from "../prismic-cc";
import { Client as FHClient } from "../prismic-fh";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = ({
  homepage,
  themes,
  nextEpisode,
  futureEpisodes,
  pastEpisodes,
  ...props
}) => {
  return (
    <>
      <SliceZone
        slices={homepage.data.body}
        sliceProps={({ i, sliceName, slice }) => {
          if (sliceName === "PastEpisodes") {
            return { slice, themes };
          }

          if (sliceName === "NextEpisode") {
            return { slice, nextEpisode };
          }

          return slice;
        }}
        resolver={resolver}
      />
    </>
  );
};

// Fetch content from Prismic
export const getStaticProps = async (...args) => {
  const homepage = await useGetStaticProps({
    client: CCClient(),
    type: "page",
    queryType: "repeat",
    apiParams: {
      uid: "homepage",
    },
  })(...args);

  // cc_theme
  // cc_episode has field to cc_theme
  const themes = await FHClient().query(
    Prismic.Predicates.at("document.type", "cc_theme"),
    { orderings: "[my.cc_theme.date desc]" }
  );

  const episodes = await FHClient().query(
    Prismic.Predicates.at("document.type", "cc_episode"),
    { orderings: "[my.cc_episode.date desc]" }
  );

  const guests = await FHClient()
    .query(Prismic.Predicates.at("document.type", "player"), { pageSize: 100 })
    .then((guests) => guests.results);

  const themesWithEpisodes = themes.results.map((theme) => {
    const themeEpisodes = episodes.results
      .filter((episode) => episode.data.theme.id === theme.id)
      .map((episode) => {
        const guestId = episode.data.guest.id;
        const guest = guests.find((guest) => {
          return guest.id === guestId;
        });
        return { ...episode, guest: guest || null };
      });

    return { ...theme, episodes: themeEpisodes };
  });

  const futureEpisodes = episodes.results
    .filter((episode) => asDate(episode.data.date) >= new Date())
    .map((episode) => {
      const guestId = episode.data.guest.id;
      const guest = guests.find((guest) => guest.id === guestId);
      return { ...episode, guest: guest || null };
    });

  const pastEpisodes = episodes.results
    .filter((episode) => asDate(episode.data.date) < new Date())
    .map((episode) => {
      const guestId = episode.data.guest.id;

      const guest = guests.find((guest) => guest.id === guestId);
      // console.log("Guest for ", episode.data.title, "-", guest);
      return { ...episode, guest: guest || null };
    });

  const nextEpisode = futureEpisodes[futureEpisodes.length - 1];

  const props = {
    homepage: homepage.props,
    episodes,
    nextEpisode,
    futureEpisodes,
    pastEpisodes,
    themes: themesWithEpisodes,
  };

  return {
    props,
  };
};

export default Page;
