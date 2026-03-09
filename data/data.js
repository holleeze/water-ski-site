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
    name: "Ryan Dodd",
    role: "Pro Coach",
    image: "./images/coaches/rdodd/rd-pfp.jpg",
    details: {
      hometown: "Olds, Alberta Canada",
      residence: "Palm Bay, Florida",
      sponsors: "Nautique Boats, SeaDek Marine Products, Eagle Wetsuits, Shuswap Ski and Board, Bolle Sunglasses, Garden Of Life, Kicker",
      worldRanking: "#1 in the World",
      currentTitle: "Current World Champion",
      awards: "2015 Waterski Magazine Jumper of the Year Award"
    },
    bioHTML: `
      <h3>About Ryan</h3>
      <p><strong>Hobbies:</strong> Surfing, Mountain Biking, Coaching, Travel, Public/Motivational Speaking<br>
      <strong>Personal Focus:</strong> To find my potential as an athlete<br>
      <strong>Personal Best:</strong> Flight: Day 242 Feet, Night 229 feet<br>
      <strong>Goals:</strong> Undefeated Season, Inspire as many athletes as possible, World Record of 255 Ft, Skifly 320 ft.</p>
      
      <h3>Major Titles</h3>
      <p>(CURRENT World Champion, and World Cup Champion)</p>
      <ul>
        <li>2000: Junior World Jump Champion</li>
        <li>2000-2002: 3 Time Junior Rolex Masters Jump Champion, 2 Time Junior Rolex Masters Trick and Overall Champion</li>
        <li>2005-2007: 3 Time NCWSA Collegiate National Jump Champion, 2 Time Collegiate National Trick Champion. Led Team as Captain to National title 2 of 5 years.</li>
        <li>2007: Moomba Masters Night Jump Champion, Silver Medal at Pan American Games</li>
        <li>2008: MasterCraft Pro Tour Champion, London Night Jump Champion, Canadian National Champion</li>
        <li>2009: Dubna World Cup Champion, Canadian National Champion, Pan American Champion</li>
        <li>2010: Malibu Open Champion, Ukraine Open Champion</li>
        <li>2011: Moomba Masters Champion, Moomba Masters Night Jump Champion, Perth Night Jump Champion, King of Darkness Champion. World Ski Fly Tour Title Belt Holder</li>
        <li>2012: US Masters Jump Champion, Moscow Jump Champion, Calgary Pro Shootout Champion, Soaked Orlando Champion, Canadian National Open Champion</li>
        <li>2013: Australian Open Champion</li>
        <li>2013: Calgary Pro Shootout Champion</li>
        <li>2013: LA Night Jam Champion</li>
        <li>2013: Orlando Extreme Watersports Festival Champion</li>
        <li>2013: Canadian National Champion</li>
        <li>2013: Colombia Night Jump Champion</li>
        <li>2014: Pan American Jump Champion</li>
        <li>2014: Masters Jump Champion</li>
        <li>2014: Malibu Open Jump Champion</li>
        <li>2014: Rocketman Night Jump Champion</li>
        <li>2014: Chile Night Jump Champion</li>
        <li>2015: World Cup Mandurah Jump Champion</li>
        <li>2015: US Masters Jump Champion</li>
        <li>2015: Pan American Games Gold</li>
        <li>2015: Canadian Open Champion</li>
        <li>2015: Moscow Pro Champion</li>
        <li>2015: London Night Jump Champion</li>
        <li>2015: Rocketman Night Jump Champion</li>
        <li>2015: Chile Night Jump Champion</li>
        <li>2015: World Champion</li>
    </ul>
      
      <h3>Awards & Records</h3>
      <ul>
        <li>28 Career Pro Wins</li>
        <li>Canadian National Jump Record 242 ft</li>
        <li>6 Time Canadian Athlete of the year for Waterski Canada</li>
        <li>2011, 2012, 2013, 2014 Athletes Can Team Investors Group Bursary Recipient</li>
        <li>8 Time Alberta Sport Parks and Recreation Athlete Support Grant Recipient</li>
        <li>Broke Collegiate National Jump Record 201 ft</li>
        <li>World Record for Longest Jump for an 18 year old at 229 ft.</li>
        <li>Motivational Speaker for Motivate Canada on the Esteem Team</li>
        <li>London Night Jump Record</li>
        <li>Moomba Night Jump Record</li>
        <li>3 time Collegiate Nationals Jump Champion</li>
        <li>Waterski Magazine 2015 Male Jumper of the year</li>
      </ul>
      
      <h3>Education / Experience</h3>
      <ul>
        <li>Bachelor of Business Administration - Management and Marketing</li>
        <li>National Team member since 2001</li>
        <li>Straight Line Sports Product Development and Marketing Consultant</li>
        <li>Past Coach of the Canadian Junior team, Alberta and Saskatchewan Junior Development Programs</li>
        <li>VP Stillwater Lakes 2011-Current</li>
      </ul>
    `
  },
  {
    name: "Jaret Llewellyn",
    role: "Pro Coach",
    image: "./images/coaches/jllewellyn/jl-pfp.jpg",
    details: {
      hometown: "Innisfail, Alberta, Canada",
      residence: "Since 1996 I have lived and trained in West Palm Beach Florida",
      sponsors: "MasterLine/HO by Camaro Wet Suits, LlewellynPro Goodman Skis, Masterline ropes, Wiley's Bindings, Llewellyn Pro signature series",
      bestPerformances: "Ski Fly: Record 299 feet, Jump Record 240 feet, Slalom 3 @ 39½ off, Trick 11,210 points"
    },
    bioHTML: `
      <h3>About Jaret</h3>
      <p><strong>Wife:</strong> Brita<br>
      <strong>Son:</strong> Dorien</p>
      
      <p>Full time water-skier on professional circuit 10 months a year; travel to trade shows and R&D testing for main sponsors year round; Offer ski clinics, corporate outings, inspirational talks to schools and businesses; Produces instructional, event and extreme water-ski DVDs</p>
      
      <h3>Career Highlights</h3>
      <ul>
        <li>Most Decorated Skier Of All Time!</li>
        <li>117 Professional Wins</li>
        <li>11 World Records</li>
        <li>9 World Individual Titles</li>
        <li>22 World Medals</li>
        <li>16 World Titles</li>
        <li>9 Times US Masters Champion</li>
        <li>10 Times US Open Champion</li>
        <li>24 Times Moomba Masters Champion</li>
        <li>22 Time Pan American Championship</li>
        <li>8 Gold, 4 Silvers Pan American Games</li>
        <li>Flag bearer at 2003 Pan American Games</li>
        <li>7 time World Team Member: 87, 88, 91, 93, 99, 09, 15</li>
        <li>22 Gold Pan Am championships, 1 Silver & 4 Bronze = 26 Medals total</li>
        <li>2 Time Guinness book world record Holder</li>
        <li>Jaret has flown almost an entire football field 299Ft Ski Fly World Record</li>
      </ul>
      
      <h3>Hobbies</h3>
      <p>Ice hockey - play in West Palm Beach off season -team Budweiser (goalie or out!)</p>
      <p>Snow skiing and snow boarding -try to get a few weeks each year. Coached house & travel ice hockey. Love teaching my son everything I know about all sports.</p>
    `
  },
  {
    name: "Sam Edwards",
    role: "Driver/Coach",
    bio: "A first year student at SFU studying environmental technology, Sam has been employed with the organization since 2020. Sam his level 2 boat certification, is a level 1 judge, certified life guard and completed the Foundations coaching level which has given him the skills and coaching techniques to help develop beginner and intermediate skiers.",
    image: "./images/coaches/sedwards/se-pfp.jpg"

  },
  {
    name: "Thomas Daigle ",
    role: "Driver/Coach",
    bio: "An Engineering graduate from Clarkson University in Potsdam, New York, a semi- Pro Water Skier (3 events), NCCP certified coach, level 3 driver, member of the Canadian National Water Ski Team, Thomas brings a wealth of competitive experience to the ski club.  In the winter months, Thomas coaches Alpine Downhill and lives in Revelstoke, BC.",
    image: "./images/coaches/tdaigle/td-pfp.jpg"
  },
];

