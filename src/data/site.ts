// Central content + image sources for the site.
// Photography: Unsplash (premium, authentic education imagery).
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  heroCampus: u('1562774053-701939374585', 2000),
  campusArch: u('1607237138185-eedd9c632b0b'),
  lecture: u('1523240795612-9a054b0db644'),
  library: u('1521587760476-6c12a4b040da'),
  lab: u('1532094349884-543bc11b234d'),
  classroom: u('1509062522246-3755977927d7'),
  graduation: u('1627556704302-624286467c65'),
  studentsWalking: u('1541339907198-e08756dedf3f'),
  reading: u('1456513080510-7bf3a84b82f8'),
  studioWork: u('1517486808906-6ca8b3f04846'),
  collaboration: u('1522202176988-66273c2fd55f'),
  quad: u('1498243691581-b145c3f54a5a'),
  portrait1: u('1580489944761-15a19d654956', 800),
  portrait2: u('1544005313-94ddf0286df2', 800),
  portrait3: u('1507003211169-0a1dd7228f2d', 800),
  news1: u('1503676260728-1c00da094a0b'),
  news2: u('1454165804606-c3d57bc86b40'),
  gallery1: u('1580582932707-520aed937b7b'),
  // Student life / skills / playground
  sportsPlay: u('1533000971552-6a962ff0b9f9'),
  basketball: u('1571902943202-507ec2618e8f'),
  running: u('1461896836934-ffe607ba8211'),
  soccer: u('1516627145497-ae6968895b74'),
  music: u('1522075469751-3a6694fb2f61'),
  guitar: u('1471478331149-c72f17e33c73'),
  piano: u('1445633629932-0029acc44e88'),
  painting: u('1552072092-7f9b8d63efcb'),
  artClass: u('1516534775068-ba3e7458af70'),
  scienceKids: u('1574629810360-7efbbe195018'),
  studentsGroup: u('1544717297-fa95b6ee9643'),
  kidsA: u('1546410531-bb4caa6b424d'),
  kidsPlay: u('1580618672591-eb180b1a973f'),
  kidsB: u('1509228468518-180dd4864904'),
  studyDesk: u('1588072432836-e10032774350'),
  studyLaptop: u('1427504494785-3a9ca7044f45'),
  studentsStudy: u('1524178232363-1fb2b075b655'),
  campusLife1: u('1503454537195-1dcabb73ffb9'),
  campusLife2: u('1587691592099-24045742c181'),
  campusLife3: u('1531482615713-2afd69097998'),
  campusLife4: u('1541178735493-479c1a27ed24'),
} as const

// Interactive "Skills & the Playground" showcase
export const SKILLS = [
  {
    id: 'sport',
    tab: 'Sports & Playground',
    title: 'Where energy meets discipline.',
    desc: 'From the athletics track to the football pitch, play is where resilience, teamwork and leadership are quietly forged. Our fields and courts are open every day.',
    image: IMAGES.sportsPlay,
    stat: '12',
    statLabel: 'Sports & activities',
    tags: ['Athletics', 'Football', 'Basketball', 'Swimming', 'Yoga', 'Playground'],
  },
  {
    id: 'arts',
    tab: 'Music & Performing Arts',
    title: 'A stage for every voice.',
    desc: 'Studios and stages where students discover rhythm, expression and confidence — from orchestra and choir to theatre, dance and the visual arts.',
    image: IMAGES.music,
    stat: '9',
    statLabel: 'Ensembles & studios',
    tags: ['Orchestra', 'Choir', 'Theatre', 'Dance', 'Painting', 'Sculpture'],
  },
  {
    id: 'stem',
    tab: 'STEM & Robotics',
    title: 'Curiosity, engineered.',
    desc: 'Maker spaces, robotics labs and coding studios where young minds build, break and rebuild — turning questions into working prototypes.',
    image: IMAGES.scienceKids,
    stat: '6',
    statLabel: 'Innovation labs',
    tags: ['Robotics', 'Coding', 'Electronics', 'AI Club', '3D Printing', 'Astronomy'],
  },
  {
    id: 'leadership',
    tab: 'Leadership & Clubs',
    title: 'Character, in practice.',
    desc: 'Student councils, debate societies and community projects that teach initiative, empathy and the art of bringing people together for a cause.',
    image: IMAGES.studentsGroup,
    stat: '20',
    statLabel: 'Clubs & societies',
    tags: ['Debate', 'Model UN', 'Eco Club', 'Volunteering', 'Entrepreneurship', 'Media'],
  },
] as const

// Continuously scrolling photo strip — student life in motion
export const MARQUEE_TOP = [
  IMAGES.kidsPlay,
  IMAGES.basketball,
  IMAGES.artClass,
  IMAGES.studyDesk,
  IMAGES.soccer,
  IMAGES.piano,
]
export const MARQUEE_BOTTOM = [
  IMAGES.scienceKids,
  IMAGES.running,
  IMAGES.painting,
  IMAGES.studentsStudy,
  IMAGES.guitar,
  IMAGES.kidsB,
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Student Life', href: '#community' },
  { label: 'Campus', href: '#education' },
  { label: 'News', href: '#discover' },
  { label: 'Contact', href: '#enquiry' },
]

export const STATS = [
  { value: 70, suffix: '+', label: 'Years of Excellence' },
  { value: 24, suffix: '', label: 'Academic Programs' },
  { value: 65, suffix: 'K+', label: 'Alumni Worldwide' },
  { value: 42, suffix: '', label: 'Nationalities on Campus' },
]

