var express = require('express');
var router = express.Router;

// mock some data
const pets = [
  {
    id: 1,
    name: "Sissy Girl",
    color: "black and white",
    age: 1,
    breed: "Domestic Shorthair",
    notes: [
      "Affectionate when she wants to be"
    ]
  },
  {
    id: 2,
    name: "Pepper",
    color: "black",
    age: 6,
    breed: "mixed",
    notes: [
      "Can become aggressive"
    ]
  },
  {
    id: 3,
    name: "Susie",
    color: "yelllow",
    age: 1,
    breed: "Lab",
    notes: [
      "Likes to chew up everything"
    ]
  }
]


//read all:
router.get('/', (req, res) => {
  // do api stuff
  res.status(200);
  res.json(pets);
})

// get a single pet by id
router.get('/:id', (req, res) => {
  // do a single pet

})

router.post('/', (req, res) => {
  // do a single pet

})

module.exports = router;