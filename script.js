//function to generate random number accepts num as param
const generateRandomNumber = num => Math.floor(Math.random() * num); 
//three player team object has 3 properties with array of top ten players in each category
const threePlayerTeam = {
    pg: ["Luka Doncic", "Damian Lillard", "Stephen Curry", "Ben Simmons", "Russell Westbrook",
        "Kyrie Irving", "Jamal Murray", "Ja Morant", "Trae Young", "De'Aaron Fox"], 
    sf: ["LeBron James", "Kawhi Leonard", "Jimmy Butler", "Khris Middleton", "Jayson Tatum",
        "Brandon Ingram", "Gordon Hayward", "DeMar DeRozan", "Will Barton", "Bojan Bogdanovic"],
    center: ["Nikola Jokic", "Joel Embiid", "Karl Anthony Towns", "Rudy Gobert", "Bam Adebayo",
        "Kristaps Porzingis", "Jusuf Nurkic", "Nikola Vucevic", "DeAndre Ayton", "Jonas Valanciunas"]
}; 
//accepts a object of arrays, loops through each prop and selects random player from array, pushes to team array
const generateTeam = teamObject => {
    let team = []
    for(let property in teamObject) {
        team.push(teamObject[property][generateRandomNumber(teamObject[property].length)])
    }
    return team;  
}
//display team array for testing purposes
const displayTeam = team => {console.log(`\nPoint Guard   : ${team[0]}\nSmall Forward : ${team[1]}\nCenter        : ${team[2]}`)};
//give user console information about app and advise to see team below
console.log("\n\n*****NBA 3V3 TEAM GENERATOR*****\n"); 
console.log("Check below for your random team!\n"); 
console.log("           ↓↓↓↓↓↓↓↓↓↓");
//runs displayteam function which inputs the generate team function to get its return value
displayTeam(generateTeam(threePlayerTeam)); 