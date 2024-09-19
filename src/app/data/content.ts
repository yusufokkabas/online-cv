export const contentData = [
    {
      title: "Work Experience",
      items: [
        {
          title: "Jr. Software Developer",
          subTitle: "Kentkart",
          date: "October 2022 - Present",
          description: [
            "Tools & Technologies: Angular, NodeJS, Oracle Database, Git and CI/CD, Docker, ELK Stack, HTML, SCSS",
            "Developing CRM product for cities' public transportation system called GUI Kentkart. Project includes several modules for fleet management, card management, customer management, etc. My main responsibilities are designing user-friendly interfaces for end-users and developing robust, stable, and highly efficient services following SOLID principles.",
            "Developing account management system. Project's aim is the to allow our application such as GUI and mobile to access resources hosted by our account project on behalf of a user. My main responsibility involves creating software designs and implementing for screens where users manage informations and permissions.",
            "Implementing Figma designs for both projects with HTML, SCSS and TypeScript for functionality.",
            "Taking part in the CI/CD phase, deployment process."
          ],
        },
        {
          title: "Intern Software Developer",
          subTitle: "Kentkart",
          date: "August 2022 - June 2022",
          description: [
            "Tools & Technologies: Angular, NodeJS, MongoDB, Websocket, Git and BitBucket, HTML, SCSS",
            "Worked on GUI design on hardware level. The device called OBU(On Board Unit) needed to redesign to provide easier access to emergency buttons in dangerous countries.",
            "Developed a live GPS tracker for buses, which required reimplementing the project with NoSQL (MongoDB) and Websocket to achieve faster data flow. Collaborated with my teammates to build a prototype."
        ],
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          title: "Bachelor's Degree in Computer Engineering",
          subTitle: "Dokuz Eylül University",
          date: "2019 - 2024",
          description: [
            "GPA: 3.02",
            "Thesis Project: Decision Support System Valuation of Players Based On In-Game Statistics Case Study: Football"
        ],
        },
        {
          title: "Bachelor's Degree in Computer Engineering",
          subTitle: "Okan University",
          date: "2018 - 2019",
          description: [
            "GPA: 3.89",
            "Transferred to Dokuz Eylul University with lateral transfer."
        ],
        },
      ],
    },
    //   @NOTE: You can add more sections here
    //   {
    //     title: "Projects",
    //     items: [
    //       {
    //         title: "Project 1",
    //         subTitle: "Sub Title",
    //         date: "2015 - 2016",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    //       },
    //     ],
    //   },
  ];
  
  export type Content = {
    title: string;
    items: {
      title: string;
      subTitle: string;
      date: string;
      description: string[];
    }[];
  };
  
  export type ContentData = Content[];