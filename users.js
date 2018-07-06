//при использовании в модуле exports.User = User, в главном файле
// мы создаем переменную user и помещаем в нее функцию User
var user = require("./user/user.js");
var petya = new user.User ("petya");
var vasya = new user.User ("vasya");

//Если в модуле мы создаем глобальную переменную global.User = User
//то создавать переменную не нужно, а просто подключаем файл
//но так делать не желательно, нужно использовать первый вариант
//require("./user.js");
//var petya = new User ("Petya");
//var vasya = new User ("Vasya");
petya.hello(vasya);