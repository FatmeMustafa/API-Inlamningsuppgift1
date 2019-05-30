dotify = require('node-dotify');

addStudent = (req, res, next) => {
    req.models.Student.create({
        email: req.body.email,
        name: req.body.name,
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            zipcode: req.body.address.zipcode
        } 
    }).then((student) => {
        return res.status(201).send(`${student.name} has been added!`)
    }).catch((error) => {
        next(error)
    })
}

getStudent = (req, res, next) => {
    var query;
    if(req.query.name) {
        query = req.models.Student.findOne({name: req.query.name})
    }
    else {
        query = req.models.Student.find()
    }
    query.exec().then((student) => {
        return res.send(student);
    }).catch((error) => next(error))
}

getStudentId = (req, res, next) => {
    req.models.Student.findById(req.params.id).then((student) => {
        return res.send(student);
    })
}

deleteStudentId = (req, res, next) => {
    req.models.Student.findByIdAndRemove(req.params.id).then((student) => {
        return res.status(200).send(`${student.name} has been deleted!`)
    }).catch((error) => {
        next(error)
    })
}

updateStudentId = (req, res, next) => {
    req.models.Student.updateOne({_id: req.params.id},
    {
        email: req.body.email,
        name: req.body.name,
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            zipcode: req.body.address.zipcode
        }
    }, 
    {
        new: true,
        upsert: true,
        runvalidators: true,
    }).then((status) => {
        console.log("status: ", status)
        if (status.upserted)
            res.status(201)
        else if (status.nModified)
            res.status(200)
        else 
            res.status(204)
    res.send()
    }).catch((error) => next(error))
}

module.exports = {
  addStudent,
  getStudent,
  getStudentId,
  deleteStudentId,
  updateStudentId
}