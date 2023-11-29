import { Cryptography } from "./Cryptography.js";

export class LocalStorage {
    
    static exists(key) {
        return !! LocalStorage.select(key);
    }

    static insert(key, value) {
        
        let valueParse;

        if(key === 'user') valueParse = Cryptography.utf8_to_b64(JSON.stringify(value));
        else valueParse = JSON.stringify(value);

        localStorage.setItem(key, valueParse);
        
        return LocalStorage.exists(key);
    }

    static select(key) {

        let valueParse;
        
        if(key === 'user') {

            try {
                valueParse = JSON.parse(Cryptography.b64_to_utf8(localStorage.getItem(key)));
            } catch (error) {
                return null;
            }
        }
        else{
            
            try {
                valueParse = JSON.parse(localStorage.getItem(key));
            } catch (error) {
                return null;
            }
        }
        return valueParse;
    }

    static update(key, value) {

        let valueParse;

        if(key === 'user') valueParse = Cryptography.utf8_to_b64(JSON.stringify(value));
        else valueParse = JSON.stringify(value);

        localStorage.setItem(key, valueParse);

        return LocalStorage.exists(key);
    }

    static delete(key) {

        localStorage.setItem(key, '');
        return LocalStorage.exists(key);
    }

    static isLogged(key) {

        const value = LocalStorage.select(key);
        return !!value;
    }
}
