export interface ProcessStage {
  num: string
  title: string
  desc: string
  paragraphs: string[]
  highlights?: string[]
  image: string
  imageAlt: string
}

export const processStages: ProcessStage[] = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We begin with your brand, your product and the purpose behind the piece.',
    paragraphs: [
      "Every commission begins with purpose. Before specifying paper weights or structural engineering, we immerse ourselves in your brand's world — understanding the tactile impression, emotional resonance, and unboxing ritual you wish to create.",
      "We analyze product dimensions, weight distribution, supply chain requirements, and retail or direct-to-consumer environments to establish the clear functional and aesthetic parameters of the piece."
    ],
    highlights: ['Brand Immersion', 'Structural Brief', 'Functional Sizing', 'Unboxing Architecture'],
    image: '/images/material-notebook-sketch.jpg',
    imageAlt: 'Notebook, pencil, and materials at the inception of a packaging project',
  },
  {
    num: '02',
    title: 'Develop',
    desc: 'Ideas become structures, materials, finishes and considered details.',
    paragraphs: [
      "Ideas take physical form through structural CAD engineering and unprinted white prototypes. Here, we calibrate proportions, wall thicknesses, hinge mechanics, and opening resistance.",
      "A box should never open carelessly — the gentle vacuum suction of a rigid lid, the crisp snap of concealed magnets, or the clean fold of a carton are engineered down to the millimeter."
    ],
    highlights: ['White Structural Mockups', 'Closure Mechanics', 'Fit & Tolerance Testing', 'Dieline Drafting'],
    image: '/images/material-corrugated-structure.jpg',
    imageAlt: 'Corrugated cardboard structure detail',
  },
  {
    num: '03',
    title: 'Refine',
    desc: 'We explore papers, boards, textures, colours and specialist finishes to find the right combination.',
    paragraphs: [
      "Material is message. We curate papers, boards, book cloths, and covering materials from specialist European and Japanese mills — evaluating grain direction, surface texture, folding memory, and weight.",
      "Every substrate interacts uniquely with light, inks, and foil stamps. We test embossing depths, compare blind deboss reliefs, and calibrate color profiles to ensure effortless tactile harmony."
    ],
    highlights: ['Substrate Curation', 'Texture Matching', 'Foil & Deboss Testing', 'Color Calibration'],
    image: '/images/material-speciality-papers.jpg',
    imageAlt: 'Specialty paper texture detail',
  },
  {
    num: '04',
    title: 'Produce',
    desc: 'Every piece is produced with precision and close attention to detail.',
    paragraphs: [
      "Precision moves to the press floor. Whether employing high-fidelity offset lithography, artisan screen printing, or deep blind stamping, every production run is monitored for absolute fidelity.",
      "Our master press operators inspect ink density, micro-registration, and edge sharpness continuously across the run, ensuring that unit number one matches unit number ten thousand."
    ],
    highlights: ['Offset Lithography', 'Micro-Registration', 'Ink Density Control', 'Press Sheet Inspection'],
    image: '/images/material-screen-print.jpg',
    imageAlt: 'Screen printing process detail',
  },
  {
    num: '05',
    title: 'Finish',
    desc: 'From embossing and debossing to foiling, speciality papers and bespoke constructions, the final details bring the work together.',
    paragraphs: [
      "The final embellishments define true luxury. Hot foil stamping, precision die-cutting, crisp score lines, and hand-wrapped box construction bring tactile depth to the piece.",
      "From custom die-cut inserts and hidden ribbon pulls to hand-glued lining papers, these artisanal finishing touches elevate packaging into an heirloom keepsake."
    ],
    highlights: ['Artisan Hot Foiling', 'Custom Rigid Box Wrapping', 'Magnetic Assembly', 'Hand Finishing & QC'],
    image: '/images/material-copper-foil.jpg',
    imageAlt: 'Crumpled copper foil detail',
  },
  {
    num: '06',
    title: 'Deliver',
    desc: 'Finished pieces are prepared for delivery across the world.',
    paragraphs: [
      "Finished pieces are inspected, hand-packed with protective tissue and custom corner guards, and prepared for secure transit to flagship stores, fulfillment centers, or private events worldwide.",
      "We coordinate international freight, manage customs documentation, and schedule phased rollouts so your packaging arrives immaculate, ready to introduce your product to the world."
    ],
    highlights: ['Protective Packaging', 'Global Logistics', 'Phased Rollouts', 'Fulfillment Support'],
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
