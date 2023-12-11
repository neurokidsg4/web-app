
export class Cryptography {

    static encode = (string) => {
        return window.btoa(encodeURIComponent(string));
    }
      
    static decode = (b64) => {
        return decodeURIComponent(window.atob(b64));
    }
}
