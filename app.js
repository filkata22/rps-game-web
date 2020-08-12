const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            
        });
    };

    const playMatch = () =>{
        const playerOptions= document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".playerHand");
        const computerHand = document.querySelector(".computerHand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
                setTimeout(() => {
                    playerHand.src = `./images/rock.png`;
                    computerHand.src = `./images/rock.png`;
                },1000)
                
            });
            
        });

        

        playerOptions.forEach(option =>{
            option.addEventListener("click", function(){
                const computerOptions = ['Rock','Paper','Scissors'];
                const computerChoice = computerOptions[Math.floor(Math.random()*3)].toLowerCase();
                
                
                
                // Update the images
                setTimeout(() =>{
                    const playerChoice = this.textContent.toLowerCase();
                    compareHands(playerChoice,computerChoice);
                    playerHand.src = `./images/${playerChoice}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
                }, 3000);
                

                //add animation
                playerHand.style.animation = "playerHandAnimation 3s ease";
                computerHand.style.animation = "computerHandAnimation 3s ease";
            });
        });
    }
    const updateScore = () => {
        document.querySelector(".player-score p").textContent = pScore;
        document.querySelector(".computer-score p").textContent = cScore;
    }

    const compareHands = (playerHand, computerHand) =>{
        const winner = document.querySelector(".winner");
        if(playerHand === computerHand){
            winner.textContent = 'It is a tie.';
            return;
        }
        if( playerHand === 'scissors'){
            if(computerHand === 'rock'){
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
        }

        if( playerHand === 'rock'){
            if(computerHand === 'paper'){
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
        }

        if( playerHand === 'paper'){
            if(computerHand === 'scissors'){
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //call functions
    startGame();
    playMatch();
};
// start game
game();