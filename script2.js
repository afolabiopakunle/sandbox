let players = [
    {
        name: "Roger Federer",
        rank: 1
    },
    {
        name: "Rafel Nadal",
        rank: 2
    },
    {
        name: "Nalbandaian",
        rank: 12
    },
    {
        name: "Andy Murray",
        rank: 14
    },
    {
        name: "Pete Sampras",
        rank: 3
    },
    {
        name: "Andy Roddick",
        rank: 4
    },
    {
        name: "Rod Laver",
        rank: 190
    },
    {
        name: "Andre Agassi",
        rank: 11
    },
    {
        name: "Novak Djokovic",
        rank: 5
    },
    {
        name: "Arthur Ashe",
        rank: 8
    },
]

for(player of players) {
    player.rank <= 10 ? console.log(player.name + " is on the top ten list"): null;
}