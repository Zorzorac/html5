start();
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
    var village = prompt('You arrive at a small village. There is a blacksmith, inn, shop, and stable. Where will you go?').toLowerCase();
    
    switch(village) {
        case 'blacksmith':
            alert('What can I get for you young lad?');
        break;
        case 'inn':
            alert('A gorgeous young lady innkeeper ask "Are you wery, will you rest?"');
        break;
        case 'shop':
            alert('If you get gold i got stock what ye looking for?');
        break;
        case 'stable':
            alert('Will you use a horse to travel to another city?');
        break;
        default:
            alert('I dont understand ' + village);
        break;
    }
}