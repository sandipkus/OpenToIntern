const mongoose = require("mongoose");
const internModel = require("../models/internModel")

// const isValidObjectId = function (objectId) {
//   return mongoose.Types.ObjectId.isValid(objectId)
// }
// ....................................create  Blog................................................................

const createInterns = async function (req, res) {
  try {
    let intern = req.body;
    let internCreated = await internModel.create(intern)
    return res.status(201).send({ data: internCreated })

  } catch (err) {
    console.log("This is the error:", err.message)
    res.status(500).send({ msg: "Error", error: err.message })

  }
}
// ...............................................................get Blog..................................................................



module.exports.createInterns = createInterns;
// module.exports.getBlog = getBlog;
// module.exports.updatedBlog = updatedBlog
// module.exports.deletedBlog = deletedBlog
// module.exports.deletebyquery = deletebyquery

// User