/**
 * @typedef {Object} AthleteDetails
 * @property {string} [dateOfBirth] - Date of birth (e.g., "September 2nd, 2002")
 * @property {string} [division] - Competition division (e.g., "Elite Men", "MU17")
 * @property {string} [instagram] - Instagram handle (e.g., "@carterlucs")
 * @property {string} [photoCredit] - Photo credit (e.g., "@Crowderphoto")
 * @property {string} [wwsBio] - World Water Skiers bio link
 */

/**
 * @typedef {Object} GalleryImage
 * @property {string} src - Image source path
 * @property {string} [credit] - Photo credit
 */

/**
 * @typedef {Object} Athlete
 * @property {string} name - Athlete's full name
 * @property {string} image - Profile image path or emoji
 * @property {AthleteDetails} [details] - Athlete details (name, DOB, division, etc.)
 * @property {string} bioHTML - HTML content for the bio page
 * @property {GalleryImage[]} [galleryImages] - Optional array of action photos
 */

/**
 * Athletes data
 * @type {Athlete[]}
 */export const athletes = [
  {
    name: "Carter Lucas",
    image: "./images/athletes/clucas/clucas-pfp.jpg",
    details: {
      dateOfBirth: "September 2nd, 2002",
      division: "Elite Men",
      instagram: "@carterlucs",
      photoCredit: "@Crowderphoto"
    },
    bioHTML: `
      <p><strong><a href="https://worldwaterskiers.com/athlete/?CL1020">World Water Skiers Bio</a></strong></p>
      <p>Carter is a 2025 Junior Canadian National Team Member and the Saskatchewan Team Waterski Coach.</p>
      
      <h3>Home Training Site</h3>
      <p>Saskatoon Water Ski Club<br>
      ULM Bayou - Home of the Warhawks, Louisiana, USA</p>
      
      <h3>Competition Plans</h3>
      <p>I intend to compete in slalom, Jump and Trick in summer 2025 and qualify for Open World's. I am currently in the USA training for the upcoming season.</p>
      <p>I plan on competing in the spring LCQ's, Canadian Open, Westerns and the Canadian National Championships.</p>
      
      <h3>Training Plans</h3>
      <p>I just completed my fifth year of study and skied for Louisiana at ULM which enables me to train almost year round. Once I return to Canada I intend on skiing in July through early August at the Saskatoon Water Ski club and at Wakaw Lake with my family. I also train in Florida with Jaret Llewellyn, Ryan Dodd and Cole Grant in May to get ready for the competition season.</p>
      
      <h3>Goals for 2024</h3>
      <ul>
        <li>Trick 6,500 points</li>
        <li>Slalom run 11m at 58kph</li>
        <li>Jump over 62 meters</li>
      </ul>
      
      <h3>Personal Bests (WRL / CRC Tournaments)</h3>
      <ul>
        <li>Trick: 5,700 points</li>
        <li>Slalom: 89.5 buoys (3.5 @ 11.25m – 58kgh)</li>
        <li>Jump: 60.9m (197 feet)</li>
      </ul>
      
      <h3>Accomplishments</h3>
      <ul>
        <li>2020, 2021, 2022, 2023, 2024 WSWS Legacy Scholarship</li>
        <li>2021 recipient of Team Malibu & Jean Gurjar National Scholarship</li>
        <li>Member of Team Canada (silver medalist) at the U21 World Championships and U21 Pan Am Team (injured 2018 Pan Am Games) Santiago Chile.</li>
        <li>Member of U17 Team Canada. 12th overall placement at Jr. World Championships (2018)</li>
        <li>2017, 2018 US Jr National Team Member (Jerseyville, ILL)</li>
        <li>2014, 2015, 2016, 2017, 2019 Canadian National Champion (Overall). 2019 U17 Jump Champion.</li>
        <li>2014 member of the U13 Can Am Team (St. Louis, Jerseyville) and 2016 U14 Can Am Team (Slalom Park, Edmonton)</li>
      </ul>
      
      <p>In the offseason I play hockey, snowboard, do dryland work-outs at College and at Ignite with Jordan and his team.</p>
    `,
    galleryImages: [
      {
        src: "images/athletes/clucas/cl-1.jpg",
      },
      {
        src: "images/athletes/clucas/cl-2.jpg",
      },
      {
        src: "images/athletes/clucas/cl-3.jpg",
      }
    ]
  },
  {
    name: "Enzo Kristian",
    image: "./images/athletes/ekristian/ek-pfp.jpg",
    details: {
      dateOfBirth: "September 30th, 2008",
      division: "MU17 and MU21",
      instagram: "@enzokristianski",
      photoCredit: "@johnnyhayward_photo"
    },
    bioHTML: `
<p><strong><a href="https://www.youtube.com/watch?v=B8yL3jmau0g&t=9s" >Enzo Kristian Podcast</a></strong></p>
    <p>Enzo Kristian has been selected to Jump at the IWWF 2025 U21 World Waterski Championships, July 29th to August 3rd, 2025 at Predator Bay in Calgary (AB), Canada.</p>
    
    <p>Enzo was nominated 2024 Waterski Wakeboard Canada Junior Male Waterski Athlete of the Year <a href="https://wswc.ca/tag/2024-wswc-awards/" target="_blank">wswc.ca/tag/2024-wswc-awards/</a></p>
    
    <p>As a Member of the Junior Canadian National Team, Enzo represented Canada at the 2024 IWWF U17 World Waterski Championships in the Jump and Slalom Events at Predator Bay in Calgary (AB), July 30th to August 4th.</p>
    
    <p>Enzo took Gold in Slalom and Gold in Jump at the 2024 Junior Canadian Open at Ski Shalom, Alberta, July 12-14.</p>
    
    <p>Enzo has been around the water since his birth. He fell in love with waterskiing at the age of 4 and has been waterskiing ever since. He is in Grade 10 and speaks English and French. Enzo is a member of the Saskatoon Water Ski Club and a SaskFirst Athlete.</p>
    
    <h3>Events for 2025</h3>
    <ul>
      <li>Jump</li>
      <li>Slalom</li>
      <li>Trick</li>
    </ul>
    
    <h3>Home Training Site</h3>
    <p>Saskatoon Water Ski Club, aka the « Rathole »</p>
    
    <h3>Coaches</h3>
    <p>Carter Lucas, Thomas Daigle, Jim Clunie and Natallia Berdnikava</p>
    
    <h3>Titles</h3>
    <ul>
      <li>2024 Junior Canadian Open Slalom and Jump Champion</li>
      <li>2023 Western Canadian Champion in BU17 Slalom, Trick, Jump & Overall</li>
      <li>2019 Canadian National Champion in BU12 Slalom</li>
      <li>2019 Western Canadian Champion in BU12 Trick, Jump & Overall</li>
      <li>2018 Canadian National Champion in BU10 Slalom</li>
      <li>2018 Western Canadian Champion in BU10 Slalom</li>
      <li>2018 Provincial Champion in BU10 Slalom and Overall</li>
    </ul>
    
    <h3>Podiums</h3>
    <ul>
      <li>2021 Canadian National Championship 2nd place slalom, 3rd Trick</li>
      <li>2021 Western Canadian Championship 2nd place Slalom & Trick</li>
      <li>2018 Western Canadian Championship 2nd place Trick</li>
      <li>2018 Saskatchewan Provincial Championship 2nd place Trick</li>
      <li>2017 Saskatchewan Provincial Championship 2nd place Slalom and Trick</li>
      <li>2016 Saskatchewan Provincial Championship 3rd place Trick and Overall</li>
    </ul>
    
    <h3>Personal Bests</h3>
    <ul>
      <li>Slalom: 2 buoys@11.00m/58kph</li>
      <li>Trick: 2,160 points</li>
      <li>Jump: 54.6m</li>
    </ul>
    
    <h3>Upcoming Competitions in 2024</h3>
    <ul>
      <li>2024 IWWF World U17 Waterski Championships - Predator Bay, AB</li>
      <li>Western Canadian Championships - Shalom Park, AB</li>
      <li>Canadian National Championships - Hamilton, ON</li>
      <li>Saskatchewan Provincials - Saskatoon, SK</li>
    </ul>
    
    <h3>Training Plans for 2024</h3>
    <ul>
      <li>Jack Travers Ski School, Florida, USA</li>
      <li>Ski Fluid, Florida, USA</li>
      <li>Bennetts, Louisiana, USA</li>
      <li>From June 11 to end of August, skiing at the Rathole in Saskatoon</li>
    </ul>
    
    <p>In the off season, Enzo plays hockey, mountain bikes and does dryland training with Donnie Munro.</p>
    
    <p><em>Enzo wishes to express his gratitude to his family & friends, school community, waterski family, and to Waterski Wakeboard Saskatchewan for the ongoing support.</em></p>
  `,
    galleryImages: [
      {
        src: "images/athletes/ekristian/ek-1.jpg",
      },
      {
        src: "images/athletes/ekristian/ek-2.jpg",
      }
    ]

  },
  {
    name: "Samson Clunie",
    image: "./images/athletes/sclunie/sc-pfp.jpg",
    details: {
      dateOfBirth: "January 31st, 2008",
      division: "MU17",
      instagram: "@samsonclunie"
    },
    bioHTML: `
    <p>Samson Clunie has just returned from winter / spring training in Florida and will be training in Saskatoon for the summer to prepare for Westerns, Nationals, Can Ams, etc.</p>
    
    <h3>Events for 2025</h3>
    <ul>
      <li>Jump</li>
      <li>Slalom</li>
    </ul>
    
    <h3>Home Training Site</h3>
    <p>Saskatoon Water Ski Club, aka the « Rathole »</p>
    
    <h3>Coaches</h3>
    <p>Jim Clunie, Kyle Eade, Jaret Llewellyn</p>
    
    <h3>Personal Bests</h3>
    <ul>
      <li>Slalom: 4.5 @12m (58kph)</li>
      <li>Jump: 49.7m</li>
      <li>Trick: Samson does not currently compete in the Trick event</li>
    </ul>
    
    <h3>Upcoming Competitions in 2025</h3>
    <ul>
      <li>Junior Canadian Open - Shalom Park, AB</li>
      <li>Western Canadian Championships - SWSC, SK</li>
      <li>Canadian National Championships - Shalom Park, AB</li>
      <li>Saskatchewan Provincials - Saskatoon, SK</li>
    </ul>
    
    <h3>Training Plans for 2025</h3>
    <p>In the off season, Samson does dryland workouts at the gym and spent time with coaches at Fluid Waterski training center getting ready for the Canadian summer.</p>
    
    <p><em>Samson wishes to express his gratitude to his parents, all his coaches and Sask Sport for the continued support.</em></p>
  `
  },
  {
    name: "Max Strilchuk",
    image: "./images/athletes/mstrilchuk/ms-pfp.jpg",
    details: {
      dateOfBirth: "December 26th, 2007",
      division: "MU21",
      instagram: "@max_strilchuk17",
      photoCredit: "@johnnyhayward_photo"
    },
    bioHTML: `
    <p>Max Strilchuk has qualified for the 2024 IWWF U17 World Waterski Championships in the Jump Event at Predator Bay in Calgary, (AB), July 31st to August 4th. He will represent Canada in the Jump Event.</p>
    
    <p>Max has been skiing since he was 5 years old and is part of the SaskFirst High Performance team and member of the Saskatoon Waterski Club.</p>
    
    <h3>Events for 2024</h3>
    <ul>
      <li>Slalom</li>
      <li>Trick</li>
      <li>Jump</li>
    </ul>
    
    <h3>Home Training Sites</h3>
    <ul>
      <li>Saskatoon Waterski Club, SK</li>
      <li>Bronson Forest Waterski Club, SK</li>
    </ul>
    
    <h3>Coaches</h3>
    <p>Carter Lucas, Jim Clunie, Jack Critchley, Kyle Eade, Boyd Hollerbaum, Thomas Daigle</p>
    
    <h3>Titles</h3>
    <ul>
      <li>2023 Bronze Overall U17 Canadian National Champion</li>
      <li>2022 Gold Overall U17 Western Champion</li>
      <li>2021 Silver Slalom U14 Western Champion</li>
    </ul>
    
    <h3>Personal Bests</h3>
    <ul>
      <li>Slalom: 3.5 Buoys @ 14.25 m, 58 kph</li>
      <li>Trick: 1750 pts</li>
      <li>Jump: 44.3 m</li>
    </ul>
    
    <h3>Upcoming Competitions</h3>
    <ul>
      <li>Jr Canadian Open - Shalom Park, AB</li>
      <li>2024 IWWF World U17 Waterski Championships - Predator Bay, AB</li>
      <li>Western Canadian Championships - Shalom Park, AB</li>
      <li>Canadian National Championships - Hamilton, ON</li>
      <li>Canada Cup - Saskatoon, SK</li>
      <li>Saskatchewan Provincials - Saskatoon, SK</li>
    </ul>
    
    <h3>Travelling Plans for 2024</h3>
    <ul>
      <li>Ski Fluid, Florida, USA</li>
      <li>Bennett's, Louisiana, USA</li>
      <li>Saskatoon Waterski Club, Canada</li>
    </ul>
    
    <p>In the off season, Max competes at hockey and likes to work out.</p>
    
    <p><em>Max appreciates all the people who he works with and who help him along the way and looks forward to giving back at the club in Saskatoon.</em></p>
  `
  },
  {
    name: "Sophie Strilchuk",
    image: "./images/athletes/sstrilchuk/ss-pfp.jpg",
    details: {
      dateOfBirth: "December 21st, 2009",
      division: "WU17",
      instagram: "@sophiestrilchuk",
      photoCredit: "@2echampions"
    },
    bioHTML: `
    <p>Sophie Strilchuk is the SK HP Team top Female Athlete!</p>
    
    <p>Sophie has been skiing since she was 5 years old. She is a SaskFirst High Performance Athlete and member of the Saskatoon Waterski Club. She is a 3-event athlete.</p>
    
    <h3>Events for 2025</h3>
    <ul>
      <li>Slalom</li>
      <li>Trick</li>
      <li>Jump</li>
    </ul>
    
    <h3>Home Training Sites</h3>
    <ul>
      <li>Saskatoon Waterski Club, SK</li>
      <li>Bronson Forest Waterski Club, SK</li>
    </ul>
    
    <h3>Coaches</h3>
    <p>Carter Lucas, Boyd Hollerbaum, Thomas Daigle</p>
    
    <h3>Upcoming Competitions</h3>
    <ul>
      <li>Western Canadian Championships - Saskatoon, SK</li>
      <li>Saskatchewan Provincials - Saskatoon, SK</li>
    </ul>
    
    <h3>Travelling Plans for 2025</h3>
    <p>Saskatoon Waterski Club, Canada</p>
    
    <p><em>Sophie appreciates all the people who she works with and who help her along the way and looks forward to giving back at the club in Saskatoon.</em></p>
  `
  },
  {
    name: "Ethan Hamilton",
    image: "./images/athletes/ehamilton/eh-pfp.jpg",
    details: {
      division: "U14 Boys"
      // No dateOfBirth - age not displayed
    },
    bioHTML: `
    <h3>Competition Results</h3>
    <ul>
      <li>2021 National champion U14 slalom & trick</li>
      <li>2021 Western Canadian champion U14 slalom & trick, 3rd place jump</li>
      <li>2019 Western Canadian U12 2nd place slalom & trick</li>
      <li>2019 Provincial champion U12 slalom, trick, jump & overall</li>
    </ul>
    
    <h3>Waterski Goals</h3>
    <p>My goals for the 2022 year are to get through the 13m line for slalom, jump 30m, and to exceed 2500 points in trick. I would like to compete in Nationals and hopefully international competitions this year as well.</p>
    
    <h3>Training Sites</h3>
    <ul>
      <li>SWSC Club in Saskatoon (the 'Rat Hole')</li>
      <li>Our family cottage at Marean Lake</li>
      <li>Proline</li>
    </ul>
    
    <h3>Coaches</h3>
    <p>Adam Morris, Brett Walker, Carter Lucas</p>
    
    <h3>Personal Bests</h3>
    <ul>
      <li>Slalom: 2@/13m/55km/h</li>
      <li>Trick: 1600 points</li>
      <li>Jump: 24m</li>
    </ul>
    
    <h3>Interests Outside of Waterskiing</h3>
    <p>I play hockey a lot in the winter, this year I played with the Bantam AA Humboldt Broncos. A few of my buddies and I also workout twice a week with the trainer at the local gym. I also enjoy fishing, snowmobiling, spending time at the lake and playing with my dog.</p>
    
    <p>After breaking my leg on the hockey rink in April 2021, my waterski training had a bit of a delayed start. I worked hard to get back at it as quickly as I could, and I'm excited for a full season of training in 2022!</p>
  `
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

/**
 * @typedef {Object} Sponsor
 * @property {string} name - Sponsor name
 * @property {string} logoImg - Path to sponsor logo image
 * @property {string} url - Sponsor website URL
 */

/**
 * Sponsors data
 * @type {Sponsor[]}
 */
export const sponsors = [
  {
    name: "Water Ski Canada",
    logoImg: "images/sponsors/wsc.png",
    url: "https://waterskicanada.ca/"
  },
  {
    name: "Nautique",
    logoImg: "images/sponsors/nautique.png",
    url: "https://nautique.com/"
  },
  {
    name: "City of Saskatoon",
    logoImg: "images/sponsors/saskatoon.png",
    url: "https://www.saskatoon.ca/"
  },
  {
    name: "1989 Jeux Canada Games Foundation Inc.",
    logoImg: "images/sponsors/jeuxGames.png",
    url: "https://www.sasksport.ca/funding-opportunities/other-funding-sources/1989-jeux-canada-games-foundation-inc/"
  },
  {
    name: "SKI-IT-AGAIN",
    logoImg: "images/sponsors/SIA.png",
    url: "https://www.ski-it-again.com/"
  },
  {
    name: "SkiFly",
    logoImg: "images/sponsors/skifly.png",
    url: "https://skifly.com/"
  },
];

