const
	{
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
} = require('@adiwajshing/baileys');

const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const fs = require("fs");
const brainly = require("brainly-scraper");
const { color, bgcolor } = require('./lib/color');
const { fetchJson } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const
 { 
  wait,
  simih,
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start, 
  info,
  success
} = require('./lib/functions');

const axios = require("axios");
const os = require('os');
const util = require('util');
const ffmpeg = require('fluent-ffmpeg');
const imgbb = require('imgbb-uploader');
const imageToBase64 = require('image-to-base64');
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')
const { removeBackgroundFromImageFile } = require('remove.bg');
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'));
const antimedia = JSON.parse(fs.readFileSync('./src/antimedia.json'));
const bad = JSON.parse(fs.readFileSync('./src/bad.json'));
const badword = JSON.parse(fs.readFileSync('./src/badword.json'));
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'));
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'));
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'));
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const samu = JSON.parse(fs.readFileSync('./setting.json'))
const { spawn, exec, execSync } = require("child_process")
const speed = require('performance-now')

//Settings
publik = false
prefix = samu.prefix
bodyM = samu.samuM
targetprivate = ''
blocked = []

//apikey
lol = samu.lol
zeks = samu.zeks
imgbb_key = samu.imgbb_key


const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
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


//function
function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
			let v = new Date
				let localle = 'id'
					const harinya = d.toLocaleDateString(locale, { weekday: 'long' })
				
				var ramadhan = Math.floor(penghitungRmd - moment().format('DD:HH:mm')) 
				let hri = new Date
				let localev = 'id'
					var hari= hri.toLocaleDateString(localev, { weekday: 'long' })
}

async function starts() {
	const samu330 = new WAConnection()
	samu330.logger.level = 'warn'
	samu330.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' ESCANEA EL COGIGO WE🥀'))
	})

	fs.existsSync('./Samu.json') && samu330.loadAuthInfo('./Samu.json')
	samu330.on('connecting', () => {
		start('2', 'Connecting...')
	})
	samu330.on('open', () => {
		success('2', 'Conectado🗽')
	})
	await samu330.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu.json', JSON.stringify(samu330.base64EncodedAuthInfo(), null, '\t'))

//welcome
samu330.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await samu330.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'NUEVO PARTICIPANTE') {
			num = anu.participants[0]
			const moment = require('moment-timezone')
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = samu330.contacts[num] != undefined ? samu330.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : samu330.contacts[num].notify || samu330.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await samu330.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#00FFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			samu330.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `😙Hola, @${num.split('@')[0]}, _*Bienvenido a ${mdata.subject}, esperamos que te la pases a gusto en este grupo✨*_\n_Recuerda siempre seguir las reglas y mantener una formalidad respetuosa_😉\nSon a las *${jm}* del *${calender}*\n${mdata.desc}`, contextInfo: { mentionedJid: [num] }})
			})
			//leave
		} else if (anu.action == '1 Menos') {
		num = anu.participants[0]
				teks = `_Weno ps.... amm😪...  @${num.split('@')[0]} se nos fue, ni llorar es bueno:)_
_*Ojala y le baya bien, y mas despues..... que lo atropelle un tren!!🚉🤣*_
*No se awiten gente, esten seguros que nadie lo extrañara:D*`
				samu330.sendMessage(mdata.id, teks, MessageType.text,{ contextInfo: {"mentionedJid": [num]}})
		}
	} catch (e) {
		console.log(e)
	}
	})

samu330.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
		blocked.push(i.replace('c.us', 's.whatsapp.net'))
	}
})

samu330.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	})
	
	//ANTIDEL
samu330.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = hurtz.key.fromMe ? samu330.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Estado del grupo : ${!isRevoke}\nEstado de todos los contactos : ${!isCtRevoke}\nEl estado del contacto está excluido: ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = hurtz.key.remoteJid
			const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = hurtz.key.id
			const conts = hurtz.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = hurtz.key.fromMe ? samu330.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

