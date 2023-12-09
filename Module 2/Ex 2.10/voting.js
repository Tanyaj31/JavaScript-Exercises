function NewCandidates(numOfCandidates) {
    var candidates = [];
    for (var i = 0; i < numOfCandidates; i++) {
        var name = prompt("The name of candidate " + (i + 1) + ":");
        candidates.push({ name: name, votes: 0 });
    }
    return candidates;
}

function Voting(candidates, numOfVoters) {
    for (var i = 0; i < numOfVoters; i++) {
        var vote = prompt("Vote for (enter candidate name), voter " + (i + 1) + ":");
        var candidate = candidates.find(c => c.name === vote);
        if (candidate) {
            candidate.votes++;
        }
    }
}

function FinalResults(candidates) {
    candidates.sort((a, b) => b.votes - a.votes);
    var winner = candidates[0];
    console.log("Congratulations! The winner is " + winner.name + " with " + winner.votes + " votes!!");
    console.log("Results:");
    candidates.forEach(c => {
        console.log(c.name + ": " + c.votes + " votes");
    });
}

function main() {
    var numberOfCandidates = parseInt(prompt("Enter the number of candidates:"));
    var candidates = NewCandidates(numberOfCandidates);

    var numOfVoters = parseInt(prompt("Enter the number of voters:"));
    Voting(candidates, numOfVoters);

    FinalResults(candidates);
}

window.onload = main;