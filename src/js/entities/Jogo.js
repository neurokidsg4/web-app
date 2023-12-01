
export class Game {

    gameHistory = [];    
    punctuation = 0;
    gameName = '';
    userName = '';

    constructor(gameName, userName) {
        this.gameName = gameName;
        this.userName = userName;
    }

    sumPoint() {
        this.punctuation += 1;
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

        this.gameHistory = localStorage.getItem(keyGame) ? JSON.parse(localStorage.getItem(keyGame)) : [];

        const jogo = {
            punctuation: `Acertou ${this.punctuation} pontos de um total de 5`,
            performance: this.returnPerformance(),
            gameName: this.gameName,
            userName: this.userName,
            data: new Date()
        };

        this.gameHistory.push(jogo);
            
        localStorage.setItem(keyGame, JSON.stringify(this.gameHistory));
    }
}
