var timeOfDay;
    var inventory = { sword: 0, bow: 0, staff: 0, potion: 0, gold: 50}
    var spells = { flameTornato: 0, waterBurst: 0, landsFissure: 0, kazap: 0, skysTempest: 0, frostHunt: 0}
    
    var stateInventory = function() {
        alert("You have...\n " + inventory.sword + " swords\n " + inventory.bow + " bows\n " + inventory.staff + " staffs\n " + inventory.potion + " potions\n " + inventory.gold + " gold");
    }
        
    function start() {

        var playerName = prompt('What is your name traveler?');

        alert('Welcome ' + playerName + " to the land of Zer'Rek");

        var startGame = confirm('Are you ready to begin your adventure?');

            if(startGame){
                village();
            }
            else {
                alert('goodbye');
            }
    }
        
    function village() {
        var theVillage = prompt('You arrive at a small village. There is a blacksmith, inn, shop, and stable. Where will you go?').toLowerCase();

        switch(theVillage) {
            case 'blacksmith':
                weapon = prompt('What can I get for you young lad? The shelves display a Sword, a Bow, and a Staff').toLowerCase();
                if (weapon == 'sword' && inventory.gold >= 25) {
                    alert('You pick up the sword, and try a few practice swings it feels very comfortable in your hands. You pay the smith 25G and leave.');
                            inventory.sword = 1;
                            inventory.bow = 0;
                            inventory.staff = 0;
                            inventory.gold = inventory.gold - 25;
                            village();
                }
                else if (weapon == 'bow' && inventory.gold >= 25){
                    alert('Upon grasbing the wood you pull back on the string to test its strengh it feels perfect. You pay the smith 25G and leave.');
                            inventory.sword = 0;
                            inventory.bow = 1;
                            inventory.staff = 0;
                            inventory.gold = inventory.gold - 25;
                            village();
                } 
                else if (weapon == 'staff' && inventory.gold >= 25) {
                    alert('You think to yourself it isnt much now but with some spells this could do some serious damage. You pay the smith 25G and leave.');
                            inventory.sword =0;
                            inventory.bow = 0;
                            inventory.staff = 1;
                            inventory.gold = inventory.gold - 25;
                            village();
                }
                else {
                    alert('Oh nothing for now? Ok lets return outside.');
                    village();
                }
            break;
            case 'inn':
                var rest = confirm('A gorgeous young lady innkeeper ask "Are you wery, will you rest?"');
                if (rest) {
                    alert('You sleep your health is restored. The time is now night')
                    village();
                }
                else {
                    alert('You deicied maybe later and you leave.');
                    village();
                }
            break;
            case 'shop':
                alert('Get out youve got no gold on you i can see your wasting my time and in the way of real customers');
                village();
            break;
            case 'stable':
                var travel = confirm('Will you use a horse to travel to the kingdom?');
                if (travel){
                    kingdom();
                }
                else {
                    alert('You deicied maybe later and you leave.');
                    village();
                }
            break;
            case 'inventory':
                stateInventory();
                village();
            break;
            default:
                alert('I dont understand ' + theVillage);
                village();
            break;
        }
    }

    function kingdom() {
        var theKingdom = prompt('This kingdom is so massive and expanisve! so much to see and do, where to start? shop, inn, castle, blacksmith or the stables').toLowerCase();

        switch(theKingdom) {
            case 'shop':

                kingdom();
            break;
            case 'inn':
                var rest = confirm('An old lady innkeeper ask "need a room?"');
                if (rest) {
                    alert('You sleep your health is restored. The time is now night')
                    kingdom();
                }
                else {
                    alert('You deicied maybe later and you leave.');
                    kingdom();
                }
            break;
            case 'castle':
                alert('You enter the castle');
                //castle();
            break;
            case 'blacksmith':

                kingdom();
            break;
            case 'stable':
                var travel = confirm('Will you use a horse to travel to the forest?');
                if (travel){
                    forest();
                }
                else {
                    alert('You deicied maybe later and you leave.');
                    kingdom();
                }
            break;
                case 'inventory':
                stateInventory();
                kingdom();
            break;
            default:
                alert('I dont understand ' + theKingdom);
                kingdom();
            break;
        }
    }
    function forest() {
        var theForest = prompt('spooky').toLowerCase();
        
        switch(theForest) {
            case '':
                
            break;
            case '':
                
            break;
            case '':
                
            break;
            case 'inventory':
                stateInventory();
                forest();
            break;
            default:
                alert('I dont understand ' + theForest);
                forest();
            break;
        }
    }