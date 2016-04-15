/*=====================================FUNCTIONAL JS*============================/
/*ANSWERS TO http://reactivex.io/learnrx/*/

/*==========Traversing an Arrays============================================================*/

//Print all names in an array

var names = ['Greg', 'Cori', 'Cooper', 'Chris', 'Fran'];

for(var i = 0; i < names.length; i++) {
	console.log("Array Names: ", names[i])
}

// Traverse array using forEach

names.forEach(function(name) {
  console.log("forEach :", name);
})

/*==========Projecting Arrays==============================================================*/

//Applying a function to a value and creating a new value is called a projection.


	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id:432534, time:65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id:432534, time:65876586 }]
		}
	],
	videoAndTitlePairs = [];


	newReleases.forEach(function(id){
		console.log('title ', id)
	})

	return videoAndTitlePairs;
