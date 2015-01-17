var formattedName = HTMLheaderName.replace("%data%", "Lawrence Johnson");
//var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//var skills = ["awesomeness", "programming", "teaching", "JS"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);
var bio = {
"name": "Lawrence Johnson",
"role": "Web Developer",
"contacts": {
  "mobile": "804-445-3842",
  "email": "lawrence0192@yahoo.com",
  "github": "lawrence0192",
  "twitter": "@lawrence",
  "location": "Richmond"
  },
"welcomeMessage": "lorem",
"skills": [
  "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
  ],
  "bioPic": "images/fry.jpg"
  
}
  $("#header").append(bio);
 // $("#header").append(bio.role + ",");
  //$("#header").append(bio.contacts);
  //$("#header").append(bio.mobile);
  //$("#header").append(bio.email);
  //$("#header").append(bio.github);
  //$("#header").append(bio.twitter);
  //$("#header").append(bio.location);
       
