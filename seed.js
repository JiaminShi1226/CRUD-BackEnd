const db = require("./db");
const { Campus } = require("./db/models");

const seedCampus = [
  {
    name: "Brooklyn College",
    imageUrl:
      "https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/288/2019/03/19223634/Image-Coming-Soon-Placeholder.png",
    address: "666 main ST",
    description: "Brooklyn College",
  },
  {
    name: "Hunter College",
    imageUrl:
      "https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/288/2019/03/19223634/Image-Coming-Soon-Placeholder.png",
    address: "123 prince ST",
    description: "Hunter College",
  },
];

const seed = async () => {
  await Campus.bulkCreate(seedCampus);
};

seed().then(() => process.exit());
