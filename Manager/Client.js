class Client {
    constructor() {
        this.name = 'Client';
    }
    async Encrypt(text, password) {
        if (!text) return new Error('No text provided');
        if (!password) return new Error('No password provided');
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) + password.charCodeAt(i % password.length));
        }
        return result;
    }
    async HardEncrypt(text, password) {
        if (!text) return new Error('No text provided');
        if (!password) return new Error('No password provided');
        let beforeresult = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) + password.charCodeAt(i % password.length));
        }
        let result = '';
        for (let i = 0; i < beforeresult.length; i++) {
            result += String.fromCharCode(beforeresult.charCodeAt(i) + password.charCodeAt(i % password.length));
        }
        return result;
    }
    async HardDecrypt(text, password) {
        if (!text) return new Error('No text provided');
        if (!password) return new Error('No password provided');
        let beforeresult = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) - password.charCodeAt(i % password.length));
        }
        let result = '';
        for (let i = 0; i < beforeresult.length; i++) {
            result += String.fromCharCode(beforeresult.charCodeAt(i) - password.charCodeAt(i % password.length));
        }
        return result;
    }
    async Decrypt(text, password) {
        if (!text) return new Error('No text provided');
        if (!password) return new Error('No password provided');
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) - password.charCodeAt(i % password.length));
        }
        return result;
    }
}
module.exports = Client;