*∘ 🙍🏻‍♂️Nombre :* ${pushname}
*∘ 📲Numero :* wa.me/${sender.split('@')[0]}
*∘ ✏Tipo :* Text
*∘ 🕐Hora :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
*∘ 📆Fecha :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
*∘ 📡Mensaje :* ${body ? body : '-'}`
				samu330.sendMessage(from, strConversation, MessageType.text)

			}
		}
} catch (e) {
		console.log('Message : %s', color(e, 'red'))
		// console.log(e)
}
})


samu330.on('message-new', async (sam) => {
	try {
		if (!sam.message) return
		if (sam.key && sam.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(sam)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
		 if (!sam.message) return
		if (sam.key && sam.key.remoteJid == 'status@broadcast') return
		const typei = Object.keys(sam.message)[0]
		budo = (typei === 'conversation') ? sam.message.conversation : (typei === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
			if(sam.key.fromMe){
			}

		if (!publik) {
			if (!sam.key.fromMe) return
		}
		global.prefix
		global.blocked
		sam.message = (Object.keys(sam.message)[0] === 'ephemeralMessage') ? sam.message.ephemeralMessage.message : sam.message
		global.batrei = global.batrei ? global.batrei : []
		samu330.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
		const content = JSON.stringify(sam.message)
		const from = sam.key.remoteJid
		const type = Object.keys(sam.message)[0]
		var tipe = 'Teks'
			if (type == 'imageMessage') {
				tipe = 'Imagen'
			} else if (type == 'stickerMessage') {
				tipe = 'Stiker'
			} else if (type === 'extendedTextMessage' && content.includes('imageMessage')) {
				tipe = 'etiqueta Imagen'
			} else if (type === 'extendedTextMessage' && content.includes('stickerMessage')) {
				tipe = 'etiqueta Stiker'
			} else if (type === 'extendedTextMessage' && content.includes('audioMessage')) {
				tipe = 'etiqueta Audio'
			} else if (type === 'extendedTextMessage' && content.includes('videoMessage')) {
				tipe = 'etiqueta Video'
			} else if (type === 'extendedTextMessage' && content.includes('conversation')) {
				tipe = 'etiqueta Texto'
			} else if (type === 'extendedTextMessage' && content.includes('productMessage')) {
				tipe = 'etiqueta Produvto'
			} else if (type === 'extendedTextMessage' && content.includes('documentMessage')) {
				tipe = 'etiqueta Documento'
			} else if (type === 'extendedTextMessage' && content.includes('orderMessage')) {
				tipe = 'etiqueta Pedido'
			} else if (type === 'extendedTextMessage' && content.includes('contactMessage')) {
				tipe = 'etiqueta Contacto'
			} else if (type === 'extendedTextMessage' && content.includes('imageMessage')) {
				tipe = 'etiqueta Locasion'
			} else if (type === 'extendedTextMessage' && content.includes('mentionedJid')) {
				tipe = 'Mencionar personas'
			} else if (type === 'extendedTextMessage' && content.includes('matchedText')) {
				tipe = 'Link'
			} else if (type == 'videoMessage') {
				tipe = 'Video'
			} else if (type == 'conversation') {
				tipe = 'Texto'
			} else {
				tipe = 'Aún no conocido'
			}
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		body = (type === 'conversation' && sam.message.conversation.startsWith(prefix)) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption.startsWith(prefix) ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption.startsWith(prefix) ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text.startsWith(prefix) ? sam.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		

		mess = {
			wait: '⌛ 𝐄𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐎 ⌛',
			success: '✔️ 𝙎𝙐𝙎𝙎𝙀𝙎 ✔️',
			error: {
				stick: '[❗] 𝙀𝙍𝙍𝙊𝙍 intentalo de nuevo, da error a la primera:D  ❌',
				Iv: '❌ Link invalido ❌'
			},
			only: {
    group: '[❗] ¡Este comando solo se puede usar en grupos! ❌',
    ownerG: '[❗] ¡Este comando solo puede ser utilizado por el creador del grupo! ❌',
    ownerB: '[❗] ¡Este comando solo puede ser utilizado por el creador del bot! ❌',
    admin: '[❗] ¡Este comando solo puede ser utilizado por administradores del grupo! ❌',
    Badmin: '[❗] ¡Este comando solo se puede usar cuando el bot es administrador! ❌',
    daftarB: `Hola, usa *${prefix}reg* para poder usar el bot`
  }
		}

		const botNumber = samu330.user.jid
		const samu = '```'
		const ownerNumber = ["52144447000377@s.whatsapp.net"] // ganti nomer lu yo
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? sam.participant : sam.key.remoteJid
		const totalchat = await samu330.chats.all()
		const groupMetadata = isGroup ? await samu330.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isBadWord = isGroup ? badword.includes(from) : false
		const isAntiMedia = isGroup ? antimedia.includes(from) : false
		const isAutoSt = isGroup ? autostick.includes(from) : false
		const isSimi = isGroup ? simi.includes(from) : false
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isRegister = checkRegisteredUser(sender)
		const isUrl = (url) => {
			return (new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		const reply = (teks) => {
			samu330.sendMessage(from, teks, text, { quoted: fimg, timestamp: 0, contextInfo: {"forwardingScore": 9999, "isForwarded": true, caption: '__', thumbnailJpg: './src/help.jpg'}})
		}
		const math = (teks) => {
				return Math.floor(teks)
			}
const fileurl = async(link, type) => {
 woy = await getBuffer(link)
 samu330.sendMessage(from, woy, type, {quoted:ftoko})
}
	//FAKE STATUS
	const fimg = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "imageMessage": { "mimetype": "image/jpeg","caption": '💓𝑆𝐴𝑀 𝑌 𝑃𝐸𝑅𝑅𝑌🔥\🐬NyanBot', 'jpegThumbnail': fs.readFileSync('./NyanBot.jpg')}}
	}
	const fdoc = {
	 key:
	 { fromMe: false,
	 participant: `5219984907794@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "documentMessage": { "title":"❣️𝓢𝓪𝓶 𝔂 𝓟𝓮𝓻𝓻𝔂,🔥", "caption":  "NyanBot,🐬" , 'jpegThumbnail': fs.readFileSync('./NyanBot.jpg')}}
	}
	const floc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"🔐Samu330⚡", "caption": "Adios😴" , 'jpegThumbnail': fs.readFileSync('./src/help.jpg')}}
	}
	const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title":"NyanBot","caption": '🔥❣️Sᥲm ყ Pᥱrrყ | NყᥲᥒBot🐬', 'jpegThumbnail': fs.readFileSync('./NyanBot.jpg')}}
	}	
	const fvid = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "videoMessage": { "title": "NyanBot","caption": '⚡🔥𝒮𝒶𝓂 𝓎 𝒫𝑒𝓇𝓇𝓎 | 𝒩𝓎𝒶𝓃ℬ𝑜𝓉💓', 'jpegThumbnail': fs.readFileSync('./src/fake.jpg')}}
	}
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
					"title": "➫𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🔥❣️" ,
					"description": "",
					"currencyCode": "SYP",
					"priceAmount1000": "-99",
					"retailerId": "NyanBot",
					"productImageCount": 999
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

		const sendMess = (hehe, teks) => {
			samu330.sendMessage(hehe, teks, text, {contextInfo: {"forwardingScore": 9999, "isForwarded": true}}, {quoted: ftoko
})
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : samu330.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": memberr } })
		}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		
			
			
		switch (command) {
				
				
				
case 'help':
case 'menu':
				runtime = process.uptime()
				teks = `${kyun(runtime)}`
const moment = require('moment-timezone')

const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')

let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				
				var num = sam.participant
				gambar = fs.readFileSync('./src/help.jpg')
				fakee = fs.readFileSync('./src/fake.jpg')
			
				isi = `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
🔐Hola *${pushname}* 
Hora: ${jmn}
Fecha: ${calender}
ٌ؞${samu} [ ${prefix} ]  Prefijo:${samu}✏️
ٌ؞${samu} Tiempo de actividad:${samu} *${kyun(uptime)}*🕐
ٌ؞${samu} Modo:${samu} *ON*✅
ٌ؞${samu} Grupo:${samu} *${groupName}*👥
ٌ؞${samu} Número de grupos:${samu} *${_registered.length}*⚡
ٌ؞${samu} Número de chats:${samu} *${totalchat.length}*🔥
ٌ؞${samu} Numero del Dueño wa.me/+529984907794${samu}🏆
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
	 ********************************
`
samu330.sendMessage(from, gambar, image, { quoted: ftoko, caption: isi, thumbnail: fakee, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
				
				
				
				
				
case 'reg':
if (isRegister) return reply('Tu cuenta ya estaba verificada')
const namaUser = `${pushname}`
const umurUser = `${sender}`
const serialUser = createSerial(20)
veri = sender
if (isGroup) {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  hasil = `〘  *Vericación* 〙
Código : *${serialUser}*
◦ *Nombre* : *${namaUser}*
◦ *Número* : *${sender.split("@")[0]}*
`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
} else {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  hasil = `〘  *Verificación* 〙
Código : *${serialUser}*
◦ *Nombre* : *${namaUser}*
◦ *Número* : *${sender.split("@")[0]}*
`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
}
tm = `verificación completa usa ${prefix}Menu para ver los comandos`
reply(tm)
break
				
				
				
				
				
				
				
				
				
				
			case 'hidetag1':
			case 'hidetag':
				if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? args.join(' ').trim() : `${args.join(' ')}`
					for (let mem of groupMembers) {
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true, MessageType.text)
				break
			
			case 'gcname':
				await samu330.groupUpdateSubject(from, `${args.join(' ')}`)
				samu330.sendMessage(from, `*「 CHANGE TO ${args.join(' ')} 」*`, MessageType.text)
				break
			case 'gcdesk':
				await samu330.groupUpdateDescription(from, `${args.join(' ')}`)
				samu330.sendMessage(from, `*「 CHANGE TO ${args.join(' ')} 」*`, MessageType.text)
				break
			case 'uptime':
				runtime = process.uptime()
				teks = `${kyun(runtime)}`
				
				samu330.sendMessage(from, `${teks}`, MessageType.text)
				break
			case 'pin':
				const papapale = args.join(' ')
				data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args.join(' ')}`, {method: 'get'})
				if (data.error) return reply(data.error)
				const amsulah = data.result
					const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
					thumb = await getBuffer(pimterest)
				samu330.sendMessage(from, mess.wait, MessageType.text, selepbot)
				samu330.sendMessage(from, thumb, image, { quoted: ftoko, caption: `- Pinterest : ` + papapale })
				break
			case 'fitnah':
				
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: split[0]
							}
						}
					}
				}
				samu330.sendMessage(from, `${split[1]}`, MessageType.text, target)
				break
			case 'fitnahpc':
				jids = `${targetprivate}@s.whatsapp.net` // nomer target
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const options = {
					contextInfo: {
						quotedMessage: {
							extendedTextMessage: {
								text: split[0]
							}
						}
					}
				}
				const responye = await samu330.sendMessage(jids, `${split[1]}`, MessageType.text, options)
				await samu330.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
				break
