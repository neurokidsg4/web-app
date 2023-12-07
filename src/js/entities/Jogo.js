
export class Game {

    gameHistory = localStorage.getItem('jogos') ? JSON.parse(localStorage.getItem('jogos')) : [];    
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

    returnPeformance() {
        
        let peformance = '';
        
        switch(this.punctuation) {
            case 1: peformance = 'baixo';
                break;
            
            case 2: peformance = 'baixo';
                break;
            
            case 3: peformance = 'medio';
                break;

            case 4: peformance = 'alto';
                break;

            case 5: peformance = 'alto';
                break;

            default: peformance = '';
                break;
        };

        return peformance;
    }

    gameSaves() {

        const jogo = {
            peformance: this.returnPeformance(),
            punctuation: this.punctuation,
            gameName: this.gameName,
            attempt: this.attempt,
            data: new Date(),
        };

        if(this.gameHistory.length > 0) {

            for(let i = 0; i < this.gameHistory.length; i++) {
        
                if(this.gameName === this.gameHistory[i][0].gameName) {

                    this.gameHistory[i].push(jogo);
                    localStorage.setItem('jogos', JSON.stringify(this.gameHistory));
                    return;
                };
            };

        } else {

            this.gameHistory.push([jogo]);  
            localStorage.setItem('jogos', JSON.stringify(this.gameHistory));
        };
    }
}
