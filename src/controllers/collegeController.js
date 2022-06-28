// const jwt = require("jsonwebtoken");
const collegeModel = require("../models/collegeModel")



// const isValid = function(value){
//   if(typeof value == 'undefined' || value == null) return false;
//   if(typeof value == 'string' && value.trim().length === 0) return false;
//   return true;
// }

// const isValidTitle = function(title){
//   return ['Mr', 'Mrs', 'Miss'].indexOf(title) !== -1;
// }

// const isValidRequestBody = function (requestBody){
//   return Object.keys(requestBody).length > 0;
// }

// const registerAuthor = function(){

// }

//.....................................................................create Author...............................................

const createCollege = async function (req, res) {

    let college = req.body;
    // if (Object.keys(data).length === 0) return res.status(400).send({ msg: "Request body is requird" });
    // if (!data.name) return res.status(400).send({ msg: "fname is required" });
    // if (!data.lname) return res.status(400).send({ msg: "lname is required" });
    // if (!data.title) return res.status(400).send({ msg: "title is required" });
    // if (!data.email) return res.status(400).send({ msg: "email is required" });
    // if (!data.password) return res.status(400).send({ msg: "password is required" });
    let collegeCreated = await collegeModel.create(college);
    res.status(201).send({ data: collegeCreated });

};


// ...........................................................Login user............................................................

// const loginUser = async function (req, res) {
//   try {
//     let userName = req.body.email;
//     let password = req.body.password;
//     if (!userName && !password) return res.status(400).send({ msg: "please enter username and password" })
//     let author = await authorModel.findOne({ email: userName, password: password });

//     if (!author)
//       return res.status(400).send({
//         status: false,
//         msg: "username or the password is not corerct",
//       })
//     let token = jwt.sign(
//       {
//         authorId: author._id.toString(),
//         batch: "radon",
//         organisation: "FunctionUp",
//       },
//       "project-1"
//     );
//     res.setHeader("x-api-key", token);
//     res.status(200).send({ status: true, token: token });
//     console.log(token)
//   } catch (err) {
//     console.log("This is the error:", err.message)
//     res.status(500).send({ msg: "Error", error: err.message })
//   }

// }



module.exports.createCollege = createCollege
// module.exports.loginUser = loginUser
