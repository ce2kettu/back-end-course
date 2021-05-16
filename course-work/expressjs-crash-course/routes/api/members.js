const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// Get all members
router.get('/', (req, res) => res.json(members));

// Get a single member
router.get('/:id', (req, res) => {
  const found = members.some(x => x.id === parseInt(req.params.id));

  if (found) res.json(members.filter(x => x.id === parseInt(req.params.id)));
  else
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
});

// Create member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };

  if (!newMember.name || !newMember.email)
    return res.status(400).json({ msg: 'please include a name and email' });

  members.push(newMember);
  res.json(members);
  //res.redirect('/');
});

// Update member
router.put('/:id', (req, res) => {
  const found = members.some(x => x.id === parseInt(req.params.id));

  if (found) {
    const updMember = req.body;
    members.forEach(x => {
      if (members.id === parseInt(req.params.id)) {
        x.name = updMember.name ? updMember.name : members.name;
        x.email = updMember.email ? updMember.email : members.email;

        res.json({ msg: 'Member updated', member });
      }
    });
  } else
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
});

// Delete member
router.delete('/:id', (req, res) => {
  const found = members.some(x => x.id === parseInt(req.params.id));

  if (found)
    res.json({
      msg: 'Member deleted',
      members: members.filter(x => x.id !== parseInt(req.params.id)),
    });
  else
    res.status(400).json({ msg: `no member with the id of ${req.params.id}` });
});

module.exports = router;
