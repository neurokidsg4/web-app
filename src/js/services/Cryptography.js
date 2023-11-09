export class Cryptography {

  static utf8_to_b64 = (str) => {
    return window.btoa(encodeURIComponent(str));
  }
  
  static b64_to_utf8 = (str) => {
    return decodeURIComponent(window.atob(str));
  }
}
