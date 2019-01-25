function GenerateCheckboxes(json)
{
    var locations = JSON.parse(json);
    alert(json);
}

function OnLoad()
{
    LoadJson(function(response)
    {
        GenerateCheckboxes(response);
    });
}

function LoadJson(callback) 
{   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../json/locations.json', true);
    xobj.onreadystatechange = function () 
    {
          if (xobj.readyState == 4 && xobj.status == "200") 
          {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }