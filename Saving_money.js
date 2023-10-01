document.addEventListener('DOMContentLoaded', function() {
    const savingsTypeInput = document.getElementById('savingsType');
    const savingsMotivationInput = document.getElementById('savingsMotivation');
    const savingsGoalInput = document.getElementById('savingsGoal');
    const savingsTimeInput = document.getElementById('savingsTime');
    const amountSavedInput = document.getElementById('amountSaved');
    const progressBar = document.getElementById('progressBar');
    const emojiSpan = document.getElementById('emoji');
    const competitionLeaderboard = document.getElementById('competitionLeaderboard');
    
    const displaySavingsType = document.getElementById('displaySavingsType');
    const displaySavingsMotivation = document.getElementById('displaySavingsMotivation');
    const displaySavingsGoal = document.getElementById('displaySavingsGoal');
    const displaySavingsTime = document.getElementById('displaySavingsTime');
    
    let savingsGoal = 1000; 
    document.querySelector('button[onclick="updateProgress()"]').addEventListener('click', function() {
        const amountSaved = parseFloat(amountSavedInput.value);
        const progress = (amountSaved / savingsGoal) * 100;
        progressBar.style.width = `${Math.min(progress, 100)}%`;
        
        if (progress >= 100) {
            emojiSpan.textContent = '🎉';
        } else if (progress >= 75) {
            emojiSpan.textContent = '😃';
        } else if (progress >= 50) {
            emojiSpan.textContent = '😐';
        } else {
            emojiSpan.textContent = '😢';
        }
    });

    document.querySelector('button[onclick="createSavingsPlan()"]').addEventListener('click', function() {
        const savingsType = savingsTypeInput.value;
        const savingsMotivation = savingsMotivationInput.value;
        savingsGoal = parseFloat(savingsGoalInput.value) || savingsGoal;
        const savingsTime = parseInt(savingsTimeInput.value);
        
        displaySavingsType.textContent = savingsType;
        displaySavingsMotivation.textContent = savingsMotivation;
        displaySavingsGoal.textContent = savingsGoal;
        displaySavingsTime.textContent = savingsTime;
    });
    
    document.querySelector('button[onclick="joinCompetition()"]').addEventListener('click', function() {
        const newUserElement = document.createElement('li');
        newUserElement.textContent = 'Du';
        competitionLeaderboard.appendChild(newUserElement);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let totalAmountSaved = 0; 
    const savingsGoalInput = document.getElementById('savingsGoal'); 

    document.querySelector('button[onclick="updateProgress()"]').addEventListener('click', function() {
        const amountSavedInput = document.getElementById('amountSaved');
        const amountSaved = parseFloat(amountSavedInput.value);
        
        totalAmountSaved += amountSaved; 

        const goalAmount = parseFloat(savingsGoalInput.value);
        const remainingAmount = goalAmount - totalAmountSaved;

        document.getElementById('savedAmountDisplay').textContent = `${totalAmountSaved} kr`;
        document.getElementById('goalAmountDisplay').textContent = `${goalAmount} kr`;
        document.getElementById('remainingAmountDisplay').textContent = `${remainingAmount} kr`;

        const progressPercentage = (totalAmountSaved / goalAmount) * 100;
        const emojiDisplay = document.getElementById('emojiDisplay');
        
        if (progressPercentage >= 100) {
            emojiDisplay.textContent = '🎉';
        } else if (progressPercentage >= 75) {
            emojiDisplay.textContent = '😃';
        } else if (progressPercentage >= 50) {
            emojiDisplay.textContent = '😐';
        } else {
            emojiDisplay.textContent = '😢';
        }

        amountSavedInput.value = ''; 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square');
    const emojis = ['❤️', '😀', '🐶', '🌸', '🍀', '🍎', '🌟', '🍦', '🚀', '📘', '🔔', '🎈', '🎁', '🍭', '💎', '💰'];
    const moneyEmojiPosition = Math.floor(Math.random() * 16); 
    emojis[moneyEmojiPosition] = '💰'; 

    squares.forEach((square, index) => {
        square.addEventListener('click', function() {
            squares.forEach(s => s.style.backgroundColor = s.dataset.id % 2 === 0 ? '#eee' : '#ddd'); 
            square.style.backgroundColor = '#a1a8a9'; 
            square.textContent = emojis[index]; 
            if (index === moneyEmojiPosition) {
                document.getElementById('gameFeedback').textContent = 'Gratulerer! Du fant pengeemoji og vinner poeng! 🎉';
            } else {
                document.getElementById('gameFeedback').textContent = 'Prøv igjen!';
            }
        });
    });
});
