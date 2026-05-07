function type(value){
    if(typeof value === 'string'){
        return 'string';
    }   
    else if(typeof value === 'number'){
        return 'number';
    }   
}
console.log(type('Hello'));
console.log(type(42)); 
