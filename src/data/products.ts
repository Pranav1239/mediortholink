export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  material: string;
  certification: string;
  image: string;
  summary: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: 'pro-titan-hip',
    sku: 'MOL-THR-9021',
    name: 'ProTitan™ Total Hip Replacement System',
    category: 'Joint Replacements',
    material: 'Titanium Alloy (Ti-6Al-4V) & CoCrMo',
    certification: 'ISO 13485 & Govt. MSME Certified',
    image: '/images/698c43ed432314ea73136553_Card_Image.webp',
    summary: 'High-precision modular femoral heads and porous-coated stems for enhanced osseointegration and long-term joint stability.',
    specs: [
      'Porous titanium coating for primary mechanical stability',
      'High-polished cobalt-chrome alloy modular heads',
      'Ultra-high molecular weight polyethylene acetabular liner',
      'Available in 12 anatomical sizes (Left & Right offset options)',
      'Precision machined taper neck connection reducing fretting corrosion',
      'Biocompatible hydroxyapatite (HA) surface treatment option',
    ],
  },
  {
    id: 'flexilock-knee',
    sku: 'MOL-TKR-4410',
    name: 'FlexiLock™ Biconcave Knee Implant Set',
    category: 'Joint Replacements',
    material: 'Cobalt-Chrome & Highly Crosslinked Polyethylene',
    certification: 'ISO 13485 & Govt. Approved',
    image: '/images/698c8190d729cfa8619f96cf_download_2.webp',
    summary: 'Anatomically contoured total knee joint replacement engineered for optimal articulation kinematic performance.',
    specs: [
      'High-flexion femoral component supporting up to 145° bend',
      'Deep tibial locking mechanism preventing polyethylene wear',
      'Patellar resurfacing button with triple peg fixation',
      'Biocompatible surface finishing minimizing friction',
      'Symmetric & asymmetric tibial tray options for Asian morphometry',
    ],
  },
  {
    id: 'veloplate-trauma',
    sku: 'MOL-TRM-3108',
    name: 'VeloPlate™ Titanium Trauma Locking System',
    category: 'Trauma & Fixation',
    material: 'Medical Grade Ti-6Al-4V Grade 5',
    certification: 'ISO 13485 & Govt. MSME Certified',
    image: '/images/698c8238c6804b943f934e98_Card_Image_3.webp',
    summary: 'Low-profile anatomical locking compression plates and self-tapping screws for complex distal & proximal fracture fixation.',
    specs: [
      'Combi-holes allowing both locking and cortex screw insertion',
      'Pre-contoured anatomical shapes reducing operative bending time',
      'Color-coded titanium screws (3.5mm / 4.5mm / 5.0mm)',
      'Tapered plate ends for minimally invasive percutaneous insertion',
      'High fatigue strength designed for early patient weight-bearing',
    ],
  },
  {
    id: 'verteguard-spine',
    sku: 'MOL-SPN-7702',
    name: 'VerteGuard™ Pedicle Screw & Spinal Rod System',
    category: 'Spine & Arthroscopy',
    material: 'Titanium & PEEK (Polyether Ether Ketone)',
    certification: 'ISO 13485 Certified',
    image: '/images/698c8275ddd097906e5f0ebc_Card_Image_4.webp',
    summary: 'Dynamic polyaxial spinal pedicle screws and interbody cages designed for multi-level lumbar & thoracic stabilization.',
    specs: [
      'Polyaxial screw head allowing up to 55° multi-angle trajectory',
      'Friction-head design preventing premature screw floppiness',
      'Radiolucent PEEK lumbar cages with tantalum markers',
      'Self-breaking set screws ensuring accurate torque tightening',
      'Transverse rod connectors for rigid posterior column fixation',
    ],
  },
  {
    id: 'ultracut-power-tools',
    sku: 'MOL-INS-1190',
    name: 'UltraCut™ High-Torque Surgical Power Tool Set',
    category: 'Instruments & Tools',
    material: 'Autoclavable 316L Stainless Steel & Aluminum',
    certification: 'ISO 13485 & Govt. Approved',
    image: '/images/698c81b6e95d89b9e26989dc_Card_Image_1.webp',
    summary: 'Heavy-duty autoclavable battery-powered surgical drill and sagittal saw system for orthopaedic operating suites.',
    specs: [
      'Variable speed trigger (0 - 1,200 RPM high torque mode)',
      'Li-ion quick-recharge battery module with thermal protection',
      'Cannulated drill handpiece for K-wire & intramedullary pin driving',
      'IPX7 waterproof rating for steam sterilization',
      'Quick-coupling attachment for AO & Jacob chucks',
    ],
  },
  {
    id: 'endojoint-arthroscopy',
    sku: 'MOL-ART-5044',
    name: 'EndoJoint™ Arthroscopy Anchors & Cannulas',
    category: 'Spine & Arthroscopy',
    material: 'PEEK & Biocomposite Polymer',
    certification: 'ISO 13485 Certified',
    image: '/images/698c82a83074d76d7d745c04_download_7.webp',
    summary: 'Knotless suture anchors and fluid management cannulas for shoulder rotator cuff and knee ACL ligament reconstruction.',
    specs: [
      'High pull-out strength biocomposite thread geometry',
      'Pre-loaded with UltraBraid™ high-molecular suture tapes',
      'Flexible transparent arthroscopic working cannulas with valves',
      'Sterile single-use surgical packaging',
      'Vented anchor body design promoting bone marrow ingress',
    ],
  },
  {
    id: 'orthoshield-drapes',
    sku: 'MOL-SGD-8812',
    name: 'OrthoShield™ Sterile Operating Suite Packs',
    category: 'Surgical Goods',
    material: 'Medical Grade Non-Woven Polypropylene',
    certification: 'ISO 9001 & MSME Certified',
    image: '/images/698c83651ab19382d4fa35d7_Card_Image_5.webp',
    summary: 'Comprehensive sterile surgical drape packs, fluid collection pouches, and reinforced operating gowns for orthopaedic surgeries.',
    specs: [
      'Impermeable fluid barrier with integrated incision film',
      'Low-linting SMS fabric reducing bacterial contamination',
      'Includes arm/leg sleeves and cable holding Velcro straps',
      'EO Gas sterilized with double indicator strip',
      'Heavy-duty absorbent reinforcements in high-fluid zones',
    ],
  },
  {
    id: 'optifix-external-fixator',
    sku: 'MOL-TRM-6620',
    name: 'OptiFix™ External Ring Fixator System',
    category: 'Trauma & Fixation',
    material: 'Carbon Fiber & Stainless Steel',
    certification: 'ISO 13485 Certified',
    image: '/images/698c81e8ff1f0106581b1d49_Card_Image_2.webp',
    summary: 'Radiolucent carbon fiber circular rings and threaded rods for complex open fractures, deformity correction, and limb lengthening.',
    specs: [
      'Ultra-lightweight carbon fiber rings offering 100% X-ray translucency',
      'Adjustable telescopic struts with millimeter gradient markings',
      'Self-drilling Schanz pins with anti-pin-tract infection coating',
      'Modular connecting clamps for quick intraoperative setup',
      'Hinge joints enabling progressive angular contracture correction',
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};
