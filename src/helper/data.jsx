export const appointmentData = [
  {
    id: 1,
    client: "Barry Vermont",
    day: new Date().toISOString().slice(0, 10),
    completed: true,
    lawyer: "Lawyer John Doe"
  },
  {
    id: 2,
    client: "Harry Coming",
    day: new Date().toISOString().slice(0, 10),
    completed: false,
    lawyer: "Lawyer Emma Johnson",
  },
  {
    id: 3,
    client: "Aaron Black",
    day: new Date().toISOString().slice(0, 10),
    completed: true,
    lawyer: "Lawyer Michael Brown",
  },
]

const lawyersData = [
  {
    name: "John Doe",
    id: 1,
    dep: "Criminal Law",
    img: "./img/e1.jpg",

  },
  {
    name: "Jane Smith",
    id: 2,
    dep: "Commercial Law",
    img: "./img/b1.jpg",

  },
  {
    name: "David Johnson",
    id: 3,
    dep: "Employment Law",
    img: "./img/e2.jpg",

  },
  {
    name: "Michael Brown",
    id: 4,
    dep: "Family Law",
    img: "./img/e3.jpg",

  },
  {
    name: "Emma Johnson",
    id: 5,
    dep: "Real Estate Law",
    img: "./img/b2.jpg",

  },
  {
    name: "Oliver Wilson",
    id: 6,
    dep: "Business and Corporate Law",
    img: "./img/e4.jpg",

  },
  {
    name: "Sophia Davis",
    id: 7,
    dep: "Administrative Law",
    img: "./img/b3.jpg",
  
  },
  {
    name: "William Taylor",
    id: 8,
    dep: "Intellectual Property Law",
    img: "./img/e5.jpg",
    
  },
  {
    name: "Isabella Thompson",
    id: 9,
    dep: "International Law",
    img: "./img/b4.jpg",

  },
  {
    name: "James Clark",
    id: 10,
    dep: "Tax Law",
    img: "./img/e6.jpg",

  },
  {
    name: "Olivia Lewis",
    id: 11,
    dep: "Human Rights Law",
    img: "./img/b5.jpg",

  },
  {
    name: "Benjamin Martinez",
    id: 12,
    dep: "Estate Law",
    img: "./img/e7.jpg",

  },
  {
    name: "Ava Hernandez",
    id: 13,
    dep: "Consumer Law",
    img: "./img/b6.jpg",

  },
  {
    name: "Lucas Moore",
    id: 14,
    dep: "Public Law",
    img: "./img/e8.jpg",

  },
  {
    name: "Mia Jackson",
    id: 15,
    dep: "Banking and Finance Law",
    img: "./img/b7.jpg",

  }
];

export default lawyersData;