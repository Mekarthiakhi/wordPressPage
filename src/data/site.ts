// Central content + curated authentic education photography
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  // Hero Top Collage
  heroMaskBoy: u('1588072432836-e10032774350', 800), // Young student at study desk
  heroClassroom: u('1580582932707-520aed937b7b', 800), // Bright classroom with desks
  heroWoodenDesks: u('1509062522246-3755977927d7', 800), // Wooden desks & library

  // Hero Marquee Thumbnails
  thumb1: u('1574629810360-7efbbe195018', 400),
  thumb2: u('1521587760476-6c12a4b040da', 400),
  thumb3: u('1580582932707-520aed937b7b', 400),
  thumb4: u('1524178232363-1fb2b075b655', 400),
  thumb5: u('1516534775068-ba3e7458af70', 400),
  thumb6: u('1544717297-fa95b6ee9643', 400),

  // Mid-page Chalkboard Assistance Banner
  chalkboardBanner: u('1596495578065-6e0763fa1178', 1600),

  // Discover Further Cards
  discoverGallery: u('1580582932707-520aed937b7b', 600),
  discoverNews: u('1456513080510-7bf3a84b82f8', 600),
  discoverBlogs: u('1544717297-fa95b6ee9643', 600),

  // Testimonials
  testimonialKids: u('1546410531-bb4caa6b424d', 800),
  testimonialGirl: u('1509228468518-180dd4864904', 800),

  // Inquire Form Background
  formBackground: u('1503454537195-1dcabb73ffb9', 1600),

  // Backwards compatibility for unused components
  collaboration: u('1522202176988-66273c2fd55f'),
  studentsWalking: u('1541339907198-e08756dedf3f'),
  studioWork: u('1517486808906-6ca8b3f04846'),
  quad: u('1498243691581-b145c3f54a5a'),
  lab: u('1532094349884-543bc11b234d'),
} as const

export const STATS = [
  { value: 1954, label: 'Year Founded', formatted: '1,954' },
  { value: 934, label: 'Certified Teachers', formatted: '934' },
  { value: 63409, label: 'Graduated Students', formatted: '63,409' },
  { value: 289, label: 'Awards Won', formatted: '289' },
]

export const MISSIONS = [
  {
    id: 'mission',
    title: 'Mission',
    text: 'Our mission at The Yenepoya World is to inspire and empower every student to achieve their full potential, become lifelong learners, and make positive contributions to society.',
  },
  {
    id: 'vision',
    title: 'Vision',
    text: 'To be a centre of excellence where holistic education, human values, and modern pedagogies prepare future-ready global leaders.',
  },
  {
    id: 'values',
    title: 'Core Values',
    text: 'Compassion, intellectual curiosity, ethical leadership, mutual respect, and dedicated service to humanity and community.',
  },
  {
    id: 'care',
    title: 'Holistic Care',
    text: 'Individual mentorship, health, physical fitness, mental wellbeing, and creative exploration tailored to each child’s unique journey.',
  },
]

export const DISCOVER_ITEMS = [
  {
    title: 'Gallery',
    subtitle: 'A Glimpse into TYS',
    image: IMAGES.discoverGallery,
    href: '#gallery',
  },
  {
    title: 'News',
    subtitle: 'Latest News and Updates',
    image: IMAGES.discoverNews,
    href: '#news',
  },
  {
    title: 'Blogs',
    subtitle: 'Latest News and Updates',
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
      { label: 'Faculty & Staff', href: '#faculty' },
    ],
  },
  {
    title: 'Curriculum',
    links: [
      { label: 'Learning Environment', href: '#curriculum' },
      { label: 'Hall of Fame', href: '#hall-of-fame' },
      { label: 'Fee Structure', href: '#fees' },
    ],
  },
  {
    title: 'Announcements',
    links: [
      { label: 'Admissions Policy', href: '#policy' },
      { label: 'How to Apply', href: '#apply' },
      { label: 'Transfer Certificate', href: '#tc' },
    ],
  },
]

// Backwards compatibility for unused legacy components
export const PANELS = [
  { id: 'academics', kicker: 'Academics', title: 'Explore Programs', desc: '', image: IMAGES.heroClassroom },
  { id: 'students', kicker: 'Students', title: 'Life on Campus', desc: '', image: IMAGES.heroWoodenDesks },
  { id: 'admissions', kicker: 'Admissions', title: 'Start Your Journey', desc: '', image: IMAGES.heroMaskBoy },
]

export const FAQS = [
  { q: 'What makes The Yenepoya World different?', a: 'Holistic education and excellence.' },
]

export const MARQUEE_TOP = [IMAGES.thumb1, IMAGES.thumb2, IMAGES.thumb3]
export const MARQUEE_BOTTOM = [IMAGES.thumb4, IMAGES.thumb5, IMAGES.thumb6]

export const SKILLS = [
  { id: 'sport', tab: 'Sports', title: '', desc: '', image: IMAGES.thumb1, stat: '10', statLabel: 'Sports', tags: [] as string[] },
]
