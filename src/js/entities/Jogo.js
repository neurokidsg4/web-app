
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

        console.log(this.gameHistory);
        console.log(this.gameHistory.length);
        console.log(this.gameHistory[0]);
        console.log(this.gameHistory[0][0]);

        const jogo = {
            peformance: this.returnPeformance(),
            punctuation: this.punctuation,
            gameName: this.gameName,
            attempt: this.attempt,
            data: new Date(),
        };

        let isOk = false;

        if(this.gameHistory.length > 0) {
            console.log('entrei no primeiro if');

            for(let i = 0; i < this.gameHistory.length; i++) {
                console.log('entrei no for');
        
                if(this.gameName === this.gameHistory[i][0].gameName) {
                    // console.log('entrei no segundo if');

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
