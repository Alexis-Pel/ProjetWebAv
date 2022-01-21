import aes from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";

function encrypt(toEncrypt){
    return aes.encrypt(toEncrypt, "ProjetWebPassPhrase").toString();
}
function decrypt(toDecrypt){
    return aes.decrypt(toDecrypt, "ProjetWebPassPhrase").toString(enc)
}

export {encrypt, decrypt};