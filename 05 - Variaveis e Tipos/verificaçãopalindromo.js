//solução1
function verificapol(string){
    if(!string) return"String inexistente";

    return string.split("").reverse().join("") === string;
}

// console.log(verificapol("ama"));

// Solução 2

function verificapol2(string){
    if(!string) return"String inexistente";
    
    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
       }
    }
return true;
}

console.log(verificapol2("ovo"))