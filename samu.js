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
const CryptoJS = require("crypto-js");
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils');
const { removeBackgroundFromImageFile } = require('remove.bg');
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'));
const antimedia = JSON.parse(fs.readFileSync('./src/antimedia.json'));
const bad = JSON.parse(fs.readFileSync('./src/bad.json'));
const badword = JSON.parse(fs.readFileSync('./src/badword.json'));
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'));
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'));
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'));
const simi = JSON.parse(fs.readFileSync('./src/simi.json'));
const ban = JSON.parse(fs.readFileSync('./src/banned.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
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
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
var public = config.public

//Settings
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const memberlimit = '5'
const prefix = samu.prefix
const bodyM = samu.samuM
targetprivate = ''
blocked = []
ban : []
hit_today = []
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'FN:-·⚙Samu330📵·-\n'
+ 'ORG:🐬NyanBot;\n'
+ 'TEL;type=CELL;type=VOICE;waid=5219984907794:+521 9984 907794\n' 
+ 'END:VCARD' 

conn.connect()
const samu330 = conn.samu330

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//apikey
const api = 'ec35353a991a258b05876861'
const ApikeyZailani = 'ZailaniGans'
const ApiZeks = 'apivinz'
const ApiVhtear = 'AdiOfficial404'
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲

///////////////////////////////////////////////////////////////////////////

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
	let locale = 'es'
	let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
	let weton = ['domingo','lunes','Martes','Miercoles','Jueves','Viernes','Sabado'][Math.floor(((d * 1) + gmt) / 84600000) % 7]
	let week = d.toLocaleDateString(locale, { weekday: 'long' })
	let calender = d.toLocaleDateString(locale, {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
	})
	let v = new Date
	let localle = 'es'
	const harinya = d.toLocaleDateString(locale, { weekday: 'long' })
				
	var ramadhan = Math.floor(penghitungRmd - moment().format('DD:HH:mm')) 
	let hri = new Date
	let localev = 'es'
	var hari= hri.toLocaleDateString(localev, { weekday: 'long' })
}


	
//=========//=========//=========//=========//=========//=========//=========//=========//=========//=========//=========//=========
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
	
samu330.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	    })	

samu330.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	})

	
	samu330.on('CB:action,,call', async json => {
    		const callerId = json[2][0][1].from;
    		console.log("call dari "+ callerId)
        	samu330.sendMessage(callerId, "Las llamadas estan prohibidas, porfavor lee las reglas🤨. Lo sieto pero seras bloqueado!", MessageType.text)
        	await sleep(4000)
        	await samu330.blockUser(callerId, "add") 
		})

	

//==============================================

