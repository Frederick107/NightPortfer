//Requirements Importer
const Request = require("request")
const Chalk = require("Chalk")
const Input = require("input")

//Main
console.log(Chalk.magentaBright(`
======================================================================================================
=                                                                                                    =
=  ███    ██ ██  ██████  ██   ██ ████████ ██████   ██████  ██████  ████████ ███████ ███████ ██████   =
=  ████   ██ ██ ██       ██   ██    ██    ██   ██ ██    ██ ██   ██    ██    ██      ██      ██   ██  = 
=  ██ ██  ██ ██ ██   ███ ███████    ██    ██████  ██    ██ ██████     ██    █████   █████   ██████   =
=  ██  ██ ██ ██ ██    ██ ██   ██    ██    ██      ██    ██ ██   ██    ██    ██      ██      ██   ██  =
=  ██   ████ ██  ██████  ██   ██    ██    ██       ██████  ██   ██    ██    ██      ███████ ██   ██  =
=                                                                                                    =
======================================================================================================`))
console.log(Chalk.cyanBright(`======================================================================================================
= Github = https://github.com/NightScepterOfficial                                                   =
= Creator = NightScepter                                                                             =
= Important = NightPortfer Only works in Windows 7 or Above,Ubuntu,Kali linux,Debian OS(Recommended) =
======================================================================================================
`))
async function Main(){
    const IP = await Input.text("IP:")
    if(IP == "" || IP == null){
        console.log(Chalk.red("[|] Invalid IP!"))
        Main()
    }else{
        const HTOPTIONS = await Input.text("http or https:")
        if(HTOPTIONS == "http" || HTOPTIONS == "https"){
            if(HTOPTIONS == "http"){
                var interval = 10 * 100;
                console.log(Chalk.bgGreenBright("Starting...."))
                Request("https://api.shodan.io/shodan/ports?key=n5uNQI7aGnOJYBzUqW9L46fI1quqsivw", function(err, res, body){
                    console.log(Chalk.bgGreenBright("Started!"))
                    const PARSEDJ = JSON.parse(body)
                    for (var i = 0; i <=PARSEDJ.length-1; i++) {
                        setTimeout( function (i) {
                            Request(`http://${IP}` + ":" + PARSEDJ[i], function(err2, res2, body2){
                                try{
                                    if(body2.indexOf(`${IP} refused to connect.`) == -1){
                                        console.log(Chalk.greenBright(`Port ${PARSEDJ[i]} success!`))
                                     }else{
                                          console.log(Chalk.redBright(`Port ${PARSEDJ[i]} failed!`))
                                    }
                                }catch{
                                    console.log(Chalk.redBright(`Port ${PARSEDJ[i]} failed!`))
                                }
                            })
                        }, interval * i, i);
                    }
                })
            }else{
                var interval = 10 * 100;
                console.log(Chalk.bgGreenBright("Starting...."))
                Request("https://api.shodan.io/shodan/ports?key=n5uNQI7aGnOJYBzUqW9L46fI1quqsivw", function(err, res, body){
                    console.log(Chalk.bgGreenBright("Started!"))
                    const PARSEDJ = JSON.parse(body)
                    for (var i = 0; i <=PARSEDJ.length-1; i++) {
                        setTimeout( function (i) {
                            Request(`https://${IP}` + ":" + PARSEDJ[i], function(err2, res2, body2){
                                try{
                                    if(body2.indexOf(`${IP} refused to connect.`) == -1){
                                        console.log(Chalk.greenBright(`Port ${PARSEDJ[i]} success!`))
                                     }else{
                                          console.log(Chalk.redBright(`Port ${PARSEDJ[i]} failed!`))
                                    }
                                }catch{
                                    console.log(Chalk.redBright(`Port ${PARSEDJ[i]} failed!`))
                                }
                            })
                        }, interval * i, i);
                    }
                })
            }
        }else{
            console.log(Chalk.red("[|] Invalid http or https OPTIONS!"))
            Main()
        }
    }
}

Main()