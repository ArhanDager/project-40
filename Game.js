class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket. 
             
        }


        // Give movements for the players using arrow keys
        if(player.distance < 2500){
            if(keyIsDown(38) && player.index !== null){
            player.changePosition.y += 10
                if(keyIsDown(37)){
                    player.changePosition.x -= 10
                }
                if(keyIsDown(39)){
                    player.changePosition.x += 10
                }
            }
          }
      
      
        player.update();

        // Create and spawn fruits randomly
        for (let index = 0; index < 5; index++) { 
            w = random(200,displayWidth-200)
           h = random(-displayHeight*4,displayHeight-300)
            fruitGroup = createSprites(w,h)
           oil.debug = true;
           fruitGroup.add(fruit1_img,fruit2_img,fruit3_img,fruit4_img,fruit5_img)
           
           
       }
        
    }
    

    end(){
       console.log("Game Ended");
    }

    
}