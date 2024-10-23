import chalk from "chalk";
import fs from "fs";
import dotenv from "dotenv";
import figlet from "figlet";
import moment from "moment";

dotenv.config();

const login = async (query) => {
    const url = "https://backend.clutchwalletserver.xyz/tada-ton/v1/auth/login"

    const payload = JSON.stringify({
        "initData": query
    })

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en',
        'content-type': 'application/json',
        'origin': 'https://tada-mini.mvlchain.io',
        'priority': 'u=1, i',
        'referer': 'https://tada-mini.mvlchain.io/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
        'x-auth-client-id': 'TadaTonMiniApp',
        'x-auth-client-version': '1'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: payload
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to login, ${err}`)
        }
    }
}

const missonPoint = async (token, metode) => {
    const url = `https://backend.clutchwalletserver.xyz/activity/v1/mission-point?missionPointId=${metode}`

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en',
        'authorization': `Bearer ${token}`,
        'origin': 'https://tada-mini.mvlchain.io',
        'priority': 'u=1, i',
        'referer': 'https://tada-mini.mvlchain.io/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
        'x-auth-client-id': 'TadaTonMiniApp',
        'x-auth-client-version': '1'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to missionPoint, ${err}`)
        }
    }
}

const missions = async (token) => {
    const url = "https://backend.clutchwalletserver.xyz/activity/v3/missions"

    const headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en',
      'authorization': `Bearer ${token}`,
      'origin': 'https://tada-mini.mvlchain.io',
      'priority': 'u=1, i',
      'referer': 'https://tada-mini.mvlchain.io/',
      'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
      'x-auth-client-id': 'TadaTonMiniApp',
      'x-auth-client-version': '1'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to missions, ${err}`)
        }
    }
}

const open_telegram_miniapp = async (token) => {
    const url = "https://backend.clutchwalletserver.xyz/activity/v3/activities/open_telegram_miniapp"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en',
        'authorization': `Bearer ${token}`,
        'content-length': '0',
        'origin': 'https://tada-mini.mvlchain.io',
        'priority': 'u=1, i',
        'referer': 'https://tada-mini.mvlchain.io/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
        'x-auth-client-id': 'TadaTonMiniApp',
        'x-auth-client-version': '1'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to open_telegram_miniapp, ${err}`)
        }
    }
}

const startTask = async (token, taskactivity) => {
    const url = `https://backend.clutchwalletserver.xyz/activity/v3/activities/${taskactivity}`

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en',
        'authorization': `Bearer ${token}`,
        'content-length': '0',
        'origin': 'https://tada-mini.mvlchain.io',
        'priority': 'u=1, i',
        'referer': 'https://tada-mini.mvlchain.io/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
        'x-auth-client-id': 'TadaTonMiniApp',
        'x-auth-client-version': '1'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            if (err = "Error: 404 Not Found") {
                return
            } else {
                console.log(`Error to start, ${err}`)
            }
        }
    }
}

const claim = async (token, taskid) => {
    const url = `https://backend.clutchwalletserver.xyz/activity/v3/missions/${taskid}/claim`

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en',
        'authorization': `Bearer ${token}`,
        'content-length': '0',
        'origin': 'https://tada-mini.mvlchain.io',
        'priority': 'u=1, i',
        'referer': 'https://tada-mini.mvlchain.io/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
        'x-auth-client-id': 'TadaTonMiniApp',
        'x-auth-client-version': '1'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to claim, ${err}`)
        }
    }
}

const rank = async (token) => {
    const url = "https://backend.clutchwalletserver.xyz/activity/v1/ranking-mission/eea00000-0000-4000-0000-000000000000/rank"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en',
        'authorization': `Bearer ${token}`,
        'origin': 'https://tada-mini.mvlchain.io',
        'priority': 'u=1, i',
        'referer': 'https://tada-mini.mvlchain.io/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
        'x-auth-client-id': 'TadaTonMiniApp',
        'x-auth-client-version': '1'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to rank, ${err}`)
        }
    }
}

