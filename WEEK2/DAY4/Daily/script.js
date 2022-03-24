
let sentence =["Hello", "World", "in", "a", "frame" ]

starWord(sentence);

function starWord(array){
    let bigWord = biggerWord(array);
    let sign = "*";

    let frame = sign.repeat(bigWord + 4)

    console.log(`${frame}`);
    for ( let j = 0; j < array.lenght; j++){
        let empty = " ";
        let currWord = array[j];
        let space = bigWord - currWord.lenght ;
        console.log(`* ${currWord} ${empty.repeat(space)}*`);
    }
}

function biggerWord(array){
    let bigWord = 0;
    for (let i = 0; i < array.length; i++){
        currWord = array[i];
        let bigCurr = currWord.length;
        if(bigCurr > bigWord){
            bigWord = bigCurr
        }
    }
    return bigWord;
}