case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return samu330.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return samu330.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						samu330.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						samu330.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return samu330.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						samu330.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						samu330.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return samu330.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return samu330.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					samu330.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						samu330.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						samu330.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						samu330.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						samu330.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
			case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
				const linkgc = await samu330.groupInviteCode(from)
				samu330.sendMessage(from, `https://chat.whatsapp.com/${linkgc}`, text, {quoted:fdoc})
				break
				case 'join':
					samu330.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Succes Bergabung Dalam Group')
break
				
case 'playmp3':   
               var teks = encodeURIComponent(args.join(' '))
                 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-play?q=${args.join(' ')}`)
				  buffer = await getBuffer(anu.link)
				  ga = `Sedang Di Proses...`
				  samu330.sendMessage(from, ga, text, {quoted: ftoko})
				  samu330.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
				break
				case 'tiktok':
 reply('wait')
 pe = args.join(' ')
  anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${pe}`)
teks = `Nih Boss Videonya...`
					buffer = await getBuffer(`${anu.result}`)
					samu330.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ftoko, caption: teks})
					break
					case 'tiktok2':
 reply('wait')
 pe = args.join(' ')
  anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${pe}`)
teks = `Nih Boss Videonya...`
					buffer = await getBuffer(`${anu.result}`)
					samu330.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ftoko, caption: teks})
					break
case 'ig':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${pe}`)
 buf = await getBuffer(`${anu.result.video}`)
 samu330.sendMessage(from, buf, video, {quoted:ftoko, caption: `Nih Boss` })
 break
 case 'igtv':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/igtv/?url=${pe}`)
 buf = await getBuffer(`${anu.result.video_url}`)
 samu330.sendMessage(from, buf, video, {quoted:ftoko, caption: `Nih Boss` })
 break
 case 'lirik':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${pe}`)
 buf = await getBuffer(`${anu.result.lirik}`)
 samu330.sendMessage(from, buf, text, {quoted:ftoko })
 break
 case 'ytmp32':
 pe = args.join(' ')
 anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3?url=${pe}&apikey=apivinz`)
 buf = await getBuffer(`${anu.result.url_audio}`)
 samu330.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'ytmp3':
 pe = args.join(' ')
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 samu330.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'tiktokaudio':
 pe = args.join(' ')
 anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_audio?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 samu330.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'ssweb':
 pe = args.join(' ')
 anu = await getBuffer(`https://api-rull.herokuapp.com/api/ssweb?url=${pe}`)
 samu330.sendMessage(from, anu, image, {quoted: ftoko})
 break
 case 'ytmp42':
 pe = args.join(' ')
 anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${pe}&apikey=${zeks}`)
 buf = await getBuffer(`${anu.result.url_video}`)
 samu330.sendMessage(from, buf, video, {mimetype: 'video/mp4', quoted: ftoko})
 break
 case 'ytmp4':
 pe = args.join(' ')
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 samu330.sendMessage(from, buf, video, {mimetype: 'video/mp4', quoted: ftoko})
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
			case 'return':
				return samu330.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: fdoc})
				break
			case 'tomp3':
				samu330.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await samu330.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					samu330.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko})
						fs.unlinkSync(ran)
					   })
				break
			case 'getsticker':
			case 'gets':
				var itsme = `${numbernye}@s.whatsapp.net`
				namastc = args.join(' ')
				result = fs.readFileSync(`./media/sticker/${namastc}.webp`)
				samu330.sendMessage(from, result, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "${setting.name}", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
				break
			case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": setiker } })
				break
			case 'addsticker':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = args.join(' ')
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await samu330.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				samu330.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: ftoko })
				break
			case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya blokk!')
				svst = args.join(' ')
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await samu330.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				samu330.sendMessage(from, `Sukses Menambahkan  Vn\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: ftoko })
				break
			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = args.join(' ')
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await samu330.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				samu330.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: ftoko })
				break
			case 'getimage':
				namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				samu330.sendMessage(from, buffer, image, { quoted: ftoko, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'addvideo':
				svst = args.join(' ')
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await samu330.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				samu330.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: ftoko })
				break
			case 'getvideo':
				namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				samu330.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftoko })
				break
			case 'videolist':
			case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": videonye } })
				break
			case 'leave':
			   
				samu330.sendMessage(from, 'Byeeee kawann', MessageType.text)
				anu = await samu330.groupLeave(from, 'See you........', groupId)
				break
			case 'chatlist':
			case 'cekchat':
				samu330.updatePresence(from, Presence.composing)
				teks = `Total : ${totalchat.length}`
				samu330.sendMessage(from, teks, text, {quoted:fdoc})
				break