const invite_count = async (token) => {
    const url = "https://backend.clutchwalletserver.xyz/activity/v1/referrals/current/invite-count"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en',
        'authorization': `Bearer ${token}`,
        'origin': 'https://tada-mini.mvlchain.io',
        'priority': 'u=1, i',
        'referer': 'https://tada-mini.mvlchain.io/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
        'x-auth-client-id': 'TadaTonMiniApp',
        'x-auth-client-version': '1'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to invite_count, ${err}`)
        }
    }
}

// async func to create token
const runCreateToken = async () => {
    try {
        // buat query.txt
        const data = fs.readFileSync('query.txt', 'utf-8');
        const querys = data.split('\n')

        // get token ***GATHER BOOMMM!!!!!
        const tokens = []
        await Promise.all(querys.map(async (query) => {
            if (query != "") {
                const tokenss = await login(query)
                const token = tokenss.accessToken

                tokens.push(token)
            }
        }))

        // buat file tokens.txt
        fs.writeFileSync('tokens.txt', "")
        
        // read tokens.txt
        const token = fs.readFileSync('tokens.txt', 'utf-8');

        // append token to token.txt
        for (const token of tokens) {
            // console.log(token)
            fs.appendFileSync('tokens.txt', `${token}\n`)
        }

        return true
    } catch (e) {
        // jika query.txt not exist
        if (e.code == 'ENOENT') {
            console.log('Fill the query.txt first!');
            fs.writeFileSync('query.txt', "query1\nquery2\netc...")
            return false
        } else {
            throw e
        }
    }
}

// function to count length int
const countLength = (n) => {
    const num = String(n)
    return num.length
}

// async func to countdown
const timeCount = async (finish, nanti, waktu) => {
    for (let i = waktu; i >= 0; i--) {
        // inisiasi menit dan second
        let minutes = Math.floor(waktu/60)
        let seconds = waktu % 60;

        // jika menit dan second < 2 digit
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // BOOMM tampilkan ******
        process.stdout.write(`Execution time : ${chalk.yellow(finish.toFixed(2))} seconds | Refresh token : ${chalk.yellow(moment.unix(nanti).format("YYYY-MM-DD HH:mm:ss"))} | Refresh after : ${chalk.yellow(`${minutes}:${seconds}`)}`);
        
        // increament - 1
        waktu = waktu-1;

        // blocking delay untuk satu detik
        await new Promise(resolve => setTimeout(resolve, 1000))

        // clear last console log
        if (waktu >= 0) {
            process.stdout.clearLine();
            process.stdout.cursorTo(0); 
        }
    }
}

// async func to sendmessage to telegram
const sendMessage = async (total) => {
    const telegram_token = String(process.env.TELEGRAM_TOKEN)
    const telegram_chatid = String(process.env.TELEGRAM_CHATID)
    const message = `Total tada point : ${total}`
    
    if (telegram_token != "" && telegram_chatid != "") {
        const url = `https://api.telegram.org/bot${telegram_token}/sendMessage?chat_id=${telegram_chatid}&text=${message}`

        while (true) {
            try {
                const response = await fetch(url, {
                    method: "GET"
                });

                if (response.status == 200) {
                    // console.log(response.data)
                    return response.json()
                } else {
                    continue
                }
            } catch (err) {
                console.log(`Error to sendMessage, ${err}`)
                continue
            }
        }
    } else {
        return
    }
}

(async () => {
    // const query = ""
    // const token = ""
    // const refresh_token = ""

    // clear cli
    console.clear()

    console.log("Create token started")
    const restoken = await runCreateToken()

    if (restoken == true) {
        console.log("Create token success!")
        
        let sekarang = Math.trunc(Date.now()/1000)
        let nanti = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_TOKEN)

        while (sekarang < nanti) {
            console.log(figlet.textSync('tada mini botjs', {font: "Ogre"}), '\n')
            let start = Date.now()/1000

            // open tokens.txt
            const data = fs.readFileSync('tokens.txt', 'utf-8')
            const tokens = data.split('\n')

            // run all ***GATHER BOOMMM!!!!!
            const runall = await Promise.all(tokens.map(async (token, idx) => {
                if (token != "") {
                    
                    const refactivepoints = await missonPoint(token, 'REFERRAL_POINT_ACTIVE')
                    const refpassivepoints = await missonPoint(token, 'REFERRAL_POINT_PASSIVE')
                    const activepoints = refactivepoints.amount
                    const passivepoints = refpassivepoints.amount

                    const missionlist = await missions(token)
                    let count_task = 0
                    let daily_check = "-"
                    for (const i of missionlist) {
                        // console.log(i.id)
                        if (i.accomplishable && i.activityTypes != null) {
                            // console.log(i.id + ' Siap dimulai ' + i.activityTypes[0])
                            await startTask(token, i.activityTypes[0])
                        } else if (i.claimable) {
                            // console.log(i.id + ' Siap diclaim')
                            await claim(token, i.id)
                        } else if (i.userClaimedCount > 0) {
                            count_task++;
                        }

                        if (i.name === "Check in once a day.") {
                            if (i.userClaimedCount == 0) {
                                daily_check = `${chalk.yellow("Available")}`
                            } else {
                                daily_check = `${chalk.green("Done")}`
                            }
                        }
                    }
                    
                    await open_telegram_miniapp(token)
                    // .then(res => console.log(res))

                    const ranking = await rank(token)
                    const myrank = ranking.rank

                    const invites = await invite_count(token)
                    const inv_count = invites.count

                    const lengcount = countLength(idx)
                    let accnum = lengcount == 1 ? `Account 0${idx+1}` : `Account ${idx+1}`

                    if (accnum === "Account 010") {
                        accnum = "Account 10"
                    }
   
                    console.log(`[${accnum}] | Daily check-in : ${daily_check} | Rank : ${myrank} | Balance : ${chalk.green(activepoints+passivepoints)} | Completed task : ${count_task > 0 ? chalk.green(count_task) : count_task} | Invite count : ${inv_count > 0 ? chalk.green(inv_count) : inv_count}`)

                    return Math.trunc(activepoints+passivepoints)
                }                
            }))

            let totalallacc = 0
            for (let i=0; i < runall.length; i++) {
                if (runall[i] != undefined) {
                    totalallacc = totalallacc + runall[i]
                }
            }

            // delay before next running
            console.log('')
            console.log('Total balance :', chalk.green(totalallacc.toLocaleString('en-US')))

            let finish = (Date.now()/1000)-start

            // printed and blocking
            await timeCount(finish, nanti, Number(process.env.REFRESH_CLAIM)) // blocking/pause for REFRESH_CLAIM seconds

            sekarang = Math.trunc(Date.now()/1000)
            if (sekarang >= nanti) {
                console.log("\n")
				console.log("Refresh tokens started!")
				const restoken = await runCreateToken()
				if (restoken == true) {
					console.log("Refresh tokens success!")
					await new Promise(resolve => setTimeout(resolve, 2000)) // blocking/pause for 2 seconds
					await sendMessage(totalallacc.toLocaleString('en-US'))
					nanti = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_TOKEN)
				}
            }

            console.clear()
        } 
    } else {
        return
    }
})()