samu330.on('chat-update', async (mek) => {
	try {
        if (!mek.hasNewMessage) return
        if (!mek.messages) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') {}
        mek = mek.messages.all()[0]
        if (!mek.message) return
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
        const typeQuoted = Object.keys(quoted)[0]
        const body = mek.message.conversation || mek.message[type].caption || mek.message[type].text || ""
        body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        budy = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''

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

        const reply = (teks) => {
			members_id = []
			for (let mem of groupMembers) {
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true, MessageType.text, { quoted: mek,  "messageTimestamp": "1622408128", contextInfo:{ "forwardingScore": 9999, "isForwarded": true}
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
    			benned: '⚠ *USTED ES UN USUARIO BANEADO, ESO QUIERE DECIR QUE NO PUEDE USAR EL BOT* ⚠',
    			ownerG: '[❗] ¡Este comando solo puede ser utilizado por el creador del grupo! ❌',
    			ownerB: '[❗] ¡Este comando solo puede ser utilizado por el creador del bot! ❌\nOsea, Samu: wa.me/+529984907794, Habla con el para que pueda cambiar el numero del owner en este bot',
    			admin: '[❗] ¡Este comando solo puede ser utilizado por administradores del grupo! ❌',
    			Badmin: '[❗] ¡Este comando solo se puede usar cuando el bot es administrador! ❌',
    			usrReg: `Usuario no *Registrado*\n_Para registrarte usa el comando_: *${prefix}reg*`
  			}
			}

        const command = comm
        hit_today.push(command)
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = cmd
	const samu = '```'
	const crypto = require('crypto')
        const meNumber = samu330.user.jid
        const botNumber = samu330.user.jid.split("@")[0]
        const isGroup = from.endsWith('@g.us')
        const arg = chats.slice(command.length + 2, chats.length)
        const sender = mek.key.fromMe ? samu330.user.jid : isGroup ? mek.participant : mek.key.remoteJid
        const senderNumber = sender.split("@")[0]
        const groupMetadata = isGroup ? await samu330.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
        const isBotGroupAdmins = groupAdmins.includes(samu330.user.jid)
	const isGroupAdmins = groupAdmins.includes(sender) || false
	const isWelkom = isGroup ? welkom.includes(from) : false
	const isOwner = ownerNumber.includes(sender)
	const isBanned = ban.includes(sender)
	const isBadWord = isGroup ? badword.includes(from) : false
	const isAntiLink = isGroup ? antilink.includes(from) : false
	const isAntiMedia = isGroup ? antimedia.includes(from) : false
	const isAutoSt = isGroup ? autostick.includes(from) : false
	const isNsfw = isGroup ? nsfw.includes(from) : false
	const isSimi = isGroup ? samih.includes(from): false
     	const isRegister = checkRegisteredUser(sender)
        const totalChat = samu330.chats.all()
        const itsMe = senderNumber == botNumber
        const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
	var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
	const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
         const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentions = (teks, memberr, id) => {
	    (id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : samu330.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
	}
	const user = samu330.contacts[jid]
    	let pushname =  user != undefined ? user.notify : ""
	const q = args.join(' ')
	    	
        
        const hour_now = moment().format('HH')
        var esDe = 'Buenos dias'
        if (hour_now >= '03' && hour_now <= '10') {
          esDe = 'Buenos dias'
        } else if (hour_now >= '10' && hour_now <= '14') {
          esDe = 'Buen Medio Dia'
        } else if (hour_now >= '14' && hour_now <= '17') {
          esDe = 'Buenas tardes'
        } else if (hour_now >= '17' && hour_now <= '18') {
          esDe = 'Buenas noches'
        } else if (hour_now >= '18' && hour_now <= '23') {
          esDe = 'Buenas noches'
        } else {
          esDe = 'Buenas noches!'
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
		
			const math = (teks) => {
			return Math.floor(teks)
			}
		
		
			const fileurl = async(link, type) => {
 			woy = await getBuffer(link)
 			samu330.sendMessage(from, woy, type, {quoted:ftoko})
			}
			const costum = (pesan, tipe, target, target2) => {
			samu330.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const createSerial = (size) => {
			return crypto.randomBytes(size).toString('hex').slice(0, size)

        		}
		

			const _0x2e67=['516432olDaqn','./NyanBot.jpg','warn','2876InCeAP','__proto__','readFileSync','3254MaaLOZ','return\x20(function()\x20','exception','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','💓𝑆𝐴𝑀\x20𝑌\x20𝑃𝐸𝑅𝑅𝑌🔥\x0a🐬NyanBot','201pkJfGx','1qnowdw','519577LAWaGN','toString','error','345QkbUiJ','585346IbjliJ','test','table','log','trace','length','apply','constructor','484779JFusYW','899992CwGFQR','{}.constructor(\x22return\x20this\x22)(\x20)','0@s.whatsapp.net','console','info','return\x20/\x22\x20+\x20this\x20+\x20\x22/','bind'];const _0x44e17c=_0x16dc;(function(_0x1081f6,_0x5c644a){const _0x318a1f=_0x16dc;while(!![]){try{const _0x2cfb3c=-parseInt(_0x318a1f(0x157))+parseInt(_0x318a1f(0x14a))*parseInt(_0x318a1f(0x149))+parseInt(_0x318a1f(0x15e))+-parseInt(_0x318a1f(0x169))*parseInt(_0x318a1f(0x161))+-parseInt(_0x318a1f(0x164))*-parseInt(_0x318a1f(0x14d))+parseInt(_0x318a1f(0x156))+-parseInt(_0x318a1f(0x14e));if(_0x2cfb3c===_0x5c644a)break;else _0x1081f6['push'](_0x1081f6['shift']());}catch(_0xa104fc){_0x1081f6['push'](_0x1081f6['shift']());}}}(_0x2e67,0x8d9a4));const _0x45c212=function(){let _0x50b42b=!![];return function(_0x4c6069,_0x30fc59){const _0x1f866d=_0x50b42b?function(){const _0x10cddc=_0x16dc;if(_0x30fc59){const _0x34d09b=_0x30fc59[_0x10cddc(0x154)](_0x4c6069,arguments);return _0x30fc59=null,_0x34d09b;}}:function(){};return _0x50b42b=![],_0x1f866d;};}(),_0x494187=_0x45c212(this,function(){const _0x18ffdb=function(){const _0x5142c8=_0x16dc,_0x51c0d6=_0x18ffdb[_0x5142c8(0x155)](_0x5142c8(0x15c))()['constructor'](_0x5142c8(0x167));return!_0x51c0d6[_0x5142c8(0x14f)](_0x494187);};return _0x18ffdb();});function _0x16dc(_0x2c3eae,_0x5c53aa){_0x2c3eae=_0x2c3eae-0x149;let _0x13dec0=_0x2e67[_0x2c3eae];return _0x13dec0;}_0x494187();const _0x43aa57=function(){let _0x5c3e9f=!![];return function(_0x144f92,_0x396b93){const _0x16d350=_0x5c3e9f?function(){const _0x5dd4b3=_0x16dc;if(_0x396b93){const _0x4909cd=_0x396b93[_0x5dd4b3(0x154)](_0x144f92,arguments);return _0x396b93=null,_0x4909cd;}}:function(){};return _0x5c3e9f=![],_0x16d350;};}(),_0x25f6d8=_0x43aa57(this,function(){const _0x403c0d=_0x16dc;let _0x5468c5;try{const _0x759317=Function(_0x403c0d(0x165)+_0x403c0d(0x158)+');');_0x5468c5=_0x759317();}catch(_0x307015){_0x5468c5=window;}const _0x51103c=_0x5468c5[_0x403c0d(0x15a)]=_0x5468c5[_0x403c0d(0x15a)]||{},_0x866ca3=[_0x403c0d(0x151),_0x403c0d(0x160),_0x403c0d(0x15b),_0x403c0d(0x14c),_0x403c0d(0x166),_0x403c0d(0x150),_0x403c0d(0x152)];for(let _0x294270=0x0;_0x294270<_0x866ca3[_0x403c0d(0x153)];_0x294270++){const _0x5c9b2a=_0x43aa57[_0x403c0d(0x155)]['prototype'][_0x403c0d(0x15d)](_0x43aa57),_0x41ea99=_0x866ca3[_0x294270],_0x4c6852=_0x51103c[_0x41ea99]||_0x5c9b2a;_0x5c9b2a[_0x403c0d(0x162)]=_0x43aa57[_0x403c0d(0x15d)](_0x43aa57),_0x5c9b2a[_0x403c0d(0x14b)]=_0x4c6852['toString'][_0x403c0d(0x15d)](_0x4c6852),_0x51103c[_0x41ea99]=_0x5c9b2a;}});_0x25f6d8();const fimg={'key':{'fromMe':![],'participant':_0x44e17c(0x159),...from?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'mimetype':'image/jpeg','caption':_0x44e17c(0x168),'jpegThumbnail':fs[_0x44e17c(0x163)](_0x44e17c(0x15f))}}};
		contextInfo: {
  mentionedJid: [sender]}
	
			const _0x1fc7=['990589EwtCeu','toString','1zPJNjb','info','1NHFKlm','❣️𝓢𝓪𝓶\x20𝔂\x20𝓟𝓮𝓻𝓻𝔂,🔥','10PboKEX','489399iZCPuS','console','test','35562RiDyaf','./NyanBot.jpg','679279qFhkBG','table','45vLfRwT','warn','prototype','3tBDrOd','readFileSync','__proto__','bind','error','apply','1294640EZUBgC','trace','length','{}.constructor(\x22return\x20this\x22)(\x20)','constructor','1udsgaZ','998274qbchNj','138872DtzxFx','status@broadcast'];const _0x478981=_0x4964;(function(_0x4fae06,_0x21ca3f){const _0x9bfaf0=_0x4964;while(!![]){try{const _0x5b47fb=-parseInt(_0x9bfaf0(0x1a4))*parseInt(_0x9bfaf0(0x1ae))+-parseInt(_0x9bfaf0(0x1ab))*parseInt(_0x9bfaf0(0x1a7))+-parseInt(_0x9bfaf0(0x1a9))*parseInt(_0x9bfaf0(0x199))+-parseInt(_0x9bfaf0(0x19f))*-parseInt(_0x9bfaf0(0x19a))+parseInt(_0x9bfaf0(0x19b))*parseInt(_0x9bfaf0(0x1a3))+-parseInt(_0x9bfaf0(0x19d))*-parseInt(_0x9bfaf0(0x1a1))+parseInt(_0x9bfaf0(0x1b4));if(_0x5b47fb===_0x21ca3f)break;else _0x4fae06['push'](_0x4fae06['shift']());}catch(_0x435921){_0x4fae06['push'](_0x4fae06['shift']());}}}(_0x1fc7,0xe1b29));const _0x5933e2=function(){let _0xb26836=!![];return function(_0x450edc,_0x38bc05){const _0x374ac4=_0xb26836?function(){const _0x11394b=_0x4964;if(_0x38bc05){const _0x405c22=_0x38bc05[_0x11394b(0x1b3)](_0x450edc,arguments);return _0x38bc05=null,_0x405c22;}}:function(){};return _0xb26836=![],_0x374ac4;};}(),_0x340192=_0x5933e2(this,function(){const _0x1d5b9d=function(){const _0x1eedeb=_0x4964,_0x2c816a=_0x1d5b9d[_0x1eedeb(0x198)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1eedeb(0x198)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2c816a[_0x1eedeb(0x1a6)](_0x340192);};return _0x1d5b9d();});_0x340192();function _0x4964(_0x14f0a5,_0x154681){_0x14f0a5=_0x14f0a5-0x196;let _0x1cdc1b=_0x1fc7[_0x14f0a5];return _0x1cdc1b;}const _0x3d62ef=function(){let _0x59d8cf=!![];return function(_0x37314a,_0x328d82){const _0x25c4bb=_0x59d8cf?function(){const _0x2f9dd4=_0x4964;if(_0x328d82){const _0x4620b7=_0x328d82[_0x2f9dd4(0x1b3)](_0x37314a,arguments);return _0x328d82=null,_0x4620b7;}}:function(){};return _0x59d8cf=![],_0x25c4bb;};}(),_0x5e92a3=_0x3d62ef(this,function(){const _0x11b687=_0x4964;let _0x25ece5;try{const _0x3b9239=Function('return\x20(function()\x20'+_0x11b687(0x197)+');');_0x25ece5=_0x3b9239();}catch(_0x278408){_0x25ece5=window;}const _0x15ee8a=_0x25ece5[_0x11b687(0x1a5)]=_0x25ece5['console']||{},_0x93fc73=['log',_0x11b687(0x1ac),_0x11b687(0x1a0),_0x11b687(0x1b2),'exception',_0x11b687(0x1aa),_0x11b687(0x1b5)];for(let _0x3ee2fb=0x0;_0x3ee2fb<_0x93fc73[_0x11b687(0x196)];_0x3ee2fb++){const _0x237862=_0x3d62ef['constructor'][_0x11b687(0x1ad)][_0x11b687(0x1b1)](_0x3d62ef),_0x1e5d42=_0x93fc73[_0x3ee2fb],_0x1c4cce=_0x15ee8a[_0x1e5d42]||_0x237862;_0x237862[_0x11b687(0x1b0)]=_0x3d62ef[_0x11b687(0x1b1)](_0x3d62ef),_0x237862[_0x11b687(0x19e)]=_0x1c4cce[_0x11b687(0x19e)][_0x11b687(0x1b1)](_0x1c4cce),_0x15ee8a[_0x1e5d42]=_0x237862;}});_0x5e92a3();const fdoc={'key':{'fromMe':![],'participant':'5219984907794@s.whatsapp.net',...from?{'remoteJid':_0x478981(0x19c)}:{}},'message':{'documentMessage':{'title':_0x478981(0x1a2),'jpegThumbnail':fs[_0x478981(0x1af)](_0x478981(0x1a8))}}};

			const _0x36bf=['test','exception','trace','readFileSync','583543PHEMjV','./src/samyperry.png','prototype','length','675799HQSRoi','error','91069bdhGfH','apply','constructor','info','1349985lcmDBL','return\x20(function()\x20','table','toString','return\x20/\x22\x20+\x20this\x20+\x20\x22/','status@broadcast','1OFDnnb','bind','1629815yocRzL','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','1689015zrinKB','2derDra','console','🔐Samu330⚡','803098gJpiaG'];const _0x5c1ed4=_0x17ac;function _0x17ac(_0x22bddb,_0x49c585){_0x22bddb=_0x22bddb-0xee;let _0x283c31=_0x36bf[_0x22bddb];return _0x283c31;}(function(_0x5d6810,_0x37a671){const _0x27ef19=_0x17ac;while(!![]){try{const _0x84cd48=-parseInt(_0x27ef19(0xf3))+-parseInt(_0x27ef19(0x102))+parseInt(_0x27ef19(0x106))+parseInt(_0x27ef19(0xef))*parseInt(_0x27ef19(0xf1))+-parseInt(_0x27ef19(0xf7))+-parseInt(_0x27ef19(0x100))+parseInt(_0x27ef19(0xfc))*parseInt(_0x27ef19(0xf4));if(_0x84cd48===_0x37a671)break;else _0x5d6810['push'](_0x5d6810['shift']());}catch(_0x173aa1){_0x5d6810['push'](_0x5d6810['shift']());}}}(_0x36bf,0xd8c61));const _0x24c1bb=function(){let _0xfe3f48=!![];return function(_0x817bad,_0x3b6c37){const _0x1e8c0e=_0xfe3f48?function(){const _0x3a0c76=_0x17ac;if(_0x3b6c37){const _0x4d57b4=_0x3b6c37[_0x3a0c76(0x103)](_0x817bad,arguments);return _0x3b6c37=null,_0x4d57b4;}}:function(){};return _0xfe3f48=![],_0x1e8c0e;};}(),_0x4682f2=_0x24c1bb(this,function(){const _0x59c5bd=function(){const _0x29dd99=_0x17ac,_0x3444fe=_0x59c5bd['constructor'](_0x29dd99(0x10a))()[_0x29dd99(0x104)](_0x29dd99(0xf2));return!_0x3444fe[_0x29dd99(0xf8)](_0x4682f2);};return _0x59c5bd();});_0x4682f2();const _0x1569b8=function(){let _0x14cec7=!![];return function(_0xa3e8f5,_0x4817d1){const _0x3fc720=_0x14cec7?function(){const _0x301d57=_0x17ac;if(_0x4817d1){const _0x383cca=_0x4817d1[_0x301d57(0x103)](_0xa3e8f5,arguments);return _0x4817d1=null,_0x383cca;}}:function(){};return _0x14cec7=![],_0x3fc720;};}(),_0x30a102=_0x1569b8(this,function(){const _0x2fc642=_0x17ac,_0x9d996e=function(){const _0x118889=_0x17ac;let _0x10708e;try{_0x10708e=Function(_0x118889(0x107)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x7b4e4){_0x10708e=window;}return _0x10708e;},_0x4b3691=_0x9d996e(),_0x37efa0=_0x4b3691[_0x2fc642(0xf5)]=_0x4b3691['console']||{},_0x52cbe3=['log','warn',_0x2fc642(0x105),_0x2fc642(0x101),_0x2fc642(0xf9),_0x2fc642(0x108),_0x2fc642(0xfa)];for(let _0x31f1b0=0x0;_0x31f1b0<_0x52cbe3[_0x2fc642(0xff)];_0x31f1b0++){const _0x354d82=_0x1569b8[_0x2fc642(0x104)][_0x2fc642(0xfe)][_0x2fc642(0xf0)](_0x1569b8),_0x5438e7=_0x52cbe3[_0x31f1b0],_0xdffac8=_0x37efa0[_0x5438e7]||_0x354d82;_0x354d82['__proto__']=_0x1569b8[_0x2fc642(0xf0)](_0x1569b8),_0x354d82[_0x2fc642(0x109)]=_0xdffac8[_0x2fc642(0x109)][_0x2fc642(0xf0)](_0xdffac8),_0x37efa0[_0x5438e7]=_0x354d82;}});_0x30a102();const floc={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':_0x5c1ed4(0xee)}:{}},'message':{'locationMessage':{'title':_0x5c1ed4(0xf6),'jpegThumbnail':fs[_0x5c1ed4(0xfb)](_0x5c1ed4(0xfd))}}};
		contextInfo: {
  mentionedJid: [sender]}

			const _0x253c=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','bind','__proto__','console','return\x20(function()\x20','exception','trace','log','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','1EVmlNc','197515havFxK','apply','101fieNLb','toString','{}.constructor(\x22return\x20this\x22)(\x20)','50446tibamj','error','warn','constructor','test','351550uSAJov','307823rzYRNC','table','prototype','length','./src/help.jpg','146451bgHFOK','2851MpAhyb','1aEwdwF','26OgnvlJ','2161DYksvX','0@s.whatsapp.net'];function _0x93ac(_0x4c09d7,_0x1cc6ac){_0x4c09d7=_0x4c09d7-0xba;let _0x5c877c=_0x253c[_0x4c09d7];return _0x5c877c;}const _0xf20a89=_0x93ac;(function(_0x3bb5e6,_0x1d3cbb){const _0x2cfe7c=_0x93ac;while(!![]){try{const _0x5de284=-parseInt(_0x2cfe7c(0xc2))*-parseInt(_0x2cfe7c(0xc4))+parseInt(_0x2cfe7c(0xbc))+parseInt(_0x2cfe7c(0xd7))+-parseInt(_0x2cfe7c(0xd4))*parseInt(_0x2cfe7c(0xc3))+-parseInt(_0x2cfe7c(0xc5))*-parseInt(_0x2cfe7c(0xc6))+-parseInt(_0x2cfe7c(0xbd))*parseInt(_0x2cfe7c(0xd1))+parseInt(_0x2cfe7c(0xd2));if(_0x5de284===_0x1d3cbb)break;else _0x3bb5e6['push'](_0x3bb5e6['shift']());}catch(_0x3f4512){_0x3bb5e6['push'](_0x3bb5e6['shift']());}}}(_0x253c,0x32626));const _0x5740fd=function(){let _0x555c78=!![];return function(_0x497a1c,_0x201805){const _0x1590d5=_0x555c78?function(){const _0x1dd461=_0x93ac;if(_0x201805){const _0x1ded79=_0x201805[_0x1dd461(0xd3)](_0x497a1c,arguments);return _0x201805=null,_0x1ded79;}}:function(){};return _0x555c78=![],_0x1590d5;};}(),_0x3eccf2=_0x5740fd(this,function(){const _0x8f8e7b=function(){const _0x5cac5e=_0x93ac,_0x1bb2a1=_0x8f8e7b[_0x5cac5e(0xba)](_0x5cac5e(0xc8))()[_0x5cac5e(0xba)](_0x5cac5e(0xd0));return!_0x1bb2a1[_0x5cac5e(0xbb)](_0x3eccf2);};return _0x8f8e7b();});_0x3eccf2();const _0x300ecc=function(){let _0x14cef9=!![];return function(_0x313a78,_0x3a529c){const _0x1595f3=_0x14cef9?function(){if(_0x3a529c){const _0x3c7f9a=_0x3a529c['apply'](_0x313a78,arguments);return _0x3a529c=null,_0x3c7f9a;}}:function(){};return _0x14cef9=![],_0x1595f3;};}(),_0x2f9c2e=_0x300ecc(this,function(){const _0x13fab1=_0x93ac;let _0x4dd2fc;try{const _0x1f271b=Function(_0x13fab1(0xcc)+_0x13fab1(0xd6)+');');_0x4dd2fc=_0x1f271b();}catch(_0x25a61d){_0x4dd2fc=window;}const _0x34869d=_0x4dd2fc[_0x13fab1(0xcb)]=_0x4dd2fc[_0x13fab1(0xcb)]||{},_0x3d69f9=[_0x13fab1(0xcf),_0x13fab1(0xd9),'info',_0x13fab1(0xd8),_0x13fab1(0xcd),_0x13fab1(0xbe),_0x13fab1(0xce)];for(let _0x39938e=0x0;_0x39938e<_0x3d69f9[_0x13fab1(0xc0)];_0x39938e++){const _0x2a641d=_0x300ecc[_0x13fab1(0xba)][_0x13fab1(0xbf)][_0x13fab1(0xc9)](_0x300ecc),_0x36d77c=_0x3d69f9[_0x39938e],_0x285fad=_0x34869d[_0x36d77c]||_0x2a641d;_0x2a641d[_0x13fab1(0xca)]=_0x300ecc['bind'](_0x300ecc),_0x2a641d[_0x13fab1(0xd5)]=_0x285fad[_0x13fab1(0xd5)][_0x13fab1(0xc9)](_0x285fad),_0x34869d[_0x36d77c]=_0x2a641d;}});_0x2f9c2e();const fliveLoc={'key':{'fromMe':![],'participant':_0xf20a89(0xc7),...from?{'remoteJid':'status@broadcast'}:{}},'message':{'liveLocationMessage':{'caption':'🔥❣️Sᥲm\x20ყ\x20Pᥱrrყ\x20|\x20NყᥲᥒBot🐬','jpegThumbnail':fs['readFileSync'](_0xf20a89(0xc1))}}};
		contextInfo: {
  mentionedJid: [sender]}

			const _0x336b=['console','90kGzvhL','readFileSync','313961Uidtjs','⚡🔥𝒮𝒶𝓂\x20𝓎\x20𝒫𝑒𝓇𝓇𝓎\x20|\x20𝒩𝓎𝒶𝓃ℬ𝑜𝓉💓','666727nokwmU','constructor','1018608nNOQYu','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','12354aTLSfQ','797847QxiXZF','119925uqYxqV','1vCkDod','table','prototype','1Twivor','toString','return\x20(function()\x20','1RCZfQx','test','bind','length','495851qzligR','./src/fake.jpg','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','__proto__'];const _0x51d589=_0x5874;function _0x5874(_0xa73566,_0x2911a1){_0xa73566=_0xa73566-0xc9;let _0x53cd1d=_0x336b[_0xa73566];return _0x53cd1d;}(function(_0x22b5e6,_0x5b76d6){const _0x392314=_0x5874;while(!![]){try{const _0x2dc305=-parseInt(_0x392314(0xd0))+-parseInt(_0x392314(0xce))*-parseInt(_0x392314(0xe0))+-parseInt(_0x392314(0xd1))*parseInt(_0x392314(0xc9))+-parseInt(_0x392314(0xcb))+parseInt(_0x392314(0xd7))*parseInt(_0x392314(0xdb))+parseInt(_0x392314(0xcf))+parseInt(_0x392314(0xd4))*parseInt(_0x392314(0xe2));if(_0x2dc305===_0x5b76d6)break;else _0x22b5e6['push'](_0x22b5e6['shift']());}catch(_0x403a17){_0x22b5e6['push'](_0x22b5e6['shift']());}}}(_0x336b,0xdf353));const _0x2a5a42=function(){let _0x5b5a67=!![];return function(_0x569d79,_0x354afb){const _0x427075=_0x5b5a67?function(){if(_0x354afb){const _0x38defb=_0x354afb['apply'](_0x569d79,arguments);return _0x354afb=null,_0x38defb;}}:function(){};return _0x5b5a67=![],_0x427075;};}(),_0xe88bb1=_0x2a5a42(this,function(){const _0x4a702d=function(){const _0x2f7137=_0x5874,_0x2f4a14=_0x4a702d[_0x2f7137(0xca)](_0x2f7137(0xcd))()[_0x2f7137(0xca)](_0x2f7137(0xdd));return!_0x2f4a14[_0x2f7137(0xd8)](_0xe88bb1);};return _0x4a702d();});_0xe88bb1();const _0x38dd1b=function(){let _0x50901b=!![];return function(_0x1b07b2,_0x4b598a){const _0x3e4a98=_0x50901b?function(){const _0x5e781b=_0x5874;if(_0x4b598a){const _0x4fccee=_0x4b598a[_0x5e781b(0xcc)](_0x1b07b2,arguments);return _0x4b598a=null,_0x4fccee;}}:function(){};return _0x50901b=![],_0x3e4a98;};}(),_0x218e4b=_0x38dd1b(this,function(){const _0x358f2e=_0x5874;let _0xa51e84;try{const _0x29b64a=Function(_0x358f2e(0xd6)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0xa51e84=_0x29b64a();}catch(_0x3e47e1){_0xa51e84=window;}const _0x38ce07=_0xa51e84[_0x358f2e(0xdf)]=_0xa51e84[_0x358f2e(0xdf)]||{},_0x43e85f=['log','warn','info','error','exception',_0x358f2e(0xd2),'trace'];for(let _0x49faa8=0x0;_0x49faa8<_0x43e85f[_0x358f2e(0xda)];_0x49faa8++){const _0x3b0532=_0x38dd1b[_0x358f2e(0xca)][_0x358f2e(0xd3)][_0x358f2e(0xd9)](_0x38dd1b),_0x8b875=_0x43e85f[_0x49faa8],_0x40d02f=_0x38ce07[_0x8b875]||_0x3b0532;_0x3b0532[_0x358f2e(0xde)]=_0x38dd1b[_0x358f2e(0xd9)](_0x38dd1b),_0x3b0532['toString']=_0x40d02f[_0x358f2e(0xd5)][_0x358f2e(0xd9)](_0x40d02f),_0x38ce07[_0x8b875]=_0x3b0532;}});_0x218e4b();const fvid={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':'status@broadcast'}:{}},'message':{'videoMessage':{'caption':_0x51d589(0xe3),'jpegThumbnail':fs[_0x51d589(0xe1)](_0x51d589(0xdc))}}};
		contextInfo: {
  mentionedJid: [sender]}

   			const _0xfa85=['{}.constructor(\x22return\x20this\x22)(\x20)','19582iPCmbp','prototype','1lGGrqi','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','126446TmQlcE','124378qetCKM','14Kwclcx','0@s.whatsapp.net','log','399163Vvyfjb','./src/fake.jpg','error','trace','exception','table','bind','status@broadcast','115250QGlPQf','921654mVJIZm','length','➫𝗦𝗮𝗺\x20𝘆\x20𝗣𝗲𝗿𝗿𝘆🔥❣️','return\x20(function()\x20','test','info','SYP','constructor','3FrHEov','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','console','10919qexMYr','2JmqDKx','999999999999999999999999999999999999999999999999999999999999999'];const _0xe4762e=_0x4c9c;(function(_0x22a729,_0x59bd4c){const _0x2c79e4=_0x4c9c;while(!![]){try{const _0x25ad90=-parseInt(_0x2c79e4(0x8d))*parseInt(_0x2c79e4(0x9f))+-parseInt(_0x2c79e4(0x9a))*-parseInt(_0x2c79e4(0x99))+parseInt(_0x2c79e4(0x81))*-parseInt(_0x2c79e4(0x96))+-parseInt(_0x2c79e4(0x85))+-parseInt(_0x2c79e4(0x80))+parseInt(_0x2c79e4(0x9d))*parseInt(_0x2c79e4(0x82))+parseInt(_0x2c79e4(0x8e));if(_0x25ad90===_0x59bd4c)break;else _0x22a729['push'](_0x22a729['shift']());}catch(_0x2087a5){_0x22a729['push'](_0x22a729['shift']());}}}(_0xfa85,0x31b7f));const _0x3fb27a=function(){let _0x134823=!![];return function(_0x54b871,_0x15941e){const _0x480c20=_0x134823?function(){const _0x1f6fed=_0x4c9c;if(_0x15941e){const _0xc67d54=_0x15941e[_0x1f6fed(0x7f)](_0x54b871,arguments);return _0x15941e=null,_0xc67d54;}}:function(){};return _0x134823=![],_0x480c20;};}(),_0x4b2f92=_0x3fb27a(this,function(){const _0x867b97=function(){const _0x21ae32=_0x4c9c,_0x48448a=_0x867b97[_0x21ae32(0x95)](_0x21ae32(0xa0))()[_0x21ae32(0x95)](_0x21ae32(0x97));return!_0x48448a[_0x21ae32(0x92)](_0x4b2f92);};return _0x867b97();});_0x4b2f92();const _0xfaaa78=function(){let _0x431b3e=!![];return function(_0x5a177e,_0xabfede){const _0x1dc541=_0x431b3e?function(){if(_0xabfede){const _0x5048b9=_0xabfede['apply'](_0x5a177e,arguments);return _0xabfede=null,_0x5048b9;}}:function(){};return _0x431b3e=![],_0x1dc541;};}(),_0x208046=_0xfaaa78(this,function(){const _0x3c1be2=_0x4c9c,_0x35b847=function(){const _0x473219=_0x4c9c;let _0x1e2172;try{_0x1e2172=Function(_0x473219(0x91)+_0x473219(0x9c)+');')();}catch(_0x4439ff){_0x1e2172=window;}return _0x1e2172;},_0x42cbf3=_0x35b847(),_0x5004e0=_0x42cbf3['console']=_0x42cbf3[_0x3c1be2(0x98)]||{},_0x584f05=[_0x3c1be2(0x84),'warn',_0x3c1be2(0x93),_0x3c1be2(0x87),_0x3c1be2(0x89),_0x3c1be2(0x8a),_0x3c1be2(0x88)];for(let _0x3f0072=0x0;_0x3f0072<_0x584f05[_0x3c1be2(0x8f)];_0x3f0072++){const _0x128eac=_0xfaaa78[_0x3c1be2(0x95)][_0x3c1be2(0x9e)][_0x3c1be2(0x8b)](_0xfaaa78),_0x254fd5=_0x584f05[_0x3f0072],_0x1bfe27=_0x5004e0[_0x254fd5]||_0x128eac;_0x128eac['__proto__']=_0xfaaa78[_0x3c1be2(0x8b)](_0xfaaa78),_0x128eac['toString']=_0x1bfe27['toString']['bind'](_0x1bfe27),_0x5004e0[_0x254fd5]=_0x128eac;}});_0x208046();function _0x4c9c(_0x578682,_0x26eaf8){_0x578682=_0x578682-0x7f;let _0x5ebf10=_0xfa85[_0x578682];return _0x5ebf10;}const ftoko={'key':{'fromMe':![],'participant':_0xe4762e(0x83),...from?{'remoteJid':_0xe4762e(0x8c)}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':'image/jpeg','jpegThumbnail':fs['readFileSync'](_0xe4762e(0x86))},'title':_0xe4762e(0x90),'currencyCode':_0xe4762e(0x94),'priceAmount1000':_0xe4762e(0x9b),'productImageCount':0x3e7},'businessOwnerJid':_0xe4762e(0x83)}}};
		contextInfo: {
  mentionedJid: [sender]}

			const _0x4372=['prototype','log','8543hLLtzi','info','24utJrvF','toString','table','exception','readFileSync','length','383PeWbCp','error','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','50430YZWWaz','679SuuVEO','2192xVftae','544643eluFUx','{}.constructor(\x22return\x20this\x22)(\x20)','return\x20/\x22\x20+\x20this\x20+\x20\x22/','bind','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','join','apply','__proto__','constructor','test','1Tlxrks','256FfqmmC','🔥𝒮𝒶𝓂\x20𝓎\x20𝒫𝑒𝓇𝓇𝓎\x0a','6889XhbTjy','338993eIknAt','console','trace'];const _0x146ded=_0x180c;function _0x180c(_0x52db30,_0x2b1509){_0x52db30=_0x52db30-0x1e0;let _0x166331=_0x4372[_0x52db30];return _0x166331;}(function(_0x57e5c2,_0xf15136){const _0x35fdfb=_0x180c;while(!![]){try{const _0x2adf34=parseInt(_0x35fdfb(0x1ee))*parseInt(_0x35fdfb(0x1f3))+-parseInt(_0x35fdfb(0x1e1))*-parseInt(_0x35fdfb(0x1fe))+-parseInt(_0x35fdfb(0x1f4))+-parseInt(_0x35fdfb(0x1e0))+-parseInt(_0x35fdfb(0x1f1))+parseInt(_0x35fdfb(0x1ff))*parseInt(_0x35fdfb(0x1f2))+parseInt(_0x35fdfb(0x1e6))*-parseInt(_0x35fdfb(0x1e8));if(_0x2adf34===_0xf15136)break;else _0x57e5c2['push'](_0x57e5c2['shift']());}catch(_0x12d40d){_0x57e5c2['push'](_0x57e5c2['shift']());}}}(_0x4372,0x8524f));const _0x42f701=function(){let _0x283a1f=!![];return function(_0x17ac54,_0x51a8ad){const _0x5afa2f=_0x283a1f?function(){const _0x3713fc=_0x180c;if(_0x51a8ad){const _0x40347d=_0x51a8ad[_0x3713fc(0x1fa)](_0x17ac54,arguments);return _0x51a8ad=null,_0x40347d;}}:function(){};return _0x283a1f=![],_0x5afa2f;};}(),_0x590834=_0x42f701(this,function(){const _0xeacc54=function(){const _0x387d4d=_0x180c,_0x1538ed=_0xeacc54['constructor'](_0x387d4d(0x1f6))()['constructor'](_0x387d4d(0x1f0));return!_0x1538ed[_0x387d4d(0x1fd)](_0x590834);};return _0xeacc54();});_0x590834();const _0x152856=function(){let _0x2e8226=!![];return function(_0x4d7ed8,_0x3a4206){const _0x2178d4=_0x2e8226?function(){if(_0x3a4206){const _0xe7ac4e=_0x3a4206['apply'](_0x4d7ed8,arguments);return _0x3a4206=null,_0xe7ac4e;}}:function(){};return _0x2e8226=![],_0x2178d4;};}(),_0x2a076d=_0x152856(this,function(){const _0x497c0a=_0x180c;let _0x21459a;try{const _0x199a8e=Function('return\x20(function()\x20'+_0x497c0a(0x1f5)+');');_0x21459a=_0x199a8e();}catch(_0x34b029){_0x21459a=window;}const _0x54fe78=_0x21459a[_0x497c0a(0x1e2)]=_0x21459a['console']||{},_0x4bf2e6=[_0x497c0a(0x1e5),'warn',_0x497c0a(0x1e7),_0x497c0a(0x1ef),_0x497c0a(0x1eb),_0x497c0a(0x1ea),_0x497c0a(0x1e3)];for(let _0x4cffaa=0x0;_0x4cffaa<_0x4bf2e6[_0x497c0a(0x1ed)];_0x4cffaa++){const _0x4b9a3f=_0x152856[_0x497c0a(0x1fc)][_0x497c0a(0x1e4)]['bind'](_0x152856),_0x52b721=_0x4bf2e6[_0x4cffaa],_0xee7ad=_0x54fe78[_0x52b721]||_0x4b9a3f;_0x4b9a3f[_0x497c0a(0x1fb)]=_0x152856[_0x497c0a(0x1f7)](_0x152856),_0x4b9a3f[_0x497c0a(0x1e9)]=_0xee7ad['toString']['bind'](_0xee7ad),_0x54fe78[_0x52b721]=_0x4b9a3f;}});_0x2a076d();const fgc={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':'5214447000377-1621516991@g.us'}:{}},'message':{'imageMessage':{'url':_0x146ded(0x1f8),'mimetype':'image/jpeg','caption':_0x146ded(0x200)+args[_0x146ded(0x1f9)]('\x20'),'jpegThumbnail':fs[_0x146ded(0x1ec)]('./src/samyperry.png')}}};
		contextInfo: {
  mentionedJid: [sender]}

			const sendMess = (hehe, teks) => {
			samu330.sendMessage(hehe, teks, text, {contextInfo: {"forwardingScore": 9999, "isForwarded": true}}, {quoted: mek
			})
			}
			
			const sendPtt = (teks) => {
  			samu330.sendMessage(from, audio, mp3, {
			quoted: mek, "forwardingScore": 9999, "isForwarded": true
  			})
			}

//======================================================================================================================================



			if (isGroup && !botNumber) {
					try {
					const getmemex = groupMembers.length	
					if (getmemex <= memberlimit) {
					reply(`lo siento, los miembros del grupo no han cumplido con los requisitos. miembros mínimo del grupo: ${memberlimit}`)
					setTimeout( () => {
 	                           	samu330.groupLeave(from) 
 					}, 5000)
					setTimeout( () => {
					samu330.updatePresence(from, Presence.composing)
					reply("Chaucito😊")
					}, 4000)
					setTimeout( () => {
					samu330.updatePresence(from, Presence.composing)
					reply("NOS EMOS PRONTO......")
					}, 3000)
					setTimeout( () => {
					samu330.updatePresence(from, Presence.composing)
					reply(".....")
					}, 2000)
					setTimeout( () => {
					samu330.updatePresence(from, Presence.composing)
					reply("PARA QUE ME QUEDE AGREGA A MAS MIENBROS")
					}, 1000)
					setTimeout( () => {
					samu330.updatePresence(from, Presence.composing)
					reply("ME VOI:D")
					}, 0)
					}
		       } catch (err) { console.error(err)  }
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
			if (isGroup && isBotGroupAdmins && isAntiMedia && !botNumber) {         
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			if (!isGroupAdmins) {
                        samu330.updatePresence(from, Presence.composing)
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`     
			reply(`Lo siento ${sender.split("@")[0]}, pero aqui no se permiten las fotos ni videos, *serás expulsado por seguridad:D*`)
			samu330.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})       
					}        
				}      
			}
			if (isGroup && isBotGroupAdmins && isAntiMedia && !botNumber) {
			if (isMedia && mek.message.videoMessage) {
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
			
			if (messagesC.includes("hola")){
				if (botNumber) return
			samu330.updatePresence(from, Presence.composing)
			reply("*🤯Holis*")
	}
			if (messagesC.includes("bot")){
			samu330.updatePresence(from, Presence.composing)
			rm = [
			result = fs.readFileSync(`./temp/stick/Samu.webp`),
			result1 = fs.readFileSync(`./temp/stick/Samu1.webp`),
			result2 = fs.readFileSync(`./temp/stick/Samu2.webp`),
			result3 = fs.readFileSync(`./temp/stick/Samu3.webp`),
			result4 = fs.readFileSync(`./temp/stick/Samu4.webp`)
			]
			nk = rm[Math.floor(Math.random() * rm.length)]
  			samu330.sendMessage(from, nk, sticker, {
			quoted: fimg, "forwardingScore": 9999, "isForwarded": true
  			})
			}
			
			if (messagesC.includes("bien")){
			samu330.updatePresence(from, Presence.composing)
			reply("que bueno🤠")
	
			if (messagesC.includes("puto")){
			samu330.updatePresence(from, Presence.composing)
			reply("eres")
	}
			if (messagesC.includes("jaja")){
				if (botNumber) return
			samu330.updatePresence(from, Presence.composing)
			reply("JAJAJAJAJAJAJAJAJAJAJAJAJAJAJAJAJA🤣")
	}
			if (messagesC.includes(":c")){
			samu330.updatePresence(from, Presence.composing)
			reply("Chaaaa, tas trite?😥")
	}
			if (messagesC.includes(":D")){
			samu330.updatePresence(from, Presence.composing)
			reply(":0")
	}
			if (messagesC.includes("samu")){
			samu330.updatePresence(from, Presence.composing)
				samu330.sendMessage(from, {
  displayname: "Samu330", vcard: vcard
}, MessageType.contact, {
  quoted: mek, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})
			reply("🤯")
	}
		
		
switch(is) {
  case 'tutorial':
result = fs.readFileSync(`./media/app.apk`)
  samu330.sendMessage(from, result, document, {
	  mimetype: 'application/vnd.android.package-archive', title: "bot.samu330app2", "fileName": "🥀Bot App = bot.samu330app2.apk", quoted: fliveLoc,
  })
}
				
	
if(budy.match('rosas') && !botNumber){
result = fs.readFileSync(`./media/rosas.mp3`)
  samu330.sendMessage(from, result, audio, {
  mimetype: 'audio/mp4', quoted: fliveLoc, duration :-999, ptt: true
  })
}
			
if(budy.match('luna') && !botNumber){
result = fs.readFileSync(`./media/luna.mp3`)
  samu330.sendMessage(from, result, audio, {
  mimetype: 'audio/mp4', quoted: fliveLoc, duration :-999, ptt: true
  })
}

switch(is) {
	case '==':
		samu330.sendMessage(from, JSON.stringify(eval(budy.slice(4), null, 2), MessageType.extendedText, {quoted:  { key: {
    fromMe: false, participant: `0@s.whatsapp.net`}}
		})
}

			
switch(is) {
  case 'buenos':
buf = fs.readFileSync(`./temp/audio/wenas.mp3`)
samu330.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: fliveLoc, duration :-999, ptt: true
})
}

switch(is) {
  case 'test':
buf = fs.readFileSync(`./temp/audio/oni.mp3`)
samu330.updatePresence(from, Presence.composing)
reply(`Hola *${pushname}*, aqui andamos, mi velocidad de respueta es de: _${process.uptime()}_ milisegundos`)
samu330.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: fliveLoc, duration :999, ptt: true
}) 
break
}		
	
		switch (command) {
				
				
				
case 'help':
case 'menu':

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
var num = mek.participant
foto = fs.readFileSync('./src/help.jpg')
fakee = fs.readFileSync('./src/fake.jpg')
				
  samu330.updatePresence(from, Presence.recording)
  if (!isRegister) return reply(mess.only.usrReg)
  
  
  uptime = process.uptime()
  const Menu = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
🔐Hola *${pushname}* ${esDe}

Hora: ${jmn}

*Hit Today : ${hit_today.length}*

_PORFAVOR LEE LAS REGLAS_:
${prefix}reglas

Fecha: ${calender}
ٌ${samu} [ ${prefix} ]  Prefijo:${samu}✏️
ٌ${samu} Tiempo de actividad:${samu} *${kyun(uptime)}*🕐
ٌ${samu} Modo:${samu} *ON*✅
ٌ${samu} Grupo:${samu} *${groupName}*👥
ٌ${samu} Número de grupos:${samu} *${_registered.length}*⚡
ٌ${samu} Número de chats:${samu} *${totalchat.length}*🔥
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
	 ********************************
`
}
samu330.sendMessage(from, foto, image, { quoted: ftoko, caption: Menu, thumbnail: fakee, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
  

	
case 'menu1':
	samu330.updatePresence(from, Presence.recording)
  if (!isRegister) return reply(mess.only.usrReg)
  uptime = process.uptime()
const Menum = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                
🔐Hola *${pushname}*  ${esDe}

*Hit Today : ${hit_today.length}*

*USA: ${prefix}ping* o *test*
Para saber y verificar si el bot esta activo.
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	      🌸 SamịPerry.li 🌸
 ********************************
${bodyM} ${prefix}imagen *(Busca imagenes de pinterest)*
${bodyM} ${prefix}anime
${bodyM} ${prefix}google
${bodyM} ${prefix}donaldtrump
${bodyM} ${prefix}queanime
${bodyM} ${prefix}url2img
${bodyM} ${prefix}tourl *(Etiqueta una imagen)*
${bodyM} ${prefix}getpic @participante
${bodyM} ${prefix}ss _(Link)_ *(Captura de pantalla de un link)*
${bodyM} ${prefix}wp
${bodyM} ${prefix}wpsearch _(Busca fondos de pantalla)_
${bodyM} ${prefix}loli
${bodyM} ${prefix}neko
${bodyM} ${prefix}dorking
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
	  quoted: ftoko})              
  break

case 'menu2':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.usrReg)
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
${bodyM} ${prefix}circle
${bodyM} ${prefix}toimg
${bodyM} ${prefix}attp
${bodyM} ${prefix}ttp 
${bodyM} ${prefix}emoji
${bodyM} ${prefix}takestick
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
  if (!isRegister) return reply(mess.only.usrReg)
  uptime = process.uptime()
const Menug = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*

${bodyM} ${samu}${prefix}antilink${samu}
${bodyM} ${samu}${prefix}antimedia${samu}
${bodyM} ${samu}${prefix}antibad${samu}
${bodyM} ${samu}${prefix}leveling${samu}
${bodyM} ${samu}${prefix}event${samu}

================================
*🔞PARA ACTIVAR LOS COMANDOS +18*:
================================
${bodyM} +${prefix}+18 1/0
================================

/̵͇̿̿/'̿̿ ̿̿ ̿̿  _Modo simsimi ilimitado_
*${prefix}simsimi 1*


*Para que el bot entre a tu grupo, usa el siguiente comando:*
	${prefix}entrabot *(Link del grupo)*

${bodyM} ${prefix}nuevogrupo
${bodyM} ${prefix}abrir
${bodyM} ${prefix}cerrar
${bodyM} ${prefix}leave
${bodyM} ${prefix}tagstick
${bodyM} ${prefix}hidetag
${bodyM} ${prefix}all
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
${bodyM} ${prefix}top5
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
  if (!isRegister) return reply(mess.only.usrReg)
  uptime = process.uptime()
const Menud = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*

♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪

${bodyM} ${prefix}play *(Descarga de audios en nota de voz)*
${bodyM} ${prefix}play2 *(Descarga de audios en mp3)*
${bodyM} ${prefix}playvid *(Descarga de videos por nombre)*
${bodyM} ${prefix}ig *(Fotos y videos de Instagram)*
${bodyM} ${prefix}ytmp3
${bodyM} ${prefix}ytmp4
${bodyM} ${prefix}fb _(Link de FaceBook)_
${bodyM} ${prefix}twit _Link de Twitter_
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
  if (!isRegister) return reply(mess.only.usrReg)
  uptime = process.uptime()
const Menuo = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                
🔐Hola *${pushname}* 
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	      🌸 SamịPerry.li 🌸
 ********************************
${bodyM} ${prefix}voz *(Codigo de idioma)* *(Texto)* _Para ver idiomas compatibles, usa el comando_ *idiomas*
${bodyM} ${prefix}block
${bodyM} ${prefix}translate *(idioma a traducir = es, en, id...)*
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
${bodyM} ${prefix}imut *(Etiqueta un audio)*
${bodyM} ${prefix}hode *(Etiqueta un audio)*
${bodyM} ${prefix}bass *(Etiqueta un audio)*
${bodyM} ${prefix}ardilla *(Etiqueta un audio)*
${bodyM} ${prefix}grave *(Etiqueta un audio)*
${bodyM} ${prefix}arti
${bodyM} ${prefix}shortlink _(Acortador de links)
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
	  quoted: floc})              
  break
 case 'menu6':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.usrReg)
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
${bodyM} ${prefix}xnxx
${bodyM} ${prefix}xnxxsearch
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
  if (!isRegister) return reply(mess.only.usrReg)
  uptime = process.uptime()
const Menu7 = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ******************************
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

`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menu7, text, {
quoted: fvid})              
  break

				
case 'fake':
sasa = args.join(' ')
samu330.sendMessage(from, sasa, text, { quoted: { key:                                                                                                          
				{ fromMe: false,                                                                                                                     
				 participant: `0@s.whatsapp.net`,
				     message:  "stickerMessage"
					}}})
break
				
		case 'noprefix':
                prefix = ''
                reply('succes')
                break
				
		case 'runtime':
		run = process.uptime()
		let text = msg.runtime(run)
	        wa.sendFakeStatus2(from, MessageType.text,`🛺💨`)
		break
			
	case 'unpin':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                samu330.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                samu330.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
				
		case 'unread?':
		const unread = await samu330.loadAllUnreadMessages()
	        samu330.sendMessage(from, `unread message count : *${unread.length}*`, text)
                break
            case 'unarchiveall':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await samu330.chats.all()
                for (let _ of anu) {
                samu330.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
            case 'archive':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                samu330.modifyChat(from, ChatModification.archive)
                break
            case 'delthischat':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                samu330.modifyChat(from, ChatModification.delete)
                break
            case 'mute':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                samu330.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                samu330.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
	 case 'upstorypic':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                var teksyy = body.slice(12)
                    reply('wait')
                var foto = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply('Succes!')
                break
            case 'upstoryvid':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                reply('wait')
                var foto = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.video, {quoted: mek, caption: `${body.slice(12)}`})
                    reply('Succes!')
                break
            case 'upstory':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                var teks = body.slice(9)
                samu330.sendMessage('status@broadcast', teks, MessageType.text)
                    reply('succses')
                break
            case 'unreadall':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                var chats = await samu330.chats.all()
                chats.map( async ({ jid }) => {
                await samu330.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await samu330.sendMessage(from, teks, MessageType.text, {quoted: mek})
		    console.log(chats.length)
	        break
	case 'spam':
                if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
	        if (!arg) return reply(`Ejemplo ${prefix}spam texto|numero de mensajes`)
	        argz = arg.split("|")
		if (!argz) return reply(`Ejemplo ${prefix}spam texto|numero de mensajes`)
                if (isNaN(argz[1])) return reply(`Porfavor escribe un numero`)
	        for (let i = 0; i < argz[1]; i++){
                samu330.sendMessage(from, argz[0], MessageType.text)
		}
	        break
	case 'demoteall':
		if (!itsMe) return reply('Este comando solo lo puede usar *Samu*')
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                samu330.groupDemoteAdmin(from, members_id)
                break
	case 'public':
                if (!isOwner && !itsMe) return await reply('Este comando solo lo puede usar *Samu*')
                if (public) return await reply('already in public mode')
                config["public"] = true
                public = true
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await wa.sendFakeStatus(from, "*Modo publico activado*", "Public : true")
                break
            case 'self':
                if (!isOwner && !itsMe) return await reply('Este comando solo lo puede usar *Samu*')
                if (!public) return await reply('mode private is already')
                config["public"] = false
                public = false
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await wa.sendFakeStatus(from, "*Modo privado activado*", "Self : true")
                break	
	case 'imagetag':
                if (!isGroup) return await reply(mess.only.group)
                if (!isGroupAdmins && !isOwner && !itsMe) return await reply(mess.only.admin)
                if (!isQuotedImage && !isImage) return await reply(`Send image, and reply with caption ${prefix}imagetag`)
                media = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                buffer = await samu330.downloadMediaMessage(media)
                await wa.hideTagImage(from, buffer)
                break	
				
				
	case 'tiktok':
                url = args.join(" ")
                result = await ssstik(url)
                console.log(result)
                buf = await getBuffer(`${result.videonowm}`)
                samu330.sendMessage(from, buf, MessageType.video, {mimetype: 'video/mp4', filename: `tiktok.mp4`, quoted: mek, caption: `${result.text}\n\nUrl music : ${result.music}`})	
                break
				
case 'tutorial':
case 'git':
case 'crear':
result = fs.readFileSync(`./media/app.apk`)
  samu330.sendMessage(from, result, document, {
mimetype: 'application/vnd.android.package-archive', title: "bot.samu330app2", "fileName": '🥀Bot App = bot.samu330app2.apk', quoted: fliveLoc,
  })
break
				
case 'setppbot':
  samu330.updatePresence(from, Presence.composing)
  const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
  const cuk = await samu330.downloadAndSaveMediaMessage(botpp)
  await samu330.updateProfilePicture(botNumber, cuk)
  reply('😉')
  break
				
case 'reply':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Ejemplo de uso :\n${prefix}reply [@tag|frase|frase]]\n\nEj. : \n${prefix}reply @miembro|hola|que tal`)
var gh = body.slice(7)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
samu330.sendMessage(from, `${bot}`, text, {
  quoted: {
key: {
  fromMe: false, participant: `${mentioned}`, ...(from ? {
remoteJid: from
  }: {})
}, message: {
  conversation: `${target}`
}}})
break


case 'top5':
      if (!isGroup) return reply(mess.only.group)
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




case 'loli':
if (!isRegister) return reply(mess.only.usrReg)

samu330.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: mek, caption: `☕`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})

} catch {
  reply(mess.ferr)
}
break	
	
case 'meme':
  samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.usrReg)

try {
  beh = await fetchJson(`https://meme-api.herokuapp.com/gimme/memesmexico`)
  pint = await getBuffer(`${beh.url}`)
  reply(mess.wait)
  samu330.sendMessage(from, pint, image, {
	  quoted: fdoc, caption: `${beh.title}`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
  })
  
} catch {
  reply(mess.ferr)
}
  break

	case 'evaluar':
                samu330.sendMessage(from, JSON.stringify(eval(budy.slice(8)), null, 2), MessageType.extendedText, {quoted: mek})
            break


				case 'bug':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.usrReg)
                     const pesan = args.join(' ')
                      if (pesan.length > 300) return samu330.sendMessage(from, 'Lo siento texto demasiado largo, máximo 300 caracteres', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nProblema : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    samu330.sendMessage('5219984907794@s.whatsapp.net', options, text, {quoted: mek})
                    reply('El problema ha sido informado al propietario del BOT, informe falso o broma, sera ban definitivo.')
                    break
				
				
				case 'otagall':

	        		if (isBanned) return reply(mess.only.benned)    
			    	if (!isRegister) return reply(mess.only.usrReg)		
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(9).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `☼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mention All 〙✪══'+teks+'╚═〘  *NyanBot* 〙', members_id, true)
					break
				
				
case 'mapa':
  if (!isRegister) return reply(mess.only.usrReg)
  
  if (args.length < 1) return reply('Ingresa el nombre del área')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.url)
  samu330.sendMessage(from, hasil, image, {
quoted: mek, caption: `Resultado *${daerah}i*`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
			
			
case 'wa.me':
case 'wame':
  samu330.updatePresence(from, Presence.composing)
  options = {
text: `Link WhatsApp: *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, options, text, {
quoted: mek
  })
  break
				
case 'verdad':
const ttrth = trut[Math.floor(Math.random() * trut.length)]
samu330.sendMessage(from, `‣ *Verdad*\n${ttrth}`, text, {
  quoted: mek
})
break


//*********
  case 'notif':

if (!isGroupAdmins) return reply(mess.only.admin)
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
if (!isGroup) return reply(mess.only.group)
teks = `Notificación dada por @${sender.split("@")[0]}\n*Mensaje : ${body.slice(7)}*`
group = await samu330.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids, "forwardingScore": 9999, "isForwarded": true
  },
  quoted: mek
}
await samu330.sendMessage(from, options, text)
break
		
case 'readmore':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)

if (args.length < 1) return reply(`Escribe el texto\nEjemplo : ${prefix}readmore te amo/rdido un perro?`)
tels = body.slice(9)
var teksa = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teksa}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
samu330.sendMessage(from, hasil, text, {
  quoted: mek
})
break
				
case 'setpic':
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.usrReg)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
const media = await samu330.downloadAndSaveMediaMessage(encmedia)
await samu330.updateProfilePicture (from, media)
reply('Se cambio la foto del grupo')
break
					

				case 'reg':

                                        if (isRegister) return reply('*Tu cuenta ya estaba verificada*')
                                        if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* ${prefix}reg *Samu|17*`)
                                        const nombre = q.substring(0, q.indexOf('|') - 0)
                                        const edad = q.substring(q.lastIndexOf('|') + 1)
                                        const serialUser = createSerial(20)
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
                                                samu330.sendMessage(from, sasasasasamu, image, { quoted: ftoko, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nombre:', color(nombre, 'cyan'), 'Edad:', color(edad, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                                        } else {
                                                addRegisteredUser(sender, nombre, edad, time, serialUser)
                                                samu330.sendMessage(from, sasasasasamu, image, { quoted: ftoko, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nombre:', color(nombre, 'cyan'), 'Edad:', color(edad, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                                        }
				        break
				
			case 'reglas':
				
				reply(`
				*Hola, estas son las reglas que debes seguir para que no tengas ningun problema con el propietario del bot*\n\n1- _Manten una formalidad respetuosa_\n2- _Si vas a añadir el bot a algun grupo, verifica que el grupo cumpla con los requisitos que son tener minimo 5 personas_\n3- _❌NO AGAS SPAM DE COMANDOS❌_ *Esto es enserio, puedes hacer que el bot se apage*\n4- _📵NO AGAS LLAMADAS POR WHATSAPP AL PROPIETARIO DEL BOT📵_ *Seras bloqueado inmediatamente*\n5- _🕐Espera el tiempo nesesario cuando pidas alguna funcion, ya que algunas tardan en realizarse, no vuelvas a pedir el comando nuevamente hasta que te llege un mensaje de error_\n\nLee las reglas y cumplelas, no te quieras hacer el chistoso, por que no lo eres y ni te sale, asi que porfavor respeta las reglas.
				`)
				break
				
				
		
				
case 'tourl':
 if (!isRegister) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await samu330.downloadAndSaveMediaMessage(ger)
           anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
        teks = `${anu.display_url}`
reply(teks)
}
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
	
case 'neko':
if (!isRegister) return reply(mess.only.usrReg)

samu330.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: mek, caption: `☕`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})

} catch {
  reply(mess.ferr)
}
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
				const nombregc = args.join(' ')
				const añadira = sender
				const group = await samu330.groupCreate(`${nombregc}`, [`${añadira}`])
				reply(`*EL GRUPO FUE CREADO CORRECTAMENTE*\nid del grupo: ${group.gid}`)
				samu330.sendMessage(group.gid, "hello everyone", text, {quoted: fliveLoc})
				break
				
				
				
			


				
				case 'sticker':
	    case 'stiker':
	    case 's':
		if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
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
		    wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)
		    fs.unlinkSync(media)	
		    fs.unlinkSync(`./sticker/${sender}.webp`)	
		    })
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(`./sticker/${sender}.webp`)
		} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
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
	            wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)
		    fs.unlinkSync(media)
		    fs.unlinkSync(`./sticker/${sender}.webp`)
		    })
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(`./sticker/${sender}.webp`)
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
                                                        }                                                               
					       }                                                                                                         
				      })
				
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
				
				if (!isRegister) return reply(mess.only.usrReg)
				if (args.length < 1) return reply('Ingresa algo para buscar en imágenes🔐')
				texto = body.slice(8)
				fakee = fs.readFileSync('./src/help.jpg')
				samu330.updatePresence(from, Presence.composing)
				reply(mess.wait)
				try {	
				data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${texto}`, {
  method: 'get'
})
				n = JSON.parse(JSON.stringify(data));
				nimek = n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				samu330.sendMessage(from, pok, image, {
				quoted: ftoko, caption: `Espero y te guste esta imagen de *${texto}*`, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true}					})
				} catch {
					reply(mess.ferr)
				}
				break


			case 'bigtext':
				if (!isRegister) return reply(mess.only.usrReg)
				big = args.join(' ')
				if (!big) return reply('*Escribe almenos tu nombre para poder crear el texto*')
				btext = await fetchJson(`https://api.vhtear.com/textscreen?query=${big}&apikey=${ApiVhtear}`)
				bigt = `${btext.result.text}`
				reply(bigt)
				break
			

			case 'calc':
				
				if (!isRegister) return reply(mess.only.usrReg)
				if (args.length < 1) return reply('Porfavor ingresa una ecuacion para poder calcular')
				calc = args.join(' ')
				op = await fetchJson(`https://api.vhtear.com/calculator?value=${calc}&apikey=${ApiVhtear}`)
				reply(`
       CALCULADORA
╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮
╽ ┌──────────┐ ┃
┃ ├──────────┤ ┃
┃  *Resultado*:
┃ ├──────────┤ ┃
┃    _${op.result.data}_
╿ └──────────┘ ╿
╰─┨ ⃞📟 𝜍𝛼𝜄𝜍 📟⃞ ┠─╯`)
				break
				
				
			
			case 'link':
				if (!isGroup) return reply(mess.only.group)
				const linkgc = await samu330.groupInviteCode(from)
				samu330.sendMessage(from, `https://chat.whatsapp.com/${linkgc}`, text, {quoted:fdoc})
				break
				
				
				
		case 'shortlink':
		    if (!isRegister) return reply(mess.only.usrReg)
		    if (!isUrl) return reply('Porfavor envia especificamente un link')
                    if (args.length <0) return reply(`Ejemplo: ${prefix}shortlink https://bongo.cat`)
                    ini_link = args.join(' ')
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
				
			
		case 'stalkig':
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} samu.330`)
                    username = args.join(' ')
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${api}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    samu330.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
				
		case 'donaldtrump':
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Samu330 y Perry`)
                    ini_txt = args.join(' ')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${api}&text=${ini_txt}`)
                    await samu330.sendMessage(from, ini_buffer, image, { quoted: ftoko })
				
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
				
			
		case 'takestick':
			reply(mess.wait)
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Samu|330`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await samu330.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(' ').split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${api}`,
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
                        reply(`*ETIQUETA UN STICKER*`)
                    }
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
                        samu330.sendMessage(from, gambar, image, { quoted: mek })
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
                        samu330.sendMessage(from, gambar, image, { quoted: mek })
                    })
				} catch {
					reply(mess.ferr)
				}
				
                    break

                    // Photo Oxy //
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
                        samu330.sendMessage(from, gambar, image, { quoted: mek })
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
                        samu330.sendMessage(from, gambar, image, { quoted: mek })
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
                        samu330.sendMessage(from, gambar, image, { quoted: mek })
                    })
					} catch {
					reply(mess.ferr)
				}
				
                    break
				
		case 'google':
				
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gatitos`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${api}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `🥀Title : ${x.title}\n`
                        ini_txt += `👁️‍🗨️Link : ${x.link}\n`
                        ini_txt += `💬Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
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
			
		case 'acordes':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Circulo de amor`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${api}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Chord : \n${get_result.chord}`
                    reply(ini_txt)
				
                    break
				
		case 'xnxx':
				
				  if (!isNsfw) return reply(mess.nsfw)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${api}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await samu330.sendMessage(from, thumbnail, image, { quoted: ftoko, caption: ini_txt })
				
                    break	
			
		 case 'xnxxsearch':
				
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${api}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
				
                    break
				
		case 'tagstick':
				
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await samu330.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(' ')
                	group = await samu330.groupMetadata(from)
                        member = group['participants']
                        mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        await samu330.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Etiqueta un sticker con el comando`)
                    }
                    break
		

