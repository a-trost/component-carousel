import Prismic from "prismic-javascript";
import { asDate } from "@prismicio/helpers";
import { Client as CCClient } from "../prismic-cc";
import { Client as FHClient } from "../prismic-fh";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => {
  // console.log("🚀 ~ file: index.js ~ line 10 ~ Page ~ props", props);
  // console.log(props);
  return (
    <>
      <SliceZone
        slices={props.homepage.data.body}
        sliceProps={({ i, sliceName, slice }) => {
          if (sliceName === "PastEpisodes") {
            return { slice, themes: props.themes };
          }

          if (sliceName === "NextEpisode") {
            return { slice, nextEpisode: props.nextEpisode };
          }

          return slice;
        }}
        resolver={resolver}
      />
    </>
  );
};

// Fetch content from prismic
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
  const themesWithEpisodes = themes.results.map((theme) => {
    const themeEpisodes = episodes.results.filter(
      (episode) => episode.data.theme.id === theme.id
    );

    return { ...theme, episodes: themeEpisodes };
  });
  const futureEpisodes = episodes.results.filter(
    (episode) => asDate(episode.data.date) >= new Date()
  );
  const pastEpisodes = episodes.results.filter(
    (episode) => asDate(episode.data.date) < new Date()
  );
  const nextEpisode = futureEpisodes[futureEpisodes.length - 1];

  return {
    props: {
      homepage: homepage.props,
      episodes,
      nextEpisode,
      futureEpisodes,
      pastEpisodes,
      themes: themesWithEpisodes,
    },
  };
};

export default Page;
