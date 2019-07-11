function createGame () {
    deck = createDeck();
    //console.log(deck);
    player = createCardHolder(deck);
    //console.log(player);
}
function createDeck () {
      const cards = [];
      const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King', 'Ace'];
      const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
  
      weights.forEach(weight => {
        suits.forEach(suit => {
            cards.push({suit, weight});
        });
      });
      return shuffle(cards);
}
function shuffle(cards) {
    return cards.sort(()=> Math.random() -0.5);
}
function createCardHolder (deck){
    result = drawCard(deck);
    hand = result.drawnCards;
    newDeck = result.newDeck;
    // console.log(hand);
    // console.log(newDeck);
    handValue = calculateValue(hand);
    //return { hand};
}
function drawCard (deck){
    const drawnCards = deck.slice(0,2);
    //console.log(drawnCards);
    const newDeck = pureSpliceThatWeDidntTakeFromAndrew(deck);
    //console.log(newDeck);
    return {drawnCards,newDeck};

}
function pureSpliceThatWeDidntTakeFromAndrew(deck){
    return [...deck.slice(2)];    
}
function calculateValue (){

}
function compareHands (){

}
function printResults (){

}
createGame();