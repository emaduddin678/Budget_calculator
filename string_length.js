let str = "Apple, Banana, Mango";
console.log(`This is the length of String = ${str.length}`);
console.log(str.slice(7, 13));
console.log(str.substr(7,11))
let newStr = str.replace("Mango","Litchi");
console.log(`Main string = ${str}`)
console.log(`Replace string = ${newStr}`)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.concat("  =  ",newStr))
console.log(str.charAt(0))
console.log(str.charAt(1))
console.log(str.charAt(3))

function lengthOfStr(string){
    let length = 0;
    while (true){
        if(string.charAt(length) == ''){
            break;
        }else{
            length++;
        }
    }
    console.log(length);
}

lengthOfStr(str);
