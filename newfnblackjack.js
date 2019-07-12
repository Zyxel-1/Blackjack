/**
 * Creates the game and executes the logic
 */
function createGame() {
    let deck = (() => {
        const cards = [];
        const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King', 'Ace'];
        const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
      
        weights.forEach(weight => {
          suits.forEach(suit => {
            cards.push({ suit, weight });
          });
        });
        return (() => {
            console.log(cards);
            return cards.sort(() => Math.random() - 0.5);
        })();
      })();
    const createCardHolder = (()=>{
        const result = (()=>{
            const hand = deck.slice(0, 2);
            const newDeck = (()=>{
                return [...deck.slice(2)];
            })();
            return { hand, newDeck };
        })();
        const { hand } = result;
        const { newDeck } = result;
        const handValue = (()=>{
            return hand.reduce(
                (accumulator, currentValue) =>
                  accumulator + getCardValue(currentValue.weight),
                0
              );
        })();
        return { newDeck, hand, handValue };
    })
    let result = createCardHolder(deck);
    // TODO: IMPROVE ON THIS DEAN
    const player = { hand: [], handValue: 0 };
    player.hand = result.hand;
    player.handValue = result.handValue;
    deck = result.newDeck;
    //-----------------------------------
    result = createCardHolder(deck);
    // TODO: IMPROVE ON THIS DEAN
    const dealer = { hand: [], handValue: 0 };
    dealer.hand = result.hand;
    dealer.handValue = result.handValue;
    deck = result.newDeck;
    //-----------------------------------
    const winningMessage = (()=>{
        // plater 1 player
        // player 2 is dealer
        const player1Score = player.handValue;
        const player2Score = dealer.handValue;
        if (player2Score > 21) {
            return "\tDEALER IS OVER 21, DEALER LOSES. YOU WIN!";
        } else if (player1Score > 21) {
            return "\tYOU ARE OVER 21, YOU LOSE";
        } else if (player1Score > player2Score) {
            return "\tYOU WON";
        } else if (player1Score === player2Score) {
            return "\tITS A TIE...";
        } else {
            return "\tDEALER WON, YOU LOSE";
        }
    })();
    const print = (() => {
        console.clear();
        console.log(
          '.------..------..------..------..------.     .------..------..------..------.\n' +
            '|B.--. ||L.--. ||A.--. ||C.--. ||K.--. |.-.  |J.--. ||A.--. ||C.--. ||K.--. |\n' +
            '| :(): || :/ : || (  ) || :/ : || :/ : ((5)) | :(): || (  ) || :/ : || :/ : |\n' +
            "| ()() || (__) || :  : || :  : || :  : |'-.-.| ()() || :  : || :  : || :  : |\n" +
            "| '--'B|| '--'L|| '--'A|| '--'C|| '--'K| ((2)) '--'J|| '--'A|| '--'C|| '--'K|\n" +
            "`------'`------'`------'`------'`------'  '-'`------'`------'`------'`------'"
        );
          console.log("Dealer's Hand:")
          console.log(`\t${dealer.hand[0].weight} of ${dealer.hand[0].suit}`)
          console.log(`\t${dealer.hand[1].weight} of ${dealer.hand[1].suit}`)
          console.log(`Dealer's Score: ${dealer.handValue}`)
          console.log()
          console.log("Player's Hand:")
          console.log(`\t${player.hand[0].weight} of ${player.hand[0].suit}`)
          console.log(`\t${player.hand[1].weight} of ${player.hand[1].suit}`)
          console.log(`Player's Score: ${player.handValue}`)
          console.log(winningMessage);
    })();
  }
  /**
   * Converts weight value such as ACE, KING, QUEEN, and JACK to calculatable integers
   * @param {int or string} weight 
   * @returns {int} The value of the card
   */
  function getCardValue(weight) {
    if (typeof weight === 'string') {
      const weights = {
        Jack: 10,
        Queen: 10,
        King: 10,
        Ace: 11,
      };
      return weights[weight];
    }
    return weight;
  }
  createGame();