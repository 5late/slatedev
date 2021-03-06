var queries = new URLSearchParams(document.location.search.substring(1))
var sent_from = queries.get('sf')
if (sent_from == 'dsc'){
    var sent_from_full = 'discord'
}else if (sent_from == 'ig'){
    var sent_from_full = 'instagram'
}else if (sent_from == 'gh'){
    var sent_from_full = 'github'
} else {
    var sent_from_full = 'random'
}
var obj = {}
obj[sent_from_full] = 1
window.onload = doStart()

async function doStart(){
    await getIP()
    POSTtoURL('sf', obj)
}

async function getIP() {
    fetch('https://api.slatedev.xyz/api/webstat/v1/head/ip', {
        method: "HEAD"
    }).then(res => {
        console.log("HEAD Request successful. Response: ", res)
    })
}

function POSTtoURL(url, data){
    fetch(`https://api.slatedev.xyz/api/webstat/v1/post/${url}`, {
    method: "POST", 
    body: JSON.stringify(data)
    }).then(res => {
    console.log("Request complete! response:", res);
    });
}