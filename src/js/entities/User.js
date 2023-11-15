import { Cryptography } from '../services/Cryptography.js'

export class User{

    photo;
    name;
    email;
    acting;
    gender;
    cellPhone;
    birth;
    password;
    about;
    cep;

    constructor(photo, name, email, acting, gender, cellPhone, birth, password, about, cep) {
        this.photo = photo,
        this.name = name,
        this.email = email,
        this.acting = acting,
        this.gender = gender,
        this.cellPhone = cellPhone,
        this.birth = birth,
        this.password = Cryptography.utf8_to_b64(password),
        this.about = about,
        this.cep = cep
    }

    get photo() {
        return this.photo;
    }

    get name() {
        return this.name;
    }

    get email() {
        return this.email;
    }

    get acting() {
        return this.acting;
    }

    get gender() {
        return this.gender;
    }

    get cellPhone() {
        return this.cellPhone;
    }

    get birth() {
        return this.birth;
    }

    get password() {
        return this.password;
    }

    get about() {
        return this.about;
    }

    get cep() {
        return this.cep;
    }
}