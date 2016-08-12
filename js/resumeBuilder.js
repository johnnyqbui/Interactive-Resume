var bio = {
    "name": "Johnny Bui",
    "role": "Front-End Pirate",
    "contacts": {
        "mobile": "281-896-2145",
        "email": "johnnyqbui7@gmail.com",
        "github": "https://github.com/johnnyqbui",
        "location": "Houston, TX"
    },
    "welcomeMessage": "\"Ahoy thar!\"",
    "skills": ["HTML", "CSS", "JS", "JQuery", "GITHub"],
    "biopic": "images/me.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var skillsAdd = "<ul id='skillSet'></ul>";
    $("#header").prepend(formattedName + " " + formattedRole + " " + formattedMessage);
    $("#header").prepend(formattedbioPic);
    $("#topContacts").addClass("ContactInfo");
    $("#topContacts").append(formattedLocation + formattedMobile + formattedEmail + formattedGithub);
    $("#header").append(skillsAdd);
    $("#skillSet").append(HTMLskillsStart);
    for (var skillNum = 0; skillNum < bio.skills.length; skillNum++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillNum]);
        $("#skills").append(formattedSkill);
    }
};

var work = {
    "jobs": [{
        "employer": "San Jacinto College Financial Aid Office",
        "title": "Administrative Assistant/Orientation Leader",
        "location": "Houston, TX",
        "dates": "August 2009 - August 2013, September 2015 - Present",
        "description": "Boring mumbo jumbo about filng paperwork and " +
            "communicating with students and parents about how to complete " +
            "financial aid application.",
        "url": "http://www.sanjac.edu/"
    }, {
        "employer": "San Jacinto College Testing Department",
        "title": "Administrative Assistant",
        "location": "Houston, TX",
        "dates": "Octbober 2014 - April 2015",
        "description": "More usual office stuff, ensuring students don't " +
            "cheat on exams and keeping record of student test scores.",
        "url": "http://www.sanjac.edu/"
    }, {
        "employer": "Keais Inc.",
        "title": "Order Entry Specialist",
        "location": "Houston, TX",
        "dates": "April 2015 - August 2015",
        "description": "Some more boring office stuff, like ensuring that " +
            "all ordered quality standards are met through the entry process. I " +
            "had my own cubicle though.",
        "url": "http://keais.com/"
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedEmployerInfo = formattedEmployer + formattedTitle + formattedLocation + formattedDate + formattedDescription;
        $(".work-entry:last").append(formattedEmployerInfo);
    }
};


var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "March 2016",
        "description": "Portfolio created for Udacity Project",
        "images": ["images/portfolio.jpg"],
        "url": "http://johnnyqbui.github.io/Portfolio/"
    }]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedProjects = formattedTitle + formattedDate + formattedDescription;
        $(".project-entry:last").append(formattedProjects);
        $(".project-entry:first").children("a").attr("href", projects.projects[i].url);
        for (var x = 0; x < projects.projects[i].images.length; x++)
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
        	$(".project-entry:last").append(formattedImage);
    }
};


var education = {
    "schools": [{
        "name": "San Jacinto College",
        "location": "Houston, TX",
        "degree": "A.S.",
        "majors": ["Biology"],
        "dates": "2009 - 2012",
        "graudation year": "2012",
        "url": "http://www.sjcd.edu"
    }, {
        "name": "University of Houston Clear-Lake",
        "location": "Clear-Lake City, TX",
        "degree": "B.S. - In Progress",
        "majors": ["Computer Information Systems"],
        "dates": "2015 - Present",
        "graduation year": "2019",
        "url": "http://prtl.uhcl.edu/portal/page/portal/HOMEPAGE"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer",
        "school": "Udacity",
        "date": "2015 - present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedschoolName = formattedschoolName.replace("#", education.schools[school].url)
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formattedschoolInfo = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
        $(".education-entry:last").append(formattedschoolInfo);
    }

    for (var course = 0; course < education.onlineCourses.length; course++) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append("<div id = onlineClass></div>");
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        $("#onlineClass:last").append(formattedonlineTitle + formattedonlineSchool);
        $("#onlineClass:last").append(formattedonlineDates);
        $("#onlineClass:last").children("a").attr("href", education.onlineCourses[course].url);

    }
};

footerContacts.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
};

function inName() {
    var newName = bio.name;
    newName = newName.split(" ");
    var firstName = newName[0].slice(0, 1).toUpperCase() + newName[0].slice(1).toLowerCase();
    var lastName = newName[1].toUpperCase();
    formattedName = firstName + " " + lastName;
    newName = HTMLheaderName.replace("%data%", formattedName);
    return formattedName;
};


function newHeader() {
    $("#main").append(internationalizeButton);
    $("#header").children("span").first().addClass("Role");
    $("#header").addClass("HeaderText");
    $("hr").remove();
    $("#header").next().append("<hr>");
    $(".ContactInfo").children("li").addClass("ContactAnimate");
};

function deleteItems() {
    $(".orange-text").removeClass("orange-text");
    $(".white-text").removeClass("white-text");
    $("#lets-connect").removeClass("dark-gray");
    $("#lets-connect").children("h2").removeClass("orange");
};

function addItems() {
    $("#header").addClass("Fader One");
    $("#workExperience").addClass("Fader One");
    $("#projects").addClass("Fader One");
    $("#education").addClass("Fader One");
    $("#workExperience").addClass("LightBoxShadow");
    $(".project-entry").children("img").addClass("AutoImg");
    $(".project-entry").children("a, div").addClass("CenteredText");
    $("#education").addClass("LightBoxShadow");
    $("#mapDiv").append(googleMap);
    $("#lets-connect").children("h2").addClass("BgFooter");
};

function fadeContact() {
    $(".ContactAnimate").first().animate({
        "opacity": "1"
    }, 1000, "easeInOutQuart");

    $(".ContactAnimate").first().next().animate({
        "opacity": "1"
    }, 1500, "easeInOutQuart");

    $(".ContactAnimate").first().next().next().animate({
        "opacity": "1"
    }, 2000, "easeInOutQuart");

    $(".ContactAnimate").last().animate({
        "opacity": "1"
    }, 2500, "easeInOutQuart");
};

function animatePage() {
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
};

function hover() {
    $("#workExperience").hover(function() {
        $(this).toggleClass("LightBoxShadow");
        $(this).toggleClass("BgHoverColor");
        $(this).toggleClass("BgColor");
    })

    $("#education").hover(function() {
        $(this).toggleClass("LightBoxShadow");
        $(this).toggleClass("BgHoverColor");
        $(this).toggleClass("BgColor");
    })
};

function otherFunctions() {
    newHeader();
    deleteItems();
    addItems();
    fadeContact();
    animatePage();
    inName();
    hover();
};

bio.display();
work.display();
projects.display();
education.display();
footerContacts.display();
otherFunctions();
