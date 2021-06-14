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
const samuGg = require('google-it');
const samuGgImg = require('g-i-s');

const {sm330mfire} = require('./lib/mediafire.js')
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
const simi = JSON.parse(fs.readFileSync('./src/simi.json'))
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
			"description": "",
			"currencyCode": "SYP",
			"priceAmount1000": "999999999999999999",
			"retailerId": "𝒩𝓎𝒶𝓃ℬ𝑜𝓉🍃",
			"productImageCount": 10
			},
			"businessOwnerJid": `0@s.whatsapp.net`
			}
			}}
        
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
	const isSimi = isGroup ? simi.includes(from): false
	const isWelkom = isGroup ? welkom.includes(from) : false
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
	const pushname = sam.key.fromMe ? samu330.user.name : sam.notify || sam.vname || sam.name || '-'
	const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
	const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)

        }
	    	
        
        const hour_now = moment().format('HH')
        var timeFt = 'Buenos dias🍃'
        if (hour_now >= '03' && hour_now <= '10') {
          timeFt = 'Buenos dias🍃'
        } else if (hour_now >= '10' && hour_now <= '14') {
          timeFt = 'Buen mediodia😊'
        } else if (hour_now >= '14' && hour_now <= '17') {
          timeFt = 'Buenas tarde🌇'
        } else if (hour_now >= '17' && hour_now <= '18') {
          timeFt = 'Buenas tardes🌇'
        } else if (hour_now >= '18' && hour_now <= '23') {
          timeFt = 'Buenas noches🌆'
        } else {
          timeFt = '*BUEN NUEVO DIA🌉*'
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
	const menuVf = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: { "imageMessage": { "mimetype": "image/jpeg","caption": `NყᥲᥒBot | 🍒Sᥲm ყ Pᥱrrყ\n${timeFt}`, 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
 		}
		contextInfo: {
  mentionedJid: [sender]}
	const fimg = {
	 	key:
	 	{ fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
	 	{ remoteJid: "status@broadcast" } : {}) },
	 	message: { "imageMessage": { "mimetype": "image/jpeg","caption": 'NყᥲᥒBot | 🍒Sᥲm ყ Pᥱrrყ', 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
		}
		contextInfo: {
  mentionedJid: [sender]}
	const fdoc = {
	 	key:
	 	{ fromMe: false,
	 	participant: `0@s.whatsapp.net`, ...(from ? 
	 	{ remoteJid: "status@broadcast" } : {}) },
	 	message: { "documentMessage": { "title": "🔥𝓢𝓪𝓶 𝔂 𝓟𝓮𝓻𝓻𝔂🔥", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
		}
		contextInfo: {
  mentionedJid: [sender]}
	const floc = {
	 	key:
	 	{ fromMe: false,
	 	participant: `0@s.whatsapp.net`, ...(from ? 
	 	{ remoteJid: "status@broadcast" } : {}) },
	 	message: { "locationMessage": { "title": "🥇𝑵𝒚𝒂𝒏𝑩𝒐𝒕 | 𝑺𝒂𝒎 𝒚 𝑷𝒆𝒓𝒓𝒚🔮", 'jpegThumbnail': fs.readFileSync('./src/fake.jpg')}}
		}
		contextInfo: {
  mentionedJid: [sender]}
	const fliveLoc = {
	 	key:
	 	{ fromMe: false,
	 	participant: `0@s.whatsapp.net`, ...(from ? 
	 	{ remoteJid: "status@broadcast" } : {}) },
	 	message: { "liveLocationMessage": { "caption": "🥇𝙉𝙮𝙖𝙣𝘽𝙤𝙩 | 𝙎𝙖𝙢 𝙮 𝙋𝙚𝙧𝙧𝙮✨", 'jpegThumbnail': fs.readFileSync('./src/help.jpg')}}
		}
		contextInfo: {
  mentionedJid: [sender]}
	const fvid = {
	 	key:
	 	{ fromMe: false,
	 	participant: `0@s.whatsapp.net`, ...(from ? 
	 	{ remoteJid: "status@broadcast" } : {}) },
	 	message: { "videoMessage": { "title": "💞𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆💞", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
		}
		contextInfo: {
  mentionedJid: [sender]}
	const faud = {
	 	key:
	 	{ fromMe: false,
	 	participant: `0@s.whatsapp.net`, ...(from ? 
	 	{ remoteJid: "status@broadcast" } : {}) },
	 	message: { "audioMessage": { "title": "💞𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆💞", 'jpegThumbnail': fs.readFileSync('./src/samyperry.png')}}
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
		"jpegThumbnail": fs.readFileSync('./src/help.jpg')
		},
		"title": "💞𝑆𝑎𝑚 𝑦 𝑃𝑒𝑟𝑟𝑦💞 | ✅NyɑnBot✅",
		"description": "",
		"currencyCode": "SYP",
		"priceAmount1000": "9999999999999999",
		"retailerId": "NyanBot",
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
  		samu330.updatePresence(from, Presence.recording)
		uptime = process.uptime()
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

                Menu = `
➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
🔐Hola *${pushname}* ${timeFt}

Hora: ${jmn}
Fecha: ${calender}

*Comandos usados hoy : ${hit_today.length}*

_PORFAVOR LEE LAS REGLAS_:
${prefix}reglas


${samu} [ ${prefix} ]  Prefijo:${samu}✏️
${samu} Tiempo de actividad:${samu} *${uptime}*🕐
${samu} Modo:${samu} *ON*✅
${samu} Grupo:${samu} *${groupName}*👥
${samu} Número de grupos:${samu}
${samu} Número de chats:${samu} 
${samu} Numero del Dueño wa.me/+529984907794${samu}🏆

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
            samu330.sendMessage(from, foto, image, { quoted: menuVf, caption: Menu, thumbnail: fakee, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
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
			    
            case 'menu1':                                                                                                                        if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})                
	    mda = `
╔════════════════╗
╠  ◈  𝙈𝙀𝙉𝙐⁪⁡ 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼 ◈  ╣
╠════════════════╝
║
╠ *●${prefix}imagen*
║ _Búsqueda de imágenes_
║ _en Google_
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
	buscar = args.join(' ')
	if (!buscar) return reply('Que deseas buscar?')
	let urlgg = `https://google.com/search?q=${buscar}`
  	let search = await samuGg({ query: buscar })
  	let msg = search.map(({ title, link, snippet}) => {
    	return `*${title}*\n_${link}_\n_${snippet}_`
  	}).join`\n\n`
	reply(`*🔍Busqueda realizada por* 🐉Samu330🐉\n\n${msg}`)
	break

	case 'imagen':
	if (args.length < 1) return reply('Que deseas buscar?')
	reply(`Porfavor espera un momento mientras busco imagenes de ` + args.join(' '))
	ggimg = args.join(' ')
	res = await samuGgImg(ggimg, google)
	function google(error, result){
	if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
	else {
	var gugIm = result
	var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
	samu330.sendMessage(from, random, image, {quoted: ftoko, caption: `*🔍Busqueda de* _${ggimg}_\n*Realizada por 🐉Samu330🐉*`})
	}
	}
	break
	case 'apagar':
        if (!isOwner) return reply('tu quien eres para decirme que hacer!?🤔')
        reply('Me apagare en 3 Segundos....') 
        setTimeout( () => {
        samu330.close() }, 3000)
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
	    case 'ipbot':
			ipbot = await getJson('http://ip-api.com/json/')
			await sleep(200)
			reply(`{"creator":"Samu330", "status":"success","country":"${ipbot.country}","countryCode":"${ipbot.countryCode} ","region":"${ipbot.region}","regionName":"${ipbot.regionName}","city":"${ipbot.city}","zip":"${ipbot.zip}","lat":${ipbot.lat},"lon":${ipbot.lon},"timezone":"${ipbot.timezone}","isp":"${ipbot.isp}","org":"${ipbot.org}","as":"${ipbot.as}","query":"${ipbot.query}"}`)
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
	    case 'ip':
			ips = args.join(' ')
ip = await getJson(`http://ip-api.com/json/${ips}`)
			if(ip.status == 'fail') return reply('*ip incorrecta*')
reply('*Recopilando información.... Tiempo Aproximado:*\n```3 seconds```')
                        await sleep(200)
                        datos = `*🔍Ip:* _${ips}_

🌍 *ip*: _${ip.query}_
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
                        samu330.sendMessage(from, { degreesLatitude: `${ip.lat}`, degreesLongitude: `${ip.lon}`, name: '📌Búsqueda por 🐉Samu330🐉', address : `${ip.city}`}, MessageType.liveLocation, {quoted : fliveLoc})
                        break

	    case 'reglas':
	    reply(`*Hola, estas son las reglas que debes seguir para que no tengas ningun problema con el propietario del bot*\n\n1- _Manten una formalidad respetuosa_\n2- _Si vas a añadir el bot a algun grupo, verifica que el grupo cumpla con los requisitos que son tener minimo 5 personas_\n3- _❌NO AGAS SPAM DE COMANDOS❌_ *Esto es enserio, puedes hacer que el bot se apage*\n4- _📵NO AGAS LLAMADAS POR WHATSAPP AL PROPIETARIO DEL BOT📵_ *Seras bloqueado inmediatamente*\n5- _🕐Espera el tiempo nesesario cuando pidas alguna funcion, ya que algunas tardan en realizarse, no vuelvas a pedir el comando nuevamente hasta que te llege un mensaje de error_\n\nLee las reglas y cumplelas, no te quieras hacer el chistoso, por que no lo eres y ni te sale, asi que porfavor respeta las reglas.
				`)
				break
case 'tutorial':
case 'git':
case 'crear':
result = fs.readFileSync(`./media/app.apk`)
  samu330.sendMessage(from, result, document, {
mimetype: 'application/vnd.android.package-archive', filename: '🐉AppBot🐉 by 📌Samu330🥀', quoted: fdoc})
break
		case 'nuevogrupo':
				const nombregc = args.join(' ')
			        if (!nombregc) return reply('*Porfavor escribe el nombre que quieras que tenga el grupo')
				const group = await samu330.groupCreate(`${nombregc}`, ["5219984907794@s.whatsapp.net"])
				reply(`*EL GRUPO FUE CREADO CORRECTAMENTE CON EL NOMBRE:*\n\n*${nombregc}*\n\nid del grupo: ${group.gid}`)
				samu330.sendMessage(group.gid, "hello everyone", text, {quoted: fliveLoc})
				break

	    case 'nombre':
			samu330.sendMessage(from, `${pushname}`, MessageType.text)
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
  samu330.sendMessage(from, caption, MenssageType.text, {quoted: ftoko})

break
case 'mfire':
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
                    query = args.join(' ')
		    assistant = fs.readFileSync('./src/img.jpg')
				try {
                    get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay?apikey=ec35353a991a258b05876861&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `*Titulo* : ${get_info.title}\n`
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
		    w = await getJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=apivinz&q=${query}`)
			e = w.result
		    ini_txt = `*Titulo* : ${e.title}\n`
                    ini_txt += `•Link : ${e.source}\n`
                    ini_txt += `•Duracion : ${e.duration}\n`
                    ini_txt += `°Tamaño :\n ${e.size}\n\n`
		    ini_txt += `📌 *Descarga directa* : ${e.url_audio}\n`
		    const playpp = await getBuffer(e.thumbnail)
		    await samu330.sendMessage(from, playpp, image, { quoted: ftoko, caption: ini_txt, thumbnail: assistant, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
                    get_audio = await getBuffer(e.url)
                    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, filename: `${e.title}.mp3`, quoted: faud })
		    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt: true, duration :-999999999999999, filename: `${e.title}.mp3`, quoted: faud })
				}
				
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
			
			                sasasasasamu = await getBuffer(ppimg)
                                        veri = sender
                                        if (isGroup) {
                                        addRegisteredUser(sender, nombre, edad, time, serialUser)
                                        samu330.sendMessage(from, sasasasasamu, image, { quoted: sam, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
                                        } else {
                                        addRegisteredUser(sender, nombre, edad, time, serialUser)
                                        samu330.sendMessage(from, sasasasasamu, image, { quoted: sam, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
                                        }
				        break

            case 'owner':
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


	    case 'producto':
			samu330.sendMessage(from, `${sender}`, product, { quoted: sam})
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
            case 'noprefix':
                prefix = ''
                reply(`*EL PREFIJO YA NO ES NECESARIO AHORA!*`)
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
                        ini_txt += `Imagen   : ${x.thumbnail}\n\n╼━━━━━━━━━━━━━━━━━━━━━━━━━━╾\n`
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
		reply('*⌛EN PROVESO*')
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
            case 'setbio':
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
            case 'speed': 
            case 'ping':
		let timestamp = speed();
		let latensi = speed() - timestamp
		wa.sendFakeStatus2(from, `Velocidad de: ${latensi.toFixed(4)}second`, fake)
		break
            case 'runtime':
		run = process.uptime()
		let text = msg.runtime(run)
	        samu330.sendMessage(from, '*Tiempo encendido*', MessageType.text, { quoted: { key: {       
			fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})                                                  },                                                                                                                                   message: {                                                                                                                           "productMessage": {                                                                                                                  "product": {
                        "title": `${text}`,       
				"description": "",               
				"currencyCode": "SYP",               
				"priceAmount1000": "999999999999999999",
                        "retailerId": "𝒩𝓎𝒶𝓃ℬ𝑜𝓉🍃",                                                                                                           "productImageCount": 10
                        },                                                                                                                                   "businessOwnerJid": `0@s.whatsapp.net`
                        }                                                                                                                                    }}                                                                                                                                                                                                                                                                        })
		break
            case 'unpin':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                samu330.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                samu330.modifyChat(from, ChatModification.pin)
                reply('*Este chat se ah fijado*')
                console.log('Se fijo el chat = ' + from)
                break
            case 'unread?':
		const unread = await samu330.loadAllUnreadMessages()
	        samu330.sendMessage(from, `Total de mensajes sin leer: ${unread.length}`, MessageType.text)
						
                break
            case 'unarchiveall':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                reply('*Todos los chats archivados fueron desarchivados*')
                console.log('succes unarchive chat = ' + from)
                anu = await samu330.chats.all()
                for (let _ of anu) {
                samu330.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
            case 'archive':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                reply('*Vale, espera..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                samu330.modifyChat(from, ChatModification.archive)
		reply('*Yap*')
                break
            case 'vaciar':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                reply('*Este chat a sido vaciado*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                samu330.modifyChat(from, ChatModification.delete)
                break
            case 'mute':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                samu330.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*Este chas a sido silenciado*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                samu330.modifyChat(from, ChatModification.unmute)
                reply('*Este chat a dejado de silenciarse*')
                console.log('succes unmute chat = ' + from)
                break
            case 'ytsearch':
				
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
                    query = args.join(' ')
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
				
                    break
            case 'upstorypic':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                var teksyy = body.slice(12)
                    reply('*Espera un momento...*')
                var foto = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.image, {quoted: ftoko, caption: `${teksyy}`})
                    reply('*SE ENVIO LA IMAGEN COMO ESTADO*')
                break
            case 'upstoryvid':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                reply('*Espera un momento...*')
                var foto = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.video, {quoted: ftoko, caption: `${body.slice(12)}`})
                    reply('Succes!')
                break
            case 'upstory':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                var teks = body.slice(9)
                samu330.sendMessage('status@broadcast', teks, MessageType.text)
                    reply('*SE ENVIO EL VIDEO COMO ESTADO*')
                break
            case 'unreadall':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                var chats = await samu330.chats.all()
                chats.map( async ({ jid }) => {
                await samu330.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Se an marcado como NO LEIDOS ${chats.length} chats !\`\`\``
		    await samu330.sendMessage(from, teks, MessageType.text, {quoted: fdoc})
		    console.log(chats.length)
	        break
            case 'readall':
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
            case 'tagall':
                if (!isAdmin) return reply('only for admin group')
                members_id = []
		teks = (args.length > 1) ? budy.slice(8).trim() : ''
	        teks += '\n\n'
	        for (let mem of groupMembers) {
		teks += `│┠ @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		mentions(teks, members_id, true)
		break
            case 'chat':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
                var pc = budy.slice(6)
                var nomor = pc.split("|")[0];
                var org = pc.split("|")[1];
                samu330.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
                reply(`*El memsaje:* ${org} *Se envio a:* ${nomor}`)
                break
            case 'setpp':
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
		if (!isGroup) return reply('')
				//	if (!isGroupAdmins) return reply('')
		if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
		mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
		if (mentioned.length > 1) {
	teks = '*Mengeluarkan :* '
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	samu330.groupRemove(from, mentioned)
						} else {
							mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
							samu330.groupRemove(from, mentioned)
						}
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
            case 'broadcast':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
                text = args.join(" ")
                for (let chat of totalChat) {
                    await wa.sendMessage(chat.jid, text)
                }
                break
            case 'setthumb':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
                if (!isQuotedImage && !isImage) return await reply('Gambarnya mana?')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                mediaa = await samu330.downloadMediaMessage(media1)
                fs.writeFileSync(`./lib/image/foto.jpg`, mediaa)
                await wa.sendFakeStatus(from, "*Succes changed image for help image*", "success")
                break
            case 'sethelpimg':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
                if (!isQuotedImage && !isImage) return await reply('Gambarnya mana?')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                mediaa = await samu330.downloadMediaMessage(media1)
                fs.writeFileSync(`./lib/image/foto2.jpg`, mediaa)
                await wa.sendFakeStatus(from, "*Succes changed image for help image*", "success")
                break
            case 'fakethumb':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
                if (!isQuotedImage && !isImage) return await reply('reply image!')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                media2 = await samu330.downloadMediaMessage(media1)
                await wa.sendFakeThumb(from, media2)
                break	
            case 'stats':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
                texxt = await msg.stats(totalChat)
                await wa.sendFakeStatus(from, texxt, "BOT STATS")
                break
            case 'block':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("tag target!")
                    return await wa.blockUser(sender, true)
                }
                await wa.blockUser(sender, true)
                break
            case 'unblock':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("Tag targer!")
                    return await wa.blockUser(sender, false)
                }
                await wa.blockUser(sender, false)
                break
            case 'salir':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
                if (!isGroup) return await reply('This command only for group baka')
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
		samu330.sendMessage(from, `*Hola* 🙋🏻‍♂️\nSoy Samu _(NyanBot)_, me an designado como *BOT* para este grupo🤖\n\n*Porfavor sige mis reglas, para leer mis reglas escribe:*\n${prefix}reglas\nPorfavor sigelas o atente a las consecuencias⚠\n*Quedo a su dispocicion, no me agan sentir mal.... por que yo tambien tengo corazon😣*`, MessageType.text)
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
                if (!isAdmin && !isOwner && !itsMe) return await reply('this command only for admin!')
                await wa.hideTag(from, args.join(" "))
                break
            case 'imagetag':
                if (!isGroup) return await reply('this command only for group')
                if (!isAdmin && !isOwner && !itsMe) return await reply('this command only for admin!')
                if (!isQuotedImage && !isImage) return await reply(`Lalala... *cancion feliz*\nY la imagen pedazo de nada>:/`)
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
                if (!botAdmin) return await reply('Botcito debe ser admin')
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
                await wa.sendFakeStatus(from, link, "El lik de este grupo es")
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
		if (isSimi && body != undefined){
 		res = await axios.get(`https://api.simsimi.net/v1/?text=${body}&lang=es`)
 		reply(res.success)
		}
        }
    } catch (e) {
        console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[  ERROR  ]"), chalk.keyword("red")(e))
    }
})
