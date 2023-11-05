function check(){
    let text = document.getElementById("text").value;
    let text2 = [...text].reverse().join('');
    let res= text+" is not a palindrome";
    if(text===text2)
        res = text+" is a palindrome"
    document.getElementById("result").innerHTML = res;
}