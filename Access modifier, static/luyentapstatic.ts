class Practice{
    static nameObject: string = 'hiep';
    static age: number = 22;
    static id: number = 2147;
    static displayObject(){
        return `Ten: ${Practice.nameObject} - Tuoi: ${Practice.age} - Id: ${Practice.id}`
    }
}

console.log(Practice.displayObject())

