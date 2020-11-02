document.write("<p>Script!</p>");
document.write("<p>Script!</p>");
var num = 10;
num = num * 10;
document.write("<p>Enter" + num + "</p>");
var num1 = 10;
document.write("<p>num1 = " + num1 + "</p>");
var num2 = 24;
document.write("<p>num2 = " + num2 + "</p>");
var sum = num1 + num2;
document.write("<p>sum = " + sum + "</p>");
document.write("<p>")
document.write("<p>Hello</p>");
alert('Escape!\\n');
var sum = 10 + 5;
document.write('<p>Sum:' + sum + '</p>');
document.write('<p>Sum:' + (1 /0 ) + '</p>');
document.write('<p>Sum:' + (-1 / 0) + '</p>');
document.write('<p>Sum:' + (0 / 0) + '</p>');
document.write('<p>Sum:' +  Number.MAX_VALUE + '</p>');
document.write('<p>Sum:' + Number.MIN_VALUE + '</p>');
var sum = 0x2a + 0xc5;
document.write('<p>Sum:' + sum + '</p>');
var n1 = 0.148;
var n2 = 2.4e-3;

document.write('<p>' + n1 + '</p>');
document.write('<p>' + n2 + '</p>');
document.write('<p>' + (10 == 10) + '</p>');
document.write('<p>' + (15 < 8) + '</p>');

var person = { name: 'Yamada', old: 20};
document.write('<p>' + person.name + '</p>');
document.write('<p>' + person.pld + '</p>');

var pref = ['東京都','大阪府','北海道'];
for(var i = 0; i < pref.langth; i++){
  document.write('<p>' + pref[i] + '</p>');
}

var num = 1;

num = num * 3;
document.write("<p>" + num + "</p>");

num = num * 3;
document.write("<p>" + num + "</p>");

num = num * 3;
document.write("<p>" + num + "</p>");

num = num * 3;
document.write("<p>" + num + "</p>");

var num;
var pref1,pref2;

num = 10;
pref1 = "Tokyo";
pref2 = "Tiba";
document.write("<p>" + pref1 + pref2 + "</p>");

var Name;
var old;

old = 30;
Name = 'Endo';

document.write("<p>Name:" + Name + "Age:" + old + "</p>");

var name;

name = 'Suzuki';
document.write("<p>Name:" + name + "</p>");

name = 'Kondo';
document.write("<p>Name:" + name + "</p>");

name = 'Takahasi';
document.write("<p>Name:" + name + "</p>");

name = 'Suzuki';
document.write("<p>Name:" + name + "</p>");

var num1 = 10,num2 = 20;
document.write("<p>num1=" + num1 +", num2=" + num2 + "</p>");

var str;
alert(str);

var obj1;
obj1 = ['Tokyo','Osaka','Hokkaido'];


var obj2;
obj2 = obj1;

document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");

obj1[1] = 'Kanagawa';

document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");

obj2[2] = 'Hukuoka';

document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");

var sum = 10 + 8;
document.write("<p>10 + 8 = " + sum + "</p>");

var num;

num = 10 + 32;
document.write("<p>10 + 32 = " + num + "</p>");

num = 29 - 11;
document.write("<p>29 -11 = " + num + "</p>");

num = 13 * 20.5;
document.write("<p>13 * 20.5 = " + num + "</p>");

num = 17 / 4;
document.write("<p>17 / 4 = " + num + "</p>");

num = 20 % 9;
document.write("<p>20 % 9 = " + num + "</p>");

var num1,num2;

num1 = -10;
document.write("<p>" + num1 + "</p>");

num2 = -num1;
document.write("<p>" + num2 + "</p>");

var num1,num2;

num1 = 10 * 5 + 4;
document.write("<p>10 * 5 + 4" + num1 + "</p>");

num2 = 4 + 10 * 5;
document.write("<p>4 + 10 * 5" + num2 + "</p>");

var num1,num2,num3;

num1 = 10 + 8 / 2 *4;
document.write("<p>10 + 8 / 2 * 4 =" + num1 + "</p>");

