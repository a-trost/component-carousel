import MyComponent from "@/slices/HeroSection";

export default {
  title: "slices/HeroSection",
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default Slice",
      slice_type: "hero_section",
      items: [],
      primary: {
        heading: [
          {
            type: "heading2",
            text: "Grow bleeding-edge relationships",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text: "Ea ea sint officia Lorem consectetur cupidatat anim nisi fugiat tempor irure ullamco mollit nulla id. Elit deserunt eiusmod voluptate incididunt reprehenderit ex consectetur anim.",
            spans: [],
          },
        ],
        "primary-button-text": "e-enable web-enabled convergence",
        "primary-button-link": {
          link_type: "Web",
          url: "https://slicemachine.dev",
        },
        "secondary-button-text": "strategize dot-com partnerships",
        "secondary-button-link": { link_type: "Web", url: "http://google.com" },
      },
      id: "_Default",
    }}
  />
);
_Default.storyName = "Default Slice";
