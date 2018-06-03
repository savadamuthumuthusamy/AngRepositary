var data=() => {
  return new Promise(function (resolve,reject) {
        
    setTimeout(function() {
             console.log("success");
              resolve("level 1 success");
            });
     });

}

data2=() =>{

     data().then(function() {
           console.log("level2");
          });

}
data3=() =>{

     data2().then(function() {
           console.log("level3");
          });

}

data2();
         