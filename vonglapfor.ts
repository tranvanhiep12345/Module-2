function loop(){
    let object = {
        Name: 'Hiep',
        Age: 22,
        Class: 'C03'
    }
    console.log("for(;;)")
    for(let i=0; i <=10; i+=2){
        console.log(i)
    }
    console.log("for...of")
    for(let i of ["David", 24, "C02"]){
        console.log(i)
    }
    console.log("for...in")
    // for(let i in object){
    //     console.log(object[i])
    // }
}
loop()
