const { body, validationResult } = require('express-validator');
let usernames = [];
function getUsername(req, res) {
  res.json(usernames);
}
const createUsername = [
  body('username').custom((value) => {
    if (value.length < 5 || value.length > 15) {
      throw new Error('username should be between 5 and 15 characters');
    }
    if (value.length == 0) {
      throw new Error('username should not be empty');
    }
    if (value.includes('*') || value.includes('&')) {
      throw new Error('username should not contain & and *');
    }
    return true;
  }),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      let { username } = req.body;
      console.log(req.body);
      usernames.push({ username });
      res.json({ status: 'adding Username complete' });
    }
  },
];
module.exports = { getUsername, createUsername };
