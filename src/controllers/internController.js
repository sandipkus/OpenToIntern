const mongoose = require("mongoose");
const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")

// ....................................create Interns................................................................

const createInterns = async function (req, res) {

  const data = req.body;

  let {
    name,
    email,
    mobile,
    collegeName
  }=data

  let dbcollegeName = await collegeModel.findOne({
    name:collegeName,
    isDeleted:false
  })

  let insertIntern= {
    name,
    email,
    mobile,
    collegeId:dbcollegeName._id

  }

  const internDetail = await internModel.create(insertIntern)

  return res.status(201).send({status:true, data:internDetail})
}

/*........................................................Get College Details.......................................................................*/

const getCollegeDetails = async function (req, res){

   try {

      const collegeName = req.query.name
      const output = {}
      const collegeData = await collegeModel.findOne({ name: collegeName, isDeleted: false })

      const internsList = await internModel.find({ collegeId: collegeData._id, isDeleted: false }).select({
          name: 1,
          email: 1,
          mobile: 1
      })
      output.name = collegeData.name
      output.fullName = collegeData.fullName
      output.logoLink = collegeData.logoLink
      output.interns = internsList

      return res.status(200).send({ status: true, data: output })

  }
  catch (err) {
      return res.status(500).send({ status: true, data: "Server Error:" + err.message })
  }


}

module.exports.createInterns = createInterns;
module.exports.getCollegeDetails = getCollegeDetails



