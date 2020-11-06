function flip(event){
    const element = event.currentTarget;
    if (element.className === "card") {
        if(element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        }
        else {
            element.style.transform = "rotateY(180deg)";
        }
    }
};

function cardCreate() {

    const cardSuit = [
        'Diamonds', 'Clubs',
        'Spades', 'Hearts',
    ];
    const cardValue = [
        'A',
        '2', '3', '4',
        '5', '6', '7',
        '8', '9', '10',
        'J', 'Q', 'K',
    ];

    function Card(value, suit) {
        this.suit = suit;
        this.value = value;
    }

    const resValue = cardValue[Math.floor(Math.random() * cardValue.length)];
    const resSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
    const res = new Card(resValue, resSuit)
    console.log(res)
    return new Card(resValue, resSuit);
}

function cardMove(card) {
    const x = 100;
    const y = 100;
    const centerWidth = 1;
    const centerHeight = 1;
    const getCard = document.getElementById('card_canvas');
    const ctxCard = getCard.getContext('2d');
    switch (card.suit) {
        case 'Hearts':
            const getHearts = document.getElementById('hearts_canvas');
            const ctxH = getHearts.getContext('2d');
            const centerH = ctxH.fillRect((getHearts
                    .width / 2) - (centerWidth / 2), (getHearts
                    .height / 2) - (centerHeight / 2), centerWidth, centerHeight);
            getHearts.style.backgroundImage = `url('./Textures/Cards/Hearts/${card.value}H.png')`;
            break;
        case 'Spades':
            const getSpades = document.getElementById('spades_canvas');
            const ctxS = getSpades.getContext('2d');
            const centerS = ctxS.fillRect((getSpades
                    .width / 2) - (centerWidth / 2), (getSpades
                    .height / 2) - (centerHeight / 2), centerWidth, centerHeight);
            getSpades.style.backgroundImage = `url('./Textures/Cards/Spades/${card.value}S.png')`;
            break;
        case 'Diamonds':
            const getDiamonds = document.getElementById('diamonds_canvas');
            const ctxD = getDiamonds.getContext('2d');
            const centerD = ctxD.fillRect((getDiamonds
                .width / 2) - (centerWidth / 2), (getDiamonds
                .height / 2) - (centerHeight / 2), centerWidth, centerHeight);
            getDiamonds.style.backgroundImage = `url('./Textures/Cards/Diamonds/${card.value}D.png')`;
            break;
        case 'Clubs':
            const getClubs = document.getElementById('clubs_canvas');
            const ctxC = getClubs.getContext('2d');
            const centerC = ctxC.fillRect((getClubs
                .width / 2) - (centerWidth / 2), (getClubs
                .height / 2) - (centerHeight / 2), centerWidth, centerHeight);
            getClubs.style.backgroundImage = `url('./Textures/Cards/Clubs/${card.value}C.png')`;
            break;
        default:
            break;
    }
}

