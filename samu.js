
const { 
  WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone");
const FormData = require('form-data')
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const chalk = require('chalk');
const request = require('request');
const fs = require('fs');
const { exec } = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios');
const fetch = require('node-fetch');

//const { downAndro1, searchAndro1 } = require("./lib/andro.js")
//const { cnn } = require("./lib/cnn.js")
const { ssstik } = require("./lib/tiktok.js")
/*const { Gempa } = require("./lib/gempa.js");
const { SearchKartun, Movie, Drama, Action, Adventure } = require("./lib/kartun.js")
const { herolist } = require("./lib/herolist.js")
const { herodetails } = require("./lib/herodetail.js")*/
const conn = require("./lib/connect")
const msg = require("./lib/message")
const wa = require("./lib/wa")
const Exif = require('./lib/exif');
const exif = new Exif();
const { recognize } = require('./lib/ocr');
const help = require("./lib/help")
const postBuffer = help.postBuffer
const getBuffer = help.getBuffer
const getRandom = help.getRandomExt
const postJson = help.postJson
const getJson = help.getJson
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
var public = config.public

// Database
//const imagenye = JSON.parse(fs.readFileSync('./database/image.json'))

conn.connect()
const samu330 = conn.samu330

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

fakeimage = fs.readFileSync(`./src/help.jpg`)
fake = 'Samu330'
prefix = '.'
apikey = 'LindowApi'
const api = 'ec35353a991a258b05876861'
hit_today = []

samu330.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        samu330.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
        await sleep(4000)
        await samu330.blockUser(callerId, "add") // Block user
})

samu330.on('group-participants-update', async(chat) => {
    try {
        var member = chat.participants
        for (var x of member) {
            try {
                if (x == samu330.user.jid) return
                var photo = await wa.getPictProfile(x)
                var username = await wa.getUserName(x) || "Guest"
                var from = chat.jid
                var group = await samu330.groupMetadata(from)
                if (chat.action == 'add' && public) {
                     text = `${username}, Wecome to ${group.subject}`
                        wa.sendImage(from, photo, text)
                }
                if (chat.action == 'remove' && public) {
                    text = `${username}, Sayonara ðŸ‘‹`
                    await wa.sendMessage(from, text)
                }
            } catch {
                continue
            }
        }
    } catch (e) {
        console.log(chalk.whiteBright("â”œ"), chalk.keyword("aqua")("[  ERROR  ]"), chalk.keyword("red")(e))
    }
})

