var exportObj, scoringPhase;

exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

scoringPhase = {
    end: 1,
    thirdEnd: 2,
    immiediate: 3
};

exportObj.objectives = function () {
    return [
        {
            setID: 1,
            cardID: 1,
            name: "A Worthy Skull",
            warband: "Garrek's Reavers",
            text: "Score this in an end phase if your warband took an enemy leader out of action in the preceding action phase.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 2,
            name: "Blood for the Blood God!",
            warband: "Garrek's Reavers",
            text: "Score this immediately if three or more of your fighters made a Charge action in this phase.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 3,
            name: "Coward!",
            warband: "Garrek's Reavers",
            text: "Score this immediately if an enemy fighter begins a Move action adjacent to one of your fighters and ends it adjacent to none of your fighters.",
            glory: 4,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 4,
            name: "Draw the Gaze of Khorne",
            warband: "Garrek's Reavers",
            text: "Score this immediately if your warband takes two or more enemy fighters out of action in this phase.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 5,
            name: "It Begins",
            warband: "Garrek's Reavers",
            text: "Score this in an end phase if at least one fighter from each warband is out of action.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 6,
            name: "Khorne Cares Not",
            warband: "Garrek's Reavers",
            text: "Score this in an end phase if five or more fighters are out of action.",
            glory: 2,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 7,
            name: "Khorne's Champion",
            warband: "Garrek's Reavers",
            text: "Score this in the third end phase if all fighters except one of your fighters are out of action.",
            glory: 6,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 8,
            name: "Let the Blood Flow",
            warband: "Garrek's Reavers",
            text: "Score this immediately if three or more of your fighters made a successful Attack action in this phase.",
            glory: 2,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 9,
            name: "There is Only Slaughter",
            warband: "Garrek's Reavers",
            text: "Score this in an end phase if no fighter is holding an objective.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 30,
            name: "Awe-Inspiring",
            warband: "Steelheart's Champions",
            text: "Score this immediately if your warband has taken two or more fighters out of action in this phase.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 31,
            name: "Cleanse",
            warband: "Steelheart's Champions",
            text: "Score this in an end phase if you hold all objectives in enemy territory.",
            glory: 3,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 32,
            name: "Consecrated Area",
            warband: "Steelheart's Champions",
            text: "Score this in an end phase if there are no enemy fighters adjacent to your fighters.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 33,
            name: "Eternals",
            warband: "Steelheart's Champions",
            text: "Score this in the third end phase if none of your fighters are out of action.",
            glory: 3,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 34,
            name: "Immovable Object",
            warband: "Steelheart's Champions",
            text: "Score this in an end phase if the same friendly fighter has held the same objective at the end of two consecutive action phases.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 35,
            name: "Lightning Strikes",
            warband: "Steelheart's Champions",
            text: "Score this immediately if an enemy fighter is taken out of action by a Charge action made by one of your fighters.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 36,
            name: "Seize Ground",
            warband: "Steelheart's Champions",
            text: "Score this in an end phase if you hold an objective in enemy territory.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 37,
            name: "Sigmar's Bulwark",
            warband: "Steelheart's Champions",
            text: "Score this in an end phase if none of your fighters suffered any damage in the preceding action phase.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 38,
            name: "Slayers of Tyrants",
            warband: "Steelheart's Champions",
            text: "Score this in an end phase if your warband took an enemy leader out of action in the preceding action phase.",
            glory: 1,
            phase: scoringPhase.end
        },
        {
            setID: 1,
            cardID: 233,
            name: "Accept Inevitability",
            text: "Score this in the third end phase if all of your fighters are out of action.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 234,
            name: "Advancing Strike",
            text: "Score this immediately when your warband takes an enemy fighter standing in enemy territory out of action.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 235,
            name: "Alone in the Darkness",
            text: "Score this in an end phase if there are no adjacent fighters on the battlefield.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 236,
            name: "Annihilation",
            text: "Score this in an end phase if all enemy fighters have been taken out of action.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 237,
            name: "Assassinate",
            text: "Score this in an end phase if your warband took an enemy leader out of action in the preceding action phase.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 238,
            name: "Balance of Power",
            text: "Score this immediately when making an Attack action if both the attacker and the target have two supporting fighters.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 239,
            name: "Blooded",
            text: "Score this in an end phase if all of your surviving fighters (at least three) have at least one wound token.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 240,
            name: "Bloodless",
            text: "Score this in an end phase if no fighter suffered any damage in the preceding action phase.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 241,
            name: "Brawl",
            text: "Score this in an end phase if all friendly fighters (at least three) are adjacent to enemy fighters.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 242,
            name: "Butchery",
            text: "Score this in an end phase if your warband took three or more enemy fighters out of action in the preceding action phase.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 243,
            name: "Change of Tactics",
            text: "Score this immediately if a friendly fighter on Guard makes a Charge action.",
            glory: 1,
            phase: scoringPhase.immediate
        },
        {
            setID: 1,
            cardID: 244,
            name: "Chosen Champion",
            text: "Score this in an end phase if a surviving friendly fighter has three or more upgrades.",
            glory: 1,
            phase: scoringPhase.immediate
        }
    ];
};
