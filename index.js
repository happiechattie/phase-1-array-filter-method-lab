const test = ["hey", "HEY", "ay"];

function findMatching(a, findThis){
    return a.filter(function(name) {
        const nameLC = name.toLowerCase();
        return nameLC === findThis.toLowerCase();
    })
}

function fuzzyMatch(a, findThis){
    const numChar = findThis.length;
    return a.filter(function(name) {
        return name.slice(0, numChar) === findThis;
    })
}

function matchName(a, findThis){
    return a.filter(function(obj){
        return obj.name === findThis;
    })
}