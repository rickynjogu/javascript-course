//Class Modifiers,visiblity modifiers/access modifiers
//private/protected/public
function MyClass(publicField,privateField,protectedField) {
    //public Field
    this.publicField=publicField;

    //Private Field (closure)
    const _privateField=privateField;

    //protected Field
    const _protectedField=protectedField;

    //Public Method
    this.publicMethod=function(){
        return `Public Field: ${this.publicField}`;
    }
    //private method
    function _privateMethod(){
        return `Private Method: ${_privateField}`;

    }
    //protected method
    function _protectedMethod(){
        return `Protected Method: ${_protectedField}`;
    }
    //Method to access protected method
    this.accessProtectedMethod=function (){
        return _protectedMethod();
    };

}
const myObject= new MyClass("Public Data","Private Data","Protected Data");
console.log(myObject.publicField);//"Public Data"
console.log(myObject.privateField);//undefined
console.log(myObject.protectedField);
console.log(myObject.publicMethod());
console.log(myObject.accessProtectedMethod());
