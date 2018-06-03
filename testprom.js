var data=() => {
  return new Promise(function (resolve,reject) {
        
     resolve("hai i am in resolve") 
     });

}

data2=() =>{

return  new Promise(function(resolve, reject) {

  data().then(function(value) {
           console.log("level2", value);
          });
reject("");

});
}
data3=() =>{

     data2().then(function(value) {
           console.log("level3", value);
          });

}

data3();
         