// console.log("Hello, World!");
// var a;
// console.log("a=",a);
// a=10;

// let a=40;
// if(a>10){
//     let a = 300;
//     console.log("a= "+a);
// }
// else{
//     console.log("Else Condition");
// }
// console.log("a= "+a);

// let a = '20';
// if (a === 20){
//     console.log("Equal Data");
// }
// else{
//     console.log("Not Equal Data");
// }

// const myname = "Rahul";
// console.log("Hii..."+ myname);
// const data = `Hii...${myname}`;
// console.log(data)

// function msg(){
//     return "Welcome to JS";
// }
// const data = msg();
// console.log(data);

// const data=function msg (name){
//     return `Welcome to JS, ${name}`;
// }
// const msg= data("Rahul");
// console.log(msg);

//Arrow Function

// const data = (name) => `Welcome to JS, ${name}`;
// const msg= data("Rahul");
// console.log(msg);

//Sinle line
// const data = msg => msg;
// console.log(data("Hii..."));

// //IIFEE
// (function(){
//     console.log("Hii... IIFEE");
// })();

// //Arrow Function IIFEE

// (()=>{
//     console.log("Hii... IIFEE");
// })();

// //SetTimeout
// setTimeout(()=>{
//     console.log("Hii... I am using setTimeout");
// },1000);

// //SetInterval
// setInterval(()=>{
//     console.log("Hii... I am using setInterval");
// },1000);

// function greetings(msg="Welcome"){
//     console.log("Hii "+msg);
// }
// greetings(); 
// greetings("Rahul"); 

function selectlanguage(lang){
    let data;
    if (lang == "java"){
        function javaCompiler(){
            data = "Java Compiler Selected";
        }
        data = javaCompiler();
    }
    else if (lang == "c"){
        function cCompiler(){
            data = "C Compiler Selected";
        }
        return cCompiler();
    }
    else{
        data = "No such Compiler"
    }
    console.log(data);
}

selectlanguage(java);