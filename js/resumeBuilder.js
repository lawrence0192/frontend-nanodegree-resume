var formattedName = HTMLheaderName.replace("%data%", "Lawrence Johnson");
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
