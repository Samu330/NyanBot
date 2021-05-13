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
const crypto = require('crypto')
const simi = JSON.parse(fs.readFileSync('./src/simi.json'))
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))

//Settings
publik = true
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
				
samu330.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await samu330.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
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
		pushnem = sam.key.fromMe ? samu330.user.name : conts.notify || conts.vname || conts.name || '-'

} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await samu330.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#00FFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Bienvenido a ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			samu330.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `😙Hola, @${num.split('@')[0]}, _*Bienvenido a ${mdata.subject}, esperamos que te la pases a gusto en este grupo✨*_\n_Recuerda siempre seguir las reglas y mantener una formalidad respetuosa_😉\nSon las *${jm}* del *${calender}*\n${mdata.desc}`, contextInfo: { mentionedJid: [num] }})
			})
			//leave
		}  else if (anu.action == 'remove') {
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
			budy = (type === 'conversation') ? hurtz.message.conversation : (type === 'extendedTextMessage') ? hurtz.message.extendedTextMessage.text : ''
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
		var pes = (type === 'conversation' && sam.message.conversation) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text ? sam.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()

		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		

		mess = {
			wait: '⌛ 𝐄𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐎 ⌛',
			success: '✔️ 𝙎𝙐𝙎𝙎𝙀𝙎 ✔️',
			nsfw: '𝗟𝗼 𝘀𝗶𝗲𝗻𝘁𝗼 𝗽𝗲𝗿𝗼 𝗻𝗼 𝗽𝘂𝗲𝗱𝗼 𝗲𝗷𝗲𝗰𝘂𝘁𝗮𝗿 𝗲𝘀𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼, 𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼 𝗻𝗼 𝗽𝗲𝗿𝗺𝗶𝘁𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼 +𝟭𝟴\n*PARA ACTIVAR LOS COMANDOS +18, USA:* .+18 1', 
			ferr: 'Intentalo de nuevo mas tarde',
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
		const conts = sam.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || { notify: jid.replace(/@.+/, '') }
		const pushname = sam.key.fromMe ? samu330.user.name : conts.notify || conts.vname || conts.name || '-'
		const isUrl = (url) => {
			return (new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		const reply = (teks) => {
			samu330.sendMessage(from, teks, text, { quoted: sam, timestamp: 0, contextInfo: {"forwardingScore": 9999, "isForwarded": true, caption: '__', thumbnailJpg: './src/help.jpg'}})
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
}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : samu330.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": memberr } })
		}

		
		
		
		
		//autoStiker By Samu330
if (isGroup && isAutoSt && !soyYoxd) {
if (isMedia && !sam.message.videoMessage || isQuotedImage) {           
	if (!soyYoxd) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam       
	const media = await samu330.downloadAndSaveMediaMessage(encmedia) 
	ran = getRandom('.webp')           
	await ffmpeg(`./${media}`)      
		.input(media)       
		.on('start', function (cmd) {      
			console.log(`Started : ${cmd}`)     
		})                    
		.on('error', function (err) {           
			console.log(`Error : ${err}`)        
			fs.unlinkSync(media)                 
			reply(mess.error.stick)                 
		})                                           
		.on('end', function () {                  
			console.log('Finish')               
			exec(`webpmux -set exif ${addMetadata('Auto-St-By-Samu330-Sam-y-Perry')} ${ran} -o ${ran}`, async (error) => {                                      
				if (error) return reply(mess.error.stick)
                                                                        samu330.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fdoc, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})    
									reply(mess.success)       
									fs.unlinkSync(media)       
									fs.unlinkSync(ran)          
									})                       
							})
                                                        .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
						  	.save(ran)
                                        }
}
}










			if (isGroup && isBotGroupAdmins && isBadWord) {
                        if (bad.includes(messagesC)) {
                                if (!isGroupAdmins) { 
                                        samu330.updatePresence(from, Presence.composing)
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                        reply(`Lo siento ${sender.split("@")[0]}, pero aqui no se permiten las malas palabras, serás expulsado en 5 segundos`)
                        setTimeout( () => {
                                samu330.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
                        }, 5000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("1 segundo")
                        }, 4000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("2 segundos")
                        }, 3000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("3 segundos")
                        }, 2000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("4 segundos")
                        }, 1000)
                        setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("5 segundos")
                        }, 0)
				}
			}
		}
			if (isGroup && isBotGroupAdmins && isAntiMedia && !soyYoxd) {         
				if (isMedia && !sam.message.videoMessage || isQuotedImage) {
					if (!isGroupAdmins) {
                                        samu330.updatePresence(from, Presence.composing)
						var kic = `${sender.split("@")[0]}@s.whatsapp.net`     
			reply(`Lo siento ${sender.split("@")[0]}, pero aqui no se permiten las fotos ni videos, *serás expulsado por seguridad:D*`)
				samu330.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})       
					}        
				}      
			}
			if (isGroup && isBotGroupAdmins && isAntiMedia && !soyYoxd) {
				if (isMedia && sam.message.videoMessage) {
                                        if (!isGroupAdmins) {
                                        samu330.updatePresence(from, Presence.composing)
                                                var kic = `${sender.split("@")[0]}@s.whatsapp.net`     
						reply(`Lo siento ${sender.split("@")[0]}, pero aqui no se permiten las fotos ni videos, *serás expulsado por seguridad:D*`)
                                samu330.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})                                               
					}
				}
			}
				
		
			 if (messagesC.includes("https://")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Tienes suerte, eres admin y no te sacaré')
		        samu330.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin recebido")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link detectado ${sender.split("@")[0]} serás expulsado en 5 segundos`)
		        setTimeout( () => {
			        samu330.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("1 segundo")
		        }, 4000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
		                reply("2 segundos")
		        }, 3000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("3 segundos")
		        }, 2000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("4 segundos")
		        }, 1000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("5 segundos")
			}, 1000)
			setTimeout( () => {
                                samu330.updatePresence(from, Presence.composing)
                                reply("Adios:D")
		        }, 0)
	        }
	
	
	            if (messagesC.includes("www.")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Tienes suerte, eres admin y no te sacaré')
		        samu330.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin recebido")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link detectado ${sender.split("@")[0]} serás expulsado en 5 segundos`)
		        setTimeout( () => {
			        samu330.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("1 segundo")
		        }, 4000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
		                reply("2 segundos")
		        }, 3000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("3 segundos")
		        }, 2000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("4 segundos")
		        }, 1000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("5 segundos")
		        }, 0)
	        }
		
		
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		colors = ['red','white','black','blue','yellow','green']

