function GenerateCheckboxes()
{
    // var kokiriForestChecks = ["Kokiri Sword", "House Chest #1", "House Chest #2", "House Chest #3", "House Chest #4"];
    // kokiriForestChecks.Name = "Kokiri Forest";
    // var kakarikoVillageChecks = ["Anju Kid", "Anju Adult", "Village grotto #1", "Village grotto #2", "Cow Item", "Man on Roof", "Windmill Song", "Windmill Item", "Windmill HP", "", "Redead grave", "Forgotten grave", "Sun song grave", "Sun song grave torches", "Magic bean box", "Dampe digging", "Dampe Race #1", "Dampe Race #2", "", "Golden Skultulla 10", "Golden Skultulla 20", "Golden Skultulla 30", "Golden Skultulla 40", "Golden Skultulla 50", ];
    // kakarikoVillageChecks.Name = "Kakariko Village";
    // var deathMountainChecks = ["Top Dodongo Cavern", "Broken Wall", "Cow Grotto", "Rolling Pot", "Crater Grotto"];
    // deathMountainChecks.Name = "Death Mountain";
    
     var itemChecks = document.getElementById("ItemChecks");

    // var checksArray = [kokiriForestChecks, kakarikoVillageChecks, deathMountainChecks];
    var checksArray = ReadJson();

    checksArray.forEach(array => {
      var div = document.createElement("div");
      var title = document.createElement("h3");
      title.setAttribute("class", "mb-3");
    //   title.textContent = array.Name;

      div.appendChild(title);

      addCheckboxes(array, div);

      itemChecks.appendChild(div);
    });

    function addCheckboxes(items, div)
    {
      items.forEach(element => {
        var subDiv = document.createElement("div");

        if(element != "")
        {
          subDiv.setAttribute("class", "custom-control custom-checkbox");

          var check = document.createElement("input");
          check.type = "checkbox";
          check.setAttribute("class", "custom-control-input");
          check.setAttribute("id", element);
          
          var label = document.createElement("label");
          label.textContent = element;
          label.setAttribute("class", "custom-control-label");
          label.setAttribute("for", element);

          subDiv.appendChild(check);
          subDiv.appendChild(label);
        }

        div.appendChild(subDiv);
      });
    };
}

function ReadJson()
{
    $.getJSON(GetText("json/locations.json"), function( data ) 
    {
    });
}