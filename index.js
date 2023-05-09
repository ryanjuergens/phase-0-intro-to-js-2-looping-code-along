function writeCards(name, event){
    let thankCards = []
    for(let i = 0; i < name.length; i++){
        thankCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankCards
}     

function countDown(n){
    let countdown = n
    while( countdown > -1 )
{ console.log(countdown--)}
}