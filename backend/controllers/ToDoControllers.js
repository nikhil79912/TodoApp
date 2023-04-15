const ToDoModel = require("../models/ToDoModels");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo= (req,res)=>{
     const data=req.body
     if (Object.keys(data).length == 0) {
        return res.status(400).send({ Error: "Body  should be not empty" })
     }else{

        ToDoModel.create(data)
        .then((data)=>{
            console.log("Added succesfully")
            res.send(data)}
            )
            .catch((err)=>console.log(err))

    }}

// module.exports.saveToDo = async (req, res) => {
//   try {
//     const data = req.body;
//     if (Object.keys(data).length == 0) {
//       return res.status(400).send({ Error: "Body  should be not empty" });
//     } else {
//       await ToDoModel.create(data);

//       res.send(data);
//     }
//   } catch (error) {
//     res.status(500).send(error)
//   }
// };

module.exports.updatetodo = (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("update Successfully"))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;

  console.log("id ---> ", _id);

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};
