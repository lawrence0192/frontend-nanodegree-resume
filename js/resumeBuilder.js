
var bio = {
"name": "Lawrence Johnson",
"role": "Web Developer",
"contacts": {
    "email": "lawrence0192@yahoo.com",
    "github": "lawrence0192",
    "twitter": "@lawrence",
    "location": "Richmond"
  },
"bioPic": "images/fry.jpg"  
"welcomeMessage": "Hello everyone, welcome to my resume!",
"skills": [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
  ]
};

var work = {
	"jobs": [
		{
			"employer": "Capital One",
			"title": "Fraud Account Supervisor",
			"location": "Richmond, VA, USA",
			"datesWorked": "June 2010 - Present",
			"description": "At Capital One, I answer questions for fraud employees who take fraud phone calls." +
			"When they aren't sure what needs to be done, they come to me to ask for assistance."
		},
			{
			"employer": "Best Buy",
			"title": "Media Supervisor",
			"location": "Richmond, VA, USA",
			"datesWorked": "August 2005-May 2010",
			"description": "At Best Buy, I worked in the media department. I sold movies, music, and video games to"+
			"customers looking for entertainment"
		},
		{
			"employer": "McDonald's",
			"title": "Manager",
			"location": "Warsaw, VA, USA",
			"datesWorked": "September 2001 - May 2004",
			"description": "I spent most of my time at McDonald's as a manager.  I took customers' food orders and"+
			"also cooked and prepared food.  In total, I helped to manage a staff of about 75 people"
		}
	]
};

        var education = {
	"schools": [
		{
		"name": "Strayer University",
        "city": "Richmond, VA",
        "degree": "bachelors",
        "major": ["computer networking"],
        "dates": "2010-2013",
        "url": "http://www.strayer.edu"
		},
		{
		 "name": "Virginia Commonwealth University",
        "city": "Richmond, VA",
        "degree": "associates",
        "major": ["computer engineering"],
        "dates": "2004-2006",
        "url": "http://www.strayer.edu"
		}
		],
		{
		    "onlineCourses": [
		{ "school": "Udacity",
			"title": "Object-Oriented Javascript",
			"completed": "November 2014",
			"url": "https://www.udacity.com/course/ud015"
		}
		]
		};
		
		var projects = {
	"projects": [
		{
			"title": "HTML5 Canvas Game",
			"datesWorked": "December 2014 - January 2015",
			"description": "Created a website to match an existing website and come within an 8% match." 
		}
	]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
    
    
    
