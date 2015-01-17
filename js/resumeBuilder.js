var formattedName = HTMLheaderName.replace("%data%", "Lawrence Johnson");
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = ["awesomeness", "programming", "teaching", "JS"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);
var bio = {
  "name" : "Lawrence",
  "age" : 29,
  "skills" : skills
};
$("#main").append(bio.name);
