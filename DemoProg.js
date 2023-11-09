//prototypal inheritence
let person={
    name:"Chandu",
    age:20
};

let employee={
    role:"Developer",
    __proto__:person
};
//colsure
function calAge(born,present){
    function calc(){
            return present-born;
        };
    return calc();
}

//callbacks
function validAge(age){
    return age>=20;
}

function age(age, callback){
    console.log(age);
    console.log(`Employee is set for job : ${callback(age)}`)
}

//promises
async function salInc(sal,exp){
    let val= true;
    if(exp >= 5)
        val = false;
    let res = await checkExp(sal,false); 
    return res;
}

function checkExp(value,error){
    return new Promise((resolve,reject) =>{
        if(!error){
            resolve(value + value/10);
            return value;
        }else
            reject("Salary can't be increased due to lack of experience");
    })
}
console.log(employee.name)
console.log(calAge(2003,2023));
age(employee.age, validAge)
console.log(salInc(10000,5));


