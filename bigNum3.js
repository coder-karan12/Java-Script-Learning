let a = 10;
let b = 10;
let c = 10;

if (a>b &&a>c){
    console.log("A is greater than both");
}

else if(b>a &&b>c){
    console.log("B is greater than Both");
}

else if(c>a &&c>b){
    console.log("C is greater than Both");
}

else if (a===b && b===c){
    console.log("All are equal");
}