

// var a = 1.54654;
// a = Math.ceil(a);

// var a = 1.4;
//  a = Math.round(a);

// var a = 1.9;
//  a = Math.floor(a);


// var a = "1.65435";
// a = +a;
// a = Number(a);
// a = parseInt(a);
// a = parseFloat(a);
// a = a.toFixed(3);
// a = a.toString();

// var a = Math.random();
// console.log(a);

//  var a = Math.random();
// var toss = Math.round(a);
// console.log(toss);

// var a = Math.random();
//a= a*6
//var dice = Math.ceil(a)
// console.log(dice);

// var months = [
//     "Jan",
// "Feb",
// "Mar",
// "apr",
// "may",
// "jun",
// "july",
// "aug",
// "sep",
// "oct" ,
// "sep",
// "nov",
// "Dec"
// ];
//var days = [];
// var dt = new Date();
// var a = dt.getMonth();
//var a = dt.getDay();
//var a = dt.getDate();
//var a = dt.getFullYear();
//var a = dt.getHours();
//var a = dt.getMinutes();
//var a = dt.getSeconds();
//var a = dt.getMilliseconds();
// dt.setMonth(5);
//  dt.setDate(11);
//  dt.setFullYear(2000);
//  dt.setHours(0);
//  dt.setMinutes(0);
//  dt.setSeconds(0);
// console.log(dt);

    //   var dt1 = new Date();
    //   var dt2 = new Date("12-10-2000");

    //   var dt1Time = dt1.getTime();
    //   var dt2Time = dt2.getTime();

    //   console.log(dt1Time);
    //   console.log(dt2Time);
    //   //diff/(1000*60*60*24*365)


    //   var diff = dt1Time-dt2Time; 
    //   console.log(diff);

    //   var age = diff(1000*60*60*24*365);
    //   age=Math.floor(age);
    //   console.log("current age is ="+age);

                    //CHAPTER # FUNCTIONS 

    // function abc(a,b){
    //     var amount = a;
    //     var discount = b;
    //     var total = amount-discount;
    //     console.log(total);
    // }
    // abc(100,10);
    // abc(200,20);
    // abc(300,30);
    // abc(400,40);
    // abc(500,50);


// var a = 0;
    
// function abc(){
//     a++;
// }
// abc();
// console.log(a);

// var a ="ABC";
    
// function abc(){
//     a = "123";
// }
// abc()
// console.log(a);

// function abc(){
//     var a = 10;
//     return a;
// }
// var b = abc();
// console.log(b);

// function calculate(a){
//     var amount = a;
//     var discount = 20;
//     var total = amount - discount;

//     return total;
// }
// var newItem = calculate(200);

// console.log(newItem);

//            23////11////2022


// var day = prompt("");
// switch (day) {
//     case "mon":
//         console.log("Hello World");
//         break
//     case "tue":
//         console.log("Hello Tuesday");
//     break
//         case "sun":
//         console.log("Party Time");
//         break;
//         default:
//         console.log("No Day Found");
// }

// var i = 0;
// while( i < 10 ){
//     i++;
//  console.log(i);
// }

// var i = 0 ; 
// do {
//     console.log(i);
//     i++;
//  } while(i < 0);

// var arr = []
//  function getValue(){
//      var inpElement = document.getElementById('inp');
//      console.log(inpElement.value);
//      arr.push(inpElement.value)
//      console.log(arr)
//      inpElement.value = ''
// }

// var arr = []
// var inpElement = document.getElementById("inp");
// var errorInp = document.getElementById("error");

//  function getValue(){
//     var a = inpElement.value;
//     if (a ==""){
//         errorInp.innerHTML = "Enter value";
     

//     }else{
//         arr.push(a);
//         console.log(arr);
//        inpElement.value = "";
//     }
// }