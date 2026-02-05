/**
 * @typedef {Object} FaqItem
 * @property {string} question
 * @property {string[]} answer  Each string represents a paragraph
 */

/**
 * FAQ data for the site
 * @type {FaqItem[]}
 */
export const faqData = [
  {
    question: "How do I book a set?",
    answer: [
      "Please book ahead of time.",
      "We have drivers and coaches available to August 29th. They rotate AM/PM and days depending on competitions they attend.",
      "Scheduling & Lessons:",
      "Jim: 306.227.3052",
      "Enzo: (306)393-5432",
      "Samson: (306)227-9108",
      "Alternatively, one can send a message via the Club's Instagram https://www.instagram.com/saskatoonwaterskiclub"
    ]
  },
  {
    question: "What hours are you open?",
    answer: [
      "End of Season schedule (Aug 18-29) is by booking only.",
      "The Club typically opens the first week of June and closes at the end of August. Check out the Club's Facebook and Instagram pages for updates.",
      "Learn-To Clinics and Tournaments are listed on this website and on the Saskatoon Waterski Club Facebook and Instagram pages."
    ]
  },
  {
    question: "How much is a Day Pass?",
    answer: [
      "A Day Pass is 60$ CAD, covers insurance and includes 2 tows.",
      "Payment and Waivers are found on the MEMBERSHIPS page of this website."
    ]
  },
  {
    question: "What if I've never skied before?",
    answer: [
      "We've got you!",
      "Check out the MEMBERSHIPS page for Day Pass.",
      "We have equipment onsite and amazing and qualified Drivers and Coaches!"
    ]
  }
];

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
    bioLink: "link",
    image: "👤",
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
    name: "Jim Clunie",
    title: "President",
    occupation: "President, Kelsey Trail & Trucking",
    image: "👤"
  },
  {
    name: "Jeff Edwards",
    title: "Past President",
    occupation: "Construction Manager, Hamm Construction",
    image: "👤"
  },
  {
    name: "Norm Lucas ",
    title: "VP Competition / Marketing & Media Relations",
    occupation: "Playbook Project Management",
    image: "👤"
  },
  {
    name: "Greg Edwards",
    title: "Treasurer",
    occupation: "",
    image: "👤"
  },
  {
    name: "Dan Steen",
    title: "VP Site",
    occupation: "Regional Manager, Mazergroup",
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
 * @typedef {Object} GalleryImage
 * @property {string} filename  // file name or URL of the image
 * @property {string} alt       // alt text for accessibility
 */

/**
 * Photo gallery data
 * @type {GalleryImage[]}
 */
export const galleryImages = [
  { filename: "00.jpg", alt: "SWSC summer fun 0" },
  { filename: "01.jpg", alt: "SWSC summer fun 1" },
  { filename: "02.jpg", alt: "SWSC summer fun 2" },
  { filename: "03.jpg", alt: "SWSC summer fun 3" },
  { filename: "04.jpg", alt: "SWSC summer fun 4" },
  { filename: "05.jpg", alt: "SWSC summer fun 5" },
  { filename: "06.jpg", alt: "SWSC summer fun 6" },
  { filename: "07.jpg", alt: "SWSC summer fun 7" },
  { filename: "08.jpg", alt: "SWSC summer fun 8" },
];
