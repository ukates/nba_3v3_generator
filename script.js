const generateRandomNumber = num => Math.floor(Math.random() * num); 

const threePlayerTeam = {
    pg: ["Luka Doncic", "Damian Lillard", "Stephen Curry", "Ben Simmons", "Russell Westbrook",
        "kyrie Irving", "Jamal Murray", "Ja Morant", "Trae Young", "De'Aaron Fox"], 
    sf: ["LeBron James", "Kawhi Leonard", "Jimmy Butler", "Khris Middleton", "Jayson Tatum",
        "Brandon Ingram", "Gordon Hayward", "DeMar DeRozan", "Will Barton", "Bojan Bogdanovic"],
    center: ["Nikola Jokic", "Joel Embiid", "Karl Anthony Towns", "Rudy Gobert", "Bam Adebayo",
        "Kristaps Porzingis", "Jusuf Nurkic", "Nikola Vucevic", "DeAndre Ayton", "Jonas Valanciunas"]
}; 

const generateTeam = teamObject => {
    let team = []
    for(let property in teamObject) {
        team.push(teamObject[property][generateRandomNumber(teamObject[property].length)])
    }
    return team;  
}

console.log(generateTeam(threePlayerTeam)); 