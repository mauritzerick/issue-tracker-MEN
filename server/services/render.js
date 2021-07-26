const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/issues
    axios.get('http://issue-tracker-emmi.herokuapp.com/api/issues')
        .then(function(response){
            res.render('index', { issues : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_issue = (req, res) =>{
    res.render('add_issue');
}

exports.update_issue = (req, res) =>{
    axios.get('http://issue-tracker-emmi.herokuapp.com/api/issues', { params : { id : req.query.id }})
        .then(function(issuedata){
            res.render("update_issue", { issue : issuedata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}