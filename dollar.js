//1.create a request variable from XMLHttpRequest
var request=new XMLHttpRequest();
//2.create a new connection
request.open('GET',' https://restcountries.eu/rest/v2/all',true)
//3.send the request
request.send();
//4.load the data
request.onload=function(){
    var countrydata=JSON.parse(this.response);
    var country=countrydata.filter(function(element){
        for(i in element.currencies){
            if(element.currencies[i].code=="USD")
            {
                return element;
            }
        }
    })

    console.log(country);
}