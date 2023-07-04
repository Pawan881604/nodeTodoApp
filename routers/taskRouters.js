const express = require('express');
const { getAllTask, createTask, deleteTask  } = require('../controller/taskController');
const router = express.Router()
createTask
router.route('/').get(getAllTask)
router.route('/').post(createTask)
router.route('/:id').delete(deleteTask)


module.exports = router