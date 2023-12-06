
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

    gameSaves(keyGame) {
        // const gameResult = this.gameHistory[] || [];

        const jogo = {
            peformance: this.returnPeformance(),
            punctuation: this.punctuation,
            gameName: this.gameName,
            attempt: this.attempt,
            data: new Date(),
        };

        let isOk = false;

        if(this.gameHistory.length) {

            for(let i = 0; i < this.gameHistory.length; i++) {
    
                console.log(this.gameHistory[i][i].gameName);
    
                if(this.gameName === this.gameHistory[i][0].gameName) {
    
                    console.log(this.gameHistory[i][0].gameName);
    
                    this.gameHistory[i].push(jogo);
                    isOk = true;
                    return;
                };
            };

            if(!isOk) this.gameHistory.push([jogo]);

        } else {

            this.gameHistory.push([jogo]);
        }
        
        // gameResult.push(jogo)
        // this.gameHistory[keyGame] = gameResult;

        localStorage.setItem('jogos', JSON.stringify(this.gameHistory));
    }
}