num2 = (10 + 8 / 2) *4;
document.write("<p>(10 + 8 / 2) * 4 =" + num2 + "</p>");

num3 = ((10 + 8) / 2) * 4;
document.write("<p>((10 + 8 ) / 2) *4 =" + num3 + "</p>");

var num = 12;

document.write("<p>num = " + num + "</p>");

num++;
document.write("<p>num = " + num + "</p>");

num++;
document.write("<p>num = " + num + "</p>");

num--;
document.write("<p>num = " + num + "</p>");

var num1 = 7,num2;
num2 = num1++;

document.write("<p>[back]num1 = " + num1 +", num2 = " + num2 +"</p>");
num1 = 7,num2;
num2 = ++num1;
document.write("<p[front]num1 = " + num1 + ",num2 = "+ num2 +"</p>");

var pref;
document.write("<p>" + (pref = 'Tokyo') + "</p>");
var num = 16;
num += 4;
document.write("<p>num = "+ num +"</p>");
num *= 3;
document.write("<p>num=" + num + "</p>");

var old = 10;
document.write("<p>Age:" + old);
if(old>=20){
  document.write("20 > !");
}else{
  document.write("20 < ...");
}
document.write("</p>");

if('abc' > 'def'){
  document.write("<p>abc is def mora big?</p>");
}else{
  document.write("<p>abc is def more big?</p>");
}

if('abc' > 'ABC'){
  document.write("<p>abc is def more big!</p>");
}else{
  document.write("<p>abc is ABC mora small...</p>");
}

if(10 < "20"){
  document.write("<p>10 is '20' more small</p>");
}else{
  document.write("<p>10 is '20' mora small</p>");
}

if(null === undefined){
  document.write("<p>null === undefined</p>");
}else{
  document.write("<p>null !== underfined</p>");
}

var num = 30;
document.write("<p>num = " + num + "</p>");

var num;
var sign;

num = 20;
sign = num >= 0 ? '生':'負';
document.write("<p>" + num + "is" + sign + "</p>");

num = -16;
sign = num >= 0 ? '生': '負';
document.write("<p>" + num + "is" + sign + "</p>");

var person = {name: 'Yamada',old:20 };
var pref = ['Tokyo','Osaka','Hokkaido'];
var plus = function(x,y){return x + y;}

document.write("<p>");
document.write("typeof 1 = " + (typeof 1) + "<br/>");
document.write("typeof 'Hello' = "+ (typeof 'Hello') + "<br />");
document.write("typeof true = " + (typeof true) + "<br/>");
document.write("typeof null = " + (typeof null) + "<br/>");
document.write("typeof NaN = " + (typeof Nan) + "<br/>");
document.write("typeof undefined = " + (typeof undefined) + "<br/>");
document.write("typeof object = " + (typeof person) + "<br/>");
document.write("typeof array = " + (typeof pref) + "<br/>");
document.write("typeof function = " + (typeof plus) + "<br/>");
document.write("</p>");

document.write("<p>");
document.write(200 + 9 + "<br />");
document.write("200" + 9 +"<br />");
document.write(200 + "9" + "<br />");
document.write("200" + "9" + "<br />");
document.write("</p>");

var sum = 0;
for (var i =1; i <= 100; i++){
  sum += i;
}
document.write("<p>1~100 Sum:"+ sum + "</p>");

var sum = 0;
for (var i = 0; i<10;i++){
  sum += 2;
}

document.write("<p>2を加えたSum:" + sum + "</p>");

for(var num = 5; num <= 8; num++){
  document.write("<p>num = " + num + "</p>");
}
document.write("<p> Now Num:"+ num + "</p>");

document.write("<p>");

for(var i = 1,j=9;i<10;i++,j--){
  document.write("i=" + i + ",j = "+ j + "<br />");
}
document.write("</p>");
document.write("<p>");

for(var i = 1; i <= 9; i++){
  for(var j = 1;j <= 9; j++){
    document.write(i + "x" + j + "=" + (i*j) + "<br />");
  }
}
document.write("</p");