//*********Console log chats
			if (!isGroup && isCmd) console.log('\x1b[1;32m>', time, color(command), 'from', color(pushname), 'args :', (args.length))
			
//*********Console log grupos
			if (isCmd && isGroup) console.log('\x1b[1;32m>', time, color(command), 'from', (groupName), 'args :', color(args.length))

		

			function addMetadata(packname) {	
				if (!packname) packname = 'WABot';	
				let name = `${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
		

if(budy.match('bot')){
rm = [
result = fs.readFileSync(`./temp/Samu.webp`)
]
nk = rm[Math.floor(Math.random() * rm.length)]
  samu330.sendMessage(from, nk, sticker, {
quoted: fimg, "forwardingScore": 9999, "isForwarded": true
  })
}
		
		
		
switch(is) {
  case 'buenos':
buf = fs.readFileSync(`./temp/audio/wenas.mp3`)
samu330.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: fliveLoc, duration :-999999999999999, ptt: true
})
}

switch(is) {
  case 'test':
buf = fs.readFileSync(`./temp/audio/oni.mp3`)
samu330.updatePresence(from, Presence.composing)
reply(`Hola *${pushname}*, aqui andamos, mi velocidad de respueta es de: _${process.uptime()}_ milisegundos`)
samu330.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: fliveLoc, duration :9999999999999999999999999, ptt: true
}) 
break
}		
			
		switch (command) {
				
				
				
case 'help':
case 'menu':

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
				foto = fs.readFileSync('./src/help.jpg')
				fakee = fs.readFileSync('./src/fake.jpg')
				let bateryNow = global.batrei[global.batrei.length - 1]
  samu330.updatePresence(from, Presence.recording)
  if (!isRegister) return reply(mess.only.daftarB)
  uptime = process.uptime()
			
				menu = `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
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
${samu}◦ 🔋Nivel de bateria:${samu} *${bateryNow}*
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
	 ********************************
`
samu330.sendMessage(from, foto, image, { quoted: ftoko, caption: menu, thumbnail: fakee, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
	
case 'menu1':
	samu330.updatePresence(from, Presence.recording)
  if (!isRegister) return reply(mess.only.daftarB)
  uptime = process.uptime()
const Menum = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                
🔐Hola *${pushname}* 
⍣ *BOT INFO* ⍣
*USA: ${prefix}ping* o *test*
Para saber y verificar si el bot esta activo.
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	      🌸 SamịPerry.li 🌸
 ********************************
${bodyM} ${prefix}imagen *(Busca imagenes de pinterest)*
${bodyM} ${prefix}anime
${bodyM} ${prefix}queanime
${bodyM} ${prefix}url2img
${bodyM} ${prefix}tourl *(Etiqueta una imagen)*
${bodyM} ${prefix}getpic @participante
${bodyM} ${prefix}ss _(Link)_ *(Captura de pantalla de un link)*
${bodyM} ${prefix}wp
${bodyM} ${prefix}loli
${bodyM} ${prefix}neko
${bodyM} ${prefix}twit
${bodyM} ${prefix}cyberpunk
${bodyM} ${prefix}letra *(Letra de una cancion)*
${bodyM} ${prefix}acordes *(Acordes de una cancion)*
`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menum, text, {
	  quoted: fakeProduct})              
  break

case 'menu2':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  uptime = process.uptime()
const Menus = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ********************************
${bodyM} ${prefix}sticker *(Imagen, video o gif)*
${bodyM} ${prefix}sticker nobg *(Etiqueta una foto para crear un sticker sin fondo)*
${bodyM} ${prefix}autostick
${bodyM} ${prefix}toimg
${bodyM} ${prefix}attp
${bodyM} ${prefix}ttp 
`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menus, text, {
quoted: fvid})              
  break
case 'menu3':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  uptime = process.uptime()
const Menug = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*
⍣ *BOT INFO* ⍣
${samu}◦ 🌐Navegador :${samu} *${samu330.browserDescription[1]}*
${samu}◦ 📡servidor :${samu} *${samu330.browserDescription[0]}*
${samu}◦ ✅version :${samu} *${samu330.browserDescription[2]}*
${samu}◦ 🚄Velocidad :${samu} *${process.uptime()}*
${samu}◦ 📲Sistema operativo :${samu} *${samu330.user.phone.device_manufacturer}*
${samu}◦ 🪀version de${samu} *WhatsApp* : *${samu330.user.phone.wa_version}*
${bodyM} ${samu}${prefix}antilink${samu}
${bodyM} ${samu}${prefix}antimedia${samu}
${bodyM} ${samu}${prefix}antibad${samu}
${bodyM} ${samu}${prefix}autost${samu}
${bodyM} ${samu}${prefix}antidelete${samu}
${bodyM} ${prefix}+18 1/0
*Para que el bot entre a tu grupo, usa el siguiente comando:*
	${prefix}entrabot *(Link del grupo)*
${bodyM} ${prefix}abrir
${bodyM} ${prefix}cerrar
${bodyM} ${prefix}leave
${bodyM} ${prefix}setdesc
${bodyM} ${prefix}setname
${bodyM} ${prefix}adminlist
${bodyM} ${prefix}setpic
${bodyM} ${prefix}enlinea
${bodyM} ${prefix}promote
${bodyM} ${prefix}demote
${bodyM} ${prefix}eliminar
${bodyM} ${prefix}añadir *(Numero sin el +)*
${bodyM} ${prefix}notif
${bodyM} ${prefix}reply @miembro|frase|frase
${bodyM} ${prefix}link
`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menug, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "➫𝑴𝒆𝒏𝒖 𝑫𝒆 𝑮𝒓𝒖𝒑𝒐𝒔\n❣️⃞🔥𝙎꯭𝙖͠𝙢꯭ 𝙔 ꯭𝙋꯭𝙚𝙧𝙧꯭𝙮🔥❣️" ,"jpegThumbnail": fs.readFileSync(`./NyanBot.jpg`)}}}})              
  break