case 'speed':
 case 'ping':
				   case 'p':
				var groups = samu330.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = samu330.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await samu330.chats.all()
					var charge = charging ? 'true' : 'false'
					var listrik = charging ? '⚡' : ''
					const latensi = speed() - timestamp
					var total = math(`${groups.length}*${privat.length}`)
					teks = `*BOT STATISTICS:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${privat.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensi.toFixed(4)} _Second_\n*- Active Time :* ${kyun(uptime)}\n\n*PHONE STATISTICS:*\n*- Baterai :* ${JSON.stringify(baterai)}%${listrik}\n*- Charging Status :* ${charge}\n*- Penggunaan Ram :* ${ram2}\n*- Platform :* ${os.platform()}\n*- Hostname :* ${os.hostname()}\n*- Uptime :* ${kyun(os.uptime())}\n*- Wa Version:* ${samu330.user.phone.wa_version}\n*- Os Version:* ${samu330.user.phone.os_version}\n*- Device Manufacturer:* ${samu330.user.phone.device_manufacturer}\n*- Device Model:* ${samu330.user.phone.device_model}\n*- Os Build Number:* ${samu330.user.phone.os_build_number}`
					samu330.sendMessage(from, teks, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
			case '$':
				const cmd = args.join(' ')
				exec(cmd, (err, stdout) => {
					if (err) return samu330.sendMessage(from, `${err}`, text, { quoted: ftoko })
					if (stdout) {
						samu330.sendMessage(from, stdout, text, { quoted:ftoko})
					}
				})
				break
			case 'donasi':
			case 'sedekah':
				samu330.sendMessage(from, `*──「 DONATE 」──\n- Dana : 085742088184\n- Gopay : 08812904283\n\n*──「 SELF-BOT 」──* `, text, {quoted:fdoc})
			case 'blocklist':
				teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
				for (let block of blocked) {
					teks += `- @${block.split('@')[0]}\n`
				}
				teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": blocked } })
				break
			case 'ocr':
				if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					const media = await samu330.downloadAndSaveMediaMessage(encmedia)
					reply(mess.wait)
					await recognize(media, { lang: 'eng+ind', oem: 1, psm: 3 })
						.then(teks => {
							reply(teks.trim())
							fs.unlinkSync(media)
						})
						.catch(err => {
							reply(err.message)
							fs.unlinkSync(media)
						})
				} else {
					reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
				}
				break

			
				case 'batrei':
				 case 'battrey':
         let batreiNow = global.batrei[global.batrei.length - 1]
         samu330.sendMessage(from, `${batreiNow}%`, text)
         break
			case 'gtts':
			case 'tts':
				if (args.length < 1) return samu330.sendMessage(from, 'kode bahasa nya mna?', text, { quoted: ftoko })
				encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return samu330.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, { quoted: ftoko })
				dtt = args.join(' ')
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
					? reply('𝗜𝗱𝗶𝗵 𝗻𝗴𝗲𝗹𝘂𝗻𝗷𝗮𝗸 𝗻𝗴𝗲𝗻𝘁𝗼𝗱, 𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻 😤')
					: gtts.save(ranm, dtt, function () {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							samu330.sendMessage(from, buff, encmedia, audio, { quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
							fs.unlinkSync(rano)
						})
					})
				break
				
			case 'setprefix':
				prefix = args.join(' ')
				samu330.sendMessage(from, `Succes Mengganti Prefix : ${prefix}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
			case 'settarget':
				if (args.length < 1) return
				targetprivate = args[0]
				samu330.sendMessage(from, `Succes Mengganti target Private Fake Reply : ${targetprivate}`, text, {quoted:fdoc})
				break
			case 'tagall':
				members_id = []
				teks = (args.length > 1) ? args.join(' ').trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
					teks += `Mampus! @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
			case 'clearall':
				if (!isOwner) return reply('𝙡𝙪 𝙨𝙞𝙖𝙥𝙖 𝙩𝙤𝙙?')
				anu = await samu330.chats.all()
				samu330.setMaxListeners(25)
				for (let _ of anu) {
					samu330.deleteChat(_.jid)
				}
				reply('𝗰𝗹𝗲𝗮𝗿 𝗮𝗹𝗹 𝘀𝘂𝗸𝘀𝗲𝘀 𝘆𝗮𝗵 𝘁𝗼𝗱 :)')
				break
				case 'block':
					samu330.updatePresence(from, Presence.composing) 
				    samu330.blockUser (`${args.join(' ')}@c.us`, "add")
					samu330.sendMessage(from, `𝗦𝘂𝗸𝘀𝗲𝘀 𝗠𝗲𝗺𝗯𝗹𝗼𝗸𝗶𝗿`, text)
				break
				case 'unblock':
					samu330.updatePresence(from, Presence.composing) 
					samu330.blockUser (`${args.join(' ')}@c.us`, "remove")
					samu330.sendMessage(from, `𝗦𝘂𝗸𝘀𝗲𝘀 𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗶𝗿`, text)
				break 
			case 'leave':
				if (!isGroup) return reply(mess.only.group)
				samu330.samu330.leaveGroup(from, 'Cyaaa', MessageType.text)
				await samu330.samu330.leaveGroup(from, '𝗕𝘆𝗲𝗲', groupId)
				break
			case 'bc':
				if (args.length < 1) return reply('.......')
				anu = await samu330.chats.all()
				if (isMedia && !sam.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					buff = await samu330.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						samu330.sendMessage(_.jid, buff, image, { caption: `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${args.join(' ')}` })
					}
					reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
				} else {
					for (let _ of anu) {
						sendMess(_.jid, `*INFO NEW*\n\n${args.join(' ')}`)
					}
					reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
				}
				break
			case 'add':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Yang mau di add jin ya?')
				if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					samu330.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					return samu330.sendMessage(from, 'Diprivate asu:v', MessageType.text)
				}
				break
			case 'promote':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
				mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Perintah di terima, Promote :\n'
					for (let _ of mentioned) {
						teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					samu330.groupMakeAdmin(from, mentioned)
				} else {
					mentions(`Perintah di terima, Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
					samu330.groupMakeAdmin(from, mentioned)
				}
				break
			case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
				mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Perintah di terima, Demote :\n'
					for (let _ of mentioned) {
						teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					samu330.groupDemoteAdmin(from, mentioned)
				} else {
					mentions(`Perintah di terima, Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
					samu330.groupDemoteAdmin(from, mentioned)
				}
				break
			case 'listadmin':
				if (!isGroup) return reply(mess.only.group)
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
				no = 0
				for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
				}
				mentions(teks, groupAdmins, true)
				break
			case 'toimg':
					if (!isQuotedSticker) return reply('stickernya mana block!')
					reply('[ Wait ] Sabarr...')
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('itu sticker?')
						buffer = fs.readFileSync(ran)
						samu330.sendMessage(from, buffer, image, { caption: 'Done bruhh' })
						fs.unlinkSync(ran)
					});
				break
			case 'clone':
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('𝘁𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗰𝗹𝗼𝗻𝗲!!!')
				if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Tag cvk')
				mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let {jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
					pp = await samu330.getProfilePicture(id)
					buffer = await getBuffer(pp)
					samu330.updateProfilePicture(botNumber, buffer)
					mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
					reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
				}
				break
			case 'wait':
				if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
					reply(mess.wait)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					media = await samu330.downloadMediaMessage(encmedia)
					await wait(media).then(res => {
						samu330.sendMessage(from, res.video, video, { quoted: ftoko, caption: res.teks.trim() })
					}).catch(err => {
						reply(err)
					})
				} else {
					reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 𝗼𝗰𝗿')
				}
				break
				case 'modapk':
				case 'apkmod':
				case 'mod':
                   samu330.sendMessage(from, modapk(prefix), text, { quoted: ftoko })
                    break
					case 'kodenuklir':
						var itsme = `${numbernye}@s.whatsapp.net`
						var split = `${fake}`
						tod = await getBuffer(``)
					samu330.sendMessage(from, tod, image, { quoted: ftoko, caption: kodenuklir()})
					break
		     case 'nilai':
					case 'rate':
				rate = args.join(' ')
					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					samu330.sendMessage(from, 'Jawaban : '+ te+'%', text, { quoted: ftoko })
					break
					case 'kapankah':
					kapankah = args.join(' ')
							const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
							const koh = kapan[Math.floor(Math.random() * kapan.length)]
							samu330.sendMessage(from, 'Jawaban : '+ koh, text, { quoted: ftoko })
							break
				case 'dadu':
				kapankah = args.join(' ')
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					samu330.sendMessage(from, ule, text, { quoted: ftoko })
					break
					case 'quran':
				    anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					samu330.sendMessage(from, quran, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'hilih':
				if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://api.zeks.xyz/api/hilihmaker?text=${args.join(' ')}&apikey=${zeks}`, {method: 'get'})
					reply(anu.result)
					break
					case 'brainly':
                    brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*Pertanyaan:* ${Y.pertanyaan}\n\n*Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
					}
					samu330.sendMessage(from, teks, text, {quoted: ftoko})
                        console.log(res)
                    })
                
