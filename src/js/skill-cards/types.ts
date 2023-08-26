interface CardImage {
  width?: string;
  height?: string;
  image: string;
  altText: string;
}

interface CardText {
  cardText: string;
  html?: string;
}

export interface SkillCardProps {
  skillImg: CardImage;
  title: string;
  cardTexts: CardText[];
  cardSkillImages: CardImage[];
}