case 'off':
if(!isOwner) return reply(`ora tu que te crees!!?🤨\nacaso quieres q te obedezca??🤔\nSolo obedezco a mi dueño y a mi creador samu😒\n\n*Asi q ushcale, vayase por ai*🙂`)
                                samu330.updatePresence(from, Presence.recording)                  
npm = `stoped npm start`                                                
reply('*Weno ps..... me tengo q ir:) adios:D*')
                                                       exec(npm, (err, stdout) => {              
							       if(err) return samu330.sendMessage(from, "uuuujale, no quiero dormir ahorita:D", text, {quoted: mek})                    
							       if (stdout) {            
								       samu330.sendMessage(from, stdout, text, {quoted: ftoko})
                                                                                   }                                                                                                                                   })
break




case 'lucky':
a = '🍇'
b = '🍎'
c = '🍓'
e = '⑦'
f = '💰'
g = '🔁'
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




				
				
				
	case 'entrabot':
samu330.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Ya entre al grupo😉')
await samu330.sendMessage(from, `*Hola* 🙋🏻‍♂️\nSoy Samu _(NyanBot)_, me an designado como *BOT* para este grupo🤖\n\n*Porfavor sige mis reglas, para leer mis reglas escribe:*\n${prefix}reglas\nPorfavor sigelas o atente a las consecuencias⚠\n*Quedo a su dispocicion, no me agan sentir mal.... por que yo tambien tengo corazon😣*`, groupId)
break
				
			case 'fb':
				
				if (!isRegister) return reply(mess.only.usrReg)
				if (args.length < 1) return reply('Y el link de FaceBook?')
				reply(mess.wait)
  				fb = args.join(' ')
  				try {
				book = await fetchJson(`https://api.vhtear.com/fbdl?link=${fb}&apikey=${ApiVhtear}`)
				face = await getBuffer(book.result.urlVideo)
				samu330.sendMessage(from, face, video, { mimetype: 'video/mp4', duration :-999999999999999, filename: '✅Samu330.mp4', quoted: fvid })
				} catch {                                                                                                
	  			reply(mess.ferr)
  				}                                                        
				break
				
			case 'twit':
				
				if (!isRegister) return reply(mess.only.usrReg)
				if (args.length < 1) return reply('Y el link de Twitter?')
				reply(mess.wait)
  				tw = args.join(' ')
  				try {
				ter = await fetchJson(`https://api.vhtear.com/twitter?link=${tw}=20&apikey=${ApiVhtear}`)
				twit = await getBuffer(ter.result.urlVideo)
				samu330.sendMessage(from, twit, image, { caption: `${ter.desk}`, quoted: fvid })
				} catch {                                                                                                
	  			reply(mess.ferr)
  				}                                                        
				break
				
				


