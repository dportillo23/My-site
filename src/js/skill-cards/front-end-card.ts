import frontEndDeveloperImage from "assets/images/Skills/front-End.svg";
import htmlLogo from "assets/images/Skills/html.webp";
import cssLogo from "assets/images/Skills/css.webp";
import jsLogo from "assets/images/Skills/js.webp";
import reactLogo from "assets/images/Skills/React.webp";
import type { SkillCardProps } from "./types";

const frontEndSkillImages = [
  {
    width: "1000",
    height: "1295",
    image: htmlLogo,
    altText: "HTML logo",
  },
  {
    width: "1000",
    height: "1295",
    image: cssLogo,
    altText: "CSS logo",
  },
  {
    width: "63",
    height: "63",
    image: jsLogo,
    altText: "Javascript logo",
  },
  {
    image: reactLogo,
    altText: "React logo",
  },
];

export const frontEndDeveloperCard: SkillCardProps = {
  title: "Front-end Developer",
  cardTexts: [
    {
      cardText:
        "Front-end side is the one I have worked with the most. I like to develop the front-end of apps and websites.",
    },
    {
      cardText:
        "I have worked with HTML CSS/SASS and JavaScript, also I have been learning to use React and hooks and I have made some small projects using these technologies that you can see in the",
      html: '<a href="#projects">projects section.</a>',
    },
  ],
  skillImg: {
    width: '90',
    height: '90',
    image: frontEndDeveloperImage,
    altText: 'front-end'
  },
  cardSkillImages: frontEndSkillImages,
};
