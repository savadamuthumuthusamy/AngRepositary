var  data=(a)=>{

	return new Promise(function(resolve , reject)
{

if(a==1)
resolve("PAss");
else
reject("Fail");

});	
	

}

var data2=(a)=> {

return new Promise( function(resolve, reject)
{

    data(a).then(function(hc){



	console.log("Indata2"+hc);

resolve("Pass in data 2");
})
});
}

var data3=(a)=>
{

data2(a).then(function(value)
{
console.log("in data3" + value);
});
  
} 

data3(1);