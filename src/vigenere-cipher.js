const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


  constructor(typeOfMachine) {

    this.en = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    this.typeOfMachine = typeOfMachine;
    this.encryptedMessage = [];
    this.decryptedMessage = [];
    this.keySymbl = 0;
  }




  encrypt(message, key) {
    this.encryptedMessage.splice(0, this.encryptedMessage.length);
    this.keySymbl = 0;

    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();


    for (let i = 0; i < message.length; i++) {
      if (this.en.indexOf(message[i]) === -1) {
        this.encryptedMessage.push(message[i]);
      } else {
        this.encryptedMessage.push(this.en[(this.en.indexOf(message[i]) + this.en.indexOf(key[this.keySymbl])) % 26]);
        this.keySymbl = (this.keySymbl + 1) % key.length;
      }
    }



    if (this.typeOfMachine === true || this.typeOfMachine === undefined) {
      return this.encryptedMessage.join("");
    } else {
      return this.encryptedMessage.reverse().join("");
    }



  }


  decrypt(message, key) {
    this.decryptedMessage.splice(0, this.decryptedMessage.length);
    this.keySymbl = 0;
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();


    for (let i = 0; i < message.length; i++) {
      if (this.en.indexOf(message[i]) === -1) {
        this.decryptedMessage.push(message[i]);
      } else {
        let index = this.en.indexOf(message[i]) - this.en.indexOf(key[this.keySymbl]);
        index >= 0 ? index : index = index + 26;
        this.decryptedMessage.push(this.en[index]);
        this.keySymbl = (this.keySymbl + 1) % key.length;
      }
    }




    if (this.typeOfMachine === true || this.typeOfMachine === undefined) {
      return this.decryptedMessage.join("");
    } else {
      return this.decryptedMessage.reverse().join("");
    }


  }
}

module.exports = VigenereCipheringMachine;