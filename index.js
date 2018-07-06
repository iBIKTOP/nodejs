// Юрий Семенюк
// группа №33
// почитать про OSI
// e2etest - тестирование сайтов
// установить виртуал бокс и установить убунту
// создать каталог файл ходить по директориям.
// гит утановить
// Node.js - интерпритатор, платформа
// console.log(console);
// var fs = require('fs');//подключаем модуль fs
// // var content = fs.readFileSync('test.txt','utf-8');
// var content = fs.readFileSync('test.txt');
// // console.log(content);
// console.log(content.toString());

var fs = require('fs');//подключаем модуль fs
var content = "Hello world!";
fs.writeFile("test.txt",content,function(err,content){});

//сделать дозапись 
//подключить модуть майлер