samu330.on('chat-update', async(sam) => {
    try {
        if (!sam.hasNewMessage) return
        if (!sam.messages) return
        if (sam.key && sam.key.remoteJid == 'status@broadcast') return
        lin = sam.messages.all()[0]
        if (!sam.message) return
        const from = sam.key.remoteJid
        const type = Object.keys(sam.message)[0]
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const quoted = type == 'extendedTextMessage' && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
        const typeQuoted = Object.keys(quoted)[0]
        const body = sam.message.conversation || sam.message[type].caption || sam.message[type].text || ""
        chats = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
        budy = (type === 'conversation' && sam.message.conversation.startsWith(prefix)) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption.startsWith(prefix) ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption.startsWith(prefix) ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text.startsWith(prefix) ? sam.message.extendedTextMessage.text : ''

        if (prefix != "") {
            if (!body.startsWith(prefix)) {
                cmd = false
                comm = ""
            } else {
                cmd = true
                comm = body.slice(1).trim().split(" ").shift().toLowerCase()
            }
        } else {
            cmd = false
            comm = body.trim().split(" ").shift().toLowerCase()
        }

        const reply = async(teks) => {
            await samu330.sendMessage(from, teks, MessageType.text, { quoted: sam })
        }
	const uploadImages = (filePath) => {
			return new Promise(async (resolve, reject) => {
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.png')
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
			})
			}

        const command = comm
        hit_today.push(command)
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = cmd
        const meNumber = samu330.user.jid
        const botNumber = samu330.user.jid.split("@")[0]
        const isGroup = from.endsWith('@g.us')
        const arg = chats.slice(command.length + 2, chats.length)
        const sender = sam.key.fromMe ? samu330.user.jid : isGroup ? sam.participant : sam.key.remoteJid
        const senderNumber = sender.split("@")[0]
        const groupMetadata = isGroup ? await samu330.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
        const isAdmin = groupAdmins.includes(sender) || false
        const botAdmin = groupAdmins.includes(samu330.user.jid)
        const totalChat = samu330.chats.all()
        const itsMe = senderNumber == botNumber
        const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
        
        const mentionByTag = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentions = (teks, memberr, id) => {
	    (id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : samu330.sendMessage(from, teks.trim(), extendedText, {quoted: sam, contextInfo: {"mentionedJid": memberr}})
	}
	    	
        // Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Pagi lindow'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi lindow'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Siang lindow'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Soree lindow'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat petang'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam lindow'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }

        const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        
        typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"

        const isQuoted = type == 'extendedTextMessage'
        const isQuotedImage = isQuoted && typeQuoted == 'imageMessage'
        const isQuotedVideo = isQuoted && typeQuoted == 'videoMessage'
        const isQuotedAudio = isQuoted && typeQuoted == 'audioMessage'
        const isQuotedSticker = isQuoted && typeQuoted == 'stickerMessage'
        const isQuotedContact = isQuoted && typeQuoted == 'contactMessage'
        const isQuotedLocation = isQuoted && typeQuoted == 'locationMessage'

        if (!public) {
            mods.indexOf(botNumber) === -1 ? mods.push(botNumber) : false
            mods.indexOf(owner) === -1 ? mods.push(owner) : false
            if (!mods.includes(senderNumber)) return
            mods.slice(mods.indexOf(owner), 1)
        }
        
        if (!isGroup && isCmd) console.log(chalk.whiteBright("â”œ"), chalk.keyword("aqua")("[ COMMAND ]"), chalk.whiteBright(typeMessage), chalk.greenBright("from"), chalk.keyword("yellow")(senderNumber))
        if (isGroup && isCmd) console.log(chalk.whiteBright("â”œ"), chalk.keyword("aqua")("[ COMMAND ]"), chalk.whiteBright(typeMessage), chalk.greenBright("from"), chalk.keyword("yellow")(senderNumber), chalk.greenBright("in"), chalk.keyword("yellow")(groupName))
        
        switch (command) {
            case 'help':
                textnya = `*${ucapanWaktu}*
*> for eval*
*Hit Today : ${hit_today.length}*
1. *${prefix}owner*
To send contact owner
2. *${prefix}public*
To activate public mode
3. *${prefix}self*
To activate self mode
4. *${prefix}setprefix*
To set prefix
Usage : ${prefix}setprefix yournewprefix
5. *${prefix}broadcast*
Broadcast message
Usage : ${prefix}broadcast yourmessags
6. *${prefix}setthumb*
To set or change thumbnail in menu
Usage : ${prefix}setthumb and reply your image or webp
7. *${prefix}fakethumb*
To change menu image
Usage : ${prefix}fakethumb and reply your image
8. *${prefix}stats*
To view your stat
9. *${prefix}block*
Block user
Usage : ${prefix}block 62xxxx
10. *${prefix}unblock*
Unblock user
Usage : ${prefix}unblock 62xxxx
11. *${prefix}leave*
To leave group
12. *${prefix}join*
To join group
13. *${prefix}clearall*
To clearall message
14. *${prefix}hidetag*
Hidetag group
Usage : ${prefix}hidetag halo everyone
15. *${prefix}imagetag*
Hidetag use image
Usage : send image or reply with caption ${prefix}imagetag
16. *${prefix}stickertag*
Hidetag use sticker
Usage : send sticker or reply with caption ${prefix}stickertag
17. *${prefix}promote*
Promote Member in group
Usage : ${prefix}promote @tag
18. *${prefix}demote*
Demote Member in group
Usage : ${prefix}demote @tag
19. *${prefix}admin*
To view list admin
20. *${prefix}linkgc*
To view link gc
21. *${prefix}group open/close*
To unlock or close group
22. *${prefix}setnamegc*
To change subject name gc
Usage : ${prefix}setnamegc yournewsubject
22. *${prefix}setdesc*
To set decs group
23. *${prefix}bugimg*
Usage : ${prefix}bugimg yourtext, don't space!
24. *${prefix}demoteall*
Yes, this is for demote all admin :D
25. *${prefix}ocr*
Usage : send image and reply with caption
26. *${prefix}toimg*
Make sticker to image
Usage : send image and reply with caption ${prefix}toimg
27. *${prefix}shutdown*
To shutdown bot
28. *${prefix}spam*
Spam text
Usage : ${prefix}spam text|jumlahspam
29. *${prefix}add*
Add member or someone
Usage : ${prefix}add 6289xxxx
30. *${prefix}kick*
Kick member
Usage : ${prefix}kick @tag or member
31. *${prefix}setpp*
Set or change your profile picture
Usage : send image and reply with ${prefix}setpp
32. *${prefix}chat*
You can chat mark with this feature :D
Usage : ${prefix}chat 0|Halo mark
33. *${prefix}tagall*
Tag all member in group
34. *${prefix}toptt*
Make audio to format ptt
Usage : send auto and reply with ${prefix}toptt
35. *${prefix}fordward*
Make message fordward 508 score
Usage : ${prefix}fordward yourtext
36. *${prefix}fakereply*
Make a fakereply message
Usage : ${prefix}fakereply 62xxx | targetmessage | yourmessage
37. *${prefix}unreadall*
Unread all message
38. *${prefix}readall*
Read all message
39. *${prefix}upstorypic*
Send picture or image to status whatsapp
Usage : send image and reply with your caption, ${prefix}upstorypic halo
40. *${prefix}upstoryvid*
Send video to status whatsapp
Usage : send video and reply with your caption, ${prefix}upstoryvid halo
41. *${prefix}upstory*
Send text to status whatsapp
Usage : ${prefix}upstory Hallo, i'm using bot
42. *${prefix}unmute*
Unmute chat
43. *${prefix}mute*
mute chat
44. *${prefix}delthischat*
To delete chat
45. *${prefix}archive*
To archive your chat
46. *${prefix}unarchiveall*
To unarchive all chat
47. *${prefix}pin*
To pin chat
48. *${prefix}unpin*
Unpin chat
49. *${prefix}runtime*
To view runtime bot
50. *${prefix}speed
To view your speed
51. *${prefix}sendkontak*
To send kontak
Usage : ${prefix}sendkontak @tag|Megacantikzz
52. *${prefix}term*
Term or exec
Usage : ${prefix}term ls
53. *${prefix}setreply*
To set fakereply text in menu
Usage : ${prefix}setreply mega cantikzz
54. *${prefix}setname*
To set name your whatsapp account
Usage : ${prefix}setname Megaa cantikzz
55. *${prefix}setbio*
Set bio your whatsapp account
Usage : ${prefix}setbio Mega best girlfriend >_<
56. *${prefix}fdeface*
Fakedeface web or situs
Usage : reply image with caption ${prefix}fdeface https://github.com|Title|decs
57. *${prefix}getpic*
Get profile picture member
Usage : ${prefix}getpic @tag
58. *${prefix}getbio*
Get bio whatsapp member
Usage : ${prefix}getbio @tag
59. *${prefix}sticker*
Make a photo or video to sticker
Usage : send image and reply ${prefix}sticker
60. *${prefix}swm* name | author
Make sticker with costum wm
Usage : send image or video and reply ${prefix}swm yourname | author
61. *${prefix}takestick* name | author
Change wm on sticker
Usage : send sticker and reply ${prefix}takestick yourname | author
62. *${prefix}colong* <reply stiker>
Change wm on sticker
Usage : send sticker and reply ${prefix}colong
63. *${prefix}ytsearch*
To search video youtube
usage : ${prefix}ytsearch how to make a baby
64. *${prefix}igdl*
To download Instagram post
Usage : ${prefix}igdl link
65. *${prefix}scdl*
Download music with url soundcloud
Usage : ${prefix}scdl link
65. *${prefix}ppcouple*
Get random profile picture couple
66. *${prefix}asupan*
Get random video asupan
67. *${prefix}randomaesthetic*
Get random aesthetic or amv video
68. *${prefix}quoteislam*
Get a random quoteislam
69. *${prefix}kisahnabi*
Usage : ${prefix}kisahnabi Muhammad
70. *${prefix}ayatkursi*
71. *${prefix}herodetail*
Usage : ${prefix}herodetail miya
72. *${prefix}herolist*
73. *${prefix}searchkartun*
Usage : ${prefix}searchkartun spongebob
74. *${prefix}kartunmovie*
Get a random kartun movie
75. *${prefix}kartundrama*
Get a random kartun drama
76. *${prefix}kartunaction*
Get a random kartun action
77. *${prefix}kartunadventure*
Get a random kartun adventure
78. *${prefix}gempa*
Get info about gempa
79. *${prefix}tinyurl*
Tools short url
Usage : ${prefix}tinyurl link
80. *${prefix}noprefix*
Change to no prefix mode
81. *${prefix}pinterest*
Usage : ${prefix}pinterest query
82. *${prefix}dewabatch*
Get info from dewabatch
Usage : ${prefix}dewabatch Darling in the franxx
83. *${prefix}wikipedia*
Usage : ${prefix}wikipedia query
84. *${prefix}kusonime*
Get info from kusonime
Usage : ${prefix}kusonime Darling in the franxx
85. *${prefix}ytmp3*
Download audio from youtube
Usage : ${prefix}ytmp3 link
86. *${prefix}ytmp4*
Download video from youtube
Usage : ${prefix}ytmp4 link
87. *${prefix}tiktok*
Download video from tiktok
Usage : ${prefix}tiktok link
88. *${prefix}sethelpimg*
To change thumb in menu/help
Usage : reply image with caption ${prefix}sethelpimg
89. *${prefix}searchandro1
Get info android1
Usage : ${prefix}searchandro1 sonic dash
90. *${prefix}downandro1
Usage : ${prefix}downandro1 https://an1.com/1628-sonic-dash-mod.html
91. *${prefix}cnn*
Get random news CNN
92. *${prefix}covidindo*
Get info about covid Indonesia
93. *${prefix}otakuongoing*
Get Info About otakudesu OnGoing
94. *${prefix}sfilesearch*
Search files in Sfile Mobi
95. *${prefix}sfiledl*
Download files Sfile with link
96. *${prefix}smeme*
Make sticker meme with a reply photo
*Storage Bot*
1. *${prefix}addimage*
Add image to storage
Usage : ${prefix}addimage Test
*${prefix}listimage*
To view list image
*${prefix}getimage*
Get image from storage
Usage : ${prefix}getimage Test
Join Group : https://chat.whatsapp.com/LeVT7RBq6WU1s92NIwdhfd`
            wa.FakeStatusImgForwarded(from, fakeimage, textnya, fake)
            reply(`Join Group : https://chat.whatsapp.com/LeVT7RBq6WU1s92NIwdhfd`)
                break
            case 'otakuongoing':
                o = await onGoing()
                console.log(o)
                ot = 'Ongoing Otakudesu'
                for (let i = 0; i < o.length; i++) {
                  ot += `\n\nJudul : ${o[i].judul}\nEpisode : ${o[i].eps}\nEps berikutnya pada hari : ${o[i].hri}\nTanggal : ${o[i].tgl}\n\nImage : ${o[i].thumb}`
                }
                buff = await getBuffer(o[0].thumb)
                samu330.sendMessage(from, buff, MessageType.image, {caption: ot})
                break
            case 'covidindo':
                c = await covid()
                var { kasus, kematian, sembuh } = c[0]
                reply(`Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`)
                break
            case 'downandro1':
                linkdown = args.join(" ")
                result = await downAndro1(linkdown)
                var { judul, dev, andro, versi, genre, updated, link, size, install, rated } = result[0]
                console.log(result)
                caption = `Title : ${judul}\n\nDeveloper : ${dev}\nAndroid : ${andro}\nVersion : ${versi}\nGenre : ${genre}\nUpdate : ${updated}\nLink : ${link}\nSize : ${size}\nInstall : ${install}\nRating : ${rated}`
                buff = await getBuffer(result[0].thumb)
                samu330.sendMessage(from, buff, MessageType.image, {caption: caption})
                break
            case 'searchandro1':
                aplikasi = body.slice(14)
                result = await searchAndro1(aplikasi)
                console.log(result)
                an = 'ANDROID1 SEARCH'
                for (let i = 0; i < result.length; i++) {
                  an += `\n\nTitle : ${result[i].judul}\n\nLink : ${result[i].link}\n\n=======================`
                }
                buff = await getBuffer(result[0].thumb)
                samu330.sendMessage(from, buff, MessageType.image, {caption: an})
                break
            case 'cnn':
                var result = await cnn()
                console.log(result)
                cn = 'CNN NEWS'
                for (let i = 0; i < result.length; i++) {
                  cn += `\n\nTitle : ${result[i].judul}\nLink : ${result[i].link}\nImage: ${result[i].thumb}`
                }
                buff = await getBuffer(result[0].thumb)
                samu330.sendMessage(from, buff, MessageType.image, {caption: cn})
                break
            case 'owner':
                await wa.sendContact(from, owner, "Your Name")
                break

	case 'play':

  if (!isRegister) return reply(mess.only.usrReg)
  if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
                    query = args.join(' ')
		    fakee = fs.readFileSync('./src/img.jpg')
				try {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${api}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `*Titulo* : ${get_info.title}\n`
                    ini_txt += `ðŸ•µðŸ»â€â™€ï¸ï¸Publicador : ${get_info.uploader}\n`
                    ini_txt += `ðŸ•Duracion : ${get_info.duration}\n`
                    ini_txt += `ðŸ‘€Vistas : ${get_info.view}\n`
                    ini_txt += `ðŸ‘ðŸ»Like : ${get_info.like}\n`
                    ini_txt += `ðŸ‘ŽðŸ»Dislike : ${get_info.dislike}\n`
                    ini_txt += `ðŸ“‹Descripcion :\n ${get_info.description}\n\n`
		    ini_txt += `Si el audio no llega, puede descargar por aqui: :\n ${get_result.audio[3].link}\n\n`
		    ini_txt += `Puede descargar tambien el video aqui: :\n ${get_result.video[0].link}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    await samu330.sendMessage(from, ini_buffer, image, { quoted: sam, caption: ini_txt, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
                    get_audio = await getBuffer(get_result.audio[4].link)
                    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, filename: `${get_info.title}.mp3`, quoted: sam })
			get_audio = await getBuffer(get_result.audio[4].link)
                    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, ptt: true, filename: `${get_info.title}.mp3`, quoted: sam })
				
				} catch {

			reply('Ocurrio un problema con el servidor *1*, Porfavor espera mientras pruebo en el servidor *2*')
		    w = await fetchJson(`https://videfikri.com/api/ytplayv2/?query=${query}`)
			e = w.result
		    ini_txt = `*Titulo* : ${e.title}\n`
                    ini_txt += `ðŸ•µðŸ»â€â™€ï¸ï¸Publicador : ${e.channel}\n`
                    ini_txt += `ðŸ•Duracion : ${e.duration}\n`
                    ini_txt += `ðŸ‘€Vistas : ${e.views}\n`
                    ini_txt += `ðŸ‘Publicado hace ${e.published_on}\n`
                    ini_txt += `ðŸ“‹Descripcion :\n ${e.description}\n\n`
		    ini_txt += `TamaÃ±o : ${e.size}\n`
		    pp = await getBuffer(e.thumbnail)
		    await samu330.sendMessage(from, pp, image, { quoted: sam, caption: ini_txt, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
                    get_audio = await getBuffer(e.url)
                    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, filename: `${e.title}.mp3`, quoted: sam })
		    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt: true, duration :-999999999999999, filename: `${e.title}.mp3`, quoted: sam })

					//reply('*Lo siento, ocurrio un error, esta funcion es de paga, si quieres descargar musica gratis usa el comando .playfree*')
				}
				
                    break


            case 'tiktok':
                url = args.join(" ")
                result = await ssstik(url)
                console.log(result)
                buf = await getBuffer(`${result.videonowm}`)
                samu330.sendMessage(from, buf, MessageType.video, {mimetype: 'video/mp4', filename: `tiktok.mp4`, quoted: sam, caption: `${result.text}\n\nUrl music : ${result.music}`})
                break
	    case 'sfilesearch':
                respo = await axios.get(`https://fzn-gaz.herokuapp.com/api/sfile?search=${body.slice(13)}`)
            	result = respo.data.result
		let pilem = `*ã€Œ SFILE SEARCH ã€*\n\n*Hasil Pencarian : ${body.slice(13)}*\n\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€`
		for (let i = 0; i < result.length; i++) {
			pilem += `\n\nTitle : *${result[i].title}*\nLink : *${result[i].link}*`
		}
		reply(pilem)
                break	
	    case 'sfiledl':
                respo = await axios.get(`https://fzn-gaz.herokuapp.com/api/sfiledl?url=${args.join(" ")}`);
		gaslah = respo.data
		filer = await getBuffer(gaslah.result)
                samu330.sendMessage(from, filer, MessageType.document, {mimetype: 'application/octet-stream', filename: `${gaslah.title}`, quoted: sam});
                break	
		case 'smeme':
                    gh = body.slice(7).replace(/ /g, '%20')
                    wo1 = gh.split("|")[0];
                    wo2 = gh.split("|")[1];
                    if ((isMedia && !sam.message.videoMessage || isQuotedImage)) {
                    jars = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
                    wors = await samu330.downloadAndSaveMediaMessage(jars)
		    datae = await imageToBase64(JSON.stringify(wors).replace(/\"/gi, ''))
                    fs.writeFileSync('smeme.jpeg', datae, 'base64')
		    anu = await uploadImages('smeme.jpeg')
                    baleg = await getBuffer(`https://api.memegen.link/images/custom/${wo1}/${wo2}.png?background=${anu}`)
                    samu330.sendMessage(from, baleg, MessageType.image, {quoted: sam})
                    }
                    break	
            case 'ytmp3':
                yt = await axios.get(`https://lindow-python-api.herokuapp.com/api/yta?url=${body.slice(7)}`)
                var { ext, filesize, result, thumb, title } = yt.data
                foto = await getBuffer(thumb)
                if (Number(filesize.split(' MB')[0]) >= 30.00) return samu330.sendMessage(from, foto, MessageType.image, {caption: `Title : ${title}\n\nExt : ${ext}\n\nFilesize : ${filesize}\n\nLink : ${result}\n\nUkuran audio diatas 30 MB, Silakan gunakan link download manual`})
                cap = `Ytmp3 downloader\n\nTitle : ${title}\n\nExt : ${ext}\n\nFilesize : ${filesize}`
                samu330.sendMessage(from, foto, MessageType.image, {caption: cap})
                au = await getBuffer(result)
                samu330.sendMessage(from, au, MessageType.audio, {mimetype: 'audio/mp4', filename: `${title}.mp3`, quoted: sam})
                break
            case 'ytmp4':
                yt = await axios.get(`https://lindow-python-api.herokuapp.com/api/ytv?url=${body.slice(7)}`)
                var { ext, filesize, resolution, result, thumb, title } = yt.data
                foto = await getBuffer(thumb)
                if (Number(filesize.split(' MB')[0]) >= 30.00) return samu330.sendMessage(from, foto, MessageType.image, {caption: `Title : ${title}\n\nExt : ${ext}\n\nFilesize : ${filesize}\n\nResolution: ${resolution}\n\nLink : ${result}\n\nUkuran video diatas 30 MB, Silakan gunakan link download manual`})
                cap = `Ytmp4 downloader\n\nTitle : ${title}\n\nExt : ${ext}\n\nFilesize : ${filesize}\n\nResolution: ${resolution}`
                samu330.sendMessage(from, foto, MessageType.image, {caption: cap})
                au = await getBuffer(result)
                samu330.sendMessage(from, au, MessageType.video, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: sam, caption: `${title}`})
                break
            case 'wikipedia':
                q = body.slice(11)
                wiki = await axios.get(`https://lindow-python-api.herokuapp.com/api/wiki?q=${q}`)
                reply(`Hasil pencarin dari ${q}\n\n${wiki.data.result}\n\nJika undefined berarti query tidak ditemukan`)
                break
            case 'kusonime':
                try {
                q = body.slice(10)
                kus = await axios.get(`https://lindow-python-api.herokuapp.com/api/kuso?q=${q}`)
                var { info, link_dl, sinopsis, thumb, title } = kus.data
                buf = await getBuffer(thumb)
                cap = `Title : ${title}\n\n${info}\n\nLink download : ${link_dl}\n\nSinopsis : ${sinopsis}`
                samu330.sendMessage(from, buf, MessageType.image, {caption: cap})
                } catch (e) {
                console.log(e)
                reply(`Anime ${q} tidak ditemukan, coba cari title lain`)
                }
                break
            case 'dewabatch':
                try {
                q = body.slice(11)
                dew = await axios.get(`https://lindow-python-api.herokuapp.com/api/dewabatch?q=${q}`)
                var { result, sinopsis, thumb } = dew.data
                buffer = await getBuffer(thumb)
                cap = `${result}\n\n${sinopsis}`
                samu330.sendMessage(from, buffer, MessageType.image, {caption: cap})
                } catch (e) {
                console.log(e)
                reply(`Anime ${q} tidak dapat ditemukan`)
                }
                break
            case 'pinterest':
                getBuffer(`https://lindow-api.herokuapp.com/api/pinterest?search=${body.slice(11)}&apikey=${apikey}`).then((result) => {
                samu330.sendMessage(from, result, image)
                })
                break
            case 'noprefix':
                prefix = ''
                reply('succes')
                break
            case 'tinyurl':
                url = args.join(" ")
                request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
                try {
                    reply(body)
                  } catch (e) {
                    reply(e)
                  }
                })
                break
            case 'gempa':
                const tres = await Gempa()
                var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
                console.log(Map)
                captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
                thumbbb = await getBuffer(Map)
                samu330.sendMessage(from, thumbbb, MessageType.image, {caption: `${captt}`})
                break
            case 'herolist':
                await herolist().then((ress) => {
                    let hm = `*Menampilkan list hero mobile legends*\n\n`
                    for (var i = 0; i < ress.hero.length; i++) {
                        hm += 'âž£  ' + ress.hero[i] + '\n'
                    }
                    reply(hm)
                    })
                break
            case 'herodetail':
                herodetails(body.slice(12)).then((res) => {
                capt = `*Hero details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} (Battle point) | ${res.price.diamond} (Diamond) | ${res.price.hero_fragment} (Hero Fragment)
*Tahun Rilis* : ${res.release_date}
*Skill* : 
*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}
*Story* : ${res.background_story}
`
                reply(capt)
                })
                break
            case 'kartundrama':
                ress = await Drama()
                let megg = `Random Drama Kartun`
                for (let i = 0; i < ress.hasil.length; i++) {
                  megg += `\n\n${ress.hasil[i].sinopsis}\nUrl : ${ress.hasil[i].url}`
                }
                thumb = await getBuffer(ress.hasil[0].img)
                samu330.sendMessage(from, thumb, MessageType.image, {caption: `${megg}`})
                break
            case 'kartunadventure':
                ress = await Adventure()
                let megggg = `Random Adventure Kartun`
                for (let i = 0; i < ress.hasil.length; i++) {
                  megggg += `\n\n${ress.hasil[i].sinopsis}\nUrl : ${ress.hasil[i].link}`
                }
                thumb = await getBuffer(ress.hasil[0].img)
                samu330.sendMessage(from, thumb, MessageType.image, {caption: `${megggg}`})
                break
            case 'kartunaction':
                ress = await Action()
                let meggg = `Random Action Kartun`
                for (let i = 0; i < ress.hasil.length; i++) {
                  meggg += `\n\n${ress.hasil[i].sinopsis}\nUrl : ${ress.hasil[i].link}`
                }
                thumb = await getBuffer(ress.hasil[0].img)
                samu330.sendMessage(from, thumb, MessageType.image, {caption: `${meggg}`})
                break
            case 'kartunmovie':
                try {
                result = await Movie()
                let meg = `Random Movie Kartun`
		for (let i = 0; i < result.hasil.length; i++) {
	        meg += `\n\n${result.hasil[i].sinopsis}\nUrl : ${result.hasil[i].url}`
	        }
		thumb = await getBuffer(result.hasil[0].img)
                samu330.sendMessage(from, thumb, MessageType.image, {caption: `${meg}`})
                } catch (e) {
                console.log(e)
                reply(e)
                }
                break
            case 'searchkartun':
                film = body.slice(14)
                try {
                    result = await SearchKartun(film)
		    let hehee = `Search kartun\nQuery : ${film}`
		    for (let i = 0; i < result.hasil.length; i++) {
		    hehee += `\n\n${result.hasil[i].sinopsis}\nLink : ${result.hasil[i].link}\nEpisode : ${result.hasil[i].episode}\nGenre : ${result.hasil[i].genre}`
		    }
		    thumb = await getBuffer(result.hasil[0].image)
                    samu330.sendMessage(from, thumb, MessageType.image, {caption: `${hehee}`})
                } catch (e) {
                console.log(e)
                reply(`Error, Coba judul lain!\n\nExample: ${prefix}searchkartun Spongebob`)
                }
		break
            case 'ayatkursi':
                res = await axios.get(`https://lindow-api.herokuapp.com/api/muslim/ayatkursi?apikey=${apikey}`)
                var { tafsir, arabic, latin } = res.data.result.data
                reply(`Tafsir : ${tafsir}\n\nArabic : ${arabic}\n\nLatin : ${latin}`)
                break
            case 'kisahnabi':
                nama = budy.slice(11)
                getres = await axios.get(`https://lindow-api.herokuapp.com/api/kisahnabi?nabi=${nama}&apikey=${apikey}`)
                var { nabi, lahir, umur, tempat, kisah } = getres.data.result.nabi
                caption = `Kisah Nabi\n\nNama nabi : ${nabi}\n\nLahir pada : ${lahir}\n\nUmur : ${umur}\n\nTempat : ${tempat}\n\nKisah :\n\n${kisah}`
                foto = await getBuffer(`${getres.data.result.nabi.image}`)
                samu330.sendMessage(from, foto, MessageType.image, {caption: caption})
                break
            case 'quoteislam':
                quote = await axios.get(`https://lindow-api.herokuapp.com/api/randomquote/muslim?apikey=${apikey}`)
                reply(`${quote.data.result.text_id}`)
                break
            case 'listimage':
	        teks = '*List Image :*\n\n'
                for (let awokwkwk of imagenye) {
		teks += `- ${awokwkwk}\n`
		}
		teks += `\n*Total : ${imagenye.length}*`
		samu330.sendMessage(from, teks.trim(), extendedText, { quoted: sam, contextInfo: { "mentionedJid": imagenye } })
		break
            case 'getimage':
		namastc = body.slice(10)
		buffer = fs.readFileSync(`./lib/image/${namastc}.jpeg`)
		samu330.sendMessage(from, buffer, MessageType.image, {quoted: {
                    key: {
                        fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {
                        remoteJid: "status@broadcast"
                        }: {})
                    }, message: { conversation: `Result for database : ${namastc}.jpg` }}})
		break
            case 'addimage':
	        if (!isQuotedImage) return reply('reply image!')
	        svst = body.slice(10)
		if (!svst) return reply('input image name!')
	        boij = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                delb = await samu330.downloadMediaMessage(boij)
		imagenye.push(`${svst}`)
	        fs.writeFileSync(`./lib/image/${svst}.jpeg`, delb)
		fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
		    reply(`Success add image\n${prefix}listimage to view list image`)
		break
            case 'exif':
	        if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('sukses')
	        break
            case 'takestick':
	        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
		const pembawm = body.slice(11)
		if (!pembawm.includes('|')) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
                const encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		const packname = pembawm.split('|')[0]
	        const author = pembawm.split('|')[1]
		    exif.create(packname, author, `takestick_${sender}`)
		    exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), sam)
		    fs.unlinkSync(media)
		    fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
		})
		break
            case 'scdl':
                var url = budy.slice(6)
                var res = await axios.get(`https://lindow-api.herokuapp.com/api/dlsoundcloud?url=${url}&apikey=${apikey}`)
                var { title, result } = res.data
                thumbb = await getBuffer(`${res.data.image}`)
                samu330.sendMessage(from, thumbb, MessageType.image, {caption: `${title}`})
                    audiony = await getBuffer(result)
                    samu330.sendMessage(from, audiony, MessageType.audio, {mimetype: 'audio/mp4', filename: `${title}.mp3`, quoted: sam})
                break
            case 'ppcouple':
                    getres = await axios.get(`https://lindow-api.herokuapp.com/api/ppcouple?apikey=${apikey}`)
                    var { male, female } = getres.data.result
                    picmale = await getBuffer(`${male}`)
                    samu330.sendMessage(from, picmale, image)
                    picfemale = await getBuffer(`${female}`)
                    samu330.sendMessage(from, picfemale, image)
                break
            case 'randomaesthetic':
                    url = `https://lindow-api.herokuapp.com/api/randomaesthetic?apikey=${apikey}`
                    estetik = await getBuffer(url)
                    samu330.sendMessage(from, estetik, MessageType.video, {mimetype: 'video/mp4', filename: `estetod.mp4`, quoted: sam, caption: 'success'})
                break
            case 'asupan':
                    url = `https://lindow-api.herokuapp.com/api/asupan?apikey=${apikey}`
                    asupan = await getBuffer(url)
                    samu330.sendMessage(from, asupan, MessageType.video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted: sam, caption: 'success'})
                break
            case 'igdl':
                    var ini_url = body.slice(6)
                    var ini_url2 = await axios.get(`https://lindow-api.herokuapp.com/api/igdl?link=${ini_url}&apikey=${apikey}`)
                    var ini_url3 = ini_url2.data.result.url
                    var ini_type = image
                    if (ini_url3.includes(".mp4")) ini_type = video
                    var ini_buffer = await getBuffer(ini_url3)
                    var inicaption = `Username account : ${ini_url2.data.result.username}\n\nCaption : ${ini_url2.data.result.caption}\n\nShortcode : ${ini_url2.data.result.shortcode}\n\nDate : ${ini_url2.data.result.date}`
                    samu330.sendMessage(from, ini_buffer, ini_type, {quoted: sam, caption: `${inicaption}`})
                break
	    case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await samu330.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), sam)
		    fs.unlinkSync(meidia)
	        })
		break
            case 'swm':
	    case 'stickerwm':
	        if (isMedia && !sam.message.videoMessage || isQuotedImage) {
		if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		const packname1 = arg.split('|')[0]
		const author1 = arg.split('|')[1]
		exif.create(packname1, author1, `stickwm_${sender}`)
		    await ffmpeg(`${media}`)
		    .input(media)
		    .on('start', function (cmd) {
		        console.log(`Started : ${cmd}`)
		    })
		    .on('error', function (err) {
		    console.log(`Error : ${err}`)
		fs.unlinkSync(media)
		reply('error')
		})
		.on('end', function () {
		console.log('Finish')
		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
	        if (error) return reply('error')
	        wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), sam)
		    fs.unlinkSync(media)	
		    fs.unlinkSync(`./sticker/${sender}.webp`)	
		    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
		    })
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(`./sticker/${sender}.webp`)
		} else if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
		const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		const packname1 = arg.split('|')[0]
		const author1 = arg.split('|')[1]
		    exif.create(packname1, author1, `stickwm_${sender}`)
		    reply('wait')
		    await ffmpeg(`${media}`)
		        .inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
		    })
		    .on('error', function (err) {
		    console.log(`Error : ${err}`)
		        fs.unlinkSync(media)
			tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			reply('error')
		    })
		    .on('end', function () {
		    console.log('Finish')
		        exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			if (error) return reply('error')
			wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), sam)									
			fs.unlinkSync(media)
			fs.unlinkSync(`./sticker/${sender}.webp`)
			fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
			})
		    })
		    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		    .toFormat('webp')
		    .save(`./sticker/${sender}.webp`)
		} else {
		reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
	        }
		break
            case 'sticker':
	    case 'stiker':
	    case 's':
		if (isMedia && !sam.message.videoMessage || isQuotedImage) {
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		await ffmpeg(`${media}`)
		.input(media)
		.on('start', function (cmd) {
	        console.log(`Started : ${cmd}`)
		})
		.on('error', function (err) {
		console.log(`Error : ${err}`)
  		fs.unlinkSync(media)
		reply('error')
		})
		.on('end', function () {
		console.log('Finish')
		exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => { 
                if (error) return reply('error')
		    wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), sam)
		    fs.unlinkSync(media)	
		    fs.unlinkSync(`./sticker/${sender}.webp`)	
		    })
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(`./sticker/${sender}.webp`)
		} else if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		    const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		    reply('wait')
			await ffmpeg(`${media}`)
			.inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
		})
		.on('error', function (err) {
		console.log(`Error : ${err}`)
		    fs.unlinkSync(media)
		    tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		    reply('error')
		})
		.on('end', function () {
		console.log('Finish')
		exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		if (error) return reply('error')
	            wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), sam)
		    fs.unlinkSync(media)
		    fs.unlinkSync(`./sticker/${sender}.webp`)
		    })
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(`./sticker/${sender}.webp`)
	        } else {
		reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
		}
	        break
            case 'getbio':
                var yy = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await samu330.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
	   case 'getpic':
		if (sam.message.extendedTextMessage != undefined){
		mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
	        try {
		    pic = await samu330.getProfilePicture(mentioned[0])
		} catch {
		    pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
		}
		thumb = await getBuffer(pic)
		samu330.sendMessage(from, thumb, MessageType.image, {caption: 'success'})
	        }
		break
            case 'fdeface': 
		var nn = budy.slice(9)
                var urlnye = nn.split("|")[0];
                var titlenye = nn.split("|")[1];
	        var descnye = nn.split("|")[2];
                run = getRandom('.jpeg')
                var media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
                var media2 = await samu330.downloadAndSaveMediaMessage(media1)
                var ddatae = await imageToBase64(JSON.stringify(media2).replace(/\"/gi, ''))
                samu330.sendMessage(from, {
                    text: `${urlnye}`,
                    matchedText: `${urlnye}`,
                    canonicalUrl: `${urlnye}`,
                    description: `${descnye}`,
                    title: `${titlenye}`,
                    jpegThumbnail: ddatae }, 'extendedTextMessage', { detectLinks: false })
		break
            case 'setbio':
	        if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
		if (!arg) return reply('masukkan bio')
	        wa.setBio(arg)
	        .then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
		.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
		break
            case 'setname':
		if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
	        if (!arg) return reply('masukkan nama')
		wa.setName(arg)
		.then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
		.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
	        break
            case 'setreply':
		if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
	        if (!arg) return reply(`Penggunaan ${prefix}setreply teks`)
		fake = arg
		wa.sendFakeStatus2(from, `Sukses`, fake)
		break
            case 'term':
	        if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
		if (!arg) return
		exec(arg, (err, stdout) => {
		    if (err) return wa.sendFakeStatus2(from, err, fake)
		    if (stdout) wa.sendFakeStatus2(from, stdout, fake)
		})
		break
            case 'sendkontak':
	        if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
	        argz = arg.split('|')
	        if (!argz) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
		if (sam.message.extendedTextMessage != undefined){
                mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
		wa.sendKontak(from, mentioned[0].split('@')[0], argz[1])
	        } else {
		wa.sendKontak(from, argz[0], argz[1])
                }
		break
            case 'speed': 
            case 'ping':
		let timestamp = speed();
		let latensi = speed() - timestamp
		wa.sendFakeStatus2(from, `Speed: ${latensi.toFixed(4)}second`, fake)
		break
            case 'runtime':
		run = process.uptime()
		let text = msg.runtime(run)
	        wa.sendFakeStatus2(from, MessageType.text,`Runtime bro`)
		break
            case 'unpin':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                samu330.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                samu330.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
            case 'unread?':
		const unread = await samu330.loadAllUnreadMessages()
	        samu330.sendMessage(from, `unread message count : *${unread.length}*`, text)
                break
            case 'unarchiveall':
                if (!itsMe) return reply('This command only for mega')
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await samu330.chats.all()
                for (let _ of anu) {
                samu330.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
            case 'archive':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                samu330.modifyChat(from, ChatModification.archive)
                break
            case 'delthischat':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                samu330.modifyChat(from, ChatModification.delete)
                break
            case 'mute':
                if (!itsMe) return reply('This command only for mega')
                samu330.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!itsMe) return reply('This command only for mega')
                samu330.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
            case 'ytsearch':
                ytsr = require('ytsr')
                if (!args.length) return reply('input title!')
                try {
                    const input = args.join(" ")
                    const filter1 = await ytsr.getFilters(input)
                    const filters1 = filter1.get('Type').get('Video')
                    const { items } = await ytsr(filters1.url, { limit: 10 })
                    let hehe = `*YOUTUBE SEARCH*\n\n*Search Query:* ${input}\n`
                    for (let i = 0; i < items.length; i++) {
                        hehe += `\n\n=====================\n\n*Judul:* ${items[i].title}\n\n*ID:* ${items[i].id}\n\n*Viewers:* ${items[i].views}\n\n*Duration:* ${items[i].duration}\n\n*Link:* ${items[i].url}\n`
                    }
                    thumb = await getBuffer(items[0].bestThumbnail.url)
                    await samu330.sendMessage(from, thumb, MessageType.image, {quoted: sam, caption: `${hehe}\n\nDownload:\n${prefix}ytmp3 [link youtube] = Audio\n${prefix}ytmp4 [link youtube] = Video`})
                } catch(e) {
                    reply('Didn\'t find anything or there is any error!')
                    reply(`Error: ${e.message}`)
                }
                break
            case 'upstorypic':
                if (!itsMe) return reply('This command only for mega')
                var teksyy = body.slice(12)
                    reply('wait')
                var foto = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.image, {quoted: sam, caption: `${teksyy}`})
                    reply('Succes!')
                break
            case 'upstoryvid':
                if (!itsMe) return reply('This command only for mega')
                reply('wait')
                var foto = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.video, {quoted: sam, caption: `${body.slice(12)}`})
                    reply('Succes!')
                break
            case 'upstory':
                if (!itsMe) return reply('This command only for mega')
                var teks = body.slice(9)
                samu330.sendMessage('status@broadcast', teks, MessageType.text)
                    reply('succses')
                break
            case 'unreadall':
                if (!itsMe) return reply('This command only for mega')
                var chats = await samu330.chats.all()
                chats.map( async ({ jid }) => {
                await samu330.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await samu330.sendMessage(from, teks, MessageType.text, {quoted: sam})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!itsMe) return reply('This command only for mega')
                var chats = await samu330.chats.all()
                chats.map( async ({ jid }) => {
                await samu330.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await samu330.sendMessage(from, teks, MessageType.text, {quoted: sam})
		console.log(chats.length)
		break
            case 'fakereply':
		if (!args) return reply(`Usage :\n${prefix}fakereply [62xxx|pesan|balasanbot]]\n\nEx : \n${prefix}fakereply 0|hai|hai juga`)
		var ghh = budy.slice(11)
		var nomorr = ghh.split("|")[0];
	        var target = ghh.split("|")[1];
		var bot = ghh.split("|")[2];
	            samu330.sendMessage(from, `${bot}`, MessageType.text, {quoted: { key: { fromMe: false, participant: nomorr+'@s.whatsapp.net', ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
                break
            case 'fordward':
	        samu330.sendMessage(from, `${budy.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
                break
            case 'tagall':
                if (!isAdmin) return reply('only for admin group')
                members_id = []
		teks = (args.length > 1) ? budy.slice(8).trim() : ''
	        teks += '\n\n'
	        for (let mem of groupMembers) {
		teks += `â”£âž¥ @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		mentions(teks, members_id, true)
		break
            case 'chat':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                var pc = budy.slice(6)
                var nomor = pc.split("|")[0];
                var org = pc.split("|")[1];
                samu330.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
                reply('done..')
                break
            case 'setpp':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                samu330.updatePresence(from, Presence.composing) 
                if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setpp atau tag gambar yang sudah dikirim`)
	        var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		var media2 = await samu330.downloadAndSaveMediaMessage(media1)
	        await samu330.updateProfilePicture(meNumber, media2)
		reply('Done!')
	        break
            case 'kick':
                if (!isAdmin) return reply('this command only for admin')
	        if (!args) return reply(`Penggunaan ${prefix}kick @tag atau nomor`)
                if (sam.message.extendedTextMessage != undefined){
                mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
		await wa.FakeTokoForwarded(from, `Bye...`, fake)
		    wa.kick(from, mentioned)
		} else {
	        await wa.FakeTokoForwarded(from, `Bye...`, fake)
		wa.kick(from, [args[0] + '@s.whatsapp.net'])
		}
		break
            case 'add':
                if (!isAdmin) return reply('only for admin group')
		if (!args) return reply(`Penggunaan ${prefix}add 628xxxx`)
		wa.add(from, [args[0] + '@s.whatsapp.net'])
                wa.FakeTokoForwarded(from, `Sukses`, fake)
                break
            case 'spam':
                if (!itsMe) return reply('This command only for mega')
	        if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
	        argz = arg.split("|")
		if (!argz) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
                if (isNaN(argz[1])) return reply(`harus berupa angka`)
	        for (let i = 0; i < argz[1]; i++){
                samu330.sendMessage(from, argz[0], MessageType.text)
		}
	        break
            case 'shutdown':
                if (!itsMe) return reply('This command only for megaa')
	        await wa.FakeTokoForwarded(from, `Bye...`, fake)
		await sleep(5000)
                samu330.close()
		break
            case 'ocr': 
	        if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
	    	var media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
                var media2 = await samu330.downloadAndSaveMediaMessage(media1)
                reply("*waitt*")
	    	await recognize(media2, {lang: 'eng+ind', oem: 1, psm: 3})
		    .then(teks => {
		    reply(teks.trim())
		    fs.unlinkSync(media2)
		})
		.catch(err => {
		reply(err.message)
		fs.unlinkSync(media2)
		})
	        } else {
		reply(`Send image and reply with caption ${prefix}ocr`)
		}
	        break
            case 'demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                samu330.groupDemoteAdmin(from, members_id)
                break
            case 'bugimg':
                var nnn = budy.slice(12)
                var urlnyee = nnn.split("|")[0];
                var titlenyee = nnn.split("|")[1];
                var descnyee = nnn.split("|")[2];
                var run = help.getRandomExt('.jpeg')
                var media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                var media2 = await samu330.downloadAndSaveMediaMessage(media1)
                var ddatae = await imageToBase64(JSON.stringify(media2).replace(/\"/gi, ''))
                samu330.sendMessage(from, {
                    text: `${body.slice(8)}`,
                    matchedText: `${urlnyee}`,
                    canonicalUrl: `${urlnyee}`,
                    description: `${descnyee}`,
                    title: `${titlenyee}`,
                    jpegThumbnail: ddatae
                    }, 'extendedTextMessage', { detectLinks: false})
                samu330.sendMessage(from, 'Coba reply tuh', MessageType.text)
                break
            case 'public':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                if (public) return await reply('already in public mode')
                config["public"] = true
                public = true
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await wa.sendFakeStatus(from, "*Success changed to public mode*", "Public : true")
                break
            case 'self':
                if (!isOwner && !itsMe) return await reply('This command only for mega or owner')
                if (!public) return await reply('mode private is already')
                config["public"] = false
                public = false
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await wa.sendFakeStatus(from, "*Success changed to self mode*", "Self : true")
                break
            case 'setprefix':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                var newPrefix = args[0] || ""
                prefix = newPrefix
                await reply("Success change prefix to: " + prefix)
                break
            case 'broadcast':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                text = args.join(" ")
                for (let chat of totalChat) {
                    await wa.sendMessage(chat.jid, text)
                }
                break
            case 'setthumb':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                if (!isQuotedImage && !isImage) return await reply('Gambarnya mana?')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                mediaa = await samu330.downloadMediaMessage(media1)
                fs.writeFileSync(`./lib/image/foto.jpg`, mediaa)
                await wa.sendFakeStatus(from, "*Succes changed image for help image*", "success")
                break
            case 'sethelpimg':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                if (!isQuotedImage && !isImage) return await reply('Gambarnya mana?')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                mediaa = await samu330.downloadMediaMessage(media1)
                fs.writeFileSync(`./lib/image/foto2.jpg`, mediaa)
                await wa.sendFakeStatus(from, "*Succes changed image for help image*", "success")
                break
            case 'fakethumb':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                if (!isQuotedImage && !isImage) return await reply('reply image!')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                media2 = await samu330.downloadMediaMessage(media1)
                await wa.sendFakeThumb(from, media2)
                break	
            case 'stats':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                texxt = await msg.stats(totalChat)
                await wa.sendFakeStatus(from, texxt, "BOT STATS")
                break
            case 'block':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("tag target!")
                    return await wa.blockUser(sender, true)
                }
                await wa.blockUser(sender, true)
                break
            case 'unblock':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("Tag targer!")
                    return await wa.blockUser(sender, false)
                }
                await wa.blockUser(sender, false)
                break
            case 'leave':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                if (!isGroup) return await reply('This command only for group baka')
                reply(`Akan keluar dari group ${groupName} dalam 3 detik`).then(async() => {
                    await help.sleep(3000)
                    await samu330.groupLeave(from)
                })
                break
            case 'join':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                if (isGroup) return await reply('This command only for private chat')
                if (args.length == 0) return await reply('Link group?')
                var link = args[0].replace("https://chat.whatsapp.com/", "")
                await samu330.acceptInvite(link)
                break
            case 'clearall':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                for (let chat of totalChat) {
                    await samu330.modifyChat(chat.jid, "delete")
                }
                await wa.sendFakeStatus(from, "Success clear all chat", "success")
                break

            /** Group **/
            case 'hidetag':
                if (!isOwner && !itsMe) return await reply('This command only for owner or mega')
                if (!isAdmin && !isOwner && !itsMe) return await reply('this command only for admin, baka!')
                await wa.hideTag(from, args.join(" "))
                break
            case 'imagetag':
                if (!isGroup) return await reply('this command only for group')
                if (!isAdmin && !isOwner && !itsMe) return await reply('this command only for admin, baka!')
                if (!isQuotedImage && !isImage) return await reply(`Send image, and reply with caption ${prefix}imagetag`)
                media = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                buffer = await samu330.downloadMediaMessage(media)
                await wa.hideTagImage(from, buffer)
                break
            case 'toimg':
	        if (!isQuotedSticker) return reply(`send sticker and reply with caption ${prefix}toimg`)
	        if (sam.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
		reply(`Maaf tidak mendukung sticker gif`)
	        } else {
		var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        var media2 = await samu330.downloadAndSaveMediaMessage(media1)
		ran = getRandom('.png')
                exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		fs.unlinkSync(media2)
		if (err) {
			reply(`error\n\n${err}`)
			fs.unlinkSync(ran)
			} else {
			buffer = fs.readFileSync(ran)
			samu330.sendMessage(from, buffer, MessageType.image, {quoted: sam, caption: 'success'})
			fs.unlinkSync(ran)
			}
	            })
		}
		break
            case 'toptt':
		reply(`wait..`)
		var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		var media2 = await samu330.downloadAndSaveMediaMessage(media1)
		var ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
	        fs.unlinkSync(media2)
		if (err) return reply('error')
	        topt = fs.readFileSync(ran)
		samu330.sendMessage(from, topt, MessageType.audio, {mimetype: 'audio/mp4', quoted: sam, ptt:true})
	        })
		break
            case 'stickertag':
                if (!isGroup) return await reply('this command only for group')
                if (!isAdmin && !isOwner && !itsMe) return await reply('This command only for admin')
                if (!isQuotedImage && !isImage) return await reply('Stickernya mana?')
                media = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                buffer = await samu330.downloadMediaMessage(media)
                await wa.hideTagSticker(from, buffer)
                break
            case 'promote':
                if (!isGroup) return await reply('this command only for group')
                if (!isAdmin) return await reply('This command only for admin')
                if (!botAdmin) return await reply('jadikan bot admin')
                if (mentionUser.length == 0) return await reply('Tag member')
                await wa.promoteAdmin(from, mentionUser)
                await reply(`Success promote member`)
                break
            case 'demote':
                if (!isGroup) return await reply('this command only for group')
                if (!isAdmin) return await reply('This command only for admin')
                if (!botAdmin) return await reply('This command is available if the bot admin')
                if (mentionUser.length == 0) return await reply('Tag member!')
                await wa.demoteAdmin(from, mentionUser)
                await reply(`Success demote member`)
                break
            case 'admin':
                var textt = msg.admin(groupAdmins, groupName)
                await wa.sendFakeStatus(from, textt, "LIST ADMIN", groupAdmins)
                break
            case 'linkgc':
                var link = await wa.getGroupInvitationCode(from)
                await wa.sendFakeStatus(from, link, "This link group")
                break
            case 'group':
                if (!isGroup) return await reply('this command only for group')
                if (!isAdmin) return await reply('This command only for admin')
                if (!botAdmin) return await reply('This command is available if the bot admin')
                if (args[0] === 'open') {
                    samu330.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
                        wa.sendFakeStatus(from, "*Success open group*", "GROUP SETTING")
                    })
                } else if (args[0] === 'close') {
                    samu330.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
                        wa.sendFakeStatus(from, "*Succes close group*", "GROUP SETTING")
                    })
                } else {
                    await reply(`Example: ${prefix}${command} open/close`)
                }
                break
            case 'setnamegc':
                if (!isGroup) return await reply('this command only for groups')
                if (!isAdmin) return await reply('This command only for admin')
                if (!botAdmin) return await reply('This command is available if the bot admin')
                var newName = args.join(" ")
                samu330.groupUpdateSubject(from, newName).then(() => {
                    wa.sendFakeStatus(from, "Succes change subject name to" + newName, "GROUP SETTING")
                })
                break
            case 'setdesc':
                if (!isGroup) return await reply('This command only for groups')
                if (!isAdmin) return await reply('This command only for admin')
                if (!botAdmin) return await reply('This command is available if the bot admin')
                var newDesc = args.join(" ")
                samu330.groupUpdateDescription(from, newDesc).then(() => {
                    wa.sendFakeStatus(from, "Succes change description group to" + newDesc, "GROUP SETTING")
                })
            default:
                if (body.startsWith(">")) {
                    if (!itsMe) return await reply('This command only for meguy')
                    return await reply(JSON.stringify(eval(args.join(" ")), null, 2))
                }
        }
    } catch (e) {
        console.log(chalk.whiteBright("â”œ"), chalk.keyword("aqua")("[  ERROR  ]"), chalk.keyword("red")(e))
    }
})
