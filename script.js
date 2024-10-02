document.getElementById('dice').addEventListener('click', function() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-result').innerText = `You rolled a ${diceRoll}`;
});