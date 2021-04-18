# js-culture

###### Practice Javascript

## Objects:

- In javascript everything is object.
- We can declare our own objects.
- Following ways often the objects are being created
  - Object literal (Dont get confused with distructuring)
  - New keyword based / with new binder
  - Class based object
  - Function based object
  - Object.creat method
- This keyword and binders

## Object Literal

```
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
```
