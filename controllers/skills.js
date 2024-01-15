import { skills } from "../data/skill-data.js";


function index(req, res) {
  res.render('skills/index', {
    skills: skills
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

// function create(req, res) {
//   req.body.acquire = false
//   Skill.create(req.body)
//   .then(skill => {
// 		//redirect here
//     res.redirect('/skills')
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/skills')
//   })
// }

export{
  index,
  newSkill as new
}