break
					// case by itsmeiky663
					case 'bass':     
               var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
									case 'vibra':     
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
									case 'vibrav':     
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
										samu330.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
})
					break
					case 'trigger':
					   encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await samu330.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
					// case by itsmeiky633
					
					
				case 'katailham':
				anu = await fetchJson(`https://api.shizukaa.xyz/bacotanilham?apikey=itsmeiky633`, {method: 'get'})
				kata = anu.result
				samu330.sendMessage(from, kata, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
				case 'asupan':
				reply(mess.wait)
                anu = await fetchJson(`https://api.shizukaa.xyz/asupan?apikey=itsmeiky633`)
                asup = await getBuffer(anu.result)
                samu330.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: ftoko, caption: 'Asupannya Tuan:v'}) 
                break
				case 'happymod':
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${args.join(' ')}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			samu330.sendMessage(from, buffer, image, {quoted: ftoko, caption: `${teks}`})
			break
			case 'moddroid':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${args.join(' ')}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			samu330.sendMessage(from, buffer, image, {quoted: ftoko, caption: `${teks}`})
			break
			case 'hek':
				var nn = args.join(' ')
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				imgbbb = require('imgbb-uploader')
				run = getRandom('.jpeg')
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				media = await samu330.downloadAndSaveMediaMessage(encmedia)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				samu330.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break
			
					case 'fakta':
                    gatauda = args.join(' ')
					anu = await fetchJson(`https://api-shizuka.herokuapp.com/fakta?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					break
					case 'bucin':
                    gatauda = args.join(' ')
					anu = await fetchJson(`https://api-shizuka.herokuapp.com/katacinta?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					break
					case 'katabijak':
	    			anu = await fetchJson(`https://api-shizuka.herokuapp.com/quotebijak?apikey=itsmeiky633`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					samu330.sendMessage(from, katabijak, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break 
					case 'ahegao':
				    try {
						res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						samu330.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break 
				case 'tebakgambar':
                anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					samu330.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					samu330.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					samu330.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					samu330.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					samu330.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: ftoko }) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'sideoppai':
				    try {
                    res = await fetchJson(`https://api-shizuka.herokuapp.com/pussy?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						samu330.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break 
					case 'apiteks':
				   if (args.length < 1) return reply('Teksnya mana um')
					love = args.join(' ')
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
                    reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${love}&apikey=${zeks}`, {method: 'get'})
					samu330.sendMessage(from, bufferxcz, image, {quoted: ftoko, caption: ' '+love})
					break
					case 'nsfwloli':
				    try {
				    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						samu330.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'WADOOOHHH'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break 
					case 'swm2':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels3 = args.join(' ')
  tels = tels3.split("/")[0];
 tels2 = tels3.split("/")[1];
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lol}&img=${anu.display_url}&package=${tels}&author=${tels2}`)
 samu330.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
					case 'nsfwwaifu':
				    try {
				    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						samu330.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					} 
					break
					
					case 'nsfwtrap':
				    try {
				    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						samu330.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					} 
					break
					case 'nsfwneko':
				    try {
				    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						samu330.sendMessage(from, buffer, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					break 
					case 'quotemaker':
                var gh = args.join(' ')
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					samu330.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: ftoko})
					break
					case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${args.join(' ')}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
				break
					case 'pastebin':
                  reply(mess.wait)
				paste = `${args.join(' ')}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})				
                   break 
				   case 'pantun':
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, {method: 'get'})
			samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
			break 
			case 'jamdunia':
	        reply(mess.wait)
		 jamdunia = `${args.join(' ')}`
			anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${lol}&kota=${jamdunia}`, {method: 'get'})
			wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
			samu330.sendMessage(from, wtime, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) 
			break
			case 'encbinary':
			encbinary = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'decbinary':
				decbin = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'pratebucin':
			case 'bucinrate':
			 if (args.length < 1) return reply('Mana Nama?')
				rate = args.join(' ')
				persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n Hadehhh🏃","74%\n\n bucen Teroosss","83%\n\n Sekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi/Pakgerl","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi/Pakgerl","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi/Pakgerl","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				samu330.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: ftoko })
				break  
				case 'kick':
				   if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						samu330.groupRemove(from, mentioned)
					} else {
						mentions(`Bye Bye Beban Grup@${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						samu330.groupRemove(from, mentioned)
					}
					break
				case 'infogempa':
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.map)
                   gempa = `•Lokasi *${anu.lokasi}*\n*• Waktu: *${anu.waktu}* \n*• Potensi: *${anu.potensi}*\n*• Magnitude: *${anu.magnitude}*\n*• Kedalaman: *${anu.kedalaman}*\n*• Koordinat: *${anu.koordinat}*`
                   samu330.sendMessage(from, buff, image, {quoted: ftoko, caption: gempa})
                   break 
				   case 'dorking':
			    dork = `${args.join(' ')}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					samu330.sendMessage(from, hasil, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'encode64':
				encode64 = `${args.join(' ')}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${lol}&type=encode&string=${encode64}`, {method: 'get'})
				samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'decode64':
			    decode64 = `${args.join(' ')}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${lol}&type=decode&string=${decode64}`, {method: 'get'})
					samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'decode32':
				decode32 = `${args.join(' ')}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${lol}&type=decode&string=${decode32}`, {method: 'get'})
					samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'encode32':
				encode32 = `${args.join(' ')}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${lol}&type=encode&string=${encode32}`, {method: 'get'})
					samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'encoctal':
				encoc = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'decoctal':
				decoc = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break  
				case 'becrypt':
				becry = `${args.join(' ')}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${lol}&string=${becry}`, {method: 'get'})
				samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break 
					case 'hashidentifier':
					hash = `${args.join(' ')}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  samu330.sendMessage(from, hasilhash, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					  break 
					  case 'jadwaltv':
                reply(mess.wait)
                jadwaltv = `${args.join(' ')}`
                anu = await fetchJson(`https://api.zeks.xyz/api/?channel=${jadwaltv}&apikey=${zeks}`, {method: 'get'})
                jtv = `${anu.result}`
                samu330.sendMessage(from, jtv, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
               	break
				   case 'darkjokes':
				samu330.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				 data = fs.readFileSync('./sticker/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 samu330.sendMessage(from, darkjokes, image, {quoted: ftoko, caption: '...`'})
				break
				case 'quotes':
				samu330.updatePresence(from, Presence.composing) 
				  data = fs.readFileSync('./sticker/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 samu330.sendMessage(from, randQuote, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'mimpi':
			    anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${args.join(' ')}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${args.join(' ')}* Adalah:\n${anu.result.hasil}`
			        samu330.sendMessage(from, mimpi, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) 
			       	break
					   case 'miku':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					samu330.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: ftoko })
					break
					case 'pinterest':
					case 'pin':
					 reply('wait..')
					 anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args.join(' ')}`, {method: 'get'})
					 mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					samu330.sendMessage(from, nye, image, { caption: 'Pinterest', quoted: ftoko })
					break
					case 'kurumi':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					samu330.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: ftoko }) 
					break 
					case 'itori':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					samu330.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: ftoko })
					case 'sasuke':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					samu330.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: ftoko })
					break 
				case 'sakura':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					samu330.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: ftoko })
					break 
 				case 'toukachan':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					samu330.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: ftoko })
					break 
				case 'rize':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					samu330.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: ftoko })
					break 
				case 'akira':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					samu330.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: ftoko })
					break 
					case 'anime':
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					reply(mess.wait)
					pok = await getBuffer(anu.result)
					samu330.sendMessage(from, pok, image, { quoted: ftoko , caption: 'nihhh'})
					break  
				case 'naruto':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					samu330.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: ftoko })
					break 
				case 'minato':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					samu330.sendMessage(from, nye, image, { caption: 'minato!!', quoted: ftoko })
					break 
				case 'boruto':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					samu330.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: ftoko })
					break 
				case 'hinata':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					samu330.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: ftoko })
					break
					case 'levi':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=levi+ackerman`, {method: 'get'})
					levi = JSON.parse(JSON.stringify(anu));
					ackerman =  levi[Math.floor(Math.random() * levi.length)];
					nye = await getBuffer(ackerman)
					samu330.sendMessage(from, nye, image, { caption: 'levi!!', quoted: ftoko })
					break
					case 'eren':
				reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=eren+yeager`, {method: 'get'})
					er = JSON.parse(JSON.stringify(anu));
					en =  er[Math.floor(Math.random() * er.length)];
					nye = await getBuffer(en)
					samu330.sendMessage(from, nye, image, { caption: 'eren!!', quoted: ftoko })
					break
					case 'kodenuklir2':
					anu = await getBuffer(`https://i.ibb.co/qm1qjdD/images-2020-12-28-T142307-987.jpg`)
					samu330.sendMessage(from, image, { quoted: ftoko, caption: kodenuklir2()})
					break
					case 'ttp':
				res = await getBase64(anu.base64)
				samu330.sendMessage(from, res, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
case 'bitly':
				samu330.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args.join(' ')}&apikey=BotWeA`)
                hasil = `link : ${args.join(' ')}\n\nOutput : ${data.result}`
                reply(hasil)
                //
                break
case 'tempo':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
				case 'tempo-v':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
})
				break
				case 'mfire':
				   var teks = args.join(' ')
				samu330.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=${zeks}&url=${teks}`)
                hasil = `link : ${teks}\n\nMediafire : ${data.result}`
                reply(hasil)
                //
                break
                case 'surl':
				samu330.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${args.join(' ')}&apikey=${zeks}`)
                hasil = `link : ${args.join(' ')}\n\nMediafire : ${data.result}`
                reply(hasil)
                //
                break
                case 'run':
                
                sy = args.join(' ')
                return eval(sy)
               
break
case '>':
var konsol = args.join(' ')
function sendResult(sul) {
var sat = JSON.stringify(sul, null, 2)
var bang = util.format(sat)
return reply(bang)
}
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
break
case 'fast':
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break

			  
			case 'ingfo':
				samu330.sendMessage(from, `\n❁۪۪ AUTHOR : Ivan-MLN\n❁۪۪ PREFIX : [ ${prefix}]\n❁۪۪ ${setting.fake} BY : ./Z-IvanMLN`, text, { quoted: { key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Ingfo?", 'jpegThumbnail': fs.readFileSync('./src/image/Ivan.jpg')}}}})

break
								case 'kicktime':
					if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 samu330.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`OTW BOS KU , SIAP BRO? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 samu330.sendMessage(from, 'GAPAKE LAMA LANGSUNG GW KICK AJA !', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 samu330.sendMessage(from, 'BYE BYE', text, { quoted: ftoko }) // ur cods
					}, 0) // 1000 = 5s,
					}
					break
					case 'tiktod':
					var gh = args.join(' ')
					var gli = gh.split("|")[0];
					var tch = gh.split("|")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext test|test`)
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					samu330.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					//
					break
						case 'gemes':
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break
						case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break
					case 'hek':
				samu330.sendMessage(from, 'https://www.nasa.gov', text, {thumbnail: fs.readFileSync('./src/Ivan.jpg'), matchedText: 'https://kontlo'})
			    break
			    case 'harrypotter':
				ween = args.join(' ')
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(ind.wait())
				buffer = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${ween}`)
		    samu330.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
		    break
		    case 'cmd':
	var teks = encodeURIComponent(args.join(' '))
				if (!teks) return samu330.sendMessage(from,  msgType.text, { quoted: ftoko })
