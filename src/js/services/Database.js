import { Cryptography } from "./Cryptography.js";

export class Database {
    
    static exists(key) {
        return !! Database.select(key);
    }

    static insert(key, value) {
        
        let valueParse;

        if(key === 'user') valueParse = Cryptography.utf8_to_b64(JSON.stringify(value));
        else valueParse = JSON.stringify(value);

        localStorage.setItem(key, valueParse);
        
        return Database.exists(key);
    }

    static select(key) {

        let valueParse;
        
        if(key === 'user') valueParse = JSON.parse(Cryptography.b64_to_utf8(localStorage.getItem(key)));
        else valueParse = JSON.parse(localStorage.getItem(key));

        return valueParse;
    }

    static update(key, value) {

        let valueParse;

        if(key === 'user') valueParse = Cryptography.utf8_to_b64(JSON.stringify(value));
        else valueParse = JSON.stringify(value);

        localStorage.setItem(key, valueParse);

        return Database.exists(key);
    }

    static delete(key) {

        localStorage.setItem(key, '');
        return !Database.exists(key);
    }
}
