function GenerateCheckboxes()
{        
    var itemChecks = document.getElementById("ItemChecks");
    var checksArray = ReturnJson();
        checksArray.forEach(array => {
        var div = document.createElement("div");
        var title = document.createElement("h3");
        title.setAttribute("class", "mb-3");

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
    $.getJSON("json/locations.json", function( data ) 
    {
        return [data];
    });
}

function ReturnJson()
{
    var json = ["Links Pocket","Queen Gohma","King Dodongo","Barinade","Phantom Ganon","Volvagia","Morpha","Bongo Bongo","Twinrova","Song from Saria","Song from Ocarina of Time","Sheik at Colossus","Sheik at Temple","Impa at Castle","Sheik in Kakariko","Song at Windmill","Song from Composer Grave","Sheik in Crater","Song from Malon","Sheik Forest Song","Sheik in Ice Cavern","Kokiri Sword Chest","Mido Chest Top Left","Mido Chest Top Right","Mido Chest Bottom Left","Mido Chest Bottom Right","Skull Kid","Ocarina Memory Game","Target in Woods","LW Deku Scrub Deku Stick Upgrade","Underwater Bottle","Lake Hylia Sun","Lake Hylia Freestanding PoH","Diving in the Lab","Child Fishing","Adult Fishing","Gerudo Valley Waterfall Freestanding PoH","Gerudo Valley Crate Freestanding PoH","Gerudo Valley Hammer Rocks Chest","Gerudo Fortress Rooftop Chest","Horseback Archery 1000 Points","Horseback Archery 1500 Points","Gerudo Fortress North F1 Carpenter","Gerudo Fortress North F2 Carpenter","Gerudo Fortress South F1 Carpenter","Gerudo Fortress South F2 Carpenter","Haunted Wasteland Structure Chest","Colossus Freestanding PoH","Desert Colossus Fairy Reward","Zelda","Hyrule Castle Fairy Reward","Ganons Castle Fairy Reward","10 Big Poes","Child Shooting Gallery","Bombchu Bowling Bomb Bag","Bombchu Bowling Piece of Heart","Treasure Chest Game","Dog Lady","Man on Roof","Anju as Adult","Anjus Chickens","10 Gold Skulltula Reward","20 Gold Skulltula Reward","30 Gold Skulltula Reward","40 Gold Skulltula Reward","50 Gold Skulltula Reward","Impa House Freestanding PoH","Windmill Freestanding PoH","Adult Shooting Gallery","Graveyard Freestanding PoH","Gravedigging Tour","Shield Grave Chest","Heart Piece Grave Chest","Composer Grave Chest","Hookshot Chest","Dampe Race Freestanding PoH","Death Mountain Bombable Chest","DM Trail Freestanding PoH","Goron City Leftmost Maze Chest","Goron City Left Maze Chest","Goron City Right Maze Chest","Goron City Pot Freestanding PoH","Rolling Goron as Child","Link the Goron","Darunias Joy","DM Crater Wall Freestanding PoH","Biggoron","DM Crater Volcano Freestanding PoH","Crater Fairy Reward","Mountain Summit Fairy Reward","Frog Ocarina Game","Frogs in the Rain","Zora River Lower Freestanding PoH","Zora River Upper Freestanding PoH","Diving Minigame","Zoras Domain Torch Run","King Zora Thawed","Zoras Fountain Iceberg Freestanding PoH","Zoras Fountain Bottom Freestanding PoH","Zoras Fountain Fairy Reward","Talons Chickens","Lon Lon Tower Freestanding PoH","Ganons Tower Boss Key Chest","Kokiri Forest Storms Grotto Chest","Lost Woods Generic Grotto Chest","Deku Theater Skull Mask","Deku Theater Mask of Truth","LW Grotto Deku Scrub Deku Nut Upgrade","Wolfos Grotto Chest","Remote Southern Grotto Chest","Field Near Lake Outside Fence Grotto Chest","HF Grotto Deku Scrub Piece of Heart","Field West Castle Town Grotto Chest","Tektite Grotto Freestanding PoH","Redead Grotto Chest","Kakariko Back Grotto Chest","Mountain Storms Grotto Chest","Top of Crater Grotto Chest","Zora River Plateau Open Grotto Chest","Deku Tree Lobby Chest","Deku Tree Compass Chest","Deku Tree Compass Room Side Chest","Deku Tree Basement Chest","Deku Tree Slingshot Chest","Deku Tree Slingshot Room Side Chest","Queen Gohma Heart","Dodongos Cavern Map Chest","Dodongos Cavern Compass Chest","Dodongos Cavern Bomb Flower Platform","Dodongos Cavern Bomb Bag Chest","Dodongos Cavern End of Bridge Chest","Chest Above King Dodongo","King Dodongo Heart","Boomerang Chest","Jabu Jabus Belly Map Chest","Jabu Jabus Belly Compass Chest","Barinade Heart","Forest Temple First Chest","Forest Temple Chest Behind Lobby","Forest Temple Well Chest","Forest Temple Map Chest","Forest Temple Outside Hookshot Chest","Forest Temple Falling Room Chest","Forest Temple Block Push Chest","Forest Temple Boss Key Chest","Forest Temple Floormaster Chest","Forest Temple Bow Chest","Forest Temple Red Poe Chest","Forest Temple Blue Poe Chest","Forest Temple Near Boss Chest","Phantom Ganon Heart","Bottom of the Well Front Left Hidden Wall","Bottom of the Well Front Center Bombable","Bottom of the Well Right Bottom Hidden Wall","Bottom of the Well Center Large Chest","Bottom of the Well Center Small Chest","Bottom of the Well Back Left Bombable","Bottom of the Well Freestanding Key","Bottom of the Well Defeat Boss","Bottom of the Well Invisible Chest","Bottom of the Well Underwater Front Chest","Bottom of the Well Underwater Left Chest","Bottom of the Well Basement Chest","Bottom of the Well Locked Pits","Bottom of the Well Behind Right Grate","Fire Temple Chest Near Boss","Fire Temple Fire Dancer Chest","Fire Temple Boss Key Chest","Fire Temple Big Lava Room Bombable Chest","Fire Temple Big Lava Room Open Chest","Volvagia Heart","Fire Temple Boulder Maze Lower Chest","Fire Temple Boulder Maze Upper Chest","Fire Temple Boulder Maze Side Room","Fire Temple Boulder Maze Bombable Pit","Fire Temple Scarecrow Chest","Fire Temple Map Chest","Fire Temple Compass Chest","Fire Temple Highest Goron Chest","Fire Temple Megaton Hammer Chest","Ice Cavern Map Chest","Ice Cavern Compass Chest","Ice Cavern Iron Boots Chest","Ice Cavern Freestanding PoH","Water Temple Map Chest","Water Temple Compass Chest","Water Temple Torches Chest","Water Temple Dragon Chest","Water Temple Central Bow Target Chest","Water Temple Boss Key Chest","Morpha Heart","Water Temple Central Pillar Chest","Water Temple Cracked Wall Chest","Water Temple Dark Link Chest","Water Temple River Chest","Shadow Temple Map Chest","Shadow Temple Hover Boots Chest","Shadow Temple Compass Chest","Shadow Temple Early Silver Rupee Chest","Shadow Temple Invisible Blades Visible Chest","Shadow Temple Invisible Blades Invisible Chest","Shadow Temple Falling Spikes Lower Chest","Shadow Temple Falling Spikes Upper Chest","Shadow Temple Falling Spikes Switch Chest","Shadow Temple Invisible Spikes Chest","Shadow Temple Freestanding Key","Shadow Temple Wind Hint Chest","Shadow Temple After Wind Enemy Chest","Shadow Temple After Wind Hidden Chest","Shadow Temple Spike Walls Left Chest","Shadow Temple Boss Key Chest","Shadow Temple Hidden Floormaster Chest","Bongo Bongo Heart","Gerudo Training Grounds Lobby Left Chest","Gerudo Training Grounds Lobby Right Chest","Gerudo Training Grounds Stalfos Chest","Gerudo Training Grounds Beamos Chest","Gerudo Training Grounds Hidden Ceiling Chest","Gerudo Training Grounds Maze Path First Chest","Gerudo Training Grounds Maze Path Second Chest","Gerudo Training Grounds Maze Path Third Chest","Gerudo Training Grounds Maze Path Final Chest","Gerudo Training Grounds Maze Right Central Chest","Gerudo Training Grounds Maze Right Side Chest","Gerudo Training Grounds Freestanding Key","Gerudo Training Grounds Underwater Silver Rupee Chest","Gerudo Training Grounds Hammer Room Clear Chest","Gerudo Training Grounds Hammer Room Switch Chest","Gerudo Training Grounds Eye Statue Chest","Gerudo Training Grounds Near Scarecrow Chest","Gerudo Training Grounds Before Heavy Block Chest","Gerudo Training Grounds Heavy Block First Chest","Gerudo Training Grounds Heavy Block Second Chest","Gerudo Training Grounds Heavy Block Third Chest","Gerudo Training Grounds Heavy Block Fourth Chest","Spirit Temple Child Left Chest","Spirit Temple Child Right Chest","Spirit Temple Child Climb East Chest","Spirit Temple Child Climb North Chest","Spirit Temple Compass Chest","Spirit Temple Early Adult Right Chest","Spirit Temple First Mirror Right Chest","Spirit Temple First Mirror Left Chest","Spirit Temple Map Chest","Spirit Temple Sun Block Room Chest","Spirit Temple Statue Hand Chest","Spirit Temple NE Main Room Chest","Silver Gauntlets Chest","Mirror Shield Chest","Spirit Temple Near Four Armos Chest","Spirit Temple Hallway Left Invisible Chest","Spirit Temple Hallway Right Invisible Chest","Spirit Temple Boss Key Chest","Spirit Temple Topmost Chest","Twinrova Heart","Ganons Castle Forest Trial Chest","Ganons Castle Water Trial Left Chest","Ganons Castle Water Trial Right Chest","Ganons Castle Shadow Trial First Chest","Ganons Castle Shadow Trial Second Chest","Ganons Castle Spirit Trial First Chest","Ganons Castle Spirit Trial Second Chest","Ganons Castle Light Trial First Left Chest","Ganons Castle Light Trial Second Left Chest","Ganons Castle Light Trial Third Left Chest","Ganons Castle Light Trial First Right Chest","Ganons Castle Light Trial Second Right Chest","Ganons Castle Light Trial Third Right Chest","Ganons Castle Light Trial Invisible Enemies Chest","Ganons Castle Light Trial Lullaby Chest"]
    return [json];
}