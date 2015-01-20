
var bio = {
"name": "Lawrence Johnson",
"role": "Web Developer",
"contacts": {
    "mobile": "804-445-xxxx",
    "email": "lawrence0192@yahoo.com",
    "github": "lawrence0192",
    "twitter": "@lawrence",
    "location": "Richmond"
  },
"picture": "images/fry.jpg"  
"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
"skills": [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
  ]
};
  
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
    
    
    
