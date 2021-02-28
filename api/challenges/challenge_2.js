
const challenge2 = {
    isActive: true,
    game: "LEAGUE_OF_LEGENDS",
    desciption: "play 2 games as marksman",
    getProgess() {
        //should return a printable string
        //ex: you played 1/2 games as adc
        return "you played 1/2 games as adc";
    },
    verify() {
        console.log("this is the verify of challenge 2");
        return false;
    }
}

module.exports = {challenge2};