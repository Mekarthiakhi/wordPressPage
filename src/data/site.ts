// Central content + curated authentic education photography
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  // Hero Top 3-Photo Collage
  heroMaskBoy: u('1588072432836-e10032774350', 900), // Student engaged at desk with stationery
  heroClassroom: u('1580582932707-520aed937b7b', 900), // Sunlit clean modern classroom
  heroWoodenDesks: u('1509062522246-3755977927d7', 900), // Classic warm wooden desks & bookshelves

  // Hero Marquee Thumbnails (vibrant school moments)
  thumb1: u('1577896851231-70ef18881754', 600), // Teacher explaining at blackboard
  thumb2: u('1574629810360-7efbbe195018', 600), // Kids doing hands-on science experiment
  thumb3: u('1521587760476-6c12a4b040da', 600), // Student reading in library
  thumb4: u('1516534775068-ba3e7458af70', 600), // Vibrant art & watercolor painting class
  thumb5: u('1524178232363-1fb2b075b655', 600), // Interactive classroom discussion
  thumb6: u('1544717297-fa95b6ee9643', 600), // Cheerful students outdoors with backpacks
  thumb7: u('1516627145497-ae6968895b74', 600), // Football & playground sports
  thumb8: u('1445633629932-0029acc44e88', 600), // Music and piano rehearsal

  // Mid-page Chalkboard Assistance Banner (Real chalkboard with math equations & students)
  chalkboardBanner: u('1596495578065-6e0763fa1178', 1800),

  // Discover Further Cards
  discoverGallery: u('1546410531-bb4caa6b424d', 800), // Campus gallery moments
  discoverNews: u('1456513080510-7bf3a84b82f8', 800), // Books, glasses & academic publications
  discoverBlogs: u('1503676260728-1c00da094a0b', 800), // Creative learning & writing

  // Testimonials
  testimonialKids: u('1546410531-bb4caa6b424d', 800), // Joyful laughing school kids
  testimonialGirl: u('1509228468518-180dd4864904', 800), // Smiling confident young girl student

  // Inquire Form Background
  formBackground: u('1503454537195-1dcabb73ffb9', 1800), // Child writing in notebook with colored pencils

  // Backwards compatibility for unused legacy components
  collaboration: u('1522202176988-66273c2fd55f'),
  studentsWalking: u('1541339907198-e08756dedf3f'),
  studioWork: u('1517486808906-6ca8b3f04846'),
  quad: u('1498243691581-b145c3f54a5a'),
  lab: u('1532094349884-543bc11b234d'),
} as const

export const STATS = [
  { value: 1954, label: 'Year Founded', formatted: '1,954', highlight: 'Established Heritage' },
  { value: 934, label: 'Certified Teachers', formatted: '934', highlight: 'Global Mentors' },
  { value: 63409, label: 'Graduated Students', formatted: '63,409', highlight: 'Alumni Network' },
  { value: 289, label: 'Awards Won', formatted: '289', highlight: 'Excellence in Education' },
]

export const MISSIONS = [
  {
    id: 'mission',
    tag: '01',
    title: 'Mission',
    text: 'Our mission at The Yenepoya World is to inspire and empower every student to achieve their full potential, become lifelong learners, and make positive contributions to society through empathy, critical thinking, and civic leadership.',
  },
  {
    id: 'vision',
    tag: '02',
    title: 'Vision',
    text: 'To be a globally recognized centre of educational excellence where world-class scholarship, human character, scientific inquiry, and creative innovation converge to shape confident leaders of tomorrow.',
  },
  {
    id: 'values',
    tag: '03',
    title: 'Core Values',
    text: 'Compassion, intellectual integrity, diversity, resilience, ethical responsibility, and unconditional dedication to the holistic wellbeing and safety of every learner.',
  },
  {
    id: 'care',
    tag: '04',
    title: 'Holistic Care',
    text: 'Personalized student mentorship, emotional wellness counselling, world-class athletic facilities, and tailored developmental tracking to support every child’s individual learning curve.',
  },
]

export const DISCOVER_ITEMS = [
  {
    title: 'Gallery',
    subtitle: 'A Glimpse into TYS',
    tag: 'CAMPUS LIFE',
    image: IMAGES.discoverGallery,
    href: '#gallery',
  },
  {
    title: 'News',
    subtitle: 'Latest News and Updates',
    tag: 'ACADEMICS',
    image: IMAGES.discoverNews,
    href: '#news',
  },
  {
    title: 'Blogs',
    subtitle: 'Latest News and Updates',
    tag: 'INSIGHTS',
    image: IMAGES.discoverBlogs,
    href: '#blogs',
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'About Us',
    links: [
      { label: 'Message from Director / Principal', href: '#director' },
      { label: 'Infrastructure & Facilities', href: '#infrastructure' },
      { label: 'Faculty & Staff Directory', href: '#faculty' },
    ],
  },
  {
    title: 'Curriculum',
    links: [
      { label: 'Learning Environment', href: '#curriculum' },
      { label: 'Hall of Fame & Achievements', href: '#hall-of-fame' },
      { label: 'Fee Structure & Scholarships', href: '#fees' },
    ],
  },
  {
    title: 'Announcements',
    links: [
      { label: 'Admissions Policy 2024–25', href: '#policy' },
      { label: 'How to Apply (Step-by-Step)', href: '#apply' },
      { label: 'Transfer Certificate (TC)', href: '#tc' },
    ],
  },
]

// Backwards compatibility for legacy imports
export const PANELS = [
  { id: 'academics', kicker: 'Academics', title: 'Explore Programs', desc: '', image: IMAGES.heroClassroom },
  { id: 'students', kicker: 'Students', title: 'Life on Campus', desc: '', image: IMAGES.heroWoodenDesks },
  { id: 'admissions', kicker: 'Admissions', title: 'Start Your Journey', desc: '', image: IMAGES.heroMaskBoy },
]
export const FAQS = [{ q: 'What makes The Yenepoya World different?', a: 'Holistic education and excellence.' }]
export const MARQUEE_TOP = [IMAGES.thumb1, IMAGES.thumb2, IMAGES.thumb3, IMAGES.thumb4]
export const MARQUEE_BOTTOM = [IMAGES.thumb5, IMAGES.thumb6, IMAGES.thumb7, IMAGES.thumb8]
export const SKILLS = [
  { id: 'sport', tab: 'Sports', title: '', desc: '', image: IMAGES.thumb1, stat: '10', statLabel: 'Sports', tags: [] as string[] },
]
