var bio = {
	"name": "Lawrence Johnson",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "804-445-3842",
		"email": "lawrence0192@yahoo.com",
		"github": "lawrence0192",
		"location": "Richmond, VA, USA"
	},
	"welcome": "Hello everyone, welcome to my resume!",
	"skills": ["Management", "detail-oriented", "communication", "active listener", "customer service"],
	"picture": "images/profilepic.jpg",
	"message": "Thanks for taking the time to review my resume"
}

var work = {
	"jobs": [
		{
			"position": "Fraud Account Supervisor",
			"employer": "Capital One",
			"dates": "June 2010-Present",
			"location": "Richmond, VA, USA",
			"descriptions": [
				"At Capital One, I answer questions for fraud employees who take fraud phone calls.",
			"When they aren't sure what needs to be done, they come to me to ask for assistance. I also",
			"communicate new information when Capital One policies change so that employees understand exactly",
			"what's changed and what hasn't. I also facilitate team meetings ino order to communicate",
			"these changes."
			]
		},
		{
			"position": "Media Supervisor",
			"employer": "Best Buy",
			"dates": "August 2005-May 2010",
			"location": "Richmond, VA, USA",
			"descriptions": [
				"At Best Buy, I worked in the media department. I sold movies, music, and", 
			"video games to customers looking for entertainment.  I also helped to unload the inventory",
			"once a week as new products were delivered to the store."
			]
		}
	
	]
}

var education = {
	"schools": [
		{
			"name": "Strayer University",
			"location": "Richmond, VA, USA",
			"degree": "Bachelor's",
			"majors": ["Computer Networking"],
			"dates": "2010-2013",
			"url": "www.strayer.edu"
		},
		{
			"name": "Virginia Commonwealth University",
			"location": "Richmond, VA, USA",
			"degree": "Associate's",
			"majors": ["Computer Engineering"],
			"dates": "2004-2006",
			"url": "www.vcu.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Object-Oriented Javascript",
			"school": "Udacity",
			"dates": "November 2014",
			"url": "https://www.udacity.com/course/ud015"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Created a website to match an existing website and come within an 8% match.",
			"images": ["images/project1.jpg"]
		},
		{
			"title": "Sample Project 2",
			"dates": "2014",
			"description": "Designed an interactive resume and learned how to create the project using GitHub.",
			"images": ["images/project2.jpg"]
		}
	]
}

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedbioPic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.message);
	$("#header").append(formattedMessage);
	var HTMLname = [HTMLmobile, HTMLemail, HTMLgithub, HTMLlocation];
	var i = 0;
	for (contact in bio.contacts) {
		var formattedContact = HTMLname[i].replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);
		i++;
	}
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkill);
	}
}
bio.display();


work.display = function(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart)
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworkLocation);
		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedworkDates);
		for ( description in work.jobs[job].descriptions) {
			var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descriptions[description]);
			$(".work-entry:last").append(formattedworkDescription);
		}
		
	}
}
work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formatteddates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
}
education.display();



//Map
$("#mapDiv").append(googleMap);
    
    
    
