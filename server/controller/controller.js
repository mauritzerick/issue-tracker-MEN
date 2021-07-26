var Issuedb = require('../model/model');

//create and save new issue
exports.create = (req,res) => {
    //validare request
    if(!req.body){
        res.status(400).send({ message: "Content can't be empty!"});
        return;
    }

    //new issue
    const issue = new Issuedb({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    })

    //save issues in db
    issue
        .save(issue)
        .then(data => {
            //res.send(data)
            res.redirect('/add-issue');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message ||"eerror occured when creating a create operation"
            });
        });
}

//retrieve and return all issues/retrieve return single issue
exports.find = (req,res) => {

    if(req.query.id) {
        const id = req.query.id;

        Issuedb.findById(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({ message: "Can't find issue with id" + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving issue with id" + id })
            })

    } else {
        Issuedb.find()
            .then(issue => {
                 res.send(issue)
            })
            .catch(err => {
            res.status(500).send({ message:err.message||"Error occured when retrieving issue info"})
             });
    }
}

//update new identified issue by id
exports.update = (req,res) => {
    if(!req.body){
        return res
        .status(400)
        .send({ message: "Data to update can't be empty" })
    }

    const id = req.params.id;
    Issuedb.findByIdAndUpdate(id, req.body,{ useFindAndModify:false })
        .then(data => {
            if(!data){
                res.status(404).send({message: `Can't update issue with ${id}. Issue not found`})
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating issue info" })
        })

}

//delete an issue with specified id
exports.delete = (req,res) => {
    const id = req.params.id;

    Issuedb.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(404).send({ message:`Can't delete with id ${id}. Invalid ID` })
            } else {
                res.send({
                    message: "Issue deleted successfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Couldn't delete issue with ID=" + id
            });
        });

}