case 'menu4':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  uptime = process.uptime()
const Menud = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*
⍣ *BOT INFO* ⍣
${samu}◦ 🌐Navegador :${samu} *${samu330.browserDescription[1]}*
${samu}◦ 📡servidor :${samu} *${samu330.browserDescription[0]}*
${samu}◦ ✅version :${samu} *${samu330.browserDescription[2]}*
${samu}◦ 🚄Velocidad :${samu} *${process.uptime()}*
${samu}◦ 📲Sistema operativo :${samu} *${samu330.user.phone.device_manufacturer}*
${samu}◦ 🪀version de${samu} *WhatsApp* : *${samu330.user.phone.wa_version}*
${bodyM} ${prefix}play *(Descarga de audios en nota de voz)*
${bodyM} ${prefix}play2 *(Descarga de audios en mp3)*
${bodyM} ${prefix}playvid *(Descarga de videos por nombre)*
${bodyM} ${prefix}ig *(Fotos y videos de Instagram)*
${bodyM} ${prefix}ytmp3
${bodyM} ${prefix}ytmp4
${bodyM} ${prefix}mfire *(Link de mediafire)*
${bodyM} ${prefix}tomp3 *(Videos a audio)*
`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menud, text, {
quoted:  fvid})              
  break
case 'menu5':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  uptime = process.uptime()
const Menuo = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                
🔐Hola *${pushname}* 
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	      🌸 SamịPerry.li 🌸
 ********************************
${bodyM} ${prefix}voz *(Codigo de idioma)* *(Texto)* _Para ver idiomas compatibles, usa el comando_ *idiomas*
${bodyM} ${prefix}block
${bodyM} ${prefix}setimg
${bodyM} ${prefix}setimgmenu
${bodyM} ${prefix}tiktokstalk @usuario
${bodyM} ${prefix}hidetag *(Texto)*
${bodyM} ${prefix}cc *(Tarjetas de crédito)*
${bodyM} ${prefix}> *(Ejecuta comandos en la terminal)*
${bodyM} ${prefix}$ *(Ejecuta comandos en la terminal)* 
${bodyM} ${prefix}cambiar *(Cambia el cuerpo del menú)*
${bodyM} ${prefix}trigger *(Etiqueta un audio)*
${bodyM} ${prefix}slow *(Etiqueta un audio)*
${bodyM} ${prefix}bass *(Etiqueta un audio)*
${bodyM} ${prefix}ardilla *(Etiqueta un audio)*
${bodyM} ${prefix}grave *(Etiqueta un audio)*
${bodyM} ${prefix}arti
${bodyM} ${prefix}quote
${bodyM} ${prefix}pastebin *(genera link hacia el texto o link que escribas)*
${bodyM} ${prefix}abinario *(texto a codigo binario)* 010010
${bodyM} ${prefix}binatext *(codigo binario a texto)*
${bodyM} ${prefix}aoctal *(texto a codigo octal)*
${bodyM} ${prefix}octalatext *(codigo octal a texto)*
${bodyM} ${prefix}ahex *(texto a codigo hex)*
${bodyM} ${prefix}hexatext *(codigo hex a texto)*
${bodyM} ${prefix}rate _frase @miembro_
${bodyM} ${prefix}wa.me
${bodyM} ${prefix}idioimas
${bodyM} ${prefix}paises
${bodyM} ${prefix}reversa
${bodyM} ${prefix}verdad
${bodyM} ${prefix}meme
${bodyM} ${prefix}readmore _frase/frase_
${bodyM} ${prefix}mapa
${bodyM} ${prefix}soyyo
${bodyM} ${prefix}blocklist
${bodyM} ${prefix}leerimagen
`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menuo, text, {
	  quoted: fakeProduct})              
  break
 case 'menu6':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  if (!isGroup) return reply(mess.only.group)
  if (!isNsfw) return reply(mess.nsfw)
  uptime = process.uptime()
const Menu18 = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ********************************
${bodyM} ${prefix}porno
${bodyM} ${prefix}lesbian 
${bodyM} ${prefix}tetas
${bodyM} ${prefix}ass
${bodyM} ${prefix}pussy
`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menu18, text, {
quoted: fvid})              
  break
				
case 'menu7':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  uptime = process.uptime()
const Menu7 = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ********************************
${bodyM} ${prefix}lluvia *(Link de imagen)*
${bodyM} ${prefix}gtav *(Etiqueta una imagen)*
${bodyM} ${prefix}wanted *(Etiqueta una imagen)*
${bodyM} ${prefix}wasted *(Etiqueta una imagen)*
${bodyM} ${prefix}cafe *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cafe2 *(Escribe un texto para crear logo)*
${bodyM} ${prefix}ocean *(Etiqueta una imagen)*
${bodyM} ${prefix}ger *(Etiqueta una imagen)*
${bodyM} ${prefix}hp *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sombra *(Escribe un texto para crear logo)*
${bodyM} ${prefix}pubg *(Escribe un texto para crear logo)*
${bodyM} ${prefix}madera *(Escribe un texto para crear logo)*
${bodyM} ${prefix}neon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sombra *(Escribe un texto para crear logo)*
${bodyM} ${prefix}drawing *(Etiqueta una imagen)*
${bodyM} ${prefix}candy *(Escribe un texto para crear logo)*
${bodyM} ${prefix}rw *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glitch *(Escribe un texto para crear logo)*
${bodyM} ${prefix}madera *(Escribe un texto para crear logo)*
${bodyM} ${prefix}gr *(Escribe un texto para crear logo)*
${bodyM} ${prefix}ga *(Escribe un texto para crear logo)*
${bodyM} ${prefix}romance *(Escribe un texto para crear logo)*
${bodyM} ${prefix}madera *(Escribe un texto para crear logo)*
${bodyM} ${prefix}paperglass *(Escribe un texto para crear logo)*
${bodyM} ${prefix}narutobanner *(Escribe un texto para crear logo)*
${bodyM} ${prefix}mugflower *(Escribe un texto para crear logo)*
${bodyM} ${prefix}lovemss *(Escribe un texto para crear logo)*
${bodyM} ${prefix}candlemug *(Escribe un texto para crear logo)*
${bodyM} ${prefix}burnpaper *(Escribe un texto para crear logo)*
${bodyM} ${prefix}madera *(Escribe un texto para crear logo)*
${bodyM} ${prefix}madera *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cg *(Etiqueta una imagen)*

`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menu7, text, {
quoted: fvid})              
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
				
				
				
				case 'porno':