export const MISSION = [
  {
    n: '01',
    title: 'Mission',
    text: 'To inspire and empower every student to reach their full potential — nurturing lifelong learners who contribute meaningfully to a global society.',
    image: IMAGES.lecture,
  },
  {
    n: '02',
    title: 'Vision',
    text: 'To be recognised among the world’s foremost learning institutions, where rigorous scholarship meets genuine human character and boundless curiosity.',
    image: IMAGES.library,
  },
  {
    n: '03',
    title: 'Values',
    text: 'Integrity, intellectual courage, inclusion and excellence guide every interaction across our campus — from the lecture hall to the laboratory.',
    image: IMAGES.collaboration,
  },
  {
    n: '04',
    title: 'Our Commitment',
    text: 'A promise of personalised mentorship, world-class facilities and a community that champions each learner’s ambition, wherever it may lead.',
    image: IMAGES.studioWork,
  },
]

export const PANELS = [
  {
    id: 'academics',
    kicker: 'Academics',
    title: 'Explore Programs',
    desc: 'Rigorous, future-facing curricula across the sciences, humanities and the arts.',
    image: IMAGES.lab,
  },
  {
    id: 'students',
    kicker: 'Students',
    title: 'Life on Campus',
    desc: 'A vibrant community of clubs, culture, sport and leadership beyond the classroom.',
    image: IMAGES.studentsWalking,
  },
  {
    id: 'admissions',
    kicker: 'Admissions',
    title: 'Start Your Journey',
    desc: 'A considered, personal admissions process designed around your ambition.',
    image: IMAGES.graduation,
  },
]

export const FAQS = [
  {
    q: 'What makes The Yenepoya World different?',
    a: 'A rare combination of academic rigour, research-led teaching and genuinely personal mentorship — set within a globally connected, values-driven community.',
  },
  {
    q: 'When does the admissions cycle open?',
    a: 'Applications open in September for the following academic year. Early submissions are encouraged as select programs reach capacity ahead of the deadline.',
  },
  {
    q: 'Do you offer scholarships and financial aid?',
    a: 'Yes. Merit and need-based scholarships are available across programs. Our admissions team will guide you through eligibility and the application process.',
  },
  {
    q: 'Can international students apply?',
    a: 'Absolutely. We welcome students from more than forty nationalities and provide dedicated support for visas, housing and settling into campus life.',
  },
  {
    q: 'What support is available for new students?',
    a: 'Every student is paired with a faculty mentor and a peer guide, with access to academic advising, wellbeing services and an active alumni network.',
  },
]

export const DISCOVER = [
  {
    tag: 'Gallery',
    date: 'A Glimpse into TYW',
    title: 'Moments from a living, learning campus',
    image: IMAGES.classroom,
    span: 'lg:col-span-7',
  },
  {
    tag: 'News',
    date: 'March 2026',
    title: 'Research team awarded international fellowship',
    image: IMAGES.news1,
    span: 'lg:col-span-5',
  },
  {
    tag: 'Blog',
    date: 'February 2026',
    title: 'Why experiential learning shapes better thinkers',
    image: IMAGES.news2,
    span: 'lg:col-span-5',
  },
  {
    tag: 'Events',
    date: 'April 2026',
    title: 'Global Leadership Summit returns to campus',
    image: IMAGES.quad,
    span: 'lg:col-span-7',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'My child’s curiosity and confidence have flourished here. The faculty see each student as an individual, and it shows in everything — from the classroom to the community.',
    name: 'Ananya Sharma',
    role: 'Parent · Class of 2025',
    image: IMAGES.portrait1,
  },
  {
    quote:
      'The research opportunities were extraordinary. I worked alongside faculty on real problems from my first year — that experience defined the trajectory of my career.',
    name: 'Daniel Osei',
    role: 'Alumnus · Applied Sciences ’22',
    image: IMAGES.portrait2,
  },
  {
    quote:
      'What sets this place apart is the culture. Ambitious, kind and genuinely international — I left with a global network and a sense of who I wanted to become.',
    name: 'Mei Lin',
    role: 'Alumna · Global Studies ’23',
    image: IMAGES.portrait3,
  },
]

export const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Academics: [
    { label: 'Curriculum', href: '#academics' },
    { label: 'Learning Environment', href: '#education' },
    { label: 'Faculty & Staff', href: '#about' },
    { label: 'Hall of Fame', href: '#discover' },
    { label: 'Fee Structure', href: '#enquiry' },
  ],
  Admissions: [
    { label: 'Apply Now', href: '#enquiry' },
    { label: 'Admission Notice', href: '#enquiry' },
    { label: 'Scholarships', href: '#faq' },
    { label: 'Transfer Certificate', href: '#enquiry' },
    { label: 'Visit Campus', href: '#enquiry' },
  ],
  'Student Life': [
    { label: 'Clubs & Societies', href: '#skills' },
    { label: 'Sports', href: '#skills' },
    { label: 'Housing', href: '#community' },
    { label: 'Wellbeing', href: '#community' },
    { label: 'Events', href: '#discover' },
  ],
  Institution: [
    { label: 'About Us', href: '#about' },
    { label: 'Message from Director', href: '#about' },
    { label: 'Infrastructure', href: '#education' },
    { label: 'Announcements', href: '#discover' },
    { label: 'Parent’s Speak', href: '#testimonials' },
  ],
}

export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

export const CONTACT = {
  address: 'University Road, Deralakatte, Mangaluru 575018, India',
  phone: '+91 824 000 0000',
  phoneHref: 'tel:+918240000000',
  email: 'admissions@yenepoyaworld.edu',
  emailHref: 'mailto:admissions@yenepoyaworld.edu',
}
