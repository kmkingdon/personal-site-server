import type { aboutParams, skillsCategories } from "../common/common.js";

const parseDataToPrompt = (skills: string[], data:any):string => {
    const promptHistory =  `Use the following history JSON objects for details. History: ${JSON.stringify(data.history)}. `

    let promptExperience;
    let promptEducation;
    let promptSkills;
    if(skills && skills.length){
        // experience data
        let experienceString = '';
        data.workExperience.forEach((exp:any) => {
            if(exp.tags.some((item:string) => skills.includes(item)) ){
                experienceString = experienceString + `Worked as a ${exp.title} at ${exp.companyName} from ${exp.startDate} to ${exp.endDate}. 
                With the following array of responsibilities: ${JSON.stringify(exp.responsibilities)}. `
            };
        })
        promptExperience =  `Include references to Kevin's work experience and responsibilities where applicable. ${JSON.stringify(experienceString)}. `
        
        // education data
        let educationString = '';
        data.education.forEach((edu:any) => {
            if(edu.tags.some((item:string) => skills.includes(item)) ){
                educationString = educationString + `Went to ${edu.companyName} and graduated with a degree in ${edu.title}. 
                With the following array of experiences: ${JSON.stringify(edu.responsibilities)}. `
            };
        })
        promptEducation =  `Include references to Kevin's education and experiences where applicable. ${JSON.stringify(educationString)}. `
        


        // skills data
        const skillsObject = Object.fromEntries(Object.entries(data.skills).filter((skill) => {
            if(skills.includes(skill[0] as skillsCategories)){
                return skill;
            }
            return null;
        }))
        promptSkills =  `Include references to the follow JSON list of skills that Kevin has where applicable: ${JSON.stringify(skillsObject)}. `
    }

    return promptHistory + promptExperience + promptEducation + promptSkills;
}

export const createAboutPrompt = (params: aboutParams & {type: string, data:any}) => {
    const { audience, skills, type, comments, data } = params;
    const personal = audience === 'Friend and Family';

    const promptStart = type === "about" ?
        `Can you create a summary section for Kevin Kingdon's ${personal ? 'personal blog' : 'professional website'} About page. It should be a couple of paragraphs in form and not include a title ` :
        "Can you make three single or double word phrases that would summarize Kevin Kingdon. The phrases should be no longer than three words. Please return only the word and no additional explanation."
    const promptAudience = audience.length ? `With the intended audience of ${audience}. ` : `Write it for a general audience. `;
    const promptData = parseDataToPrompt(skills, data);
    const promptComments = comments.length ? `Finally, also try to answer or address the following: ${comments}. ` : ' ';


    return promptStart + promptAudience + promptData + promptComments;
}