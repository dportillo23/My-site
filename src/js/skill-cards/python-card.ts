import pythonImage from "assets/images/Skills/Python_Logo.svg";
import numpyLogo from "assets/images/Skills/NumPy.webp";
import pandasLogo from "assets/images/Skills/Pandas.webp";
import bsLogo from "assets/images/Skills/bs.webp";
import type { SkillCardProps } from "./types";

const pythonSkillImages = [
  {
    width: "91",
    height: "91",
    image: numpyLogo,
    altText: "Numpy logo",
  },
  {
    width: "1200",
    height: "1600",
    image: pandasLogo,
    altText: "Pandas logo",
  },
  {
    width: "1500",
    height: "645",
    image: bsLogo,
    altText: "Beautiful Soup logo",
  },
];

export const pythonDeveloperCard: SkillCardProps = {
  title: "Python Enthusiast",
  cardTexts: [
    {
      cardText:
        "I starting my journey as programmer with Python. I really like how powerfull and clean this language is. My firsts projects as apprentice were small python codes and I loved how I could do amazing an simple scripts using Python.",
    },
    {
      cardText:
        "I have used different modules of python for different tasks, such as smtp library, pandas, numpy, tkinter, scraping with Beautiful soup, and some other libraries.",
    },
  ],
  skillImg: {
    width: '83',
    height: '82',
    image: pythonImage,
    altText: 'python logo'
  },
  cardSkillImages: pythonSkillImages,
};
