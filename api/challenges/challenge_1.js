
const challenge1 = {
    isActive: true,
    game: "LEAGUE_OF_LEGENDS",
    desciption: "win 3 games in the past 10 days",
    getProgess() {
        //should return a printable string
        //ex: you played 1/3 games in the past 10 days
        return "you played 1/3 games in the past 10 days"
    },
    verify() {
        console.log("this is the verify method");
        return true;
    }
}

module.exports = {challenge1};