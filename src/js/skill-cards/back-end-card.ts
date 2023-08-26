import backEndSkillImage from 'assets/images/Skills/Back-End.webp';
import djangoLogo from 'assets/images/Skills/Django.svg'
import flaskLogo from 'assets/images/Skills/Flask.svg'
import nodeLogo from 'assets/images/Skills/Node_js.webp'
import type { SkillCardProps } from './types';

const backEndSkillImages = [
  {
    width: "256",
    height: "326",
    image: djangoLogo,
    altText: "Django logo",
  },
  {
    width: "256",
    height: "329",
    image: flaskLogo,
    altText: "Flask logo",
  },
  {
    width: "58",
    height: "65",
    image: nodeLogo,
    altText: "Nodejs logo",
  },
];

export const backEndDeveloperCard: SkillCardProps = {
  title: "Back-end Apprentice",
  cardTexts: [
    {
      cardText:
        "As I started coding with Python, back-end was always something that interested me a lot. I'm always trying to learn and put in practice these kind of technologies so I can improve my back-end skills",
    },
    {
      cardText:
        "I have worked with some back-end technologies such as Pythons Flask, and Django, and other frameworks like Node.js",
    },
  ],
  skillImg: {
    width: '90',
    height: '90',
    image: backEndSkillImage,
    altText: 'back-end'
  },
  cardSkillImages: backEndSkillImages,
};
