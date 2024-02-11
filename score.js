const summary = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
]

function summaryItens(summary) {
    const itensContainer = document.querySelector('.summary .itens');

    summary.forEach(item => {
        const category = item.category;
        const score = item.score;
        const icon = item.icon;

        console.log(category);

        const itemDiv = itensContainer.querySelector('.item'+ category);
        itemDiv.querySelector('img').src = icon;
        itemDiv.querySelector('h6').textContent = category;
        itemDiv.querySelector('#current').textContent = score;
    });
}

function totalScore() {
    let total = 0;
    summary.forEach(item => { total += item.score; })
    const scores = summary.map(item => item.score);
    const average = total / scores.length;
    document.getElementById('final').textContent = average.toFixed(0);
}


summaryItens(summary);