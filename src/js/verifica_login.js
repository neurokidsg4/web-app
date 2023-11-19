
import { LocalStorage } from "./services/LocalStorage.js";

if(!LocalStorage.isLogged('user')) {
    window.location.href = './index.html';
};
