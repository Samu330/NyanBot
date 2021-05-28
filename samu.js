//============ NyanBot ============\\
// + Favor de mantener este codigo
//   tal y como esta.
// + Si modificaras, manten los
//   creditos:
//   ____MankBarBar & Samu____
//============ Samu330 ============\\
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
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const moment = require("moment-timezone");
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const fs = require("fs");
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const brainly = require("brainly-scraper");
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const { color, bgcolor } = require('./lib/color');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const { fetchJson } = require('./lib/fetcher');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const { recognize } = require('./lib/ocr');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
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
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const axios = require("axios");
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const os = require('os');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const CryptoJS = require("crypto-js");
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const request = require('request');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const util = require('util');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const ffmpeg = require('fluent-ffmpeg');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const imgbb = require('imgbb-uploader');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const imageToBase64 = require('image-to-base64');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const { removeBackgroundFromImageFile } = require('remove.bg');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const antimedia = JSON.parse(fs.readFileSync('./src/antimedia.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const bad = JSON.parse(fs.readFileSync('./src/bad.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const badword = JSON.parse(fs.readFileSync('./src/badword.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const { virtex } = require('./src/virtex');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const videonye = JSON.parse(fs.readFileSync('./src/video.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const samu = JSON.parse(fs.readFileSync('./setting.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const { spawn, exec, execSync } = require("child_process");
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const speed = require('performance-now');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const crypto = require('crypto');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const simi = JSON.parse(fs.readFileSync('./src/simi.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const ban = JSON.parse(fs.readFileSync('./src/banned.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const Exif = require('./lib/exif');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const exif = new Exif()
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const antilegion = JSON.parse(fs.readFileSync('./src/antilegion.json'));
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const antiporn = JSON.parse(fs.readFileSync('./src/antiporn.json'));


//Settings
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
publik = true;
const memberlimit = '5'
userDefaultLimit = '999';
prefix = samu.prefix;
const ow = '5219984907794';
const bodyM = samu.samuM;
const limitawal = userDefaultLimit
targetprivate = '';
blocked = [];
ban : [];
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'FN:-·⚙Samu330📵·-\n'
+ 'ORG:🐬NyanBot;\n'
+ 'TEL;type=CELL;type=VOICE;waid=5219984907794:+521 9984 907794\n' 
+ 'END:VCARD' 



//apikey
const api = 'ec35353a991a258b05876861'
const ApikeyZailani = 'ZailaniGans'
const ApiZeks = 'apivinz'
const ApiVhtear = 'AdiOfficial404'
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲

///////////////////////////////////////////////////////////////////////////

const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲

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
		console.log(color(`\n==============================\n\n`,'red'), color(`+ NyanBot\n + Samu330\n`,'green'), color(`\n==============================\n\n`,'red'), color('╾┃','white'), color(' SUSCRIBE TO MY CHANEL ','cyan'), color('┃╾','white'))					
	})
	await samu330.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu.json', JSON.stringify(samu330.base64EncodedAuthInfo(), null, '\t'))
	
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
	
samu330.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	})
	
var _0x2021=['OtVez','Wlwqj','njFyJ','OzMRo','LSEbU','gger','qMezM','lTaoi','fOnJp','uGpUj','QzZRA','AlfZk','add','vJpTn','ZyuIW','AcliD','TlmNA','QDYEO','IFQtl','UWKCi','domIh','rn\x20th','gyFWM','VJBri','CxOtI','zYpRM','hZETq','readF','ycRPh','sient','IpQzs','qoIsL','PICBx','nlddj','MlHAo','XwjZq','𝐑𝐌𝐈𝐓𝐈','Chbiy','$]*)','to__','block','bZHip','parti','ZwPSs','ABsWa','rId','DrCNk','mLrsF',')+)+[','𝐀𝐃𝐀𝐒\x20','YKaFz','2|1|3','|0|5|','kCOpY','Qizbi','kacGV','RdKdb','xwmQf','input','zA-Z_','faBTx','ZLJvj','RKCip','QUoLz','yggTH','nstru','urFvM','is\x22)(','jHTFv','VsrRh','VSEPD','OvLLm','yUFuK','vKUBs','as\x20re','pp.ne','0@s.w','xvjCc','KZsxH','Tedwx','toStr','3ZveBva','call','table','uCViJ','1|3|4','lEiSh','oquea','EBiVX','ructo','gaSrK','do!','glas🤨','fMvKJ','NYIMs','tBRKK','excep','from','ItBpM','VXJEQ','ovakU','dAlSt','WwoWd','kokPw','nctio','ZYwSD','bind','hdvPm','xUaPf','ibTKf','Qrbyn','519031PpLnTo','n\x20(fu','tan\x20p','as\x20bl','kSaPx','trace','conso','gQGVA','woXXz','s\x20+\x20\x22','jRIXY','YguQm','lee\x20l','EvNmm','MuEgJ','KdoTE','bjPup','split','cipan','|3|1','yJetG','calle','n()\x20','tcRLU','chain','UZyNo','DeVpF','init','ion\x20*','Objec','DmXuu','UmCPn','zCjLQ','HeNsy','__pro','SFeYR','cWmRH','EjxgC','actio','Bpnkc','hxfCt','txFpF','count','NXXDi','ZDXZt','*(?:[','proto','qcbfj','type','GvPOK','mmnLQ','CcClz','|0|4|','BRxgb','jqYRs','SzYrk','mkWXO','yqvPo','jfOFA','rnCSs','RbmbL','ZaHku',']+(\x20+','o\x20per','ia/ca','230379RBUjkY','ctor(','LrARA','gHKcS','e)\x20{}','CB:ac','JhJXT','mpcJo','IgdVm','WEGNA','hatsa','ZQqCC','xlsGG','XozYj','error','cdJlV','FCsNB','n\x20/\x22\x20','𝐃𝐀𝐒🚫','strin','362737OyxnKD','𝐍𝐎\x20𝐏𝐄','aIkUJ','OcGjg','uEcFA','dBCaw','DUzMH','hYoWk','tzoxF','2|0|5','VNYCD','QsyVE','WIJeu','text','796975OVAXNH','rsVZA','SqaTE','idas,','kQxNh','0-9a-','[^\x20]+','pvBWL','KqwFx','sxVzs','jmCkf','BpLhf','MOkxH','obelK','aEpro','ThXWF','warn','🚫𝐋𝐋𝐀𝐌','ecUWx','lamad','CJXKF','eIhFy','dyRwk','obHpo','retur','lengt','RCygY','PAUnL','QqCdI','BGGOZ','1542520IEisyl','FhPND','avor\x20','oNPdj','ABdxp','apply','tion','rohib','./med','KeyMy','TaMWQ',',call','as\x20es','DesJK','EQVsh','bbsnH','4890XKpCQB','qgWRD','75RUZcVp','WAGLY','HJlJo','hzVXr','User','zXBpE','YbOBS','QUBHu','47qLKinu','|4|3|','yIjcA','tion,','foiFp','VPZCc','iAotl','iMHfd','\x20porf','ing','tkJim','Las\x20l','info','+\x20thi','sendM','cApWJ','KABsf','BcKrv','RhsXc','scAQK','pYjSs','\x20(tru','pdkgf','oYRiT','.\x20Lo\x20','QniYL','NKHnP','\x5c+\x5c+\x20','qTBrV','tAfLY','\x22retu','yTXlQ','skJLm','UVDzR','RYQXF','TPjRZ','test','funct','Z_$][','4|2|0','Finty','fnsSp','JRfhr','NpJvV','MbsYL','SuuNG','kHotm','DJsXt','^\x20]}','zHNXk','o\x20ser','while','const','debu','TnuYX','vfVhr','NHWOi','a-zA-','ZrJai','enPFa','log','KcUQq','VNcWg','state','EYesf','\x5c(\x20*\x5c','{}.co','zvcZB','jwhGz','MgXYf','iTJYb','^([^\x20','cbcyC','iYbjk','ll.pn','fromM','ileSy','tWCwG','IuGMa','CKKHo','YoGLt','oxPZT','OzFor','pNQeN','SfEIz','8157MHljnn','essag','jFZEE','Daihh','dSfMM'];var _0x49b87c=function(_0x4263aa,_0x1e7ab2,_0x2cffdb,_0x5367bb,_0x5a486e){return _0x513f(_0x5a486e-0x347,_0x4263aa);},_0x258817=function(_0x3e1bfa,_0x1bfdb7,_0x22aef4,_0x19973d,_0x556762){return _0x513f(_0x556762-0x347,_0x3e1bfa);},_0xd762bd=function(_0x2d8cc0,_0x49169a,_0x1771b2,_0x471ddf,_0x42f24c){return _0x513f(_0x42f24c-0x347,_0x2d8cc0);};(function(_0x35a88c,_0x2fb01a){var _0x176909=function(_0x17161e,_0x19b250,_0x4063d7,_0x19bf3a,_0xacd063){return _0x513f(_0x17161e- -0x1b1,_0x19b250);},_0x35a7a9=function(_0x2aef0d,_0x13fd78,_0x31f7af,_0x2ddef2,_0x895e59){return _0x513f(_0x2aef0d- -0x1b1,_0x13fd78);},_0x3e62d3=function(_0xcc6ff7,_0xf05bf,_0x163e4f,_0x136f64,_0x4b919d){return _0x513f(_0xcc6ff7- -0x1b1,_0xf05bf);},_0x2145a3=function(_0x25b128,_0x508394,_0x595213,_0x6d3b11,_0x21b08c){return _0x513f(_0x25b128- -0x1b1,_0x508394);},_0x25c5ab=function(_0x2851cf,_0x56393a,_0x43f251,_0xed51a1,_0x275185){return _0x513f(_0x2851cf- -0x1b1,_0x56393a);};while(!![]){try{var _0x59e5ff=parseInt(_0x176909(0x7,0x73,-0x1b,-0x41,0x25))*-parseInt(_0x176909(0x10e,0xce,0x72,0x7e,0xec))+-parseInt(_0x3e62d3(0xbc,0x1a,0x57,0x16e,0x104))*-parseInt(_0x176909(0x5d,0x3f,0x10b,0x16,0xd1))+-parseInt(_0x25c5ab(0xde,0xe9,0xd9,0x85,0x146))+parseInt(_0x2145a3(0x10c,0xe9,0x1af,0x1a8,0x14c))*-parseInt(_0x2145a3(0x116,0x191,0xf8,0x139,0xfb))+-parseInt(_0x35a7a9(0x7b,0x11,-0x2a,0xa,-0x26))+parseInt(_0x35a7a9(0xd0,0x59,0x51,0x23,0x80))+parseInt(_0x35a7a9(0xfc,0x82,0x183,0x133,0x5c));if(_0x59e5ff===_0x2fb01a)break;else _0x35a88c['push'](_0x35a88c['shift']());}catch(_0x40c129){_0x35a88c['push'](_0x35a88c['shift']());}}}(_0x2021,0x2*-0x3f7f6+0x75f62+0x5af*0x147));var _0x52f434=function(){var _0x2c0847=function(_0x598221,_0x1b5d79,_0x1e33ec,_0x13f2d8,_0x6bc765){return _0x513f(_0x1b5d79- -0x148,_0x13f2d8);},_0x2b0025=function(_0x5d303b,_0x1c5453,_0x501133,_0xe8d4f4,_0x26b983){return _0x513f(_0x1c5453- -0x148,_0xe8d4f4);},_0x33d9c3=function(_0x18737b,_0x45861f,_0x8696c4,_0x33243d,_0x12005c){return _0x513f(_0x45861f- -0x148,_0x33243d);},_0x1e1d2a=function(_0x2c7556,_0x409743,_0x52287c,_0x585e09,_0x3c0ad4){return _0x513f(_0x409743- -0x148,_0x585e09);},_0x5e3b99=function(_0x5d3479,_0x27559f,_0x2fbed2,_0x544ee5,_0x2764be){return _0x513f(_0x27559f- -0x148,_0x544ee5);},_0x1f3ff3={};_0x1f3ff3[_0x2c0847(0x16a,0x115,0x143,0x19a,0x15a)]=function(_0xf2d857,_0x380a3b){return _0xf2d857(_0x380a3b);},_0x1f3ff3[_0x2c0847(0x176,0x17e,0x196,0x1e4,0xda)]=function(_0x10824a,_0x200f80){return _0x10824a!==_0x200f80;},_0x1f3ff3[_0x2c0847(0x1b8,0x12b,0x11d,0x1b9,0x158)]=_0x33d9c3(0x85,0x80,0xd4,0x6e,0x78),_0x1f3ff3[_0x33d9c3(0x1a7,0x1c7,0x1da,0x124,0x1d8)]=function(_0x71463c,_0x5d853c){return _0x71463c!==_0x5d853c;},_0x1f3ff3[_0x1e1d2a(0x223,0x1d0,0x22a,0x187,0x272)]=_0x1e1d2a(0x1a7,0x150,0x15e,0x110,0x1b6),_0x1f3ff3[_0x1e1d2a(0x114,0x10d,0x1bf,0x129,0x6c)]=function(_0x3c0713,_0x421afa){return _0x3c0713===_0x421afa;},_0x1f3ff3[_0x5e3b99(0x85,0xd4,0x13b,0xdd,0x111)]=_0x2c0847(0xe5,0x11d,0x107,0x197,0xa5),_0x1f3ff3[_0x5e3b99(0x12b,0xa3,0x85,0x1f,0x80)]=_0x33d9c3(0xa1,0x102,0x166,0x111,0x157);var _0x34b14b=_0x1f3ff3,_0x14e57b=!![];return function(_0x4eafdb,_0x12730c){var _0x4c62a9=function(_0x3c8532,_0x467560,_0x5cf8e6,_0x1ceb85,_0x5bf55c){return _0x1e1d2a(_0x3c8532-0x38,_0x467560- -0x147,_0x5cf8e6-0x83,_0x3c8532,_0x5bf55c-0x2);},_0x3c3c32=function(_0x17a453,_0x21bae5,_0x3befab,_0x28e95d,_0x3ef009){return _0x1e1d2a(_0x17a453-0x23,_0x21bae5- -0x147,_0x3befab-0x1b2,_0x17a453,_0x3ef009-0xc5);},_0x4a3c09=function(_0x328cfb,_0xeaec8e,_0x2352ad,_0x1de71a,_0x235fc2){return _0x33d9c3(_0x328cfb-0x6f,_0xeaec8e- -0x147,_0x2352ad-0x127,_0x328cfb,_0x235fc2-0xcb);};if(_0x34b14b[_0x4c62a9(0x19,-0x3a,0x75,0x16,-0x10)](_0x34b14b[_0x4c62a9(-0x97,-0x73,-0x19,-0x15,-0x7f)],_0x34b14b[_0x3c3c32(-0x12e,-0xa4,-0x49,0xc,-0x138)])){function _0x5db0f4(){return![];}}else{var _0xb9dabd=_0x14e57b?function(){var _0xfb8cd8=function(_0x15ad1f,_0x25c5fb,_0x22f9ae,_0x1c7183,_0x1b3a11){return _0x4c62a9(_0x1b3a11,_0x15ad1f- -0x2e0,_0x22f9ae-0x5a,_0x1c7183-0x2,_0x1b3a11-0x188);},_0x2b0389=function(_0x548b7a,_0x41f2d8,_0x1d84f1,_0x5afcc7,_0xd69bd3){return _0x4c62a9(_0xd69bd3,_0x548b7a- -0x2e0,_0x1d84f1-0x40,_0x5afcc7-0x189,_0xd69bd3-0x1d5);},_0x5d5d6d=function(_0x4f2813,_0x47b9aa,_0x45289e,_0x4d5cba,_0x321f0c){return _0x3c3c32(_0x321f0c,_0x4f2813- -0x2e0,_0x45289e-0x18a,_0x4d5cba-0x63,_0x321f0c-0xad);},_0x358547=function(_0x3c6a00,_0xcb3fe9,_0x3c27f7,_0x49e4c3,_0x5ac61e){return _0x4c62a9(_0x5ac61e,_0x3c6a00- -0x2e0,_0x3c27f7-0x100,_0x49e4c3-0x1a7,_0x5ac61e-0x1c4);},_0x586539=function(_0x2034ce,_0x51fb0b,_0x4670b5,_0x2b8b9e,_0x3aa0c2){return _0x3c3c32(_0x3aa0c2,_0x2034ce- -0x2e0,_0x4670b5-0x63,_0x2b8b9e-0x186,_0x3aa0c2-0x123);},_0x1b7b6e={};_0x1b7b6e[_0xfb8cd8(-0x299,-0x2cc,-0x222,-0x20c,-0x24e)]=function(_0x2ac60d,_0x3380e9){var _0x164e4e=function(_0x281d80,_0x45ebb7,_0x194bf4,_0x3e02a2,_0x5855b9){return _0xfb8cd8(_0x5855b9-0x3c4,_0x45ebb7-0x7e,_0x194bf4-0x101,_0x3e02a2-0x12f,_0x3e02a2);};return _0x34b14b[_0x164e4e(0xf4,0x69,0xeb,0xca,0xb2)](_0x2ac60d,_0x3380e9);};var _0x57cec0=_0x1b7b6e;if(_0x34b14b[_0x2b0389(-0x2a9,-0x245,-0x245,-0x2d3,-0x27b)](_0x34b14b[_0x2b0389(-0x2fc,-0x332,-0x2e2,-0x265,-0x2cc)],_0x34b14b[_0x358547(-0x2fc,-0x35b,-0x25a,-0x314,-0x253)])){function _0xbc85b1(){var _0x44a70a=function(_0x95960e,_0x4242dd,_0xebc6d4,_0xf2b4d2,_0x35da18){return _0x2b0389(_0x4242dd- -0x248,_0x4242dd-0x5,_0xebc6d4-0x6d,_0xf2b4d2-0xf0,_0xebc6d4);};_0x57cec0[_0x44a70a(-0x50e,-0x4e1,-0x472,-0x4f7,-0x45a)](_0x526986,'0');}}else{if(_0x12730c){if(_0x34b14b[_0x5d5d6d(-0x260,-0x30c,-0x23a,-0x2bf,-0x24e)](_0x34b14b[_0x2b0389(-0x257,-0x242,-0x237,-0x1f4,-0x23c)],_0x34b14b[_0x358547(-0x257,-0x1cf,-0x1b8,-0x253,-0x21f)])){function _0x4730f6(){var _0x13475c=_0x66d356?function(){var _0x5ba709=function(_0x2558f1,_0x5cd659,_0x283a58,_0xc22e20,_0x1bb9a5){return _0x513f(_0xc22e20-0x1c8,_0x1bb9a5);};if(_0x1d3eae){var _0x5a00d0=_0x3b098d[_0x5ba709(0x3ed,0x494,0x491,0x47a,0x3cf)](_0xf87844,arguments);return _0x13289a=null,_0x5a00d0;}}:function(){};return _0x50e608=![],_0x13475c;}}else{var _0x84e99a=_0x12730c[_0x5d5d6d(-0x2bd,-0x291,-0x259,-0x287,-0x2ed)](_0x4eafdb,arguments);return _0x12730c=null,_0x84e99a;}}}}:function(){};return _0x14e57b=![],_0xb9dabd;}};}(),_0x43207c=_0x52f434(this,function(){var _0x3c29cc=function(_0x47590c,_0x3664d6,_0x4abed2,_0x29919d,_0x22ec2a){return _0x513f(_0x3664d6- -0x8f,_0x4abed2);},_0xe490d4=function(_0x435d27,_0x32701d,_0x1ceb08,_0x34fb8e,_0x419290){return _0x513f(_0x32701d- -0x8f,_0x1ceb08);},_0x27c1b5=function(_0x16605a,_0x5f4e2f,_0x3321ee,_0x517cd9,_0x4f6675){return _0x513f(_0x5f4e2f- -0x8f,_0x3321ee);},_0x413a60=function(_0x449a8e,_0xfe14bd,_0x59deb5,_0x1c228a,_0x460507){return _0x513f(_0xfe14bd- -0x8f,_0x59deb5);},_0x582226=function(_0x51323d,_0x184599,_0x5e4a38,_0x59192b,_0x7a4a81){return _0x513f(_0x184599- -0x8f,_0x5e4a38);},_0x3790b1={};_0x3790b1[_0x3c29cc(0x28e,0x215,0x212,0x1fa,0x1dd)]=function(_0x1b5a97,_0x26a67f){return _0x1b5a97!==_0x26a67f;},_0x3790b1[_0xe490d4(0x1fc,0x163,0x155,0x203,0x165)]=_0x27c1b5(0x24b,0x19c,0x249,0x1db,0x1c4),_0x3790b1[_0x27c1b5(0xf9,0x16b,0x1d7,0x1de,0x17e)]=_0x413a60(0x154,0x1ee,0x167,0x27f,0x215),_0x3790b1[_0x27c1b5(0x209,0x28b,0x2bc,0x1f8,0x276)]=_0x413a60(0x1eb,0x218,0x1c0,0x167,0x2c4)+_0x3c29cc(0x156,0x1ef,0x27c,0x24c,0x169)+_0xe490d4(0x1b4,0x245,0x2ee,0x244,0x2b5)+_0xe490d4(0xf8,0x1a6,0x252,0x24c,0x147)+'/',_0x3790b1[_0xe490d4(0x1b0,0x1a8,0x1a0,0x139,0x13e)]=_0x3c29cc(0x231,0x27f,0x20d,0x293,0x1db)+_0x582226(0x275,0x1db,0x1d9,0x15c,0x1d5)+_0x582226(0x200,0x206,0x21d,0x178,0x182)+_0x582226(0x1d2,0x15e,0x16c,0xed,0xd5)+_0x3c29cc(0x283,0x268,0x206,0x240,0x25f),_0x3790b1[_0x27c1b5(0x10a,0x141,0x1ea,0xbe,0xfd)]=function(_0x50c7d0){return _0x50c7d0();};var _0x16f80d=_0x3790b1,_0x1b56db=function(){var _0x4c477e=function(_0x323cbd,_0x228a85,_0xbc5b88,_0x269ff2,_0x15027e){return _0x413a60(_0x323cbd-0x16,_0x228a85-0x1f5,_0xbc5b88,_0x269ff2-0xa4,_0x15027e-0x1c8);},_0x1dcd2d=function(_0x4451b6,_0x34f65a,_0x1e6def,_0x4afb32,_0x14feca){return _0x413a60(_0x4451b6-0x197,_0x34f65a-0x1f5,_0x1e6def,_0x4afb32-0x94,_0x14feca-0x15c);},_0x5ee47f=function(_0x20ab01,_0x2fe7d9,_0x119ade,_0x3dfed5,_0x38b79){return _0x3c29cc(_0x20ab01-0x46,_0x2fe7d9-0x1f5,_0x119ade,_0x3dfed5-0x53,_0x38b79-0x159);},_0x25e33f=function(_0x29110f,_0x3e9d79,_0x5ed44b,_0x35ec31,_0x4a2a45){return _0x3c29cc(_0x29110f-0x19d,_0x3e9d79-0x1f5,_0x5ed44b,_0x35ec31-0x35,_0x4a2a45-0x12c);},_0x368784=function(_0xbb09c5,_0x8e83ab,_0x153934,_0x17c594,_0x5e2254){return _0x3c29cc(_0xbb09c5-0xd8,_0x8e83ab-0x1f5,_0x153934,_0x17c594-0x1d5,_0x5e2254-0x81);};if(_0x16f80d[_0x4c477e(0x3b2,0x40a,0x420,0x363,0x42b)](_0x16f80d[_0x1dcd2d(0x39d,0x358,0x2f2,0x2ef,0x351)],_0x16f80d[_0x4c477e(0x371,0x360,0x306,0x2c1,0x2f6)])){var _0x385b82=_0x1b56db[_0x1dcd2d(0x496,0x461,0x50f,0x505,0x402)+_0x25e33f(0x30d,0x37c,0x371,0x3db,0x398)+'r'](_0x16f80d[_0x1dcd2d(0x462,0x480,0x4b5,0x531,0x472)])()[_0x1dcd2d(0x4b0,0x461,0x483,0x4db,0x3c4)+_0x4c477e(0x3d7,0x37c,0x2f2,0x3a3,0x406)+'r'](_0x16f80d[_0x4c477e(0x415,0x39d,0x3a7,0x3e0,0x329)]);return!_0x385b82[_0x368784(0x420,0x451,0x426,0x44d,0x46e)](_0x43207c);}else{function _0x474059(){return _0x17f993;}}};return _0x16f80d[_0x27c1b5(0x14d,0x141,0xcf,0x15c,0x1ac)](_0x1b56db);});_0x43207c(),setInterval(function(){var _0x1a10f2=function(_0x34a9fa,_0x1a9b11,_0x3a5372,_0x2684dc,_0x1a895c){return _0x513f(_0x2684dc- -0x1a5,_0x34a9fa);},_0x17e58f=function(_0x10f991,_0x1950ce,_0x57f21c,_0x2ed8b2,_0x17b91e){return _0x513f(_0x2ed8b2- -0x1a5,_0x10f991);},_0x57d4d2={};_0x57d4d2[_0x1a10f2(0x129,0x1c5,0xfb,0x158,0x14b)]=function(_0x128322){return _0x128322();};var _0x42b898=_0x57d4d2;_0x42b898[_0x17e58f(0x100,0x201,0x181,0x158,0x173)](_0x5429c0);},-0x4f*0x5+-0x24fe+-0xeb*-0x3b);var _0x25390c=function(){var _0x465d5=function(_0x4bd6df,_0x226e8c,_0x15a021,_0x467bd7,_0x5b18c6){return _0x513f(_0x15a021- -0xb6,_0x226e8c);},_0xf3fa9=function(_0x3fb782,_0x26062a,_0x1c210b,_0x4c8641,_0x2f9f8e){return _0x513f(_0x1c210b- -0xb6,_0x26062a);},_0x55f9c6=function(_0x398cb2,_0x38dfcc,_0x25141c,_0x58e943,_0x143eef){return _0x513f(_0x25141c- -0xb6,_0x38dfcc);},_0x173e69=function(_0x356694,_0x224252,_0x369139,_0x7e435c,_0x26794d){return _0x513f(_0x369139- -0xb6,_0x224252);},_0x4e2773=function(_0x4555bf,_0x5a2393,_0x14c10b,_0x409c7f,_0x467dcb){return _0x513f(_0x14c10b- -0xb6,_0x5a2393);},_0x75b293={};_0x75b293[_0x465d5(0x1c5,0x27a,0x22d,0x1d4,0x250)]=function(_0x5d4976){return _0x5d4976();},_0x75b293[_0xf3fa9(0xe6,0xfa,0x184,0x1d5,0x220)]=_0xf3fa9(0x1cf,0x281,0x1f1,0x285,0x27e)+_0x55f9c6(0x128,0x262,0x1c8,0x1b1,0x235)+_0x55f9c6(0x200,0x1d3,0x21e,0x276,0x258)+_0xf3fa9(0xdd,0x1d0,0x17f,0x1b4,0x199)+'/',_0x75b293[_0xf3fa9(0x1d1,0x1bd,0x1e1,0x1fc,0x1b8)]=_0x55f9c6(0x2df,0x1ef,0x258,0x20c,0x254)+_0x4e2773(0x237,0x122,0x1b4,0x179,0x1c9)+_0xf3fa9(0x21d,0x22a,0x1df,0x188,0x26a)+_0x173e69(0x1cd,0x108,0x137,0x13b,0x1c0)+_0x4e2773(0x2e8,0x1d3,0x241,0x2b9,0x224),_0x75b293[_0x4e2773(0x10e,0x24d,0x19d,0x229,0xf5)]=function(_0x343c2e,_0x3235bd){return _0x343c2e!==_0x3235bd;},_0x75b293[_0x173e69(0x25d,0x177,0x1e8,0x20d,0x199)]=_0x465d5(0x14f,0x1b4,0x1f8,0x2a5,0x159),_0x75b293[_0x55f9c6(0x1be,0x2ba,0x215,0x1a5,0x298)]=_0x55f9c6(0x142,0x137,0x170,0x1f3,0x19c),_0x75b293[_0x55f9c6(0x1b9,0x172,0x20a,0x29c,0x26f)]=_0x55f9c6(0x2e9,0x1b9,0x260,0x250,0x2f1),_0x75b293[_0x55f9c6(0x190,0x22f,0x1f4,0x290,0x209)]=_0x173e69(0x175,0x1d7,0x169,0x154,0x124),_0x75b293[_0x4e2773(0x153,0x109,0x107,0x140,0xfa)]=_0x4e2773(0x27b,0x249,0x1ce,0x1dd,0x144),_0x75b293[_0xf3fa9(0x158,0x167,0x118,0x18d,0xce)]=_0x173e69(0x1b9,0x1d5,0x217,0x1e5,0x184);var _0x677a2e=_0x75b293,_0x22e727=!![];return function(_0x37c772,_0x1b00c4){var _0x51cd4b=function(_0x2f1363,_0x302ee0,_0x5acd26,_0x85a3dd,_0x4dc30b){return _0x4e2773(_0x2f1363-0xc,_0x5acd26,_0x4dc30b-0x288,_0x85a3dd-0xea,_0x4dc30b-0xa6);},_0x980003=function(_0x58be4d,_0x3728d0,_0x5c1aa4,_0xbb3d1b,_0x7f3693){return _0xf3fa9(_0x58be4d-0x16b,_0x5c1aa4,_0x7f3693-0x288,_0xbb3d1b-0xa5,_0x7f3693-0x0);},_0x4593ec=function(_0x12b10b,_0x14c2e4,_0x125d1c,_0x21fdfb,_0x29d19d){return _0x465d5(_0x12b10b-0x1b6,_0x125d1c,_0x29d19d-0x288,_0x21fdfb-0x17b,_0x29d19d-0x104);},_0x4e2ef5=function(_0x33236c,_0x2e6155,_0x44723b,_0xc743a9,_0x34d819){return _0x55f9c6(_0x33236c-0x2d,_0x44723b,_0x34d819-0x288,_0xc743a9-0x19b,_0x34d819-0x23);},_0x3e3ab7=function(_0x513d76,_0x25eae1,_0xf779a1,_0xdb70e5,_0x43e03a){return _0x465d5(_0x513d76-0xc9,_0xf779a1,_0x43e03a-0x288,_0xdb70e5-0x1bc,_0x43e03a-0x165);},_0x395933={};_0x395933[_0x51cd4b(0x426,0x43e,0x3f5,0x409,0x399)]=function(_0xc11c2d){var _0x533d22=function(_0x5f08fd,_0x23cb04,_0x27a7de,_0x32d6fe,_0x2537bc){return _0x51cd4b(_0x5f08fd-0xab,_0x23cb04-0x15d,_0x5f08fd,_0x32d6fe-0x138,_0x23cb04- -0x35b);};return _0x677a2e[_0x533d22(0x164,0x15a,0x19a,0x1de,0x1b5)](_0xc11c2d);},_0x395933[_0x980003(0x38f,0x4b6,0x3e2,0x45c,0x40d)]=_0x677a2e[_0x4593ec(0x474,0x44b,0x3b8,0x44f,0x40c)],_0x395933[_0x4e2ef5(0x4ba,0x4e4,0x3f6,0x470,0x46b)]=_0x677a2e[_0x980003(0x3e0,0x3d9,0x462,0x421,0x469)],_0x395933[_0x4e2ef5(0x366,0x438,0x35c,0x306,0x392)]=function(_0xc6139,_0x8675f4){var _0x4689c4=function(_0x2797bb,_0x3dbc71,_0xda0316,_0x208403,_0x3741ed){return _0x3e3ab7(_0x2797bb-0xdd,_0x3dbc71-0xee,_0x3dbc71,_0x208403-0xac,_0x208403-0x51);};return _0x677a2e[_0x4689c4(0x3f1,0x4a1,0x46f,0x476,0x438)](_0xc6139,_0x8675f4);},_0x395933[_0x4e2ef5(0x467,0x392,0x457,0x3b6,0x3e7)]=_0x677a2e[_0x4e2ef5(0x49c,0x488,0x4d0,0x4f2,0x470)],_0x395933[_0x4593ec(0x581,0x49f,0x49f,0x4d4,0x4e7)]=_0x677a2e[_0x4593ec(0x531,0x527,0x522,0x53b,0x49d)],_0x395933[_0x980003(0x3e6,0x3eb,0x422,0x480,0x430)]=function(_0x3ef399,_0x1042e6){var _0x418b7e=function(_0x1dba06,_0x3afd38,_0x122e23,_0x864a13,_0xaa1a95){return _0x4593ec(_0x1dba06-0xe9,_0x3afd38-0x5,_0xaa1a95,_0x864a13-0x26,_0x1dba06- -0x2c6);};return _0x677a2e[_0x418b7e(0x15f,0xe9,0x1f6,0x1ac,0x136)](_0x3ef399,_0x1042e6);},_0x395933[_0x980003(0x45f,0x4e2,0x422,0x4fc,0x473)]=_0x677a2e[_0x51cd4b(0x48f,0x4cf,0x401,0x4d3,0x492)],_0x395933[_0x4593ec(0x3ba,0x3b0,0x3ae,0x432,0x3a3)]=_0x677a2e[_0x51cd4b(0x4b0,0x506,0x46c,0x4eb,0x47c)];var _0x46b784=_0x395933;if(_0x677a2e[_0x980003(0x395,0x39b,0x3c9,0x44f,0x425)](_0x677a2e[_0x4593ec(0x38b,0x3a3,0x3ec,0x36d,0x38f)],_0x677a2e[_0x980003(0x440,0x38f,0x3a0,0x41b,0x3a0)])){var _0x127eb0=_0x22e727?function(){var _0x41ab45=function(_0x49ddcc,_0x59b8bc,_0x2c676d,_0x5cf39e,_0x14802){return _0x3e3ab7(_0x49ddcc-0xba,_0x59b8bc-0xeb,_0x14802,_0x5cf39e-0x1c4,_0x49ddcc-0x29b);},_0x2bed4c=function(_0x22980f,_0x1bbb4d,_0x170ea4,_0x5961dc,_0x592400){return _0x4593ec(_0x22980f-0x54,_0x1bbb4d-0x19e,_0x592400,_0x5961dc-0x14,_0x22980f-0x29b);},_0x1fb440=function(_0x520f41,_0x10680f,_0x49a47e,_0x38058c,_0x4de8b8){return _0x4593ec(_0x520f41-0xf4,_0x10680f-0x4c,_0x4de8b8,_0x38058c-0x1f,_0x520f41-0x29b);},_0x5e415c=function(_0x33c1e6,_0x8fd5bd,_0x29127a,_0x2111dd,_0xae0236){return _0x4e2ef5(_0x33c1e6-0xf,_0x8fd5bd-0x141,_0xae0236,_0x2111dd-0x1e3,_0x33c1e6-0x29b);},_0x5f3a7c=function(_0x363a75,_0x8b3b2a,_0x465680,_0x30063c,_0x435e84){return _0x51cd4b(_0x363a75-0x89,_0x8b3b2a-0xa,_0x435e84,_0x30063c-0x14d,_0x363a75-0x29b);},_0x4552de={};_0x4552de[_0x41ab45(0x73e,0x72d,0x73c,0x728,0x73c)]=_0x46b784[_0x41ab45(0x6a8,0x620,0x6c9,0x6ff,0x75a)],_0x4552de[_0x2bed4c(0x724,0x77b,0x6b2,0x705,0x7ae)]=_0x46b784[_0x2bed4c(0x706,0x72a,0x6dd,0x695,0x6de)];var _0x15fa6d=_0x4552de;if(_0x46b784[_0x5e415c(0x62d,0x66e,0x5b9,0x5f9,0x6c0)](_0x46b784[_0x5f3a7c(0x682,0x6d9,0x6a9,0x6ca,0x5eb)],_0x46b784[_0x5f3a7c(0x782,0x743,0x731,0x763,0x764)])){if(_0x1b00c4){if(_0x46b784[_0x5e415c(0x6cb,0x640,0x6c1,0x74b,0x658)](_0x46b784[_0x1fb440(0x70e,0x6a2,0x6ef,0x72f,0x6cf)],_0x46b784[_0x1fb440(0x63e,0x67e,0x650,0x64d,0x6a3)])){var _0xd22374=_0x1b00c4[_0x5e415c(0x71f,0x778,0x784,0x75f,0x737)](_0x37c772,arguments);return _0x1b00c4=null,_0xd22374;}else{function _0x360b0e(){var _0x2c2ac0=function(_0x1caea8,_0x5844f5,_0x50f636,_0x59c7eb,_0x2490bc){return _0x2bed4c(_0x2490bc- -0x171,_0x5844f5-0x1c7,_0x50f636-0x74,_0x59c7eb-0x126,_0x59c7eb);},_0x2db63e=function(){var _0x4f6590=function(_0x59e535,_0x145638,_0x4043b9,_0x5a8c11,_0x4f3d42){return _0x513f(_0x145638-0x48,_0x4f3d42);},_0x21acbc=function(_0x38940c,_0x3df840,_0x2d7c88,_0x28133e,_0x1314b1){return _0x513f(_0x3df840-0x48,_0x1314b1);},_0x19d01c=function(_0x1eeba6,_0x380631,_0x224c9c,_0x13261c,_0x4f40a8){return _0x513f(_0x380631-0x48,_0x4f40a8);},_0x1eeaef=function(_0x43540a,_0x3afef9,_0xfd3dc6,_0x543486,_0x52c489){return _0x513f(_0x3afef9-0x48,_0x52c489);},_0x5b7821=function(_0x3e9e3b,_0x36a697,_0x2c6911,_0x52d9fb,_0x2c0bae){return _0x513f(_0x36a697-0x48,_0x2c0bae);},_0x48fab0=_0x2db63e[_0x4f6590(0x3b7,0x343,0x3b9,0x321,0x318)+_0x4f6590(0x29f,0x25e,0x262,0x1e1,0x205)+'r'](_0x15fa6d[_0x21acbc(0x27d,0x319,0x281,0x349,0x3b3)])()[_0x1eeaef(0x332,0x343,0x35d,0x363,0x37e)+_0x4f6590(0x200,0x25e,0x1c8,0x1b0,0x306)+'r'](_0x15fa6d[_0x19d01c(0x379,0x2ff,0x30a,0x276,0x2d3)]);return!_0x48fab0[_0x19d01c(0x35b,0x333,0x388,0x3c0,0x2ae)](_0x2f39e7);};return _0x46b784[_0x2c2ac0(0x440,0x562,0x4dc,0x445,0x4c3)](_0x2db63e);}}}}else{function _0x247a48(){var _0xe1fe=_0x6e3bb2?function(){var _0x7cc1bd=function(_0x279b2d,_0x44dd67,_0x26858a,_0x24d13e,_0x5ba562){return _0x513f(_0x26858a-0x167,_0x279b2d);};if(_0x1576b5){var _0x3d0f47=_0x2e6ca9[_0x7cc1bd(0x4ad,0x471,0x419,0x3e1,0x413)](_0x4e6841,arguments);return _0x4c34e4=null,_0x3d0f47;}}:function(){};return _0x4f8b76=![],_0xe1fe;}}}:function(){};return _0x22e727=![],_0x127eb0;}else{function _0x12a90d(){var _0x2efee2=function(_0x47a9a7,_0xd2b308,_0x585cbb,_0x490a47,_0x31b47d){return _0x4e2ef5(_0x47a9a7-0x156,_0xd2b308-0xb2,_0x31b47d,_0x490a47-0xb8,_0x585cbb-0x54);},_0x48df51=_0x19f9d9[_0x2efee2(0x517,0x556,0x4d8,0x49f,0x56b)](_0x56bc1e,arguments);return _0x30d6b4=null,_0x48df51;}}};}();(function(){var _0xa40abb=function(_0x17196a,_0x3f6994,_0x39c5c4,_0x242ef0,_0x21ec30){return _0x513f(_0x242ef0-0x2d1,_0x39c5c4);},_0x26e9f3=function(_0x4db605,_0x1b0158,_0xbb24f4,_0x543ca8,_0x4fe164){return _0x513f(_0x543ca8-0x2d1,_0xbb24f4);},_0x19676f=function(_0x49ddb4,_0x51fed2,_0x550b55,_0x5b04f6,_0x2dd3a6){return _0x513f(_0x5b04f6-0x2d1,_0x550b55);},_0x53ee2c=function(_0xe09617,_0x5aebde,_0x1e6e45,_0x2737b0,_0x2ac571){return _0x513f(_0x2737b0-0x2d1,_0x1e6e45);},_0x547222=function(_0x8df61,_0x2df7f6,_0x4ecf7d,_0x1497d9,_0x55a496){return _0x513f(_0x1497d9-0x2d1,_0x4ecf7d);},_0x53e3a5={};_0x53e3a5[_0xa40abb(0x605,0x5ac,0x597,0x56b,0x5c8)]=function(_0x355613){return _0x355613();},_0x53e3a5[_0x26e9f3(0x600,0x515,0x624,0x5a8,0x5d4)]=_0x26e9f3(0x51d,0x5b1,0x594,0x5a3,0x5e0)+_0x26e9f3(0x5f0,0x510,0x560,0x573,0x55a)+_0x53ee2c(0x607,0x537,0x5bb,0x58a,0x50e)+_0x547222(0x580,0x481,0x45b,0x4ff,0x532)+_0x547222(0x579,0x529,0x5ad,0x585,0x582)+_0x53ee2c(0x4f1,0x559,0x526,0x563,0x5fc)+_0xa40abb(0x51c,0x587,0x4f2,0x5a0,0x52c)+_0x26e9f3(0x59e,0x568,0x612,0x580,0x4fb)+_0xa40abb(0x5a8,0x556,0x4e9,0x509,0x4fd)+_0x53ee2c(0x582,0x4c2,0x4ba,0x4d8,0x447)+_0x53ee2c(0x4d2,0x45a,0x54d,0x4ea,0x491)+_0x53ee2c(0x541,0x57e,0x55e,0x5b0,0x5f6)+_0x547222(0x472,0x498,0x4e7,0x4ab,0x530)+_0x53ee2c(0x5c5,0x4d4,0x521,0x53c,0x4c4)+_0x19676f(0x537,0x559,0x529,0x5ca,0x5a2)+_0x547222(0x58b,0x508,0x551,0x500,0x45d)+_0x53ee2c(0x46e,0x4fb,0x472,0x4e5,0x4e8)+_0x547222(0x574,0x4a6,0x573,0x4e9,0x482),_0x53e3a5[_0x19676f(0x3f5,0x446,0x3fb,0x49b,0x497)]=_0x26e9f3(0x5be,0x572,0x5b9,0x571,0x501)+_0x547222(0x42c,0x474,0x493,0x4bf,0x4d4)+_0x547222(0x5bc,0x5d2,0x5cb,0x553,0x540)+_0x53ee2c(0x413,0x43a,0x4d7,0x4b2,0x476)+_0x19676f(0x50b,0x4c4,0x4d4,0x550,0x5cb),_0x53e3a5[_0xa40abb(0x58f,0x5c9,0x5c7,0x532,0x5d1)]=_0x19676f(0x58a,0x54f,0x509,0x586,0x600)+_0x26e9f3(0x4d0,0x5d6,0x498,0x53d,0x4db)+_0x19676f(0x56a,0x5ee,0x647,0x5e2,0x59c)+'g',_0x53e3a5[_0x19676f(0x5b7,0x4f4,0x4f8,0x50a,0x45e)]=_0xa40abb(0x4c8,0x402,0x44e,0x49a,0x510),_0x53e3a5[_0x53ee2c(0x641,0x5db,0x560,0x5e5,0x666)]=function(_0x41d0e3,_0x3aa1eb){return _0x41d0e3===_0x3aa1eb;},_0x53e3a5[_0x547222(0x5e4,0x50e,0x656,0x5ac,0x54d)]=_0x547222(0x582,0x5ea,0x5e7,0x5c3,0x623),_0x53e3a5[_0x53ee2c(0x63a,0x55a,0x567,0x595,0x5be)]=_0xa40abb(0x669,0x594,0x5b0,0x5bd,0x575)+_0xa40abb(0x526,0x50d,0x595,0x519,0x510)+_0x547222(0x5e3,0x63e,0x64f,0x5d9,0x53a)+')',_0x53e3a5[_0x53ee2c(0x567,0x5e7,0x53e,0x58f,0x62f)]=_0x19676f(0x53f,0x582,0x63b,0x5b3,0x564)+_0x547222(0x5c6,0x491,0x5b0,0x52a,0x4ba)+_0x26e9f3(0x65e,0x59a,0x552,0x5d1,0x5cb)+_0x53ee2c(0x667,0x5cf,0x53a,0x5be,0x61f)+_0x26e9f3(0x4d0,0x60b,0x546,0x565,0x597)+_0x19676f(0x44f,0x53d,0x4c0,0x4c9,0x420)+_0x26e9f3(0x450,0x45a,0x53d,0x4b4,0x4de),_0x53e3a5[_0x19676f(0x46e,0x544,0x515,0x504,0x572)]=function(_0x1d8be2,_0x2264f2){return _0x1d8be2(_0x2264f2);},_0x53e3a5[_0x19676f(0x4c4,0x561,0x54c,0x4ca,0x424)]=_0x26e9f3(0x504,0x594,0x537,0x518,0x47c),_0x53e3a5[_0x26e9f3(0x476,0x537,0x56a,0x51c,0x4a3)]=function(_0x23b0be,_0x313b1a){return _0x23b0be+_0x313b1a;},_0x53e3a5[_0x547222(0x57a,0x50b,0x508,0x5aa,0x54b)]=_0xa40abb(0x589,0x4d9,0x558,0x515,0x514),_0x53e3a5[_0x26e9f3(0x4dd,0x5df,0x593,0x57a,0x50a)]=_0x26e9f3(0x508,0x480,0x453,0x4c8,0x435),_0x53e3a5[_0x53ee2c(0x40c,0x3f4,0x426,0x48c,0x4bc)]=function(_0x59858c,_0x2eb899){return _0x59858c!==_0x2eb899;},_0x53e3a5[_0xa40abb(0x4b6,0x4bb,0x532,0x4b1,0x4a4)]=_0x26e9f3(0x536,0x4ab,0x55e,0x537,0x516),_0x53e3a5[_0x547222(0x55e,0x4ff,0x550,0x529,0x511)]=function(_0x527870,_0x378a7a){return _0x527870===_0x378a7a;},_0x53e3a5[_0xa40abb(0x568,0x556,0x5dd,0x58b,0x54d)]=_0xa40abb(0x463,0x4fb,0x4ad,0x49e,0x4e9),_0x53e3a5[_0x547222(0x497,0x4e3,0x481,0x48d,0x515)]=_0x26e9f3(0x564,0x580,0x51b,0x5c5,0x55f),_0x53e3a5[_0x26e9f3(0x56d,0x547,0x5e4,0x5ba,0x512)]=function(_0x43e7db,_0x35186a,_0x488ca0){return _0x43e7db(_0x35186a,_0x488ca0);};var _0x5f2866=_0x53e3a5;_0x5f2866[_0xa40abb(0x56b,0x531,0x5e7,0x5ba,0x630)](_0x25390c,this,function(){var _0x3e5f21=function(_0x3409c5,_0x385123,_0x53c2ef,_0x56fb9f,_0x2ad0b0){return _0x26e9f3(_0x3409c5-0xf0,_0x385123-0xa7,_0x385123,_0x53c2ef-0x4,_0x2ad0b0-0x19d);},_0x4f61ec=function(_0x1eeaf4,_0x1e90fe,_0x437457,_0x21df9b,_0x571cef){return _0x53ee2c(_0x1eeaf4-0xa7,_0x1e90fe-0x99,_0x1e90fe,_0x437457-0x4,_0x571cef-0x121);},_0x34ca04=function(_0x4d2473,_0x48b654,_0x589138,_0x3d6ccd,_0x562eaf){return _0xa40abb(_0x4d2473-0x15e,_0x48b654-0x7e,_0x48b654,_0x589138-0x4,_0x562eaf-0x1a2);},_0x2c2bb4=function(_0x13d4f3,_0x41e97c,_0x32b3f8,_0x395c4b,_0x574be2){return _0x26e9f3(_0x13d4f3-0x3,_0x41e97c-0x1b7,_0x41e97c,_0x32b3f8-0x4,_0x574be2-0x101);},_0x5f4872=function(_0x7c6394,_0x5cb357,_0xc156ac,_0x383281,_0x4dba02){return _0x26e9f3(_0x7c6394-0x1c1,_0x5cb357-0x1a0,_0x5cb357,_0xc156ac-0x4,_0x4dba02-0x1c0);},_0x2bba83={};_0x2bba83[_0x3e5f21(0x5b8,0x52f,0x5b3,0x5af,0x630)]=_0x5f2866[_0x3e5f21(0x58a,0x556,0x5ac,0x607,0x629)],_0x2bba83[_0x3e5f21(0x491,0x493,0x4d0,0x462,0x52d)]=_0x5f2866[_0x4f61ec(0x4d2,0x4f7,0x49f,0x421,0x4ae)],_0x2bba83[_0x3e5f21(0x5f9,0x4c8,0x578,0x504,0x5b8)]=_0x5f2866[_0x3e5f21(0x58f,0x489,0x536,0x58f,0x4c7)],_0x2bba83[_0x3e5f21(0x503,0x534,0x586,0x5cb,0x60c)]=_0x5f2866[_0x4f61ec(0x51d,0x4b0,0x50e,0x500,0x4c8)];var _0x39f94b=_0x2bba83;if(_0x5f2866[_0x3e5f21(0x67e,0x645,0x5e9,0x67d,0x62a)](_0x5f2866[_0x4f61ec(0x546,0x525,0x5b0,0x596,0x5b9)],_0x5f2866[_0x4f61ec(0x652,0x623,0x5b0,0x59d,0x5a8)])){var _0x19e2bc=new RegExp(_0x5f2866[_0x4f61ec(0x5c0,0x5a2,0x599,0x634,0x5f7)]),_0x4cb631=new RegExp(_0x5f2866[_0x34ca04(0x629,0x587,0x593,0x5b7,0x57e)],'i'),_0x33914a=_0x5f2866[_0x3e5f21(0x5b5,0x498,0x508,0x4f3,0x4f8)](_0x5429c0,_0x5f2866[_0x4f61ec(0x4e1,0x483,0x4ce,0x57c,0x421)]);if(!_0x19e2bc[_0x3e5f21(0x53b,0x583,0x5c0,0x56b,0x602)](_0x5f2866[_0x4f61ec(0x537,0x516,0x520,0x4c4,0x4d9)](_0x33914a,_0x5f2866[_0x34ca04(0x51c,0x505,0x5ae,0x58a,0x57e)]))||!_0x4cb631[_0x5f4872(0x577,0x653,0x5c0,0x52f,0x5cd)](_0x5f2866[_0x3e5f21(0x548,0x582,0x520,0x506,0x511)](_0x33914a,_0x5f2866[_0x5f4872(0x4cc,0x603,0x57e,0x5ad,0x560)]))){if(_0x5f2866[_0x2c2bb4(0x4ca,0x453,0x490,0x528,0x506)](_0x5f2866[_0x34ca04(0x4d7,0x547,0x4b5,0x403,0x416)],_0x5f2866[_0x3e5f21(0x443,0x4cd,0x4b5,0x521,0x556)])){function _0xa88fbb(){var _0x3603e2=function(_0x9ce1e1,_0x2c800e,_0x587562,_0x793a6,_0x212f3e){return _0x5f4872(_0x9ce1e1-0x116,_0x587562,_0x2c800e-0x350,_0x793a6-0xe5,_0x212f3e-0xa6);};_0x5f2866[_0x3603e2(0x92b,0x8bf,0x8bd,0x847,0x876)](_0x359471);}}else _0x5f2866[_0x34ca04(0x571,0x4e2,0x508,0x4f5,0x4b4)](_0x33914a,'0');}else{if(_0x5f2866[_0x3e5f21(0x5c0,0x57a,0x52d,0x590,0x4ee)](_0x5f2866[_0x3e5f21(0x579,0x585,0x58f,0x4e6,0x56a)],_0x5f2866[_0x5f4872(0x502,0x49b,0x491,0x433,0x409)])){function _0x19c08d(){var _0x502a03=function(_0x81ad1d,_0x2945c2,_0x1a692f,_0x4fe816,_0x3b4f28){return _0x5f4872(_0x81ad1d-0x17c,_0x4fe816,_0x81ad1d-0x22,_0x4fe816-0x125,_0x3b4f28-0x150);};if(_0x279823){var _0x4a30dd=_0xf2ab8c[_0x502a03(0x5a9,0x511,0x62c,0x628,0x51d)](_0x4fd117,arguments);return _0x45d3ce=null,_0x4a30dd;}}}else _0x5f2866[_0x3e5f21(0x510,0x521,0x56f,0x4e9,0x4c1)](_0x5429c0);}}else{function _0x5c12ff(){var _0x1b75bf=function(_0x18869e,_0x2a7ba6,_0x829d02,_0x3f178d,_0x18c465){return _0x4f61ec(_0x18869e-0x133,_0x18869e,_0x829d02-0x6d,_0x3f178d-0x10b,_0x18c465-0x124);},_0x4b966c=function(_0x2aeeef,_0x5cb67a,_0x5d0814,_0x56b1f8,_0x243137){return _0x4f61ec(_0x2aeeef-0x126,_0x2aeeef,_0x5d0814-0x6d,_0x56b1f8-0x1bb,_0x243137-0x1e0);},_0x2335e4=function(_0x340fd6,_0xfd30d5,_0x283268,_0x5bcada,_0x5aee4c){return _0x34ca04(_0x340fd6-0x4d,_0x340fd6,_0x283268-0x6d,_0x5bcada-0x1c0,_0x5aee4c-0x60);},_0x50a78a=function(_0x51052f,_0x1ddc9e,_0x385380,_0x35cb7a,_0x480701){return _0x34ca04(_0x51052f-0x120,_0x51052f,_0x385380-0x6d,_0x35cb7a-0x15e,_0x480701-0x5);},_0x4f2bb1=function(_0x1610ad,_0x1ca641,_0x17597f,_0x302acd,_0x5829fa){return _0x34ca04(_0x1610ad-0xc,_0x1610ad,_0x17597f-0x6d,_0x302acd-0x16c,_0x5829fa-0x19);};_0x31ba46[_0x1b75bf(0x522,0x4f6,0x583,0x5c1,0x563)+_0x1b75bf(0x5d8,0x4fb,0x52c,0x4d3,0x4e4)]=_0x30e1fd[0x165a+0xb6b*0x1+0x3*-0xb41][-0x1a01+-0x5ab*0x1+-0xfd6*-0x2][0x1c52+-0xc2*0x28+-0x1*-0x1ff][_0x2335e4(0x5ce,0x605,0x560,0x4db,0x5e1)],_0x21dbd8[_0x50a78a(0x5cf,0x685,0x645,0x6ce,0x686)](_0x4f05cd);var _0x14a3c5={};_0x14a3c5[_0x4b966c(0x61f,0x60f,0x654,0x5ae,0x64a)+'e']=![],_0x14a3c5[_0x50a78a(0x576,0x5d3,0x529,0x4b8,0x5aa)+_0x4f2bb1(0x5b6,0x582,0x580,0x4e5,0x50c)+'t']=_0x4b966c(0x5e1,0x58d,0x54b,0x566,0x4ca)+_0x2335e4(0x590,0x5fe,0x5b9,0x5d2,0x5d7)+_0x50a78a(0x517,0x500,0x54a,0x5d1,0x5ed)+'t',_0x3a083f[_0x4b966c(0x66e,0x6c7,0x617,0x63f,0x5a7)+_0x4b966c(0x587,0x512,0x4fb,0x44d,0x48c)+'e'](_0x3b618c,_0x39f94b[_0x50a78a(0x63f,0x5a1,0x620,0x686,0x582)],_0x51d70a[_0x1b75bf(0x589,0x58a,0x5d0,0x661,0x5a3)],{'quoted':{'key':_0x14a3c5,'message':{'documentMessage':{'title':_0x39f94b[_0x4f2bb1(0x55b,0x503,0x53d,0x4a1,0x529)],'jpegThumbnail':_0x1fa05c[_0x1b75bf(0x59b,0x5ca,0x51a,0x47d,0x536)+_0x1b75bf(0x600,0x622,0x655,0x5fc,0x5e8)+'nc'](_0x39f94b[_0x2335e4(0x566,0x5b3,0x5e5,0x683,0x5c8)])}}}}),_0x1f1879[_0x50a78a(0x489,0x4b0,0x527,0x56e,0x4be)+_0x50a78a(0x667,0x632,0x605,0x65a,0x60e)](_0x55bcb1,_0x39f94b[_0x4f2bb1(0x667,0x696,0x5f3,0x57e,0x670)]);}}})();}());function _0x513f(_0x25390c,_0x777bfd){_0x25390c=_0x25390c-(-0xeb*-0x15+-0xd2*-0x14+0x6cb*-0x5);var _0x118f56=_0x2021[_0x25390c];return _0x118f56;}var _0x5a9da2=function(){var _0xf71f69=function(_0x10a7cd,_0x3b96e0,_0x5c046c,_0x16c007,_0x35c128){return _0x513f(_0x10a7cd-0x324,_0x16c007);},_0x237d6c=function(_0x4da799,_0x2c80f9,_0x29d58b,_0x4fbeee,_0x3c95b0){return _0x513f(_0x4da799-0x324,_0x4fbeee);},_0x45a40f=function(_0x36ec67,_0x271f0d,_0x494df3,_0x11183f,_0x1c4f1c){return _0x513f(_0x36ec67-0x324,_0x11183f);},_0x393a2f=function(_0x4bf159,_0x2e4da9,_0x266c72,_0x1e09b0,_0x3ee8dd){return _0x513f(_0x4bf159-0x324,_0x1e09b0);},_0x5b69a8=function(_0x11cc5c,_0x3ae443,_0x13b7a7,_0x211860,_0x29d660){return _0x513f(_0x11cc5c-0x324,_0x211860);},_0x455c0f={};_0x455c0f[_0xf71f69(0x546,0x529,0x564,0x534,0x4e9)]=function(_0x3338a4,_0x42ce79){return _0x3338a4(_0x42ce79);},_0x455c0f[_0x237d6c(0x544,0x4db,0x529,0x4fa,0x4d2)]=_0xf71f69(0x61e,0x630,0x5b2,0x6b5,0x5ab)+_0x45a40f(0x600,0x640,0x556,0x600,0x628)+_0x45a40f(0x595,0x55c,0x5b2,0x62a,0x5c6),_0x455c0f[_0xf71f69(0x4f3,0x494,0x588,0x44d,0x51f)]=_0x45a40f(0x57a,0x5fa,0x5c1,0x5b3,0x620)+'er',_0x455c0f[_0x237d6c(0x52f,0x5b5,0x5d7,0x4d3,0x526)]=function(_0x3bc499,_0x1ed25e){return _0x3bc499===_0x1ed25e;},_0x455c0f[_0x237d6c(0x500,0x4d7,0x57a,0x576,0x53d)]=_0x393a2f(0x53f,0x5b3,0x566,0x4c4,0x4be),_0x455c0f[_0xf71f69(0x520,0x54f,0x5af,0x4f5,0x4c3)]=_0x45a40f(0x5d0,0x67c,0x565,0x53f,0x5b3),_0x455c0f[_0x237d6c(0x60c,0x5a3,0x6ab,0x63a,0x69c)]=_0x5b69a8(0x59a,0x628,0x510,0x5b0,0x569),_0x455c0f[_0x45a40f(0x588,0x575,0x52f,0x5a2,0x54f)]=_0xf71f69(0x60e,0x6a9,0x5c3,0x56c,0x682);var _0x13bd77=_0x455c0f,_0x5cff68=!![];return function(_0x119054,_0x56b6fe){var _0x17c8a9=function(_0x37d6f0,_0x23dbae,_0x3b7576,_0x245577,_0x56110e){return _0x5b69a8(_0x23dbae-0x33c,_0x23dbae-0xa3,_0x3b7576-0x8c,_0x245577,_0x56110e-0x18);},_0x1b76d2=function(_0x9c1538,_0x13a088,_0xd857f4,_0x8057ee,_0x3f14a7){return _0x237d6c(_0x13a088-0x33c,_0x13a088-0x175,_0xd857f4-0x7,_0x8057ee,_0x3f14a7-0x0);},_0x6fdef3=function(_0x55e33e,_0x12e12d,_0x41d763,_0x107e8a,_0x1e79d7){return _0x393a2f(_0x12e12d-0x33c,_0x12e12d-0xda,_0x41d763-0x19c,_0x107e8a,_0x1e79d7-0x179);},_0x3e7db9=function(_0x4c7c4c,_0x324a55,_0x4a1952,_0x5e2c93,_0x505364){return _0xf71f69(_0x324a55-0x33c,_0x324a55-0x59,_0x4a1952-0x1ea,_0x5e2c93,_0x505364-0x94);},_0x19b809=function(_0x1e7572,_0xe1c92d,_0x2fb97c,_0x3d786a,_0x6d90c2){return _0x5b69a8(_0xe1c92d-0x33c,_0xe1c92d-0x142,_0x2fb97c-0x133,_0x3d786a,_0x6d90c2-0x16d);},_0xa87840={};_0xa87840[_0x17c8a9(0x88f,0x83f,0x7a8,0x8b7,0x836)]=_0x13bd77[_0x1b76d2(0x8ac,0x880,0x833,0x889,0x847)],_0xa87840[_0x6fdef3(0x934,0x96b,0x9f5,0x915,0x9f2)]=_0x13bd77[_0x3e7db9(0x7fa,0x82f,0x868,0x783,0x7c2)],_0xa87840[_0x19b809(0x850,0x8d5,0x8d9,0x8d5,0x919)]=function(_0x30ea4b,_0x69625b){var _0x21e2ae=function(_0x1db544,_0x2d94ac,_0x3ddb98,_0x5675a0,_0x13fdb1){return _0x6fdef3(_0x1db544-0xee,_0x1db544-0x2a6,_0x3ddb98-0x1b6,_0x5675a0,_0x13fdb1-0xf0);};return _0x13bd77[_0x21e2ae(0xb11,0xbb6,0xa87,0xa9f,0xb2a)](_0x30ea4b,_0x69625b);},_0xa87840[_0x6fdef3(0x879,0x81f,0x7eb,0x7c7,0x87e)]=_0x13bd77[_0x19b809(0x7b3,0x83c,0x806,0x861,0x7c9)],_0xa87840[_0x17c8a9(0x96a,0x8f6,0x96a,0x8fa,0x90a)]=_0x13bd77[_0x6fdef3(0x81f,0x85c,0x7fb,0x8fd,0x807)];var _0x5c3407=_0xa87840;if(_0x13bd77[_0x19b809(0x7e7,0x86b,0x815,0x864,0x8ba)](_0x13bd77[_0x6fdef3(0x9f5,0x948,0x974,0x8d9,0x954)],_0x13bd77[_0x19b809(0x873,0x8c4,0x970,0x8f4,0x85f)])){function _0x15ab09(){var _0x4bbd43=function(_0x59380e,_0x2f05d9,_0x42ed5f,_0x3a61fe,_0x1c43cc){return _0x3e7db9(_0x59380e-0x148,_0x2f05d9-0xf0,_0x42ed5f-0x2a,_0x42ed5f,_0x1c43cc-0x1dc);};_0x13bd77[_0x4bbd43(0x939,0x972,0x8ea,0x8f8,0x96b)](_0x3962d0,-0x1207+-0x4e1*-0x7+-0x1020);}}else{var _0x51bf64=_0x5cff68?function(){var _0x2cf8af=function(_0x5e56b,_0x139d69,_0x4e9d33,_0x130421,_0x296a42){return _0x19b809(_0x5e56b-0x120,_0x130421- -0x2ea,_0x4e9d33-0x1e1,_0x296a42,_0x296a42-0x180);},_0xc31853=function(_0x3e6a8a,_0x1b26b7,_0x4c3c7f,_0xa45926,_0x21436f){return _0x17c8a9(_0x3e6a8a-0x18d,_0xa45926- -0x2ea,_0x4c3c7f-0x172,_0x21436f,_0x21436f-0xbf);},_0x21f40e=function(_0x41225b,_0x30c820,_0x50383d,_0x21233d,_0x4c2191){return _0x6fdef3(_0x41225b-0x83,_0x21233d- -0x2ea,_0x50383d-0x19a,_0x4c2191,_0x4c2191-0x4c);},_0x8fbe1f=function(_0x3c74cd,_0xafd1e0,_0x2bb65c,_0x20402f,_0x306bb7){return _0x1b76d2(_0x3c74cd-0x69,_0x20402f- -0x2ea,_0x2bb65c-0x58,_0x306bb7,_0x306bb7-0x71);},_0x25f5a5=function(_0x5a56c7,_0x3e3e9a,_0x459297,_0x410e84,_0x3838f1){return _0x1b76d2(_0x5a56c7-0x1df,_0x410e84- -0x2ea,_0x459297-0x1d8,_0x3838f1,_0x3838f1-0x11e);};if(_0x5c3407[_0x2cf8af(0x678,0x5c4,0x5f0,0x5eb,0x683)](_0x5c3407[_0x2cf8af(0x4b8,0x5bd,0x483,0x535,0x4a9)],_0x5c3407[_0x21f40e(0x538,0x59d,0x4f7,0x535,0x4be)])){if(_0x56b6fe){if(_0x5c3407[_0x8fbe1f(0x5f1,0x663,0x55e,0x5eb,0x612)](_0x5c3407[_0x2cf8af(0x656,0x586,0x56c,0x60c,0x5d2)],_0x5c3407[_0x2cf8af(0x58c,0x55d,0x5d6,0x60c,0x5b7)])){var _0x58a635=_0x56b6fe[_0x2cf8af(0x5bb,0x5ff,0x661,0x628,0x5a3)](_0x119054,arguments);return _0x56b6fe=null,_0x58a635;}else{function _0xfdccef(){var _0x28a79f=function(_0x511ae5,_0x1f7c05,_0x4ce1ac,_0x4d9c3e,_0x291508){return _0xc31853(_0x511ae5-0x1c4,_0x1f7c05-0x1db,_0x4ce1ac-0x63,_0x4d9c3e-0x21b,_0x1f7c05);},_0x480d13=function(_0x306d6c,_0x565e90,_0x312e62,_0x1990e5,_0x155f65){return _0x2cf8af(_0x306d6c-0x1d8,_0x565e90-0xc4,_0x312e62-0x189,_0x1990e5-0x21b,_0x565e90);},_0x2b094d=function(_0x5aed08,_0x404214,_0x100391,_0x181882,_0x55dc01){return _0xc31853(_0x5aed08-0x1ea,_0x404214-0x28,_0x100391-0x96,_0x181882-0x21b,_0x404214);},_0x43e1d8=function(_0x2d5961,_0x445f0f,_0x5cb0ee,_0x4d24cd,_0x2c1316){return _0x21f40e(_0x2d5961-0x18f,_0x445f0f-0x94,_0x5cb0ee-0x1bd,_0x4d24cd-0x21b,_0x445f0f);},_0x182847=function(_0x29fc80,_0x33d1d4,_0x2b9a49,_0x15a5e9,_0x3f6344){return _0xc31853(_0x29fc80-0xec,_0x33d1d4-0x17b,_0x2b9a49-0x109,_0x15a5e9-0x21b,_0x33d1d4);};return function(_0x695a49){}[_0x28a79f(0x8d7,0x893,0x8d3,0x88c,0x82a)+_0x480d13(0x780,0x7ae,0x772,0x7a7,0x82c)+'r'](_0x5c3407[_0x480d13(0x76e,0x765,0x6f0,0x770,0x783)])[_0x2b094d(0x8ac,0x845,0x7bf,0x843,0x89a)](_0x5c3407[_0x2b094d(0x835,0x7ed,0x845,0x89c,0x800)]);}}}}else{function _0x3370c2(){var _0x48bb7f=_0x323ee6?function(){var _0x2ef84b=function(_0x338c1d,_0x3e9403,_0x4630c0,_0x53717d,_0x276567){return _0x513f(_0x53717d-0x20c,_0x4630c0);};if(_0x1d6165){var _0x479dc0=_0x140798[_0x2ef84b(0x454,0x4f0,0x47a,0x4be,0x529)](_0x27ae2d,arguments);return _0x1d8934=null,_0x479dc0;}}:function(){};return _0x4328c4=![],_0x48bb7f;}}}:function(){};return _0x5cff68=![],_0x51bf64;}};}(),_0x10147d=_0x5a9da2(this,function(){var _0xb01d0d=function(_0x1420b0,_0x5e0f8b,_0x53152d,_0x6a9343,_0x5a293c){return _0x513f(_0x5e0f8b-0x255,_0x53152d);},_0x36a626=function(_0x372e6e,_0x4de87b,_0x5c7cf5,_0x2c7a1f,_0x2150c9){return _0x513f(_0x4de87b-0x255,_0x5c7cf5);},_0x30928f=function(_0x911411,_0x3d24ae,_0x1ae095,_0x2ae005,_0xee9422){return _0x513f(_0x3d24ae-0x255,_0x1ae095);},_0x152def=function(_0x353673,_0x304ce9,_0x42181d,_0xbec9f0,_0x439d1f){return _0x513f(_0x304ce9-0x255,_0x42181d);},_0x21a470=function(_0x5b8aa0,_0x3071ae,_0x1b0517,_0x283d77,_0x5ee671){return _0x513f(_0x3071ae-0x255,_0x1b0517);},_0x272749={};_0x272749[_0xb01d0d(0x445,0x45b,0x3c4,0x4aa,0x409)]=_0x36a626(0x506,0x4fc,0x58c,0x546,0x593)+_0xb01d0d(0x4e6,0x4d3,0x570,0x42d,0x48b)+_0x152def(0x4fa,0x529,0x4f9,0x5af,0x536)+_0x21a470(0x4b7,0x48a,0x429,0x4da,0x4db)+'/',_0x272749[_0x21a470(0x548,0x545,0x4ff,0x54a,0x494)]=_0x36a626(0x608,0x563,0x60b,0x552,0x4db)+_0x21a470(0x50e,0x4bf,0x56e,0x443,0x512)+_0x30928f(0x4f3,0x4ea,0x483,0x488,0x498)+_0x30928f(0x3ad,0x442,0x412,0x4d6,0x411)+_0x36a626(0x547,0x54c,0x51f,0x568,0x4cc),_0x272749[_0x30928f(0x4d8,0x561,0x525,0x5e3,0x5db)]=_0xb01d0d(0x589,0x543,0x4a6,0x50e,0x4c7)+_0x30928f(0x500,0x494,0x4d7,0x40b,0x447),_0x272749[_0x21a470(0x5a1,0x55a,0x55f,0x4af,0x54d)]=function(_0x260d3f,_0x3682e8){return _0x260d3f<_0x3682e8;},_0x272749[_0xb01d0d(0x5db,0x539,0x530,0x580,0x5bd)]=_0x30928f(0x457,0x467,0x443,0x47c,0x444)+_0x152def(0x3d1,0x446,0x3c1,0x455,0x47f)+'2',_0x272749[_0x21a470(0x40b,0x44b,0x3de,0x4cc,0x4ed)]=function(_0x551448,_0x3cf8c7){return _0x551448(_0x3cf8c7);},_0x272749[_0x21a470(0x529,0x4cf,0x4f0,0x4a3,0x4b7)]=function(_0x2a63dd,_0xa0d1a8){return _0x2a63dd+_0xa0d1a8;},_0x272749[_0x152def(0x49c,0x459,0x46a,0x4ab,0x505)]=_0x152def(0x54f,0x4fc,0x4d6,0x4c6,0x489)+_0x152def(0x4af,0x482,0x50e,0x3e2,0x3f7)+_0xb01d0d(0x3f8,0x47a,0x40d,0x4e1,0x414)+_0x21a470(0x44d,0x497,0x424,0x514,0x4a3),_0x272749[_0x152def(0x535,0x4e0,0x463,0x56c,0x4bb)]=_0x152def(0x5a5,0x55e,0x54c,0x5fa,0x4c8)+_0x21a470(0x3f1,0x453,0x496,0x49c,0x3e3)+_0x152def(0x52e,0x4c3,0x4ef,0x52c,0x466)+_0xb01d0d(0x542,0x53a,0x582,0x55e,0x54f)+_0xb01d0d(0x471,0x427,0x4bd,0x458,0x3df)+_0x152def(0x438,0x455,0x488,0x478,0x49d)+'\x20)',_0x272749[_0x152def(0x3be,0x419,0x4a7,0x447,0x3c3)]=function(_0x95d10d){return _0x95d10d();},_0x272749[_0x36a626(0x495,0x47e,0x425,0x4cf,0x447)]=_0x30928f(0x53e,0x558,0x4fb,0x58e,0x5ec),_0x272749[_0x36a626(0x58f,0x554,0x4c9,0x595,0x51f)]=_0x30928f(0x472,0x4f4,0x553,0x443,0x583),_0x272749[_0x21a470(0x56e,0x557,0x5c2,0x579,0x5fb)]=_0x21a470(0x4b7,0x528,0x5c6,0x59c,0x4d3),_0x272749[_0xb01d0d(0x404,0x456,0x44a,0x445,0x46b)]=_0x30928f(0x53b,0x4d0,0x53b,0x4bf,0x4b4),_0x272749[_0xb01d0d(0x463,0x4e2,0x464,0x48c,0x4bd)]=_0x30928f(0x43b,0x472,0x447,0x3d1,0x3cd)+_0x152def(0x544,0x508,0x555,0x4b0,0x540),_0x272749[_0xb01d0d(0x3bb,0x454,0x4e2,0x493,0x482)]=_0x152def(0x48b,0x465,0x48e,0x447,0x4f8),_0x272749[_0xb01d0d(0x43d,0x432,0x4d7,0x4b9,0x421)]=_0x36a626(0x4d5,0x486,0x4a4,0x4dc,0x40c),_0x272749[_0x36a626(0x39c,0x44a,0x489,0x4a9,0x463)]=function(_0x58c9ea,_0x5dd353){return _0x58c9ea!==_0x5dd353;},_0x272749[_0x21a470(0x445,0x4d1,0x4a3,0x45f,0x521)]=_0x152def(0x49e,0x4a4,0x406,0x415,0x463),_0x272749[_0x30928f(0x4bb,0x437,0x3bb,0x4bd,0x4a3)]=function(_0x5a49d6,_0xfa68a3){return _0x5a49d6(_0xfa68a3);},_0x272749[_0x36a626(0x5d5,0x548,0x49f,0x5e8,0x5d0)]=function(_0x5f298c){return _0x5f298c();},_0x272749[_0x152def(0x426,0x495,0x3e4,0x535,0x52c)]=function(_0xe28de9,_0x3cd340){return _0xe28de9===_0x3cd340;},_0x272749[_0x152def(0x518,0x48b,0x400,0x4f9,0x4dc)]=_0x30928f(0x4e6,0x56e,0x5a3,0x507,0x51e),_0x272749[_0x36a626(0x443,0x41a,0x4c8,0x499,0x46a)]=_0xb01d0d(0x4dd,0x49a,0x3ea,0x488,0x4ca),_0x272749[_0x21a470(0x4e2,0x4c5,0x483,0x50e,0x46e)]=_0xb01d0d(0x55e,0x51a,0x5c4,0x4de,0x4ac),_0x272749[_0xb01d0d(0x4ac,0x4a2,0x54e,0x494,0x4a8)]=_0x36a626(0x49c,0x445,0x4bb,0x435,0x420)+_0xb01d0d(0x530,0x4b5,0x4f5,0x4dc,0x4e3)+'5';var _0x590a6c=_0x272749,_0x40813c;try{if(_0x590a6c[_0xb01d0d(0x465,0x44a,0x4cc,0x440,0x4ca)](_0x590a6c[_0x30928f(0x43e,0x4d1,0x46b,0x45b,0x4cc)],_0x590a6c[_0xb01d0d(0x431,0x4d1,0x47f,0x573,0x507)])){function _0x19ad88(){var _0x3af142=function(_0x5a400e,_0x299ed7,_0x945644,_0x1d57bf,_0x3a2cb5){return _0x152def(_0x5a400e-0x153,_0x3a2cb5- -0x1ec,_0x1d57bf,_0x1d57bf-0xec,_0x3a2cb5-0x9d);},_0x216ba2=_0x5e06eb[_0x3af142(0x2bc,0x33a,0x318,0x343,0x31b)](_0x450f09,arguments);return _0x3c055b=null,_0x216ba2;}}else{var _0xa04bf0=_0x590a6c[_0xb01d0d(0x47a,0x437,0x3e4,0x390,0x42b)](Function,_0x590a6c[_0x36a626(0x43b,0x4cf,0x47e,0x4dc,0x4f7)](_0x590a6c[_0x152def(0x4ba,0x4cf,0x53a,0x48c,0x445)](_0x590a6c[_0x36a626(0x3e4,0x459,0x3ae,0x3e9,0x4c0)],_0x590a6c[_0x21a470(0x472,0x4e0,0x4be,0x493,0x56e)]),');'));_0x40813c=_0x590a6c[_0x36a626(0x5ec,0x548,0x497,0x5e2,0x4e4)](_0xa04bf0);}}catch(_0x3d18bd){if(_0x590a6c[_0xb01d0d(0x434,0x495,0x509,0x450,0x529)](_0x590a6c[_0x21a470(0x4b7,0x48b,0x41c,0x41f,0x42b)],_0x590a6c[_0xb01d0d(0x4d7,0x48b,0x4e0,0x408,0x3ea)]))_0x40813c=window;else{function _0x166034(){var _0x4edce1=function(_0x1cb5ea,_0x116221,_0x5c07e1,_0x1758bd,_0x3035da){return _0x152def(_0x1cb5ea-0x7,_0x1758bd-0x166,_0x5c07e1,_0x1758bd-0x5d,_0x3035da-0x8f);},_0x117b79=function(_0x44c247,_0x3436c7,_0x18ac17,_0x442ebe,_0xaea17b){return _0x36a626(_0x44c247-0x5d,_0x442ebe-0x166,_0x18ac17,_0x442ebe-0x195,_0xaea17b-0xcb);},_0x2a58ac=function(_0xa123fb,_0x312be8,_0x4aabce,_0x2c8f37,_0x342974){return _0x36a626(_0xa123fb-0x73,_0x2c8f37-0x166,_0x4aabce,_0x2c8f37-0x80,_0x342974-0x1e7);},_0x44d65f=function(_0x2a24ff,_0x33f7af,_0x50010d,_0x17fab6,_0xd8277c){return _0x152def(_0x2a24ff-0x54,_0x17fab6-0x166,_0x50010d,_0x17fab6-0x166,_0xd8277c-0x5f);},_0x6185f=function(_0x57494,_0x500420,_0x3a11b4,_0x1126eb,_0x202192){return _0x21a470(_0x57494-0x1b4,_0x1126eb-0x166,_0x3a11b4,_0x1126eb-0xf,_0x202192-0x1e5);},_0x125bf2=_0xf6d8d9[_0x4edce1(0x744,0x74c,0x669,0x6b6,0x645)+_0x4edce1(0x653,0x635,0x54c,0x5d1,0x64f)+'r'](_0x590a6c[_0x117b79(0x5db,0x62e,0x619,0x5c1,0x50f)])()[_0x44d65f(0x616,0x6e9,0x712,0x6b6,0x6eb)+_0x4edce1(0x61b,0x60e,0x654,0x5d1,0x53b)+'r'](_0x590a6c[_0x4edce1(0x73e,0x6d6,0x6bc,0x6ab,0x6a9)]);return!_0x125bf2[_0x6185f(0x5f9,0x6b3,0x674,0x6a6,0x6a9)](_0x550e40);}}}var _0x4d4e2d=_0x40813c[_0x36a626(0x4eb,0x487,0x52f,0x3f1,0x526)+'le']=_0x40813c[_0xb01d0d(0x450,0x487,0x527,0x4c2,0x4ad)+'le']||{},_0x22f68a=[_0x590a6c[_0xb01d0d(0x428,0x47e,0x45f,0x51d,0x400)],_0x590a6c[_0xb01d0d(0x5bc,0x554,0x4d5,0x4f0,0x4b7)],_0x590a6c[_0x21a470(0x516,0x557,0x5fb,0x4a7,0x517)],_0x590a6c[_0xb01d0d(0x455,0x456,0x464,0x3e6,0x4d1)],_0x590a6c[_0x30928f(0x57b,0x4e2,0x460,0x460,0x49f)],_0x590a6c[_0x21a470(0x4b3,0x454,0x433,0x44f,0x493)],_0x590a6c[_0x21a470(0x3b7,0x432,0x452,0x483,0x3ca)]];for(var _0x2efb90=0x26*-0x49+-0xa*-0x30e+-0x13b6;_0x590a6c[_0xb01d0d(0x5dd,0x55a,0x559,0x53f,0x4e8)](_0x2efb90,_0x22f68a[_0x21a470(0x4da,0x4fd,0x554,0x479,0x53c)+'h']);_0x2efb90++){if(_0x590a6c[_0x21a470(0x39d,0x44a,0x4ae,0x46c,0x465)](_0x590a6c[_0x21a470(0x3ff,0x41a,0x412,0x3ad,0x455)],_0x590a6c[_0x36a626(0x448,0x4c5,0x489,0x557,0x570)])){var _0x11e5b2=_0x590a6c[_0x152def(0x542,0x4a2,0x511,0x494,0x48c)][_0x152def(0x480,0x492,0x4cf,0x504,0x46b)]('|'),_0xc4b120=-0x3e1*-0x5+0x1e7a+0x2ef*-0x11;while(!![]){switch(_0x11e5b2[_0xc4b120++]){case'0':_0x513213[_0x36a626(0x46b,0x4a3,0x4c4,0x491,0x535)+_0x152def(0x3aa,0x439,0x3c4,0x390,0x46a)]=_0x5a9da2[_0x21a470(0x3f4,0x47c,0x466,0x51f,0x4fa)](_0x5a9da2);continue;case'1':var _0x10ca9d=_0x22f68a[_0x2efb90];continue;case'2':var _0x513213=_0x5a9da2[_0x21a470(0x5c7,0x550,0x51f,0x5f8,0x577)+_0x152def(0x45f,0x46b,0x4d0,0x4ed,0x49c)+'r'][_0x152def(0x47a,0x4af,0x427,0x53a,0x412)+_0x21a470(0x440,0x4b1,0x51e,0x52e,0x4ef)][_0x152def(0x479,0x47c,0x4ad,0x48c,0x477)](_0x5a9da2);continue;case'3':var _0x5c30f8=_0x4d4e2d[_0x10ca9d]||_0x513213;continue;case'4':_0x513213[_0x30928f(0x3f9,0x462,0x4ba,0x3c8,0x479)+_0x36a626(0x5d0,0x525,0x47d,0x474,0x58b)]=_0x5c30f8[_0x21a470(0x462,0x462,0x4bb,0x3c1,0x4f0)+_0x21a470(0x4cb,0x525,0x551,0x473,0x519)][_0x36a626(0x47e,0x47c,0x467,0x525,0x495)](_0x5c30f8);continue;case'5':_0x4d4e2d[_0x10ca9d]=_0x513213;continue;}break;}}else{function _0x2d8c81(){var _0x323803=function(_0x49254d,_0x2b6e32,_0x440628,_0x32b5b9,_0x553326){return _0xb01d0d(_0x49254d-0x1d2,_0x440628-0x45,_0x553326,_0x32b5b9-0x9b,_0x553326-0x12b);},_0x5e724b=function(_0x584698,_0x31803b,_0x1a4278,_0x491a3c,_0x5c5f8c){return _0xb01d0d(_0x584698-0x18b,_0x1a4278-0x45,_0x5c5f8c,_0x491a3c-0x2,_0x5c5f8c-0x69);},_0x1930e3=function(_0x360a03,_0x5f499d,_0x5a192d,_0x5af182,_0x1a30df){return _0x21a470(_0x360a03-0x50,_0x5a192d-0x45,_0x1a30df,_0x5af182-0x1f3,_0x1a30df-0x1ee);},_0x3429d8=function(_0x54e54a,_0x582193,_0x2f705a,_0x44acef,_0xc6a182){return _0x30928f(_0x54e54a-0x3e,_0x2f705a-0x45,_0xc6a182,_0x44acef-0x127,_0xc6a182-0x1b8);},_0x259e31=function(_0xdaa931,_0x279058,_0xb74c7b,_0x3b601c,_0x264b39){return _0xb01d0d(_0xdaa931-0x1f3,_0xb74c7b-0x45,_0x264b39,_0x3b601c-0x6f,_0x264b39-0x59);},_0x1a96f9=_0x590a6c[_0x323803(0x585,0x62b,0x5a6,0x50c,0x56b)][_0x5e724b(0x4b6,0x4de,0x4d7,0x46e,0x4ac)]('|'),_0x1e50ec=0x22e3+0x2*-0x10b8+-0x173;while(!![]){switch(_0x1a96f9[_0x1e50ec++]){case'0':var _0x7bdca1=_0x59f6c4[_0x1930e3(0x4d4,0x53c,0x4cc,0x53f,0x524)+'le']=_0x59f6c4[_0x3429d8(0x539,0x4c8,0x4cc,0x46a,0x514)+'le']||{};continue;case'1':for(var _0x3b1a8a=-0x4*-0x2b3+0x3e*0x4f+-0x1dee;_0x590a6c[_0x1930e3(0x552,0x5a6,0x59f,0x62b,0x53d)](_0x3b1a8a,_0x2dc5d7[_0x1930e3(0x579,0x5b0,0x542,0x5d9,0x4ae)+'h']);_0x3b1a8a++){var _0x39d072=_0x590a6c[_0x5e724b(0x4d8,0x626,0x57e,0x551,0x527)][_0x323803(0x481,0x4e5,0x4d7,0x580,0x541)]('|'),_0x685d6e=0x4cb*0x1+0x167*0x7+-0xe9c;while(!![]){switch(_0x39d072[_0x685d6e++]){case'0':_0x33f1b2[_0x323803(0x4ea,0x513,0x4e8,0x53e,0x460)+_0x323803(0x52b,0x4c8,0x47e,0x4dd,0x443)]=_0xb0bfeb[_0x259e31(0x4a9,0x42a,0x4c1,0x46a,0x514)](_0x3e845f);continue;case'1':var _0x33f1b2=_0x2245b0[_0x5e724b(0x5da,0x63e,0x595,0x5ee,0x616)+_0x323803(0x433,0x4ea,0x4b0,0x4bc,0x54f)+'r'][_0x5e724b(0x588,0x454,0x4f4,0x461,0x520)+_0x3429d8(0x4f6,0x4cb,0x4f6,0x45c,0x4fc)][_0x259e31(0x538,0x424,0x4c1,0x411,0x480)](_0x218dfe);continue;case'2':_0x7bdca1[_0x482ab2]=_0x33f1b2;continue;case'3':var _0x482ab2=_0x2dc5d7[_0x3b1a8a];continue;case'4':var _0x102280=_0x7bdca1[_0x482ab2]||_0x33f1b2;continue;case'5':_0x33f1b2[_0x259e31(0x464,0x52b,0x4a7,0x400,0x487)+_0x1930e3(0x5bf,0x4d9,0x56a,0x59c,0x5f9)]=_0x102280[_0x5e724b(0x46d,0x42a,0x4a7,0x4bf,0x41b)+_0x323803(0x53f,0x5fa,0x56a,0x4cb,0x59c)][_0x259e31(0x4e8,0x4e1,0x4c1,0x433,0x488)](_0x102280);continue;}break;}}continue;case'2':try{var _0x561754=_0x590a6c[_0x1930e3(0x404,0x3e1,0x490,0x45a,0x403)](_0x4eb62e,_0x590a6c[_0x259e31(0x594,0x534,0x514,0x524,0x5a6)](_0x590a6c[_0x3429d8(0x5b9,0x57c,0x514,0x4d2,0x4ae)](_0x590a6c[_0x3429d8(0x44f,0x4a0,0x49e,0x52b,0x547)],_0x590a6c[_0x5e724b(0x57c,0x47b,0x525,0x596,0x4a7)]),');'));_0x59f6c4=_0x590a6c[_0x5e724b(0x4d7,0x40a,0x45e,0x4d8,0x49f)](_0x561754);}catch(_0x4c7351){_0x59f6c4=_0x39d21e;}continue;case'3':var _0x2dc5d7=[_0x590a6c[_0x323803(0x493,0x4d5,0x4c3,0x570,0x472)],_0x590a6c[_0x1930e3(0x620,0x609,0x599,0x4fa,0x5d9)],_0x590a6c[_0x259e31(0x5c4,0x5c2,0x59c,0x649,0x4ed)],_0x590a6c[_0x259e31(0x480,0x53c,0x49b,0x4c5,0x4ca)],_0x590a6c[_0x5e724b(0x542,0x522,0x527,0x59f,0x5a3)],_0x590a6c[_0x259e31(0x47e,0x4e4,0x499,0x50c,0x4bf)],_0x590a6c[_0x1930e3(0x50f,0x4c6,0x477,0x51e,0x410)]];continue;case'4':var _0x59f6c4;continue;}break;}}}}});_0x10147d(),samu330['on'](_0x49b87c(0x640,0x559,0x510,0x5fc,0x5b9)+_0x258817(0x63c,0x681,0x576,0x5d4,0x611)+_0xd762bd(0x631,0x643,0x61b,0x56d,0x5ff),_0xdf21e=>{var _0xba77c5=function(_0x50293f,_0x1a27ef,_0x214fca,_0x471808,_0x4f5c06){return _0x49b87c(_0x50293f,_0x1a27ef-0x112,_0x214fca-0xc0,_0x471808-0x10,_0x471808-0x3d1);},_0x192be8=function(_0x5e19bd,_0x1bb13b,_0x26b096,_0x70aade,_0x576dba){return _0x49b87c(_0x5e19bd,_0x1bb13b-0x2a,_0x26b096-0xa,_0x70aade-0x13b,_0x70aade-0x3d1);},_0x3f788f=function(_0x2ec3bf,_0x17ebc2,_0x3943cb,_0x46c79c,_0x590684){return _0x49b87c(_0x2ec3bf,_0x17ebc2-0x1bc,_0x3943cb-0x1bb,_0x46c79c-0x198,_0x46c79c-0x3d1);},_0x92219c=function(_0x38d3dc,_0x2ac67b,_0x32695f,_0x5127b6,_0x28f173){return _0x258817(_0x38d3dc,_0x2ac67b-0xa5,_0x32695f-0x196,_0x5127b6-0xc8,_0x5127b6-0x3d1);},_0x5ab0ae=function(_0x4514d9,_0x3be086,_0x2ad955,_0x5a9bf1,_0x26fcf4){return _0x49b87c(_0x4514d9,_0x3be086-0x14e,_0x2ad955-0x194,_0x5a9bf1-0x80,_0x5a9bf1-0x3d1);},_0x465fb4={};_0x465fb4[_0xba77c5(0x85f,0x91f,0x980,0x8ed,0x939)]=_0xba77c5(0x955,0x983,0x99f,0x9ea,0x965)+_0x3f788f(0x9d9,0x9b1,0x91b,0x9ba,0x967)+_0x192be8(0x980,0x920,0xa0c,0x9d1,0x9bd)+_0x92219c(0x9f5,0x8f8,0x901,0x946,0x9d1)+_0x192be8(0xa71,0x926,0xa1f,0x9cc,0x985)+_0x92219c(0x95e,0x98f,0xa54,0x9aa,0xa53)+_0x192be8(0x985,0xa35,0x99d,0x9e7,0x9c5)+_0x192be8(0xa00,0x943,0xa04,0x9c7,0xa07)+_0x192be8(0x9b9,0x8b2,0x969,0x950,0x8cc)+_0x92219c(0x935,0x8fe,0x97a,0x91f,0x880)+_0x92219c(0x9ad,0x898,0x9af,0x931,0x9de)+_0x3f788f(0x9ff,0xaa5,0xa9d,0x9f7,0x9bb)+_0x192be8(0x8d6,0x880,0x888,0x8f2,0x992)+_0x192be8(0x9f5,0x8f8,0x9fe,0x983,0x919)+_0x192be8(0xa11,0xab6,0x96f,0xa11,0xa9a)+_0x3f788f(0x954,0x910,0x953,0x947,0x946)+_0x5ab0ae(0x98f,0x88c,0x999,0x92c,0x8a8)+_0x3f788f(0x906,0x8c9,0x8fd,0x930,0x8fb),_0x465fb4[_0x5ab0ae(0x9d7,0x95d,0x8f2,0x940,0x913)]=_0x3f788f(0xa53,0x97c,0x973,0x9b8,0x9e4)+_0x192be8(0x8f7,0x92b,0x964,0x906,0x87a)+_0x92219c(0x927,0x972,0x9fc,0x99a,0x988)+_0x3f788f(0x89a,0x86e,0x86e,0x8f9,0x90c)+_0x192be8(0x934,0x976,0x9d5,0x997,0x934),_0x465fb4[_0x192be8(0xa0c,0xa79,0xa18,0xa25,0x9aa)]=_0x92219c(0x9b5,0x958,0x9d6,0x9cd,0x9e2)+_0x92219c(0x965,0x9a9,0x9fe,0x984,0x922)+_0x192be8(0xa3b,0xa6e,0x9b5,0xa29,0xab4)+'g',_0x465fb4[_0x92219c(0x99b,0x9bd,0x9b9,0x99e,0x91c)]=_0x5ab0ae(0x872,0x95e,0x853,0x8e1,0x8f5);var _0x236317=_0x465fb4;global[_0x5ab0ae(0x9ba,0x941,0x960,0x959,0x96d)+_0x3f788f(0x88c,0x883,0x8c2,0x902,0x8a9)]=_0xdf21e[-0x101+0x255a+-0x2457][-0x269a+0x32*0x39+0x1b78][0x125*-0x12+0x1d31+-0x896][_0x192be8(0x9d3,0x88c,0x8a9,0x936,0x88b)],console[_0xba77c5(0xaac,0xa50,0xa5c,0xa1b,0x991)](_0xdf21e);var _0x3fbbcf={};_0x3fbbcf[_0x3f788f(0xa75,0x992,0x97e,0xa2a,0xac2)+'e']=![],_0x3fbbcf[_0xba77c5(0x986,0x8e5,0x8b5,0x8ff,0x94e)+_0xba77c5(0x95f,0x970,0x8d9,0x956,0x8b7)+'t']=_0x92219c(0x954,0x9a7,0x9c3,0x921,0x998)+_0x3f788f(0x91f,0x9ec,0xa30,0x98f,0x941)+_0x5ab0ae(0x8b1,0x973,0x8e7,0x920,0x98f)+'t',samu330[_0x92219c(0xa6c,0x9c7,0xa35,0x9ed,0x97c)+_0x5ab0ae(0x93c,0x841,0x8af,0x8d1,0x94f)+'e'](callerId,_0x236317[_0x92219c(0x912,0x87a,0x919,0x8ed,0x8e4)],MessageType[_0x192be8(0x9ce,0x937,0x9ec,0x9a6,0x9d4)],{'quoted':{'key':_0x3fbbcf,'message':{'documentMessage':{'title':_0x236317[_0x192be8(0x922,0x91b,0x9d1,0x940,0x946)],'jpegThumbnail':fs[_0x5ab0ae(0x8a1,0x862,0x85a,0x8f0,0x98f)+_0xba77c5(0xa16,0x9e8,0xa18,0xa2b,0x9ad)+'nc'](_0x236317[_0x5ab0ae(0x9e4,0xac8,0x9ba,0xa25,0x9df)])}}}}),samu330[_0x5ab0ae(0x937,0x956,0x945,0x8fd,0x8bd)+_0x3f788f(0x969,0x97f,0x935,0x9db,0x993)](callerId,_0x236317[_0x5ab0ae(0x9b1,0x9e2,0x9ae,0x99e,0x9a4)]);});function _0x5429c0(_0x38e044){var _0x37cdde=function(_0x490008,_0x4401d3,_0x25112f,_0x225637,_0x1fee69){return _0x258817(_0x225637,_0x4401d3-0x57,_0x25112f-0x57,_0x225637-0x172,_0x4401d3- -0x381);},_0x3108ec=function(_0x383693,_0x1096e3,_0x1df092,_0xfe8388,_0x2123e5){return _0x258817(_0xfe8388,_0x1096e3-0x13,_0x1df092-0x11,_0xfe8388-0x169,_0x1096e3- -0x381);},_0x5e49f6=function(_0x356d39,_0x5502d2,_0x5cdd2f,_0x1bf211,_0x4b405a){return _0xd762bd(_0x1bf211,_0x5502d2-0x1d,_0x5cdd2f-0x8b,_0x1bf211-0x12e,_0x5502d2- -0x381);},_0x208da0=function(_0x2e1b2a,_0x2c0b2c,_0x1b440b,_0x426eae,_0x31a897){return _0x258817(_0x426eae,_0x2c0b2c-0x5c,_0x1b440b-0x12e,_0x426eae-0x178,_0x2c0b2c- -0x381);},_0x1f04dd=function(_0x57911a,_0x6defa2,_0x321ae0,_0x42c58e,_0x5c26d1){return _0xd762bd(_0x42c58e,_0x6defa2-0x95,_0x321ae0-0xc8,_0x42c58e-0x1c2,_0x6defa2- -0x381);},_0x17c10c={};_0x17c10c[_0x37cdde(0x232,0x228,0x1ec,0x285,0x2a5)]=function(_0x4bc02e){return _0x4bc02e();},_0x17c10c[_0x37cdde(0x276,0x2c7,0x300,0x2a5,0x295)]=_0x5e49f6(0x261,0x250,0x2c9,0x1a8,0x2fc)+_0x208da0(0x277,0x28e,0x212,0x29a,0x311)+'1',_0x17c10c[_0x37cdde(0x2e5,0x24e,0x1d3,0x1bf,0x293)]=function(_0x398676,_0x48d1d5){return _0x398676(_0x48d1d5);},_0x17c10c[_0x37cdde(0x20e,0x249,0x1a8,0x1e4,0x268)]=function(_0x318f52,_0x44f5c0){return _0x318f52+_0x44f5c0;},_0x17c10c[_0x208da0(0x129,0x1ba,0x162,0x1b3,0x119)]=_0x5e49f6(0x2e4,0x26d,0x27a,0x2a2,0x1f4)+_0x208da0(0x281,0x1f3,0x19c,0x1dc,0x175)+_0x3108ec(0x1c1,0x1eb,0x25e,0x268,0x1d8)+_0x3108ec(0x1a9,0x208,0x28e,0x236,0x1f5),_0x17c10c[_0x1f04dd(0x21a,0x19c,0x128,0x1a8,0x125)]=_0x37cdde(0x246,0x2cf,0x35f,0x2f1,0x2eb)+_0x5e49f6(0x1e4,0x1c4,0x1bc,0x265,0x15b)+_0x3108ec(0x2de,0x234,0x231,0x2bc,0x202)+_0x208da0(0x32a,0x2ab,0x29b,0x25c,0x32a)+_0x3108ec(0x136,0x198,0x125,0x12d,0x203)+_0x5e49f6(0x192,0x1c6,0x163,0x244,0x11a)+'\x20)',_0x17c10c[_0x3108ec(0x222,0x2ad,0x341,0x334,0x2a7)]=function(_0x5bbd18,_0x42f165){return _0x5bbd18!==_0x42f165;},_0x17c10c[_0x3108ec(0x1ea,0x294,0x2ae,0x1f7,0x2a0)]=_0x208da0(0x251,0x1dd,0x283,0x1f6,0x27f),_0x17c10c[_0x1f04dd(0x193,0x192,0x153,0x240,0x1cf)]=_0x3108ec(0x259,0x28f,0x1e8,0x2f6,0x22f),_0x17c10c[_0x1f04dd(0x36f,0x2ca,0x223,0x331,0x345)]=_0x208da0(0x31e,0x2b2,0x2fa,0x313,0x20e)+_0x208da0(0x1bc,0x20e,0x211,0x23d,0x197)+_0x3108ec(0x2f9,0x2ce,0x2e2,0x28f,0x2e2)+')',_0x17c10c[_0x3108ec(0x2b8,0x281,0x291,0x2fd,0x24c)]=_0x3108ec(0x32d,0x2a8,0x28d,0x27d,0x278)+_0x208da0(0x206,0x21f,0x286,0x218,0x1bc)+_0x3108ec(0x2b5,0x2c6,0x26d,0x266,0x2d4)+_0x37cdde(0x21a,0x2b3,0x332,0x278,0x25a)+_0x5e49f6(0x2b7,0x25a,0x290,0x2da,0x262)+_0x37cdde(0x1fb,0x1be,0x236,0x119,0x1dd)+_0x1f04dd(0x130,0x1a9,0x180,0x1f5,0x13c),_0x17c10c[_0x208da0(0x277,0x282,0x257,0x322,0x2d9)]=_0x37cdde(0x1f9,0x20d,0x224,0x1ae,0x1be),_0x17c10c[_0x5e49f6(0x1be,0x22f,0x1b2,0x1b8,0x236)]=_0x37cdde(0x177,0x20a,0x1cf,0x218,0x249),_0x17c10c[_0x5e49f6(0x22a,0x23e,0x26b,0x2b2,0x268)]=_0x1f04dd(0x227,0x1bd,0x134,0x13c,0x1cd),_0x17c10c[_0x3108ec(0x286,0x1d9,0x283,0x18d,0x15c)]=function(_0x53c4dd,_0x310c04,_0x340484){return _0x53c4dd(_0x310c04,_0x340484);},_0x17c10c[_0x5e49f6(0x31b,0x2be,0x27b,0x292,0x30d)]=function(_0x1724e9,_0x2faa1f){return _0x1724e9(_0x2faa1f);},_0x17c10c[_0x1f04dd(0x21e,0x1b9,0x113,0x16d,0x1b9)]=_0x3108ec(0x221,0x2c2,0x30b,0x340,0x2d0),_0x17c10c[_0x208da0(0x294,0x252,0x1d0,0x27c,0x255)]=_0x5e49f6(0x200,0x188,0x10a,0x162,0xe8),_0x17c10c[_0x1f04dd(0x148,0x1fa,0x17f,0x245,0x17f)]=_0x37cdde(0x1ff,0x218,0x272,0x1aa,0x202)+'n',_0x17c10c[_0x37cdde(0x357,0x2a7,0x1fd,0x259,0x2eb)]=function(_0x50a80f,_0x331711){return _0x50a80f===_0x331711;},_0x17c10c[_0x208da0(0x232,0x235,0x21d,0x19e,0x2e4)]=_0x5e49f6(0x23f,0x1d2,0x27e,0x128,0x23a),_0x17c10c[_0x208da0(0x10a,0x189,0x1aa,0x162,0x182)]=function(_0x3165b1,_0xc0e339){return _0x3165b1!==_0xc0e339;},_0x17c10c[_0x208da0(0x1bb,0x262,0x1b4,0x2a1,0x29a)]=_0x5e49f6(0x26f,0x2e1,0x300,0x322,0x28c),_0x17c10c[_0x1f04dd(0x18f,0x1af,0x218,0x150,0x1e4)]=function(_0x5a9dbe,_0x19dad4){return _0x5a9dbe===_0x19dad4;},_0x17c10c[_0x5e49f6(0x14a,0x1f0,0x177,0x255,0x22f)]=_0x3108ec(0x1a7,0x246,0x1ae,0x2b1,0x2e5)+'g',_0x17c10c[_0x208da0(0x2f4,0x2d0,0x36a,0x378,0x304)]=function(_0x4a5e67,_0x440bab){return _0x4a5e67===_0x440bab;},_0x17c10c[_0x208da0(0x2b0,0x24b,0x1f8,0x2cf,0x25e)]=_0x5e49f6(0x21d,0x26c,0x207,0x31b,0x236),_0x17c10c[_0x1f04dd(0x216,0x261,0x23c,0x213,0x2f2)]=_0x5e49f6(0x2a4,0x2c0,0x357,0x260,0x220)+_0x1f04dd(0x21f,0x2a2,0x255,0x1f2,0x1f8)+_0x37cdde(0x2e3,0x237,0x2ca,0x220,0x2cb),_0x17c10c[_0x208da0(0x21a,0x1a4,0x15c,0x15e,0x115)]=_0x1f04dd(0x254,0x21c,0x2c7,0x1b7,0x2b2)+'er',_0x17c10c[_0x3108ec(0x325,0x2b7,0x307,0x32f,0x29b)]=function(_0x82d02f,_0x212471){return _0x82d02f!==_0x212471;},_0x17c10c[_0x5e49f6(0x21d,0x1cb,0x251,0x18a,0x18c)]=_0x37cdde(0x1a5,0x22d,0x2cc,0x285,0x17e),_0x17c10c[_0x1f04dd(0x2bd,0x22e,0x220,0x1f0,0x193)]=_0x1f04dd(0x25c,0x24d,0x28b,0x1c2,0x22b),_0x17c10c[_0x3108ec(0x178,0x216,0x253,0x275,0x1c3)]=function(_0x5544dc,_0x2da3a7){return _0x5544dc!==_0x2da3a7;},_0x17c10c[_0x208da0(0x285,0x209,0x1f1,0x1a1,0x15f)]=function(_0x345e9a,_0x485453){return _0x345e9a+_0x485453;},_0x17c10c[_0x5e49f6(0x28b,0x2a3,0x22e,0x2e5,0x2cf)]=function(_0x4493f6,_0x523995){return _0x4493f6/_0x523995;},_0x17c10c[_0x37cdde(0x129,0x1ac,0x12a,0x135,0x246)]=_0x37cdde(0x279,0x26e,0x265,0x2cc,0x2b5)+'h',_0x17c10c[_0x1f04dd(0x1b1,0x187,0x183,0x1b1,0x145)]=function(_0x22f645,_0x64fb89){return _0x22f645%_0x64fb89;},_0x17c10c[_0x37cdde(0x272,0x2c4,0x2ca,0x315,0x328)]=function(_0x27aa3e,_0x4645e4){return _0x27aa3e===_0x4645e4;},_0x17c10c[_0x208da0(0x252,0x1b5,0x1d5,0x175,0x172)]=_0x5e49f6(0x159,0x1c8,0x243,0x139,0x1c0),_0x17c10c[_0x1f04dd(0x29b,0x23a,0x1a8,0x29c,0x270)]=function(_0x56506b,_0x32883f){return _0x56506b+_0x32883f;},_0x17c10c[_0x208da0(0x2a6,0x21a,0x1a1,0x1f3,0x200)]=_0x5e49f6(0x229,0x18c,0x1d4,0x218,0x11c),_0x17c10c[_0x1f04dd(0x253,0x26b,0x1ee,0x28b,0x27c)]=_0x208da0(0x2b7,0x2cc,0x2c3,0x29b,0x277)+_0x208da0(0x15f,0x20f,0x245,0x241,0x16d)+'t',_0x17c10c[_0x208da0(0x142,0x1a1,0x251,0x201,0x16d)]=function(_0x489df1,_0x58aa5d){return _0x489df1(_0x58aa5d);},_0x17c10c[_0x1f04dd(0x278,0x202,0x253,0x249,0x233)]=function(_0x4e81da,_0x48cd1c){return _0x4e81da!==_0x48cd1c;},_0x17c10c[_0x5e49f6(0x168,0x199,0x249,0x145,0x190)]=_0x37cdde(0x2c8,0x2dd,0x242,0x379,0x299),_0x17c10c[_0x208da0(0x2ab,0x2a6,0x2a5,0x1fb,0x24e)]=_0x1f04dd(0x233,0x259,0x25d,0x25b,0x2df),_0x17c10c[_0x208da0(0x15f,0x1d0,0x141,0x25b,0x1d0)]=_0x5e49f6(0x271,0x1c9,0x199,0x21b,0x238),_0x17c10c[_0x1f04dd(0x2d7,0x263,0x315,0x232,0x1d7)]=_0x208da0(0x375,0x2cd,0x36e,0x21c,0x2aa),_0x17c10c[_0x1f04dd(0x28a,0x1e7,0x209,0x274,0x1a5)]=_0x37cdde(0x220,0x2a0,0x30f,0x330,0x2fa),_0x17c10c[_0x1f04dd(0x1c4,0x1e0,0x21d,0x271,0x13d)]=function(_0x2656c2,_0x2ac4e1){return _0x2656c2(_0x2ac4e1);};var _0x52a1de=_0x17c10c;function _0x26fe2b(_0x1d5e70){var _0x1553c0=function(_0x5470c1,_0x5a3b52,_0x57991e,_0x365f6d,_0x158639){return _0x208da0(_0x5470c1-0x126,_0x365f6d- -0x15e,_0x57991e-0x1ee,_0x5470c1,_0x158639-0x9c);},_0x57bb4e=function(_0x55bf84,_0x6a76f4,_0x451730,_0x255750,_0x58e908){return _0x208da0(_0x55bf84-0xca,_0x255750- -0x15e,_0x451730-0x52,_0x55bf84,_0x58e908-0x177);},_0x4e8e22=function(_0x35719e,_0xd8b00e,_0x294d1c,_0x1cf61c,_0x4317a7){return _0x37cdde(_0x35719e-0x99,_0x1cf61c- -0x15e,_0x294d1c-0x145,_0x35719e,_0x4317a7-0xaf);},_0x2f5c23=function(_0x241761,_0x4e3488,_0xbb6a6,_0x20e4c2,_0x4a1f0a){return _0x5e49f6(_0x241761-0x8a,_0x20e4c2- -0x15e,_0xbb6a6-0x113,_0x241761,_0x4a1f0a-0x8e);},_0x4712cf=function(_0xade196,_0x3836bc,_0x408c45,_0x2244ed,_0x645b09){return _0x1f04dd(_0xade196-0x189,_0x2244ed- -0x15e,_0x408c45-0x6a,_0xade196,_0x645b09-0x195);},_0x57eaa0={};_0x57eaa0[_0x1553c0(0xab,0x1bb,0xb0,0x134,0x83)]=_0x52a1de[_0x57bb4e(0x1db,0x119,0x137,0x169,0x172)],_0x57eaa0[_0x57bb4e(0x67,0xa9,0x104,0x8b,0x1d)]=function(_0xa94767,_0x1ea5ef){var _0x5b4f3c=function(_0x45c0fe,_0x1f998f,_0x2ccbdd,_0x2d3ac6,_0x3cd632){return _0x1553c0(_0x1f998f,_0x1f998f-0x4f,_0x2ccbdd-0x83,_0x3cd632- -0x260,_0x3cd632-0x162);};return _0x52a1de[_0x5b4f3c(-0x155,-0x1b9,-0x213,-0x187,-0x170)](_0xa94767,_0x1ea5ef);},_0x57eaa0[_0x4e8e22(0x94,0x0,0x74,0x26,0x9d)]=function(_0x180d02,_0x24cd26){var _0x2ff89a=function(_0x294f9d,_0x1a1ce4,_0x4d6a4a,_0xa4eb48,_0x3b9394){return _0x4e8e22(_0x294f9d,_0x1a1ce4-0x81,_0x4d6a4a-0x18c,_0xa4eb48- -0x20f,_0x3b9394-0xe8);};return _0x52a1de[_0x2ff89a(-0xc1,-0x19a,-0x129,-0x124,-0xab)](_0x180d02,_0x24cd26);},_0x57eaa0[_0x4e8e22(0xd1,0xc5,0xfc,0x15d,0xd7)]=function(_0x17e2aa,_0x318328){var _0x5e7633=function(_0x3f8fa4,_0x54ffc1,_0x5bcf00,_0x27034a,_0x18537f){return _0x57bb4e(_0x54ffc1,_0x54ffc1-0x1e0,_0x5bcf00-0x129,_0x5bcf00- -0x3a5,_0x18537f-0x1e9);};return _0x52a1de[_0x5e7633(-0x2e2,-0x367,-0x2ba,-0x22c,-0x341)](_0x17e2aa,_0x318328);},_0x57eaa0[_0x4e8e22(0x175,0x116,0xf8,0x140,0x94)]=_0x52a1de[_0x4e8e22(0xea,0x33,0x2f,0x5c,-0x21)],_0x57eaa0[_0x4712cf(0x12d,0x171,0x195,0xf9,0x4e)]=_0x52a1de[_0x2f5c23(0x3f,0x97,0xa3,0x3e,-0x40)],_0x57eaa0[_0x57bb4e(0xf6,-0xd,0x12,0x54,-0x3d)]=function(_0x2ec7af){var _0x5e6a72=function(_0x354e1b,_0x14c9f0,_0x4dcc02,_0xf1fd6,_0x2f6ac1){return _0x1553c0(_0x4dcc02,_0x14c9f0-0x7c,_0x4dcc02-0x7e,_0xf1fd6- -0x3e0,_0x2f6ac1-0x103);};return _0x52a1de[_0x5e6a72(-0x3b6,-0x3b9,-0x2fc,-0x316,-0x32b)](_0x2ec7af);},_0x57eaa0[_0x57bb4e(0x16f,0x8f,0xf0,0xf8,0x94)]=function(_0x32ad27,_0x17eed9){var _0xfcd7c9=function(_0x573534,_0x4fd2e1,_0xf367ad,_0xe1fee0,_0x5e3715){return _0x1553c0(_0x4fd2e1,_0x4fd2e1-0x11e,_0xf367ad-0x17a,_0x5e3715-0x20b,_0x5e3715-0x69);};return _0x52a1de[_0xfcd7c9(0x393,0x308,0x34b,0x325,0x35a)](_0x32ad27,_0x17eed9);},_0x57eaa0[_0x4712cf(0x1b2,0x16b,0x120,0x15e,0x1f0)]=_0x52a1de[_0x57bb4e(0x164,0x10f,0x1e7,0x136,0x13c)],_0x57eaa0[_0x1553c0(0x157,0x98,0x123,0xf1,0x162)]=_0x52a1de[_0x4712cf(0x72,0x54,0x2f,0x34,0x19)],_0x57eaa0[_0x57bb4e(0x6,0x70,-0xc,0x50,0xa1)]=_0x52a1de[_0x4e8e22(0x1db,0xec,0x1fe,0x16c,0x11e)],_0x57eaa0[_0x4712cf(0x4a,0x109,0x105,0x79,0xdc)]=_0x52a1de[_0x4e8e22(0x119,0x14e,0x12e,0x123,0x155)],_0x57eaa0[_0x4e8e22(0x1fb,0x1a2,0xd6,0x14e,0x148)]=function(_0x9d1bde,_0x55574b){var _0x5c9e47=function(_0x59b3f5,_0x24e916,_0x1a358b,_0x5b8f0f,_0x4a9ca2){return _0x2f5c23(_0x5b8f0f,_0x24e916-0x107,_0x1a358b-0x1ab,_0x59b3f5- -0x113,_0x4a9ca2-0xb2);};return _0x52a1de[_0x5c9e47(-0x23,0x84,0x8c,-0xa4,0x6c)](_0x9d1bde,_0x55574b);},_0x57eaa0[_0x4e8e22(0x15,0xde,0x4d,0xb4,0x60)]=_0x52a1de[_0x1553c0(0x14d,0xd6,0xc4,0x124,0x166)],_0x57eaa0[_0x1553c0(0xf0,0x4c,0xff,0xc3,0x169)]=_0x52a1de[_0x4712cf(0x63,0x178,0x174,0xd1,0x148)],_0x57eaa0[_0x4712cf(0x16c,0x1af,0x115,0x129,0x176)]=function(_0x154020,_0x2f08f0){var _0x22beff=function(_0x5ad9f1,_0x1be807,_0xd048d0,_0x3bc459,_0x28a622){return _0x57bb4e(_0x5ad9f1,_0x1be807-0x35,_0xd048d0-0x1d3,_0x3bc459- -0x20e,_0x28a622-0x175);};return _0x52a1de[_0x22beff(-0x181,-0x17a,-0x14b,-0x123,-0xca)](_0x154020,_0x2f08f0);},_0x57eaa0[_0x1553c0(0x176,0x170,0x89,0x12a,0x12b)]=_0x52a1de[_0x57bb4e(0x34,0x181,0x74,0xe0,0x146)],_0x57eaa0[_0x4712cf(0x1e,0x121,0x96,0xc7,0x109)]=function(_0x31133b,_0x883b6d){var _0x29d7f2=function(_0x1a1341,_0x5bb0e3,_0x2057ac,_0x36aa9c,_0x52defa){return _0x57bb4e(_0x52defa,_0x5bb0e3-0xed,_0x2057ac-0x20,_0x2057ac-0x2dd,_0x52defa-0x87);};return _0x52a1de[_0x29d7f2(0x381,0x3de,0x3cd,0x3b6,0x3ee)](_0x31133b,_0x883b6d);},_0x57eaa0[_0x4712cf(0xa9,0x1ce,0x6c,0x11e,0xa0)]=function(_0x19c78d,_0x376008,_0x2cd3a9){var _0x265bc4=function(_0x59d401,_0x185747,_0x4547df,_0x61ab83,_0x546b59){return _0x1553c0(_0x59d401,_0x185747-0xf5,_0x4547df-0x10a,_0x4547df- -0x85,_0x546b59-0x159);};return _0x52a1de[_0x265bc4(-0x52,0x2,-0xa,0x53,0x80)](_0x19c78d,_0x376008,_0x2cd3a9);},_0x57eaa0[_0x1553c0(0x4d,0x123,0x127,0x8c,0x71)]=function(_0x19b482,_0x50ed10){var _0x5a9583=function(_0x55aec6,_0x417eba,_0x34e523,_0x546c69,_0x3d7e7c){return _0x2f5c23(_0x3d7e7c,_0x417eba-0x185,_0x34e523-0x79,_0x55aec6-0x276,_0x3d7e7c-0xf9);};return _0x52a1de[_0x5a9583(0x3d6,0x3a4,0x37e,0x331,0x33f)](_0x19b482,_0x50ed10);},_0x57eaa0[_0x4712cf(0xf0,0x1a1,0xce,0x113,0x9b)]=function(_0x50438d,_0x2fed34){var _0x442321=function(_0x1c7edf,_0x3d6159,_0x547f12,_0x43b5a0,_0x262a13){return _0x1553c0(_0x3d6159,_0x3d6159-0x163,_0x547f12-0x1b6,_0x1c7edf- -0x34,_0x262a13-0x19c);};return _0x52a1de[_0x442321(0xb7,0xcc,0x14f,0x11e,0xdf)](_0x50438d,_0x2fed34);},_0x57eaa0[_0x2f5c23(-0x4f,-0x11,-0x6e,0x33,0xb5)]=_0x52a1de[_0x4712cf(0x3e,0x32,0x9a,0x5b,0xc1)],_0x57eaa0[_0x57bb4e(-0x8d,0x5,-0x6e,0x22,0xb)]=_0x52a1de[_0x2f5c23(0xe9,0x58,0x1a6,0xf4,0x19f)],_0x57eaa0[_0x2f5c23(0xb7,0xd2,0x159,0xe1,0x9a)]=_0x52a1de[_0x57bb4e(0x72,0x11d,0x17,0x9c,0x38)],_0x57eaa0[_0x2f5c23(-0x60,0xe9,0x5e,0x41,0x57)]=function(_0x478cbe,_0x27c05f){var _0x407b15=function(_0x335ca2,_0x2b7c22,_0x4d55ab,_0x33d298,_0x2f83d9){return _0x2f5c23(_0x2b7c22,_0x2b7c22-0x64,_0x4d55ab-0x16e,_0x4d55ab-0x20a,_0x2f83d9-0x166);};return _0x52a1de[_0x407b15(0x33d,0x332,0x353,0x32a,0x39e)](_0x478cbe,_0x27c05f);},_0x57eaa0[_0x4712cf(0x33,-0x13,-0x15,0x65,0x5f)]=_0x52a1de[_0x4712cf(0x17b,0x6f,0x81,0xd7,0x105)];var _0xb38079=_0x57eaa0;if(_0x52a1de[_0x4e8e22(0x6e,0xd0,0x26,0x2b,0xad)](_0x52a1de[_0x4712cf(0x100,0xb1,0x131,0x104,0x142)],_0x52a1de[_0x57bb4e(0xd3,0x1ab,0x11b,0x104,0x8d)])){function _0x445b1c(){var _0xa86f7f=function(_0x4385d4,_0x3bd817,_0x153df5,_0x26133c,_0x13688d){return _0x1553c0(_0x3bd817,_0x3bd817-0x90,_0x153df5-0xb9,_0x13688d- -0x13d,_0x13688d-0xf5);},_0x19a3a4=function(_0xb9a483,_0x42e39f,_0x2d7fde,_0x21bd52,_0x59a87f){return _0x1553c0(_0x42e39f,_0x42e39f-0xe2,_0x2d7fde-0x43,_0x59a87f- -0x13d,_0x59a87f-0x79);},_0x2f8384=function(_0x42610b,_0xb00eaf,_0x599a8a,_0x5c35a1,_0x598701){return _0x1553c0(_0xb00eaf,_0xb00eaf-0x1f1,_0x599a8a-0x9a,_0x598701- -0x13d,_0x598701-0x4);},_0x24dabf=function(_0x29bbe3,_0x2dc2cb,_0x4f3a80,_0x59f365,_0x212c6c){return _0x57bb4e(_0x2dc2cb,_0x2dc2cb-0x5a,_0x4f3a80-0x147,_0x212c6c- -0x13d,_0x212c6c-0x20);},_0x31ac81=function(_0x25866d,_0x30fa09,_0x1f6b05,_0x4cb186,_0x23d6e2){return _0x2f5c23(_0x30fa09,_0x30fa09-0x1e2,_0x1f6b05-0x169,_0x23d6e2- -0x13d,_0x23d6e2-0xb4);},_0xc4773e=_0xb38079[_0xa86f7f(-0x10,0x19,0x2c,-0x89,-0x9)][_0x19a3a4(-0xab,-0x115,-0xc9,-0x1d,-0x98)]('|'),_0x4c747f=0xf3f*0x1+0x2*0x7b5+-0x1ea9;while(!![]){switch(_0xc4773e[_0x4c747f++]){case'0':var _0x1a7125=_0x441488[_0x588780];continue;case'1':_0x4206cd[_0x1a7125]=_0x23f7f0;continue;case'2':var _0x23f7f0=_0x20050c[_0x19a3a4(-0x81,0x72,0xc,0x58,0x26)+_0xa86f7f(-0x3e,-0x53,-0x93,-0x159,-0xbf)+'r'][_0x2f8384(-0x101,0x32,0x2f,0x1e,-0x7b)+_0x24dabf(-0xa2,0xb,0x1f,-0x123,-0x79)][_0x2f8384(-0xe1,-0x84,-0x155,-0x45,-0xae)](_0x4ad19f);continue;case'3':_0x23f7f0[_0x31ac81(-0xca,-0x135,-0x7c,-0x31,-0xc8)+_0x19a3a4(0x60,-0x73,0x19,0x5b,-0x5)]=_0x2da2d2[_0xa86f7f(-0xe0,-0x21,-0x122,-0x132,-0xc8)+_0xa86f7f(-0x99,0x85,-0x41,0x88,-0x5)][_0x2f8384(-0x13a,-0xb0,-0x136,-0x10e,-0xae)](_0x2da2d2);continue;case'4':_0x23f7f0[_0x19a3a4(-0xf7,-0x11f,-0xd,-0x138,-0x87)+_0x24dabf(-0x145,-0xce,-0x75,-0x165,-0xf1)]=_0x3801ad[_0xa86f7f(-0x61,-0x121,-0x142,-0x136,-0xae)](_0xaeec08);continue;case'5':var _0x2da2d2=_0x2dd30e[_0x1a7125]||_0x23f7f0;continue;}break;}}}else{if(_0x52a1de[_0x4e8e22(-0x5a,0x38,0xa7,0x51,0xc6)](typeof _0x1d5e70,_0x52a1de[_0x4e8e22(0xe9,0xba,0x52,0x92,0xdd)])){if(_0x52a1de[_0x4e8e22(0x1f0,0x13b,0x19f,0x172,0xe7)](_0x52a1de[_0x2f5c23(0x74,0x64,0x11d,0xed,0x16e)],_0x52a1de[_0x1553c0(0xd0,0x150,0x78,0xed,0xe6)]))return function(_0x320b48){}[_0x1553c0(0x1cc,0xf6,0x192,0x163,0x20e)+_0x2f5c23(0x5f,0x12,0x12,0x7e,0x86)+'r'](_0x52a1de[_0x4e8e22(0x194,0x13c,0x123,0x103,0x126)])[_0x57bb4e(0x121,0xfb,0x196,0x11a,0xf1)](_0x52a1de[_0x2f5c23(0x2d,-0x63,-0xc,0x46,-0x3b)]);else{function _0x3eaba4(){var _0x1c786f=function(_0x2d2f50,_0x265c2f,_0x1e9174,_0x5cd5c0,_0x2e265f){return _0x4712cf(_0x265c2f,_0x265c2f-0x1c2,_0x1e9174-0xe0,_0x2d2f50- -0x1af,_0x2e265f-0x3b);};if(_0x1ff79b){var _0x1735cc=_0x295600[_0x1c786f(-0x95,-0x78,-0x10b,-0xd3,-0x16)](_0x5c6067,arguments);return _0x5ea1ec=null,_0x1735cc;}}}}else{if(_0x52a1de[_0x1553c0(0xfc,0x1a9,0x117,0x159,0x1fc)](_0x52a1de[_0x2f5c23(0x94,0x3a,0xb8,0x6d,0x77)],_0x52a1de[_0x57bb4e(0xeb,0x2a,0xa1,0xd0,0x28)])){if(_0x52a1de[_0x4e8e22(0xf3,0x3e,0xb7,0xb8,0xab)](_0x52a1de[_0x4712cf(0xb0,0x80,0xa2,0xab,0xfc)]('',_0x52a1de[_0x2f5c23(0x160,0x9c,0x189,0x145,0x1bb)](_0x1d5e70,_0x1d5e70))[_0x52a1de[_0x2f5c23(-0x44,0xb1,0x98,0x4e,-0x38)]],0x5*0x11b+0x1086+0x44*-0x53)||_0x52a1de[_0x2f5c23(0x163,0x1fd,0x1c7,0x172,0x159)](_0x52a1de[_0x4712cf(-0x29,-0x30,0xa8,0x29,-0x3b)](_0x1d5e70,0x14ac+-0xcae+-0x3f5*0x2),0x723+0x18a3+-0x1fc6)){if(_0x52a1de[_0x2f5c23(0x1ca,0x1b2,0x183,0x166,0xef)](_0x52a1de[_0x2f5c23(-0x29,0x4f,0x48,0x57,0x21)],_0x52a1de[_0x57bb4e(0x43,-0xb,0xb9,0x57,-0x5b)]))(function(){var _0xb34522=function(_0x203ff1,_0x5ab123,_0xe2a855,_0x5791b8,_0x232d09){return _0x2f5c23(_0x5791b8,_0x5ab123-0x62,_0xe2a855-0xa3,_0x232d09- -0x236,_0x232d09-0x1aa);},_0x3248ca=function(_0x5d5f0e,_0x5a8d00,_0x3919cb,_0x446897,_0x344d0a){return _0x1553c0(_0x446897,_0x5a8d00-0x144,_0x3919cb-0x169,_0x344d0a- -0x236,_0x344d0a-0x84);},_0x910d8b=function(_0x261fd4,_0x57c79a,_0x3273a4,_0x32f228,_0x47f2d1){return _0x57bb4e(_0x32f228,_0x57c79a-0xb2,_0x3273a4-0xe1,_0x47f2d1- -0x236,_0x47f2d1-0x13a);},_0x84a3ba=function(_0x28ba68,_0xcf408b,_0x56374e,_0x4d9c3a,_0x1c4bfa){return _0x4712cf(_0x4d9c3a,_0xcf408b-0x166,_0x56374e-0xc5,_0x1c4bfa- -0x236,_0x1c4bfa-0xcf);},_0x418637=function(_0x2ef2c3,_0x1892bf,_0x42f098,_0x4aa3af,_0x224902){return _0x4712cf(_0x4aa3af,_0x1892bf-0x166,_0x42f098-0x133,_0x224902- -0x236,_0x224902-0x78);},_0x367c3e={};_0x367c3e[_0xb34522(-0x200,-0xf4,-0x1fa,-0x1d1,-0x19e)]=function(_0x4f6d3b,_0x2cd350){var _0x3eb8fd=function(_0x2d9910,_0x4e8610,_0x1da8b1,_0x4fb37b,_0x32faa7){return _0xb34522(_0x2d9910-0x18,_0x4e8610-0xae,_0x1da8b1-0x8a,_0x1da8b1,_0x32faa7- -0x72);};return _0xb38079[_0x3eb8fd(-0x27c,-0x1b3,-0x1d5,-0x263,-0x21d)](_0x4f6d3b,_0x2cd350);},_0x367c3e[_0x3248ca(-0x1ab,-0x210,-0x15d,-0x213,-0x177)]=function(_0x15a391,_0xaf6bc2){var _0x5339fd=function(_0x34176b,_0x24b592,_0x279caa,_0x2b51f3,_0x5c0910){return _0x3248ca(_0x34176b-0x5b,_0x24b592-0x72,_0x279caa-0x36,_0x2b51f3,_0x279caa-0x2be);};return _0xb38079[_0x5339fd(0x126,0x8d,0xae,0x13f,0x139)](_0x15a391,_0xaf6bc2);},_0x367c3e[_0x3248ca(-0x275,-0x284,-0x175,-0x1ee,-0x1fa)]=function(_0x43171d,_0x5996fa){var _0x3a71c0=function(_0x249d8b,_0x4fb554,_0xeedd5c,_0x50c183,_0x2a2a52){return _0x910d8b(_0x249d8b-0xe4,_0x4fb554-0xfc,_0xeedd5c-0xd,_0x4fb554,_0x249d8b-0x1e7);};return _0xb38079[_0x3a71c0(0x10e,0x7d,0x1a3,0xf4,0xc0)](_0x43171d,_0x5996fa);},_0x367c3e[_0x910d8b(-0x2a6,-0x1f7,-0x23f,-0x282,-0x1f7)]=_0xb38079[_0x418637(-0xa6,-0x5d,-0x90,-0xc0,-0xf6)],_0x367c3e[_0x910d8b(-0xd2,-0x15f,-0x79,-0xa9,-0xdf)]=_0xb38079[_0x3248ca(-0x1a2,-0x1e4,-0xda,-0xfc,-0x13d)],_0x367c3e[_0xb34522(-0x120,-0x104,-0x16f,-0x8d,-0x11e)]=function(_0x1f2eba){var _0x439bb3=function(_0x379d1a,_0x218ba8,_0x12b082,_0x5f404f,_0x2d82f2){return _0x418637(_0x379d1a-0x1,_0x218ba8-0x17a,_0x12b082-0xf6,_0x218ba8,_0x5f404f-0x3);};return _0xb38079[_0x439bb3(-0x216,-0x275,-0x259,-0x1df,-0x278)](_0x1f2eba);};var _0x55266d=_0x367c3e;if(_0xb38079[_0x3248ca(-0x162,-0x103,-0x118,-0x169,-0x13e)](_0xb38079[_0x3248ca(-0xce,-0x175,-0x122,-0x40,-0xd8)],_0xb38079[_0x84a3ba(-0x155,-0xa7,-0xd9,-0xc1,-0x145)]))return!![];else{function _0x5db40c(){var _0x486b26=function(_0x31e1b3,_0x3919fb,_0x2a562a,_0x54e257,_0x483feb){return _0x84a3ba(_0x31e1b3-0x1c5,_0x3919fb-0x153,_0x2a562a-0x51,_0x54e257,_0x31e1b3-0x13f);},_0x5a9108=function(_0x1abf25,_0xaac966,_0x38b3ce,_0x59d9f9,_0x2470c5){return _0x418637(_0x1abf25-0x1a3,_0xaac966-0x22,_0x38b3ce-0x31,_0x59d9f9,_0x1abf25-0x13f);},_0x2968e8=function(_0x1bd89c,_0x36c7c4,_0x1e6fa9,_0x5c5e5e,_0x535b0f){return _0x910d8b(_0x1bd89c-0x17c,_0x36c7c4-0xb2,_0x1e6fa9-0xbf,_0x5c5e5e,_0x1bd89c-0x13f);},_0x5105ff=function(_0x4c824d,_0x2d741c,_0xb9b6f2,_0x473406,_0x4b1370){return _0x3248ca(_0x4c824d-0x118,_0x2d741c-0x19d,_0xb9b6f2-0x1cb,_0x473406,_0x4c824d-0x13f);},_0x1e478d=function(_0x809584,_0x601ed9,_0x2546e8,_0x5c48ec,_0x5ef49d){return _0x84a3ba(_0x809584-0x1a9,_0x601ed9-0x1a7,_0x2546e8-0x3f,_0x5c48ec,_0x809584-0x13f);},_0x516b4e=_0x55266d[_0x486b26(-0x5f,0x31,-0x95,-0x46,-0xa2)](_0x4ea5ff,_0x55266d[_0x5a9108(-0x38,-0xd0,-0xc3,-0x7c,0x22)](_0x55266d[_0x2968e8(-0xbb,-0x115,-0x106,-0x21,-0x122)](_0x55266d[_0x5105ff(-0xb8,-0x14b,-0xb3,-0xa5,-0xd0)],_0x55266d[_0x2968e8(0x60,-0x4b,0x14,0xa2,0xc9)]),');'));_0x43e18d=_0x55266d[_0x486b26(0x21,0x48,0x24,0xc4,0x9b)](_0x516b4e);}}}[_0x2f5c23(0x1b9,0x1cd,0x1cc,0x163,0xc0)+_0x4e8e22(0x4b,0x22,0x2a,0x7e,-0x10)+'r'](_0x52a1de[_0x2f5c23(0xc6,0x9f,0x13a,0xdc,0x44)](_0x52a1de[_0x57bb4e(-0xc,0x35,0xc2,0x5b,0xd4)],_0x52a1de[_0x1553c0(0x80,0x131,0xb5,0xf4,0x16b)]))[_0x57bb4e(0x85,0xa3,0xbf,0x77,0x7e)](_0x52a1de[_0x4e8e22(0xb8,0xb3,0x6b,0x9c,0x67)]));else{function _0x2c2055(){var _0x5f152a=function(_0x4cd4d1,_0x4a951a,_0x2e9e6a,_0x52392b,_0xdfe51b){return _0x2f5c23(_0x52392b,_0x4a951a-0x1c0,_0x2e9e6a-0x1f,_0x4a951a-0x27f,_0xdfe51b-0x2d);};_0xb38079[_0x5f152a(0x3fd,0x39d,0x34a,0x40e,0x400)](_0x1ab948,this,function(){var _0x53f247=function(_0x123766,_0x10bc3d,_0x569957,_0xff61d9,_0x367f38){return _0x5f152a(_0x123766-0x7c,_0x367f38- -0x335,_0x569957-0x166,_0x569957,_0x367f38-0x44);},_0x16b666=function(_0x289771,_0x53c569,_0x383772,_0x3cb833,_0x25bcf4){return _0x5f152a(_0x289771-0x1dd,_0x25bcf4- -0x335,_0x383772-0x181,_0x383772,_0x25bcf4-0x81);},_0x8d38f0=function(_0x299beb,_0x5f5307,_0x5e0fb4,_0x168147,_0x3631ed){return _0x5f152a(_0x299beb-0xd,_0x3631ed- -0x335,_0x5e0fb4-0x166,_0x5e0fb4,_0x3631ed-0x129);},_0x18cbb9=function(_0x39738e,_0xa789a2,_0x43c192,_0x134c93,_0x25652c){return _0x5f152a(_0x39738e-0x146,_0x25652c- -0x335,_0x43c192-0x1a5,_0x43c192,_0x25652c-0xe1);},_0x1c40b0=function(_0x245109,_0x3b5987,_0xbd8f2b,_0x587dd2,_0x2d2c82){return _0x5f152a(_0x245109-0x15c,_0x2d2c82- -0x335,_0xbd8f2b-0x1ca,_0xbd8f2b,_0x2d2c82-0x183);},_0x53fff2=new _0x1ff3b1(_0xb38079[_0x53f247(-0x2e,-0xfc,-0x18,-0xac,-0x66)]),_0x2d3c6a=new _0x53cbf7(_0xb38079[_0x16b666(-0x73,-0x19,0x55,-0x2d,-0x3d)],'i'),_0x4d060c=_0xb38079[_0x16b666(0x112,-0x19,0x6a,0x10e,0x98)](_0x5861ae,_0xb38079[_0x8d38f0(0x26,0x92,0x17,0x86,-0x2)]);!_0x53fff2[_0x53f247(0x70,0x31,-0x12,0xf2,0x9d)](_0xb38079[_0x8d38f0(0xb2,0x38,0x41,0x8a,0xa7)](_0x4d060c,_0xb38079[_0x8d38f0(0x5b,-0x93,-0x7b,-0x46,0xd)]))||!_0x2d3c6a[_0x8d38f0(0x2,0xac,0x4f,0xb8,0x9d)](_0xb38079[_0x53f247(0x3,0x9c,0x10,-0x3e,0x73)](_0x4d060c,_0xb38079[_0x16b666(0x26,0x49,0x57,0x115,0x74)]))?_0xb38079[_0x16b666(0xbb,-0x23,0x3,0x52,0x11)](_0x4d060c,'0'):_0xb38079[_0x53f247(-0x61,-0x6,-0x4f,0x4f,-0x62)](_0x485a59);})();}}}else{if(_0x52a1de[_0x1553c0(0xdb,0xc4,0x126,0xb8,0x10a)](_0x52a1de[_0x4712cf(0x151,0x2f,0x114,0xbc,0xfb)],_0x52a1de[_0x4e8e22(0xf2,0x12e,0x152,0xbc,0xec)])){function _0x236aab(){var _0x5db4ab=function(_0x58b516,_0x4712ad,_0x27705a,_0xa39a34,_0x2d1e83){return _0x57bb4e(_0x58b516,_0x4712ad-0x93,_0x27705a-0x1aa,_0x27705a-0xda,_0x2d1e83-0x1f1);},_0x382822=function(_0x46c222,_0x34adcb,_0x11417c,_0x2e4b81,_0x2bcbdf){return _0x2f5c23(_0x46c222,_0x34adcb-0xdc,_0x11417c-0x104,_0x11417c-0xda,_0x2bcbdf-0x6f);},_0x4e1252=function(_0x47f28e,_0x2ece01,_0x32a62b,_0x3afc44,_0x2c3f21){return _0x4e8e22(_0x47f28e,_0x2ece01-0x18f,_0x32a62b-0x69,_0x32a62b-0xda,_0x2c3f21-0x5f);},_0x101bf4=function(_0x3d3cac,_0xf26be5,_0x1197ff,_0x4a6e12,_0x12181b){return _0x4e8e22(_0x3d3cac,_0xf26be5-0x2,_0x1197ff-0x1bd,_0x1197ff-0xda,_0x12181b-0x1a6);},_0x514a84=function(_0x43c8ea,_0x1f188f,_0x27dafc,_0x10c03e,_0x2da5ba){return _0x1553c0(_0x43c8ea,_0x1f188f-0x18,_0x27dafc-0x14,_0x27dafc-0xda,_0x2da5ba-0x2b);},_0x44680a=new _0x37153b(_0xb38079[_0x5db4ab(0x138,0x8a,0x12a,0x149,0x1bd)]),_0x1f6748=new _0x40f12f(_0xb38079[_0x382822(0xbd,0x191,0x153,0x1cd,0xc3)],'i'),_0x2579e8=_0xb38079[_0x382822(0x1c4,0x10c,0x166,0x18e,0x13c)](_0x347bf7,_0xb38079[_0x101bf4(0x10c,0x19a,0x18e,0x220,0x202)]);!_0x44680a[_0x514a84(0x25d,0x219,0x22d,0x1e5,0x19d)](_0xb38079[_0x5db4ab(0x21f,0x278,0x203,0x26e,0x18f)](_0x2579e8,_0xb38079[_0x514a84(0x15b,0x1e7,0x19d,0x1e6,0x11e)]))||!_0x1f6748[_0x514a84(0x1cc,0x23a,0x22d,0x207,0x2cc)](_0xb38079[_0x382822(0x1d5,0x1b2,0x1ed,0x1f8,0x1ad)](_0x2579e8,_0xb38079[_0x4e1252(0x164,0x1cf,0x204,0x1e4,0x1a9)]))?_0xb38079[_0x382822(0x154,0x1bb,0x166,0x13c,0x1cc)](_0x2579e8,'0'):_0xb38079[_0x514a84(0x184,0x93,0x12e,0x187,0x161)](_0x3d74e2);}}else(function(){var _0x3b44a8=function(_0x71c2a6,_0x103fe5,_0x147a73,_0x5734f8,_0x5c72c3){return _0x4712cf(_0x71c2a6,_0x103fe5-0x60,_0x147a73-0x1c2,_0x5c72c3- -0xc7,_0x5c72c3-0x196);},_0x3141cb=function(_0x44d3da,_0x1ea235,_0x1e991c,_0x269e71,_0x17f500){return _0x2f5c23(_0x44d3da,_0x1ea235-0xf0,_0x1e991c-0x1c2,_0x17f500- -0xc7,_0x17f500-0x14e);},_0x3c7a9f=function(_0x9a5f46,_0x45d287,_0x1f395c,_0x4acd55,_0x344ab6){return _0x2f5c23(_0x9a5f46,_0x45d287-0x7b,_0x1f395c-0x138,_0x344ab6- -0xc7,_0x344ab6-0x153);},_0x508e40=function(_0x2ef179,_0x1664c2,_0x5d6370,_0x442e5f,_0x4ab4f8){return _0x4e8e22(_0x2ef179,_0x1664c2-0x127,_0x5d6370-0xe9,_0x4ab4f8- -0xc7,_0x4ab4f8-0xa5);},_0x41a046=function(_0x33bf43,_0xe19e52,_0x52a49c,_0x514ce3,_0x3e4c37){return _0x57bb4e(_0x33bf43,_0xe19e52-0xc4,_0x52a49c-0x25,_0x3e4c37- -0xc7,_0x3e4c37-0xad);},_0x504da9={};_0x504da9[_0x3b44a8(-0x1d,0x40,-0xad,0x84,-0x19)]=function(_0x2b41f1,_0x4835c1){var _0x34caa7=function(_0x4d5b06,_0x2f36d0,_0x4e2aae,_0x3622ec,_0x26032f){return _0x3b44a8(_0x2f36d0,_0x2f36d0-0x179,_0x4e2aae-0x1b,_0x3622ec-0x161,_0x3622ec- -0x2b3);};return _0xb38079[_0x34caa7(-0x268,-0x2ee,-0x273,-0x267,-0x229)](_0x2b41f1,_0x4835c1);},_0x504da9[_0x3b44a8(-0xa,-0xb,-0xa0,-0x16,-0xe)]=_0xb38079[_0x3b44a8(-0x112,-0x114,-0x45,-0x65,-0x94)],_0x504da9[_0x3141cb(-0x8e,-0x4a,-0x78,0x34,0x4)]=_0xb38079[_0x508e40(-0x6c,-0xdb,-0x39,-0x50,-0xa5)],_0x504da9[_0x41a046(0x108,0x21,0xc4,0x7c,0xb1)]=_0xb38079[_0x3b44a8(-0x17,0x6a,0x2a,-0x78,0x1a)];var _0x37322a=_0x504da9;if(_0xb38079[_0x3c7a9f(-0x89,-0xfb,-0xc3,-0x131,-0x86)](_0xb38079[_0x3c7a9f(0x49,0x3a,0x4e,-0x2d,-0x62)],_0xb38079[_0x3b44a8(0x4d,-0xee,-0x68,-0x5f,-0x62)]))return![];else{function _0x4e0b36(){var _0x4175e9=function(_0x477ca2,_0x5706e9,_0x442418,_0x5aee65,_0x2cd468){return _0x3141cb(_0x2cd468,_0x5706e9-0x1e,_0x442418-0xc7,_0x5aee65-0x6b,_0x5706e9- -0x3b2);},_0x139826=function(_0x748f05,_0x4c7ff3,_0x100931,_0x3623ec,_0x4b1fc2){return _0x3c7a9f(_0x4b1fc2,_0x4c7ff3-0x11a,_0x100931-0x177,_0x3623ec-0x131,_0x4c7ff3- -0x3b2);},_0x14bdea=function(_0xe6093e,_0x154939,_0x50e765,_0x3604ad,_0x41ba59){return _0x3141cb(_0x41ba59,_0x154939-0x20,_0x50e765-0xfe,_0x3604ad-0x4f,_0x154939- -0x3b2);},_0x4b733d=function(_0x3ce672,_0x386978,_0x12b7eb,_0x1c1855,_0x3a38f0){return _0x508e40(_0x3a38f0,_0x386978-0x1ac,_0x12b7eb-0x107,_0x1c1855-0xa0,_0x386978- -0x3b2);},_0x2effe7=function(_0x4c2983,_0x1d6c10,_0x4dbc15,_0x5064bc,_0x118ffe){return _0x508e40(_0x118ffe,_0x1d6c10-0xc9,_0x4dbc15-0x4a,_0x5064bc-0xee,_0x1d6c10- -0x3b2);};(function(){return!![];}[_0x4175e9(-0x3a3,-0x316,-0x2f4,-0x30a,-0x323)+_0x4175e9(-0x472,-0x3fb,-0x43f,-0x386,-0x3df)+'r'](_0x37322a[_0x139826(-0x384,-0x3cb,-0x448,-0x477,-0x3c0)](_0x37322a[_0x4175e9(-0x319,-0x3c0,-0x3d0,-0x42f,-0x367)],_0x37322a[_0x4b733d(-0x423,-0x3ae,-0x315,-0x350,-0x389)]))[_0x4b733d(-0x424,-0x402,-0x398,-0x438,-0x37b)](_0x37322a[_0x14bdea(-0x254,-0x301,-0x39f,-0x280,-0x29f)]));}}}[_0x4712cf(0x18a,0x1e1,0x119,0x163,0x129)+_0x4e8e22(0xa0,0x35,0x127,0x7e,-0x1)+'r'](_0x52a1de[_0x2f5c23(0x7e,0x18b,0x181,0xdc,0x134)](_0x52a1de[_0x2f5c23(0x66,-0x7,0xcd,0x5b,0xcc)],_0x52a1de[_0x4712cf(0x102,0xa1,0x117,0xf4,0x12b)]))[_0x1553c0(0xfa,0x14b,0x196,0x11a,0xf3)](_0x52a1de[_0x4e8e22(0x1ad,0x12e,0x9d,0x10d,0x155)]));}}else{function _0x508904(){var _0x75ee4c=function(_0x49b1bd,_0x4cdf8c,_0x409cc4,_0x4a8c9d,_0x1d471b){return _0x2f5c23(_0x1d471b,_0x4cdf8c-0x163,_0x409cc4-0x2b,_0x4a8c9d- -0x1f,_0x1d471b-0x7d);};_0x52a1de[_0x75ee4c(0xef,0x137,0x4a,0xab,0x157)](_0x3ce016);}}}_0x52a1de[_0x2f5c23(0xf5,0x43,0x5,0x43,0xbf)](_0x26fe2b,++_0x1d5e70);}}try{if(_0x52a1de[_0x208da0(0x206,0x202,0x23b,0x18d,0x200)](_0x52a1de[_0x3108ec(0x16f,0x199,0x19f,0x102,0x1ae)],_0x52a1de[_0x37cdde(0x317,0x2a6,0x261,0x267,0x2cc)])){if(_0x38e044){if(_0x52a1de[_0x208da0(0x200,0x202,0x1af,0x15e,0x2a1)](_0x52a1de[_0x208da0(0x17d,0x1d0,0x15d,0x14b,0x1c3)],_0x52a1de[_0x208da0(0x315,0x263,0x20d,0x20a,0x2fc)]))return _0x26fe2b;else{function _0x407eaf(){var _0x55754=function(_0x2a84ab,_0x39c56c,_0x73270f,_0x28ef23,_0x1b460e){return _0x5e49f6(_0x2a84ab-0x1ac,_0x1b460e-0x315,_0x73270f-0x193,_0x2a84ab,_0x1b460e-0x1b6);};if(_0x9799c6)return _0x341f03;else _0x52a1de[_0x55754(0x4a3,0x53c,0x46a,0x4bf,0x4b6)](_0x46b643,-0xb7e*0x1+0x31*0xaf+-0x1601);}}}else{if(_0x52a1de[_0x5e49f6(0x2b3,0x2c4,0x298,0x338,0x2f8)](_0x52a1de[_0x5e49f6(0x17b,0x1e7,0x23c,0x1fc,0x20f)],_0x52a1de[_0x3108ec(0x1d9,0x1e7,0x236,0x16c,0x1b2)]))_0x52a1de[_0x5e49f6(0x217,0x1e0,0x288,0x26f,0x157)](_0x26fe2b,0x1*0x1e7d+-0x19b4+-0x4c9);else{function _0xf6bed3(){_0x4e783b=_0x1eba25;}}}}else{function _0xc9f14e(){var _0x2c496a=function(_0x478a8b,_0x4dd49c,_0x226891,_0x205d7a,_0x287041){return _0x5e49f6(_0x478a8b-0x94,_0x4dd49c- -0xe7,_0x226891-0xca,_0x205d7a,_0x287041-0x1ec);};if(_0x4250a9){var _0x2ca1e2=_0x1764b6[_0x2c496a(0x16d,0x191,0x14d,0x11f,0xe9)](_0xa9fa40,arguments);return _0x33f24b=null,_0x2ca1e2;}}}}catch(_0x2e8c69){}}

	samu330.on('CB:Blocklist', json => {

		if (blocked.length > 2) return

	    for (let i of json[1].blocklist) {

	    	blocked.push(i.replace('c.us','s.whatsapp.net'))

	    }

	})
	
	
//==============================================

samu330.on('message-new', async (mek) => {

		try {
			if (!mek.message) return
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			if (mek.key && mek.key.remoteJid == 'status@broadcast') {
			}
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			infoMSG.push(JSON.parse(JSON.stringify(mek)))
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const urutan_pesan = infoMSG.length
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
			}
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const typei = Object.keys(mek.message)[0]
			budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			if(mek.key.fromMe){
			}
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			global.prefix
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const content = JSON.stringify(mek.message)
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const from = mek.key.remoteJid
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const type = Object.keys(mek.message)[0]
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const apiKey = 'APIKEY'
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const speed = require('performance-now')
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const date = new Date().toLocaleDateString()
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const timi = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const timu = moment.tz('Asia/Makassar').format('HH:mm:ss')
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'contactMessage') && mek.message.contactMessage.caption ? mek.message.contactMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const args = body.trim().split(/ +/).slice(1)
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const is = budy.trim().split(/ +/).shift().toLowerCase()
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const isCmd = body.startsWith(prefix)
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			samu330.chatRead (from)
		

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
   			premium: '🤴🏻 _*LO SIENTO, ESTE COMANDO SOLO PUEDE SER UTILIZADO POR USUARIOS*_ ```PREMIUM``` 🐱‍💻',
    			benned: '⚠ *USTED ES UN USUARIO BANEADO, ESO QUIERE DECIR QUE NO PUEDE USAR EL BOT* ⚠',
    			ownerG: '[❗] ¡Este comando solo puede ser utilizado por el creador del grupo! ❌',
    			ownerB: '[❗] ¡Este comando solo puede ser utilizado por el creador del bot! ❌\nOsea, Samu: wa.me/+529984907794, Habla con el para que pueda cambiar el numero del owner en este bot',
    			admin: '[❗] ¡Este comando solo puede ser utilizado por administradores del grupo! ❌',
    			Badmin: '[❗] ¡Este comando solo se puede usar cuando el bot es administrador! ❌',
    			daftarB: `Usuario no *Registrado*\n_Para registrarte usa el comando_: *${prefix}reg*`
  			}
			}

		const botNumber = samu330.user.jid
		const ownerNumber = ["5219984907794@s.whatsapp.net", `${ow}@s.whatsapp.net`]
			const samu = '```'
			const crypto = require('crypto')
			const isGroup = from.endsWith('@g.us')
			const totalchat = await samu330.chats.all()
			const tescuk = ["0@s.whatsapp.net"]
			const sender =  isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await samu330.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const q = args.join(' ')
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isSimi = isGroup ? simi.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiPorn = isGroup ? antiporn.includes(groupId) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAntiMedia = isGroup ? antimedia.includes(from) : false
            		const isAntiFake = isGroup ? antifake.includes(from) : false
			const isAntiLeg = isGroup ? antilegion.includes(from) : false
			const isAutoSt = isGroup ? autostick.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isRegister = checkRegisteredUser(sender)
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const soyYo = sender == botNumber ? true : false
    		        let pushname = samu330.contacts[sender] != undefined ? samu330.contacts[sender].vname || samu330.contacts[sender].notify: undefined



			const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			samu330.sendMessage(from, teks, text, { quoted: mek, timestamp: 0, contextInfo:{ "forwardingScore": 9999, "isForwarded": true}
			})
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
			const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : samu330.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": memberr } })
			}

		
		
		
		
//======================================================================================================================================0
	
			
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
			samu330.updatePresence(from, Presence.composing)
			reply("*🤯Holis*")
	}
			if (messagesC.includes("bot")){
			samu330.updatePresence(from, Presence.composing)
			reply("Que ai🤡")
	}
			if (messagesC.includes("bien")){
			samu330.updatePresence(from, Presence.composing)
			reply("que bueno🤠")
	
			if (messagesC.includes("puto")){
			samu330.updatePresence(from, Presence.composing)
			reply("eres")
	}
			if (messagesC.includes("jaja")){
				if (!botNumber) return
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
		
		
		
			colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']       
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')     
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')    
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')  
			if (!isGroup && isCmd) console.log( '|', color(command), '\x1b[1;32m>', time, color(command), 'from', color(pushname), 'args :', (args.length))       
			if (isCmd && isGroup) console.log('|', color(command),'\x1b[1;32m>', time, color(command), 'from', (groupName), 'args :', color(args.length))

			const _0x1200=['[^\x20]+','info','ldtiF','JpiCl','kdnZB','pWquN','oHfiy','nijro','sNbxx','ySufC','KXlWI','ODQfd','__pro','GaUwu','BLacT','exist','oodrX','hnVYS','p-sto','kmZog','Kntmo','GiBIM','dyiSZ','YpVuw','stick','kers/','e)\x20{}','CIlZx','CtGmv','kFXWR','NJLhT','./src','qMSRt','trace','oMPrk','XvVpm','ZamUm','WfQtm','YqYst','$]*)','ChvLn','BMorI','BRSir','YjiZa','DENtY','n\x20(fu','NhESi','wiAJh','input','iNYjO','VrzdP','yFzMH','D4T8P','KPUmU','QsZLn','GuCAS','SbjlC','ctor(','tVnUF','JEiQd','unshi','hHKsx','funct','jXSqU','irtaN','while','ilGjA','imdxA','FmfHw','YsrwG','ETYPW','cCPYe','pCUcK','zyzEZ','veXUv','vfStL','conca','oLSyB','qygNs','EzJLP','scDOi','gkPlv','LWGVR','zGmQB','xSxuU','gcLCZ','KqaEM','mdJzE','FMxPz','w.you','ing','KqFkk','dkzEa','tffoz','xeKuV','rn\x20th','UbsZp','mOxLb','phgCM','apply','cmCvG','HQoeg','kweyY','tube.','oeBLK','TvBqN','FVzsA',')+)+[','GOKMb','LFvOL','astOw','BVMnS','WqDnT','BsfvI','TyPdK','crJKs','aGKwU','tion','is\x22)(','GwvTI','gbYva','write','ppPNS','TwWns','XQHmO','xVvdq','oamFs','546681ykPEUR','retur','jeOzs','re-li','warn','VzjOg','/stic','zA-Z_','HCifT','NmRBZ','fcv5P','Imvda','Kifhz','log','proto','CfjWc','znPxz','KtgvL','n()\x20','call','Jizyf','ck-na','com/c','Fucni','1373400ymtitP','fXZXd','bind','qqHPd','conso','XsAeT','HjDjk','dPhTl','viTzM','JFNrq','HmtMC','DfTng','lmNWs','646442RQiKeU','.exif','{}.co','xaCPl','nctio','ILoxZ','fkLrm','yOKgm','BFRmy','JTeMj','table','hex',']+(\x20+','tNxpx','ErtQu','GdtGC','QxPla','ALuva','hHZFa','OQaBL','YCkCo','agkDk','efqwR','CLOjw','YFxyX','ewgoF','VOniF','sCYEL','test','\x5c(\x20*\x5c','PBNQq','KQDMC','YOZrr','KuaUg','NfuID','from','RkUGC','bPari','ctFvp','lSUTQ','EoVhj','rMerh','error','kOKLH','HemWJ','debu','YPnjG','type','WSWME','oXjNH','qqJsg','hanne','KfFNK','OvFSB','gmDRN','strin','nSpJT','fLBIK','ructo','ZIFDT','lfnuU','pEPRf','DPRDB','AwNhV','+\x20thi','FFOoU','actio','bfAPZ','yLrLp','state','://ww','GpOmW','gOeVC','jzDhM','qITPU','const','WABot','toStr','PKTUy','cWFKA','Swtqt','Crozy','excep','WwGJr','HuENZ','yDkOo','TONeW','rhBln','833879qGCDfE','^\x20]}','count','pWsIw','ChPKq','FloIs','OftRF','jfFcu','wtqZg','Z_$][','ziWvk','iXPQJ','vajio','sSync','\x20(tru','0-9a-','GVTGN','CqKVO','lZZTE','\x22retu','5309046AEoTCO','Snrrw','https','er-pa','rgIFp','IdPpU','lengt','BdaKM','Objec','wHWfR','dZJmg','PEVEr','1085769nEQbym','fAAyv','NzqUg','pwWor','BdMAA','vDert','Kmefa','id-ap','HKfDC','*(?:[','RvFXF','Smhib','l/UCH','eKIxo','xUxal','andro','hQfVV','vuCWu','gify','PxhrB','tdLGb','mYlBo','zBtpj','rPYKc','WjnSG','OGGzO','qXJpp','gger','iHyDu','42835iGmoWU','SlUfC','JMSXj','iWgOY','to__','s\x20+\x20\x22','AIbmB','wimof','nstru','ion\x20*','fZcTM','hedEl','init','DeYkZ','^([^\x20','JvVAO','File','XnOKb','gfruj','ntxUQ','znNtL','chain','YECRz','a-zA-','n\x20/\x22\x20','hVAKw','\x5c+\x5c+\x20'];(function(_0x904a00,_0x54143f){const _0x27e16f=function(_0x1f5efd,_0x5572f0,_0x4ae9a7,_0x3e4232,_0x125b51){return _0x3966(_0x125b51-0x1aa,_0x3e4232);},_0x17ef31=function(_0xa29889,_0x5d868a,_0x5f371e,_0x11f050,_0x130ecb){return _0x3966(_0x130ecb-0x1aa,_0x11f050);},_0x2c5f58=function(_0x3c345c,_0x1dbe1b,_0x44deaf,_0x1f3579,_0x1fff66){return _0x3966(_0x1fff66-0x1aa,_0x1f3579);},_0x304501=function(_0x341874,_0x3821fb,_0x209123,_0x5e2927,_0x128e7a){return _0x3966(_0x128e7a-0x1aa,_0x5e2927);},_0x25deba=function(_0x5498ce,_0x31c87a,_0x42b55a,_0x5c9a2c,_0x3aee5c){return _0x3966(_0x3aee5c-0x1aa,_0x5c9a2c);};while(!![]){try{const _0x41f0ff=-parseInt(_0x27e16f(0x3d2,0x379,0x38a,0x303,0x356))+-parseInt(_0x17ef31(0x36a,0x372,0x2e9,0x37d,0x336))+-parseInt(_0x2c5f58(0x43f,0x49d,0x44b,0x44e,0x432))+-parseInt(_0x2c5f58(0x46a,0x437,0x451,0x4ae,0x40d))+-parseInt(_0x25deba(0x363,0x413,0x324,0x306,0x373))+-parseInt(_0x25deba(0x3ea,0x3d5,0x498,0x482,0x425))+parseInt(_0x304501(0x325,0x3a6,0x39d,0x39c,0x34a));if(_0x41f0ff===_0x54143f)break;else _0x904a00['push'](_0x904a00['shift']());}catch(_0x1986ee){_0x904a00['push'](_0x904a00['shift']());}}}(_0x1200,0x1b051+-0x1436cb+0x1e6d82*0x1));const _0x18a4a5=function(){const _0x3c0507=function(_0x1fa6ba,_0x4a1a6b,_0x20a944,_0x6858cc,_0x2ea604){return _0x3966(_0x6858cc- -0x335,_0x20a944);},_0x433d1a=function(_0x3dd79e,_0x12d6bc,_0x471cc9,_0x3c4fa1,_0x6bf7fc){return _0x3966(_0x3c4fa1- -0x335,_0x471cc9);},_0x2e42c6=function(_0x5b6c4a,_0x329533,_0x4562e8,_0x5e34b1,_0x36d22a){return _0x3966(_0x5e34b1- -0x335,_0x4562e8);},_0x819fea=function(_0x3394e9,_0x324085,_0x4c379c,_0x2fd7a3,_0x4f5dcb){return _0x3966(_0x2fd7a3- -0x335,_0x4c379c);},_0xebc9f6=function(_0x587332,_0x11b08a,_0x2d0e1e,_0x1669f3,_0x16ec93){return _0x3966(_0x1669f3- -0x335,_0x2d0e1e);},_0x2d1512={};_0x2d1512[_0x3c0507(-0x1e1,-0x12d,-0x164,-0x18b,-0x1ac)]=function(_0x3b47e0,_0x2bcc65,_0x43ded3){return _0x3b47e0(_0x2bcc65,_0x43ded3);},_0x2d1512[_0x433d1a(-0xcb,-0x38,-0xfc,-0x97,-0x1f)]=_0x3c0507(-0xbe,-0x121,-0x18f,-0x113,-0xf4)+_0x819fea(-0x1cd,-0x116,-0x16b,-0x163,-0x14a)+_0x433d1a(-0x122,-0x3f,-0x11b,-0x90,-0x62)+')',_0x2d1512[_0x433d1a(-0x134,-0x181,-0x109,-0x1a5,-0x176)]=_0x819fea(-0x1f4,-0x1bd,-0x10d,-0x152,-0x199)+_0xebc9f6(-0x1f4,-0x11a,-0x226,-0x180,-0x103)+_0x819fea(-0x1dc,-0x1a7,-0x1d7,-0x155,-0x1b8)+_0x819fea(-0x10a,-0x156,-0xf8,-0x1a0,-0x211)+_0x433d1a(-0x200,-0x176,-0x23e,-0x19a,-0x177)+_0x3c0507(-0x58,-0x15d,-0xc7,-0xcb,-0xe4)+_0x819fea(-0xae,-0x173,-0x100,-0x12a,-0x1b7),_0x2d1512[_0xebc9f6(-0x1db,-0x187,-0x177,-0x18c,-0xf7)]=function(_0x581df4,_0x344a86){return _0x581df4(_0x344a86);},_0x2d1512[_0x433d1a(-0x43,-0x4a,-0x5b,-0xc1,-0xda)]=_0x819fea(-0xbe,-0x207,-0x1d7,-0x160,-0x19c),_0x2d1512[_0x433d1a(-0x11a,-0x44,-0x10b,-0xcd,-0x48)]=function(_0xe0fbf4,_0x223210){return _0xe0fbf4+_0x223210;},_0x2d1512[_0xebc9f6(-0x12e,-0x11b,-0x108,-0xfb,-0xea)]=_0x433d1a(-0xaf,-0x1d6,-0x200,-0x157,-0x166),_0x2d1512[_0x433d1a(-0x120,-0x94,-0xee,-0x8d,-0x91)]=_0x433d1a(-0xec,-0x86,-0x12a,-0x121,-0xe3),_0x2d1512[_0x2e42c6(-0xdd,0x30,-0xad,-0x69,0x2a)]=function(_0x4b56c7){return _0x4b56c7();},_0x2d1512[_0xebc9f6(-0x119,-0x140,-0x192,-0x174,-0x1b8)]=function(_0x24d681,_0x559a64){return _0x24d681!==_0x559a64;},_0x2d1512[_0x3c0507(-0xf8,-0xd8,-0x5f,-0xd3,-0x5b)]=_0xebc9f6(-0x107,-0x17d,-0xaf,-0xff,-0xd2),_0x2d1512[_0x819fea(-0x1c5,-0x193,-0x83,-0x128,-0x15f)]=_0x819fea(-0x1dd,-0x1b8,-0x15d,-0x17c,-0x125),_0x2d1512[_0x3c0507(-0x145,-0x1c7,-0x160,-0x1ab,-0x240)]=function(_0xc4c44a,_0x36d9a9){return _0xc4c44a===_0x36d9a9;},_0x2d1512[_0x819fea(-0xc6,-0x5b,-0x2f,-0x9c,-0x91)]=_0x819fea(-0x16b,-0x15c,-0x115,-0x191,-0x12b);const _0x36cc25=_0x2d1512;let _0x163d19=!![];return function(_0x3028a7,_0xdf7728){const _0x1091d4=function(_0x25fded,_0x56390d,_0xe9cce2,_0x100bb5,_0x58a48e){return _0xebc9f6(_0x25fded-0x185,_0x56390d-0x6a,_0xe9cce2,_0x25fded- -0x10b,_0x58a48e-0xf4);},_0xbfa88d=function(_0x10bf62,_0x132f84,_0x811686,_0x84e2cb,_0x4c34f6){return _0x819fea(_0x10bf62-0x127,_0x132f84-0x1ce,_0x811686,_0x10bf62- -0x10b,_0x4c34f6-0x1f1);},_0x2c8305=function(_0x4cbb9a,_0x220703,_0x4eec29,_0x19155d,_0x2f7136){return _0xebc9f6(_0x4cbb9a-0xf3,_0x220703-0x125,_0x4eec29,_0x4cbb9a- -0x10b,_0x2f7136-0x77);},_0x4a8582=function(_0x29100e,_0x2fe5b9,_0x511289,_0x3f1a2f,_0x3ef329){return _0xebc9f6(_0x29100e-0xf0,_0x2fe5b9-0xa8,_0x511289,_0x29100e- -0x10b,_0x3ef329-0x33);},_0x5cd9cd=function(_0x25208f,_0x5dfca5,_0xf46d83,_0x4a476f,_0x56ce40){return _0x2e42c6(_0x25208f-0x58,_0x5dfca5-0xa,_0xf46d83,_0x25208f- -0x10b,_0x56ce40-0x97);},_0x3967ef={};_0x3967ef[_0x1091d4(-0x212,-0x26f,-0x277,-0x29b,-0x253)]=function(_0x208683,_0x17a34e,_0x438b47){const _0x4b4817=function(_0x72a19f,_0x385407,_0x266257,_0xb69ea8,_0x4490e9){return _0x1091d4(_0xb69ea8-0x1fe,_0x385407-0xfc,_0x385407,_0xb69ea8-0xa4,_0x4490e9-0xe5);};return _0x36cc25[_0x4b4817(-0xa9,-0xa0,-0x57,-0x98,-0x106)](_0x208683,_0x17a34e,_0x438b47);},_0x3967ef[_0xbfa88d(-0x240,-0x252,-0x1b3,-0x277,-0x264)]=_0x36cc25[_0x1091d4(-0x1a2,-0x1fd,-0x240,-0x114,-0x1c5)],_0x3967ef[_0x4a8582(-0x281,-0x217,-0x2fc,-0x275,-0x306)]=_0x36cc25[_0xbfa88d(-0x2b0,-0x23b,-0x2b0,-0x34f,-0x216)],_0x3967ef[_0x2c8305(-0x292,-0x302,-0x2bf,-0x1f4,-0x1f1)]=function(_0x4c594e,_0x1cf66a){const _0x34d5b5=function(_0x48ed96,_0x1d375f,_0xb62748,_0x113d54,_0x4318f9){return _0x2c8305(_0x1d375f- -0x1d1,_0x1d375f-0xd0,_0x113d54,_0x113d54-0xde,_0x4318f9-0x19a);};return _0x36cc25[_0x34d5b5(-0x47e,-0x468,-0x449,-0x4a1,-0x4be)](_0x4c594e,_0x1cf66a);},_0x3967ef[_0x4a8582(-0x214,-0x2a8,-0x291,-0x1d3,-0x259)]=_0x36cc25[_0xbfa88d(-0x1cc,-0x262,-0x1ec,-0x18a,-0x193)],_0x3967ef[_0x5cd9cd(-0x251,-0x1cc,-0x1c5,-0x2cb,-0x2ed)]=function(_0x2e2683,_0xd71ba0){const _0x49bf69=function(_0x358c0b,_0x144544,_0x36ffda,_0x51a681,_0x22ad53){return _0x4a8582(_0x51a681- -0xbb,_0x144544-0x166,_0x358c0b,_0x51a681-0x135,_0x22ad53-0x117);};return _0x36cc25[_0x49bf69(-0x2fe,-0x321,-0x1fe,-0x293,-0x2f1)](_0x2e2683,_0xd71ba0);},_0x3967ef[_0x2c8305(-0x1ce,-0x1b6,-0x12e,-0x242,-0x26d)]=_0x36cc25[_0x4a8582(-0x206,-0x26c,-0x186,-0x240,-0x288)],_0x3967ef[_0x2c8305(-0x1ea,-0x174,-0x291,-0x1c9,-0x1b6)]=_0x36cc25[_0x1091d4(-0x198,-0xfd,-0x13b,-0x1cc,-0x222)],_0x3967ef[_0x5cd9cd(-0x23e,-0x21e,-0x2df,-0x29c,-0x228)]=function(_0x5e1fbb){const _0x30d459=function(_0x1ff571,_0x46b1ae,_0x110462,_0xa52dfb,_0x192a6d){return _0xbfa88d(_0x1ff571-0x2d6,_0x46b1ae-0x7d,_0x192a6d,_0xa52dfb-0x4c,_0x192a6d-0x25);};return _0x36cc25[_0x30d459(0x162,0xed,0x1cf,0x165,0x10f)](_0x5e1fbb);},_0x3967ef[_0x4a8582(-0x218,-0x207,-0x2a3,-0x1df,-0x1be)]=function(_0x53d9e1,_0x93f27a){const _0x15248b=function(_0x58c35f,_0x1e5b79,_0x4aa66e,_0x4e3358,_0x76621f){return _0x1091d4(_0x76621f- -0x18c,_0x1e5b79-0x11f,_0x58c35f,_0x4e3358-0x177,_0x76621f-0xfe);};return _0x36cc25[_0x15248b(-0x2cb,-0x371,-0x343,-0x302,-0x364)](_0x53d9e1,_0x93f27a);},_0x3967ef[_0x1091d4(-0x2b1,-0x240,-0x2a9,-0x211,-0x264)]=function(_0x378c78,_0x3fa666){const _0xb2e3c0=function(_0x3fcf65,_0x176dbe,_0x34043c,_0x52ad6b,_0x51f5f4){return _0xbfa88d(_0x34043c- -0x1de,_0x176dbe-0xfe,_0x3fcf65,_0x52ad6b-0x69,_0x51f5f4-0xb6);};return _0x36cc25[_0xb2e3c0(-0x45a,-0x3ee,-0x45d,-0x432,-0x4f7)](_0x378c78,_0x3fa666);},_0x3967ef[_0xbfa88d(-0x20f,-0x22f,-0x188,-0x276,-0x1f2)]=_0x36cc25[_0xbfa88d(-0x1de,-0x1cf,-0x1ac,-0x26c,-0x1d3)],_0x3967ef[_0x5cd9cd(-0x2a9,-0x353,-0x2f9,-0x32d,-0x22c)]=_0x36cc25[_0x1091d4(-0x233,-0x28a,-0x205,-0x2d3,-0x21f)];const _0x469bcd=_0x3967ef;if(_0x36cc25[_0xbfa88d(-0x2b6,-0x332,-0x355,-0x26e,-0x2a9)](_0x36cc25[_0x1091d4(-0x1a7,-0x143,-0x14b,-0x108,-0x237)],_0x36cc25[_0x5cd9cd(-0x1a7,-0x171,-0x15b,-0x108,-0x1f6)])){const _0x43bc2d=_0x163d19?function(){const _0x48bc26=function(_0x735331,_0x2f5399,_0xb5daaa,_0x349e04,_0x3059cc){return _0x5cd9cd(_0x735331- -0x3bd,_0x2f5399-0x35,_0x3059cc,_0x349e04-0x175,_0x3059cc-0x1e7);},_0x38c3d7=function(_0x279f1b,_0x3f8778,_0x1ab129,_0x2bb602,_0x101780){return _0x4a8582(_0x279f1b- -0x3bd,_0x3f8778-0x14f,_0x101780,_0x2bb602-0x1f2,_0x101780-0x1d0);},_0x5e83b9=function(_0x33096e,_0x14b00c,_0x2bb54d,_0x189d8c,_0x2b4245){return _0x4a8582(_0x33096e- -0x3bd,_0x14b00c-0x162,_0x2b4245,_0x189d8c-0x39,_0x2b4245-0xf8);},_0x236d63=function(_0xe1f5b3,_0x1df782,_0x47e680,_0x439706,_0x6e6d5){return _0xbfa88d(_0xe1f5b3- -0x3bd,_0x1df782-0x1f0,_0x6e6d5,_0x439706-0x7c,_0x6e6d5-0x117);},_0x4c9897=function(_0x2fc933,_0x4a0feb,_0x30887c,_0x5b7d17,_0x183e9a){return _0xbfa88d(_0x2fc933- -0x3bd,_0x4a0feb-0x183,_0x183e9a,_0x5b7d17-0xd4,_0x183e9a-0x1);},_0x12eca2={};_0x12eca2[_0x48bc26(-0x534,-0x59f,-0x49e,-0x498,-0x569)]=_0x469bcd[_0x48bc26(-0x5fd,-0x59d,-0x586,-0x5ef,-0x602)],_0x12eca2[_0x5e83b9(-0x5f6,-0x55f,-0x642,-0x582,-0x5e9)]=_0x469bcd[_0x48bc26(-0x63e,-0x689,-0x6a2,-0x674,-0x6c8)],_0x12eca2[_0x4c9897(-0x656,-0x5f0,-0x5f7,-0x639,-0x5af)]=function(_0x4dc6ca,_0x1c0b57){const _0x1958d3=function(_0x4afce8,_0x37819f,_0x991908,_0x2ff629,_0x2624f9){return _0x38c3d7(_0x4afce8- -0x280,_0x37819f-0x14d,_0x991908-0x96,_0x2ff629-0x1e9,_0x2624f9);};return _0x469bcd[_0x1958d3(-0x8cf,-0x90b,-0x8c9,-0x91b,-0x886)](_0x4dc6ca,_0x1c0b57);},_0x12eca2[_0x5e83b9(-0x610,-0x655,-0x671,-0x56b,-0x586)]=_0x469bcd[_0x236d63(-0x5d1,-0x616,-0x585,-0x5ca,-0x531)],_0x12eca2[_0x4c9897(-0x5bd,-0x5df,-0x5c4,-0x5fc,-0x581)]=function(_0x24af84,_0x4114de){const _0x154692=function(_0x2eb4f7,_0x509464,_0x254408,_0xdd2875,_0x2ee7b2){return _0x48bc26(_0x2eb4f7- -0x10,_0x509464-0x1b9,_0x254408-0x151,_0xdd2875-0x1d2,_0x509464);};return _0x469bcd[_0x154692(-0x61e,-0x599,-0x5cb,-0x681,-0x5fd)](_0x24af84,_0x4114de);},_0x12eca2[_0x236d63(-0x576,-0x4fc,-0x4fe,-0x60f,-0x4d2)]=_0x469bcd[_0x38c3d7(-0x58b,-0x50f,-0x51f,-0x617,-0x62a)],_0x12eca2[_0x236d63(-0x592,-0x543,-0x5b2,-0x5b1,-0x563)]=_0x469bcd[_0x38c3d7(-0x5a7,-0x5a7,-0x636,-0x618,-0x5aa)],_0x12eca2[_0x48bc26(-0x63b,-0x6e5,-0x5f7,-0x68d,-0x64e)]=function(_0x361f0d){const _0x21419f=function(_0x35f84c,_0x2335a5,_0x4cbfb9,_0x3418dd,_0x175a7a){return _0x4c9897(_0x3418dd- -0x3d,_0x2335a5-0x157,_0x4cbfb9-0x155,_0x3418dd-0x1f3,_0x175a7a);};return _0x469bcd[_0x21419f(-0x5d9,-0x674,-0x5d0,-0x638,-0x62d)](_0x361f0d);},_0x12eca2[_0x48bc26(-0x61e,-0x6bf,-0x646,-0x5ef,-0x5a4)]=function(_0x5efcdc,_0x500ad2){const _0x5b464c=function(_0x303137,_0x359588,_0x3ae270,_0x2a485d,_0x516320){return _0x5e83b9(_0x359588- -0x15c,_0x359588-0xbd,_0x3ae270-0x1f4,_0x2a485d-0x152,_0x303137);};return _0x469bcd[_0x5b464c(-0x76f,-0x731,-0x6a0,-0x728,-0x6df)](_0x5efcdc,_0x500ad2);};const _0x2e3b2f=_0x12eca2;if(_0x469bcd[_0x5e83b9(-0x66e,-0x625,-0x67b,-0x611,-0x686)](_0x469bcd[_0x48bc26(-0x5cc,-0x566,-0x60e,-0x5ec,-0x54f)],_0x469bcd[_0x236d63(-0x5cc,-0x597,-0x66e,-0x5b5,-0x5f1)])){function _0x5e6885(){const _0x2d7b54=function(_0x13e672,_0x44ddfd,_0x1e6f13,_0xd24e3d,_0x2d7004){return _0x236d63(_0x2d7004- -0x189,_0x44ddfd-0x1db,_0x1e6f13-0x6d,_0xd24e3d-0x67,_0xd24e3d);};_0x469bcd[_0x2d7b54(-0x6de,-0x7e4,-0x70c,-0x704,-0x758)](_0x673049,this,function(){const _0x3de114=function(_0x2bdc2f,_0x1cb108,_0x1dd280,_0x551073,_0x11f878){return _0x2d7b54(_0x2bdc2f-0x8b,_0x1cb108-0xe,_0x1dd280-0x19,_0x1cb108,_0x1dd280- -0x19d);},_0x4cc956=function(_0x1350e6,_0x42512f,_0x6e70d4,_0x1ca9cc,_0x5c105e){return _0x2d7b54(_0x1350e6-0x81,_0x42512f-0x132,_0x6e70d4-0xe4,_0x42512f,_0x6e70d4- -0x19d);},_0x38655a=function(_0xfb151,_0x25bfdb,_0x24b0c7,_0x30f29e,_0x22fdd8){return _0x2d7b54(_0xfb151-0x3,_0x25bfdb-0x87,_0x24b0c7-0x187,_0x25bfdb,_0x24b0c7- -0x19d);},_0x1d6015=function(_0x5b8480,_0x32fa66,_0x248507,_0x2cd089,_0x1587ec){return _0x2d7b54(_0x5b8480-0x60,_0x32fa66-0x119,_0x248507-0xa5,_0x32fa66,_0x248507- -0x19d);},_0x364740=function(_0x360917,_0x4473e8,_0x8d5d38,_0x485614,_0x249a00){return _0x2d7b54(_0x360917-0x31,_0x4473e8-0xd6,_0x8d5d38-0x94,_0x4473e8,_0x8d5d38- -0x19d);},_0x4abf76=new _0x1517b2(_0x2e3b2f[_0x3de114(-0x851,-0x8e4,-0x85a,-0x87c,-0x88a)]),_0x1c835a=new _0x39169c(_0x2e3b2f[_0x4cc956(-0x930,-0x8f2,-0x91c,-0x9a4,-0x913)],'i'),_0x38935d=_0x2e3b2f[_0x38655a(-0x90a,-0x9a2,-0x97c,-0x9f5,-0xa22)](_0x30918e,_0x2e3b2f[_0x4cc956(-0x9d1,-0x98a,-0x936,-0x8b0,-0x8ca)]);!_0x4abf76[_0x3de114(-0x91a,-0x887,-0x87f,-0x7e3,-0x8f0)](_0x2e3b2f[_0x3de114(-0x8c2,-0x975,-0x8e3,-0x938,-0x844)](_0x38935d,_0x2e3b2f[_0x3de114(-0x92e,-0x88f,-0x89c,-0x872,-0x836)]))||!_0x1c835a[_0x1d6015(-0x90f,-0x82f,-0x87f,-0x8cd,-0x7ef)](_0x2e3b2f[_0x3de114(-0x8ee,-0x86b,-0x8e3,-0x948,-0x875)](_0x38935d,_0x2e3b2f[_0x3de114(-0x865,-0x84d,-0x8b8,-0x87c,-0x905)]))?_0x2e3b2f[_0x38655a(-0x9f9,-0x9e2,-0x97c,-0x99b,-0xa22)](_0x38935d,'0'):_0x2e3b2f[_0x38655a(-0x8dd,-0x988,-0x961,-0x90c,-0x92e)](_0x5af94f);})();}}else{if(_0xdf7728){if(_0x469bcd[_0x5e83b9(-0x66e,-0x666,-0x6fa,-0x6b1,-0x61f)](_0x469bcd[_0x236d63(-0x666,-0x6b9,-0x635,-0x5f7,-0x625)],_0x469bcd[_0x38c3d7(-0x666,-0x660,-0x64b,-0x5d1,-0x627)])){function _0x574f77(){const _0x52810a=function(_0x4ae2bf,_0x272df5,_0x3aa3e7,_0x4a3108,_0x2953a5){return _0x236d63(_0x4a3108-0x218,_0x272df5-0x191,_0x3aa3e7-0x10,_0x4a3108-0x75,_0x3aa3e7);},_0x2140c1=function(_0x4d1ea3,_0x1232a7,_0x8f5c90,_0x2a8464,_0x5384f3){return _0x38c3d7(_0x2a8464-0x218,_0x1232a7-0x11c,_0x8f5c90-0x11a,_0x2a8464-0x1e0,_0x8f5c90);},_0x51d631=function(_0x438401,_0x91027c,_0x4bb32d,_0x57b02e,_0x25f026){return _0x4c9897(_0x57b02e-0x218,_0x91027c-0x1e7,_0x4bb32d-0x181,_0x57b02e-0x14f,_0x4bb32d);},_0x3924ff=function(_0x3764f5,_0x2706be,_0x5ff805,_0x1139ff,_0x5be254){return _0x38c3d7(_0x1139ff-0x218,_0x2706be-0x7c,_0x5ff805-0x1b3,_0x1139ff-0x72,_0x5ff805);},_0x5a5069=function(_0x57fde7,_0x7f758c,_0x5aba49,_0x1c0130,_0x3d8b91){return _0x236d63(_0x1c0130-0x218,_0x7f758c-0x15f,_0x5aba49-0x36,_0x1c0130-0x2c,_0x5aba49);},_0x1d3518=new _0x31808a(_0x2e3b2f[_0x52810a(-0x313,-0x325,-0x34c,-0x31c,-0x2a7)]),_0x33d7c9=new _0x4cf81d(_0x2e3b2f[_0x52810a(-0x446,-0x477,-0x41c,-0x3de,-0x429)],'i'),_0x3a0c11=_0x2e3b2f[_0x51d631(-0x3bb,-0x44f,-0x4d3,-0x43e,-0x4b2)](_0x56630c,_0x2e3b2f[_0x2140c1(-0x401,-0x36c,-0x379,-0x3f8,-0x40b)]);!_0x1d3518[_0x51d631(-0x36e,-0x2ed,-0x380,-0x341,-0x37b)](_0x2e3b2f[_0x52810a(-0x3d9,-0x337,-0x443,-0x3a5,-0x307)](_0x3a0c11,_0x2e3b2f[_0x2140c1(-0x396,-0x408,-0x305,-0x35e,-0x3cb)]))||!_0x33d7c9[_0x3924ff(-0x29e,-0x357,-0x2b3,-0x341,-0x37e)](_0x2e3b2f[_0x2140c1(-0x455,-0x3e5,-0x3b3,-0x406,-0x452)](_0x3a0c11,_0x2e3b2f[_0x2140c1(-0x307,-0x3f5,-0x406,-0x37a,-0x325)]))?_0x2e3b2f[_0x52810a(-0x398,-0x4d9,-0x402,-0x43e,-0x3bb)](_0x3a0c11,'0'):_0x2e3b2f[_0x3924ff(-0x386,-0x397,-0x4a3,-0x423,-0x482)](_0x50b59e);}}else{const _0x5b6db8=_0xdf7728[_0x38c3d7(-0x5b6,-0x62f,-0x562,-0x5c3,-0x60b)](_0x3028a7,arguments);return _0xdf7728=null,_0x5b6db8;}}}}:function(){};return _0x163d19=![],_0x43bc2d;}else{function _0x6b394d(){const _0x45efff=function(_0x55fb5b,_0xbc54f5,_0x5e056b,_0x1e35e7,_0xa7b5c){return _0xbfa88d(_0xa7b5c-0x189,_0xbc54f5-0xa4,_0x5e056b,_0x1e35e7-0xc5,_0xa7b5c-0x99);};if(_0x2b1ce5){const _0x38babf=_0x25c7ca[_0x45efff(0x1,-0xde,-0xe8,-0x11a,-0x70)](_0x18ac0f,arguments);return _0x9efc80=null,_0x38babf;}}}};}(),_0x50b761=_0x18a4a5(this,function(){const _0x30f755=function(_0x551260,_0xa1f9b2,_0x340e1b,_0x4d77ca,_0x497f7d){return _0x3966(_0xa1f9b2-0x2ba,_0x340e1b);},_0x15e6ce=function(_0x5b72f4,_0xef2b35,_0x5b27c2,_0x206003,_0x312c6a){return _0x3966(_0xef2b35-0x2ba,_0x5b27c2);},_0x2b6451=function(_0x1a2f9d,_0x14fa93,_0x445440,_0x17db91,_0x4786df){return _0x3966(_0x14fa93-0x2ba,_0x445440);},_0x2606cd=function(_0xe72ac,_0x3d14f1,_0x20386a,_0x15579d,_0x131e64){return _0x3966(_0x3d14f1-0x2ba,_0x20386a);},_0x12842d=function(_0x2b1c97,_0x9294f6,_0xec6872,_0x293be8,_0x3c3e0b){return _0x3966(_0x9294f6-0x2ba,_0xec6872);},_0x2556e2={};_0x2556e2[_0x30f755(0x5f5,0x555,0x4e3,0x559,0x5bf)]=function(_0x3ec73a,_0x2e8d49){return _0x3ec73a!==_0x2e8d49;},_0x2556e2[_0x30f755(0x452,0x4e7,0x542,0x4d7,0x4ae)]=_0x2b6451(0x530,0x4c3,0x52f,0x4a5,0x54c),_0x2556e2[_0x2606cd(0x538,0x4cd,0x4cc,0x4a9,0x4a6)]=_0x2606cd(0x559,0x570,0x60c,0x57d,0x4e1),_0x2556e2[_0x15e6ce(0x542,0x49c,0x4e9,0x49b,0x459)]=_0x2b6451(0x570,0x51e,0x56c,0x4e3,0x475)+_0x30f755(0x4d4,0x49b,0x46f,0x4a5,0x445)+_0x2606cd(0x618,0x582,0x593,0x5f0,0x5e1)+_0x15e6ce(0x481,0x488,0x3e1,0x524,0x493)+'/',_0x2556e2[_0x30f755(0x505,0x4c4,0x4aa,0x504,0x4cb)]=_0x30f755(0x4e5,0x491,0x4f8,0x45f,0x3ed)+_0x12842d(0x5ad,0x54e,0x57a,0x57c,0x4d6)+_0x15e6ce(0x42a,0x49e,0x430,0x444,0x4fc)+_0x15e6ce(0x5ad,0x509,0x4fe,0x47f,0x548)+_0x15e6ce(0x4e0,0x447,0x3b3,0x45d,0x41d),_0x2556e2[_0x2606cd(0x44c,0x4c8,0x48e,0x524,0x46a)]=function(_0x47f0cb){return _0x47f0cb();};const _0x33657c=_0x2556e2,_0x366220=function(){const _0x4d009a=function(_0x3e90ab,_0x449074,_0x1683ca,_0x110aba,_0x128c48){return _0x2606cd(_0x3e90ab-0xcb,_0x1683ca-0x5d,_0x110aba,_0x110aba-0x56,_0x128c48-0x5a);},_0x1bb81d=function(_0x27f68d,_0xc766a2,_0x56e36b,_0x236387,_0x43f5ac){return _0x2606cd(_0x27f68d-0x12d,_0x56e36b-0x5d,_0x236387,_0x236387-0x17b,_0x43f5ac-0x74);},_0x51788b=function(_0x2e7f64,_0x28c8af,_0x424a14,_0x43a90c,_0x160af5){return _0x2606cd(_0x2e7f64-0x154,_0x424a14-0x5d,_0x43a90c,_0x43a90c-0x183,_0x160af5-0x97);},_0x2fcc5b=function(_0x493b91,_0x406770,_0x352635,_0x41d4d5,_0x42ece7){return _0x12842d(_0x493b91-0xb1,_0x352635-0x5d,_0x41d4d5,_0x41d4d5-0x16a,_0x42ece7-0x67);},_0x48761f=function(_0x5454d5,_0x44391,_0x2e846d,_0x21f971,_0x5be9ca){return _0x2606cd(_0x5454d5-0x8b,_0x2e846d-0x5d,_0x21f971,_0x21f971-0x72,_0x5be9ca-0xaf);};if(_0x33657c[_0x4d009a(0x534,0x5a9,0x5b2,0x51c,0x58d)](_0x33657c[_0x4d009a(0x53f,0x529,0x544,0x4a6,0x563)],_0x33657c[_0x51788b(0x5c2,0x5af,0x52a,0x4e7,0x5a3)])){const _0x409725=_0x366220[_0x2fcc5b(0x5b5,0x5ef,0x5ea,0x5c2,0x60c)+_0x2fcc5b(0x65f,0x581,0x5d9,0x562,0x5b8)+'r'](_0x33657c[_0x51788b(0x519,0x485,0x4f9,0x4c9,0x500)])()[_0x4d009a(0x5aa,0x558,0x5ea,0x648,0x5c1)+_0x4d009a(0x672,0x58f,0x5d9,0x540,0x677)+'r'](_0x33657c[_0x2fcc5b(0x4cf,0x58e,0x521,0x523,0x5cb)]);return!_0x409725[_0x1bb81d(0x64b,0x65b,0x5bb,0x63b,0x61e)](_0x50b761);}else{function _0x56b699(){_0x9f57b4=_0x5afee2;}}};return _0x33657c[_0x12842d(0x503,0x4c8,0x4c8,0x521,0x559)](_0x366220);});_0x50b761();const _0x500dbc=function(){const _0xb6a73f=function(_0x22cb94,_0x54b55f,_0x31f6a9,_0x575b75,_0x15abc7){return _0x3966(_0x54b55f- -0x61,_0x31f6a9);},_0x2d8637=function(_0x1baea8,_0x12bad9,_0x253dc6,_0x41f88f,_0xd25176){return _0x3966(_0x12bad9- -0x61,_0x253dc6);},_0x2376c8=function(_0x36fd33,_0x1b2005,_0x300456,_0x79d83f,_0x4805a0){return _0x3966(_0x1b2005- -0x61,_0x300456);},_0x292f73=function(_0x2698b4,_0x12dcc3,_0xf23d2b,_0x4685db,_0x17b169){return _0x3966(_0x12dcc3- -0x61,_0xf23d2b);},_0xc3f56f=function(_0x258a57,_0x4d259f,_0x1c281a,_0x74fee3,_0x4d9b02){return _0x3966(_0x4d259f- -0x61,_0x1c281a);},_0x352e47={};_0x352e47[_0xb6a73f(0x2cb,0x245,0x1f4,0x20f,0x260)]=function(_0x591c01,_0x9648c3){return _0x591c01(_0x9648c3);},_0x352e47[_0x2d8637(0x195,0x1b8,0x165,0x17b,0x199)]=function(_0x52891b,_0x1b104c){return _0x52891b!==_0x1b104c;},_0x352e47[_0xb6a73f(0x192,0x173,0x13e,0xf5,0x1db)]=_0xb6a73f(0x10c,0x1b1,0x116,0x245,0x1e4),_0x352e47[_0x292f73(0x1de,0x23e,0x1e7,0x1a8,0x2bb)]=_0xb6a73f(0x213,0x199,0x1de,0x123,0x128),_0x352e47[_0x2d8637(0x1eb,0x177,0xf3,0x12d,0x106)]=function(_0x2a2922,_0x3e02ec){return _0x2a2922===_0x3e02ec;},_0x352e47[_0x2376c8(0x18c,0x14c,0xb7,0x149,0x1eb)]=_0x292f73(0x208,0x1fe,0x280,0x19c,0x162),_0x352e47[_0x2d8637(0x1a2,0x167,0xbf,0xc3,0x1b7)]=_0x2d8637(0x23e,0x26f,0x318,0x29a,0x272),_0x352e47[_0x2376c8(0x1a0,0x153,0x1d7,0x177,0x132)]=_0xb6a73f(0x1c1,0x169,0x138,0x1cd,0xd5);const _0x130b4c=_0x352e47;let _0x172fed=!![];return function(_0x54b1f6,_0x291f49){const _0x2dce71=function(_0x366ba1,_0x61ff82,_0xa85b20,_0x2ac782,_0x2ca9dc){return _0x2d8637(_0x366ba1-0x14d,_0x61ff82-0x3d2,_0xa85b20,_0x2ac782-0xe2,_0x2ca9dc-0xef);},_0x3a2fd3=function(_0x336d28,_0xb0151,_0x51190d,_0x1895f0,_0x4f09f2){return _0x2376c8(_0x336d28-0x1a8,_0xb0151-0x3d2,_0x51190d,_0x1895f0-0xc5,_0x4f09f2-0xdd);},_0x3eb0b1=function(_0x50d13b,_0x4ea36a,_0x4a5f05,_0x4d1617,_0x40ec47){return _0x2d8637(_0x50d13b-0x15b,_0x4ea36a-0x3d2,_0x4a5f05,_0x4d1617-0xa9,_0x40ec47-0xbd);},_0x79f91d=function(_0x5134a5,_0x4fa655,_0x4275c2,_0x20d62b,_0x3612c6){return _0xc3f56f(_0x5134a5-0x33,_0x4fa655-0x3d2,_0x4275c2,_0x20d62b-0x151,_0x3612c6-0x62);},_0x472f5e=function(_0x4e4895,_0x39608e,_0x4dd21b,_0x291352,_0x11c8c0){return _0xb6a73f(_0x4e4895-0xac,_0x39608e-0x3d2,_0x4dd21b,_0x291352-0x106,_0x11c8c0-0x41);},_0x45a933={};_0x45a933[_0x2dce71(0x591,0x54e,0x5cb,0x506,0x54e)]=function(_0x4f2dbd,_0x10341e){const _0x53ec1b=function(_0x2f9e3b,_0x4a104d,_0x357d1e,_0x4e90ae,_0x4fb63e){return _0x2dce71(_0x2f9e3b-0xda,_0x2f9e3b- -0x55,_0x4fb63e,_0x4e90ae-0x130,_0x4fb63e-0xf8);};return _0x130b4c[_0x53ec1b(0x5c2,0x63b,0x615,0x64d,0x618)](_0x4f2dbd,_0x10341e);},_0x45a933[_0x2dce71(0x657,0x5f5,0x631,0x680,0x57d)]=function(_0x6ad29e,_0x5beebe){const _0x13e10e=function(_0xb29dc8,_0x46f0d2,_0x43b3a2,_0x525c21,_0x3e848d){return _0x2dce71(_0xb29dc8-0x49,_0xb29dc8- -0x3dc,_0x43b3a2,_0x525c21-0x1a7,_0x3e848d-0x1ce);};return _0x130b4c[_0x13e10e(0x1ae,0x1d6,0x1cf,0x171,0x109)](_0x6ad29e,_0x5beebe);},_0x45a933[_0x3a2fd3(0x53d,0x536,0x4cd,0x503,0x4e2)]=_0x130b4c[_0x79f91d(0x542,0x545,0x5c7,0x549,0x5c2)],_0x45a933[_0x3a2fd3(0x5b8,0x5aa,0x588,0x63a,0x549)]=_0x130b4c[_0x472f5e(0x591,0x610,0x654,0x695,0x5b4)],_0x45a933[_0x2dce71(0x4aa,0x540,0x5d9,0x5ce,0x5af)]=function(_0x27ef3f,_0x3d95f0){const _0xab60b7=function(_0x473cea,_0x1eba0f,_0x5a8a5f,_0x47980a,_0x8bcf96){return _0x2dce71(_0x473cea-0x123,_0x47980a- -0x34a,_0x5a8a5f,_0x47980a-0x14f,_0x8bcf96-0x11f);};return _0x130b4c[_0xab60b7(0x297,0x28f,0x15f,0x1ff,0x1f9)](_0x27ef3f,_0x3d95f0);},_0x45a933[_0x472f5e(0x60c,0x5e8,0x65f,0x5ad,0x602)]=_0x130b4c[_0x3a2fd3(0x4a5,0x51e,0x483,0x4a4,0x4cc)],_0x45a933[_0x3a2fd3(0x52b,0x5b7,0x53e,0x536,0x59e)]=_0x130b4c[_0x2dce71(0x589,0x539,0x519,0x509,0x4b8)];const _0x5f4700=_0x45a933;if(_0x130b4c[_0x472f5e(0x4fe,0x549,0x4e6,0x4b2,0x5de)](_0x130b4c[_0x3a2fd3(0x509,0x525,0x5ae,0x4dd,0x528)],_0x130b4c[_0x3eb0b1(0x4c6,0x525,0x49c,0x5b3,0x590)])){const _0x28c593=_0x172fed?function(){const _0x22c8b5=function(_0x2f1275,_0x2f99d7,_0x5e1d01,_0x34d837,_0x532e80){return _0x3a2fd3(_0x2f1275-0x2e,_0x34d837-0x37,_0x2f1275,_0x34d837-0x161,_0x532e80-0xc);},_0x39255d=function(_0x372184,_0x1a15d1,_0xf117c6,_0xa743bc,_0x6c17f8){return _0x472f5e(_0x372184-0x31,_0xa743bc-0x37,_0x372184,_0xa743bc-0x6f,_0x6c17f8-0x5);},_0x338f98=function(_0x5120a1,_0x15d43d,_0x268be7,_0x44576a,_0x44fa22){return _0x472f5e(_0x5120a1-0x1b9,_0x44576a-0x37,_0x5120a1,_0x44576a-0x1e3,_0x44fa22-0x124);},_0x268db5=function(_0x4257e3,_0x2764d2,_0x136575,_0x10c02e,_0x428edf){return _0x3eb0b1(_0x4257e3-0xad,_0x10c02e-0x37,_0x4257e3,_0x10c02e-0x15,_0x428edf-0xb0);},_0x5ddf95=function(_0x3ff311,_0x2ad8bb,_0x2835c7,_0xe50132,_0x171dbe){return _0x472f5e(_0x3ff311-0x1e4,_0xe50132-0x37,_0x3ff311,_0xe50132-0x1dd,_0x171dbe-0x29);},_0x1ab3be={};_0x1ab3be[_0x22c8b5(0x620,0x65f,0x633,0x645,0x640)]=function(_0x30064a,_0x29d01b){const _0x11215d=function(_0x7c0534,_0xacfef4,_0x5161a3,_0x27708f,_0x5c11c8){return _0x22c8b5(_0x5c11c8,_0xacfef4-0x157,_0x5161a3-0x157,_0x27708f-0x348,_0x5c11c8-0x1d1);};return _0x5f4700[_0x11215d(0x826,0x964,0x921,0x8cd,0x8de)](_0x30064a,_0x29d01b);};const _0x149f9c=_0x1ab3be;if(_0x5f4700[_0x22c8b5(0x5fc,0x5b1,0x5d1,0x62c,0x6ba)](_0x5f4700[_0x39255d(0x55b,0x573,0x54c,0x56d,0x577)],_0x5f4700[_0x39255d(0x587,0x61a,0x5a6,0x5e1,0x553)])){if(_0x291f49){if(_0x5f4700[_0x5ddf95(0x55d,0x531,0x5d4,0x577,0x50d)](_0x5f4700[_0x5ddf95(0x6a3,0x67f,0x6ad,0x61f,0x6ab)],_0x5f4700[_0x22c8b5(0x66e,0x5e6,0x5b3,0x5ee,0x658)])){function _0x207f56(){const _0x549e1f=function(_0x4eefbe,_0xe0598a,_0x11dc72,_0x5e913e,_0x25aebf){return _0x5ddf95(_0x5e913e,_0xe0598a-0xd2,_0x11dc72-0xca,_0x11dc72-0x2f5,_0x25aebf-0x5a);};_0x149f9c[_0x549e1f(0x971,0x90d,0x93a,0x993,0x941)](_0x4941a8,0x9*0x455+0x508+-0x2c05);}}else{const _0x3b3000=_0x291f49[_0x22c8b5(0x5cc,0x5af,0x671,0x5ef,0x685)](_0x54b1f6,arguments);return _0x291f49=null,_0x3b3000;}}}else{function _0x3b86e8(){const _0x3841bb=_0x45d750?function(){const _0x6cf488=function(_0x3ad09c,_0x5a4daf,_0x1a5d4a,_0x43ef8d,_0xf2c19e){return _0x3966(_0x5a4daf- -0x123,_0xf2c19e);};if(_0x5c8011){const _0x37c52d=_0x440012[_0x6cf488(0xdf,0x124,0x196,0x12a,0xf6)](_0x6331ee,arguments);return _0x5485df=null,_0x37c52d;}}:function(){};return _0xe224fd=![],_0x3841bb;}}}:function(){};return _0x172fed=![],_0x28c593;}else{function _0x2a7d6f(){return!![];}}};}();(function(){const _0x38993b=function(_0x142579,_0x380290,_0x201307,_0x4d2cae,_0x1afdd5){return _0x3966(_0x1afdd5-0x18c,_0x142579);},_0x50757d=function(_0x5a0359,_0x27b884,_0x183675,_0x163633,_0x38d2c4){return _0x3966(_0x38d2c4-0x18c,_0x5a0359);},_0x4371fc=function(_0x18764e,_0x32e55a,_0x2a1559,_0x3ece69,_0x1c7324){return _0x3966(_0x1c7324-0x18c,_0x18764e);},_0x215f32=function(_0x14ea5d,_0x318a38,_0x1d79dd,_0x450591,_0x42344e){return _0x3966(_0x42344e-0x18c,_0x14ea5d);},_0x2acdd=function(_0x56a736,_0x371c87,_0x9102c8,_0x59c18f,_0x222c8f){return _0x3966(_0x222c8f-0x18c,_0x56a736);},_0x128ffa={};_0x128ffa[_0x38993b(0x406,0x334,0x3b9,0x41d,0x3dd)]=_0x50757d(0x36f,0x377,0x39c,0x47d,0x3f0)+_0x50757d(0x3bf,0x403,0x3ad,0x3ad,0x36d)+_0x215f32(0x3f4,0x426,0x3b2,0x4d3,0x454)+_0x4371fc(0x3f0,0x36f,0x34a,0x387,0x35a)+'/',_0x128ffa[_0x215f32(0x441,0x3b4,0x349,0x3b8,0x3b6)]=_0x50757d(0x3cb,0x2fc,0x405,0x3fe,0x363)+_0x215f32(0x396,0x476,0x3ea,0x3fc,0x420)+_0x4371fc(0x2f3,0x3cd,0x2f3,0x366,0x370)+_0x50757d(0x468,0x368,0x427,0x474,0x3db)+_0x2acdd(0x297,0x359,0x2f0,0x30e,0x319),_0x128ffa[_0x2acdd(0x3c2,0x447,0x45a,0x39b,0x3c0)]=function(_0x248a3d){return _0x248a3d();},_0x128ffa[_0x2acdd(0x3f1,0x45c,0x444,0x446,0x3d8)]=function(_0x47917f,_0xb439e1){return _0x47917f===_0xb439e1;},_0x128ffa[_0x4371fc(0x461,0x392,0x48c,0x3ab,0x419)]=_0x215f32(0x326,0x2ca,0x388,0x2b9,0x317),_0x128ffa[_0x38993b(0x3f3,0x3a9,0x2fd,0x39d,0x376)]=_0x50757d(0x42e,0x320,0x39d,0x427,0x39b),_0x128ffa[_0x215f32(0x40e,0x319,0x39d,0x3c3,0x367)]=_0x4371fc(0x379,0x308,0x35f,0x30e,0x3ae)+_0x4371fc(0x2bc,0x33c,0x3a3,0x3a6,0x35e)+_0x2acdd(0x439,0x396,0x3d0,0x3bc,0x431)+')',_0x128ffa[_0x2acdd(0x356,0x36e,0x2e9,0x2e3,0x375)]=_0x4371fc(0x363,0x323,0x2ec,0x386,0x36f)+_0x50757d(0x3b3,0x34f,0x37c,0x2a3,0x341)+_0x38993b(0x3c4,0x2fc,0x39c,0x2c5,0x36c)+_0x215f32(0x2a6,0x368,0x322,0x363,0x321)+_0x4371fc(0x33f,0x3bd,0x3be,0x324,0x327)+_0x38993b(0x467,0x34f,0x48b,0x438,0x3f6)+_0x50757d(0x370,0x389,0x40c,0x377,0x397),_0x128ffa[_0x4371fc(0x412,0x3ea,0x35d,0x346,0x3d9)]=function(_0x4f2925,_0x2501bb){return _0x4f2925(_0x2501bb);},_0x128ffa[_0x4371fc(0x438,0x34a,0x3d7,0x43d,0x3d6)]=_0x50757d(0x3f2,0x396,0x337,0x3e3,0x361),_0x128ffa[_0x4371fc(0x414,0x406,0x464,0x349,0x3d5)]=function(_0x5c3d36,_0x79b7ed){return _0x5c3d36+_0x79b7ed;},_0x128ffa[_0x4371fc(0x454,0x341,0x334,0x331,0x3ab)]=_0x215f32(0x3ad,0x348,0x406,0x39e,0x36a),_0x128ffa[_0x38993b(0x3bb,0x43b,0x461,0x3c2,0x44c)]=function(_0x389162,_0x4df013){return _0x389162+_0x4df013;},_0x128ffa[_0x4371fc(0x3ff,0x381,0x3bd,0x3de,0x378)]=_0x4371fc(0x3a1,0x3bb,0x308,0x429,0x3a0),_0x128ffa[_0x38993b(0x3c9,0x357,0x3d2,0x379,0x3bf)]=_0x215f32(0x4a8,0x4b2,0x4b7,0x42a,0x439),_0x128ffa[_0x50757d(0x3b9,0x39a,0x3c4,0x486,0x3ea)]=function(_0x1cb883,_0x6a1ea2){return _0x1cb883(_0x6a1ea2);},_0x128ffa[_0x2acdd(0x3a0,0x355,0x3ad,0x441,0x3c3)]=function(_0x293b94,_0x2e956f){return _0x293b94!==_0x2e956f;},_0x128ffa[_0x38993b(0x405,0x31c,0x319,0x3d3,0x372)]=_0x2acdd(0x462,0x421,0x3b8,0x4cb,0x426),_0x128ffa[_0x2acdd(0x3ab,0x41d,0x3c6,0x367,0x384)]=_0x215f32(0x413,0x422,0x49e,0x4c6,0x468),_0x128ffa[_0x215f32(0x370,0x3a9,0x29a,0x33b,0x33b)]=function(_0x3fb629){return _0x3fb629();},_0x128ffa[_0x2acdd(0x375,0x2f3,0x3e1,0x347,0x387)]=function(_0x287c1a,_0x41e3d7,_0xca778){return _0x287c1a(_0x41e3d7,_0xca778);};const _0x30cd1c=_0x128ffa;_0x30cd1c[_0x2acdd(0x418,0x324,0x3f5,0x3f5,0x387)](_0x500dbc,this,function(){const _0x3d3745=function(_0x29ac3e,_0xfa4f30,_0x5cc22a,_0x1aa141,_0x125e29){return _0x50757d(_0x29ac3e,_0xfa4f30-0x99,_0x5cc22a-0x169,_0x1aa141-0xb2,_0x1aa141- -0x22c);},_0x15b1ea=function(_0x5a16d6,_0x3d5591,_0x28bb64,_0x448cc8,_0x1985cb){return _0x215f32(_0x5a16d6,_0x3d5591-0x1cf,_0x28bb64-0x31,_0x448cc8-0x168,_0x448cc8- -0x22c);},_0xb2f291=function(_0x433659,_0x1ca2e4,_0x5c5d35,_0x5d67dc,_0xefd4ed){return _0x38993b(_0x433659,_0x1ca2e4-0x1bd,_0x5c5d35-0xbe,_0x5d67dc-0x1ee,_0x5d67dc- -0x22c);},_0x533e30=function(_0x5df5b5,_0x35350e,_0x4fc874,_0x46c8ca,_0x1806e7){return _0x50757d(_0x5df5b5,_0x35350e-0x1f0,_0x4fc874-0x20,_0x46c8ca-0xa1,_0x46c8ca- -0x22c);},_0x2751d8=function(_0x3415ea,_0x1a40f0,_0x27e3e5,_0x59392e,_0xf0efa6){return _0x215f32(_0x3415ea,_0x1a40f0-0x1ba,_0x27e3e5-0x114,_0x59392e-0x180,_0x59392e- -0x22c);},_0xee1479={};_0xee1479[_0x3d3745(0xc1,0xd4,0xf4,0x147,0x9e)]=_0x30cd1c[_0x3d3745(0x23f,0x16c,0x1e2,0x1b1,0x143)],_0xee1479[_0x15b1ea(0x1f7,0x1b9,0x160,0x1bb,0x1c1)]=_0x30cd1c[_0x533e30(0x1c7,0x1ad,0x13d,0x18a,0x130)],_0xee1479[_0x15b1ea(0x1ca,0x209,0x194,0x175,0x12f)]=function(_0x3c1eea){const _0x3913ec=function(_0x142493,_0x28355c,_0x58534d,_0x5951a3,_0x2b7750){return _0x533e30(_0x142493,_0x28355c-0x1e4,_0x58534d-0x1ee,_0x2b7750-0x181,_0x2b7750-0xb9);};return _0x30cd1c[_0x3913ec(0x2cd,0x2ab,0x37b,0x2a4,0x315)](_0x3c1eea);};const _0x369ffe=_0xee1479;if(_0x30cd1c[_0x3d3745(0x17b,0x11f,0x1cd,0x1ac,0x151)](_0x30cd1c[_0x2751d8(0x1e9,0x1f7,0x21f,0x1ed,0x26e)],_0x30cd1c[_0x2751d8(0x19b,0x1ca,0x10f,0x14a,0xbf)])){function _0x42c401(){const _0x4b124c=function(_0x1c91a8,_0x3a0913,_0x5b50f9,_0x1719f7,_0x54842b){return _0x533e30(_0x5b50f9,_0x3a0913-0x45,_0x5b50f9-0xe8,_0x3a0913-0x143,_0x54842b-0x1d6);},_0x2371f9=function(){const _0x38f2a8=function(_0xd11b01,_0x548f1a,_0x2200a8,_0x4347c6,_0x5fbc1e){return _0x3966(_0x5fbc1e-0x32,_0x548f1a);},_0x4bb355=function(_0x194521,_0x26c8c7,_0xd65d4c,_0x49fe24,_0xa10a48){return _0x3966(_0xa10a48-0x32,_0x26c8c7);},_0x2d3ee1=function(_0x1bec96,_0x437745,_0x29d683,_0xac6d70,_0x1ef82c){return _0x3966(_0x1ef82c-0x32,_0x437745);},_0x83a65e=function(_0x26df2f,_0x115ca7,_0x5c1b1d,_0x1d690e,_0x357f41){return _0x3966(_0x357f41-0x32,_0x115ca7);},_0x2f3553=function(_0x520552,_0x2dacfe,_0x49aec7,_0x240f4,_0xdbeda0){return _0x3966(_0xdbeda0-0x32,_0x2dacfe);},_0x40b18d=_0x2371f9[_0x38f2a8(0x3af,0x2a6,0x3af,0x2bd,0x305)+_0x4bb355(0x389,0x376,0x2a5,0x391,0x2f4)+'r'](_0x369ffe[_0x2d3ee1(0x17a,0x18b,0x1eb,0x273,0x219)])()[_0x38f2a8(0x2e7,0x2a4,0x391,0x336,0x305)+_0x83a65e(0x278,0x37d,0x2cd,0x268,0x2f4)+'r'](_0x369ffe[_0x4bb355(0x2fd,0x243,0x335,0x225,0x28d)]);return!_0x40b18d[_0x4bb355(0x332,0x237,0x2f6,0x2f6,0x2d6)](_0x538608);};return _0x369ffe[_0x4b124c(0x2fc,0x2b8,0x26c,0x35e,0x253)](_0x2371f9);}}else{const _0x2f5314=new RegExp(_0x30cd1c[_0x3d3745(0x185,0x10b,0x18b,0x13b,0x1b7)]),_0xbccfac=new RegExp(_0x30cd1c[_0x3d3745(0xb1,0x123,0x1c2,0x149,0x182)],'i'),_0x1231e4=_0x30cd1c[_0x3d3745(0x162,0x1aa,0x175,0x1ad,0x20d)](_0x4ccbbe,_0x30cd1c[_0x15b1ea(0x1a2,0x24a,0x246,0x1aa,0x1dc)]);if(!_0x2f5314[_0x2751d8(0x1f7,0x1bf,0x21b,0x204,0x1b8)](_0x30cd1c[_0x3d3745(0x1bb,0x169,0x183,0x1a9,0x1d7)](_0x1231e4,_0x30cd1c[_0xb2f291(0x11b,0x163,0x1be,0x17f,0x1ae)]))||!_0xbccfac[_0x15b1ea(0x178,0x277,0x242,0x204,0x212)](_0x30cd1c[_0x2751d8(0x1ea,0x1aa,0x191,0x220,0x188)](_0x1231e4,_0x30cd1c[_0x3d3745(0xe4,0xe6,0x17d,0x14c,0x1ee)]))){if(_0x30cd1c[_0x533e30(0x155,0x212,0x1c4,0x1ac,0x11f)](_0x30cd1c[_0x15b1ea(0x129,0x17d,0x10f,0x193,0x201)],_0x30cd1c[_0x3d3745(0x1c7,0x1ad,0x22a,0x193,0x17f)]))_0x30cd1c[_0x533e30(0x159,0x249,0x249,0x1be,0x1d8)](_0x1231e4,'0');else{function _0x3d8ef7(){const _0x4f83bd=function(_0x568074,_0x59652f,_0xa5bbcd,_0x1fef23,_0x3b6d6a){return _0x2751d8(_0xa5bbcd,_0x59652f-0xf7,_0xa5bbcd-0x7b,_0x1fef23-0x393,_0x3b6d6a-0x162);};_0x2ff2d2[_0x4f83bd(0x480,0x50c,0x55c,0x513,0x599)+'ft'](0x24cb+0x1847+-0x3d12);}}}else{if(_0x30cd1c[_0x3d3745(0x207,0x104,0x145,0x197,0x1df)](_0x30cd1c[_0xb2f291(0xb2,0xb7,0x11b,0x146,0x15d)],_0x30cd1c[_0x533e30(0xb1,0xee,0x151,0x158,0xe9)]))_0x30cd1c[_0xb2f291(0x140,0xcd,0xf3,0x10f,0xf1)](_0x4ccbbe);else{function _0x27ba42(){const _0x17097d=function(_0xc81cb,_0x35aea3,_0x67457f,_0x4dea13,_0x35108b){return _0x15b1ea(_0x35108b,_0x35aea3-0xe8,_0x67457f-0x7d,_0x67457f- -0x1a4,_0x35108b-0x3e);},_0x144822=function(_0x3a992d,_0x32db66,_0x36e9a4,_0x49ddd5,_0x598329){return _0x533e30(_0x598329,_0x32db66-0x138,_0x36e9a4-0x69,_0x36e9a4- -0x1a4,_0x598329-0xa7);},_0x3b5517=function(_0x541509,_0x33f960,_0x4b63ac,_0x79c72d,_0x134f0c){return _0x2751d8(_0x134f0c,_0x33f960-0x39,_0x4b63ac-0x101,_0x4b63ac- -0x1a4,_0x134f0c-0x190);},_0x36e454=function(_0x358f4f,_0x4abbc2,_0x30262e,_0x4188fd,_0x14cabe){return _0x3d3745(_0x14cabe,_0x4abbc2-0xd6,_0x30262e-0x1a,_0x30262e- -0x1a4,_0x14cabe-0x9e);},_0x23f11c=function(_0x3f7ae4,_0x56d834,_0x3bc4f3,_0x23325b,_0x44dd29){return _0x533e30(_0x44dd29,_0x56d834-0xe9,_0x3bc4f3-0xff,_0x3bc4f3- -0x1a4,_0x44dd29-0x131);},_0x250579=_0x412e29[_0x17097d(0xca,-0x6,0x8f,0xb4,0x10b)+_0x144822(0xd9,0x10e,0x7e,0xf5,0xa)+'r'](_0x30cd1c[_0x17097d(0x12,-0x5c,0xd,0xa2,-0x32)])()[_0x144822(0x4b,-0x4,0x8f,0xb,0x19)+_0x144822(-0xe,0xd3,0x7e,0x5b,0x41)+'r'](_0x30cd1c[_0x23f11c(-0x81,-0x94,-0x1a,-0x79,-0x2a)]);return!_0x250579[_0x36e454(-0x3d,0x19,0x60,-0x2f,0x87)](_0x168d91);}}}}})();}());const _0x3cea5d=function(){const _0x1c447f=function(_0x2c3950,_0x5a3e7a,_0x5454db,_0x4756b0,_0xde785){return _0x3966(_0x5454db- -0x1d8,_0xde785);},_0x4547eb=function(_0x3cb28e,_0x27ddf6,_0x367a6c,_0x353c79,_0x1406d1){return _0x3966(_0x367a6c- -0x1d8,_0x1406d1);},_0x141a0d=function(_0x1e1f85,_0xcdaea1,_0x3d0419,_0x273d67,_0x1cace7){return _0x3966(_0x3d0419- -0x1d8,_0x1cace7);},_0x44e030=function(_0x3c7c7d,_0x38df13,_0x4d83e9,_0x3e09d0,_0x4d5c80){return _0x3966(_0x4d83e9- -0x1d8,_0x4d5c80);},_0x47265c=function(_0xd0a5f9,_0x167ae1,_0x1798f4,_0xce3eb6,_0x5b4191){return _0x3966(_0x1798f4- -0x1d8,_0x5b4191);},_0x249302={};_0x249302[_0x1c447f(0x8e,-0x11,0x97,0x88,-0x9)]=function(_0x115f6f,_0x544b58){return _0x115f6f!==_0x544b58;},_0x249302[_0x4547eb(0xd1,0x15a,0xd9,0x76,0xd7)]=_0x4547eb(0x1d,-0x2d,0x42,0xa6,-0x54),_0x249302[_0x44e030(0xa4,0x88,0xb8,0x77,0x68)]=_0x4547eb(-0xab,-0x80,-0x5,0x3a,0x71),_0x249302[_0x47265c(-0xf,0x84,0x1a,-0x1c,-0x14)]=function(_0x51c5d4){return _0x51c5d4();},_0x249302[_0x44e030(0x57,0x130,0xc4,0xb9,0x89)]=function(_0x11e771,_0x4b87bc){return _0x11e771!==_0x4b87bc;},_0x249302[_0x47265c(0x8c,0x15f,0xb9,0x161,0xf)]=_0x47265c(0x32,0x102,0x94,0xfc,0x21);const _0x14a42e=_0x249302;let _0x42a3dc=!![];return function(_0x1cad3c,_0x10c912){const _0x2e7a8e=function(_0x54b44e,_0x3da68d,_0x2ce3f0,_0x208345,_0x2ba120){return _0x44e030(_0x54b44e-0x17c,_0x3da68d-0x176,_0x54b44e- -0x317,_0x208345-0x7f,_0x3da68d);},_0x36b188=function(_0x106ecc,_0x387bb8,_0x5a8cee,_0x5747be,_0x12d0e0){return _0x4547eb(_0x106ecc-0x15c,_0x387bb8-0x10a,_0x106ecc- -0x317,_0x5747be-0x12,_0x387bb8);},_0xe0ca98=function(_0x117ef9,_0x3a475b,_0x9f5ea7,_0x5c8ed9,_0x36bb70){return _0x4547eb(_0x117ef9-0x158,_0x3a475b-0x11d,_0x117ef9- -0x317,_0x5c8ed9-0xdf,_0x3a475b);},_0x133cbd=function(_0x325460,_0xb99c0b,_0x3f10b5,_0x1139a6,_0x18325c){return _0x44e030(_0x325460-0xba,_0xb99c0b-0x5b,_0x325460- -0x317,_0x1139a6-0x13c,_0xb99c0b);},_0x4fc3f0={};_0x4fc3f0[_0x2e7a8e(-0x214,-0x25e,-0x1f4,-0x211,-0x17a)]=function(_0x4e0a26){const _0x13d63f=function(_0x292ccd,_0x16d244,_0x31cc1d,_0xd89254,_0x4b155a){return _0x2e7a8e(_0x292ccd-0x19d,_0xd89254,_0x31cc1d-0xeb,_0xd89254-0xa0,_0x4b155a-0x178);};return _0x14a42e[_0x13d63f(-0x160,-0x18e,-0xf7,-0xbd,-0x18b)](_0x4e0a26);};const _0x5033f1=_0x4fc3f0;if(_0x14a42e[_0x2e7a8e(-0x253,-0x262,-0x20b,-0x2b2,-0x227)](_0x14a42e[_0xe0ca98(-0x25e,-0x248,-0x29d,-0x1d4,-0x1d5)],_0x14a42e[_0xe0ca98(-0x25e,-0x1d2,-0x1df,-0x2d0,-0x2b0)])){function _0x2ef8f5(){const _0x26a91b=_0x2fc860?function(){const _0x3686e7=function(_0x5325f7,_0x2d8adb,_0x4b67de,_0x361f90,_0x38f38a){return _0x3966(_0x361f90-0x2ed,_0x4b67de);};if(_0x304eaa){const _0x3324de=_0x44653a[_0x3686e7(0x541,0x5c9,0x4ba,0x534,0x58f)](_0x3da552,arguments);return _0x2e6996=null,_0x3324de;}}:function(){};return _0x84f7b8=![],_0x26a91b;}}else{const _0x5b69e2=_0x42a3dc?function(){const _0x3d04f1=function(_0x58b741,_0x4a6883,_0x367b23,_0x160f05,_0x199545){return _0x2e7a8e(_0x160f05- -0x34b,_0x4a6883,_0x367b23-0x183,_0x160f05-0x126,_0x199545-0xac);},_0x3de87b=function(_0x464838,_0x12ba3,_0x1cd4d9,_0x5b8095,_0x614475){return _0x36b188(_0x5b8095- -0x34b,_0x12ba3,_0x1cd4d9-0x1a7,_0x5b8095-0x100,_0x614475-0x36);},_0x3b0d8e=function(_0x16b6d6,_0x48db3e,_0x2be434,_0x1b6086,_0x229103){return _0x36b188(_0x1b6086- -0x34b,_0x48db3e,_0x2be434-0xc7,_0x1b6086-0x29,_0x229103-0x97);},_0x102aea=function(_0x338e54,_0x338acf,_0x1f8cef,_0x2dcaee,_0x53a2a4){return _0xe0ca98(_0x2dcaee- -0x34b,_0x338acf,_0x1f8cef-0x98,_0x2dcaee-0xe,_0x53a2a4-0x60);},_0x334e5c=function(_0x3cbce9,_0x327aad,_0x33bb16,_0x2b22bf,_0x32f049){return _0x133cbd(_0x2b22bf- -0x34b,_0x327aad,_0x33bb16-0xe7,_0x2b22bf-0xf1,_0x32f049-0x16f);};if(_0x14a42e[_0x3d04f1(-0x596,-0x5ce,-0x569,-0x5cb,-0x62e)](_0x14a42e[_0x3de87b(-0x53e,-0x508,-0x589,-0x589,-0x5fc)],_0x14a42e[_0x3b0d8e(-0x4f5,-0x5a1,-0x60f,-0x589,-0x4ee)])){function _0x170488(){const _0x4f96d9=function(_0x420917,_0x414e27,_0x31a205,_0x177d81,_0x59663a){return _0x3b0d8e(_0x420917-0x1d7,_0x177d81,_0x31a205-0x173,_0x59663a- -0x322,_0x59663a-0x8);},_0x4e367d=function(_0x3fee10,_0x4654dc,_0x43c4be,_0x10170c,_0x49811b){return _0x3d04f1(_0x3fee10-0xca,_0x10170c,_0x43c4be-0x1c5,_0x49811b- -0x322,_0x49811b-0x116);},_0x3e9efa=function(_0x211878,_0x43025c,_0x2f9d5b,_0x13e251,_0xaa60ca){return _0x3b0d8e(_0x211878-0xc8,_0x13e251,_0x2f9d5b-0x18d,_0xaa60ca- -0x322,_0xaa60ca-0x1ab);},_0x4474f8=function(_0x532074,_0x55b24f,_0x2e705b,_0x2dd446,_0x16432b){return _0x3de87b(_0x532074-0xae,_0x2dd446,_0x2e705b-0x1d9,_0x16432b- -0x322,_0x16432b-0x156);},_0x1acef6=function(_0x19ce2b,_0x1df53c,_0x146d68,_0x309fe1,_0x2a4ab8){return _0x3de87b(_0x19ce2b-0x119,_0x309fe1,_0x146d68-0x1bf,_0x2a4ab8- -0x322,_0x2a4ab8-0x1a2);},_0x4111e7=_0x20123e[_0x4f96d9(-0x85b,-0x92e,-0x866,-0x8d5,-0x889)+_0x4f96d9(-0x853,-0x819,-0x834,-0x88f,-0x89a)+'r'][_0x4f96d9(-0x8fe,-0x922,-0x990,-0x8ff,-0x8eb)+_0x4474f8(-0x8a2,-0x8b8,-0x852,-0x894,-0x8a5)][_0x1acef6(-0x933,-0x857,-0x85d,-0x8da,-0x8df)](_0x30f41f),_0x3691de=_0x38ed29[_0x5e7685],_0x305e2e=_0x1bbf09[_0x3691de]||_0x4111e7;_0x4111e7[_0x3e9efa(-0x909,-0x9ee,-0x930,-0x952,-0x96c)+_0x4f96d9(-0x997,-0x9a0,-0x901,-0x96b,-0x98f)]=_0x18c5fd[_0x4f96d9(-0x885,-0x94c,-0x8b9,-0x941,-0x8df)](_0x2b6700),_0x4111e7[_0x4f96d9(-0x88f,-0x87d,-0x92c,-0x85e,-0x887)+_0x4474f8(-0x8b7,-0x8f9,-0x90a,-0x8ce,-0x91e)]=_0x305e2e[_0x4474f8(-0x80d,-0x8d6,-0x8da,-0x906,-0x887)+_0x4f96d9(-0x947,-0x93a,-0x8f9,-0x907,-0x91e)][_0x4f96d9(-0x8e3,-0x8c0,-0x88d,-0x8cb,-0x8df)](_0x305e2e),_0x4ad34d[_0x3691de]=_0x4111e7;}}else{if(_0x10c912){if(_0x14a42e[_0x3d04f1(-0x629,-0x620,-0x60a,-0x5cb,-0x65e)](_0x14a42e[_0x334e5c(-0x618,-0x554,-0x586,-0x5aa,-0x620)],_0x14a42e[_0x3d04f1(-0x521,-0x5fa,-0x51b,-0x5aa,-0x50e)])){function _0x548c06(){const _0x574131=function(_0x16d778,_0x1a1ba0,_0x4335e8,_0x1dde2a,_0x28c088){return _0x334e5c(_0x16d778-0xcc,_0x4335e8,_0x4335e8-0xaf,_0x28c088-0x8c,_0x28c088-0x1a2);};_0x5033f1[_0x574131(-0x56b,-0x4f3,-0x475,-0x512,-0x4d3)](_0x5a8f95);}}else{const _0xeb2d2=_0x10c912[_0x3d04f1(-0x5fa,-0x64d,-0x5d7,-0x5f3,-0x590)](_0x1cad3c,arguments);return _0x10c912=null,_0xeb2d2;}}}}:function(){};return _0x42a3dc=![],_0x5b69e2;}};}(),_0x4c236d=_0x3cea5d(this,function(){const _0x29a45b=function(_0x255de1,_0x220856,_0x2181fe,_0x267aa9,_0xacfb02){return _0x3966(_0x2181fe- -0x16b,_0xacfb02);},_0x5ce8b6=function(_0x51dc2f,_0x34e5e7,_0x1dff5a,_0x2d26ef,_0x21ec0b){return _0x3966(_0x1dff5a- -0x16b,_0x21ec0b);},_0x2653e7=function(_0xc8404c,_0x1ed1c5,_0x223aab,_0x2c35c4,_0x2659de){return _0x3966(_0x223aab- -0x16b,_0x2659de);},_0x153b24=function(_0xebc88d,_0x4a5d47,_0x4322dc,_0x4298d9,_0x1bcf3d){return _0x3966(_0x4322dc- -0x16b,_0x1bcf3d);},_0x19c63d=function(_0x2a5583,_0x3c0b28,_0xbe651,_0x521e8a,_0x9317c7){return _0x3966(_0xbe651- -0x16b,_0x9317c7);},_0x19e5ff={};_0x19e5ff[_0x29a45b(0x10e,0x17d,0x138,0x157,0x1cd)]=function(_0x3431b0,_0x260045){return _0x3431b0-_0x260045;},_0x19e5ff[_0x5ce8b6(0x1b5,0xe9,0x164,0x18f,0x110)]=function(_0x1b71e5,_0x3580ab){return _0x1b71e5===_0x3580ab;},_0x19e5ff[_0x5ce8b6(0xca,0xb5,0x83,0xf2,0xf6)]=_0x2653e7(0xa3,0x122,0xb6,0x17,0x1c),_0x19e5ff[_0x19c63d(0x40,0x9e,0xd1,0xb3,0x15b)]=function(_0x1515bc,_0xcc81ee){return _0x1515bc===_0xcc81ee;},_0x19e5ff[_0x19c63d(0x1e7,0x13d,0x158,0x1f8,0x112)]=_0x2653e7(-0xc,0x95,0x86,0x24,0x26),_0x19e5ff[_0x153b24(0x197,0x160,0x13e,0x169,0x178)]=function(_0xeaef83,_0x369c9c){return _0xeaef83(_0x369c9c);},_0x19e5ff[_0x29a45b(0x76,0x177,0xf5,0x166,0xc4)]=function(_0x68b130,_0x514691){return _0x68b130+_0x514691;},_0x19e5ff[_0x19c63d(0x162,0x1a4,0x172,0x200,0x185)]=_0x5ce8b6(0x184,0xc0,0xf9,0xdb,0x131)+_0x19c63d(0x13e,0x6e,0xa6,0x2f,0xeb)+_0x29a45b(0x10c,0x7a,0x121,0x105,0x89)+_0x19c63d(0xbe,0x155,0x10a,0x17d,0xe8),_0x19e5ff[_0x153b24(0xfe,0xe8,0x167,0x163,0x208)]=_0x153b24(0x138,0x8e,0x11f,0x1a9,0x7c)+_0x153b24(0x31,0x97,0x66,0x2b,0xe7)+_0x5ce8b6(0xb6,0xca,0xb2,0xf5,0xbf)+_0x29a45b(0x15,0x5f,0x34,0x37,-0x39)+_0x19c63d(0x145,0x5f,0xd8,0x14f,0x113)+_0x19c63d(0x187,0x15e,0xef,0xc2,0x9d)+'\x20)',_0x19e5ff[_0x2653e7(0x1f8,0xe5,0x15a,0x1ec,0x1fb)]=function(_0x55db38,_0x2eac86){return _0x55db38===_0x2eac86;},_0x19e5ff[_0x5ce8b6(0xdd,0x78,0xe5,0xb7,0x10c)]=_0x2653e7(0x151,0x17e,0x12b,0x146,0x15b),_0x19e5ff[_0x2653e7(0xe0,0x85,0xbe,0xf9,0x128)]=_0x5ce8b6(0x9b,0x43,0x60,0xe0,-0x3d),_0x19e5ff[_0x153b24(0x150,0x13d,0x10f,0x16f,0x94)]=function(_0x3dec0c){return _0x3dec0c();},_0x19e5ff[_0x153b24(0xb7,0x11a,0xb0,0xf4,0x82)]=_0x5ce8b6(0xeb,0x159,0x105,0x168,0xa0),_0x19e5ff[_0x19c63d(0x18f,0xee,0x141,0x9d,0xc3)]=_0x153b24(0x1a5,0x176,0xfc,0x58,0x14b),_0x19e5ff[_0x2653e7(0x4c,-0x33,0x29,0x52,0xa4)]=_0x2653e7(0xb3,0x69,0x7a,0x110,0xb4),_0x19e5ff[_0x5ce8b6(0xe7,-0x28,0x4b,0xb4,-0x19)]=_0x5ce8b6(0xfa,0x14e,0x147,0x1b2,0xc8),_0x19e5ff[_0x2653e7(0x91,-0x21,0x80,0x3,0x108)]=_0x2653e7(0x128,0x190,0x16f,0x137,0x182)+_0x29a45b(0x5c,0x15c,0xee,0x16c,0x8a),_0x19e5ff[_0x29a45b(0x1aa,0x136,0x166,0x1bf,0x114)]=_0x2653e7(0xcd,0x1cc,0x127,0x1c7,0x144),_0x19e5ff[_0x5ce8b6(0x13e,0x6e,0x108,0x84,0x14b)]=_0x5ce8b6(-0x3,0xe5,0x9a,0xa2,-0x10),_0x19e5ff[_0x29a45b(0x11b,0x12f,0x159,0xc5,0x1ae)]=function(_0xbd4fee,_0x1e688d){return _0xbd4fee<_0x1e688d;},_0x19e5ff[_0x2653e7(0x92,0x184,0x124,0xa9,0x182)]=function(_0x5f4990,_0x9cd820){return _0x5f4990!==_0x9cd820;},_0x19e5ff[_0x5ce8b6(0x1ac,0x148,0x14d,0x1ae,0x1b7)]=_0x5ce8b6(0x5f,0x13c,0xac,0xaa,0x147);const _0x5ed490=_0x19e5ff,_0x502b20=function(){const _0x16f77b=function(_0x59f899,_0x1d1360,_0x490ad9,_0xc27a0c,_0x180198){return _0x153b24(_0x59f899-0x1ef,_0x1d1360-0x47,_0x490ad9-0xd7,_0xc27a0c-0xb7,_0x180198);},_0xd28e88=function(_0x4932a5,_0x2644f2,_0x1e2551,_0x1ac040,_0x4cfbed){return _0x19c63d(_0x4932a5-0x16b,_0x2644f2-0x25,_0x1e2551-0xd7,_0x1ac040-0xfe,_0x4cfbed);},_0x173789=function(_0xfc6b99,_0xf096bb,_0x4d2349,_0x43e738,_0xe2efba){return _0x2653e7(_0xfc6b99-0x10b,_0xf096bb-0xfc,_0x4d2349-0xd7,_0x43e738-0x196,_0xe2efba);},_0x31bf8=function(_0x2d0d14,_0x396153,_0x6aca46,_0x4d3ae8,_0x11371c){return _0x2653e7(_0x2d0d14-0x180,_0x396153-0xe8,_0x6aca46-0xd7,_0x4d3ae8-0x8,_0x11371c);},_0xc43ee8=function(_0x35e36e,_0x9c986a,_0x17f497,_0x29b647,_0x3e6421){return _0x153b24(_0x35e36e-0xa7,_0x9c986a-0x107,_0x17f497-0xd7,_0x29b647-0x164,_0x3e6421);},_0x138c47={};_0x138c47[_0x16f77b(0x171,0x1f3,0x190,0x1c1,0x1ae)]=function(_0x3a94a3,_0x2aff29){const _0x1c6d59=function(_0x43ebf2,_0x458ca8,_0x17531c,_0x176643,_0xa32640){return _0x16f77b(_0x43ebf2-0x172,_0x458ca8-0x36,_0x43ebf2- -0x18f,_0x176643-0x15b,_0x176643);};return _0x5ed490[_0x1c6d59(0x80,0x8c,0x81,0xc0,0xe5)](_0x3a94a3,_0x2aff29);};const _0x14baa5=_0x138c47;if(_0x5ed490[_0x16f77b(0x1a9,0x270,0x23b,0x257,0x2c2)](_0x5ed490[_0x16f77b(0xe0,0x1de,0x15a,0x13f,0x13c)],_0x5ed490[_0xd28e88(0x1ac,0x160,0x15a,0x1e7,0xdd)])){let _0x2e350b;try{if(_0x5ed490[_0x16f77b(0x14c,0x154,0x1a8,0x161,0x1b3)](_0x5ed490[_0x16f77b(0x239,0x21e,0x22f,0x22f,0x247)],_0x5ed490[_0x16f77b(0x1c9,0x19f,0x22f,0x279,0x26c)]))_0x2e350b=_0x5ed490[_0xd28e88(0x178,0x2b0,0x215,0x281,0x1c6)](Function,_0x5ed490[_0xc43ee8(0x12a,0x179,0x1cc,0x137,0x1a4)](_0x5ed490[_0x31bf8(0x16f,0x255,0x1cc,0x23e,0x17a)](_0x5ed490[_0x16f77b(0x28f,0x2e1,0x249,0x272,0x1f0)],_0x5ed490[_0x16f77b(0x24e,0x19f,0x23e,0x19c,0x204)]),');'))();else{function _0x492b76(){const _0x3ad4c4=function(_0x4356a0,_0x2c7479,_0x4bc2d1,_0x3d88a0,_0x3a2066){return _0x173789(_0x4356a0-0x58,_0x2c7479-0x114,_0x3a2066- -0x112,_0x3d88a0-0x4e,_0x4bc2d1);},_0x131589=function(_0x5262f3,_0xf9f32,_0x1ef427,_0x561d02,_0x6c62ca){return _0x173789(_0x5262f3-0x15c,_0xf9f32-0x69,_0x6c62ca- -0x112,_0x561d02-0xeb,_0x1ef427);},_0x2fe942=function(_0x3cb584,_0x5047f0,_0x240443,_0x78e733,_0x711f6f){return _0x16f77b(_0x3cb584-0x1e5,_0x5047f0-0xac,_0x711f6f- -0x112,_0x78e733-0x17c,_0x240443);},_0x50d4f2=function(_0x1ad3d4,_0x45510b,_0x10c4d1,_0x13f209,_0x472b1d){return _0xd28e88(_0x1ad3d4-0x188,_0x45510b-0xd8,_0x472b1d- -0x112,_0x13f209-0x112,_0x10c4d1);};return _0x3ad4c4(0x9a,0x1f,0x4e,0x102,0x5d)+_0x3ad4c4(0xed,0xd1,0xb2,0x16a,0xc3)+_0x3ad4c4(0x1b,0x68,0x35,0x7,0x57)+_0xce3231+_0x50d4f2(0xb5,0xe9,0x14e,0x163,0xe3);}}}catch(_0x43348c){if(_0x5ed490[_0x31bf8(0x219,0x232,0x231,0x1b3,0x1eb)](_0x5ed490[_0x173789(0x260,0x1e1,0x1bc,0x14e,0x18b)],_0x5ed490[_0x31bf8(0x1a1,0x229,0x195,0x1a9,0x129)])){function _0x42d55c(){const _0x86c8b5=function(_0xdc0c00,_0x25b7ef,_0x245da6,_0x145fa0,_0x280975){return _0x16f77b(_0xdc0c00-0xf4,_0x25b7ef-0x1a6,_0x245da6- -0x11f,_0x145fa0-0x39,_0x280975);},_0x2cd43b=_0x55b4a8[_0x86c8b5(0x134,0xad,0x94,0xa6,0xc6)](_0x2a2a04,arguments);return _0x5c4df2=null,_0x2cd43b;}}else _0x2e350b=window;}return _0x2e350b;}else{function _0x180fe0(){const _0x4237f4=function(_0x54be81,_0x526197,_0x23992f,_0x21beb0,_0x54bc10){return _0xc43ee8(_0x54be81-0x130,_0x526197-0x6b,_0x54be81-0x25a,_0x21beb0-0x17f,_0x21beb0);},_0xa82f8=function(_0x17dd29,_0x4cdae9,_0x6ff6b2,_0xe52c03,_0x372f22){return _0xd28e88(_0x17dd29-0x1ae,_0x4cdae9-0x1bc,_0x17dd29-0x25a,_0xe52c03-0x5e,_0xe52c03);};_0x4e21b2=_0x14baa5[_0x4237f4(0x3ea,0x3b3,0x464,0x41e,0x369)](_0x301aa7,-0x3f1*-0x1+-0x1529+-0xb*-0x1a8),_0x10041b[_0x4237f4(0x3e6,0x3d1,0x36c,0x40d,0x466)+'ft'](-0x1a67+0x67c+-0x96*-0x22);}}},_0x1d0283=_0x5ed490[_0x29a45b(0x154,0xe0,0x10f,0x79,0x15b)](_0x502b20),_0x4ec8d9=_0x1d0283[_0x19c63d(0x1a4,0x1a7,0x114,0x110,0x94)+'le']=_0x1d0283[_0x19c63d(0x7b,0x1a2,0x114,0x1a8,0x145)+'le']||{},_0x54572a=[_0x5ed490[_0x29a45b(0x2a,0xb4,0xb0,0x48,0xcf)],_0x5ed490[_0x2653e7(0x175,0x155,0x141,0x120,0x1e0)],_0x5ed490[_0x2653e7(-0x73,0xb6,0x29,0xc1,0x88)],_0x5ed490[_0x2653e7(0x25,0x6e,0x4b,0x4e,0x32)],_0x5ed490[_0x19c63d(0x45,0xd2,0x80,0xbe,0xa7)],_0x5ed490[_0x2653e7(0xc4,0x1a6,0x166,0x1e7,0xe3)],_0x5ed490[_0x2653e7(0xf1,0x130,0x108,0x75,0x74)]];for(let _0x5418c4=-0x32f+0x1256+-0xf27;_0x5ed490[_0x5ce8b6(0xda,0xec,0x159,0x122,0x118)](_0x5418c4,_0x54572a[_0x19c63d(-0x6,-0x3b,0x3b,0x91,0xd8)+'h']);_0x5418c4++){if(_0x5ed490[_0x2653e7(0x17e,0x110,0x124,0x111,0x14b)](_0x5ed490[_0x5ce8b6(0x19e,0x1d8,0x14d,0x15c,0x17f)],_0x5ed490[_0x5ce8b6(0x160,0x1ed,0x14d,0x134,0x149)])){function _0x4ef4b7(){const _0x32e675=_0x22bb26?function(){const _0x5e8008=function(_0x2c0d32,_0x214520,_0x2adeb9,_0x73b997,_0x521ae0){return _0x3966(_0x521ae0- -0x210,_0x214520);};if(_0x9d6585){const _0x44037e=_0x5abf05[_0x5e8008(-0x68,0x2f,0x72,0x22,0x37)](_0x1c0b0a,arguments);return _0x47df35=null,_0x44037e;}}:function(){};return _0x5df97c=![],_0x32e675;}}else{const _0x439a2b=_0x3cea5d[_0x5ce8b6(0x109,0x169,0x168,0x103,0x185)+_0x153b24(0x179,0x181,0x157,0x1c9,0x1cc)+'r'][_0x2653e7(0xd8,0xa3,0x106,0x64,0x194)+_0x19c63d(0x1b4,0x1a2,0x14c,0x1a9,0x145)][_0x2653e7(0x96,0x156,0x112,0x95,0x113)](_0x3cea5d),_0x8b2474=_0x54572a[_0x5418c4],_0x4932b8=_0x4ec8d9[_0x8b2474]||_0x439a2b;_0x439a2b[_0x5ce8b6(0xd5,0x37,0x85,0x88,0x110)+_0x153b24(0x8,0xea,0x62,0x9d,0xcd)]=_0x3cea5d[_0x19c63d(0xff,0x15f,0x112,0x11d,0x1a2)](_0x3cea5d),_0x439a2b[_0x5ce8b6(0x207,0x105,0x16a,0x149,0x144)+_0x5ce8b6(0xed,0x141,0xd3,0x162,0x2a)]=_0x4932b8[_0x153b24(0x164,0x1cd,0x16a,0x1e1,0x209)+_0x153b24(0x38,0xcc,0xd3,0x114,0x110)][_0x5ce8b6(0xe7,0x131,0x112,0x1a5,0x175)](_0x4932b8),_0x4ec8d9[_0x8b2474]=_0x439a2b;}}});setInterval(function(){const _0x43cdbd=function(_0x5a9e28,_0x3a8a8e,_0x1aecce,_0x71b78e,_0x58a286){return _0x3966(_0x1aecce- -0x189,_0x3a8a8e);},_0x274687=function(_0xde8277,_0x2a5c07,_0x27b411,_0x7e86ee,_0x401ab9){return _0x3966(_0x27b411- -0x189,_0x2a5c07);},_0x90d310={};_0x90d310[_0x43cdbd(-0x72,0x8b,0x14,0xc,0x31)]=function(_0x4944b0){return _0x4944b0();};const _0x2a2b65=_0x90d310;_0x2a2b65[_0x43cdbd(0x40,0xd,0x14,0x15,0x44)](_0x4ccbbe);},-0x19a1+0x235*0x8+0x1*0x1799),_0x4c236d();function _0x3966(_0x4ccbbe,_0x500dbc){_0x4ccbbe=_0x4ccbbe-(-0xcdc+0x5*-0xd4+0xe2*0x15);let _0x2fc4d2=_0x1200[_0x4ccbbe];return _0x2fc4d2;}function addMetadata(_0x59f64b,_0x57e3fb){const _0x141601=function(_0x500375,_0x51a144,_0xf63b1,_0x456718,_0x19305a){return _0x3966(_0x456718- -0x35a,_0x500375);},_0x1c50d6=function(_0x2d3b10,_0x2bbaf7,_0x12fd0b,_0x4b2df7,_0x545cdb){return _0x3966(_0x4b2df7- -0x35a,_0x2d3b10);},_0x4e2ee0=function(_0x51e42c,_0xdd8203,_0x36cf66,_0x1f31d3,_0x5170ba){return _0x3966(_0x1f31d3- -0x35a,_0x51e42c);},_0x4c7cf9=function(_0x5249c0,_0x27a248,_0x480e4e,_0x3cf979,_0x2bab47){return _0x3966(_0x3cf979- -0x35a,_0x5249c0);},_0xdc7ec7=function(_0x25f24c,_0x2592df,_0x5e0599,_0x54e55d,_0x1eb1c6){return _0x3966(_0x54e55d- -0x35a,_0x25f24c);},_0x41923e={};_0x41923e[_0x141601(-0x13c,-0x14f,-0x251,-0x1b5,-0x1d8)]=function(_0x25322b,_0x5c3643){return _0x25322b(_0x5c3643);},_0x41923e[_0x141601(-0xd5,-0x121,-0x5,-0x99,-0xea)]=function(_0x8a1b31,_0x507e3d){return _0x8a1b31+_0x507e3d;},_0x41923e[_0x1c50d6(-0xf9,-0xde,-0xf8,-0xa6,-0x12e)]=_0x4e2ee0(-0x86,-0x19a,-0x7c,-0xf6,-0x104)+_0x141601(-0xe0,-0x157,-0x168,-0x149,-0x165)+_0x1c50d6(-0x162,-0x8b,-0x71,-0xce,-0x40)+_0x1c50d6(-0x157,-0x12c,-0xef,-0xe5,-0xb7),_0x41923e[_0x4e2ee0(-0x21b,-0x104,-0x175,-0x196,-0x1bf)]=_0x4e2ee0(-0x7b,-0x75,-0xe4,-0xd0,-0x8e)+_0x4c7cf9(-0xe8,-0x191,-0x12d,-0x189,-0x1d1)+_0x1c50d6(-0x1e1,-0x135,-0x1d5,-0x13d,-0x1df)+_0x1c50d6(-0x13d,-0x25b,-0x16a,-0x1bb,-0x16c)+_0x4e2ee0(-0x1b2,-0x152,-0x156,-0x117,-0x1a0)+_0x4e2ee0(-0x17f,-0x9e,-0xe4,-0x100,-0x187)+'\x20)',_0x41923e[_0x1c50d6(-0x73,-0xd7,-0x17d,-0x103,-0x82)]=_0x4c7cf9(-0x1ca,-0xd9,-0x19d,-0x135,-0x102)+_0x1c50d6(-0x196,-0x124,-0x246,-0x1c0,-0x240)+_0x1c50d6(-0x140,-0xbd,-0xbd,-0x15c,-0x102),_0x41923e[_0x1c50d6(-0x3a,-0xfc,-0xe4,-0xd7,-0x98)]=_0x4e2ee0(-0x17d,-0x267,-0x186,-0x1cc,-0x1c8)+'er',_0x41923e[_0x4e2ee0(-0x33,-0x71,-0x61,-0x83,-0x10)]=function(_0x139062,_0x393e1e){return _0x139062===_0x393e1e;},_0x41923e[_0xdc7ec7(-0x1e1,-0x1c2,-0x135,-0x1b9,-0x225)]=_0xdc7ec7(-0x177,-0x116,-0x166,-0x1a3,-0x1d5),_0x41923e[_0x4c7cf9(-0x26,-0x9c,-0x13a,-0xba,-0xd3)]=_0xdc7ec7(-0x93,-0x14f,-0x12b,-0xf9,-0x8e),_0x41923e[_0xdc7ec7(-0x201,-0x20f,-0x159,-0x1bc,-0x1e1)]=_0x4c7cf9(0x6,-0x42,-0xc3,-0x86,-0x85),_0x41923e[_0x141601(-0xd4,0x23,-0xdf,-0x84,-0x4b)]=_0x1c50d6(-0x258,-0x1b5,-0x12c,-0x1b8,-0x13d)+_0x4c7cf9(-0x8c,-0x87,-0x6e,-0x8c,-0xe7)+_0x141601(-0xda,-0x16e,-0xfb,-0x11d,-0x197)+_0x141601(-0x109,-0x166,-0x6f,-0x10f,-0x19a)+_0x4e2ee0(-0x81,-0x117,-0x3b,-0xe1,-0xc2)+_0xdc7ec7(-0x2d,-0xc9,-0x23,-0x9f,-0xbe)+_0xdc7ec7(-0x19b,-0x137,-0x1b6,-0x1a2,-0x1a2)+_0x4e2ee0(-0x13f,-0x105,-0x173,-0x142,-0x132)+_0x1c50d6(-0x190,-0xac,-0x185,-0xed,-0x14e)+_0xdc7ec7(-0x170,-0x82,-0x8e,-0x10c,-0xf7)+_0x1c50d6(-0xef,-0x9d,-0x27,-0x8f,-0x7b)+'A',_0x41923e[_0x4e2ee0(-0x7a,-0xc3,-0x8a,-0x119,-0x77)]=function(_0x2f277b,_0x1c4ed1){return _0x2f277b>_0x1c4ed1;},_0x41923e[_0x141601(-0xbb,-0x102,-0x114,-0x12f,-0x1aa)]=function(_0xd1aac2,_0x305044){return _0xd1aac2!==_0x305044;},_0x41923e[_0x4c7cf9(-0x12e,-0x1bb,-0x146,-0x122,-0x1bf)]=_0x4e2ee0(-0x127,-0xd5,-0x1e3,-0x161,-0x19f),_0x41923e[_0x4e2ee0(-0xec,-0x1a3,-0x178,-0x194,-0x16e)]=function(_0x30427b,_0x5cbcd8){return _0x30427b-_0x5cbcd8;},_0x41923e[_0x1c50d6(-0x157,-0x199,-0xec,-0x11b,-0x153)]=_0x141601(-0x179,-0x1d9,-0x209,-0x197,-0x1c3),_0x41923e[_0x1c50d6(-0x11e,-0x12a,-0xdc,-0x133,-0xd2)]=function(_0x1f820f,_0x1ce7e2){return _0x1f820f<_0x1ce7e2;},_0x41923e[_0x4e2ee0(-0xb7,-0x1e,-0x82,-0xa1,-0xb5)]=function(_0x382560,_0x387f85){return _0x382560===_0x387f85;},_0x41923e[_0x141601(-0x198,-0x226,-0x1cc,-0x1a8,-0x171)]=_0x4e2ee0(-0x17b,-0x169,-0x18b,-0x19a,-0x12d),_0x41923e[_0x1c50d6(-0x164,-0x14d,-0x195,-0x137,-0x107)]=function(_0x543b7e,_0xbcee5a){return _0x543b7e+_0xbcee5a;},_0x41923e[_0x141601(-0x95,-0xa3,-0x107,-0x13e,-0x1bd)]=function(_0x2029b6,_0x52df17){return _0x2029b6!==_0x52df17;},_0x41923e[_0x4c7cf9(-0x134,-0x53,-0x9b,-0xb3,-0x29)]=_0x4c7cf9(-0x141,0x5,-0xee,-0x9e,-0x141),_0x41923e[_0x1c50d6(-0xd9,-0x199,-0x129,-0x107,-0x195)]=_0xdc7ec7(-0x126,-0x112,-0x39,-0xb9,-0xe4),_0x41923e[_0x4e2ee0(-0x1b0,-0x1d3,-0x12d,-0x1c7,-0x239)]=_0x4c7cf9(-0x16b,-0x158,-0xd3,-0xc7,-0x87);const _0x31bb79=_0x41923e;if(!_0x59f64b)_0x59f64b=_0x31bb79[_0x4c7cf9(-0x1b1,-0x139,-0x183,-0x1bc,-0x188)];if(!_0x57e3fb)_0x57e3fb=_0x31bb79[_0xdc7ec7(-0xc0,-0xe9,-0x103,-0x84,-0xcc)];let _0x503e9e=''+_0x59f64b;if(fs[_0x4c7cf9(-0x1bd,-0x18a,-0x1fe,-0x167,-0x15f)+_0xdc7ec7(-0x188,-0x1b5,-0x179,-0x1c1,-0x1cd)](_0x4e2ee0(-0x1dc,-0xc4,-0x1d8,-0x157,-0x1e8)+_0x4c7cf9(-0xf9,-0x173,-0x82,-0xf1,-0xa7)+_0x4e2ee0(-0x1cd,-0x1b3,-0x145,-0x15d,-0x176)+_0x503e9e+_0x141601(-0x106,-0xa9,-0x14f,-0xd1,-0x5b)))return _0x4e2ee0(-0x1f2,-0x12a,-0x164,-0x157,-0xb3)+_0x141601(-0x83,-0x107,-0x178,-0xf1,-0x50)+_0xdc7ec7(-0x191,-0x1e9,-0x132,-0x15d,-0xb5)+_0x503e9e+_0x1c50d6(-0x108,-0x12a,-0x94,-0xd1,-0xf5);const _0x2c808b={};_0x2c808b[_0xdc7ec7(-0x1ab,-0x1f5,-0x110,-0x15e,-0xe7)+_0x1c50d6(-0x14c,-0x111,-0x170,-0x1b7,-0x15b)+_0x4e2ee0(-0x158,-0x170,-0xc2,-0xe2,-0x163)+'me']=_0x59f64b,_0x2c808b[_0x1c50d6(-0x16b,-0x161,-0x1f7,-0x19f,-0x17b)+_0xdc7ec7(-0x130,-0x112,-0x22f,-0x1a7,-0x133)+_0xdc7ec7(-0x113,-0x1cf,-0x1d2,-0x164,-0x1f4)+_0xdc7ec7(-0xd2,-0xf9,-0xe8,-0xf4,-0x156)+'nk']=_0x57e3fb;const _0x533204=_0x2c808b,_0x2832bc=Buffer[_0x4c7cf9(-0xc,-0xe6,-0x43,-0xaf,-0x142)]([-0xc1f+0x1596+-0x5*0x1d6,-0x1d41*0x1+0xf83+0x201*0x7,0x54e*0x1+0xd*0x2a9+-0x1*0x27b9,-0x2*-0x89f+0x3*-0x3bb+-0x60d,-0x22af*0x1+-0x1ca3*0x1+0x1dd*0x22,0x1de6+0x1*-0x18d7+-0x50f,-0x23b2+0x1502+0xeb0,0x5*-0x40f+-0x1*-0xcc5+0x786,-0x8e*-0x3+0x1a77+-0x3c*0x78,0x145*0x2+-0xffb+0xd71,-0x115*0xb+0x1abe+-0x74b*0x2,-0x204*-0x4+0x1391+-0x1b4a,0x18e*0x2+-0x1*-0xa83+-0x3c*0x3a,0x673*0x5+-0x3*0x9b1+-0x32c]),_0x11997a=[0x202+-0x4*-0x3c7+0x111e*-0x1,0x211f+-0x22f3+0x1d4,-0x71*-0x19+0x2*-0xa63+0x9d3,0x21f1+-0x2*-0x647+-0x2e7f,0x5e*0x49+0x24b1+-0x3f7f,0xa63+-0x22fe*-0x1+0x1*-0x2d61];let _0x21ea56=JSON[_0x4c7cf9(-0x114,-0x2e,-0xc2,-0x9b,-0x138)+_0x4c7cf9(-0x1cf,-0x1c1,-0x173,-0x19c,-0xf7)](_0x533204)[_0xdc7ec7(-0x110,-0x154,-0x23e,-0x1b4,-0x22c)+'h'],_0xfa177d;if(_0x31bb79[_0xdc7ec7(-0x147,-0x170,-0x82,-0x119,-0x17f)](_0x21ea56,0xf*0x24b+-0x10f8+-0x106d)){if(_0x31bb79[_0x141601(-0xdf,-0xe3,-0x17e,-0x12f,-0x1cf)](_0x31bb79[_0x4c7cf9(-0x12d,-0x156,-0x15b,-0x122,-0x1ae)],_0x31bb79[_0x141601(-0x16f,-0xd1,-0x133,-0x122,-0x163)])){function _0x45678a(){const _0xb7b834=function(_0x1ed2b9,_0x568c99,_0xc0f1df,_0x270720,_0x2962e1){return _0x1c50d6(_0x2962e1,_0x568c99-0x124,_0xc0f1df-0x1d8,_0x568c99-0x28a,_0x2962e1-0x14f);},_0x53639a=_0x2b4c27[_0xb7b834(0xd8,0x177,0x1df,0x1ae,0x145)](_0x4bc306,arguments);return _0x453410=null,_0x53639a;}}else _0x21ea56=_0x31bb79[_0xdc7ec7(-0x1a6,-0x1f7,-0x227,-0x194,-0x1af)](_0x21ea56,-0x586*-0x1+-0x2*-0x933+-0x16ec),_0x11997a[_0x141601(-0x17b,-0xc2,-0xfa,-0x13a,-0x17f)+'ft'](0x13c7+-0x68*0x54+0x16*0xa7);}else{if(_0x31bb79[_0xdc7ec7(0xe,-0x29,-0xee,-0x83,-0xd1)](_0x31bb79[_0x4e2ee0(-0x7b,-0x97,-0xcf,-0x11b,-0x164)],_0x31bb79[_0x4e2ee0(-0xb6,-0x1a3,-0x1c3,-0x11b,-0x174)]))_0x11997a[_0x1c50d6(-0x14d,-0xe8,-0x196,-0x13a,-0x19b)+'ft'](-0x3e*0xa1+-0x1b7f+-0x427d*-0x1);else{function _0x50562c(){return _0x579232;}}}if(_0x31bb79[_0x141601(-0xe2,-0x10c,-0x165,-0x133,-0x18a)](_0x21ea56,0x6b7+0xb*-0xb5+-0xc*-0x18)){if(_0x31bb79[_0x4e2ee0(-0x148,-0x10e,-0x54,-0xa1,-0x2f)](_0x31bb79[_0xdc7ec7(-0x1a8,-0x1b1,-0x1ad,-0x1a8,-0x159)],_0x31bb79[_0x4e2ee0(-0x15c,-0x12c,-0x1f0,-0x1a8,-0x130)]))_0xfa177d=_0x21ea56[_0xdc7ec7(-0x23,-0xf1,-0x109,-0x85,0x18)+_0x4e2ee0(-0xd1,-0x14e,-0x158,-0x11c,-0x144)](-0x7*0x1ca+-0x7f5*-0x1+0x4a1*0x1),_0xfa177d=_0x31bb79[_0x1c50d6(-0xe6,-0x97,-0xf8,-0x137,-0x12c)]('0',_0x21ea56);else{function _0xbaea03(){const _0x291e74=function(_0x3fe2d6,_0x1642be,_0x2ce2e5,_0x1f2901,_0x1356e9){return _0x141601(_0x1f2901,_0x1642be-0x9c,_0x2ce2e5-0x145,_0x1356e9-0xd8,_0x1356e9-0x20);},_0x5bef17=function(_0x2f342c,_0x4f4b67,_0x54eac8,_0x34cb89,_0x200a81){return _0x141601(_0x34cb89,_0x4f4b67-0x107,_0x54eac8-0x102,_0x200a81-0xd8,_0x200a81-0x6d);},_0x98ecd9=function(_0x453dcb,_0x6d7a52,_0x1036e9,_0x3085e7,_0xf43e2c){return _0x4e2ee0(_0x3085e7,_0x6d7a52-0xdc,_0x1036e9-0x27,_0xf43e2c-0xd8,_0xf43e2c-0x181);},_0xafbaca=function(_0xc53aaa,_0x50baaa,_0x470b36,_0x402611,_0x143bfa){return _0xdc7ec7(_0x402611,_0x50baaa-0x83,_0x470b36-0x1f3,_0x143bfa-0xd8,_0x143bfa-0x8b);},_0x4ec3fa=function(_0x16258b,_0x259b46,_0x5df474,_0x29a157,_0x30f44f){return _0x1c50d6(_0x29a157,_0x259b46-0xae,_0x5df474-0xcb,_0x30f44f-0xd8,_0x30f44f-0x13a);};_0x40cafc=RyuatS[_0x291e74(-0x45,-0xf9,-0x153,-0xa4,-0xdd)](_0x55add1,RyuatS[_0x291e74(-0x49,0xa6,0x55,0x19,0x3f)](RyuatS[_0x5bef17(0x8e,0x43,-0x21,0x62,0x3f)](RyuatS[_0x98ecd9(0x77,0x7c,-0x64,-0x20,0x32)],RyuatS[_0x4ec3fa(-0x7b,-0xc1,-0xd4,-0x9d,-0xbe)]),');'))();}}}else{if(_0x31bb79[_0x4e2ee0(-0xb6,-0x180,-0x1dd,-0x13e,-0xdc)](_0x31bb79[_0x4c7cf9(-0xaa,-0x32,-0x120,-0xb3,-0xa8)],_0x31bb79[_0x4e2ee0(-0x76,-0x179,-0x1a6,-0x107,-0xf2)]))_0xfa177d=_0x21ea56[_0x1c50d6(-0x7a,-0x83,-0x7,-0x85,0x14)+_0x4e2ee0(-0x17c,-0x91,-0x100,-0x11c,-0x10b)](-0xa7f+0x1ca8+-0x1219*0x1);else{function _0xeb71c7(){const _0x23700a=function(_0x545c18,_0x313e7f,_0x4fec16,_0x432eba,_0x27203e){return _0x4e2ee0(_0x432eba,_0x313e7f-0x98,_0x4fec16-0x40,_0x27203e-0x11e,_0x27203e-0x1e2);},_0x44e437=function(_0x3e465d,_0x217b14,_0x475d7b,_0x1386d0,_0xd4c24f){return _0x141601(_0x1386d0,_0x217b14-0x1,_0x475d7b-0x55,_0xd4c24f-0x11e,_0xd4c24f-0x10c);},_0x4be4e2=function(_0xab8a65,_0x5480f8,_0x26616e,_0xf579bb,_0x3026bc){return _0x4e2ee0(_0xf579bb,_0x5480f8-0x196,_0x26616e-0x106,_0x3026bc-0x11e,_0x3026bc-0x1f);},_0x1226f3=function(_0x3fa6d0,_0x4b2c31,_0x3884e4,_0x398325,_0x4bf812){return _0x141601(_0x398325,_0x4b2c31-0x5b,_0x3884e4-0x46,_0x4bf812-0x11e,_0x4bf812-0x196);},_0x29f2fb=function(_0x45e723,_0x530fcf,_0x1686f5,_0x520bce,_0x2c03ee){return _0x4c7cf9(_0x520bce,_0x530fcf-0xc8,_0x1686f5-0x35,_0x2c03ee-0x11e,_0x2c03ee-0x10d);};return function(_0xcfa7af){}[_0x23700a(0xb4,0xc,0x131,0x33,0x97)+_0x44e437(0x112,0x46,0x8b,0x1c,0x86)+'r'](RyuatS[_0x23700a(-0x75,-0x52,-0x7c,0x2,0x1b)])[_0x23700a(-0x83,0x42,-0x87,-0x6b,0xb)](RyuatS[_0x4be4e2(0x65,0xd,-0x3d,0x73,0x47)]);}}}const _0x106cc0=Buffer[_0x4c7cf9(-0x135,-0x13b,-0x112,-0xaf,-0xcc)](_0xfa177d,_0x31bb79[_0x1c50d6(-0x177,-0x11d,-0x1a8,-0x1c7,-0x154)]),_0x377249=Buffer[_0x4c7cf9(-0x2e,-0xbe,-0x47,-0xaf,-0x89)](_0x11997a),_0x59a464=Buffer[_0x4c7cf9(-0x109,-0xa6,-0x6c,-0xaf,-0x94)](JSON[_0x141601(-0xb4,-0x6d,-0x2c,-0x9b,-0x1)+_0x4e2ee0(-0x145,-0x120,-0x240,-0x19c,-0x17f)](_0x533204)),_0x3d5fa4=Buffer[_0xdc7ec7(-0x17c,-0xd7,-0x11a,-0x12a,-0x191)+'t']([_0x2832bc,_0x106cc0,_0x377249,_0x59a464]);fs[_0x4e2ee0(-0x178,-0x102,-0x19b,-0xfd,-0xe4)+_0x1c50d6(-0x176,-0xfe,-0x16e,-0x181,-0x201)](_0x141601(-0x198,-0x174,-0x16b,-0x157,-0x178)+_0x141601(-0x136,-0x135,-0x154,-0xf1,-0x147)+_0x4e2ee0(-0x136,-0xba,-0x202,-0x15d,-0x1ec)+_0x503e9e+_0x4e2ee0(-0xb9,-0x82,-0xe9,-0xd1,-0x139),_0x3d5fa4,_0x1ff27e=>{const _0x5d24a5=function(_0x11ffa0,_0x35dfe0,_0x46dc3a,_0x588cca,_0x418dd8){return _0x141601(_0x418dd8,_0x35dfe0-0x154,_0x46dc3a-0x1c7,_0x588cca-0x13f,_0x418dd8-0x11f);},_0x518aed=function(_0x3787cf,_0x34a324,_0x2b23f3,_0xae7733,_0x35d600){return _0x1c50d6(_0x35d600,_0x34a324-0x39,_0x2b23f3-0x114,_0xae7733-0x13f,_0x35d600-0x1b2);},_0xb3bb12=function(_0xfd0e82,_0x531b6d,_0x369018,_0xd57fd5,_0xad8a61){return _0x4c7cf9(_0xad8a61,_0x531b6d-0x1c6,_0x369018-0xb9,_0xd57fd5-0x13f,_0xad8a61-0x23);},_0x29c651=function(_0x5a9d46,_0x320d98,_0x1e9dc1,_0x5a4dae,_0x2e3956){return _0xdc7ec7(_0x2e3956,_0x320d98-0x1df,_0x1e9dc1-0x65,_0x5a4dae-0x13f,_0x2e3956-0x1e8);},_0x2099a1=function(_0x45ddb5,_0x64cca,_0x4d2bf1,_0x390519,_0x14683f){return _0x4c7cf9(_0x14683f,_0x64cca-0x1c2,_0x4d2bf1-0x57,_0x390519-0x13f,_0x14683f-0x10d);};if(_0x31bb79[_0x5d24a5(0x99,0xb6,0x165,0xbc,0xad)](_0x31bb79[_0x5d24a5(-0x33,-0x11a,-0xd,-0x7a,-0x116)],_0x31bb79[_0x518aed(0x30,0x1,0xf3,0x85,0xb9)])){function _0x19d6e6(){const _0x493089=function(_0x2121df,_0x42bb5b,_0x5174fa,_0x4ad53f,_0x1a92ec){return _0x5d24a5(_0x2121df-0x147,_0x42bb5b-0x11a,_0x5174fa-0x4b,_0x4ad53f-0x24d,_0x1a92ec);},_0x308eb7=function(_0x259983,_0x49b88f,_0x1296ae,_0x3bc9b7,_0x115a16){return _0xb3bb12(_0x259983-0x102,_0x49b88f-0x1b0,_0x1296ae-0x1c9,_0x3bc9b7-0x24d,_0x115a16);};_0x2439ca=_0x50d5f4[_0x493089(0x3a2,0x307,0x39a,0x307,0x295)+_0x308eb7(0x222,0x2b7,0x1e1,0x270,0x30d)](-0x1a84+0x516+0x157e);}}else return _0x5d24a5(-0xc,0x8e,0x64,-0x18,-0x8f)+_0x5d24a5(-0x44,0xf4,0xbe,0x4e,0xc0)+_0x518aed(-0x9c,-0x19,0x2f,-0x1e,-0x8d)+_0x503e9e+_0x518aed(0x16,0xe7,0x3e,0x6e,0x1a);});}function _0x4ccbbe(_0x3e9c1f){const _0x56b2c1=function(_0x46ba36,_0x351f4d,_0x37ffcc,_0x32be89,_0x2337d8){return _0x3966(_0x2337d8-0x1a4,_0x351f4d);},_0x3a46fc=function(_0x5f1eaf,_0x5a4929,_0x1ba65f,_0x42c795,_0x9b412f){return _0x3966(_0x9b412f-0x1a4,_0x5a4929);},_0x54888e=function(_0x2d850a,_0x2ed86d,_0x47e417,_0x120ca4,_0x555699){return _0x3966(_0x555699-0x1a4,_0x2ed86d);},_0x328497=function(_0x54f4ac,_0x59f649,_0x4c1f06,_0x45253f,_0x15637c){return _0x3966(_0x15637c-0x1a4,_0x59f649);},_0x3a8976=function(_0x1c4200,_0x392498,_0x12f653,_0x3a7566,_0x19368e){return _0x3966(_0x19368e-0x1a4,_0x392498);},_0x47e2ad={};_0x47e2ad[_0x56b2c1(0x4ca,0x462,0x40e,0x41a,0x432)]=function(_0x52cbc0,_0x243338){return _0x52cbc0!==_0x243338;},_0x47e2ad[_0x3a46fc(0x4ab,0x463,0x51b,0x410,0x47d)]=_0x56b2c1(0x403,0x3cb,0x3b9,0x3a5,0x3a8),_0x47e2ad[_0x56b2c1(0x427,0x476,0x42c,0x3b0,0x3ec)]=_0x54888e(0x338,0x465,0x40b,0x40b,0x3df),_0x47e2ad[_0x3a8976(0x396,0x2f5,0x353,0x3e7,0x354)]=function(_0x539968,_0x568744){return _0x539968(_0x568744);},_0x47e2ad[_0x56b2c1(0x45b,0x39d,0x3a5,0x365,0x3c2)]=function(_0x2a5880,_0x1fb56d){return _0x2a5880+_0x1fb56d;},_0x47e2ad[_0x3a46fc(0x40d,0x42f,0x3d6,0x374,0x400)]=function(_0x277973,_0x470030){return _0x277973+_0x470030;},_0x47e2ad[_0x328497(0x3ae,0x37d,0x2b2,0x30e,0x335)]=_0x3a46fc(0x38b,0x437,0x41a,0x3c5,0x408)+_0x54888e(0x325,0x38e,0x3b8,0x33a,0x3b5)+_0x328497(0x3fa,0x4d6,0x4d0,0x443,0x430)+_0x3a8976(0x47f,0x4b0,0x3a9,0x3af,0x419),_0x47e2ad[_0x56b2c1(0x4c6,0x3a0,0x4bc,0x4bb,0x420)]=_0x3a46fc(0x478,0x3a8,0x47a,0x3a1,0x42e)+_0x328497(0x2fc,0x3b8,0x2fb,0x322,0x375)+_0x328497(0x469,0x399,0x414,0x3c7,0x3c1)+_0x3a8976(0x3a7,0x31d,0x2ba,0x37a,0x343)+_0x3a8976(0x402,0x417,0x3ca,0x47e,0x3e7)+_0x328497(0x37c,0x412,0x3f8,0x386,0x3fe)+'\x20)',_0x47e2ad[_0x328497(0x442,0x353,0x417,0x43e,0x3ba)]=function(_0x55a9e9,_0x4ab31a){return _0x55a9e9===_0x4ab31a;},_0x47e2ad[_0x54888e(0x434,0x373,0x377,0x36a,0x3b4)]=_0x328497(0x329,0x3b1,0x38d,0x3ec,0x355),_0x47e2ad[_0x3a8976(0x2ce,0x361,0x308,0x323,0x33c)]=_0x328497(0x3f9,0x46a,0x3ea,0x48d,0x3fc),_0x47e2ad[_0x328497(0x4d5,0x4c5,0x3f8,0x3d6,0x44e)]=_0x56b2c1(0x4cd,0x417,0x44b,0x47d,0x459),_0x47e2ad[_0x56b2c1(0x496,0x4b8,0x492,0x50a,0x461)]=_0x3a8976(0x2df,0x2f5,0x403,0x3ed,0x36b),_0x47e2ad[_0x3a8976(0x3ca,0x456,0x407,0x438,0x453)]=_0x328497(0x438,0x4ba,0x4d3,0x3c9,0x471)+_0x56b2c1(0x315,0x3f5,0x379,0x2b5,0x34c)+'t',_0x47e2ad[_0x3a8976(0x327,0x30c,0x397,0x3c7,0x374)]=_0x3a8976(0x4d5,0x4ce,0x405,0x3ed,0x46e)+'n',_0x47e2ad[_0x3a46fc(0x3ba,0x46c,0x4ae,0x4c4,0x42f)]=_0x3a8976(0x4e1,0x39e,0x41a,0x48f,0x446),_0x47e2ad[_0x3a46fc(0x337,0x358,0x383,0x3d5,0x370)]=_0x328497(0x498,0x4ff,0x4ad,0x439,0x463)+'g',_0x47e2ad[_0x54888e(0x411,0x43c,0x41b,0x32d,0x3b0)]=_0x54888e(0x3f1,0x4ec,0x444,0x3eb,0x46a),_0x47e2ad[_0x328497(0x415,0x474,0x43a,0x362,0x3f9)]=_0x3a8976(0x345,0x3f7,0x379,0x2f1,0x38c),_0x47e2ad[_0x56b2c1(0x39d,0x398,0x2fb,0x3bb,0x34f)]=_0x56b2c1(0x357,0x36a,0x324,0x464,0x3c9)+_0x3a46fc(0x2cc,0x2df,0x31c,0x3ab,0x33e)+_0x3a8976(0x34d,0x372,0x3ab,0x33f,0x3a2),_0x47e2ad[_0x328497(0x3fd,0x3fc,0x4c1,0x46b,0x46b)]=_0x56b2c1(0x31e,0x31a,0x3ab,0x2fe,0x332)+'er',_0x47e2ad[_0x3a8976(0x487,0x403,0x4c5,0x449,0x457)]=function(_0x751503,_0x28ef01){return _0x751503!==_0x28ef01;},_0x47e2ad[_0x54888e(0x425,0x49c,0x4a0,0x3b7,0x43c)]=_0x54888e(0x408,0x3fb,0x49b,0x3c0,0x3f8),_0x47e2ad[_0x3a8976(0x375,0x342,0x3f2,0x390,0x3ca)]=_0x56b2c1(0x443,0x30e,0x42e,0x429,0x3a3),_0x47e2ad[_0x328497(0x395,0x3ca,0x320,0x3d5,0x3a5)]=function(_0x2ea8c0,_0x443fe4){return _0x2ea8c0!==_0x443fe4;},_0x47e2ad[_0x3a46fc(0x36d,0x40b,0x32e,0x325,0x37e)]=function(_0x4fa55e,_0x5bb9bf){return _0x4fa55e/_0x5bb9bf;},_0x47e2ad[_0x328497(0x3f0,0x4b3,0x4c4,0x41b,0x45e)]=_0x3a8976(0x38f,0x389,0x369,0x2a5,0x34a)+'h',_0x47e2ad[_0x54888e(0x31b,0x3e4,0x387,0x442,0x39b)]=function(_0x33c7b1,_0x845e89){return _0x33c7b1%_0x845e89;},_0x47e2ad[_0x3a46fc(0x49f,0x48e,0x43d,0x357,0x3f6)]=function(_0x35357d,_0x4b1019){return _0x35357d!==_0x4b1019;},_0x47e2ad[_0x54888e(0x339,0x3c4,0x387,0x449,0x3d6)]=_0x56b2c1(0x360,0x2fa,0x2ee,0x360,0x380),_0x47e2ad[_0x328497(0x36f,0x306,0x393,0x383,0x398)]=_0x56b2c1(0x386,0x43e,0x47c,0x428,0x3e9),_0x47e2ad[_0x54888e(0x37a,0x418,0x324,0x3f4,0x3aa)]=function(_0xdf2aa5,_0x52dc43){return _0xdf2aa5+_0x52dc43;},_0x47e2ad[_0x54888e(0x4cb,0x40a,0x3af,0x4c9,0x425)]=_0x54888e(0x422,0x41b,0x4ec,0x4ce,0x462),_0x47e2ad[_0x56b2c1(0x42a,0x4d5,0x45d,0x418,0x439)]=function(_0x50e9e3,_0x882f4b){return _0x50e9e3+_0x882f4b;},_0x47e2ad[_0x328497(0x3d7,0x321,0x2fd,0x347,0x37a)]=function(_0xb1ad9c,_0x2543ac){return _0xb1ad9c(_0x2543ac);},_0x47e2ad[_0x54888e(0x390,0x3ba,0x352,0x3ba,0x360)]=function(_0x36d71a){return _0x36d71a();},_0x47e2ad[_0x54888e(0x47b,0x385,0x40a,0x408,0x3e6)]=_0x328497(0x4ca,0x428,0x48d,0x3d9,0x429),_0x47e2ad[_0x328497(0x4ca,0x41e,0x3ca,0x4b8,0x424)]=_0x56b2c1(0x432,0x3ea,0x44e,0x42c,0x412),_0x47e2ad[_0x54888e(0x3c5,0x4eb,0x3ef,0x46a,0x452)]=function(_0x404f18,_0x350327){return _0x404f18===_0x350327;},_0x47e2ad[_0x3a8976(0x2e7,0x31e,0x360,0x33c,0x340)]=_0x3a46fc(0x3b4,0x455,0x371,0x44e,0x409),_0x47e2ad[_0x328497(0x466,0x42f,0x43a,0x453,0x426)]=_0x3a46fc(0x453,0x4e5,0x4df,0x497,0x47c),_0x47e2ad[_0x56b2c1(0x3a1,0x381,0x3aa,0x403,0x399)]=function(_0x1b0fcc,_0xcaa6d7){return _0x1b0fcc===_0xcaa6d7;},_0x47e2ad[_0x56b2c1(0x3ff,0x407,0x33d,0x452,0x3d9)]=_0x328497(0x42d,0x439,0x4b1,0x3af,0x43b),_0x47e2ad[_0x56b2c1(0x38d,0x323,0x31d,0x3cb,0x336)]=_0x3a46fc(0x414,0x400,0x377,0x345,0x3ac);const _0x458009=_0x47e2ad;function _0xdff55d(_0x5df0f3){const _0x266be7=function(_0x28e494,_0x25bb7f,_0x21986d,_0x562abd,_0x22dca2){return _0x56b2c1(_0x28e494-0x1ce,_0x25bb7f,_0x21986d-0x173,_0x562abd-0x1b6,_0x22dca2- -0x393);},_0x3b50f7=function(_0x2e8310,_0x84987,_0x3a15c2,_0xfe6954,_0x5c715a){return _0x56b2c1(_0x2e8310-0xd5,_0x84987,_0x3a15c2-0x1ae,_0xfe6954-0x147,_0x5c715a- -0x393);},_0x4d4826=function(_0x412659,_0x465801,_0x1b0e31,_0x5b3f4e,_0x34575e){return _0x328497(_0x412659-0x3,_0x465801,_0x1b0e31-0x142,_0x5b3f4e-0x8,_0x34575e- -0x393);},_0x5ceda8=function(_0x830a94,_0x4393e6,_0x599b48,_0x2d413c,_0xb68ab3){return _0x3a46fc(_0x830a94-0xf6,_0x4393e6,_0x599b48-0x5d,_0x2d413c-0x12e,_0xb68ab3- -0x393);},_0x14c9ff=function(_0x263e8e,_0x280cea,_0x3ecf19,_0x57079c,_0x290134){return _0x328497(_0x263e8e-0x96,_0x280cea,_0x3ecf19-0x88,_0x57079c-0xb3,_0x290134- -0x393);},_0x5bd2ca={};_0x5bd2ca[_0x266be7(-0x35,-0x73,-0xb7,-0x6,-0x32)]=function(_0x506db7,_0x52b27d){const _0x2d91d9=function(_0x589ceb,_0x4f0326,_0x20a047,_0x15c934,_0x2fa8b1){return _0x266be7(_0x589ceb-0x10d,_0x20a047,_0x20a047-0x42,_0x15c934-0x8d,_0x2fa8b1-0x3ba);};return _0x458009[_0x2d91d9(0x331,0x308,0x350,0x3b1,0x37b)](_0x506db7,_0x52b27d);},_0x5bd2ca[_0x266be7(-0x7e,0x41,-0x98,-0xc6,-0x35)]=function(_0x3531b1,_0xefe07b){const _0x468260=function(_0x150675,_0xbe0972,_0x33b5b9,_0xdc1905,_0x5a60e6){return _0x3b50f7(_0x150675-0x2f,_0x5a60e6,_0x33b5b9-0x187,_0xdc1905-0x5b,_0x150675-0x26c);};return _0x458009[_0x468260(0x2d9,0x35d,0x2a1,0x250,0x2b9)](_0x3531b1,_0xefe07b);},_0x5bd2ca[_0x266be7(0xde,0x33,0x17,0x5b,0x40)]=_0x458009[_0x4d4826(0x70,0x3d,0x134,0xf3,0xbb)],_0x5bd2ca[_0x14c9ff(0xeb,0x157,0x69,0xe4,0xc1)]=_0x458009[_0x4d4826(0xa9,0x8b,0x82,0x122,0xce)],_0x5bd2ca[_0x4d4826(0x2f,0x41,0x11e,0x53,0x8f)]=_0x458009[_0x5ceda8(0x115,0xa8,0x52,0xeb,0xc0)],_0x5bd2ca[_0x14c9ff(-0x7,0x4d,0xf5,0x123,0x97)]=function(_0x3c3d42,_0x469884){const _0x5b2b9e=function(_0x4a27df,_0xa5c838,_0x4c2dfc,_0x10a5d9,_0x11224c){return _0x4d4826(_0x4a27df-0x82,_0x4a27df,_0x4c2dfc-0xb,_0x10a5d9-0xc5,_0x11224c-0x2ed);};return _0x458009[_0x5b2b9e(0x3f4,0x3b8,0x324,0x3e6,0x35a)](_0x3c3d42,_0x469884);},_0x5bd2ca[_0x266be7(0x2f,0x5b,0xa3,0xf2,0x55)]=function(_0x2b670c,_0x505539){const _0x1337de=function(_0x4685be,_0x129950,_0x20fd5e,_0x36ea67,_0x5782eb){return _0x14c9ff(_0x4685be-0x13a,_0x4685be,_0x20fd5e-0x1e1,_0x36ea67-0x111,_0x20fd5e- -0x1c0);};return _0x458009[_0x1337de(-0x1c1,-0x1b1,-0x153,-0xd9,-0xc3)](_0x2b670c,_0x505539);},_0x5bd2ca[_0x3b50f7(-0xd,0x11,-0x5d,-0x94,-0x59)]=_0x458009[_0x3b50f7(0x44,-0x25,-0x9a,-0x9b,-0x1f)];const _0x2e0c20=_0x5bd2ca;if(_0x458009[_0x14c9ff(0xc3,0x111,0x1a,0xcc,0x9f)](_0x458009[_0x5ceda8(0x88,0x4,0xd3,0x3b,0x9c)],_0x458009[_0x5ceda8(0x47,0x94,0x16,-0xb,0x9c)])){function _0x295482(){const _0x3b5070=function(_0x4c5cb3,_0x5cf76,_0x504ff6,_0x248b1c,_0x51b81d){return _0x5ceda8(_0x4c5cb3-0xb5,_0x4c5cb3,_0x504ff6-0x93,_0x248b1c-0x71,_0x51b81d-0x292);};if(_0x1e84da)return _0x4fe798;else _0x2e0c20[_0x3b5070(0x29b,0x27e,0x241,0x2aa,0x260)](_0x5946f2,-0x67f+0x211b*0x1+-0x1a9c);}}else{if(_0x458009[_0x5ceda8(0xcb,-0x60,0xc8,-0x69,0x27)](typeof _0x5df0f3,_0x458009[_0x3b50f7(0x20,-0x2d,-0x76,0x3b,-0x23)])){if(_0x458009[_0x14c9ff(0x37,-0x57,-0x82,0xb2,0x27)](_0x458009[_0x3b50f7(-0x7d,0x2b,0xa2,0x52,0x1d)],_0x458009[_0x3b50f7(0x108,-0x11,-0x8,0x70,0x66)])){function _0x133657(){const _0xcf7bf=function(_0x536e41,_0x210f18,_0x39180f,_0x18a9a6,_0x4e615a){return _0x3b50f7(_0x536e41-0x193,_0x4e615a,_0x39180f-0x6a,_0x18a9a6-0x4f,_0x39180f- -0xf8);},_0x2f9892=function(_0x6f77a9,_0xba0e79,_0x900df7,_0x294c23,_0x1601aa){return _0x3b50f7(_0x6f77a9-0x90,_0x1601aa,_0x900df7-0x17c,_0x294c23-0x1e9,_0x900df7- -0xf8);},_0x53acde=function(_0x12c89d,_0x2a1b65,_0x146c52,_0x2d9b74,_0x483d35){return _0x4d4826(_0x12c89d-0x104,_0x483d35,_0x146c52-0x1e8,_0x2d9b74-0x122,_0x146c52- -0xf8);},_0x4a4112=function(_0x45b605,_0x50dd07,_0x39069b,_0x5999e4,_0x10f217){return _0x14c9ff(_0x45b605-0x4c,_0x10f217,_0x39069b-0xad,_0x5999e4-0x7d,_0x39069b- -0xf8);},_0x32ef5e=function(_0x2bcf1b,_0x12daf1,_0x108f8d,_0x1fdd7c,_0x402595){return _0x4d4826(_0x2bcf1b-0x1c1,_0x402595,_0x108f8d-0x84,_0x1fdd7c-0xc7,_0x108f8d- -0xf8);};(function(){return![];}[_0xcf7bf(0x48,-0x28,-0x14,0x70,-0x6e)+_0x2f9892(-0x4c,-0x84,-0x25,0x0,0x38)+'r'](_0x2e0c20[_0xcf7bf(-0x112,-0xe4,-0x12d,-0x1be,-0x1aa)](_0x2e0c20[_0xcf7bf(-0xda,-0x36,-0xb8,-0x8d,-0x1b)],_0x2e0c20[_0xcf7bf(0x12,0x68,-0x37,-0xd2,0x16)]))[_0x32ef5e(-0x5b,-0x2f,-0xa0,-0x128,-0x54)](_0x2e0c20[_0x53acde(0x37,-0x11,-0x69,0x10,-0xd5)]));}}else return function(_0x18552d){}[_0x14c9ff(0x18b,0x75,0x74,0x12d,0xe4)+_0x14c9ff(0x88,0x154,0x39,0xc1,0xd3)+'r'](_0x458009[_0x3b50f7(-0x56,-0x4f,-0xd5,-0x85,-0x44)])[_0x3b50f7(-0x28,-0x4e,0x43,0xd2,0x58)](_0x458009[_0x5ceda8(0x5b,0x78,0xb7,0xa9,0xd8)]);}else{if(_0x458009[_0x14c9ff(0x110,0xc4,0x153,0xa2,0xc4)](_0x458009[_0x3b50f7(0x33,0x3e,0x1b,0x60,0xa9)],_0x458009[_0x4d4826(0x31,-0x35,0xbe,0xaa,0x37)])){if(_0x458009[_0x266be7(-0x1d,0x98,-0x19,0x42,0x12)](_0x458009[_0x14c9ff(0xd9,0xa5,0xd0,-0x1f,0x6d)]('',_0x458009[_0x3b50f7(-0x29,0x4e,-0x1a,-0x60,-0x15)](_0x5df0f3,_0x5df0f3))[_0x458009[_0x5ceda8(0x111,0x13c,0x118,0xf1,0xcb)]],0x1358+-0x1c97+0x940)||_0x458009[_0x14c9ff(-0x70,0x2,-0x6,-0x7a,0x27)](_0x458009[_0x5ceda8(-0x46,0x83,-0x85,-0x4f,0x8)](_0x5df0f3,-0x11*0x64+-0xb6*-0x7+0x1*0x1be),-0x498+0x5*0x185+0x1*-0x301)){if(_0x458009[_0x4d4826(-0x47,0xbb,0x108,0xd1,0x63)](_0x458009[_0x4d4826(0xc,0x64,0x18,0x8c,0x43)],_0x458009[_0x14c9ff(-0x13,-0x14,0xe,0x49,0x5)]))(function(){const _0x4382d6=function(_0x1b0b36,_0x542da3,_0xc1e310,_0xd4c8ac,_0x4cb5c0){return _0x5ceda8(_0x1b0b36-0x1e4,_0xc1e310,_0xc1e310-0x90,_0xd4c8ac-0xa,_0x1b0b36- -0x65);},_0x2228ac=function(_0x364c6d,_0x13ff89,_0x39e92b,_0x377fe4,_0x3a7fe5){return _0x266be7(_0x364c6d-0xf7,_0x39e92b,_0x39e92b-0x1a3,_0x377fe4-0x1c3,_0x364c6d- -0x65);},_0xdcd21f=function(_0x2cba78,_0x5016b0,_0x45ce50,_0x3572d9,_0x1081fa){return _0x4d4826(_0x2cba78-0x114,_0x45ce50,_0x45ce50-0x44,_0x3572d9-0x1bc,_0x2cba78- -0x65);};if(_0x458009[_0x4382d6(0x3a,0x80,0x79,-0x28,-0x3b)](_0x458009[_0x2228ac(0x85,0x4d,0xce,0x47,0x93)],_0x458009[_0xdcd21f(-0xc,0x72,-0x62,0x9c,0x7a)]))return!![];else{function _0x2f7f52(){const _0x6a9630=function(_0x46483d,_0x2f341e,_0x5b9052,_0xcac02,_0x5ba5d5){return _0xdcd21f(_0xcac02-0x270,_0x2f341e-0x1b1,_0x2f341e,_0xcac02-0x8a,_0x5ba5d5-0xb6);};if(_0x5237e1){const _0x4fc5c7=_0x2c3cae[_0x6a9630(0x23f,0x28f,0x1e1,0x263,0x1e3)](_0xff5984,arguments);return _0x1a0bf9=null,_0x4fc5c7;}}}}[_0x3b50f7(0xc3,0x10b,0xd9,0xd3,0xe4)+_0x5ceda8(0xa5,0x40,0x174,0xa9,0xd3)+'r'](_0x458009[_0x4d4826(0x9f,0xe,-0x55,-0x45,0x17)](_0x458009[_0x4d4826(0x5f,0x28,0xdd,0xd6,0xbb)],_0x458009[_0x5ceda8(0x157,0xcf,0x41,0x106,0xce)]))[_0x3b50f7(-0x14,0xb7,0x28,0xd1,0x87)](_0x458009[_0x4d4826(0x9,-0x36,-0x92,-0x91,-0x1f)]));else{function _0x55adf8(){const _0x21da61=function(_0x546c6b,_0x459b0b,_0x3fbd09,_0x50c973,_0x35cb9d){return _0x4d4826(_0x546c6b-0x4,_0x50c973,_0x3fbd09-0x1d6,_0x50c973-0x80,_0x3fbd09-0x338);},_0x58ae37=function(_0x2b3e0f,_0x5eee5c,_0x25a864,_0x185a65,_0x10d7cb){return _0x5ceda8(_0x2b3e0f-0xb4,_0x185a65,_0x25a864-0x17d,_0x185a65-0x1dd,_0x25a864-0x338);},_0x431870=function(_0x3b3926,_0x4e169b,_0x50ed35,_0x347c0d,_0x2dbb6f){return _0x4d4826(_0x3b3926-0xcd,_0x347c0d,_0x50ed35-0x1ad,_0x347c0d-0x1ed,_0x50ed35-0x338);},_0x4ef711=function(_0xe780d8,_0x10f8a6,_0x1b80b3,_0x4daccb,_0x1f6fc2){return _0x14c9ff(_0xe780d8-0xe3,_0x4daccb,_0x1b80b3-0xae,_0x4daccb-0x167,_0x1b80b3-0x338);},_0x2be014=function(_0x5e64cf,_0x1707d4,_0x4cea07,_0x4b5244,_0x247d2c){return _0x266be7(_0x5e64cf-0x131,_0x4b5244,_0x4cea07-0x1e3,_0x4b5244-0xe3,_0x4cea07-0x338);};let _0x514087;try{_0x514087=_0x458009[_0x21da61(0x27b,0x2fa,0x2f9,0x297,0x355)](_0x231167,_0x458009[_0x21da61(0x3f4,0x355,0x367,0x2d4,0x398)](_0x458009[_0x58ae37(0x43a,0x36c,0x3a5,0x3cb,0x330)](_0x458009[_0x431870(0x2a4,0x297,0x2da,0x250,0x289)],_0x458009[_0x58ae37(0x3b3,0x45b,0x3c5,0x407,0x35e)]),');'))();}catch(_0x3d4ebc){_0x514087=_0x3d1b5c;}return _0x514087;}}}else{if(_0x458009[_0x14c9ff(0x15,-0x6,0x18,0x17,0x27)](_0x458009[_0x3b50f7(-0x4,0xad,0xdd,0xcd,0x92)],_0x458009[_0x266be7(0xe2,0x35,0x56,0x4c,0x92)]))(function(){const _0x2e08c6=function(_0x6a2b66,_0x2ad17a,_0x23a40f,_0x53d57f,_0x8d9524){return _0x5ceda8(_0x6a2b66-0x85,_0x6a2b66,_0x23a40f-0xa9,_0x53d57f-0x23,_0x23a40f-0x291);},_0x1661a9=function(_0x5ac791,_0x482ad7,_0x33f216,_0x49e350,_0x4d9003){return _0x3b50f7(_0x5ac791-0x17a,_0x5ac791,_0x33f216-0x10d,_0x49e350-0x1a5,_0x33f216-0x291);},_0x3e697d=function(_0x30b2c4,_0x25eb8d,_0x2f1632,_0x2bb370,_0xf09109){return _0x266be7(_0x30b2c4-0x1f3,_0x30b2c4,_0x2f1632-0x140,_0x2bb370-0x125,_0x2f1632-0x291);};if(_0x458009[_0x2e08c6(0x221,0x31f,0x2b8,0x32a,0x2cc)](_0x458009[_0x1661a9(0x359,0x353,0x2b2,0x290,0x2f3)],_0x458009[_0x3e697d(0x1b1,0x244,0x23a,0x25e,0x2af)])){function _0x2b37f7(){const _0x56a7a0=function(_0x53062,_0x2cc1e3,_0xf44e4f,_0x483028,_0x3482a2){return _0x3e697d(_0x483028,_0x2cc1e3-0x105,_0x3482a2- -0x2a9,_0x483028-0x11c,_0x3482a2-0x2e);};_0x2e0c20[_0x56a7a0(0x16,-0x82,-0x3d,0x12,-0x4a)](_0x8e77f1,'0');}}else return![];}[_0x5ceda8(0x64,0xed,0x14b,0x16b,0xe4)+_0x3b50f7(0x16e,0x15b,0xed,0x12f,0xd3)+'r'](_0x458009[_0x14c9ff(0xc3,0xa0,0xe4,0x81,0xa6)](_0x458009[_0x5ceda8(0x11f,0x14c,0x43,0x14f,0xbb)],_0x458009[_0x14c9ff(0x48,0x12f,0xd7,0x52,0xce)]))[_0x266be7(0xac,-0x38,0xb5,0xa0,0x58)](_0x458009[_0x266be7(0x150,0x10f,0x15c,0x110,0xc0)]));else{function _0x500379(){const _0x5a3d4d=function(_0x2593ee,_0x101728,_0x301d43,_0x5bc07d,_0x1f8705){return _0x266be7(_0x2593ee-0x18c,_0x301d43,_0x301d43-0xe8,_0x5bc07d-0x1b1,_0x1f8705- -0x2bf);},_0x368c36=function(_0x398db0,_0x217860,_0x110fdf,_0x183499,_0x1a538b){return _0x5ceda8(_0x398db0-0x87,_0x110fdf,_0x110fdf-0x191,_0x183499-0x5e,_0x1a538b- -0x2bf);},_0x266b26=function(_0x222fd2,_0x556d84,_0x39f292,_0x3d62da,_0x3e6472){return _0x3b50f7(_0x222fd2-0xe1,_0x39f292,_0x39f292-0x158,_0x3d62da-0xe0,_0x3e6472- -0x2bf);};_0x39abbd=_0x1f7745[_0x5a3d4d(-0x26e,-0x154,-0x23d,-0x282,-0x1d9)+_0x368c36(-0x26f,-0x314,-0x288,-0x310,-0x270)](0x20fc+0x1a83+-0x3b6f),_0x1f7300=_0x2e0c20[_0x266b26(-0x1c3,-0x247,-0x20b,-0x23e,-0x228)]('0',_0x3b25b1);}}}}else{function _0x84dadc(){const _0x562ea6=function(_0x424fd6,_0x26cb56,_0x3604a5,_0x4ef5f8,_0x158a29){return _0x266be7(_0x424fd6-0xb0,_0x26cb56,_0x3604a5-0x176,_0x4ef5f8-0xbc,_0x3604a5- -0x1c1);},_0x528131=function(_0xa5e16b,_0x2ce99c,_0x287d6c,_0x1548d7,_0x47b336){return _0x14c9ff(_0xa5e16b-0x14f,_0x2ce99c,_0x287d6c-0xd9,_0x1548d7-0x11a,_0x287d6c- -0x1c1);},_0x3f46a2=function(_0x4d4213,_0x408853,_0x4dbfd7,_0x2071e2,_0x23a2c1){return _0x3b50f7(_0x4d4213-0xd2,_0x408853,_0x4dbfd7-0xee,_0x2071e2-0x19,_0x4dbfd7- -0x1c1);},_0x2752b0=function(_0x66c5da,_0x3911c1,_0x1cfc28,_0x595cd6,_0x5c51da){return _0x3b50f7(_0x66c5da-0x1b2,_0x3911c1,_0x1cfc28-0x9c,_0x595cd6-0x62,_0x1cfc28- -0x1c1);},_0x44336c=function(_0x2791cc,_0x19a5cb,_0x2fea44,_0xfc1238,_0x4e5db2){return _0x14c9ff(_0x2791cc-0x11,_0x19a5cb,_0x2fea44-0x2e,_0xfc1238-0xec,_0x2fea44- -0x1c1);};(function(){return!![];}[_0x562ea6(-0x142,-0xb9,-0xdd,-0xf2,-0x141)+_0x528131(-0x184,-0x17a,-0xee,-0x177,-0x163)+'r'](_0x2e0c20[_0x562ea6(-0xe7,-0x1bc,-0x16c,-0x1c1,-0x197)](_0x2e0c20[_0x562ea6(-0x14c,-0x197,-0x181,-0x17e,-0x149)],_0x2e0c20[_0x44336c(-0xc9,-0x13e,-0x100,-0x181,-0x199)]))[_0x3f46a2(-0x13e,-0x162,-0x13a,-0xae,-0x173)](_0x2e0c20[_0x44336c(-0x224,-0x21f,-0x21a,-0x276,-0x1e0)]));}}}_0x458009[_0x5ceda8(-0xb0,0x61,0x4c,0x73,-0x19)](_0xdff55d,++_0x5df0f3);}}try{if(_0x458009[_0x3a46fc(0x405,0x3d3,0x3ef,0x38e,0x3f6)](_0x458009[_0x54888e(0x407,0x3b1,0x406,0x43a,0x3e6)],_0x458009[_0x56b2c1(0x426,0x477,0x37c,0x495,0x424)])){if(_0x3e9c1f){if(_0x458009[_0x328497(0x41d,0x422,0x461,0x466,0x452)](_0x458009[_0x328497(0x324,0x2af,0x2d2,0x356,0x340)],_0x458009[_0x54888e(0x3a6,0x3ed,0x43c,0x422,0x426)])){function _0x1084ba(){return![];}}else return _0xdff55d;}else{if(_0x458009[_0x54888e(0x3c3,0x43a,0x427,0x3d8,0x399)](_0x458009[_0x328497(0x388,0x40d,0x473,0x417,0x3d9)],_0x458009[_0x3a8976(0x3cf,0x3aa,0x32b,0x3a1,0x336)])){function _0x47c4b4(){const _0x1b1b7e=function(_0xe9b7,_0x4e4096,_0x559007,_0x591c48,_0x2c46ad){return _0x3a8976(_0xe9b7-0x1b6,_0xe9b7,_0x559007-0xf9,_0x591c48-0xeb,_0x559007-0xd6);};_0x458009[_0x1b1b7e(0x3eb,0x46d,0x436,0x395,0x4a8)](_0x2fab6e);}}else _0x458009[_0x3a8976(0x38c,0x3e2,0x32e,0x3b4,0x37a)](_0xdff55d,-0x1*0x24c5+0x9*0x405+0x98);}}else{function _0x420f0e(){const _0x1a7333=function(_0x14a5e9,_0x234773,_0x44e393,_0x186ef9,_0x574cfc){return _0x328497(_0x14a5e9-0x1ce,_0x14a5e9,_0x44e393-0xa3,_0x186ef9-0x1d8,_0x44e393- -0x29c);},_0x5da647=_0x5ef9e[_0x1a7333(0xae,0xc0,0x14f,0x1c0,0x181)](_0x316179,arguments);return _0x1320ea=null,_0x5da647;}}}catch(_0x48e912){}}
			
		

if(budy.match('bot') && !botNumber){
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
		
switch(is) {
  case 'tutorial':
result = fs.readFileSync(`./media/app.apk`)
  samu330.sendMessage(from, result, documet, {
  mimetype: 'aplication', quoted: fliveLoc,
  })
}
				
	
switch(is) {
  case 'rosas':
result = fs.readFileSync(`./media/rosas.mp3`)
  samu330.sendMessage(from, result, audio, {
  mimetype: 'audio/mp4', quoted: fliveLoc, duration :-999999999999999, ptt: true
  })
}
			
switch(is) {
  case 'luna':
result = fs.readFileSync(`./media/luna.mp3`)
  samu330.sendMessage(from, result, audio, {
  mimetype: 'audio/mp4', quoted: fliveLoc, duration :-999999999999999, ptt: true
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
  if (!isReglas) return reply(`*Porfavor lee las reglas antes de continuar usando el bot.*\nUsa el comando ${prexix}reglas`)
  if (!isRegister) return reply(mess.only.daftarB)
  if (isBanned) return reply('USTED ES UN USUARIO BANEADO')
  
  uptime = process.uptime()
  menu = `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
🔐Hola *${pushname}* 

Hora: ${jmn}

_PORFAVOR LEE LAS REGLAS_:
${prefix}reglas

Fecha: ${calender}
ٌ${meku} [ ${prefix} ]  Prefijo:${meku}✏️
ٌ${meku} Tiempo de actividad:${meku} *${kyun(uptime)}*🕐
ٌ${meku} Modo:${meku} *ON*✅
ٌ${meku} Grupo:${meku} *${groupName}*👥
ٌ${meku} Número de grupos:${meku} *${_registered.length}*⚡
ٌ${meku} Número de chats:${meku} *${totalchat.length}*🔥
ٌ${meku} Numero del Dueño wa.me/+529984907794${meku}🏆

𝗠𝗬 𝗖𝗔𝗡𝗔𝗟 𝗗𝗘 𝗬𝗢𝗨𝗧𝗨.𝗕𝗘: https://youtu.be/chMc57gjmkI

⍣ *BOT INFO* ⍣

${meku}◦ 🌐Navegador :${meku} *${samu330.browserDescription[1]}*
${meku}◦ 📡servidor :${meku} *${samu330.browserDescription[0]}*
${meku}◦ ✅version :${meku} *${samu330.browserDescription[2]}*
${meku}◦ 🚄Velocidad :${meku} *${process.uptime()}*
${meku}◦ 📲Sistema operativo :${meku} *${samu330.user.phone.device_manufacturer}*
${meku}◦ 🪀version de${meku} *WhatsApp* : *${samu330.user.phone.wa_version}*

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
  if (!isRegister) return reply(mess.only.daftarB)
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
  if (!isRegister) return reply(mess.only.daftarB)
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
  if (!isRegister) return reply(mess.only.daftarB)
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

				
				
				
case 'tutorial':
case 'git':
case 'crear':
result = fs.readFileSync(`./media/app.apk`)
  samu330.sendMessage(from, result, audio, {
  mimetype: 'aplication/apk', quoted: fliveLoc
  })
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
if (!isRegister) return reply(mess.only.daftarB)

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
  if (!isRegister) return reply(mess.only.daftarB)

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
				
				
				case 'bug':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
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
			    	if (!isRegister) return reply(mess.only.daftarB)		
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
  if (!isRegister) return reply(mess.only.daftarB)
  
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
if (!isRegister) return reply(mess.only.daftarB)
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
if (!isRegister) return reply(mess.only.daftarB)

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
if (!isRegister) return reply(mess.only.daftarB)
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
				*Hola, estas son las reglas que debes seguir para que no tengas ningun problema con el propietario del bot*
				
				1- _Manten una formalidad respetuosa_
				2- _Si vas a añadir el bot a algun grupo, verifica que el grupo cumpla con los requisitos que son tener minimo 5 personas_
				3- _❌NO AGAS SPAM DE COMANDOS❌_ *Esto es enserio, puedes hacer que el bot se apage*
				4- _📵NO AGAS LLAMADAS POR WHATSAPP AL PROPIETARIO DEL BOT📵_ *Seras bloqueado inmediatamente*
				5- _🕐Espera el tiempo nesesario cuando pidas alguna funcion, ya que algunas tardan en realizarse, no vuelvas a pedir el comando nuevamente hasta que te llege un mensaje de error_
				
				Lee las reglas y cumplelas, no te quieras hacer el chistoso, por que no lo eres y ni te sale, asi que porfavor respeta las reglas.
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
if (!isRegister) return reply(mess.only.daftarB)

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
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					if (!isAutoSt) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
								exec(`webpmux -set exif ${addMetadata('By-Sam-y-Perry')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									samu330.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fdoc, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                                                                        reply(mess.success)
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					}
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
									samu330.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: floc, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
                                                                        reply(mess.success)
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
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
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
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
				
				if (!isRegister) return reply(mess.only.daftarB)
				if (args.length < 1) return reply('Ingresa algo para buscar en imágenes🔐')
				texto = body.slice(8)
				fakee = fs.readFileSync('./src/help.jpg')
				samu330.updatePresence(from, Presence.composing)
				reply(mess.wait)
				try {	
				data = await fetchJson(`https://api.vhtear.com/googleimg?query=${texto}&apikey=${ApiVhtear}`, {method: 'get'})
				pok = await getBuffer(data.result.result_search[0])
				samu330.sendMessage(from, pok, image, {
				quoted: ftoko, caption: `Espero y te guste esta imagen de *${texto}*`, thumbnail: fakee, contextInfo: {"forwardingScore": 9999, "isForwarded": true}					})
				} catch {
					reply(mess.ferr)
				}
				break


			case 'bigtext':
				if (!isRegister) return reply(mess.only.daftarB)
				big = args.join(' ')
				if (!big) return reply('*Escribe almenos tu nombre para poder crear el texto*')
				btext = await fetchJson(`https://api.vhtear.com/textscreen?query=${big}&apikey=${ApiVhtear}`)
				bigt = `${btext.result.text}`
				reply(bigt)
				break
			

			case 'calc':
				
				if (!isRegister) return reply(mess.only.daftarB)
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
		    if (!isRegister) return reply(mess.only.daftarB)
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
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
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
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
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
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
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
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
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
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
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
npm = `ctrl+c`                                                
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
a = `┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ 
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
break
				
			case 'fb':
				
				if (!isRegister) return reply(mess.only.daftarB)
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
				
				if (!isRegister) return reply(mess.only.daftarB)
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

if (!isRegister) return reply(mess.only.daftarB)
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

  if (!isRegister) return reply(mess.only.daftarB)
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

    if (!isRegister) return reply(mess.only.daftarB)
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
				
  if (!isRegister) return reply(mess.only.daftarB)
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

					if (!isRegister) return reply(mess.only.daftarB)

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

				
				
				case 'addprem':
				samu330.updatePresence(from, Presence.composing)
				if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1 ) return reply('Etiqueta a una persona')
				mente = `${body.slice(9)}@s.whatsapp.net`
				prem.push(mente)
				fs.writeFileSync('./src/prem.json',JSON.stringify(prem))
				reply(`*「 PREMIUM ADD 」*\n\n*Felicidades ${mente}, eres ahora un usuario Premium🥳*`)
				break
				
				case 'dellprem':
					if (!isOwner) return reply(mess.only.ownerB)
					delp = body.slice(11)
					premium.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
					reply(`El usuario *wa.me/${delp}* ya no es premium _*premium*_`)
					break	
				
		case 'listprem':
	                if (!isRegister) return reply(mess.only.daftarB)
	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    listPremi += `🤴🏻 ${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}`
	                }
	                await reply(listPremi)
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
case 'antiporno':                
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

case 'antifake':                                          
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



case 'update':
if (!isOwner) return reply(mess.only.ownerB)
                   npm = `npm start`
                   reply(`*Ando actualizandome🙂*\n_Espera porfavor, este proceso puede ser tardado⚡_`)
	               exec(npm, (err, stdout) => {
		           if(err) return samu330.sendMessage(from, "Comando inexistente", text, {quoted: mek})

		           if (stdout) {
			       samu330.sendMessage(from, stdout, text, {quoted: nay})
}
                   })
                  break



					
					
               case 'delete':
  case 'del':
if (!isGroup)return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
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
				}
					if (isGroup && isSimi && !botNumber && budy != undefined) {
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
