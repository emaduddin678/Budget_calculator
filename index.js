function budgetSetting(){
    const value = document.forms['firstForm']['cost'].value;
    let p = document.getElementById("demo");
    if(value > 5000){
        p.innerText = "ট্যুর  এ  যাবে";
        
    } else if(value < 5000 && value > 2000){
        p.innerText = "বাইরে খেতে যাবে";
    } else {
        p.innerText = "বাসায়  পার্টি  দিবে"
    }
    return false;
}