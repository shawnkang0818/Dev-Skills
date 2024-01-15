// import { skills } from "../data/skill-data.js";
import { Skill } from "../models/skill.js";

// function index(req, res) {
//   res.render('skills/index', {
//     skills: skills
//   })
// }
function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })  
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  req.body.acquire = false
  Skill.create(req.body)
  .then(skill => {
		//redirect here
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export{
  index,
  newSkill as new,
  create,
  show
}