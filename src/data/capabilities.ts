export interface Capability {
  num: string
  slug: string
  title: string
  summary: string
  items: string[]
  image: string
  imageAlt: string
}

export const capabilities: Capability[] = [
  {
    num: '01',
    slug: 'luxury-packaging',
    title: 'Luxury Packaging',
    summary: 'Packaging designed for brands where every detail matters.',
    items: ['Rigid Boxes', 'Luxury Gift Boxes', 'Magnetic Closure Boxes', 'Drawer Boxes', 'Presentation Boxes', 'Bespoke Packaging'],
    image: '/images/packaging-luxury-box.jpg',
    imageAlt: 'Plain white rigid presentation box',
  },
  {
    num: '02',
    slug: 'product-packaging',
    title: 'Product Packaging',
    summary: 'Functional, distinctive packaging created around your product and brand.',
    items: ['Corrugated Boxes', 'Folding Cartons', 'Product Boxes', 'Custom Printed Boxes', 'E-commerce Packaging', 'Retail Packaging'],
    image: '/images/packaging-product-box.jpg',
    imageAlt: 'Plain kraft folding carton box',
  },
  {
    num: '03',
    slug: 'fragrance-beauty',
    title: 'Fragrance & Beauty',
    summary: 'Packaging created for the worlds of fragrance, beauty and personal care.',
    items: ['Perfume Boxes', 'Fragrance Packaging', 'Cosmetic Boxes', 'Beauty Packaging', 'Premium Presentation Sets'],
    image: '/images/packaging-fragrance-bottle.jpg',
    imageAlt: 'Unlabelled glass fragrance bottle',
  },
  {
    num: '04',
    slug: 'chocolate-confectionery',
    title: 'Chocolate & Confectionery',
    summary: 'Packaging that makes indulgence part of the experience.',
    items: ['Chocolate Boxes', 'Confectionery Packaging', 'Gift Boxes', 'Premium Food Packaging', 'Seasonal Packaging', 'Bespoke Collections'],
    image: '/images/packaging-chocolate-box.jpg',
    imageAlt: 'Plain striped gift box with ribbon',
  },
  {
    num: '05',
    slug: 'paper-carry',
    title: 'Paper & Carry',
    summary: 'Paper products that extend your brand beyond the package.',
    items: ['Luxury Paper Bags', 'Retail Bags', 'Gift Bags', 'Custom Printed Bags', 'Tissue & Wrapping Paper', 'Brand Collateral'],
    image: '/images/packaging-paper-bag.jpg',
    imageAlt: 'Plain kraft paper carry bag',
  },
  {
    num: '06',
    slug: 'books-publishing',
    title: 'Books & Publishing',
    summary: 'Print created for stories, ideas and objects worth keeping.',
    items: ['Books', 'Coffee Table Books', 'Art Books', 'Notebooks & Journals', 'Catalogues', 'Editorial Publishing', 'Corporate Publishing'],
    image: '/images/material-book-linen.jpg',
    imageAlt: 'Natural linen bookcloth texture detail',
  },
]
