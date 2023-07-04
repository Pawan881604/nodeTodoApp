const task = require('../models/taskModels')


exports.getAllTask = async (req, res) => {
    try {
        const Task = await task.find()
        res.render('index')
    } catch (err) {
        console.log(err);
    }
};


exports.createTask = async (req, res) => {
    try {
        console.log(req.body)
        const Task = await task.create(req.body)
        res.status(200).json({
            success: true,
            Task
        })
    } catch (err) {
        console.log(err);
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const selectDelete = req.params.id.split(',');
         let Task = await task.deleteMany({_id:{
            $in:selectDelete
         }})
        res.status(200).json({
            success: true,
            message: "Product delete successfully",
            Task
        })

    } catch (err) {
        console.log(err);
    }
};
