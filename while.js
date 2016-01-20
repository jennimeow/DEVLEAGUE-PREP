// 1. Convert the following `for` loops to `while` loops
//
// 2. Replace Han with per-movie Wookie noises using `if...else if...else`:
// http://www.buzzfeed.com/jessicamisener/the-10-best-chewbacca-quotes


var starWarsMovies = [ 'anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];

function sortChronologically() {
    for (var i = 0; i < 3; i++) {
        var tmp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];  // assign new position
        starWarsMovies[i + 3] = tmp;    
    }
}

function chewie() {
    for (var i = 0; i < starWarsMovies.length; i++) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
        }   
    }   
}

chewie();
sortChronologically();
chewie();

//---------

var starWaresMovies = ['anh', 'texb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];


function sortChronologically(){
	var i = 0;
	while (i < 3){
		var temp = starWarsMovies[i];
		starWarsMovies[i] = starWarsMovies[i + 3];
		starWarsMovies[i + 3] = temp;
		i++;
	}
}

function chewie(){
	console.log();
	var i = 0;
	while (i < starWarsMovies.length){
		if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc'){
			console.log(starWarsMovies[i], 'Which way to Kashyyyk?');
		} else{
			console.log(starWarsMovies[i], 'Laugh it up fuzzball!');
		}
		i++;
	}
}

chewie();
sortChronologically();

//-------------------------

var starWaresMovies = ['anh', 'texb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];


function sortChronologically(){
	var i = 0;
	while (i < 3){
		var temp = starWarsMovies[i];
		starWarsMovies[i] = starWarsMovies[i + 3];
		starWarsMovies[i + 3] = temp;
		i++;
	}
}

function chewie(){
	console.log();
	var i = 0;
	while (i < starWarsMovies.length){
		if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc'){
			console.log(starWarsMovies[i], 'Which way to Kashyyyk?');
		} else if (starWarsMovies[i] === 'tesb'){
			console.log('Rawwwwrarhgh');	
		} else{
			console.log(starWarsMovies[i], 'Laugh it up fuzzball');
		}
		i++;
	}
}

chewie();
sortChronologically();

//===============================================


var starwarsMovies = 
	[ { title: 'A New Hope',
		episode: 4,
		year: 1977,
		director: 'George Lucas'
	},
	{ title: 'The Emplire Strikes Back',
		episode: 5,
		year: 1980,
		director: 'Not George Lucas'
		actors: 
		[
		{	lastName: 'Ford',
			firstName: 'Harrison'},
		{	lastName: 'Fischer',
			firstName: 'Carrie'},
		]
	},
	{ title: 'Return of The Jedi',
		episode: 6,
		year: 1983,
		director: 'George Lucas'},
	{ title: 'The Phantom Menace',
		episode: 1,
		year: XXX
		director: 'George Lucas'},
	{ title: 'Attack of the Clones',
		episode: 2,
		year: XXX,
		director: 'George Lucas'},
	{ title: 'Return of the Sith',
		episode: 3,
		year: XXX,
		director: 'George Lucas'}] 
















