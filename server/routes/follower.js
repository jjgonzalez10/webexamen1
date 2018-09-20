var express = require('express');
var router = express.Router();


var Search = require("../models/Search.js");

router.get("/getFollowers/:idUser", function(req, res){


	Search.findById(req.params.idUser, function(err, search){
		if(err || search==null){
			console.log("entro error de search")
			
			datos = [];

			github.users.getForUser({
				username:req.params.idUser
			},function(err,data){
				if(err){
					return res.status(404).json({
						error:err
					});
				}
				datos.push(data.data);
				github.users.getFollowingForUser({
					username: req.params.idUser
				}, function(error, data) {
					if(error){
						return res.status(400).json({
							error:err
						});
					}
					datos[0].seguidores = data;
					console.log(datos)
					Search.create(datos[0], function(err, inserted_search) {
						return res.status(200).json(datos[0]);
					})
				})
			});

		}
		else{
			return res.status(200).json(search);
		}
	});
});


module.exports = router;
