const express = require("express");
const router = express.Router();
const hbs = require("hbs");

router.get("/", function (req, res, next) {
  res.render("index", {
 users: [
      {
        firstname: 'Taras',
        lastname: null,
        age: 25,
        isAdmin: true,
        coments: [
          {
            id: 4343,
            text: 'Hello World',
          },
          {
            id: 4444,
            text: 'Hello Sasha',
          },
        ],
      },
      {
        firstname: 'Dima',
        lastname: 'Ivanov',
        age: 27,
        isAdmin: false,
      },
    ],
  })
})

router.get("/1", function (req, res, next) {
  res.render("1-var", { 
    user: {
      name: 'Taras',
      lastname: 'Ivanov',
      age: {
        value: 10,
      },
    },
    title: Math.random(),
  })
})

router.get("/2", function (req, res, next) {
  res.render("2-with", { 
    user: {
      name: "Dima"
    }, 
    role: 'Admin'  
  });
});

module.exports = router;