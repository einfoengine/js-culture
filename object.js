// Welcome to practice javascript object
/*
 - Object literal
 - An object literal is a list of name:value pairs inside curly braces {}
*/
let BrandRaiser = {
    members : {
        br001:{
            name: 'Abdullah',
            age: 35,
            blodGroup: 'O+'
        }
    },
    member2 : {
        name : this.name,
        age: this.age,
        blodGroup: this.blodGroup
    },
    showName(){
        console.log('Method excuted by ', this.members.br001.name);
    }
}
console.log('Object literal example, members name -', BrandRaiser.members.br001.name);
BrandRaiser.showName();
// Note: You cant use a constructor function in Object literal