if (!isGroup) return reply(mess.only.group)          
if (!isNsfw) return reply(mess.nsfw)
porn = await fetchJson('https://meme-api.herokuapp.com/gimme/porn', {
method: 'get'
	}) 
reply(mess.wait)
buffer = await getBuffer(`${porn.url}`)
	samu330.sendMessage(from, buffer, image, {                                                                 
		quoted: fimg                                                       
	})
  break
			
case 'lesbian':
if (!isGroup) return reply(mess.only.group)               
if (!isNsfw) return reply(mess.nsfw)
porn = await fetchJson('https://meme-api.herokuapp.com/gimme/lesbians', {
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
porn = await fetchJson(`${nk}`, {        
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
porn = await fetchJson(`${nk}`, {
        method: 'get'
})
reply(mess.wait)
buffer = await getBuffer(`${porn.url}`)
samu330.sendMessage(from, buffer, image, {
        quoted: fimg                                                                         
})
  break
				
case 'pussy':
if (!isGroup) return reply(mess.only.group)                     
if (!isNsfw) return reply(mess.nsfw)
pw = ["https://meme-api.herokuapp.com/gimme/pussy",
"https://meme-api.herokuapp.com/gimme/LegalTeens"           
]
nk = pw[Math.floor(Math.random() * pw.length)]       
porn = await fetchJson(`${nk}`, {
        method: 'get'                   
})                                      
reply(mess.wait)
buffer = await getBuffer(`${porn.url}`)
samu330.sendMessage(from, buffer, image, {
        quoted: fimg                                                                         
})
  break
				
				
				case 'cc':
					try {
						anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {
						method: 'get'
 						})
  						reply(`*${anu.result.card.network}*\n💳 _Numero de tarjeta_ : ${anu.result.card.number}\n# _CVV_ : ${anu.result.card.cvv}\n📑 _pin_ : ${anu.result.card.pin}\n💰 _Monto_ : ${anu.result.card.balance}\n_Mes de vencimiento_ : ${anu.result.card.expiration_month}\n_Año de vencimiento_ : ${anu.result.card.expiration_year}\n\n*Informacion de la tarjeta*🧾\n\👨🏻‍🦱 _Propietario_ : ${anu.result.customer.name}\n_🌍Direccion_ : ${anu.result.customer.address}\n_🌆Ciudad_ : ${anu.result.customer.country}`)
                                                                                                            } catch {
    						reply(mess.ferr)                                                                                        
													    }
  						break
				
				
				case 'nuevogrupo':
				nombre = args.join(' ')
				const group = await samu330.groupCreate(`${nombre}`, ["5219984907794@s.whatsapp.net"])
				reply(`*EL GRUPO FUE CREADO CORRECTAMENTE*\nid del grupo: ${group.gid}`)
				samu330.sendMessage(group.gid, "hello everyone", text, {quoted: fliveLoc})
				break
				
				
				
				
				
				
				case 'stiker':
				case 'sticker':
				if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
					if (!isAutoSt) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
						const media = await samu330.downloadAndSaveMediaMessage(encmedia)
						pack = `by-Sm330-Sam-y-Perry`
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`${pack}`)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									samu330.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fdoc, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                                                                        reply(mess.success)
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: me)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					}
					} else if ((isMedia && sam.message.videoMessage.seconds < 11 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
						const media = await samu330.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Error al convertir el ${tipe} a stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('StMv-By:-Samu-y-Perry')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									samu330.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fimg, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                                                                        reply(mess.success)
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: m)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
						const media = await samu330.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Error, intenté de nuevo más tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('StNoBg-By:-Sam-y-Perry')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									samu330.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: fliveLoc, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: me})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(me).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mk
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envía una foto con el comando: ${prefix}sticker o etiqueta una imagen, video o gif ya enviados`)
					}
					break
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				case 'simi':
samu330.updatePresence(from, Presence.composing)
texto = body.slice(5)                    
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${texto}&lang=es`)
smuu = (`${sim.success}`)                   
samu330.sendMessage(from, smuu, text, {quoted: { key: {             
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
                                                                                "title": `➫𝐒𝐢𝐦𝐬𝐢𝐦𝐢 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲🔥❣️| ${pushname} `,                
										"description": `${texto}`,    
										"currencyCode": '',
										"priceAmount1000": "999",
										"retailerId": 'TOM',  
										"productImageCount": 999
                                                                        },
                                                                        "businessOwnerJid": `5219984907794@s.whatsapp.net`
                                                                }
                                                        }                                                                                         }                                                                                                         })
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
			
			case 'setname':
				await samu330.groupUpdateSubject(from, `${args.join(' ')}`)
				samu330.sendMessage(from, `*「 NOMBRE DEL GRUPO CAMBIADO A:」\n${args.join(' ')}*`, MessageType.text)
				break
			case 'setdesc':
				await samu330.groupUpdateDescription(from, `${args.join(' ')}`)
				samu330.sendMessage(from, `*「 DESCRIPCION DEL GRUPO CAMBIADA A:」\n${args.join(' ')}*`, MessageType.text)
				break
			case 'uptime':
				runtime = process.uptime()
				teks = `${kyun(runtime)}`
				
				samu330.sendMessage(from, `${teks}`, MessageType.text)
				break
			
			case 'imagen':
if (!isRegister) return reply(mess.only.daftarB)

