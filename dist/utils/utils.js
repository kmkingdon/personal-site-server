var parseDataToPrompt = function(skills, data) {
    var promptHistory = "Use the following history JSON objects for details. History: ".concat(JSON.stringify(data.history), ". ");
    var promptExperience;
    var promptEducation;
    var promptSkills;
    if (skills && skills.length) {
        // experience data
        var experienceString = "";
        data.workExperience.forEach(function(exp) {
            if (exp.tags.some(function(item) {
                return skills.includes(item);
            })) {
                experienceString = experienceString + "Worked as a ".concat(exp.title, " at ").concat(exp.companyName, " from ").concat(exp.startDate, " to ").concat(exp.endDate, ". \n                With the following array of responsibilities: ").concat(JSON.stringify(exp.responsibilities), ". ");
            }
        });
        promptExperience = "Include references to Kevin's work experience and responsibilities where applicable. ".concat(JSON.stringify(experienceString), ". ");
        // education data
        var educationString = "";
        data.education.forEach(function(edu) {
            if (edu.tags.some(function(item) {
                return skills.includes(item);
            })) {
                educationString = educationString + "Went to ".concat(edu.companyName, " and graduated with a degree in ").concat(edu.title, ". \n                With the following array of experiences: ").concat(JSON.stringify(edu.responsibilities), ". ");
            }
        });
        promptEducation = "Include references to Kevin's education and experiences where applicable. ".concat(JSON.stringify(educationString), ". ");
        // skills data
        var skillsObject = Object.fromEntries(Object.entries(data.skills).filter(function(skill) {
            if (skills.includes(skill[0])) {
                return skill;
            }
            return null;
        }));
        promptSkills = "Include references to the follow JSON list of skills that Kevin has where applicable: ".concat(JSON.stringify(skillsObject), ". ");
    }
    return promptHistory + promptExperience + promptEducation + promptSkills;
};
export var createAboutPrompt = function(params) {
    var audience = params.audience, skills = params.skills, type = params.type, comments = params.comments, data = params.data;
    var personal = audience === "Friend and Family";
    var promptStart = type === "about" ? "Can you create a summary section for Kevin Kingdon's ".concat(personal ? "personal blog" : "professional website", " About page. It should be a couple of paragraphs in form and not include a title ") : "Can you make three single or double word phrases that would summarize Kevin Kingdon. The phrases should be no longer than three words. Please return only the word and no additional explanation.";
    var promptAudience = audience.length ? "With the intended audience of ".concat(audience, ". ") : "Write it for a general audience. ";
    var promptData = parseDataToPrompt(skills, data);
    var promptComments = comments.length ? "Finally, also try to answer or address the following: ".concat(comments, ". ") : " ";
    return promptStart + promptAudience + promptData + promptComments;
};

//# sourceMappingURL=utils.js.map