var num = 1;
document.write("<p>");
while(num < 50){
  document.write("num = "+ num + "<br />");
  num *= 2;
}
document.write("</p>");

var num = 1;

document.write("<p>");
do{
  document.write("num = "+ num + "<br /");
  num *= 3;
}while(num < 50);

document.write("</p>>");

var personal = {
  name: 'Kato',
  old: 28,
  address: 'Tokyo',
  email: 'kato@email.com'
}

document.write("<p>");

for(var pname in personal){
  document.write(pname + " : " + personal[pname] + "<br />");
}
document.write("</p>");

var num = 1;
document.write("<p>");
for(var i = 0;i < 10; i++){
  num *= 2;
  document.write("i = "+ i + ",num = "+ num +"<br />");

  if(num >= 100){
    break;
  }
}

document.write("</p>");

document.write("<p>");

for(var i = 0;i < 10; i++){
  if(i % 2 == 1){
    continue;
  }
  document.write("i = "+ i +"<br />");
}
document.write("</p>");

document.write("<p>");

outloop: for(var i = 1;i < 5; i++){
  for(var j = 1; j < 5; j++){
    document.write(i + "x" +j+"="+(i*j)+"<br />");

    if(i * j > 10){
      break outloop;
    }
  }
}

document.write("</p>");

document.write("<p>");

for(var i = 1;i <= 10; i++){
  if(i % 2 ==0){
    document.write(i+"偶数です！<br/>");
  }
}
document.write("</p>");

document.write("<p>");

for(var i = 1;i <= 10; i++){
  if(i % 2 == 0){
    document.write(i + "偶数！<br>");
  }else{
    document.write(i + "奇数<br>");
  }
}

document.write("</p>");

var seiseki = [80,72,94,68]

document.write("<p>");
for(var i = 0;i < seiseki.length; i++){
  document.write(seiseki[i] + "点");
  if(seiseki[i] > 80){
    document.write("Good!<br>");
  }else if(seiseki[i] > 70){
    document.write("no...<br />");
  }else{
    document.write("nono...<br />")
  }
}

document.write("</p>");

var answer = [1,3,2,5,3,4,2,5,1,3,1]

document.write("<p>");
document.write("ancate answer:<br>");

for(var i = 0;i < answer.length; i++){
  document.write("Answer["+ (i + 1) +"]");

  switch(answer[i]){
    case 1:
    case 2:
    document.write("Exerent!!<br>");
    break;
    case 3:
    document.write("Good!<br>");
    break;
    case 4:
    case 5:
    document.write("no...<br>");
    break;
    default:
    document.write("error...<br>");
    break;
  }
  document.write("("+ answer[i] + ")<br>");
}
document.write("</p>");

var siteurl = {
  'Yahoo Japan!':'http://www.yahoo.co.jp/',
  'Google':'http://www.google.com/',
  'Microsoft': 'http://www.microsoft.com/japan/',
  'Amazon':'http://www.amazon.co.jp/'
};

document.write("<p>");
var site;

site = 'Amazon';
document.write(site + "URL" + siteurl[site] + "<br />");

site = 'Yahoo Japan!';
document.write(site + "URL" + siteurl[site] + "<br />");

document.write("</p>");

var obj = {width:100,height:80};
document.write("<p>");
document.write("width = " + obj.width + ", height = " + obj.height);
document.write("</p>");

var obj = {width:100,height: 80};
document.write("<p>");
document.write("width = "+obj.width+",height="+obj.height);
document.write("</p>");

obj.width = 150;
obj.height = obj.width * 0.8;

document.write("<p>");
document.write("width = "+ obj.width +",height = "+ obj.height);
document.write("</p>");

var obj = {"2020year":245,"2021year":312,"2022year":193};
document.write("<p>");
for(var i = 2020; i <= 2022; i++){
  var name = i + "year";
  document.write(name + "is" + obj[name] + "<br />");
}
document.write("<p>");
var sum = 0;
for(var pname in obj){
  sum += obj[pname];
}
document.write("<p>");
document.write("Total = " + sum);
document.write("</p>");

var obj = {Tokyo:92,Osaka:85};