if (args.length < 1) return reply('Ingresa algo para buscar en imágenes🔐')
tels = body.slice(8)
fakee = fs.readFileSync('./src/img.jpg')
samu330.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {
  method: 'get'
})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: ftoko, caption: `Espero y te guste esta imagen de *${tels}*`, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})

} catch {
  reply(mess.ferr)
}
break
			
case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return samu330.sendMessage(from, `Uso de la función antidelete :\n\n*${prefix}antidelete [activar/desactivar]* (Para grupos)\n*${prefix}antidelete [1/0]* (Para PRIV)\n*${prefix}antidelete banct 5219984xxxxxxx* (Para un numero en especifico)`, MessageType.text)
				if (argz[1] == 'activar') {
					if (isGroup) {
						if (isRevoke) return samu330.sendMessage(from, `Antidelete estaba habilitado en este grupo antes!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						samu330.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						samu330.sendMessage(from, `Para utilizar en PRIV: *${prefix}antidelete 1*`, MessageType.text)
					}
				} else if (argz[1] == '1') {
					if (!isGroup) {
						if (isCtRevoke) return samu330.sendMessage(from, `Antidelete se ha habilitado en todos los contactos!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						samu330.sendMessage(from, `Antidelete ya esta activado en todos los contactos!`, MessageType.text)
					} else if (isGroup) {
						samu330.sendMessage(from, `Para usoen grupos: *${prefix}antidelete activar*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return samu330.sendMessage(from, `Este contacto ya está en la base de datos de la lista de prohibición.!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return samu330.sendMessage(from, `Ingrese el número que comienze sin el +.\nEjemplo 529984xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					samu330.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'desactivar') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						samu330.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						samu330.sendMessage(from, `Para utilizar en Priv: *${prefix}antidelete 0*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						samu330.sendMessage(from, `Antidelete está deshabilitado en todos los contactos!`, MessageType.text)
					} else if (isGroup) {
						samu330.sendMessage(from, `Para uso en grupos: *${prefix}antidelete desactivar*`, MessageType.text)
					}
				}
				break
			case 'link':
				if (!isGroup) return reply(mess.only.group)
				const linkgc = await samu330.groupInviteCode(from)
				samu330.sendMessage(from, `https://chat.whatsapp.com/${linkgc}`, text, {quoted:fdoc})
				break
	case 'entrabot':
samu330.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Ya entre al grupo😉')
break
				
case 'play':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Escribe el nombre de la cancion')
  reply(mess.wait)
  play = body.slice(6)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Audio*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_El audio se esta mandando, si no llega descargue por el link_\n‣ *Link* : ${anu.result.url_audio}
  `
  fakee = fs.readFileSync('./src/img.jpg')
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  samu330.sendMessage(from, buffer, image, {
quoted: fliveLoc, caption: infomp3, thumbnail: fakee
  })
  samu330.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', ptt : true, duration :-999999999999999, filename: `${anu.result.title}.mp3`, quoted: fvid
  })
  
  } catch {
    reply(mess.ferr)
  }
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
case 'letra':
case 'letras':
  if (args.length < 1) return reply('Escribe el nombre de la cancion')
  if (!isRegister) return reply(mess.only.daftarB)
  
  samu330.updatePresence(from, Presence.composing)
  tels = body.slice(7)
  try {
  anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {
method: 'get'
  })
  reply(`🥰Resultado de ${tels}:\n\n____________________\n${anu.result.lirik}`)
  
  } catch {
    reply(mess.ferr)
  }
  break
				
 //Arreglado por Samu330
case 'ytmp3':
  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Formato de link incorrecto')
  try {
  sam = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=apivinz`)
  infomp3 = `*Audio!!!*\n‣ Nombre : ${sam.result.title}\n‣ Fuente: ${sam.result.source}\n‣ Tamaño: ${sam.result.size}\n‣ *Calidad* : ${anu.result.quality}\n\n_El audio se esta mandando espere, si no llega descargue por el link_\n‣ *link* : ${sam.result.link}`
  fakee = fs.readFileSync('./src/img.jpg')
  buffer = await getBuffer(sam.result.thumb)
  lagu = await getBuffer(sam.result.link)
  samu330.sendMessage(from, buffer, image, {
quoted: fvid, caption: infomp3, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
  })
  samu330.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', duration :-999999999999999, filename: `${sam.result.title}.mp3`, quoted: fliveLoc, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'ytmp4':
  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)
  play = body.slice(7)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=apivinz`)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('El formato del link es incorrecto')
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_Se esta mandando el video, si no llega descargue por el link_\n‣ *link* : ${anu.result.url_video}`
  fakee = fs.readFileSync('./src/img.jpg')
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_video)
  samu330.sendMessage(from, buffer, image, {
quoted: fvid, caption: infomp3, thumbnail: fakee
  })
  samu330.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', duration :-999999999999999, filename: `${anu.result.title}.mp4`, quoted: fvid
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
 case 'tiktokaudio':
 pe = args.join(' ')
 anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_audio?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 samu330.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
case 'ss':
 pe = args.join(' ')
 anu = await getBuffer(`https://api-rull.herokuapp.com/api/ssweb?url=${pe}`)
 samu330.sendMessage(from, anu, image, {quoted: fimg})
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
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, tescuk, quoted: fdoc})
						fs.unlinkSync(ran)
					})
					break
				
			case 'tomp3':
				samu330.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('Y el video?')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await samu330.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply(mess.ferr)
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
				samu330.updatePresence(from, Presence.composing)
				teks = `Total : ${totalchat.length}`
				samu330.sendMessage(from, teks, text, {quoted:fdoc})
				break

case 'ping':
				var groups = samu330.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = samu330.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await samu330.chats.all()
					const latensi = speed() - timestamp
					var total = math(`${groups.length}*${privat.length}`)
					teks = `_Pong_ xD\n*ESTADISTICAS DEL BOT:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${privat.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensi.toFixed(4)} _Second_\n*- Active Time :* ${kyun(uptime)}\n\n*PHONE STATISTICS:*\n*- 📱Capacidad de Ram :* ${ram2}\n*- 💻Plataforma :* ${os.platform()}\n*- 🌐Hostname :* ${os.hostname()}\n*- 🕐Uptime :* ${kyun(os.uptime())}\n*- 🪀Wa Version:* ${samu330.user.phone.wa_version}\n*- 📡Os Version:* ${samu330.user.phone.os_version}\n*- 🔐Device Manufacturer:* ${samu330.user.phone.device_manufacturer}\n*- 📲Device Model:* ${samu330.user.phone.device_model}\n*- 🧬Os Build Number:* ${samu330.user.phone.os_build_number}`
					samu330.sendMessage(from, teks, text, {quoted: fdoc, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
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
					reply('Envien una imagen con el comando: ${prefix}𝗼𝗰𝗿')
				}
				break

			
				case 'batrei':
				 case 'battrey':
         let batreiNow = global.batrei[global.batrei.length - 1]
         samu330.sendMessage(from, `${batreiNow}%`, text)
         break
			case 'tts':
				case 'voz':
					if (args.length < 1) return samu330.sendMessage(from, 'Y el codigo de idioma? escribe el comando *idiomas* para ver la lista', text, { quoted: fakeProduct })
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return samu330.sendMessage(from, 'Escribe el texto', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Mira, si no sabes usar esto... mejor no lo agas 😤')
					: gtts.save(ranm, dtt, function() {
						samu330.updatePresence(from, Presence.recording)
						samu330.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: fakeProduct, mimetype: 'audio/mp4', duration: -999999999999999999, ptt:true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
						fs.unlinkSync(ranm)
					})
					break
				
			case 'setprefix':
				prefix = args.join(' ')
				samu330.sendMessage(from, `El prefijo a cambiado a : ${prefix}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
			case 'settarget':
				if (args.length < 1) return
				targetprivate = args[0]
				samu330.sendMessage(from, `target Private Fake Reply : ${targetprivate}`, text, {quoted:fdoc})
				break
			case 'all':
samu330.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
  teks += `┃ @${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
}
mentions('〘  *TAGALL* 〙\n┏━━━━━━━━━━━━━━━━━━━━\n┠⊷'+teks+'┃━━━━━━━━━━━━━━━━━━━━\n┃────✅Samu330🏆────\n┗━━━━━━━━━━━━━━━━━━━━', members_id, true)
break
			case 'clearall':
				if (!isOwner) return reply(mess.only.ownerB)
				anu = await samu330.chats.all()
				samu330.setMaxListeners(25)
				for (let _ of anu) {
					samu330.deleteChat(_.jid)
				}
				reply('TODOS LOS CHATS LIMPIOS')
				break
				case 'block':
					samu330.updatePresence(from, Presence.composing) 
				    samu330.blockUser (`${args.join(' ')}@c.us`, "add")
					samu330.sendMessage(from, `Bloqueado por pto`, text)
				break
				case 'unblock':
					samu330.updatePresence(from, Presence.composing) 
					samu330.blockUser (`${args.join(' ')}@c.us`, "remove")
					samu330.sendMessage(from, `desloqueado para que deje de llorar`, text)
				break 
			case 'leave':
				if (!isGroup) return reply(mess.only.group)
				samu330.samu330.leaveGroup(from, 'Nos vemos, de lugares mejores me an corrido🥱', MessageType.text)
				await samu330.samu330.leaveGroup(from, '𝗕𝘆𝗲𝗲', groupId)
				break
			case 'bc':
					if (!isOwner) return reply('Solo *Samu* puede usar este comando')
					if (args.length < 1) return reply('Y el anuncio?')
					anu = await samu330.chats.all()
					if (isMedia && !sam.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : fdoc
						buff = await samu330.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							samu330.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°`})
						}
						reply('Anuncio dado')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*${body.slice(4)}*`)
						}
						reply('Anuncio dado')
					}
					break
			case 'add':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Y el numero?')
				if (args[0].startsWith('08')) return reply('Utiliza el codigo de pais')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					samu330.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					return samu330.sendMessage(from, 'Modo privado dice:v', MessageType.text)
				}
				break
			case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Con exito \n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						samu330.groupRemove(from, mentioned)
					} else {
						mentions(`Ahora @${mentioned[0].split('@')[0]} es admin del grupo!`, mentioned, true)
						samu330.groupMakeAdmin(from, mentioned)
					}
					break
			case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Admin quitado con exito\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						samu330.groupRemove(from, mentioned)
					} else {
						mentions(`Un admi menos @${mentioned[0].split('@')[0]} 🥱!`, mentioned, true)
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
					if (!isQuotedSticker) return reply('Porfavor etiqueta un sticker')
					reply(mess.wait)
					fakee = fs.readFileSync('./src/img.jpg')
					encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await samu330.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('🙄')
						buffer = fs.readFileSync(ran)
						samu330.sendMessage(from, buffer, image, { caption: 'Listo:D', thumbnail: fakee })
						fs.unlinkSync(ran)
					});
				break
			case 'clone':
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
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					media = await samu330.downloadMediaMessage(encmedia)
					await wait(media).then(res => {
						samu330.sendMessage(from, res.video, video, { quoted: ftoko, caption: res.teks.trim() })
					}).catch(err => {
						reply(err)
					})
				} else {
					reply('Envia la magen para poder buscar el anime')
				}
				break
			
					case 'itsme':
case 'soyyo':
  if (!isRegister) return reply(mess.only.daftarB)
  try {
ppimg = await samu330.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nombre* : ${pushname}
  ‣ *Número* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  samu330.sendMessage(from, its, image, {
quoted: fliveLoc, caption: teks, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
  })
  
  break
		     case 'nilai':
					
case 'rate':
  if (args.length < 1) return reply('Escribe el nombre')
  samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  random = `${Math.floor(Math.random() * 100)}`
  hasil = `Rating : *${body.slice(6)}*\n\nPorcentaje : *${random}%*`
  reply(hasil)
  break
				
					
			
					
					case 'pastebin':
if (args.length < 1) return reply('Escribe el texto que se mostrara en pastebin.')
	paste = `${args.join(' ')}`
reply(mess.wait)
	anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
        samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                   break

case 'abinario':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo binario.')
			encbinary = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
case 'binatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo binario para convertir a texto.')
				decbin = `${args.join(' ')}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break

case 'aoctal':                                          
if (args.length < 1) return reply('Escribe el texto a convertir a codigo octal.')         
encbinary = `${args.join(' ')}`
                                        anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encbinary}`, {method: 'get'})                                
samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                                        break
case 'octalatext':                                                   
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo octal para convertir a texto.')
                                decbin = `${args.join(' ')}`                        
anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decbin}`, {method: 'get'})
                                        samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
		break

case 'ahex':                                                       
if (args.length < 1) return reply('Escribe el texto a convertir a codigo hex.')      
encbinary = `${args.join(' ')}`                
anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/hex/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})                     
break
case 'hexatext':                      
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo hex para convertir a texto.')
                                decbin = `${args.join(' ')}`                 
anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/hex/?decode=${decbin}`, {method: 'get'})
                                        samu330.sendMessage(from, `${anu.result}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                                        break
				//case creado por samu
				   case 'dorking':
			   		dork = `${args.join(' ')}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					samu330.sendMessage(from, hasil, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
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
if (!isRegister) return reply(mess.only.daftarB)

samu330.updatePresence(from, Presence.composing)
am = ["anime tumblr",
  "wallpaper anime hd",
  "anime aestethic",
  "anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: fimg, caption: `☕`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})

break

//*********Pinterest wallpaper
  case 'wp':
case 'wallpaper':
  if (!isRegister) return reply(mess.only.daftarB)
  
  samu330.updatePresence(from, Presence.composing)
  pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper gatitos",
"wallpaper"]
  nk = pw[Math.floor(Math.random() * pw.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  samu330.sendMessage(from, pok, image, {
quoted: fimg, caption: `☕`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
  })
  
  } catch {
    reply(mess.ferr)
  }
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
				   if (args.length < 1) return reply('Y el link de mediafire?')
				   var link = args.join(' ')
				samu330.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://videfikri.com/api/mediafire/?query=${link}`)
		smyperry = await getBuffer(data.result.download)
                hasil = `link : ${link}\n\n*SI NO SE ENVIA EL ARCHIVO, O SI SE ENVIA CON ERRORES, PUEDE TOCAR EL ENLACE DE ABAJO Y SU DESCARGA INICIARA AL INSTANTE* : ${data.result.download}`
                reply(hasil)
		samu330.sendMessage(from, smyperry, document, {                                                                
			mimetype: 'file', filename: `${data.result.filename}`, quoted: fdoc
  })	
                //
          
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

			  
			
					
					case 'tiktod':
					var gh = args.join(' ')
					var gli = gh.split("|")[0];
					var tch = gh.split("|")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext test|test`)
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					samu330.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					//
					break
						
		    case 'cmd':
				var teks = encodeURIComponent(args.join(' '))
				if (!teks) return samu330.sendMessage(from,  msgType.text, { quoted: fakeProduct })
				var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/cmd?code=${teks}`)
				samu330.sendMessage(from, buffer, image)
		break

				                                
				                                
				

case 'attp':
					if (args.length < 1) return reply('Y el texto?')
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					samu330.sendMessage(from, attp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
case 'ttp':
					if (args.length < 1) return reply('Y el texto?')
					var teks = encodeURIComponent(args.join(' '))
					const ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
					samu330.sendMessage(from, ttp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'forward':
					 case 'fw':
samu330.sendMessage(from, `${args.join(' ')}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
            				//case creado por samu

case 'antimedia':                
if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)     
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
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
if (!isGroupAdmins) return reply(mess.only.admin)     

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
                                        if (!isGroupAdmins) return reply(mess.only.admin)     
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
                                        if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
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
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (args.length < 1) return reply( `Escribe ${prefix}addbad [palabra]. Ejemplo: ${prefix}addbad pto`)
                                        const bw = body.slice(12)
                                        bad.push(bw)
                                        fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
                                        reply('Se añadio con exito')
                                        break
                                case 'delbad':
                                
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
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


				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('?')
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


				case 'antilink':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
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


				case 'simsimi':                                                                                                                             if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)        
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)    
					if (args.length < 1) return reply('escriba *1* para activar')        
					if (args[0] === '1') {                 
						if (isSimi) return reply('Ya esta activo')            
						simi.push(from)
                                                fs.writeFileSync('./src/simi.json', JSON.stringify(simi))
					} else if ((args[0]) === '0') {                      
						var ini = simi.indexOf(from)              
						simi.splice(ini, 1)                    
						fs.writeFileSync('./src/simi.json', JSON.stringify(simi))        
						reply('Modo simsimi off ✔️')                                   
					} else {                               
						reply('*1 para activar, 0 para desactivar*')             
					}
                                        break
					
					
               case 'delete':
  case 'del':
if (!isGroup)return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroupAdmins)return reply(mess.only.admin)
try {
samu330.deleteMessage(from, {
  id: sam.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Solo puedo borrar mensajes míos')
}
break
             
				case 'wasted':
					var imgbb = require('imgbb-uploader')
					if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
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
					
				
				
				case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Di Cari Orang Gila&text2=Hub : 08812904283`)
 samu330.sendMessage(from, hehe, image, {quoted: fimg, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
}
break
case 'draw':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
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
  anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, image, {quoted: fimg, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('Etiqueta una imagen')
}
break
				
case 'gtav':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hehe, image, {quoted:fimg})
} else {
  reply('Manda la foto')
}
break

case 'togif':
					ger = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
					var imgbb = require('imgbb-uploader')
					reply(mess.wait)
					owgi = await samu330.downloadAndSaveMediaMessage(ger)
					data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=BandNao71&img=${data.display_url}`)
					result = await getBuffer(anu.result)
					samu330.sendMessage(from, result, video, {quoted: sam, caption: mess.success, mimetype: 'video/gif'})
					break
				
case 'old':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
  hedhe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/greyscale?url=${anu.display_url}&apikey=freeKeY`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break

case 'circle':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpwround?apikey=${lol}&img=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
 
case 'burnpaper':
if (args.length < 1) return reply(`Ejemplo: ${prefix}burnpaper samu330`)
todi = args.join(' ')
reply(mess.wait)
pper = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`)
samu330.sendMessage(from, pper, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'neon':
if (args.length < 1) return reply(`Ejemplo: ${prefix}glowneon samu330`)
tekas = args.join(' ')
reply(mess.wait)
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
samu330.sendMessage(from, glown, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'gsuggest':
if (args.length < 1) return reply(`Ejemplo: ${prefix}gsuggest samu330/nyan/bot`)
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
if (args.length < 1) return reply(`Ejemplo: ${prefix}candlemug samu330`)
ddu = args.join(' ')
reply(mess.wait)
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
samu330.sendMessage(from, clmug, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

case 'lovemss':
if (args.length < 1) return reply(`Ejemplo: ${prefix}lovemss samu330`)
lop = args.join(' ')
reply(mess.wait)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
samu330.sendMessage(from, lepms, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'mugflower':
if (args.length < 1) return reply(`Ejemplo: ${prefix}mugflower samu330`)
mug = args.join(' ')
reply(mess.wait)
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
samu330.sendMessage(from, mflowg, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'narutobanner':
if (args.length < 1) return reply(`Ejemplo: ${prefix}narutobanner samu330`)
nar = args.join(' ')
reply(mess.wait)
narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
samu330.sendMessage(from, narba, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'paperglass':
if (args.length < 1) return reply(`Ejemplo: ${prefix}paperglass samu330`)
papg = args.join(' ')
reply(mess.wait)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
samu330.sendMessage(from, gelas, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'romance':
if (args.length < 1) return reply(`Ejemplo: ${prefix}romance samu330`)
roce = args.join(' ')
reply(mess.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
samu330.sendMessage(from, roma, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'sombra':

if (args.length < 1) return reply(`Ejemplo: ${prefix}sombra samu330`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`)
samu330.sendMessage(from, shan, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

case 'ga':

if (args.length < 1) return reply(`Ejemplo: ${prefix}ga samu330`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/gradientavatar?text=${sdow}`)
samu330.sendMessage(from, shan, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

case 'gr':

if (args.length < 1) return reply(`Ejemplo: ${prefix}gr Sam y Perry`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/glowrainbow?text=${sdow}`)
samu330.sendMessage(from, shan, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

if (args.length < 1) return reply(`Ejemplo: ${prefix}glitch samu330|bot`)
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
if (args.length < 1) return reply(`Ejemplo: ${prefix}rw Sam|Y|Perry`)
gl = `${args.join(' ')}`
gel1 = gl.split("|")[0];
gel2 = gl.split("|")[1];
gel3 = gl.split("|")[2];
reply(mess.wait)
litsh = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/retro-wave?text1=${gel1}&text2=${gel2}&text3=${gel3}&font=2`, {method: 'get'})
samu330.sendMessage(from, litsh, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
			
case 'cafe':
if (args.length < 1) return reply(`Ejemplo: ${prefix}cafe samu330`)
kop = args.join(' ')
reply(mess.wait)
ppi = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`)
samu330.sendMessage(from, ppi, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'cafe2':

if (args.length < 1) return reply(`ejemplo: ${prefix}cafe2 sam y perry`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2/?text=${sdow}`)
samu330.sendMessage(from, shan, image, {quoted: fimg, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

case 'candy':
//
//
if (args.length < 1) return reply(`Ejemplo: ${prefix}candy samu330`)
teks = args.join(' ')
reply(mess.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${teks}`)
samu330.sendMessage(from, prmen, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break

case 'hp':
//
//
if (args.length < 1) return reply(`Ejemplo: ${prefix}hp samu330`)
hpter = args.join(' ')
reply(mess.wait)
helpter = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpter}`)
samu330.sendMessage(from, helpter, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'madera':
//
//
if (args.length < 1) return reply(`Ejemplo: ${prefix}madera samu330`)
woblk = args.join(' ')
reply(mess.wait)
gblok = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`)
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
                                      
				       case 'getpic':
					if (args.length < 1) return 
					if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('NyanBot')
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await samu330.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						samu330.sendMessage(from, buffer, image, {quoted: fimg, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
						samu330.sendMessage(from, buffer, image, {quoted: fimg, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
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

				case 'public':
				case 'publik':
				   publik = true
				samu330.sendMessage(sam.key.remoteJid, `「 *PUBLIC-MODE* 」`, MessageType.text, { quoted:ftoko})
			break
				case 'privado':
				   publik = false
				samu330.sendMessage(sam.key.remoteJid, `「 *MODO PRIVADO* 」`, MessageType.text, { quoted:ftoko})
			break
				
		case 'setimg':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Etiqueta una imagen!')
				const thumbreply = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downreply = await samu330.downloadMediaMessage(thumbreply)
				fs.unlinkSync(`./src/NyanBot.jpg`)
				fs.writeFileSync(`./src/NyanBot.jpg`, downreply)
			samu330.sendMessage(from, `se cambio correctamente la miniatura de respuesta`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Sucess", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
break
case 'setimgmenu':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Etiqueta una imagen!')
				const thumbmenu = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downmenu = await samu330.downloadMediaMessage(thumbmenu)
				fs.unlinkSync(`./src/help.jpg`)
				fs.writeFileSync(`./src/help.jpg`, downmenu)
				anu = fs.readFileSync('./src/help.jpg')
				anuu = fs.readFileSync('./src/fake.jpg')
				samu330.sendMessage(from, anu, image, { quoted:ftoko, caption: `Se cambio la imagen del menu`, thumbnail: anuu})
break

			default:
					if (body.startsWith(`${prefix}${command}`)) {
  reply(`        »»————-　★　————-««\nHola *${pushname}* !!!\nEse comando no esta en mi lista : *${prefix}${command}*\nUsa esto para ver el menu: *${prefix}Menu*\n        »»————-　★　————-««`)
				}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
}
		
	} catch (e) {
		console.log('%s', color(e, 'red'))
		// console.log(e)
	}
})
}
starts()
