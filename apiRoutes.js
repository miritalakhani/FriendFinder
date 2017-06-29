var friendtodisplay = require("./friend");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		  res.json(friendtodisplay);
		});

	app.post("/api/newfriends", function(req, res) {
		// var userdata = req.body;
		// var userscore = userdata.scores;
		// var totaldifference = 0;
		// var thebestmatch = { "name":"", "photo": "", "frienddifference": 500 }

		// for (var i=0; i<friendtodisplay.length; i++) {
	 //      totaldifference = 0;
	 //      for(var j=0; j<friendtodisplay[i].scores[j]; j++){

	 //      //	userscore = 0;
	 //      totaldifference = userscore - 

	 	var mydata = req.body.scores;
        var totaldifference = 0;

	 	for (var i=0; i<friendtodisplay.length; i++){
	 		//totaldifference = 0;

	 	for (var j=0; j<friendtodisplay[i].scores[j]; j++){

	 		totaldifference += Math.abs(parseInt(mydata[j]) - parseInt(friendtodisplay[i].scores[j]) );
	 		console.log(totaldifference);
	 		//if (totaldifference )
	 		// console.log(typeof friendtodisplay[i].scores[j]);
	 		// console.log(mydata[j]);

	 		if(totaldifference<6) {
	 			console.log("ABC is the best match for you");
	 			console.log(friendtodisplay[i].photo);
	 			console.log(friendtodisplay[i].name);
	 			}

	 	};
	 	// res.send("Data has been send!");
	 	// res.end();
	 	};
	 	//get req + post.sent


	  });



		//}


		//});

};

