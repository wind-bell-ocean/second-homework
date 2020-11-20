window.onload = function()
{
 var BaseURL = 'http://thungghuan.xyz:3000'
 var getRequest = new XMLHttpRequest()
 getRequest.open('GET', BaseURL + '/users')
 getRequest.send();
 getRequest.onreadystatechange = function()
 {
  if (getRequest.readyState == 4) 
  {  
    if (getRequest.status == 200) 
    {  
      console.log(getRequest.responseText)
      var list ='<ul>';
      var value =Object(eval(getRequest.responseText))
      var length = value.length;
      for(var i =0;i<length;i++)
      {
      	list+= '<li>' + value[i] + '</li>';
      }
      list + ='</ul>';
      document.getElementById('ul').innerHTML=list;
    }
  }
  else{alert(getRequest.responseText);}
 }
}
function postvalue()
{
	var BaseURL = 'http://thungghuan.xyz:3000';
	var postRequest = new XMLHttpRequest()
    postRequest.open('POST', BaseURL + '/add')
    name = document.getElementById('name').value
    num=document.getElementById('num').value;
    var postvalue = 
    {
    	'name':name,
    	'num':string(num)
    }
    postRequest.setRequestHeader("Content-type", "application/json")
    postRequest.send(JSON.stringify(postData))
    postRequest.onreadystatechange = function() 
    {
     if (postRequest.readyState == 4) 
     {
      if (postRequest.status == 200) 
      { console.log(postRequest.responseText) } 
      else 
      { alert(postRequest.responseText)}
     }
    }
}

