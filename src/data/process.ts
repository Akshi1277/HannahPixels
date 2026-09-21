export interface ProcessStage {
  num: string
  title: string
  desc: string
}

export const processStages: ProcessStage[] = [
  { num: '01', title: 'Discover', desc: 'We begin with your brand, your product and the purpose behind the piece.' },
  { num: '02', title: 'Develop', desc: 'Ideas become structures, materials, finishes and considered details.' },
  { num: '03', title: 'Refine', desc: 'We explore papers, boards, textures, colours and specialist finishes to find the right combination.' },
  { num: '04', title: 'Produce', desc: 'Every piece is produced with precision and close attention to detail.' },
  { num: '05', title: 'Finish', desc: 'From embossing and debossing to foiling, speciality papers and bespoke constructions, the final details bring the work together.' },
  { num: '06', title: 'Deliver', desc: 'Finished pieces are prepared for delivery across the world.' },
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
