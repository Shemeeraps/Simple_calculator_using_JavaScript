var my_obj={
    "name":"Shemeera",
    "age":24,
    "friends":['Rameez','Arya','Jaseela']
}
function checkobj(checkProp){
    if (my_obj.hasOwnProperty(checkProp)){
        return my_obj[checkProp];
    }
    else{
        return "Not Found";
    }
}
console.log(checkobj("name"))