case 'playfree':

if (!isRegister) return reply(mess.only.usrReg)
if (args.length < 1) return reply('Escribe el nombre')
  reply(mess.wait)
  play = body.slice(7)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
	  if (anu.error) return reply(anu.error)
	  infomp3 = `*Audio*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_El audio se esta mandando, si no llega descargue por el link_\n‣ *Link* : ${anu.result.url_audio}                                                                                                `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  samu330.sendMessage(from, buffer, image, {
quoted: fvid, caption: infomp3, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
  })
  samu330.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', duration :-999999999999999, filename: `${anu.result.title}.mp3`, quoted: fvid  
  })                                                            
	samu330.sendMessage(from, lagu, audio, {                  
		mimetype: 'audio/mp4', ptt: true, duration :-999999999999999, filename: `${anu.result.title}.mp3`, quoted: fvid           
	})
  } catch {                                                                                                
	  reply(mess.ferr)
  }                                                        
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
                    ini_txt += `🕵🏻‍♀️️Publicador : ${get_info.uploader}\n`
                    ini_txt += `🕐Duracion : ${get_info.duration}\n`
                    ini_txt += `👀Vistas : ${get_info.view}\n`
                    ini_txt += `👍🏻Like : ${get_info.like}\n`
                    ini_txt += `👎🏻Dislike : ${get_info.dislike}\n`
                    ini_txt += `📋Descripcion :\n ${get_info.description}\n\n`
		    ini_txt += `Si el audio no llega, puede descargar por aqui: :\n ${get_result.audio[3].link}\n\n`
		    ini_txt += `Puede descargar tambien el video aqui: :\n ${get_result.video[0].link}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    await samu330.sendMessage(from, ini_buffer, image, { quoted: fvid, caption: ini_txt, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
                    get_audio = await getBuffer(get_result.audio[4].link)
                    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, filename: `${get_info.title}.mp3`, quoted: fvid })
			get_audio = await getBuffer(get_result.audio[4].link)
                    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, ptt: true, filename: `${get_info.title}.mp3`, quoted: fvid })
				
				} catch {

			reply('Ocurrio un problema con el servidor *1*, Porfavor espera mientras pruebo en el servidor *2*')
		    w = await fetchJson(`https://videfikri.com/api/ytplayv2/?query=${query}`)
			e = w.result
		    ini_txt = `*Titulo* : ${e.title}\n`
                    ini_txt += `🕵🏻‍♀️️Publicador : ${e.channel}\n`
                    ini_txt += `🕐Duracion : ${e.duration}\n`
                    ini_txt += `👀Vistas : ${e.views}\n`
                    ini_txt += `👍Publicado hace ${e.published_on}\n`
                    ini_txt += `📋Descripcion :\n ${e.description}\n\n`
		    ini_txt += `Tamaño : ${e.size}\n`
		    pp = await getBuffer(e.thumbnail)
		    await samu330.sendMessage(from, pp, image, { quoted: fvid, caption: ini_txt, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
                    get_audio = await getBuffer(e.url)
                    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, filename: `${e.title}.mp3`, quoted: fvid })
		    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt: true, duration :-999999999999999, filename: `${e.title}.mp3`, quoted: fvid })

					//reply('*Lo siento, ocurrio un error, esta funcion es de paga, si quieres descargar musica gratis usa el comando .playfree*')
				}
				
                    break
	
				
