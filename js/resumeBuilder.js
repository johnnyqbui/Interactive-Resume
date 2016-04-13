var bio = {
    "name": "Johnny Bui",
    "role": "Front-End Pirate",
    "contacts": {
        "mobile": "281-896-2145",
        "email": "johnnyqbui7@gmail.com",
        "github": "https://github.com/johnnyqbui",
        "location": "Houston, TX"
    },
    "bioPic": "images/fry.jpg",
    "welcomeMsg": "\"Ahoy thar!\"",
    "skills": ["HTML", "CSS", "JS", "JQuery", "GITHub"]
}

function nameRole() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg)
    $("#header").prepend(formattedName + " " + formattedRole + " " + formattedMessage);
};

function displayContacts() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").addClass("contactInfo");
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub);
};

function displaySkills() {
    var skillsAdd = "<ul id='skillSet'></ul>";
    $("#header").append(skillsAdd);
    var skillNum = 0
    if (bio.skills.length > 0) {
        $("#skillSet").append(HTMLskillsStart);
    }
    for (var skills in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillNum]);
        $("#skills").append(formattedSkill);
        skillNum = skillNum + 1
    }
}

nameRole();
displayContacts();
displaySkills();

var work = {
    "jobs": [{
        "employer": "San Jacinto College Financial Aid Office",
        "title": "Administrative Assistant/Orientation Leader",
        "location": "Houston, TX",
        "dates": "August 2009 - August 2013, September 2015 - Present",
        "description": "Boring mumbo jumbo about filng paperwork and communicating with students and parents about how to complete financial aid application."
    }, {
        "employer": "San Jacinto College Testing Department",
        "title": "Administrative Assistant",
        "location": "Houston, TX",
        "dates": "Octbober 2014 - April 2015",
        "description": "More usual office stuff, ensuring students don't cheat on exams and keeping record of student test scores."
    }, {
        "employer": "Keais Inc.",
        "title": "Order Entry Specialist",
        "location": "Houston, TX",
        "dates": "April 2015 - August 2015",
        "description": "Some more boring office stuff, like ensuring that all ordered quality standards are met through the entry process. I had my own cubicle though."
    }]
}

function displayWork() {
    var linkSanJac = ("http://www.sanjac.edu/")
    var linkKeais = ("http://keais.com/")
    for (var jobs in work.jobs) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
        var formattedEmployerInfo = formattedEmployer + formattedTitle + formattedLocation + formattedDate + formattedDescription;
        $(".work-entry:last").append(formattedEmployerInfo);
        $(".work-entry").children("a").attr("href", linkSanJac);
        $(".work-entry:last").children("a").attr("href", linkKeais);
    }
}

displayWork();


var projects = {
    "projects": [{
            "title": "Portfolio",
            "date": "March 2016",
            "description": "Portfolio created for Udacity Project",
            "images": ["images/portfolio.jpg"]
        }]
}

projects.display = function() {
    var projectLink = "http://johnnyqbui.github.io/Portfolio/";
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedProjects = formattedTitle + formattedDate + formattedDescription;
        $(".project-entry:last").append(formattedProjects);
        $(".project-entry:first").children("a").attr("href", projectLink);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();
$("img").addClass("autoImg");

var education = {
    "schools": [{
        "name": "San Jacinto College",
        "location": "Houston, TX",
        "degree": "A.S.",
        "major": "Biology",
        "dates": "2009 - 2012",
        "graudation year": "2012",
        "URL": "www.sjcd.edu"
    }, {
        "name": "University of Houston Clear-Lake",
        "location": "Clear-Lake City, TX",
        "degree": "B.S. - In Progress",
        "major": "Computer Information Systems",
        "dates": "2015 - Present",
        "graduation year": "2019",
        "URL": "http://prtl.uhcl.edu/portal/page/portal/HOMEPAGE"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer",
        "school": "Udacity",
        "dates": "2015 - present",
        "URL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
}


function displayEducation() {
    var linkSanJac = ("http://www.sanjac.edu/")
    var linkUhcl = "http://prtl.uhcl.edu/portal/page/portal/HOMEPAGE";
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedschoolInfo = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
        $(".education-entry:last").append(formattedschoolInfo);
        $(".education-entry:first").children("a").attr("href", linkSanJac);
        $(".education-entry:last").children("a").attr("href", linkUhcl);
    }

    for (var course in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append("<div id = onlineClass></div>")
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $("#onlineClass:last").append(formattedonlineTitle + formattedonlineSchool);
        $("#onlineClass:last").append(formattedonlineDates);
        $("#onlineClass:last").children("a").attr("href", education.onlineCourses[course].URL);

    }
}

displayEducation();

function displayFooterContacts() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub);
};

displayFooterContacts();

$("#main").append(internationalizeButton);

function inName() {
    var newName = bio.name;
    newName = newName.split(" ");
    firstName = newName[0].slice(0, 1).toUpperCase() + newName[0].slice(1).toLowerCase();
    lastName = newName[1].toUpperCase();
    formattedName = firstName + " " + lastName;
    newName = HTMLheaderName.replace("%data%", formattedName);
    return formattedName;
}

inName();

$("#mapDiv").append(googleMap);
$(".orange-text").addClass("coolGray");
$(".orange-text").removeClass("orange-text");

$(".white-text").addClass("coolGray")
$(".white-text").removeClass("white-text")

$("#lets-connect").children("h2").addClass("bgFooter");
$("#lets-connect").children("h2").removeClass("orange");

$("#lets-connect").removeClass("dark-gray");

$(".contactInfo").children("li").addClass("contactAnimate")
$(".project-entry").children("a, div").addClass("centeredText")

$("#header").addClass("fader one");
$("#workExperience").addClass("fader one");
$("#projects").addClass("fader one");
$("#education").addClass("fader one");

$(".contactAnimate").first().animate({
    "opacity": "1"
}, 1000, "easeInOutQuart")
$(".contactAnimate").first().next().animate({
    "opacity": "1"
}, 1500, "easeInOutQuart")
$(".contactAnimate").last().animate({
    "opacity": "1"
}, 2000, "easeInOutQuart")

$("#skills").animate({
    "font-size": "17px"
}, 1000, "easeOutSine");
$("#workExperience").animate({
    'margin-top': '0px'
}, 500, "easeOutSine");
$("#projects").animate({
    'margin-top': '0px'
}, 1400, "easeOutSine");
$("#education").animate({
    'margin-top': '0px'
}, 700, "easeInSine");

$("hr").remove();
$("#header").next().append("<hr>");
$("#header").children("span").first().addClass("role");

$(".education-entry").addClass("invisible");
$("#onlineClass").addClass("invisible");
$("#workExperience").addClass("lightboxShadow");
$("#education").addClass("lightboxShadow");



$("#workExperience").hover(function() {
    $(this).toggleClass("lightboxShadow");
    $(this).toggleClass("bgHoverColor");
    $(this).toggleClass("bgColor");
})

$("#education").hover(function() {
    $(this).toggleClass("lightboxShadow");
    $(this).toggleClass("bgHoverColor");
    $(this).toggleClass("bgColor");
})
