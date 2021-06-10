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
const crypto = require("crypto-js");
const request = require('request');
const fs = require('fs');
const { exec } = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios');
const fetch = require('node-fetch');

const { ssstik } = require("./lib/tiktok.js")
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
const samu = JSON.parse(fs.readFileSync('./setting.json'))
const bodyM = samu.samuM
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
var public = config.public

conn.connect()
const samu330 = conn.samu330

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

fakeimage = fs.readFileSync(`./src/help.jpg`)
fake = 'samu3300'
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
    console.log("call dari "+ callerId)
        samu330.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
        await sleep(4000)
        await samu330.blockUser(callerId, "add") // Block user
})

samu330.on('group-participants-update', async (anu) => {
	//	if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await samu330.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
			num = anu.participants[0]
			const moment = require('moment-timezone')
			const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
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
		pushnem = mek.key.fromMe ? samu330.user.name : conts.notify || conts.vname || conts.name || '-'

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
            await samu330.sendMessage(from, teks, MessageType.text, { quoted: { key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"title": "📌𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝙎𝙖𝙢 𝙮 𝙋𝙚𝙧𝙧𝙮🥀",
					"description": "📌𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝙎𝙖𝙢 𝙮 𝙋𝙚𝙧𝙧𝙮🥀",
					"currencyCode": "SYP",
					"priceAmount1000": "999999999999999999",
					"retailerId": "𝒩𝓎𝒶𝓃ℬ𝑜𝓉🍃",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	} }
        
	    })
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
	const isRegister = checkRegisteredUser(sender)
        const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
	const q = args.join(' ')
	const Smname = sam.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const mentionByTag = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentions = (teks, memberr, id) => {
	    (id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : samu330.sendMessage(from, teks.trim(), extendedText, {quoted: sam, contextInfo: {"mentionedJid": memberr}})
	}
	
	const sender1 = isGroup ? sam.participant : sam.key.remoteJid
		const senderito1 = sam.key.fromMe ? samu330.user.jid : isGroup ? sam.participant : sam.key.remoteJid
	const pushname1 = sam.key.fromMe ? samu330.user.name : sam.notify || sam.vname || sam.name || '-'

	const createSerial = (size) => {
			return crypto.randomBytes(size).toString('hex').slice(0, size)

        		}
	    	
        // Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Buenos dias🍃'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Buenos dias🍃'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Buen mediodia😊'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Buenas tarde🌇'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Buenas tardes🌇'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Buenas noches🌆'
        } else {
          ucapanWaktu = '*BUEN NUEVO DIA🌉*'
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

	const noreg = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./src/assistant.jpg`)
					},
					"title": '🗒️𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐧𝐨 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨!',
					"description": "𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙩𝙚",
					"currencyCode": "SYP",
					"priceAmount1000": "99999999",
					"retailerId": "NyanBot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
	}

        if (!isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        if (isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber), chalk.greenBright("en el grupo"), chalk.keyword("yellow")(groupName))
        
        switch (command) {
            case 'help':
	    case 'menu':
	    case 'comandos':
const moment = require('moment-timezone')

const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')

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
  samu330.updatePresence(from, Presence.recording)
uptime = process.uptime()
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: sam, caption: `😊Hola, ${ucapanWaktu}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

                Menu = `
➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
🔐Hola *${pushname1}* ${ucapanWaktu}
Hora: ${jmn}
*Hit Today : ${hit_today.length}*
_PORFAVOR LEE LAS REGLAS_:
${prefix}reglas
Fecha: ${calender}
ٌ${samu} [ ${prefix} ]  Prefijo:${samu}✏️
ٌ${samu} Tiempo de actividad:${samu} *${uptime}*🕐
ٌ${samu} Modo:${samu} *ON*✅
ٌ${samu} Grupo:${samu} *${groupName}*👥
ٌ${samu} Número de grupos:${samu}
ٌ${samu} Número de chats:${samu} 
ٌ${samu} Numero del Dueño wa.me/+529984907794${samu}🏆
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
${bodyM} ${prefix}menu5 *(Otros comandos)*
${bodyM} ${prefix}menu6 *(Comandos +18)* 
${bodyM} ${prefix}menu7 *(Comandos de logos)* 
ᴸᵃ ᵐᵃʸᵒʳᶦ́ᵃ ᵈᵉ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᶠᵘⁿᶜᶦᵒⁿᵃⁿ ᵃˡ ¹⁰⁰
ᴱˢᶜʳᶦᵇᵉ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᵉⁿ ˢᵘ ᶠᵒʳᵐᵃᵗᵒ ᶜᵒʳʳᵉᶜᵗᵒ ᵖᵃʳᵃ ᑫᵘᵉ ⁿᵒ ᵈᵉ ᵉʳʳᵒʳᵉˢ
ˢᶦ ᵗᶦᵉⁿᵉˢ ᵃˡᵍᵘ́ⁿ ᵖʳᵒᵇˡᵉᵐᵃ ᵒ ᵃˡᵍᵘⁿᵃ ᶠᵘⁿᶜᶦᵒ́ⁿ ᵈᵉˡ ᵇᵒᵗ ᵈᵉʲᵒ ᵈᵉ ᶠᵘⁿᶜᶦᵒⁿᵃʳ ʰᵃ́ᶻᵐᵉˡᵒ ˢᵃᵇᵉʳ ᵃ ᵐᶦ̣.ᵂʰᵃᵗˢᴬᵖᵖ.li
     -----------------------------------------------
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::                                                
¦:
¦:         . : 🐬𝐍𝐲𝐚𝐧𝐁𝐨𝐭🐬 : .
¦:     🔥❣️𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆❣️🔥
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
		     🌸 SamịPerry.li 🌸
 ********************************`
            samu330.sendMessage(from, foto, image, { quoted: sam, caption: Menu, thumbnail: fakee, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
	    case 'menu2':
			stc = `╭⸻⃞✫꯭𝙈꯭𝙀꯭𝙉꯭𝙐꯭✫⃞⸻╮
╰────ြ𝐒𝐭𝐢𝐜𝐤𝐞𝐫🃏
╭─────────────
│ *${prefix}sticker*
│ _Imagen/gif/video_
╰─────────────╮
╭─────────────╯
│ *${prefix}snobg*
│ _Stiker sin fondo_
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
				    "productMessage": {         
					    "product": {        
						    "productImage":{        
							    "mimetype": "image/jpeg",                   
							    "jpegThumbnail": fs.readFileSync(`./src/fake.jpg`)             
						    },       
						    "title": '📚𝑆𝑡𝑖𝑘𝑒𝑟 𝑚𝑒𝑛𝑢',
						    "description": "",
						    "currencyCode": "SYP",    
						    "priceAmount1000": "99999999999999",     
						    "retailerId": "NyanBot",
                                        "productImageCount": 1       
					    },        
					    "businessOwnerJid": `0@s.whatsapp.net`    
				    }
        }}})

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

	    case 'nombre':
			samu330.sendMessage(from, `${pushname1}`, MessageType.text)
			break
	    case 'hoy':
		const momento1 = require('moment-timezone')
const hora = momento1.tz('Asia/Jakarta').format('HH:mm:ss')
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
			reply(`🕐Son las *${hora}*\n\n🍃Hoy es *${week1}  ${calender1}*\n\n_${ucapanWaktu}_`)
			break

	    case 'inspeccionar':
			let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
  let code = q.includes(linkRegex)
  if (!code) return reply('Link invalido')
  let res = await samu330.query({
    json: [code],
    expect200: true
  })
  if (!res) return res
  let caption = `
-- [Group Link Inspector] --
${res.id}
*Nombre:* ${res.subject}
*Creado* por @${res.id.split('-')[0]} el *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
*Nombre cambiado* por @${res.subjectOwner.split`@`[0]} el *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
*Descripción modificada* por @${res.descOwner.split`@`[0]} el *${formatDate(res.descTime * 1000)}*` : ''}
*👥Miembros:* ${res.size}
*🔁Miembros registrados por el bot que se an unido*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'Ninguno'}
${res.desc ? `*🗒️Descripción:*
${res.desc}` : '*🚫SIN DESCRIPCIÓN🚫*'}
*JSON Version*
\`\`\`${JSON.stringify(res, null, 1)}\`\`\`
`.trim()
  let pp = await samu330.getProfilePicture(res.id).catch(console.error)
  if (pp) samu330.sendMessage(from, pp, image)
  reply(caption, false, {
    contextInfo: {
      mentionedJid: samu330.parseMention(caption)
    }
  })

break

	    case 'play':

  //if (!isRegister) return reply(mess.only.usrReg)
  if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
                    query = args.join(' ')
		    fakee = fs.readFileSync('./src/img.jpg')
				try {
                    get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay?apikey=ec35353a991a258b05876861&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `*Titulo* : ${get_info.title}\n`
                    ini_txt += `•Publicador : ${get_info.uploader}\n`
                    ini_txt += `•Duracion : ${get_info.duration}\n`
                    ini_txt += `°€Vistas : ${get_info.view}\n`
                    ini_txt += `°Like : ${get_info.like}\n`
                    ini_txt += `°Dislike : ${get_info.dislike}\n`
                    ini_txt += `°‹Descripcion :\n ${get_info.description}\n\n`
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
		    w = await getJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=apivinz&q=${query}`)
			e = w.result
		    ini_txt = `*Titulo* : ${e.title}\n`
                    ini_txt += `•Link : ${e.source}\n`
                    ini_txt += `•Duracion : ${e.duration}\n`
                    ini_txt += `°Tamaño :\n ${e.size}\n\n`
		    ini_txt += `📌 *Descarga directa* : ${e.url_audio}\n`
		    const playpp = await getBuffer(e.thumbnail)
		    await samu330.sendMessage(from, playpp, image, { quoted: sam, caption: ini_txt, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
                    get_audio = await getBuffer(e.url)
                    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, filename: `${e.title}.mp3`, quoted: sam })
		    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt: true, duration :-999999999999999, filename: `${e.title}.mp3`, quoted: sam })

					//reply('*Lo siento, ocurrio un error, esta funcion es de paga, si quieres descargar musica gratis usa el comando .playfree*')
				}
				
                    break

		    case 'reg':

                                        if (isRegister) return reply('*Tu cuenta ya estaba verificada*')
                                        if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* ${prefix}reg *Samu|17*`)
                                        const nombre = q.substring(0, q.indexOf('|') - 0)
                                        const edad = q.substring(q.lastIndexOf('|') + 1)
                                        const serialUser = createSerial(20)
					const momento = require('moment-timezone')
					const time = momento.tz('Asia/Jakarta').format('HH:mm:ss')
                                        if(isNaN(edad)) return await reply('*La edad es un numero🙄*!!')
                                        if (nombre.length >= 10) return reply(`*Tu nombre es acaso un tren?*\nUn nombre no puede tener mas de *10* letras`)
                                        if (edad > 30) return reply(`Uuuu, yastas viejito:c\n*Lo siento pero no puedo registrarte si eres mayor de 30 años*`)
                                        if (edad < 13) return reply(`Eres menor de 13 años, no puedo hacer un registro tuyo lo siento.\n*Si quieres muestrame una autorizacion de tus padres diciendo que puedes pasar tiempo usando este bot para que pueda aceptarte:d*`)
                                        try {
		                          		ppimg = await samu330.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		                        		} catch {
							                        	
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                           	}
			
			                         	sasasasasamu = await getBuffer(ppimg)
                                        veri = sender
                                        if (isGroup) {
                                                addRegisteredUser(sender, nombre, edad, time, serialUser)
                                                samu330.sendMessage(from, sasasasasamu, image, { quoted: sam, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
                                                console.log(color('[REGISTRO]'), color(jmn, 'yellow'), 'Nombre:', color(nombre, 'cyan'), 'Edad:', color(edad, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                                        } else {
                                                addRegisteredUser(sender, nombre, edad, time, serialUser)
                                                samu330.sendMessage(from, sasasasasamu, image, { quoted: sam, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
                                                console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nombre:', color(nombre, 'cyan'), 'Edad:', color(edad, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                                        }
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
		let pilem = `*「 SFILE SEARCH 」*\n\n*Hasil Pencarian : ${body.slice(13)}*\n\n─────────────────`
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
            case 'imagen':
                getBuffer(`https://lindow-api.herokuapp.com/api/pinterest?search=${args.join(' ')}&apikey=${apikey}`).then((result) => {
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
                        hm += '➣  ' + ress.hero[i] + '\n'
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
	        if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
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
                var res1 = await axios.get(`https://lindow-api.herokuapp.com/api/dlsoundcloud?url=${url}&apikey=${apikey}`)
                var { title, result } = res1.data
                thumbb = await getBuffer(`${res1.data.image}`)
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
	    case 'robar':
		if (!isQuotedSticker) return reply(`*Tururuu.... y el stiker kbron?*`)
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
	    case 's':                
	    case 'stiker':
		if (isMedia && !sam.message.videoMessage || isQuotedImage) {
                const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.
contextInfo : sam
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
			    reply('error')
                })
                .on('end', function () {
                console.log('Finish')                         
			exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {                                               
				if (error) return reply('error')
                wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), sam)             
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
                if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`
)
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.
contextInfo : sam
                const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                const packname1 = arg.split('|')[0]
                const author1 = arg.split('|')[1]
                    exif.create(packname1, author1, `stickwm_${sender}`)          
			reply('wait')
                    await ffmpeg(`${media}`)                                                                                                                 .inputFormat(media.split('.')[4])                                                                                                    .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`)
                    })
                    .on('error', function (err) {                                                                                                        console.log(`Error : ${err}`)
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
		    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])                                                                      
	.toFormat('webp')                                    
	.save(`./sticker/${sender}.webp`)                       
} else {                                                                     
	reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)                                                                  
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
	        if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
		if (!arg) return reply('masukkan bio')
	        wa.setBio(arg)
	        .then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
		.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
		break
            case 'setname':
		if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
	        if (!arg) return reply('masukkan nama')
		wa.setName(arg)
		.then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
		.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
	        break
            case 'setreply':
		if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
	        if (!arg) return reply(`Penggunaan ${prefix}setreply teks`)
		fake = arg
		wa.sendFakeStatus2(from, `Sukses`, fake)
		break
            case 'term':
	        if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
		if (!arg) return
		exec(arg, (err, stdout) => {
		    if (err) return wa.sendFakeStatus2(from, err, fake)
		    if (stdout) wa.sendFakeStatus2(from, stdout, fake)
		})
		break
            case 'sendkontak':
	        if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
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
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                samu330.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                samu330.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
            case 'unread?':
		const unread = await samu330.loadAllUnreadMessages()
	        samu330.sendMessage(from, `unread message count : *${unread.length}*`, text)
                break
            case 'unarchiveall':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await samu330.chats.all()
                for (let _ of anu) {
                samu330.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
            case 'archive':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                samu330.modifyChat(from, ChatModification.archive)
                break
            case 'delthischat':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                samu330.modifyChat(from, ChatModification.delete)
                break
            case 'mute':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                samu330.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
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
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                var teksyy = body.slice(12)
                    reply('wait')
                var foto = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.image, {quoted: sam, caption: `${teksyy}`})
                    reply('Succes!')
                break
            case 'upstoryvid':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                reply('wait')
                var foto = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.video, {quoted: sam, caption: `${body.slice(12)}`})
                    reply('Succes!')
                break
            case 'upstory':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                var teks = body.slice(9)
                samu330.sendMessage('status@broadcast', teks, MessageType.text)
                    reply('succses')
                break
            case 'unreadall':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                var chats = await samu330.chats.all()
                chats.map( async ({ jid }) => {
                await samu330.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await samu330.sendMessage(from, teks, MessageType.text, {quoted: sam})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
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
		teks += `┣➥ @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		mentions(teks, members_id, true)
		break
            case 'chat':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                var pc = budy.slice(6)
                var nomor = pc.split("|")[0];
                var org = pc.split("|")[1];
                samu330.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
                reply(`*El memsaje:* ${org} *Se envio a:* ${nomor}`)
                break
            case 'setpp':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ')
                samu330.updatePresence(from, Presence.composing) 
                if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setpp atau tag gambar yang sudah dikirim`)
	        var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		var media2 = await samu330.downloadAndSaveMediaMessage(media1)
	        await samu330.updateProfilePicture(meNumber, media2)
		reply('Done!')
	        break
            case 'kick':
	    case 'eliminar':
		if (!isGroup) return reply('')
				//	if (!isGroupAdmins) return reply('')
				//	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply(`Asi no baboso😒🙄\n\nAsi, wacha: *${prefix}eliminar @tag/etiqueta un mensaje*`)
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = `🐉 *°ORDEN RECIBIDA°* 🐉 : ${pushname1}\n`
						for (let _ of mentioned) {
							teks += `📌 _*Se eliminara a*_ @${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						samu330.groupRemove(from, `${mentioned[0].split('@')[0]}`)
					} else {
						mentions(`📚 *ORDEN CUMPLIDA* 📚 : SE ELIMINO A  @${mentioned[0].split('@')[0]}`, mentioned, true)
						samu330.groupRemove(from, mentioned)
					}
				
					break
                break
	    case 'añadir':
				if (!isGroup) return reply('')
			//	if (!isBotGroupAdmins) return reply('')
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
            case 'broadcast':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                text = args.join(" ")
                for (let chat of totalChat) {
                    await wa.sendMessage(chat.jid, text)
                }
                break
            case 'setthumb':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                if (!isQuotedImage && !isImage) return await reply('Gambarnya mana?')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                mediaa = await samu330.downloadMediaMessage(media1)
                fs.writeFileSync(`./lib/image/foto.jpg`, mediaa)
                await wa.sendFakeStatus(from, "*Succes changed image for help image*", "success")
                break
            case 'sethelpimg':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                if (!isQuotedImage && !isImage) return await reply('Gambarnya mana?')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                mediaa = await samu330.downloadMediaMessage(media1)
                fs.writeFileSync(`./lib/image/foto2.jpg`, mediaa)
                await wa.sendFakeStatus(from, "*Succes changed image for help image*", "success")
                break
            case 'fakethumb':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                if (!isQuotedImage && !isImage) return await reply('reply image!')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                media2 = await samu330.downloadMediaMessage(media1)
                await wa.sendFakeThumb(from, media2)
                break	
            case 'stats':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                texxt = await msg.stats(totalChat)
                await wa.sendFakeStatus(from, texxt, "BOT STATS")
                break
            case 'block':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("tag target!")
                    return await wa.blockUser(sender, true)
                }
                await wa.blockUser(sender, true)
                break
            case 'unblock':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("Tag targer!")
                    return await wa.blockUser(sender, false)
                }
                await wa.blockUser(sender, false)
                break
            case 'leave':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                if (!isGroup) return await reply('This command only for group baka')
                reply(`Akan keluar dari group ${groupName} dalam 3 detik`).then(async() => {
                    await help.sleep(3000)
                    await samu330.groupLeave(from)
                })
                break
            case 'join':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                if (isGroup) return await reply('This command only for private chat')
                if (args.length == 0) return await reply('Link group?')
                var link = args[0].replace("https://chat.whatsapp.com/", "")
                await samu330.acceptInvite(link)
                break
            case 'clearall':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                for (let chat of totalChat) {
                    await samu330.modifyChat(chat.jid, "delete")
                }
                await wa.sendFakeStatus(from, "Success clear all chat", "success")
                break

            /** Group **/
            case 'hidetag':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ')
                if (!isAdmin && !isOwner && !itsMe) return await reply('this command only for admin, baka!')
                await wa.hideTag(from, args.join(" "))
                break
            case 'imagetag':
                if (!isGroup) return await reply('this command only for group')
                if (!isAdmin && !isOwner && !itsMe) return await reply('this command only for admin, baka!')
                if (!isQuotedImage && !isImage) return await reply(`Lalala... *cancion feliz*\nY la imagen pedazo de nada>:/`)
                mediatag = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                buffer = await samu330.downloadMediaMessage(mediatag)
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
                if (!isQuotedImage && !isImage) return await reply('Etiqueta un stike0r?')
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
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  ERROR  ]"), chalk.keyword("red")(e))
    }
})
