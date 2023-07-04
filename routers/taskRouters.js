const express = require('express');
const { getAllTask, createTask, deleteTask } = require('../controller/taskController');
const router = express.Router()
createTask
router.route('/').get(getAllTask)
router.route('/task').post(createTask)
router.route('/delete/:id').delete(deleteTask)


module.exports = router