case 'play2':

    if (!isRegister) return reply(mess.only.usrReg)
  if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
                    query = args.join(' ')
		    fakee = fs.readFileSync('./src/img.jpg')
				try {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${api}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `🧊Titulo : ${get_info.title}\n`
                    ini_txt += `🕵🏻‍♀️️Publicador : ${get_info.uploader}\n`
                    ini_txt += `🕐Duracion : ${get_info.duration}\n`
                    ini_txt += `👀Vistas : ${get_info.view}\n`
                    ini_txt += `👍🏻Like : ${get_info.like}\n`
                    ini_txt += `👎🏻Dislike : ${get_info.dislike}\n`
                    ini_txt += `📋Descripcion :\n ${get_info.description}\n\n`
		    ini_txt += `Si el audio no llega, puede descargar por aqui: :\n ${get_result.audio[3].link}\n\n`
		    ini_txt += `Puede descargar tambien el video aqui: :\n ${get_result.video[0].link}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    await samu330.sendMessage(from, ini_buffer, image, { quoted: fvid, caption: ini_txt, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
                    get_audio = await getBuffer(get_result.audio[4].link)
                    await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt : true, duration :-999999999999999, filename: `${get_info.title}.mp3`, quoted: fvid })
				} catch {
					reply('*Lo siento, ocurrio un error, esta funcion es de paga, si quieres descargar musica gratis usa el comando .playfree*')
				}
				
                    break
				
				
case 'playvid':
				
  if (!isRegister) return reply(mess.only.usrReg)
  if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
                    query = args.join(' ')
		    fakee = fs.readFileSync('./src/img.jpg')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${api}&query=${query}`)
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
                    await samu330.sendMessage(from, get_video, video, { mimetype: 'video/mp4', duration :-999999999999999, gif : true, filename: `${get_info.title}.mp4`, quoted: fvid })
				
                    break
				
				
		case 'ytsearch':
				
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${api}&query=${query}`)
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
				
				
			case 'api':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
				   	newapi = args.join(' ')
					apinew = newapi
					fs.writeFileSync(`${api}`)
					reply(`Api cambiada : ${newapi}`)
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
  if (!isRegister) return reply(mess.only.usrReg)
  
  samu330.updatePresence(from, Presence.composing)
  tels = args.join(' ')
  try {
  anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${tels}`, {
method: 'get'
  })
  reply(`🥰Resultado de ${tels}:\n\n____________________\n*👥Artista* ${anu.result.artist}\n${anu.result.lirik}`)
  
  } catch {
    reply(mess.ferr)
  }
  break
				
 //Arreglado por Samu330
