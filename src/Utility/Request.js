import axios from "axios"

const USERNAME = "lehoangdung29111998"
const HEADER = {
    'Content-Type': 'application/json',
    'Refferer': 'https://leetcode.com/'
}
const URL = `https://leetcode.com/graphql/`
export const fetchUserProfile = async() =>{
    const query = "query getUserProfile($username: String!, $limit: Int!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    username\n    githubUrl\n    twitterUrl\n    linkedinUrl\n    contributions {\n      points\n      questionCount\n      testcaseCount\n    }\n    profile {\n      realName\n      userAvatar\n      birthday\n      ranking\n      reputation\n      websites\n      countryName\n      company\n      school\n      skillTags\n      aboutMe\n      starRating\n    }\n    badges {\n      id\n      displayName\n      icon\n      creationDate\n    }\n    upcomingBadges {\n      name\n      icon\n    }\n    activeBadge {\n      id\n      displayName\n      icon\n      creationDate\n    }\n    submitStats {\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n    submissionCalendar\n  }\n  recentSubmissionList(username: $username, limit: $limit) {\n    title\n    titleSlug\n    timestamp\n    statusDisplay\n    lang\n  }\n}"
    const payload = {
        query,
        variables: {
            username: USERNAME,
            limit: 10
        }
    };
    const response = await axios.post(URL, payload, { headers: HEADER });
    return response;
}