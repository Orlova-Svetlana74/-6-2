const User = require ('../models/user');

const getUsers = (request, response)=>{
    return User.find({}).then((data)=>{response.status(200).send(data)}
    ).cath(e=>response.status(500).send(e.massage))
};
const getUser = (request, response)=>{
        const {user_id} = request.params; 
        return User.findById(user_id).then((user)=>{response.status(200).send(user)}
        ).cath(e=>response.status(500).send(e.massage))   
};

const createUser = (request, response)=>{
    return User.create ({...request.body}).then(
         (user)=>{response.status(201).send(user)}
    ).cath(e=>response.status(500).send(e.massage)) 
};
const updateUser = (request, response)=>{
    const {user_id}=request.params;
    return User.findByIdAndUpdate(user_id, {
        ...request.body
    }).then((user)=>{response.status(200).send(user)}
    ).cath(e=>response.status(500).send(e.massage));
};

const deleteUser = (request, response)=>{
    const {user_id}=request.params;
    return User.findByIdAndDelete(user_id).then((user)=>{response.status(200).send("Success")}
    ).cath(e=>response.status(500).send(e.massage));
};
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser 
};