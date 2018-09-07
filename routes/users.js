var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res) {
  User.find({}, function (err, all_users) {
    if(err){
      res.json({success: false, err: "unable to read users"});

    }else{
      res.json({success: true, result: all_users});
    }

  });
});


/* Create users listing..*/
/*
reouter.get('/create', function(req, res){
  res.json('user/create', {title:'User Create'});
});

*/

/* POST users listing..*/
router.post('/insert', function (req, res) {
  if(req.body.message === undefined || req.body.message === "") {
      return res.json({success: false, err: "message is missing "});
  }
    if(req.body.name === undefined || req.body.name === "") {
        return res.json({success: false, err: "name is missing "});
    }
    if(req.body.email === undefined || req.body.email === "") {
        return res.json({success: false, err: "email is missing "});
    }
    if(req.body.company === undefined || req.body.company === "") {
        return res.json({success: false, err: "company is missing "});
    }
    if(req.body.mobile === undefined || req.body.mobile === "") {
        return res.json({success: false, err: "mobile is missing "});
    }
    if(req.body.industry === undefined || req.body.industry === "") {
        return res.json({success: false, err: "industry is missing "});
    }
    if(req.body.attachment === undefined || req.body.attachment === "") {
        return res.json({success: false, err: "attachment is missing "});
    }
    var newUser = {
        message: req.body.message,
        name: req.body.name,
        email : req.body.email,
        company: req.body.company,
        mobile: req.body.mobile,
        industry: req.body.industry,
        attachment:req.body.attachment
    };
    User.create(newUser, function (err, created_user) {
        if(err) {
            res.json({success: false, err: "unable to create user"});
        } else{
            res.json({success: true, result: created_user});
        }
    });

});



module.exports = router;
