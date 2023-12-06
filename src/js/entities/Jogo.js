
export class Game {

    gameHistory = localStorage.getItem('jogos') ? JSON.parse(localStorage.getItem('jogos')) : {};    
    punctuation = 0;
    attempt = 0;
    gameName = '';
    userName = '';
    
    constructor(gameName) {
        this.gameName = gameName;
    }

    sumPoint() {
        this.punctuation += 1;
    }

    attemptCounter() {
        this.attempt += 1;
    }

    returnPerformance() {
        
        let performance = '';
        
        switch(this.punctuation) {
            case 2 : performance = 'baixo';
                break;

            case 4: performance = 'medio';
                break;

            case 5: performance = 'alto';
                break;

            default: performance = '';
                break;
        };

        return performance;
    }

    gameSaves(keyGame) {

        // this.gameHistory = localStorage.getItem(keyGame) ? JSON.parse(localStorage.getItem(keyGame)) : [];

        const gameResult = this.gameHistory[keyGame];

        const jogo = {
            performance: this.returnPerformance(),
            punctuation: this.punctuation,
            gameName: this.gameName,
            attempt: this.attempt,
            data: new Date(),
        };

        gameResult.push(jogo)
        this.gameHistory[keyGame] = gameResult;

        localStorage.setItem('jogos', JSON.stringify(this.gameHistory));
    }
}
