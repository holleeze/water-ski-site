/**
 * @typedef {Object} Coach
 * @property {string} name
 * @property {string} role
 * @property {string} bio
 * @property {string} image  Emoji or URL
 */

/**
 * List of coaches for the site
 * @type {Coach[]}
 */
export const coaches = [
  {
    name: "Sam Edwards",
    role: "Driver/Coach",
    bio: "A first year student at SFU studying environmental technology. Sam has been employed with the organization since 2020. Sam his level 2 boat certification, is a level 1 judge, certified life guard and completed the Foundations coaching level which has given him the skills and coaching techniques to help develop beginner and intermediate skiers.",
    image: "👤" // later this can be an image URL
  },
  {
    name: "Thomas Daigle ",
    role: "Driver/Coach",
    bio: "An Engineering graduate from Clarkson University in Potsdam, New York, a semi- Pro Water Skier (3 events), NCCP certified coach, level 3 driver, member of the Canadian National Water Ski Team, Thomas brings a wealth of competitive experience to the ski club.  In the winter months, Thomas coaches Alpine Downhill and lives in Revelstoke, BC.",
    image: "👤"
  },
  {
    name: "Ryan Dodd",
    role: "Pro Coach",
    bio: "Brief bio about this coach's background, experience, and specialties.",
    image: "👤"
  },
  {
    name: "Jaret Llewellyn",
    role: "Pro Coach",
    bio: "Brief bio about this coach's background, experience, and specialties.",
    image: "👤"
  }
];

/**
 * @typedef {Object} Athlete
 * @property {string} name
 * @property {string} bioLink
 * @property {string} image
 */

/**
 * Athletes data
 * @type {Athlete[]}
 */
export const athletes = [
  {
    name: "Carter Lucas",
    image: "images/athletes/carter-lucas.jpg",
    details: {
      dateOfBirth: "September 2nd, 2002",
      division: "Elite Men",
      instagram: "@carterlucs",
      photoCredit: "@Crowderphoto"
    },
    bioHTML: `...`
  },
  {
    name: "Enzo Kristian",
    bioLink: "link",
    image: "👤",
  },
  {
    name: "Samson Clunie",
    bioLink: "link",
    image: "👤",
  },
  {
    name: "Max Strilchuk",
    bioLink: "link",
    image: "👤",
  },
  {
    name: "Sophie Strilchuk",
    bioLink: "link",
    image: "👤",
  },
  {
    name: "Ethan Hamilton",
    bioLink: "link",
    image: "👤",
  },
  {
    name: "Ashley Berg",
    bioLink: "link",
    image: "👤",
  },
  {
    name: "Blake Lamontagne",
    bioLink: "link",
    image: "👤",
  },
]

/**
 * @typedef {Object} BoardMember
 * @property {string} name
 * @property {string} title
 * @property {string} occupation
 * @property {string} image
 */

/**
 * Board members data
 * @type {BoardMember[]}
 */
export const boardMembers = [
  {
    name: "Norm Lucas",
    title: "President",
    occupation: "Corporate Sponsership Marketing & Media Relations",
    image: "👤"
  },
  {
    name: "Michelle Clunie",
    title: "VP Competition / Marketing & Media Relations",
    occupation: "",
    image: "👤"
  },
  {
    name: "Michelle Clunie",
    title: "Treasurer",
    occupation: "",
    image: "👤"
  },
  {
    name: "Jim Clunie",
    title: "VP Site",
    occupation: "",
    image: "👤"
  },
  {
    name: "Ryan Rhiehl",
    title: "VP of Adaptive Programming",
    occupation: "",
    image: "👤"
  },
]

/** 
 * @typedef {Object} Article
 * @property {string} url // URL to the news article 
 */

/**
 * articles data
 * @type {Article[]}
 */

/* News outlets aren't providing proper dates so
 * just add most recent articles to the top of the list.
 */
export const articles = [
  { url: "https://globalnews.ca/news/10674188/saskatoon-water-ski-club-world-u17-championships-2024/" },
  { url: "https://www.ctvnews.ca/saskatoon/article/saskatoon-blind-deaf-water-skier-ready-to-make-waves-at-world-championships/" },
  { url: "https://www.cbc.ca/news/canada/saskatchewan/water-ski-event-saskatoon-1.3702329" },
  { url: "https://www.cbc.ca/news/canada/saskatoon/world-junior-water-ski-championships-saskatoon-morning-july-27-1.4764629" },
  { url: "https://globalnews.ca/video/4328198/saskatoon-boys-heading-to-spain-for-world-jr-water-ski-championship/" },
  { url: "https://globalnews.ca/news/2825962/adrenaline-is-through-the-roof-world-champion-jumper-ryan-dodd-lands-in-saskatoon/" },
  { url: "https://thestarphoenix.com/sports/local-sports/the-feeling-of-flying-is-unbelievable-water-ski-champ-gives-lessons-in-saskatoon" },
]
