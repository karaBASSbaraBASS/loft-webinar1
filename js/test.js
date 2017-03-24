$(document).ready(function() {
	


city=new Array("London", "Glasgow", "Vancouver", "Perth", "Bonn")

citySort=new Array()
	for(j=0;j<city.length;j++) //*5 time
	{
		maxlen_i=0
		maxlen=city[maxlen_i] //0.0 = London
		for(i=0;i<city.length;i++) //*6 time
		{
			if(city[i].length<maxlen.length){maxlen=city[i];maxlen_i=i} // London.length>6 => London=0, 0 = 1,2,3,4,5,6
		}
		city[maxlen_i]=""
		citySort.push(maxlen)
	}
city=citySort

for (i=0; i<city.length; i++) {
	console.log( city[i] )
}
});