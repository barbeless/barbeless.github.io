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
    var zoneDiv = document.getElementById(zone.Name.replaceAll(" ", "-"));

    var header = document.createElement("h3");
    
    var headerSpan = document.createElement("span");
    headerSpan.textContent = zone.Name;

    if(zone.Tips != null)
    {
        headerSpan.setAttribute("data-toggle", "tooltip");
        headerSpan.setAttribute("data-placement", "auto");
        headerSpan.setAttribute("data-html", "true");

        var tooltipText = GenerateTooltipText(zone.Tips);
        headerSpan.setAttribute("title", tooltipText);
    }

    header.appendChild(headerSpan);

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

function GenerateTooltipText(tips)
{
    var resultText = "";

    tips.forEach(tip =>
    {
        var issue = "<h4>" + tip.Issue + "</h4>";        
        var solution = "<li>" + tip.Solution.replaceAll(" \n", "</li><li>") + "</li>";

        resultText += issue + solution;
    });

    return resultText;
}

function OnLoad()
{
     LoadJson(function(response)
     {
        LoadPage(response);
        LoadCookie("SavedData");
     });

    // LoadPage(test);
}

function LoadJson(callback) 
{   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './json/locations.json', true);
    xobj.onreadystatechange = function () 
    {
          if (xobj.readyState == 4 && xobj.status == "200") 
          {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function LoadCookie(property)
{
    var result = ReadCookie(property);
    if(result == null)
    {
        return;
    }

    var values = result.split("|");
    values.forEach(value =>
    {
        var checkbox = document.getElementById(value);
        if(checkbox != null)
        {
            checkbox.checked = true;
        }
    });
}

function SaveCookie()
{
    var cookieData = "";

    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++)
    {
        var input = inputs[i];
        if(input.type == "checkbox" && input.checked)
        {
            cookieData += input.getAttribute("id") + "|";
        }
    }

    var expirationDate = new Date("2069");
    document.cookie = "SavedData=" + cookieData + "; expires=" + expirationDate.toUTCString();
}

function ClearCookie()
{
    document.cookie = "SavedData=";
    
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++)
    {
        var input = inputs[i];
        if(input.type == "checkbox")
        {
            input.checked = false;
        }
    }
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

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var AgeRequirement = Object.freeze({"Child":1, "Adult":2, "Both":3});
var TimeOfDay = Object.freeze({"Day":1, "Night":2, "Both":3});
var CheckType = Object.freeze({"Chest":1, "OverworldItem":2, "Reward":3, "Song":4, "GoldenSkultulla":5});

// var test = '[{"Name":"Kokiri Forest","CheckboxColorName":"Green","Tips":[{"Issue":"Stuck in house","Solution":"Tilt the Control Stick to move around. Go through the door and you will reach Kokiri Forest. The game gets much easier from there."},{"Issue":"Skull Kid won’t buy this sweet Skull Mask","Solution":"Skull Kid won’t buy Skull Mask until you befriend him with Saria’s Song."}],"Checks":[{"Location":"Kokiri Sword Chest","AgeRequirement":1,"CheckType":0},{"Location":"Song from Saria","AgeRequirement":1,"CheckType":4},{"Location":"Skull Kid","AgeRequirement":1,"CheckType":2},{"Location":"Ocarina Memory Game","AgeRequirement":1,"CheckType":0},{"Location":"Target in Woods","AgeRequirement":1,"CheckType":0},{"Location":"LW Deku Scrub Deku Stick Upgrade","AgeRequirement":1,"CheckType":0},{"Location":"Sheik Forest Song","AgeRequirement":1,"CheckType":0},{"Location":"Kokiri Forest Storms Grotto Chest","AgeRequirement":1,"CheckType":0},{"Location":"Lost Woods Generic Grotto Chest","AgeRequirement":1,"CheckType":0},{"Location":"Deku Theater Skull Mask","AgeRequirement":1,"CheckType":0},{"Location":"Deku Theater Mask of Truth","AgeRequirement":1,"CheckType":0},{"Location":"LW Grotto Deku Scrub Deku Nut Upgrade","AgeRequirement":1,"CheckType":0},{"Location":"Wolfos Grotto Chest","AgeRequirement":1,"CheckType":0},{"Location":"4 House Chest","AgeRequirement":3,"CheckType":0}]},{"Name":"Kakariko Village","CheckboxColorName":"Blue","Tips":[{"Issue":"Shooting Gallery gives 50 rupees","Solution":"The Fairy Bow/Quiver is required to win the special prize. Otherwise you will receive 50 rupees."},{"Issue":"Can’t get onto rooftops without Longshot","Solution":"Yes you can. Get a little closer and use the Hookshot."},{"Issue":"Well wont drain","Solution":"Project 64 is known to have issues with this, among other things. For the purposes of this project, we can only recommend using a different emulator."}],"Checks":[{"Location":"Sheik in Kakariko","AgeRequirement":1,"CheckType":4},{"Location":"Man on Roof","AgeRequirement":1,"CheckType":4},{"Location":"Kakariko Back Grotto Chest","AgeRequirement":1,"CheckType":4},{"Location":"Windmill Freestanding PoH","AgeRequirement":1,"CheckType":4},{"Location":"Adult Shooting Gallery","AgeRequirement":1,"CheckType":4},{"Location":"Graveyard Freestanding PoH","AgeRequirement":1,"CheckType":4},{"Location":"Gravedigging Tour","AgeRequirement":1,"CheckType":4},{"Location":"Shield Grave Chest","AgeRequirement":1,"CheckType":4},{"Location":"Forgotten Grave Chest","AgeRequirement":1,"CheckType":4},{"Location":"Composer Grave Chest","AgeRequirement":1,"CheckType":4},{"Location":"Hookshot Chest","AgeRequirement":1,"CheckType":4},{"Location":"Dampe Races","AgeRequirement":1,"CheckType":4},{"Location":"Anjus Chickens","AgeRequirement":1,"CheckType":4},{"Location":"Anju as Adult","AgeRequirement":1,"CheckType":4},{"Location":"Song at Windmill","AgeRequirement":1,"CheckType":4},{"Location":"Song from Composer Grave","AgeRequirement":1,"CheckType":4},{"Location":"Impa House Freestanding PoH","AgeRequirement":1,"CheckType":2},{"Location":"10 Gold Skulltula Reward","AgeRequirement":3,"CheckType":2},{"Location":"20 Gold Skulltula Reward","AgeRequirement":3,"CheckType":2},{"Location":"30 Gold Skulltula Reward","AgeRequirement":3,"CheckType":2},{"Location":"40 Gold Skulltula Reward","AgeRequirement":3,"CheckType":2},{"Location":"50 Gold Skulltula Reward","AgeRequirement":3,"CheckType":2}]}]';