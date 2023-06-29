const db = require("./db");
const { Student, Campus } = require("./db/models");

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

const seedStudent = [
  {
    firstName: "Tashi",
    lastName: "Sherpa",
    email: "tashi@ttp.com",
    imageUrl: "https://i.pinimg.com/564x/ed/67/09/ed670979ffc802755c409525a8e8a46c.jpg",
    gpa: "4.00",
    campusId: 2,
  },
  {
    firstName: "Jiamin",
    lastName: "Shi",
    email: "Jiamin@ttp.com",
    imageUrl: "https://i.pinimg.com/564x/5e/dc/b1/5edcb1e49227df3adb6f96e59304ed02.jpg",
    gpa: "4.00",
    campusId: 2,
  },
  {
    firstName: "Sabina",
    lastName: "Ismailova",
    email: "Sabina@ttp.com",
    imageUrl: "https://i.pinimg.com/564x/47/87/c2/4787c2bef1ac7ffdfd3dd3025f48600e.jpg",
    gpa: "4.00",
    campusId: 1,
  },
  {
    firstName: "Jianing",
    lastName: "Wei",
    email: "Jianing@ttp.com",
    imageUrl: "https://i.pinimg.com/564x/3b/bf/cf/3bbfcf6d65945179ae83e5f27ae488af.jpg",
    gpa: "4.00",
    campusId: 1,
    },
];

const seed = async () => {
  await Campus.bulkCreate(seedCampus);
  await Student.bulkCreate(seedStudent)
};

seed().then(() => process.exit());
