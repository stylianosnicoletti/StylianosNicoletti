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
    "I'm *Stylianos Nicoletti* (Stelios), Fullstack developer from  *Nicosia, Cyprus*.",
  socials: [
    {
      label: "Twitter",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "LinkedIn",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Instagram",
      link: "https://github.com/MaeWolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;


