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
    var zoneDiv = document.getElementById(zone.Name.replace(" ", "-"));

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


 var AgeRequirement = Object.freeze({"Child":1, "Adult":2, "Both":3});
 var CheckType = Object.freeze({"Chest":1, "OverworldItem":2, "Reward":3, "Song":4, "GoldenSkultulla":5});