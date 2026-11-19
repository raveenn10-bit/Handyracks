export type FinishId =
  | "white"
  | "oak"
  | "teak"
  | "black"
  | "gold-metal"
  | "black-metal";

export interface FinishOption {
  id: FinishId;
  name: string;
  hex: string;
  borderHex?: string;
  image?: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  segment: "residential" | "commercial";
  description: string;
  coverImage: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  segment: "residential" | "commercial";
  badge: "Catalogue Product" | "Showcase Concept" | "Design Inspiration";
  shortDescription: string;
  description: string;
  material?: string;
  standardSizes: string[];
  dimensionsNote?: string;
  loadNote?: string;
  finishes: FinishOption[];
  images: {
    url: string;
    alt: string;
    type: "studio" | "lifestyle" | "detail";
  }[];
  diagramType?:
    | "floating-shelf"
    | "ledge-shelf"
    | "cubicle-shelf"
    | "honeycomb-shelf"
    | "corner-shelf"
    | "foldable-table"
    | "handy-shelf";
  featured?: boolean;
}

export const FINISH_SWATCHES: Record<FinishId, FinishOption> = {
  white: { id: "white", name: "Matte White", hex: "#F7F6F2", borderHex: "#D6CFC3" },
  oak: { id: "oak", name: "Natural Oak", hex: "#B88B5D" },
  teak: { id: "teak", name: "Rich Teak", hex: "#6E472B" },
  black: { id: "black", name: "Matte Black", hex: "#242824" },
  "gold-metal": { id: "gold-metal", name: "Brushed Gold Metal", hex: "#B89B58" },
  "black-metal": { id: "black-metal", name: "Black Powder-Coated Metal", hex: "#1F221F" },
};

export const CATEGORIES: ProductCategory[] = [
  {
    slug: "floating-shelves",
    name: "Floating Shelves",
    segment: "residential",
    description: "Concealed-bracket wall shelves in Melamine Coated MDF with custom lengths and finishes.",
    coverImage: "/images/products/floating-shelf/floating-shelf-oak.webp",
  },
  {
    slug: "decorative-wall-shelves",
    name: "Decorative Wall Shelves",
    segment: "residential",
    description: "Ledge shelves, geometric cubicles, hexagonal honeycombs, and hanging wall platforms.",
    coverImage: "/images/products/honeycomb-shelves/honeycomb-shelves-oak-set.webp",
  },
  {
    slug: "desk-organisers",
    name: "Desk Organisers",
    segment: "residential",
    description: "Adjustable geometric desktop organisers for home offices, study desks, and countertops.",
    coverImage: "/images/products/desk-organiser/desk-organiser-oak.webp",
  },
  {
    slug: "bookshelves",
    name: "Bookshelves & Book Trees",
    segment: "residential",
    description: "Vertical 180cm Handy Shelves and angled-branch Book Trees crafted for compact spaces.",
    coverImage: "/images/products/book-tree/book-tree-oak.webp",
  },
  {
    slug: "shoe-storage",
    name: "Shoe Storage",
    segment: "residential",
    description: "Multi-level modern shoe cupboards with curved side profiles and custom tier spacing.",
    coverImage: "/images/products/shoe-cupboard/shoe-cupboard-curved-white-oak.webp",
  },
  {
    slug: "foldable-tables",
    name: "Foldable Tables",
    segment: "residential",
    description: "Space-saving wall-mounted folding desks for apartments and compact workspaces.",
    coverImage: "/images/products/foldable-table/foldable-table-oak-open.webp",
  },
  {
    slug: "commercial-display-racks",
    name: "Commercial Display Racks",
    segment: "commercial",
    description: "Luxury brushed gold and matte black metal retail shelving, garment racks, and display tables.",
    coverImage: "/images/products/commercial-racks/gold-frame-display-shelving-unit.webp",
  },
  {
    slug: "custom-furniture",
    name: "Custom Furniture & Inspiration",
    segment: "residential",
    description: "Bespoke TV wall units, kitchen shelving, and tailored residential storage concepts.",
    coverImage: "/images/inspiration/living-room-tv-wall.webp",
  },
];