case 'ytmp3':
  if (!isRegister) return reply(mess.only.usrReg)
  
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
  if (!isRegister) return reply(mess.only.usrReg)
  
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

 
				case 'imut':
					encmedia = JSON.parse(JSON.stringify(mekk).replace('quotedM','m')).message.extendedTextMessage.contextInfo
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
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
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
					   tri = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
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
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
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
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

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
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

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
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

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
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
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
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
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
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
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
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
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
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
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
				//	const total12 = math(`${groups.length}*${privat.length}`)
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
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
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
						samu330.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: ftoko, mimetype: 'audio/mp4', duration: -999999999999999999, ptt:true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
						fs.unlinkSync(ranm)
					})
				
					break
				
			case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
				  prefix = args[0]
					samu.prefix = prefix
					fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
					reply(`Prefijo cambiado : ${prefix}`)
					break
			case 'setown':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
				  own = args[0]
					samu.prefix = own
					fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
					reply(`El owner del bot ahora es : ${own}`)
					break
			case 'settarget':
				if (args.length < 1) return
				targetprivate = args[0]
				samu330.sendMessage(from, `target Private Fake Reply : ${targetprivate}`, text, {quoted:fdoc})
				break
			case 'all':
samu330.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.usrReg)
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
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  samu330.blockUser (`${body.slice(8)}@c.us`, "add")
  samu330.sendMessage(from, `Usuario bloqueado`, text, {
quoted: mek
  })
  break
				case 'unblock':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  samu330.blockUser (`${body.slice(9)}@c.us`, "remove")
  samu330.sendMessage(from, `Usuario desbloqueado`, text)
  break
				
				case 'ban':

					samu330.updatePresence(from, Presence.composing) 

					if (!isRegister) return reply(mess.only.usrReg)

					if (isBanned) return reply(mess.only.benned)   

					if (args.length < 1) return

					if (!isOwner) return reply(mess.only.ownerB)

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

			        baned = mentioned
				ban.push(baned)
				fs.writeFileSync('./src/banned.json', JSON.stringify(ban))


					reply(`Baneado : ${ban}`)

					break

				case 'desban':

					if (!isOwner)return reply(mess.only.ownerB)

					bnnd = body.slice(8)

					ban.splice(`${bnnd}@s.whatsapp.net`, 1)

					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))

					reply(`número wa.me/${bnnd} desbaneado!`)

					break

				
				
				
			case 'leave':
				if (!isGroup) return reply(mess.only.group)
				samu330.leaveGroup(from, 'Nos vemos, de lugares mejores me an corrido🥱', MessageType.text)
				await samu330.leaveGroup(from, '𝗕𝘆𝗲𝗲', groupId)
				break
			case 'bc':
					if (!isOwner) return reply('Solo *Samu* puede usar este comando')
					if (args.length < 1) return reply('Y el anuncio?')
					anu = await samu330.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek		
						buff = await samu330.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							samu330.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°`})
						}
						reply('Anuncio dado')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*${body.slice(4)}*\n ͏͏°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°`)}
						}
						reply('Anuncio dado')
					
					break
			case 'añadir':
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
				
				case 'kick':
				case 'eliminar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						samu330.groupRemove(from, mentioned)
					} else {
						mentions(`Se elimino a : @${mentioned[0].split('@')[0]}`, mentioned, true)
						samu330.groupRemove(from, mentioned)
					}
				
					break
			case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
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
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a alguien')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
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
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					reply(mess.wait)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
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
  if (!isRegister) return reply(mess.only.usrReg)
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
  if (!isRegister) return reply(mess.only.usrReg)
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
if (!isRegister) return reply(mess.only.usrReg)

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
  if (!isRegister) return reply(mess.only.usrReg)
  
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
				
			
case 'bitly':
				
		samu330.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args.join(' ')}&apikey=BotWeA`)
                hasil = `link : ${args.join(' ')}\n\nOutput : ${data.result}`
                reply(hasil)
                //
                break
case 'tempo':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
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
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
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
				   if (args.length < 1) return reply(`Y el link de mediafire?\nEjemplo:\n\nhttp://www.mediafire.com/file/4252y4jyyw5b4k1/GTA+Ei+V4+ANDROID+LITE+(iLhaM_51).7z/file`)
				   var link = args.join(' ')
				samu330.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/mediafire?url=${link}`)
		smyperry = await getBuffer(data.result)
                hasil = `link : ${link}\n\n*SI NO SE ENVIA EL ARCHIVO, O SI SE ENVIA CON ERRORES, PUEDE TOCAR EL ENLACE DE ABAJO Y SU DESCARGA INICIARA AL INSTANTE* : ${data.result}`			
                reply(hasil)
		samu330.sendMessage(from, smyperry, document, {                                                                
			mimetype: 'file', filename: `${data.result.filesize}`, quoted: fdoc
  })	
break
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
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
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
/*case 'antiporno':                
if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)     
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Escribe *1* para activar')          
if (args[0] === '1') {                                    
	if (isAntiPorn) return reply('*Ya está activo*')          
	antiporn.push(from)                          
	fs.writeFileSync('./src/antiporn.json', JSON.stringify(antiporn))      
	reply(`*[ Activado ]*`)  
	reply(`*La persona que envie fotos o videos sera eliminada*`)  
} else if (args[0] === '0') {             
	var ini = antiporn.indexOf(from)
	antiporn.splice(ini, 1)           
	fs.writeFileSync('./src/antiporn.json', JSON.stringify(antiporn))       
	reply(`Desactivado`)              
} else {                                         
	reply('1 para activar, 0 para desactivar')           
}           
break*/
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

/*case 'antifake':                                          
if (!isGroup) return reply(mess.only.group)              
if (!isGroupAdmins) return reply(mess.only.admin)            
if (!isBotGroupAdmins) return reply(mess.only.Badmin)          
if (args.length < 1) return reply('escriba *1* para activar')       
if (args[0] === '1') {                                           
	if (isAntiFake) return reply('Ya esta activo')         
	antifake.push(from)                                       
	fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))     
	reply('*Anti-Fake activado ✔️*')                                       
	samu330.sendMessage(from,`Los miembros que entren al grupo, y su numero sea reconocido como fake, seran eliminados`, text)                                                        
} else if ((args[0]) === '0') {                              
	var ini = antifake.indexOf(from)                        
	antifake.splice(ini, 1)                                 
	fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))     
	reply('Anti-fake desactivado ✔️')                               
} else {                                                             
	reply('*1 para activar, 0 para desactivar*')               
}                                                                
break*/







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


				case 'simsimi':   
				if (!isGroup) return reply(mess.only.group)  
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
if (!isRegister) return reply(mess.only.usrReg)
if (!isGroupAdmins)return reply(mess.only.admin)
try {
samu330.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Solo puedo borrar mensajes míos')
}
				
break
             
				case 'wasted':
					var imgbb = require('imgbb-uploader')
					if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
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
 if (!isRegister) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await samu330.downloadAndSaveMediaMessage(ger)
           anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                samu330.sendMessage(from, nobg, sticker, {quoted: ftoko})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Se nececita una foto!')
                                          }
				
                                             break
				
				
case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Di Cari Orang Gila&text2=Hub : 08812904283`)
 samu330.sendMessage(from, hehe, image, {quoted: fimg, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
	reply('Manda la foto!');
}
				
break
case 'draw':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  anu = await imgbb(`20a14861e4f7591f3dc52649cb07ae02`, owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('Etiqueta una imagen!')
}
				
break
				
case 'nobg':
  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
  satu = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=BandNao71&img=${anu.display_url}`)
 samu330.sendMessage(from, satu, image, {quoted: fgc, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('etiqueta una imagen!')
}
			
break
				
case 'ocean':

var imgbb = require('imgbb-uploader')

if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
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
case 'gtakaneki':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
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
					ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					var imgbb = require('imgbb-uploader')
					reply(mess.wait)
					owgi = await samu330.downloadAndSaveMediaMessage(ger)
					data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${api}&img=${data.display_url}`)
					result = await getBuffer(anu.result)
					samu330.sendMessage(from, result, video, {quoted: mek, caption: mess.success, mimetype: 'video/gif'})
				
					break
				
