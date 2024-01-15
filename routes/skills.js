import { Router } from 'express'
import { skills } from '../data/skill-data.js'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/users
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

// GET localhost:3000/todos
// app.get('/', function(req, res) {
//   res.render('skills/index', {
//     skills: skills
//   })
// })

router.get('/', skillsCtrl.index)

export { router }