var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/cmd?code=${teks}`)
samu330.sendMessage(from, buffer, image)
break
case 'sideshow':
	var teks = encodeURIComponent(args.join(' '))
				if (!teks) return samu330.sendMessage(from,  'textnya mana', MessageType.extendedText, { quoted: ftoko })
var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/photooxy/slideshow?text=${teks}`)	
samu330.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftoko})
				break
				break


				case 'sideshow2':
	var teks = encodeURIComponent(args.join(' '))
				if (!teks) return samu330.sendMessage(from,  'textnya mana', MessageType.extendedText, { quoted: ftoko })
var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/photooxy/slideshow?text=${teks}&style2`)	
samu330.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftoko})
				break
				                                
				                                
				
				case 'ffname':
				 var anunya = encodeURIComponent(args.join(' '))
anunye = await fetchJson(`http://api.lolhuman.xyz/api/freefire/${anunya}?apikey=${lol}`)
nganu = `❒ *Nickname :* ${anunye.result}
❒ *UID :* ${anunya}`
samu330.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'lolhumancek':
   case 'ceklolkey':
 anunye = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${args.join(' ')}`)
nganu = `❒ *Username :* ${anunye.result.username}
❒ *Sisa Limit :* ${anunye.result.requests}
❒ *Type :* ${anunye.result.account_type}
❒ *Expired :* ${anunye.result.expired}` 
samu330.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'mylolkey':
 anunye = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${args.join(' ')}`)
