const {challenges} = require('./challenges/challengeHolder');

function verifyChallenge(user) {
    for (var challengeKey in challenges) {
        console.log("challenge key: " + challengeKey);
        challenges[challengeKey].verify();
    }
}

function getAllChallenges() {
    let formattedChallenges = [];
    for (var key in challenges) {
        formattedChallenges.push({
            isActive: challenges[key].isActive,
            game: challenges[key].game,
            desciption: challenges[key].desciption,
            //progress: challenges[key].getProgess(),

        })
    }
    return formattedChallenges;
}

module.exports = {verifyChallenge, getAllChallenges}