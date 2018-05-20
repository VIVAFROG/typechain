const name = "Yoonsik",
    age = 30,
    gender = "male";

const sayHi = (name:string, age:number, gender:string) => {
    return console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
};

sayHi(name,age,gender);

export{};