nganu = `❒ *Username :* ${anunye.result.username}
❒ *Sisa Limit :* ${anunye.result.requests}
❒ *Type :* ${anunye.result.account_type}
❒ *Expired :* ${anunye.result.expired}` 
samu330.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'attp':
					if (args.length < 1) return reply('Textnya mana gan?')
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					samu330.sendMessage(from, attp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'forward':
					 case 'fw':
samu330.sendMessage(from, `${args.join(' ')}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
            				case 'welcome':
					if (args.length < 1) return reply('1=on & 2=off')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Welcome Sudah Aktif')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Berhasil Mengaktifkan Fitur Welcome')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Berhasil Mematikan Fitur Welcome')
					}
					break
					case 'cm':
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} "origin(rgb24).png" -c:v libx264 -preset placebo -qp 0 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv444p10le -sws_flags spline+accurate_rnd+full_chroma_int -vf "colormatrix=bt470bg:bt709" -color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 "colormatrix_yuv444p10le.avi" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
					})
					break
					
               case 'del':
               case 'd':
               samu330.deleteMessage(from, { id: sam.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
               case 'wasted':
					var imgbb = require('imgbb-uploader')
					if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
						reply(mess.wait);
						owgi = await samu330.downloadAndSaveMediaMessage(ger);
						anu = await imgbbuploader('20a14861e4f7591f3dc52649cb07ae02', owgi);
						teks = `${anu.display_url}`;
						anu1 = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${teks}`);
						fs.writeFileSync('wasted.jpg', anu1)
						samu330.sendMessage(from, fs.readFileSync('wasted.jpg'), MessageType.image)
					} else {
						reply('Gunakan foto!');
					}
					break
					
					
               case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)

  anu = await imgbb(`${imgbb_key}`, owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Di Cari Orang Gila&text2=Hub : 08812904283`)
 samu330.sendMessage(from, hehe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
}
break
case 'draw':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'ocean':

var imgbb = require('imgbb-uploader')

if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
				case 'ss2':
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${args.join(' ')}`
					reply(mess.wait)
					anu = await fetchJson(`https://api-rull.herokuapp.com/api/ssweb?url=${teks}`)
					ssweb = await getBuffer(anu.result)
					samu330.sendMessage(from, ssweb, image, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break 
case 'skets':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break

case 'fire':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/burning-fire?url=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'gtav':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'gtavpp':
var imgbb = require('imgbb-uploader')
if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Siap Boss')

					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]

						pp = await samu330.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
  anu = await imgbb(`${imgbb_key}`,buffer)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

break
case 'invert':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=freeKeY`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'tovid':
 case 'tomp4':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.StickerMessage || isQuotedSticker) && args.length == 0) {
  ted = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
case 'old':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/greyscale?url=${anu.display_url}&apikey=freeKeY`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'stik':
 case 's':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, sticker, {quoted: fdoc, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'scircle':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpwround?apikey=${lol}&img=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
 case 'swm':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lol}&img=${anu.display_url}&package=${setting.package_name}&author=${setting.author}`)
 samu330.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'swm2':
                    if ((isMedia && !sam.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} samu330|Rapayee`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await samu330.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            samu330.sendMessage(from, ini_buff, sticker, { quoted: ftoko }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
case 'nobg':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  satu = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${anu.display_url}`)
 samu330.sendMessage(from, satu, image, {quoted: fdoc, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'cg':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case '8bit':
if (args.length < 1) return reply(`Contoh: ${prefix}8bit samu330/bot`)
ds = `${args.join(' ')}`
tex1 = ds.split("|")[0];
tex2 = ds.split("|")[1];
reply(mess.wait)
brikff = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tex1}&text2=${tex2}`, {method: 'get'})
samu330.sendMessage(from, brikff, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'burnpaper':
if (args.length < 1) return reply(`Contoh: ${prefix}burnpaper samu330`)
todi = args.join(' ')
reply(mess.wait)
pper = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`)
samu330.sendMessage(from, pper, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'glowneon':
if (args.length < 1) return reply(`Contoh: ${prefix}glowneon samu330`)
tekas = args.join(' ')
reply(mess.wait)
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
samu330.sendMessage(from, glown, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'gsuggest':
if (args.length < 1) return reply(`Contoh: ${prefix}gsuggest samu330/bot/wea`)
du = `${args.join(' ')}`
ted1 = du.split("|")[0];
ted2 = du.split("|")[1];
ted3 = du.split("|")[2];
reply(mess.wait)
sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
samu330.sendMessage(from, sugetg, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'candlemug':
if (args.length < 1) return reply(`Contoh: ${prefix}candlemug samu330`)
ddu = args.join(' ')
reply(mess.wait)
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
samu330.sendMessage(from, clmug, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

case 'lovemss':
if (args.length < 1) return reply(`Contoh: ${prefix}lovemss samu330`)
lop = args.join(' ')
reply(mess.wait)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
samu330.sendMessage(from, lepms, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'mugflower':
if (args.length < 1) return reply(`Contoh: ${prefix}mugflower samu330`)
mug = args.join(' ')
reply(mess.wait)
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
samu330.sendMessage(from, mflowg, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'narutobanner':
if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner samu330`)
nar = args.join(' ')
reply(mess.wait)
narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
samu330.sendMessage(from, narba, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'paperglass':
if (args.length < 1) return reply(`Contoh: ${prefix}paperglass samu330`)
papg = args.join(' ')
reply(mess.wait)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
samu330.sendMessage(from, gelas, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'romance':
if (args.length < 1) return reply(`Contoh: ${prefix}romance samu330`)
roce = args.join(' ')
reply(mess.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
samu330.sendMessage(from, roma, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'shadow':

if (args.length < 1) return reply(`Contoh: ${prefix}shadow samu330`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`)
samu330.sendMessage(from, shan, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

case 'ga':

if (args.length < 1) return reply(`Contoh: ${prefix}shadow samu330`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/gradientavatar?text=${sdow}`)
samu330.sendMessage(from, shan, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'gr':



if (args.length < 1) return reply(`Contoh: ${prefix}shadow samu330`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/glowrainbow?text=${sdow}`)
samu330.sendMessage(from, shan, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'chat':
nonya = args.join(' ')
teksnya = nonya.split("|")[0];
samu330.sendMessage(`${nonya}@s.whatsapp.net`, `${teksnya}`, text)
break
case 'glitch':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}glitch samu330/bot`)
gl = `${args.join(' ')}`
gel1 = gl.split("|")[0];
gel2 = gl.split("|")[1];
reply(mess.wait)
litsh = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, {method: 'get'})
samu330.sendMessage(from, litsh, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'rw':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}glitch samu330/bot`)
gl = `${args.join(' ')}`
gel1 = gl.split("|")[0];
gel2 = gl.split("|")[1];
gel3 = gl.split("|")[2];
reply(mess.wait)
litsh = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/retro-wave?text1=${gel1}&text2=${gel2}&text3=${gel3}&font=2`, {method: 'get'})
samu330.sendMessage(from, litsh, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'rw2':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}glitch samu330/bot`)
gl = `${args.join(' ')}`
gel1 = gl.split("|")[0];
gel2 = gl.split("|")[1];
gel3 = gl.split("|")[2];
reply(mess.wait)
litsh = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/retro-wave?text1=${gel1}&text2=${gel2}&text3=${gel3}&font=2&bg=3`, {method: 'get'})
samu330.sendMessage(from, litsh, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
case 'ss':
var p = args.join(' ')
pe = await getBuffer(`https://api-rull.herokuapp.com/ssweb?url=${p}`)
samu330.sendMessage(from, pe, image, text, { mimetype: 'image/jpg', quoted: ftoko})
break
case 'coffe':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}coffe samu330`)
kop = args.join(' ')
reply(mess.wait)
ppi = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`)
samu330.sendMessage(from, ppi, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'candy':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}candy samu330`)
cndy = args.join(' ')
reply(mess.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy/?text=${cndy}`)
samu330.sendMessage(from, prmen, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'candy':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}candy samu330`)
teks = args.join(' ')
reply(mess.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${teks}`)
samu330.sendMessage(from, prmen, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'smoke':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}candy samu330`)
teks = args.join(' ')
reply(mess.wait)
prmen = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${teks}`)
samu330.sendMessage(from, prmen, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'hpotter':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}hpotter samu330`)
hpter = args.join(' ')
reply(mess.wait)
helpter = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpter}`)
samu330.sendMessage(from, helpter, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'woodblock':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}woodblock samu330`)
woblk = args.join(' ')
reply(mess.wait)
gblok = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`)
samu330.sendMessage(from, gblok, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'gbutton':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}woodblock samu330`)
woblk = args.join(' ')
reply(mess.wait)
gblok = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${woblk}&apikey=${zeks}`)
samu330.sendMessage(from, gblok, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'sbutton':
//
//
if (args.length < 1) return reply(`Contoh: ${prefix}woodblock samu330`)
woblk = args.join(' ')
reply(mess.wait)
gblok = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${woblk}&apikey=${zeks}`)
samu330.sendMessage(from, gblok, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
                    break
                    case 'upstatus':
                     q = args.join(' ')
				samu330.sendMessage('status@broadcast', `${q}`, extendedText)
				samu330.sendMessage(from, `Sukses!`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Sucess!", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})

break
case 'readallchat':
   case 'readall':
      case 'rall':
				const readallid = await samu330.chats.all()
			samu330.setMaxListeners(25)
				for (let xyz of readallid) {
					await samu330.chatRead(xyz.jid)
				}
		      samu330.sendMessage(from, `Sukses!`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Berhasil membaca semua chat!", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
break
                                       case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				       break 
				       case 'getpic':
					if (args.length < 1) return 
					if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await samu330.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						samu330.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
						samu330.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
					case 'hack':
				var nn = args.join(' ')
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				imgbbb = require('imgbb-uploader')
				run = getRandom('.jpeg')
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				media = await samu330.downloadAndSaveMediaMessage(encmedia)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				samu330.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break
case 'toaudio':
			samu330.updatePresence(from, Presence.composing)
				if (!isQuotedAudio)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await samu330.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					samu330.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko})
				})
				break
				case 'tovn':
				samu330.updatePresence(from, Presence.composing)
				if (!isQuotedAudio)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await samu330.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					samu330.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				})
				break
				
				case 'tovn-v':
				samu330.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await samu330.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					samu330.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				})
				break
				case 'public':
				case 'publik':
				   publik = true
				samu330.sendMessage(sam.key.remoteJid, `「 *PUBLIC-MODE* 」`, MessageType.text, { quoted:ftoko})
			break
				case 'self':
				   publik = false
				samu330.sendMessage(sam.key.remoteJid, `「 *SELF-MODE* 」`, MessageType.text, { quoted:ftoko})
			break
				case 'toaudio':
				samu330.updatePresence(from, Presence.composing)
				if (!isQuotedAudio) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await samu330.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
samu330.sendMessage(from, buffer, audio, { mimetype: 'ptt', quoted: ftoko, duration:99999999999999999999999})
						fs.unlinkSync(ran)

					   })
				break
				case 'setthumbreply':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const thumbreply = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downreply = await samu330.downloadMediaMessage(thumbreply)
				fs.unlinkSync(`./src/Ivan.jpg`)
				fs.writeFileSync(`./src/Ivan.jpg`, downreply)
			samu330.sendMessage(from, `Berhasil Mengganti Thumbnail Reply`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Sucess", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
break
case 'setthumbmenu':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const thumbmenu = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downmenu = await samu330.downloadMediaMessage(thumbmenu)
				fs.unlinkSync(`./src/help.jpg`)
				fs.writeFileSync(`./src/help.jpg`, downmenu)
				anu = fs.readFileSync('./src/help.jpg')
				anuu = fs.readFileSync('./src/fake.jpg')
				samu330.sendMessage(from, anu, image, { quoted:ftoko, caption: `Berhasil Mengubah Thimbnail Menu`, thumbnail: anuu})
break
case 'setfakethumb':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const fakethumb = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downfake = await samu330.downloadMediaMessage(fakethumb)
				fs.unlinkSync(`./src/fake.jpg`)
				fs.writeFileSync(`./src/fake.jpg`, downfake)
				anu = fs.readFileSync('./src/fake.jpg')
				samu330.sendMessage(from, anu, image, { quoted:ftoko, caption: `Berhasil Mengubah FakeThumb`})
break
case 'getvn':
 namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				samu330.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
 break
			default:
					samu330.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		console.log('battrey ' + batterylevel)
					})
					console.log(color('@Isamu330z_', 'yellow'), color(sender.split('@')[0]))
		}
		
	} catch (e) {
		console.log('%s', color(e, 'red'))
		// console.log(e)
	}
})

/*
INI SC GW
PANGGIL AJA Isamu33Z
GW GAK JAGO BANGET TAPI SETIDAK NYA
UDAH PAKE BASE SENDIRI
YANG BILANG GW PAKE BASE MBB,
SAMA AJA LU KAGA NGEHARGAIN GW
INI CASE SAYA BUAT DENGAN PENUH KE IKHLASAN
UDAH SEGITU AJA, INI TQTO JAN DI HAPUS


THANKS TO :
- ANU TEAM
- DAN ORANG² BAIK YG UDAH KASIH GW SC+CODE
*/
