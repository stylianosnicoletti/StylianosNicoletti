type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "stylianos.nicoletti@gmail.com",
  title: "Welcome to my page!",
  description:
    "I'm *Stylianos Nicoletti* (Stelios), *Fullstack Developer* from *Nicosia, Cyprus* with a passion for innovative technologies and background in *Computer Science*.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/stylianosnicoletti",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/stylianos-nicoletti-906970115",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/stelios.nicoletti",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/stelios_nic",
    },
  ],
};

export default presentation;


