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
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'));
const antimedia = JSON.parse(fs.readFileSync('./src/antimedia.json'));
const bad = JSON.parse(fs.readFileSync('./src/bad.json'));
const badword = JSON.parse(fs.readFileSync('./src/badword.json'));
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'));
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'));
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'));
const simi = JSON.parse(fs.readFileSync('./src/simi.json'));
const ban = JSON.parse(fs.readFileSync('./src/banned.json'));
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
fake = 'Samu330'
prefix = '.'
apikey = 'LindowApi'
const api = 'ec35353a991a258b05876861'
hit_today = []

samu330.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("Llamade de "+ callerId)
        samu330.sendMessage(callerId, "Lo siento, no se permiten llamadas, lee las reglas, te tendre que bloquear, nimodo juju", MessageType.text)
        await sleep(4000)
        await samu330.blockUser(callerId, "add")
})

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
        const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
	const isWelkom = isGroup ? welkom.includes(from) : false
	const isBanned = ban.includes(sender)
	const isBadWord = isGroup ? badword.includes(from) : false
	const isAntiLink = isGroup ? antilink.includes(from) : false
	const isAntiMedia = isGroup ? antimedia.includes(from) : false
	const isAutoSt = isGroup ? autostick.includes(from) : false
	const isNsfw = isGroup ? nsfw.includes(from) : false
	const isSimi = isGroup ? samih.includes(from): false
        
        const mentionByTag = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentions = (teks, memberr, id) => {
	    (id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : samu330.sendMessage(from, teks.trim(), extendedText, {quoted: sam, contextInfo: {"mentionedJid": memberr}})
	}
	    	
        
        const hour_now = moment().format('HH')
        var tiempoDia = 'Buenos dias'
        if (hour_now >= '03' && hour_now <= '10') {
          tiempoDia = 'Buenos dias'
        } else if (hour_now >= '10' && hour_now <= '14') {
          tiempoDia = 'Buenas tardes'
        } else if (hour_now >= '14' && hour_now <= '17') {
          tiempoDia = 'Buenas tardes'
        } else if (hour_now >= '17' && hour_now <= '18') {
          tiempoDia = 'Buenas noches'
        } else if (hour_now >= '18' && hour_now <= '23') {
          tiempoDia = 'Buenas noches'
        } else {
          tiempoDia = 'Buenas noches!'
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

	const isMedia = (type === 'imageMessage' || type === 'videoMessage')
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
        if (!isGroup && isCmd) console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        if (isGroup && isCmd) console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber), chalk.greenBright("en el grupo"), chalk.keyword("yellow")(groupName))
        
        switch (command) {
			
		case 'menu':
		case 'help':
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
var num = mek.participant
foto = fs.readFileSync('./src/help.jpg')
fakee = fs.readFileSync('./src/fake.jpg')
				
  samu330.updatePresence(from, Presence.recording)
  //if (!isRegister) return reply(mess.only.usrReg)
  
  
  uptime = process.uptime()
  const Menu = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
🔐Hola *${pushname}* ${tiempoDia}
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
            case 'owner':
                await wa.sendContact(from, owner, "samuuuu:D")
                break

	case 'play':

  //if (!isRegister) return reply(mess.only.usrReg)
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
		let pilem = `*「 SFILE SEARCH 」*\n\n*Resultado de búsqueda : ${body.slice(13)}*\n\n─────────────────`
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
                reply(`Resultados de búsqueda de ${q}\n\n${wiki.data.result}\n\nSi no está definido significa que no se encontró la consulta`)
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
                reply(`Anime ${q} no encontrado, intenta buscar otro título`)
                }
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
            case 'swm':
	    case 'stickerwm':
	        if (isMedia && !sam.message.videoMessage || isQuotedImage) {
		if (!arg.includes('|')) return reply(`Envia o etiqueta un stiquer con el comando: *${prefix}stickerwm nombre|autor*`)
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
		if (!arg.includes('|')) return reply(`Envia o etiqueta un stiquer con el comando: *${prefix}stickerwm nombre|autor*`)
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
		reply(`Envia o etiqueta un stiquer con el comando: *${prefix}stickerwm nombre|autor`)
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
		reply(`Envia o etiqueta un stiquer con el comando: *${prefix}stickerwm nombre|autor`)
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
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                samu330.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                samu330.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
            case 'upstorypic':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                var teksyy = body.slice(12)
                    reply('wait')
                var foto = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.image, {quoted: sam, caption: `${teksyy}`})
                    reply('Succes!')
                break
            case 'upstoryvid':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                reply('wait')
                var foto = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
		var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
                var inisiap2 = fs.readFileSync(inisiap)
                samu330.sendMessage('status@broadcast', inisiap2, MessageType.video, {quoted: sam, caption: `${body.slice(12)}`})
                    reply('Succes!')
                break
            case 'upstory':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                var teks = body.slice(9)
                samu330.sendMessage('status@broadcast', teks, MessageType.text)
                    reply('succses')
                break
            case 'unreadall':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                var chats = await samu330.chats.all()
                chats.map( async ({ jid }) => {
                await samu330.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await samu330.sendMessage(from, teks, MessageType.text, {quoted: sam})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
                var chats = await samu330.chats.all()
                chats.map( async ({ jid }) => {
                await samu330.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await samu330.sendMessage(from, teks, MessageType.text, {quoted: sam})
		console.log(chats.length)
		break
            case 'reply':
		if (!args) return reply(`Uso :\n${prefix}reply @miembro|frase|frase]]\n\nEj : \n${prefix}freply 0|hola wasa|que pex!`)
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
                if (!isQuotedImage) return reply(`y la foto??`)
	        var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		var media2 = await samu330.downloadAndSaveMediaMessage(media1)
	        await samu330.updateProfilePicture(meNumber, media2)
		reply('Done!')
	        break
            case 'kick':
		case 'eliminar':
                if (!isAdmin) return reply('this command only for admin')
	        if (!args) return reply(`Uso ${prefix}eliminar @tag`)
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
		case 'añadir':
                if (!isAdmin) return reply('only for admin group')
		if (!args) return reply(`uso ${prefix}add 5299....`)
		wa.add(from, [args[0] + '@s.whatsapp.net'])
                wa.FakeTokoForwarded(from, `:D`, fake)
                break
            case 'spam':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
	        if (!arg) return reply(`Uso ${prefix}spam texto|numero de mensajes`)
	        argz = arg.split("|")
		if (!argz) return reply(`uso ${prefix}spam texto|numero :/`)
                if (isNaN(argz[1])) return reply(`Y el numero de veses?!`)
	        for (let i = 0; i < argz[1]; i++){
                samu330.sendMessage(from, argz[0], MessageType.text)
		}
	        break
            case 'shutdown':
                if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* 👻')
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
                samu330.sendMessage(from, 'Intenta etiquetar😏', MessageType.text)
                break
            case 'public':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                if (public) return await reply('*De porsi estaba en Modo publico*')
                config["public"] = true
                public = true
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await wa.sendFakeStatus(from, "*Se a cambiado a modo publico*", "Public : true")
                break
            case 'self':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                if (!public) return await reply('mode private is already')
                config["public"] = false
                public = false
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await wa.sendFakeStatus(from, "*Modo privado*", "Self : true")
                break
            case 'setprefix':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                var newPrefix = args[0] || ""
                prefix = newPrefix
                await reply("Prefijo cambiado a: " + prefix)
                break
            case 'broadcast':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                text = args.join(" ")
                for (let chat of totalChat) {
                    await wa.sendMessage(chat.jid, text)
                }
                break
            case 'setthumb':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                if (!isQuotedImage && !isImage) return await reply('Gambarnya mana?')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                mediaa = await samu330.downloadMediaMessage(media1)
                fs.writeFileSync(`./lib/image/foto.jpg`, mediaa)
                await wa.sendFakeStatus(from, "*Succes changed image for help image*", "success")
                break
            case 'sethelpimg':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                if (!isQuotedImage && !isImage) return await reply('Gambarnya mana?')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                mediaa = await samu330.downloadMediaMessage(media1)
                fs.writeFileSync(`./lib/image/foto2.jpg`, mediaa)
                await wa.sendFakeStatus(from, "*Succes changed image for help image*", "success")
                break
            case 'fakethumb':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                if (!isQuotedImage && !isImage) return await reply('reply image!')
                media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                media2 = await samu330.downloadMediaMessage(media1)
                await wa.sendFakeThumb(from, media2)
                break	
            case 'stats':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                texxt = await msg.stats(totalChat)
                await wa.sendFakeStatus(from, texxt, "BOT STATS")
                break
            case 'block':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("tag target!")
                    return await wa.blockUser(sender, true)
                }
                await wa.blockUser(sender, true)
                break
            case 'unblock':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                if (isGroup) {
                    if (mentionUser.length == 0) return await reply("Tag targer!")
                    return await wa.blockUser(sender, false)
                }
                await wa.blockUser(sender, false)
                break
            case 'leave':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                if (!isGroup) return await reply('This command only for group baka')
                reply(`Akan keluar dari group ${groupName} dalam 3 detik`).then(async() => {
                    await help.sleep(3000)
                    await samu330.groupLeave(from)
                })
                break
            case 'join':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                if (isGroup) return await reply('This command only for private chat')
                if (args.length == 0) return await reply('Link group?')
                var link = args[0].replace("https://chat.whatsapp.com/", "")
                await samu330.acceptInvite(link)
                break
            case 'clearall':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
                for (let chat of totalChat) {
                    await samu330.modifyChat(chat.jid, "delete")
                }
                await wa.sendFakeStatus(from, "Success clear all chat", "success")
                break

            /** Group **/
            case 'hidetag':
                if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* 👻')
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
			samu330.sendMessage(from, buffer, MessageType.image, {quoted: sam, caption: 'imagen transformada por *Samu330*'})
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
                if (!botAdmin) return await reply('botcito debe ser admin:c')
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
        console.log(chalk.keyword("green")("├"), chalk.keyword("yellow")("[  ERROR  ]"), chalk.keyword("red")(e))
    }
})
