export interface ProcessStage {
  num: string
  title: string
  desc: string
  image: string
  imageAlt: string
}

export const processStages: ProcessStage[] = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We begin with your brand, your product and the purpose behind the piece.',
    image: '/images/atelier-workshop-detail.jpg',
    imageAlt: 'Workshop detail during early exploration',
  },
  {
    num: '02',
    title: 'Develop',
    desc: 'Ideas become structures, materials, finishes and considered details.',
    image: '/images/packaging-luxury-box.jpg',
    imageAlt: 'Plain white rigid presentation box, structure taking shape',
  },
  {
    num: '03',
    title: 'Refine',
    desc: 'We explore papers, boards, textures, colours and specialist finishes to find the right combination.',
    image: '/images/material-speciality-papers.jpg',
    imageAlt: 'Specialty paper texture detail',
  },
  {
    num: '04',
    title: 'Produce',
    desc: 'Every piece is produced with precision and close attention to detail.',
    image: '/images/material-screen-print.jpg',
    imageAlt: 'Screen printing process detail',
  },
  {
    num: '05',
    title: 'Finish',
    desc: 'From embossing and debossing to foiling, speciality papers and bespoke constructions, the final details bring the work together.',
    image: '/images/material-copper-foil.jpg',
    imageAlt: 'Crumpled copper foil detail',
  },
  {
    num: '06',
    title: 'Deliver',
    desc: 'Finished pieces are prepared for delivery across the world.',
    image: '/images/packaging-paper-bag.jpg',
    imageAlt: 'Plain kraft paper carry bag',
  },
]

export interface Principle {
  title: string
  desc: string
}

export const principles: Principle[] = [
  { title: 'Thoughtful by Design.', desc: 'Every decision has a purpose, from the structure of a box to the feel of the paper.' },
  { title: 'Materials That Matter.', desc: 'The right material can transform how a product is seen, held and remembered.' },
  { title: 'Precision in Every Detail.', desc: 'Good packaging should feel effortless. That comes from getting the details right.' },
  { title: 'Made to Last.', desc: 'We create pieces designed to be experienced, kept and remembered.' },
]
