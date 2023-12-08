// ==> First JS Assignment <==
// ______________________________

// {1}
// var x = Number(window.prompt('Enter a Number'));
//  window.alert(x);
//
// __________________________________________
// {2}
// var x = Number(window.prompt("Entet a Number"));
// if (x %3==0 && x %4==0){
//   window.alert("YES")
// }
// else{
//   window.alert("NO")
// }
// ___________________________________________

// {3}
// var num1= Number(window.prompt('Enter First Number'));
// var num2= Number(window.prompt('Enter Second Number'));
// if(num1 > num2){
//  window.alert(num1);}
//   else (window.alert(num2))

// ___________________________________________

// {4}
// var Num = Number((window.prompt("Enter a Number"));
// if(Num<0){
//     window.alert("Positive")
// }else{
//     window.alert("Negative")
// }
// _________________________________________________________
// {5}
// var x = Number(window.prompt('Enter 1st Element'));
// var y = Number(window.prompt('Enter 2nd Element'));
// var z = Number(window.prompt('Enter 3rd Element'));
// if(x > y && x > z){
//     window.alert('Max Element' +x)
// }
// else if (y > x && y > z){
//     window.alert('Max Element' +y)
// }
// else if (z > x && z > y){
//     window.alert('Max Element' +z)
// }

// if(x < y && x < z){
//     window.alert('Min element' +x)
// }
// else if (y < x && y < z){
//     window.alert('Min Element' +y)
// }
// else if (z < x && z < y){
//     window.alert('Min Element' +z)
// }
// _____________________________________________________

// {6}
// var x = Number(window.prompt("Enter a Number"));
// if( x % 2==0){
// window.alert("a Number is Oven")
// }
// else {
//     window.alert("a Number is Odd")
// }
// _____________________________________________
// {8}

//  var x = window.prompt("Enter a Character");
//  switch(x){
//     case "a":
//     case "e":
//     case "l":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "L":
//     case "O":
//     case "U":  
//    window.alert('vowel');
//    break;

//     default:
//     window.alert('Consonant');
//   break;

//  }

// ___________________________________________________

// {9}
// var x = Number(window.prompt("Enter a Number"));
// for (var y=1; y<=x ; y++)
// window.alert(y);

// ____________________________________________________

// {10}
// var x = Number(window.prompt('Enter a Number'))

// for (var y= 1; y<=12; y++)
// window.alert(y*x)

// ____________________________________________________

// {11}
// var x = Number(window.prompt('Enter a Number'))
// for(y=2; y< x; y+=2)
// window.alert(y)
// _______________________________________________________
// {12}
// var x = Number(window.prompt('Enter a Number'))
// var y = window.prompt('Enter a Number')
// var z = 1
// for(i=0 ; i<y; i++)
// window.alert(z*=x) 
// __________________________________________________________
// {12`}
// var x =0;
// for(var i =0 ;i<5;i++){                 
//     x+= Number( window.prompt("Enter The Mark"));
// }

// window.alert("Total Marks="+x);
// window.alert("Average="+x/5);
// window.alert("persentage="+x/500*100);
// __________________________________________________________

// {13}
// var x = Number(window.prompt("Enter Month Number"));

// switch(x){
//   case "1":
//   case "3":
//   case "5": 
//   case "7":
//   case "8":   
//   case "10":
//   case "12":
//     window.alert(31);
//  break;
//   case "4":
//   case "6": 
//   case "9":
//   case "11":   
//   window.alert(30);
//  break;
//   case "2":
//    window.alert(28);
//  break;
//  default:
//    window.alert('Write a Number from 1 to 12')
 
// }
// __________________________________________________
// {14}
// var x1 = Number( window.prompt("Enter the Mark of Physics Subject"));
// var x2 = Number(window.prompt("Enter the Mark of Chemistry Subject"));
// var x3 = Number(window.prompt("Enter the Mark of Biology Subject"));
// var x4 = Number(window.prompt("Enter the Mark of Mathematics Subject"));
// var x5 = Number(window.prompt("Enter the Mark of Computer Subject"));

// var persentage = (x1+x2+x3+x4+x5)/500*100;

// if(persentage>=90){
//     window.alert("Grade A")
// }else if(persentage>=80){
//     window.alert("Grade B")
// }else if(persentage>=70){
//     window.alert("Grade C")
// }else if(persentage>=60){
//     window.alert("Grade D")
// }else if(persentage>=40){
//     window.alert("Grade E")
// }else if(persentage<40){
//     window.alert("Grade F")
// }

// _____________________________________________________
// {15}
// var x = Number(window.prompt("Enter Month Number"));

// switch(x){
//   case "1":
//   case "3":
//   case "5": 
//   case "7":
//   case "8":   
//   case "10":
//   case "12":
//     window.alert(31);
//  break;
//   case "4":
//   case "6": 
//   case "9":
//   case "11":   
//   window.alert(30);
//  break;
//   case "2":
//    window.alert(28);
//  break;
//  default:
//    window.alert('Write a Number from 1 to 12')
 
// }
// __________________________________________________
// {16}
  //  var x = window.prompt("Enter a Character");
//  switch(x){
//     case "a":
//     case "e":
//     case "l":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "L":
//     case "O":
//     case "U":  
//    window.alert('vowel');
//    break;

//     default:
//     window.alert('Consonant');
//   break;

//  }
// ______________________________________________________
// {17}
   
// var num1 = Number(window.prompt("Enter First Number"));
// var num2 = Number(window.prompt("Enter Second Number"));

// switch (num1 > num2) {
//   case true:
//     window.alert(num1);
//     break;
//   case false:
//     window.alert(num2);
//     break;
// }
// _________________________________________________________

// {18}

// var num = Number(window.prompt("Enter a Number"));
// switch(num %2== 0){
//   case true:
//     window.alert("Even");
//     break;
//   case false:
//     window.alert("Odd");
//     break;
//     default:
//         window.alert("Not Even and Not Odd");
// }
// ____________________________________________________________
// {19}


// var num = Number(window.prompt("Enter a Number"));
// switch(num>0){
//   case true:
//     window.alert("Positive Number");
//     break;
//   case false:
//     switch(num<0){
//     case true:
//       window.alert("Negative Number");
//       case false:
//     window.alert('ZERO');
//     break;
// }
// }
// ____________________________________________________________

// {20}
//  var num1 = Number(window.prompt("Enter First Number"));
//  var num2 = Number(window.prompt("Enter Second Number"));
//  var mathMark = window.prompt("Enter  Math Mark ");
// switch (mathMark) {
//   case "+":
//     window.alert(num1 + num2);
//     break;
//   case "-":
//     window.alert(num1 - num2);
//     break;
//   case "*":
//     window.alert(num1 * num2);
//     break;
//   case "/":
//     window.alert(num1 / num2);
//     break;
// }
