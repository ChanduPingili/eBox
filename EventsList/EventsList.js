let strArr=[];
let size=0;
function push(){
    let val = document.getElementById("input").value;
    if(val!=''){
    strArr[size]=val;
    document.getElementById("events").innerHTML="Added Successsfully";
    document.getElementById("events").style.color = "green"
    document.getElementById("events").style.fontSize ="23px";
    document.getElementById("myList").innerHTML='';
    size++;
    }else
        document.getElementById("events").innerHTML="Enter event";
        
}

function pop(){
    if(size > 0){
        document.getElementById("events").innerHTML="Removed Successsfully";
        document.getElementById("events").style.color = "green"
        document.getElementById("events").style.fontSize ="23px";
        document.getElementById("myList").innerHTML='';
        size--;
    }else{
        document.getElementById("events").innerHTML="Event array is empty";
        document.getElementById("events").style.color = "black"
        document.getElementById("events").style.fontSize ="18px";
        document.getElementById("myList").innerHTML='';
    }
}

function display(){
    document.getElementById("myList").innerHTML='';
    if(size>0){
        document.getElementById("events").innerHTML="The Events in the array";
        document.getElementById("events").style.color = "black"
        document.getElementById("events").style.fontSize ="27px";
        let list = document.getElementById("myList");
        for (i = 0; i < size; ++i) {
            console.log(strArr[i])
            let li = document.createElement('li');
            li.innerText = strArr[i];
            list.appendChild(li);
        }
    }else{
        document.getElementById("events").innerHTML="Event array is empty";
        document.getElementById("events").style.color = "black"
        document.getElementById("events").style.fontSize ="18px";
    }
}