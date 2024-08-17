const ch = 'u';
switch(ch)
{
    case 'a': console.log(`a`)
            break;
    case 'e': console.log(`e`)
            break;
    case 'i': console.log(`i`)
            break;
    case 'o': console.log(`o`)
            break;
    case 'u': console.log(`u`); 
            break;
    default: console.log(`not a vowel`)
            break;
}

//break statement is necessary, otherwise all the codes below the matched case would be executed execept DEFAULT. (DOUBTFUL)
