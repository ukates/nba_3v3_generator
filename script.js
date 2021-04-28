//function to generate random number accepts num as param
const generateRandomNumber = num => Math.floor(Math.random() * num); 
//three player team object has 3 properties with array of top ten players in each category
const threePlayerTeam = {
    pg: ["Luka Doncic", "Damian Lillard", "Stephen Curry", "Ben Simmons", "Russell Westbrook",
        "kyrie Irving", "Jamal Murray", "Ja Morant", "Trae Young", "De'Aaron Fox"], 
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
console.log(generateTeam(threePlayerTeam)); 