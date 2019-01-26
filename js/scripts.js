function LoadPage(json)
{
    var locations = JSON.parse(json);
    
    var div = document.getElementById("ItemChecks");

    locations.forEach(zone => {
        AddZone(zone)
    });
}

function AddZone(zone)
{
    var zoneDiv = document.getElementById(zone.Name.replace(" ", "-").replace(" ", "-"));

    var header = document.createElement("h3");
    header.textContent = zone.Name;
    zoneDiv.appendChild(header);

    zone.Checks.forEach(check => 
    {
        var checkDiv = document.createElement("div");
        checkDiv.setAttribute("class", "custom-control custom-checkbox");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("class", "custom-control-input");
        checkbox.setAttribute("id", check.Location);
        
        var label = document.createElement("label");
        label.textContent = check.Location;
        label.setAttribute("class", "custom-control-label");
        label.setAttribute("for", check.Location);

        checkDiv.appendChild(checkbox);
        checkDiv.appendChild(label);

        zoneDiv.appendChild(checkDiv);
    });
}

function OnLoad()
{
    LoadJson(function(response)
    {
        LoadPage(response);
    });

    LoadCookie();
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

 function LoadCookie()
 {
    var result = ReadCookie("SavedData");
    var values = result.split(";");

    values.forEach(value =>
    {
        var checkbox = document.getElementById(value);

        if(checkbox != null)
        {
            checkbox.checked;
        }
    });
 }

 function SaveCookie()
 {
    var cookieData;
 
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++)
    {
        var input = inputs[i];
        if(input.type == "checkbox" && input.checked)
        {
            cookieData += input.getAttribute("id") + ";";
        }
    }
  
    document.cookie = "SavedData=" + cookieData;
 }

 function ReadCookie(name)
 {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
 }

 var AgeRequirement = Object.freeze({"Child":1, "Adult":2, "Both":3});
 var CheckType = Object.freeze({"Chest":1, "OverworldItem":2, "Reward":3, "Song":4, "GoldenSkultulla":5});