export const PRODUCTS: Product[] = [
  // 12 CONFIRMED WHATSAPP CATALOGUE PRODUCTS
  {
    id: "prod-01",
    slug: "floating-shelf",
    name: "Floating Shelf",
    categorySlug: "floating-shelves",
    categoryName: "Floating Shelves",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "Minimalist concealed-bracket wall shelf in Quality Melamine Coated MDF.",
    description:
      "Handy Racks signature floating wall shelf engineered for living rooms, kitchens, study walls, and trophy displays. Clean architectural lines with 3.6cm profile thickness and custom length options.",
    material: "Quality Melamine Coated MDF",
    standardSizes: [
      "40cm × 24cm × 3.6cm",
      "60cm × 24cm × 3.6cm",
      "80cm × 24cm × 3.6cm",
      "100cm × 24cm × 3.6cm",
      "120cm × 24cm × 3.6cm",
    ],
    dimensionsNote: "Reference depth: 24cm | Reference thickness: 3.6cm. Custom lengths available on request.",
    diagramType: "floating-shelf",
    finishes: [
      { ...FINISH_SWATCHES.oak, image: "/images/products/floating-shelf/floating-shelf-oak.webp" },
      { ...FINISH_SWATCHES.teak, image: "/images/products/floating-shelf/floating-shelf-teak.webp" },
      { ...FINISH_SWATCHES.white, image: "/images/products/floating-shelf/floating-shelf-white.webp" },
      { ...FINISH_SWATCHES.black, image: "/images/products/floating-shelf/floating-shelf-black.webp" },
    ],
    images: [
      { url: "/images/products/floating-shelf/floating-shelf-oak.webp", alt: "Natural Oak Floating Shelf", type: "studio" },
      { url: "/images/products/floating-shelf/floating-shelf-teak.webp", alt: "Teak Floating Shelf", type: "studio" },
      { url: "/images/products/floating-shelf/floating-shelf-white.webp", alt: "Matte White Floating Shelf", type: "studio" },
      { url: "/images/products/floating-shelf/floating-shelf-black.webp", alt: "Matte Black Floating Shelf", type: "studio" },
      { url: "/images/inspiration/kitchen-floating-shelves.webp", alt: "Kitchen floating shelf arrangement", type: "lifestyle" },
    ],
  },
  {
    id: "prod-02",
    slug: "ledge-shelf",
    name: "Ledge Shelf",
    categorySlug: "decorative-wall-shelves",
    categoryName: "Decorative Wall Shelves",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "Slim picture-ledge wall shelf with raised front lip for frames, books, and decor.",
    description:
      "Designed with a protective front lip (6cm profile height, 11.5cm inner depth, 14.5cm overall depth) so framed artwork, vinyls, and books stay securely displayed without cluttering floor space.",
    standardSizes: ["60cm × 14.5cm × 6cm", "80cm × 14.5cm × 6cm", "100cm × 14.5cm × 6cm"],
    dimensionsNote: "Height: 6cm | Inner depth: 11.5cm | Overall depth: 14.5cm.",
    diagramType: "ledge-shelf",
    finishes: [
      { ...FINISH_SWATCHES.oak, image: "/images/products/ledge-shelf/ledge-shelf-oak.webp" },
      FINISH_SWATCHES.white,
      FINISH_SWATCHES.teak,
      FINISH_SWATCHES.black,
    ],
    images: [
      { url: "/images/products/ledge-shelf/ledge-shelf-oak.webp", alt: "Natural Oak Ledge Shelf", type: "studio" },
    ],
  },
  {
    id: "prod-03",
    slug: "cubicle-shelves",
    name: "Cubicle Shelves",
    categorySlug: "decorative-wall-shelves",
    categoryName: "Decorative Wall Shelves",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "Square wall-mounted cubicle shelves (35cm × 35cm × 10cm) in single or 3-piece sets.",
    description:
      "Modular square wall cubicles that can be mounted individually, in staggered 3-piece arrangements, or in full multi-cubicle wall compositions for living rooms and bedrooms.",
    standardSizes: ["Single: 35cm × 35cm × 10cm", "3-Piece Set (35cm × 35cm × 10cm each)"],
    dimensionsNote: "Reference cubicle size: 35cm W × 35cm H × 10cm D.",
    diagramType: "cubicle-shelf",
    finishes: [
      { ...FINISH_SWATCHES.white, image: "/images/products/cubicle-shelves/cubicle-shelves-white-set.webp" },
      { ...FINISH_SWATCHES.black, image: "/images/products/cubicle-shelves/cubicle-shelves-black-set.webp" },
      FINISH_SWATCHES.oak,
      FINISH_SWATCHES.teak,
    ],
    images: [
      { url: "/images/products/cubicle-shelves/cubicle-shelves-white-set.webp", alt: "Matte White 3-Piece Cubicle Shelves", type: "studio" },
      { url: "/images/products/cubicle-shelves/cubicle-shelves-black-set.webp", alt: "Matte Black 3-Piece Cubicle Shelves", type: "studio" },
    ],
  },
  {
    id: "prod-04",
    slug: "honeycomb-shelves",
    name: "Honeycomb Shelves",
    categorySlug: "decorative-wall-shelves",
    categoryName: "Decorative Wall Shelves",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "Hexagonal wall-mounted shelves (~35cm × 30cm) for geometric feature walls.",
    description:
      "Precision-mitred hexagonal honeycomb wall shelves designed for single accent mounting or clustered geometric wall compositions.",
    standardSizes: ["Single Comb: ~35cm × 30cm (1.6cm thick)", "3-Piece Cluster Set"],
    dimensionsNote: "Approx. 35cm W × 30cm H, 1.6cm board thickness.",
    loadNote: "Catalogue reference load capacity: 3kg per comb (confirm final mounting spec on enquiry).",
    diagramType: "honeycomb-shelf",
    finishes: [
      { ...FINISH_SWATCHES.oak, image: "/images/products/honeycomb-shelves/honeycomb-shelves-oak-set.webp" },
      FINISH_SWATCHES.white,
      FINISH_SWATCHES.teak,
      FINISH_SWATCHES.black,
    ],
    images: [
      { url: "/images/products/honeycomb-shelves/honeycomb-shelves-oak-set.webp", alt: "Natural Oak Honeycomb Shelves 3-Piece Set", type: "studio" },
    ],
  },
  {
    id: "prod-05",
    slug: "desk-organiser",
    name: "Desk Organiser",
    categorySlug: "desk-organisers",
    categoryName: "Desk Organisers",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "Adjustable geometric desktop organiser for study desks, offices, and countertops.",
    description:
      "Multi-compartment desktop organiser with vertical dividers and horizontal cubbies, adaptable to home offices, study tables, dressing tables, and kitchen countertops.",
    standardSizes: ["Standard Adjustable Set (15cm D × 25cm upright H × 30cm section W)"],
    dimensionsNote: "Reference section details: 15cm depth, 25cm upright height, 30cm section width. Custom overall widths available.",
    finishes: [
      { ...FINISH_SWATCHES.oak, image: "/images/products/desk-organiser/desk-organiser-oak.webp" },
      { ...FINISH_SWATCHES.white, image: "/images/products/desk-organiser/desk-organiser-white.webp" },
      FINISH_SWATCHES.teak,
      FINISH_SWATCHES.black,
    ],
    images: [
      { url: "/images/products/desk-organiser/desk-organiser-oak.webp", alt: "Natural Oak Desk Organiser", type: "studio" },
      { url: "/images/products/desk-organiser/desk-organiser-white.webp", alt: "Matte White Desk Organiser", type: "studio" },
    ],
  },
  {
    id: "prod-06",
    slug: "floating-cubic-set",
    name: "Floating Cubic Set",
    categorySlug: "decorative-wall-shelves",
    categoryName: "Decorative Wall Shelves",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "Coordinated 3-piece set with rectangular frame, square frame, and straight shelf.",
    description:
      "Architectural wall composition pairing a large rectangular frame shelf, a compact square frame shelf, and a straight floating shelf in contrasting or matching finishes.",
    standardSizes: ["3-Piece Coordinated Wall Set (Customisable)"],
    finishes: [
      { ...FINISH_SWATCHES.white, image: "/images/products/floating-cubic-set/floating-cubic-set-white-oak.webp" },
      FINISH_SWATCHES.oak,
      FINISH_SWATCHES.teak,
      FINISH_SWATCHES.black,
    ],
    images: [
      { url: "/images/products/floating-cubic-set/floating-cubic-set-white-oak.webp", alt: "Floating Cubic Set in White and Oak", type: "studio" },
      { url: "/images/hero/hero-residential-living.webp", alt: "Floating Cubic Set in Living Room", type: "lifestyle" },
    ],
  },
  {
    id: "prod-07",
    slug: "corner-shelf",
    name: "Corner Shelf",
    categorySlug: "decorative-wall-shelves",
    categoryName: "Decorative Wall Shelves",
    segment: "residential",
    badge: "Catalogue Product",
    featured: false,
    shortDescription: "Quarter-circle radial corner wall shelf (18mm thick) in three standard radii.",
    description:
      "Clean quarter-circle radial shelf designed to turn unused 90-degree wall corners in bedrooms, bathrooms, and kitchens into functional display space.",
    standardSizes: ["30cm × 30cm × 18mm", "38cm × 38cm × 18mm", "45cm × 45cm × 18mm"],
    dimensionsNote: "Reference thickness: 18mm.",
    diagramType: "corner-shelf",
    finishes: [
      { ...FINISH_SWATCHES.oak, image: "/images/products/corner-shelf/corner-shelf-oak.webp" },
      FINISH_SWATCHES.white,
      FINISH_SWATCHES.teak,
      FINISH_SWATCHES.black,
    ],
    images: [
      { url: "/images/products/corner-shelf/corner-shelf-oak.webp", alt: "Natural Oak Quarter-Circle Corner Shelf", type: "studio" },
    ],
  },
  {
    id: "prod-08",
    slug: "wall-hanging-shelf",
    name: "Wall Hanging Shelf",
    categorySlug: "decorative-wall-shelves",
    categoryName: "Decorative Wall Shelves",
    segment: "residential",
    badge: "Catalogue Product",
    featured: false,
    shortDescription: "45cm wooden platform shelf with minimalist triangular cord suspension.",
    description:
      "Single-point suspended wooden display platform ideal for trailing indoor plants, bedside accents, and minimalist living room corners.",
    standardSizes: ["45cm Width (Custom sizes on request)"],
    dimensionsNote: "Reference width: 45cm. Full height and depth confirmed upon order.",
    finishes: [
      { ...FINISH_SWATCHES.oak, image: "/images/products/wall-hanging-shelf/wall-hanging-shelf-oak.webp" },
      FINISH_SWATCHES.teak,
      FINISH_SWATCHES.white,
    ],
    images: [
      { url: "/images/products/wall-hanging-shelf/wall-hanging-shelf-oak.webp", alt: "Natural Oak Wall Hanging Shelf", type: "studio" },
    ],
  },
  {
    id: "prod-09",
    slug: "handy-shelf",
    name: "Handy Shelf",
    categorySlug: "bookshelves",
    categoryName: "Bookshelves & Book Trees",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "180cm tall vertical statement shelf with staggered horizontal display tiers.",
    description:
      "Signature tall vertical storage column featuring a central structural spine and alternating horizontal shelves for books, collectibles, and home decor.",
    standardSizes: ["180cm Height (Custom widths & depths available)"],
    dimensionsNote: "Visible reference height: 180cm.",
    diagramType: "handy-shelf",
    finishes: [
      { ...FINISH_SWATCHES.oak, image: "/images/products/handy-shelf/handy-shelf-180cm.webp" },
      FINISH_SWATCHES.white,
      FINISH_SWATCHES.teak,
      FINISH_SWATCHES.black,
    ],
    images: [
      { url: "/images/products/handy-shelf/handy-shelf-180cm.webp", alt: "180cm Handy Shelf Vertical Display", type: "studio" },
    ],
  },
  {
    id: "prod-10",
    slug: "book-tree",
    name: "Book Tree",
    categorySlug: "bookshelves",
    categoryName: "Bookshelves & Book Trees",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "Freestanding tree-style bookshelf with angled branch-like shelves.",
    description:
      "Compact-footprint vertical bookshelf with distinctive V-angled branch shelves that hold books securely while serving as a sculptural focal point.",
    standardSizes: ["Compact 8-Tier", "Tall 12-Tier (Custom heights available)"],
    finishes: [
      { ...FINISH_SWATCHES.white, image: "/images/products/book-tree/book-tree-white.webp" },
      { ...FINISH_SWATCHES.oak, image: "/images/products/book-tree/book-tree-oak.webp" },
      FINISH_SWATCHES.teak,
      FINISH_SWATCHES.black,
    ],
    images: [
      { url: "/images/products/book-tree/book-tree-oak.webp", alt: "Natural Oak Book Tree", type: "studio" },
      { url: "/images/products/book-tree/book-tree-white.webp", alt: "Matte White Book Tree", type: "studio" },
      { url: "/images/hero/hero-residential-living.webp", alt: "Book Tree in Living Room", type: "lifestyle" },
    ],
  },
  {
    id: "prod-11",
    slug: "foldable-table",
    name: "Foldable Table",
    categorySlug: "foldable-tables",
    categoryName: "Foldable Tables",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "Wall-mounted folding laptop & study desk in 60×40cm and 80cm widths.",
    description:
      "Space-saving drop-leaf wall desk engineered for apartments, bedrooms, and compact home offices. Folds flat against the wall when not in use.",
    standardSizes: ["60cm × 40cm", "80cm Width (Custom depths available)"],
    diagramType: "foldable-table",
    finishes: [
      { ...FINISH_SWATCHES.oak, image: "/images/products/foldable-table/foldable-table-oak-open.webp" },
      FINISH_SWATCHES.white,
      FINISH_SWATCHES.teak,
      FINISH_SWATCHES.black,
    ],
    images: [
      { url: "/images/products/foldable-table/foldable-table-oak-open.webp", alt: "Wall-Mounted Foldable Table Open", type: "studio" },
      { url: "/images/inspiration/home-office-foldable-desk.webp", alt: "Foldable Desk in Home Office", type: "lifestyle" },
    ],
  },
  {
    id: "prod-12",
    slug: "shoe-cupboard",
    name: "Shoe Cupboard",
    categorySlug: "shoe-storage",
    categoryName: "Shoe Storage",
    segment: "residential",
    badge: "Catalogue Product",
    featured: true,
    shortDescription: "Modern multi-level shoe storage cupboard with curved side panels.",
    description:
      "Entryway multi-tier shoe storage cupboard featuring distinctive rounded side profiles and clean open or adjustable shelf tiers.",
    standardSizes: ["4-Tier Standard", "5-Tier Tall", "Custom Width & Tier Count"],
    finishes: [
      { ...FINISH_SWATCHES.white, image: "/images/products/shoe-cupboard/shoe-cupboard-curved-white-oak.webp" },
      FINISH_SWATCHES.oak,
      FINISH_SWATCHES.teak,
    ],
    images: [
      { url: "/images/products/shoe-cupboard/shoe-cupboard-curved-white-oak.webp", alt: "Curved-Side White and Oak Shoe Cupboard", type: "studio" },
    ],
  },

  // COMMERCIAL DISPLAY RACK COLLECTION (HIGH PRIORITY SHOWCASE)
  {
    id: "comm-01",
    slug: "gold-metal-retail-wall-rack",
    name: "Gold Metal Retail Wall Rack",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    featured: true,
    shortDescription: "Brushed gold steel frame wall-mounted display rack with white shelves.",
    description:
      "Architectural wall-mounted retail shelving system combining a brushed gold metal frame with crisp white melamine shelves for boutiques, salons, and gift stores.",
    standardSizes: ["Custom Width × Height × Depth"],
    finishes: [
      { ...FINISH_SWATCHES["gold-metal"], image: "/images/products/commercial-racks/gold-metal-retail-wall-rack.webp" },
      FINISH_SWATCHES["black-metal"],
    ],
    images: [
      { url: "/images/products/commercial-racks/gold-metal-retail-wall-rack.webp", alt: "Gold Metal Retail Wall Rack", type: "studio" },
      { url: "/images/inspiration/showroom-ceramics-gold.webp", alt: "Gold Retail Wall Rack in Ceramic Store", type: "lifestyle" },
    ],
  },
  {
    id: "comm-02",
    slug: "gold-frame-display-shelving-unit",
    name: "Gold Frame Display Shelving Unit",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    featured: true,
    shortDescription: "Tall freestanding brushed gold metal shelving unit with 5 white display tiers.",
    description:
      "Full-height freestanding showroom display unit built with a welded brushed gold metal frame and clean white display shelves.",
    standardSizes: ["Custom Showroom Dimensions"],
    finishes: [
      { ...FINISH_SWATCHES["gold-metal"], image: "/images/products/commercial-racks/gold-frame-display-shelving-unit.webp" },
      FINISH_SWATCHES["black-metal"],
    ],
    images: [
      { url: "/images/products/commercial-racks/gold-frame-display-shelving-unit.webp", alt: "Gold Frame Display Shelving Unit", type: "studio" },
      { url: "/images/hero/hero-commercial-gold-showroom.webp", alt: "Gold Frame Shelving in Boutique Showroom", type: "lifestyle" },
    ],
  },
  {
    id: "comm-03",
    slug: "black-metal-retail-display-rack",
    name: "Black Metal Retail Display Rack",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    featured: true,
    shortDescription: "Matte black powder-coated steel frame display rack with Natural Oak shelves.",
    description:
      "Industrial-minimalist commercial display unit pairing matte black square tube framing with warm Natural Oak shelves.",
    standardSizes: ["Custom Retail Dimensions"],
    finishes: [
      { ...FINISH_SWATCHES["black-metal"], image: "/images/products/commercial-racks/black-metal-retail-display-rack.webp" },
      FINISH_SWATCHES["gold-metal"],
    ],
    images: [
      { url: "/images/products/commercial-racks/black-metal-retail-display-rack.webp", alt: "Black Metal Retail Display Rack", type: "studio" },
      { url: "/images/hero/hero-black-metal-studio.webp", alt: "Black Metal Rack in Studio", type: "lifestyle" },
    ],
  },
  {
    id: "comm-04",
    slug: "multi-level-commercial-display-rack",
    name: "Multi-Level Commercial Display Rack",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    shortDescription: "Wide tiered retail island rack with black steel frame and teak-finish shelving.",
    description:
      "Heavy-duty multi-level commercial merchandising rack ideal for homeware stores, supermarkets, flower shops, and ceramic showrooms.",
    standardSizes: ["Custom Island Dimensions"],
    finishes: [
      { ...FINISH_SWATCHES["black-metal"], image: "/images/products/commercial-racks/multi-level-commercial-display-rack.webp" },
      FINISH_SWATCHES.teak,
    ],
    images: [
      { url: "/images/products/commercial-racks/multi-level-commercial-display-rack.webp", alt: "Multi-Level Commercial Display Rack", type: "studio" },
      { url: "/images/inspiration/flower-gift-shop-teak-black.webp", alt: "Multi-Level Rack in Flower and Gift Shop", type: "lifestyle" },
    ],
  },
  {
    id: "comm-05",
    slug: "gold-frame-centre-display-table",
    name: "Gold Frame Centre Display Table",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    shortDescription: "Rectangular brushed gold metal frame centre table with matte white top.",
    description:
      "Clean centre-floor merchandising table for folding apparel, gifting collections, handbags, and ceramics.",
    standardSizes: ["Custom Table Dimensions"],
    finishes: [
      { ...FINISH_SWATCHES["gold-metal"], image: "/images/products/commercial-racks/gold-frame-centre-display-table.webp" },
      FINISH_SWATCHES["black-metal"],
    ],
    images: [
      { url: "/images/products/commercial-racks/gold-frame-centre-display-table.webp", alt: "Gold Frame Centre Display Table", type: "studio" },
    ],
  },
  {
    id: "comm-06",
    slug: "two-tier-retail-display-table",
    name: "Two-Tier Retail Display Table",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    shortDescription: "Nesting two-tier gold metal and white retail display table set.",
    description:
      "Two-level nesting centre display tables offering layered product presentation for boutiques, cosmetics stores, and homeware showrooms.",
    standardSizes: ["Custom Nesting Pair Dimensions"],
    finishes: [
      { ...FINISH_SWATCHES["gold-metal"], image: "/images/products/commercial-racks/two-tier-retail-display-table.webp" },
      FINISH_SWATCHES["black-metal"],
    ],
    images: [
      { url: "/images/products/commercial-racks/two-tier-retail-display-table.webp", alt: "Two-Tier Retail Display Table", type: "studio" },
    ],
  },
  {
    id: "comm-07",
    slug: "open-geometric-gold-display-unit",
    name: "Open Geometric Gold Display Unit",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    shortDescription: "Architectural staggered gold metal display unit with asymmetric white shelves.",
    description:
      "Statement showroom divider and feature display rack with open geometric bays for curated retail merchandising.",
    standardSizes: ["Custom Architectural Dimensions"],
    finishes: [
      { ...FINISH_SWATCHES["gold-metal"], image: "/images/products/commercial-racks/open-geometric-gold-display-unit.webp" },
    ],
    images: [
      { url: "/images/products/commercial-racks/open-geometric-gold-display-unit.webp", alt: "Open Geometric Gold Display Unit", type: "studio" },
    ],
  },
  {
    id: "comm-08",
    slug: "gold-clothing-display-rack",
    name: "Gold Clothing Display Rack",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    featured: true,
    shortDescription: "Brushed gold freestanding boutique garment hanging rack with white base shelf.",
    description:
      "Minimalist boutique clothing rail in brushed gold metal paired with an integrated bottom white shelf for footwear or folded garments.",
    standardSizes: ["Custom Rail Width & Height"],
    finishes: [
      { ...FINISH_SWATCHES["gold-metal"], image: "/images/products/commercial-racks/gold-clothing-display-rack.webp" },
      { ...FINISH_SWATCHES["black-metal"], image: "/images/products/commercial-racks/boutique-garment-hanging-rack-black.webp" },
    ],
    images: [
      { url: "/images/products/commercial-racks/gold-clothing-display-rack.webp", alt: "Gold Clothing Display Rack", type: "studio" },
      { url: "/images/hero/hero-commercial-gold-showroom.webp", alt: "Gold Clothing Rack in Showroom", type: "lifestyle" },
    ],
  },
  {
    id: "comm-09",
    slug: "boutique-garment-hanging-rack",
    name: "Boutique Garment Hanging Rack",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    shortDescription: "Matte black steel boutique garment hanging rack with Natural Oak base shelf.",
    description:
      "Contemporary apparel display rail built with matte black steel tubing and a warm Natural Oak lower platform.",
    standardSizes: ["Custom Boutique Dimensions"],
    finishes: [
      { ...FINISH_SWATCHES["black-metal"], image: "/images/products/commercial-racks/boutique-garment-hanging-rack-black.webp" },
      { ...FINISH_SWATCHES["gold-metal"], image: "/images/products/commercial-racks/gold-clothing-display-rack.webp" },
    ],
    images: [
      { url: "/images/products/commercial-racks/boutique-garment-hanging-rack-black.webp", alt: "Boutique Garment Hanging Rack Black", type: "studio" },
    ],
  },
  {
    id: "comm-10",
    slug: "cosmetics-display-shelving",
    name: "Cosmetics Display Shelving",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    shortDescription: "Compact tiered gold metal and white shelving unit with protective guard rails.",
    description:
      "Purpose-built retail display stand for skincare, perfumes, and cosmetics, featuring brushed gold guard rails and stepped white display tiers.",
    standardSizes: ["Custom Cosmetics Stand Dimensions"],
    finishes: [
      { ...FINISH_SWATCHES["gold-metal"], image: "/images/products/commercial-racks/cosmetics-display-shelving.webp" },
    ],
    images: [
      { url: "/images/products/commercial-racks/cosmetics-display-shelving.webp", alt: "Cosmetics Display Shelving", type: "studio" },
    ],
  },
  {
    id: "comm-11",
    slug: "black-metal-and-wood-display-cabinet",
    name: "Black Metal and Wood Display Cabinet",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    shortDescription: "Tall black steel frame display unit with Natural Oak shelves and base storage.",
    description:
      "Combined open-display and enclosed-stock cabinet for retail stores and studios, keeping backup inventory neatly hidden below.",
    standardSizes: ["Custom Cabinet Dimensions"],
    finishes: [
      { ...FINISH_SWATCHES["black-metal"], image: "/images/products/commercial-racks/black-metal-wood-display-cabinet.webp" },
    ],
    images: [
      { url: "/images/products/commercial-racks/black-metal-wood-display-cabinet.webp", alt: "Black Metal and Wood Display Cabinet", type: "studio" },
    ],
  },
  {
    id: "comm-12",
    slug: "commercial-gondola-display-unit",
    name: "Commercial Gondola-Style Display Unit",
    categorySlug: "commercial-display-racks",
    categoryName: "Commercial Display Racks",
    segment: "commercial",
    badge: "Showcase Concept",
    shortDescription: "Double-sided retail gondola shelving unit with black steel frame and oak shelves.",
    description:
      "High-capacity double-sided retail aisle gondola engineered for homeware stores, pharmacies, gift shops, and specialty supermarkets.",
    standardSizes: ["Custom Aisle Length & Height"],
    finishes: [
      { ...FINISH_SWATCHES["black-metal"], image: "/images/products/commercial-racks/commercial-gondola-display-unit.webp" },
    ],
    images: [
      { url: "/images/products/commercial-racks/commercial-gondola-display-unit.webp", alt: "Commercial Gondola-Style Display Unit", type: "studio" },
    ],
  },

  // DESIGN INSPIRATION CONCEPTS
  {
    id: "insp-01",
    slug: "modern-tv-wall-display",
    name: "Modern TV Wall Display & Floating Console",
    categorySlug: "custom-furniture",
    categoryName: "Custom Furniture & Inspiration",
    segment: "residential",
    badge: "Design Inspiration",
    shortDescription: "Custom Design Concept combining a floating TV console with asymmetric wall cubicles.",
    description:
      "Illustrative residential living room concept combining a custom floating media console with matte black and Natural Oak wall-mounted display boxes.",
    standardSizes: ["Custom Wall-to-Wall Sizing"],
    finishes: [FINISH_SWATCHES.oak, FINISH_SWATCHES.black, FINISH_SWATCHES.white],
    images: [
      { url: "/images/inspiration/living-room-tv-wall.webp", alt: "Modern TV Wall Display Design Inspiration", type: "lifestyle" },
    ],
  },
  {
    id: "insp-02",
    slug: "kitchen-wall-shelving-concept",
    name: "Kitchen Wall Shelving Concept",
    categorySlug: "custom-furniture",
    categoryName: "Custom Furniture & Inspiration",
    segment: "residential",
    badge: "Design Inspiration",
    shortDescription: "Custom Design Concept for multi-tier Natural Oak kitchen wall shelving.",
    description:
      "Illustrative kitchen storage concept using custom-length Natural Oak floating shelves for daily tableware, spice jars, and indoor herbs.",
    standardSizes: ["Custom Kitchen Wall Lengths"],
    finishes: [FINISH_SWATCHES.oak, FINISH_SWATCHES.teak, FINISH_SWATCHES.white],
    images: [
      { url: "/images/inspiration/kitchen-floating-shelves.webp", alt: "Kitchen Wall Shelving Design Inspiration", type: "lifestyle" },
    ],
  },
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Tropical Living Room — Book Tree & Cubic Set",
    category: "Residential Shelving",
    tag: "Design Inspiration",
    image: "/images/hero/hero-residential-living.webp",
  },
  {
    id: "gal-2",
    title: "Luxury Gold-Frame Boutique Showroom",
    category: "Retail Showrooms",
    tag: "Design Inspiration",
    image: "/images/hero/hero-commercial-gold-showroom.webp",
  },
  {
    id: "gal-3",
    title: "Black Steel & Oak Retail Studio",
    category: "Commercial Display Racks",
    tag: "Design Inspiration",
    image: "/images/hero/hero-black-metal-studio.webp",
  },
  {
    id: "gal-4",
    title: "Ceramic & Homeware Store — Gold Wall Racks",
    category: "Retail Showrooms",
    tag: "Design Inspiration",
    image: "/images/inspiration/showroom-ceramics-gold.webp",
  },
  {
    id: "gal-5",
    title: "Flower & Gift Shop — Teak & Black Steel Islands",
    category: "Commercial Display Racks",
    tag: "Design Inspiration",
    image: "/images/inspiration/flower-gift-shop-teak-black.webp",
  },
  {
    id: "gal-6",
    title: "Modern Kitchen — Dual Oak Floating Shelves",
    category: "Kitchen",
    tag: "Design Inspiration",
    image: "/images/inspiration/kitchen-floating-shelves.webp",
  },
  {
    id: "gal-7",
    title: "Living Room — Floating TV Unit & Wall Cubicles",
    category: "Custom Storage",
    tag: "Design Inspiration",
    image: "/images/inspiration/living-room-tv-wall.webp",
  },
  {
    id: "gal-8",
    title: "Home Office — Wall-Mounted Foldable Desk",
    category: "Home Office",
    tag: "Design Inspiration",
    image: "/images/inspiration/home-office-foldable-desk.webp",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