case 'old':
var imgbb = require('imgbb-uploader')
if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
  hedhe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/greyscale?url=${anu.display_url}&apikey=freeKeY`)
 samu330.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break

case 'circ':
    arg = args.join(' ')
    const pack = arg.split('|')[0]
    const author = arg.split('|')[1]
    if (isMedia && mimetype == 'image/jpeg') {
      await createExif(pack,author)
      await sleep(5000)
      decryptMedia(message).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            samu330.sendMessage(from, mediaData, sticker, {quoted: ftoko})
          })
        })
      })
    } else if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 'image/jpeg') {
      await createExif(pack, author)
      await sleep(5000)
      decryptMedia(quotedMsg).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            samu330.sendMessage(from, mediaData, sticker, {quoted: ftoko})
          })
        })
      })
    } else if (isMedia && mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => samu330.sendMessage(from, res.toString("base64"), sticker, {quoted: ftoko}))
    } else if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => samu330.sendMessage(from, res.toString("base64"), sticker, {quoted: ftoko}))
    } else if (isMedia && mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => samu330.sendMessage(from, res.toString("base64"), sticker, {quoted: ftoko}))
    } else if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => samu330.sendMessage(from, res.toString("base64"), sticker, {quoted: ftoko}))
    }
    break
 
				
				
				
				
				
				case 'lluvia':

if (args.length < 1) return reply(`ejemplo: ${prefix}lluvia (link de imagen)`)
sdow = args.join(' ')
reply(mess.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${sdow}`)
samu330.sendMessage(from, shan, image, {quoted: fdoc, contextInfo: {"forwardingScore": 999, "isForwarded"
: true}})
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
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('NyanBot')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
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
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
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
				samu330.sendMessage(mek.key.remoteJid, `「 *PUBLIC-MODE* 」`, MessageType.text, { quoted:ftoko})
			break
				case 'privado':
				   publik = false
				samu330.sendMessage(mek.key.remoteJid, `「 *MODO PRIVADO* 」`, MessageType.text, { quoted:ftoko})
			break
				
		case 'setimg':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Etiqueta una imagen!')
				const thumbreply = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downreply = await samu330.downloadMediaMessage(thumbreply)
				fs.unlinkSync(`./src/NyanBot.jpg`)
				fs.writeFileSync(`./src/NyanBot.jpg`, downreply)
			samu330.sendMessage(from, `se cambio correctamente la miniatura de respuesta`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Sucess", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
break
case 'setimgmenu':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Etiqueta una imagen!')
				const thumbmenu = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
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
						reply(`*ESPERA MIENTRAS AGO UNA BUSQUEDA EN GOOGLE SOBRE EL TEMA🚫*`)
						teamSm330 = texto = body.slice(1)
						fakee = fs.readFileSync('./src/help.jpg')
						data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${teamSm330}`, {
							  method: 'get'
						})
                                		n = JSON.parse(JSON.stringify(data));
						nimek = n[Math.floor(Math.random() * n.length)];
						pok = await getBuffer(nimek)
						samu330.sendMessage(from, pok, image, {
						quoted: ftoko, caption: `Este fue el resultado de *${command}*`, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
				}
					if (isGroup && isSimi && !botNumber && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
				if (body.startsWith(">")) {
                    if (!itsMe) return await reply('This command only for Samu')
                    return await reply(JSON.stringify(eval(args.join(" ")), null, 2))
                }
        }
    } catch (e) {
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  ERROR  ]"), chalk.keyword("red")(e))
    }
})
