function GenerateCheckboxes()
{        
    var itemChecks = document.getElementById("ItemChecks");
    var checksArray = ReadJson().then(function(){
        checksArray.forEach(array => {
        var div = document.createElement("div");
        var title = document.createElement("h3");
        title.setAttribute("class", "mb-3");

        div.appendChild(title);

        addCheckboxes(array, div);

        itemChecks.appendChild(div);
        });
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
    $.getJSON("json/locations.json", function( data ) 
    {
        return [data];
    });
}