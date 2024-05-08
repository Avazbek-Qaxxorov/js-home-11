function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {

  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

let laLigaGoals = 43
let copaDelReyGoals = 10
let championsLeagueGoals = 5
let totalGoals = goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals)
document.write(totalGoals + " GOALS")