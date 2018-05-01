const express = require('express');
const uuid = require('uuid/v4');
const app = express();
let multer = require('multer');
const path = require('path');
let react = require("react");
const Sync = require('sync');
let fse = require("fs-extra");
let bodyParser = require('body-parser');
let user = []

let upload;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
function store(url) {
  const storage = multer.diskStorage({
    destination: url,
    filename: (req, file, cb) => {
      const newFilename = `${uuid()}${path.extname(file.originalname)}`;
      cb(null, newFilename);
    },
  });
  upload = multer({ storage: storage }).single("selectedFile");
}

app.use(express.static('./uploads'))

app.post("/Info", (req, res) => {
  let project_Name = req.body.project_Name;
  let Description = req.body.Description;
  let Dir = `./uploads/${project_Name}${uuid()}`
  fse.ensureDir(Dir)
    .then(() => {
      res.send(Dir)
    })
    .catch(err => console.log(err));
});
app.post("/getPhoto", (req, res) => {
  store(req.body.userDirection);
  console.log(req.body.userDirection) // Here is undefined
  upload(req, res, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(req.body.userDirection) // here it's work


    }

  })

})
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);