obj.Nagoya = 104;
obj["Fukuoka"] = 67;
document.write("<p>");
for(var pname in obj){
  document.write(pname + " = " + obj[pname] + "<br />");
}

document.write("</p>");

delete obj.Tokyo;
delete obj["Nagoya"];

document.write("<p>");
for(var pname in obj){
  document.write(pname + "=" + obj[pname] + "<br />");
}
document.write("</p>");

var result = [85,78,92,62,69];
var name = ['Kato','Takeda','Oda','Mori','Endo'];
document.write("<p>");
for(var i = 0;i < 5; i++){
  document.write(name[i] + "成績:" + result[i] + "<br />");
}

document.write("</p>");

var week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var array = [10,24];
document.write("<p>");
for(var i = 0; i < week.length; i++){
  document.write(week[i] + "<br />");
}

document.write("</p>");
document.write("<p>");

for(var i = 0; i > array.length; i++){
  document.write(array[i] + "<br />");
}

document.write("</p>");

var week = ['Sun','Mon','Tue'];

document.write("<p>");

for(var i = 0; i < 3;i++){
  document.write(week[i] + "<br>");
}
document.write("</p>");
week[0] = 'Sat';
week[2] = 'Tue';
document.write("<p>");
for(var i = 0; i < 3;i++){
  document.write(week[i] + "<br>");
}
document.write("</p>");

var ary = ['Tokyo','Osaka'];
ary[2] = 'Nagoya';
ary[5] = 'Sapporo';

document.write("<p>");

for(var i = 0;i<6;i++){
  document.write(ary[i] + "<br />");
}

document.write("</p>");

var ary = [[
  92,88,64,86
],
[78,92,96,81],
[68,56,84,70]];
for(var i = 0; i < 3; i++){
  document.write("<p>");
  for(var j = 0;j < 4; j++){
    document.write("["+ i +"][" + j + "] = " + ary[i][j] + "<br />");
  }
  document.write("</p>");
}

function hikaku(n1,n2){
  document.write("<p>");

  if(n1 > n2){
    document.write(n1 + "and" + n2 + "is" + n1 + "Big");
  }else{
    document.write(n1 + "and" + n2 + "is" + n2 + "Big");
  }
  document.write("</p>");
}
hikaku(30,42);
hikaku(82,16);

function dispMsg(str){
  document.write("<p>");
  document.write(str);
  document.write("</p>");
}
dispMsg("Hello");
document.write("<p>Good morning!</p>");
dispMsg("bye");

dispCopyright();

function dispCopyright(){
  document.write("<p>Copyright (c) 2020 xxx. All Reserved.</p>");
}

function dispMsg(str1,str2){
  document.write("<p>");
  document.write(str1 + "," + str2);
  document.write("</p>");
}

dispMsg("Hello","Mr.Yamada");
dispMsg("Bye","Mr.Yamada","See you");
dispMsg("Thank you");

function menseki(r){
  return 3.14 * r * r;
}
function enshu(r){
  return 2 * 3.14 * r;
}

var r = 10;

document.write("<p>");
document.write("半径 = "+ r + "<br />");
document.write("円周 = "+ enshu(r) + "<br />");
document.write("面積 = "+ menseki(r));
document.write("</p>");

var heikin = (function(x,y){return (x + y) / 2;});

document.write("<p>");
document.write("Ave = "+ heikin(10 , 8));
document.write("</p>");

var num = (function(x,y){if (x < y)return y - x;else return x - y;})(23,11);

document.write("<p>");
document.write("Arb = "+ num);
document.write("</p>");

function print(str){
  document.write(str + "<br />");
}

var obj = new Object();
obj.width = 100;
obj.height = 80;

document.write("<p>");

for(var pname in obj){
  print(pname + " = " + obj[pname]);
}
document.write("</p>");

function classcheck(func){
  if(func == Object){
    document.write("Object Class<br />");
  }else if(func == Array){
    document.write("Array Class<br />");
  }else if(func == Array){
    document.write("String Class<br />");
  }else{
    document.write("Other<br />");
  }
}

