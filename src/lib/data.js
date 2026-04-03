const optimizeImage = (url) =>
  url.replace("/upload/", "/upload/q_auto,f_auto/");

export const FILTERS = [
  { name: "all", active: true },
  { name: "watercolor", active: false },
  { name: "ink", active: false },
  { name: "cover", active: false },
  { name: "environment", active: false },
  { name: "character", active: false },
];

export const IMAGES = [
  {
    id: 1,
    title: "Man looking at grave",
    image: optimizeImage("https://res.cloudinary.com/dmig1qslw/image/upload/v1775234219/1_qttkmw.png"),
    medium: "pencil",
    category: ["character"],
  },
  {
    id: 2,
    title: "Astronaut",
    image: optimizeImage("https://res.cloudinary.com/dmig1qslw/image/upload/v1775234220/2_hyshmk.png"),
    medium: "color",
    category: ["character", "cover", "ink"],
  },
  {
    id: 3,
    title: "Frozen Discovery",
    image: optimizeImage("https://res.cloudinary.com/dmig1qslw/image/upload/v1775234219/3_l7v1zk.png"),
    medium: "digital",
    category: ["character", "environment"],
  },
  {
    id: 4,
    title: "Tifa",
    image: optimizeImage("https://res.cloudinary.com/dmig1qslw/image/upload/v1775234219/4_bkpnhq.png"),
    medium: "watercolor",
    category: ["character", "watercolor"],
  },
];