var obj = new Object();
var ary = new Array();
var num_obj = new Number(20);
var str_obj = new Object("Hello");

document.write("<p>");

classcheck(obj.constructor);
classcheck(ary.constructor);
classcheck(num_obj.constructor);
classcheck(str_obj.constructor);

document.write("</p>");

function print(ogj){
  document.write(obj.toString() + "<br />");
}

var obj = new Object();
obj.width = 100;
var ary = new Array("Tokyo","Osaka");
var num_obj = new Number(20);
var str_obj = new Object("Hello");

document.write("<p>");

print(obj);
print(ary);
print(num_obj);
print(str_obj);

document.write("</p>");

function print(str){
  document.write(str + "<br />");
}

var obj = new Object();
obj.width = 100;
var d = new Date();
var num_obj = new Number(1820000);

document.write("<p>");

print(obj.toString());
print(obj.toLocaleString());
print(d.toString());
print(d.toLocaleString());
print(num_obj.toString());
print(num_obj.toLocaleString());

document.write("</p>");

function print(str){
  document.write(str + "<br />");
}

var obj = new Object();
var num_obj = new Number(45);
var str_obj = new String("Hello");
var bool_obj = new Boolean(true);
var ary = new Array();
var d = new Date();

document.write("<p>");

print("Object.valueOf --> " + typeof obj.valueOf());
print("Number.valueOf --> " + typeof num_obj.valueOf());
print("String.valueOf --> " + typeof str_obj.valueOf());
print("Boolean.valueOf --> " + typeof bool_obj.valueOf());
print("Array.valueOf --> " + typeof ary.valueOf());
print("Date.valueOf --> " + typeof d.valueOf());

document.write("</p>");

function print(str){
  document.write(str + "<br />");
}

var num_obj;

document.write("<p>");

num_obj = new Number(10);
print(num_obj);

num_obj = new Number("abc");
print(num_obj);

print("Number.NaN = " + Number.NaN);
print("Number.POSITIVE_INFINITY = " + Number.POSITIVE_INFINITY);
print("Number.NEGATIVE_INFINITY = " + Number.NEGATIVE_INFINITY);
print("NUmber.MAX_VALUE = " + Number.MAX_VALUE);
print("number.MIN_VALUE - " + Number.MIN_VALUE);

document.write("</p>");

function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var num_obj = new Number(15);
print("2進数" + num_obj.toString(2));
print("8進数" + num_obj.toString(8));
print("10進数" + num_obj.toString(10));
print("16進数" + num_obj.toString(16));

document.write("</p>");

function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var num_obj = new Number(15890.77273);

print(num_obj.toString());
print(num_obj.toLocaleString());

document.write("</p>");

function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var num_obj = new Number(15);
var num = num_obj.valueOf();

print(typeof num_obj);
print(typeof num);

document.write("</p>");

function print(str){
  document.write(str + "<br />");
}

document.write("<p");

var num_obj = new Number(135.7);

print(num_obj.toFixed(0));
print(num_obj.toFixed(1));
print(num_obj.toFixed(2));
print(num_obj.toFixed(3));
print(num_obj.toFixed(4));
print(num_obj.toFixed(5));

try{
  print(num_obj.toFixed(1000));
}catch(e){
  print(e);
}

var num_obj2 = new Number(0.00274);

print(num_obj2.toExponential(0));
print(num_obj2.toExponential(1));
print(num_obj2.toExponential(2));
print(num_obj2.toExponential(3));
print(num_obj2.toExponential(4));
print(num_obj2.toExponential(5));

try{
  print(num_obj.toExponental(1000));
}catch(e){
  print(e);
}

print(num_obj.toPrecision(1));
print(num_obj.toPrecision(2));
print(num_obj.toPrecision(3));
print(num_obj.toPrecision(4));
print(num_obj.toPrecision(5));
print(num_obj.toPrecision(6));
print(num_obj.toPrecision(7));

try{
  print(num_obj.toPrecision(0));
}catch(e){
  print(e);
}

try{
  print(num_obj.toPrecision(1000));
}catch(e){
  print(e);
}
document.write("</p>");
