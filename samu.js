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
const prem = JSON.parse(fs.readFileSync('./src/prem.json'));
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

const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const event = JSON.parse(fs.readFileSync('./src/event.json'))
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const _limit = JSON.parse(fs.readFileSync('./src/limit.json'))
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const samyperry = JSON.parse(fs.readFileSync('./src/samu330.json'))

///////////////////////////////////////////////////////////////////////////

	    const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
            position = i
            }
            })
            if (position !== false) 
	    return _level[position].xp
            }
            

	    const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
            position = i
            }
            })
            if (position !== false) {
            return _level[position].level
            }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
            position = i
            }
            })
            if (position !== false) {
            return _level[position].jid
            }
            }
	
            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
            position = i
            }
            })
            if (position !== false) {
            _level[position].xp += amount
            fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
            }
	
            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
            _level[position].level += amount
            fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
	
            const addATM = (sender) => {
            const obj = {id: sender, samyperry : 0}
            samyperry.push(obj)
            fs.writeFileSync('./src/sam.json', JSON.stringify(samyperry))
            }

            const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(samyperry).forEach((i) => {
            if (samyperry[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            samyperry[position].samyperry += amount
            fs.writeFileSync('./src/sam.json', JSON.stringify(samyperry))
            }
            }
	
            const checkATMuser = (sender) => {
            let position = false
            Object.keys(samyperry).forEach((i) => {
            if (samyperry[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            return samyperry[position].samyperry
            }
            }

            const bayarLimit = (sender, amount) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
            }
	    }

            const confirmATM = (sender, amount) => {
            let position = false
            Object.keys(samyperry).forEach((i) => {
            if (samyperry[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            samyperry[position].samyperry -= amount
            fs.writeFileSync('./src/sam.json', JSON.stringify(samyperry))
            }
            }

            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
            }
            }
	 
//============ Premium ============\\

const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		}

		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./src/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		}

		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
		
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
		console.log(color(`\n==============================\n\n`,'red'), color(`+ NyanBot\n + Samu330\n`,'green'), color(`\n==============================\n\n`,'red'), color('┌╾┃','white'), color(' RECIVER ','cyan'), color('┃╾','white'))					
	})
	await samu330.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu.json', JSON.stringify(samu330.base64EncodedAuthInfo(), null, '\t'))
	
//=========//=========//=========//=========//=========//=========//=========//=========//=========//=========//=========//=========
		
const _0x14bf=['error','13TfwCUz','group-participants-update','524413HiLgBU','readFileSync','status','1dwQHmn','info','long','trace','jid','constructor','warn','prototype','*❌UN\x20ADMIN\x20MENOS❌*\x0a*🙋🏻‍♂️\x20Nombre*:\x20@','\x27\x20-pointsize\x2035\x20-annotate\x20+460+83\x20\x27','581687cRvxFa','446568bZaRCc','sendMessage','name','497909mbjMyT','__proto__','vname','hamsil.jpg',',\x20esperamos\x20que\x20te\x20la\x20pases\x20a\x20gusto\x20en\x20este\x20grupo✨*_\x0a\x0a_Recuerda\x20siempre\x20seguir\x20las\x20reglas\x20y\x20mantener\x20una\x20formalidad\x20respetuosa_😉\x0a\x0aSon\x20las\x20*','numeric','add','desc','format','getStatus','Asia/Jakarta','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','bind','Pon','remove','log','demote','1aLjeFV','*✅NUEVO\x20ADMIN✅*\x0a*🙋🏻‍♂️\x20Nombre*:\x20@','return\x20(function()\x20','1pSKLBQ','moment-timezone','action','subject','getProfilePicture','toLocaleDateString','533960MnDPvJ','Legi','magick\x20\x27./src/wel.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#00FFFF\x27\x20-font\x20\x27./src/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-45\x20\x27','@c.us','\x27\x20\x27','text','\x0a*📋\x20INFO*:\x20','17665LvZIbW','HH:mm:ss','exception','Wage','getTime','Pahing','red','apply','user','length','1\x20Januari\x202021','_Weno\x20ps....\x20amm😪...\x20\x20@','*\x0a\x0a','key','console','notify','participants','split','return\x20/\x22\x20+\x20this\x20+\x20\x22/','image','\x20se\x20nos\x20fue,\x20ni\x20llorar\x20es\x20bueno:)_\x0a_*Ojala\x20y\x20le\x20baya\x20bien,\x20y\x20mas\x20despues.....\x20que\x20lo\x20atropelle\x20un\x20tren!!🚉🤣*_\x0a*No\x20se\x20awiten\x20gente,\x20esten\x20seguros\x20que\x20nadie\x20lo\x20extrañara:D*',',\x20_*Bienvenido\x20a\x20','455343wIjVAh','exit'];const _0x54efb7=_0x1693;(function(_0xe37813,_0x1c3c89){const _0x56a5cb=_0x1693;while(!![]){try{const _0x196d6a=-parseInt(_0x56a5cb(0x222))+-parseInt(_0x56a5cb(0x1ff))*-parseInt(_0x56a5cb(0x1eb))+parseInt(_0x56a5cb(0x205))+-parseInt(_0x56a5cb(0x1e8))+-parseInt(_0x56a5cb(0x1e7))*parseInt(_0x56a5cb(0x1fc))+parseInt(_0x56a5cb(0x227))*parseInt(_0x56a5cb(0x22a))+parseInt(_0x56a5cb(0x225))*parseInt(_0x56a5cb(0x20c));if(_0x196d6a===_0x1c3c89)break;else _0xe37813['push'](_0xe37813['shift']());}catch(_0x221d79){_0xe37813['push'](_0xe37813['shift']());}}}(_0x14bf,0x49cf9));const _0x22dbd7=function(){let _0x14f483=!![];return function(_0x309b8d,_0xf79c98){const _0xef5a1=_0x14f483?function(){const _0x55f79b=_0x1693;if(_0xf79c98){const _0x1c54d7=_0xf79c98[_0x55f79b(0x213)](_0x309b8d,arguments);return _0xf79c98=null,_0x1c54d7;}}:function(){};return _0x14f483=![],_0xef5a1;};}(),_0xee3356=_0x22dbd7(this,function(){const _0x33540d=function(){const _0x2a3539=_0x1693,_0x42e83a=_0x33540d[_0x2a3539(0x22f)](_0x2a3539(0x21e))()[_0x2a3539(0x22f)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x42e83a['test'](_0xee3356);};return _0x33540d();});function _0x1693(_0x4f6ebf,_0xd8f2b3){_0x4f6ebf=_0x4f6ebf-0x1e6;let _0x375fa9=_0x14bf[_0x4f6ebf];return _0x375fa9;}_0xee3356();const _0x43bda8=function(){let _0xcb0e52=!![];return function(_0x219f84,_0x23bf15){const _0xd8bf9c=_0xcb0e52?function(){const _0x56fac3=_0x1693;if(_0x23bf15){const _0x402e30=_0x23bf15[_0x56fac3(0x213)](_0x219f84,arguments);return _0x23bf15=null,_0x402e30;}}:function(){};return _0xcb0e52=![],_0xd8bf9c;};}(),_0x21e15c=_0x43bda8(this,function(){const _0x5904e8=_0x1693,_0x167695=function(){const _0x3859d5=_0x1693;let _0x590095;try{_0x590095=Function(_0x3859d5(0x1fe)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x57ebc3){_0x590095=window;}return _0x590095;},_0x415e41=_0x167695(),_0x344913=_0x415e41[_0x5904e8(0x21a)]=_0x415e41[_0x5904e8(0x21a)]||{},_0x572ba8=[_0x5904e8(0x1fa),_0x5904e8(0x230),_0x5904e8(0x22b),'error',_0x5904e8(0x20e),'table',_0x5904e8(0x22d)];for(let _0x197879=0x0;_0x197879<_0x572ba8[_0x5904e8(0x215)];_0x197879++){const _0x577abd=_0x43bda8['constructor'][_0x5904e8(0x231)][_0x5904e8(0x1f7)](_0x43bda8),_0x3008c3=_0x572ba8[_0x197879],_0x4dfae4=_0x344913[_0x3008c3]||_0x577abd;_0x577abd[_0x5904e8(0x1ec)]=_0x43bda8[_0x5904e8(0x1f7)](_0x43bda8),_0x577abd['toString']=_0x4dfae4['toString']['bind'](_0x4dfae4),_0x344913[_0x3008c3]=_0x577abd;}});_0x21e15c(),samu330['on'](_0x54efb7(0x226),async _0x1afef8=>{const _0x491879=_0x54efb7;if(!welkom['includes'](_0x1afef8[_0x491879(0x22e)]))return;try{const _0x1ca849=await samu330['groupMetadata'](_0x1afef8['jid']);console[_0x491879(0x1fa)](_0x1afef8);if(_0x1afef8[_0x491879(0x201)]==_0x491879(0x1f1)){num=_0x1afef8['participants'][0x0];const _0x38c6f3=require(_0x491879(0x200)),_0x5a81e3=_0x38c6f3['tz'](_0x491879(0x1f5))[_0x491879(0x1f3)](_0x491879(0x20d));let _0x3508d9=new Date(),_0x61a730='es',_0x1d311b=new Date(0x0)[_0x491879(0x210)]()-new Date(_0x491879(0x216))[_0x491879(0x210)](),_0x3b5508=[_0x491879(0x211),_0x491879(0x1f8),_0x491879(0x20f),'Kliwon',_0x491879(0x206)][Math['floor']((_0x3508d9*0x1+_0x1d311b)/0x50ae4c0)%0x5],_0x59e2fe=_0x3508d9[_0x491879(0x204)](_0x61a730,{'weekday':_0x491879(0x22c)}),_0x35914a=_0x3508d9['toLocaleDateString'](_0x61a730,{'day':_0x491879(0x1f0),'month':'long','year':_0x491879(0x1f0)});try{pushnem=mek[_0x491879(0x219)]['fromMe']?samu330[_0x491879(0x214)][_0x491879(0x1ea)]:conts[_0x491879(0x21b)]||conts[_0x491879(0x1ed)]||conts['name']||'-';}catch{pushnem=num[_0x491879(0x21d)]('@')[0x0];}try{ppimg=await samu330[_0x491879(0x203)](_0x1afef8['participants'][0x0][_0x491879(0x21d)]('@')[0x0]+_0x491879(0x208));}catch{ppimg=_0x491879(0x1f6);}exec(_0x491879(0x207)+pushnem+_0x491879(0x1e6)+_0x5a81e3+'\x20'+_0x35914a+'\x27\x20-pointsize\x2050\x20-annotate\x20+460+200\x20\x27Bienvenido\x20a\x20'+_0x1ca849[_0x491879(0x202)]+_0x491879(0x209)+ppimg+'\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+70\x20-composite\x20\x27hamsil.jpg\x27')['on'](_0x491879(0x224),()=>reply(_0x491879(0x224)))['on'](_0x491879(0x223),()=>{const _0x508159=_0x491879;samu330[_0x508159(0x1e9)](_0x1ca849['id'],fs[_0x508159(0x228)](_0x508159(0x1ee)),MessageType[_0x508159(0x21f)],{'caption':'😙Hola,\x20@'+num[_0x508159(0x21d)]('@')[0x0]+_0x508159(0x221)+_0x1ca849[_0x508159(0x202)]+_0x508159(0x1ef)+_0x5a81e3+'*\x20del\x20*'+_0x35914a+_0x508159(0x218)+_0x1ca849[_0x508159(0x1f2)],'contextInfo':{'mentionedJid':[num]}});});}else{if(_0x1afef8[_0x491879(0x201)]==_0x491879(0x1f9))num=_0x1afef8[_0x491879(0x21c)][0x0],teks=_0x491879(0x217)+num[_0x491879(0x21d)]('@')[0x0]+_0x491879(0x220),samu330[_0x491879(0x1e9)](_0x1ca849['id'],teks,MessageType['text'],{'contextInfo':{'mentionedJid':[num]}});else{if(_0x1afef8[_0x491879(0x201)]=='promote'){num=_0x1afef8[_0x491879(0x21c)][0x0];try{ppimg=await samu330[_0x491879(0x203)](num[_0x491879(0x21d)]('@')[0x0]+_0x491879(0x208));}catch{ppimg=_0x491879(0x1f6);}thu=await samu330['getStatus'](_0x1afef8['participants'][0x0],MessageType[_0x491879(0x20a)]),teks=_0x491879(0x1fd)+num[_0x491879(0x21d)]('@')[0x0]+_0x491879(0x20b)+thu[_0x491879(0x229)]+'\x0a\x0a🥳\x20*FEILICIDADES!!*,\x20te\x20as\x20convertido\x20en\x20administrador\x20del\x20grupo\x20'+_0x1ca849[_0x491879(0x202)];let _0x5d7109=await getBuffer(ppimg);samu330[_0x491879(0x1e9)](_0x1ca849['id'],_0x5d7109,MessageType[_0x491879(0x21f)],{'caption':teks,'contextInfo':{'mentionedJid':[num]}});}else{if(_0x1afef8[_0x491879(0x201)]==_0x491879(0x1fb)){num=_0x1afef8['participants'][0x0];try{ppimg=await samu330[_0x491879(0x203)](num[_0x491879(0x21d)]('@')[0x0]+'@c.us');}catch{ppimg=_0x491879(0x1f6);}thu=await samu330[_0x491879(0x1f4)](_0x1afef8[_0x491879(0x21c)][0x0],MessageType['text']),teks=_0x491879(0x232)+num[_0x491879(0x21d)]('@')[0x0]+_0x491879(0x20b)+thu[_0x491879(0x229)]+'\x0a\x0a*😪Nimodos,\x20ya\x20no\x20eres\x20admnistrador\x20del\x20grupo*\x20'+_0x1ca849[_0x491879(0x202)];let _0x5c9e54=await getBuffer(ppimg);samu330[_0x491879(0x1e9)](_0x1ca849['id'],_0x5c9e54,MessageType['image'],{'caption':teks,'contextInfo':{'mentionedJid':[num]}});}}}}}catch(_0xf4505c){console['log']('Error\x20:\x20%s',color(_0xf4505c,_0x491879(0x212)));}});

samu330.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	})
	
samu330.on('CB:action,,call', json => {
    global.callerId = json[2][0][1].from;
    console.log(json);
    samu330.sendMessage(callerId, "Las llamadas estan prohibidas, porfavor lee las reglas🤨. Lo siento pero seras bloqueado!", MessageType.text, { quoted: { key:                                                                                                      { fromMe: false,                                                                                          participant: `0@s.whatsapp.net`},                  
	   					 message: { "documentMessage": { "title":"🚫𝐋𝐋𝐀𝐌𝐀𝐃𝐀𝐒 𝐍𝐎 𝐏𝐄𝐑𝐌𝐈𝐓𝐈𝐃𝐀𝐒🚫", 'jpegThumbnail': fs.readFileSync('./media/call.png')}
    }}})
    samu330.blockUser(callerId, "add");
    	})

//=====================================================================
samu330.on('message-update', async (mek) => {
		try {
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? samu330.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Estado del grupo : ${!isRevoke}\nEstado del contacto : ${!isCtRevoke}\nEstado de los contactos están excluidos : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || { notify: jid.replace(/@.+/, '') }
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
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'contactMessage' ? 'Contact' : int.type == 'locationMessage' ? 'Location' : int.type == 'documentMessage' ? 'Document' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = '0@s.whatsapp.net'
			var split = '❌ANTIDELETE'
			var nyan = {
			contextInfo: {
			participant: itsme,
			quotedMessage: {
			extendedTextMessage: {
			text: split,
			}
			}
			}
			}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
			const strConversation = `		 「 *ANTI-DELETE* 」
 *Nombre :* *${pushname}*
 *Numero :* ${sender.replace('@s.whatsapp.net', '')}
 *Tipe :* Text
 *Hora :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
 *Fecha :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
 *Mensaje :* ${body ? body : '-'}`
			samu330.sendMessage(from, strConversation, MessageType.text, nyan)
			} else if (int.type == 'stickerMessage') {
			var itsme = '0@s.whatsapp.net'
			var split = '❌ANTIDELETE'
			const nyanbot = {
			contextInfo: {
			participant: itsme,
			quotedMessage: {
			extendedTextMessage: {
			text: split,
			}
			}
			}
			}
			const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
			const savedFilename = await samu330.downloadAndSaveMediaMessage(int.data, `./media/${filename}`);
			const strConversation = `		 「 *ANTI-DELETE* 」
 *Nombre :* *${pushname}*
 *Numero :* ${sender.replace('@s.whatsapp.net', '')}
 *Tipe :* Sticker
 *Hora :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
 *Fecha :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

			const buff = fs.readFileSync(savedFilename)
			samu330.sendMessage(from, strConversation, MessageType.text, opt4tag)
			samu330.sendMessage(from, buff, MessageType.sticker, nyanbot)
			// console.log(stdout)
			fs.unlinkSync(savedFilename)

			} else if (int.type == 'audioMessage') {
			var itsme = '0@s.whatsapp.net'
			var split = 'ANTIDELETE'
			const perry330 = {
			contextInfo: {
			participant: itsme,
			quotedMessage: {
			extendedTextMessage: {
			text: split,
			}
			}
			}
			}
			const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
			const savedFilename = await samu330.downloadAndSaveMediaMessage(int.data, `./media/${filename}`);
			const strConversation = `		 「 *ANTI-DELETE* 」
 *Nombre :* *${pushname}*
 *Numero :* ${sender.replace('@s.whatsapp.net', '')}
 *Tipe :* Audio
 *Hora :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
 *Fecha :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

			const dio = fs.readFileSync(savedFilename)
			samu330.sendMessage(from, strConversation, MessageType.text, opt4tag)
			samu330.sendMessage(from, dio, MessageType.audio, perry330)
			// console.log(stdout)
			fs.unlinkSync(savedFilename)

			} else if (int.type == 'videoMessage') {
			var itsme = '0@s.whatsapp.net'
			var split = 'Antidelete'
			const vid = {
			contextInfo: {
			participant: itsme,
			quotedMessage: {
			extendedTextMessage: {
			text: split,
			}
			}
			}
			}
			const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
			const savedFilename = await samu330.downloadAndSaveMediaMessage(int.data, `./media/${filename}`);
			const buff = fs.readFileSync(savedFilename)
			const strConversation = `	 「 *ANTI-DELETE* 」
 *Nombre :* *${pushname}*
 *Numero :* ${sender.replace('@s.whatsapp.net', '')}
 *Tipe :* Video
 *Hora :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
 *Fecha :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`
			samu330.sendMessage(from, buff, MessageType.video, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
			fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
			var itsme = '@s.whatsapp.net'
			var split = 'Antidelete'
			const img = {
			contextInfo: {
			participant: itsme,
			quotedMessage: {
			extendedTextMessage: {
			text: split,
			}
			}
			}
			}
			const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
			const savedFilename = await samu330.downloadAndSaveMediaMessage(int.data, `./media/${filename}`);
			const buff = fs.readFileSync(savedFilename)
			const strConversation = `	 「 *ANTI-DELETE* 」
*Nombre :* *${pushname}*
 *Numero :* ${sender.replace('@s.whatsapp.net', '')}
 *Tipe :* Image
 *Hora :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
 *Fecha :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`
			samu330.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
			fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

//==============================================

samu330.on('message-new', async (mek) => {

		try {
			if (!mek.message) return
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
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
			const insom = from.endsWith('@g.us')
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			const sambot = insom ? mek.participant : mek.key.remoteJid
			////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
			pushname2 = samu330.contacts[sambot] != undefined ? samu330.contacts[sambot].vname || samu330.contacts[sambot].notify : undefined
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
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
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
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isSimi = isGroup ? simi.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiPorn = isGroup ? antiporn.includes(groupId) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAntiMedia = isGroup ? antimedia.includes(from) : false
            		const isAntiFake = isGroup ? antifake.includes(from) : false
			const isAntiLeg = isGroup ? antilegion.includes(from) : false
			const isAutoSt = isGroup ? autostick.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isPrem = prem.includes(sender)
			const isRegister = checkRegisteredUser(sender)
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const soyYo = sender == botNumber ? true : false
    		        let pushname = samu330.contacts[sender] != undefined ? samu330.contacts[sender].vname || samu330.contacts[sender].notify: undefined

			colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']       
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')     
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')    
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')  
			if (!isGroup && isCmd) console.log( '|', color(command), '\x1b[1;32m>', time, color(command), 'from', color(pushname), 'args :', (args.length))       
			if (isCmd && isGroup) console.log('|', color(command),'\x1b[1;32m>', time, color(command), 'from', (groupName), 'args :', color(args.length))


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
		
		
if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*🥳SUBES DE NIVEL🥳*\n\n*Nombre*: ${sender}\n*XP*: ${getLevelingXp(sender)}\n*Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nFelicidades!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
         
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return samu330.sendMessage(from,`Sus límites de solicitudes se ha agotado\n\n_Nota : El límite se puede obtener mediante ${prefix}buylimit`, text,{ quoted: mek})
                            samu330.sendMessage(from, `Sus limites son: ${limitCounts}`, text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
                        samu330.sendMessage(from, `Sus limites son: ${limitCounts}`, text, { quoted : mek})
                    }
				}

				
           const isLimit = (sender) =>{
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    samu330.sendMessage(from, `*Lo sentimos ${pushname2}, El límite de hoy se agotó*\n*El límite se puede obtener mediante Buylimit`, text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./src/limit.json',JSON.stringify(_limit))
           return false
       }
     }
		
		if (isRegister && isGroup ) {

            const checkATM = checkATMuser(sender)

            try {

                if (checkATM === undefined) addATM(sender)

                const uangsaku = Math.floor(Math.random() * 100) + 1000

                addKoinUser(sender, uangsaku)

            } catch (err) {

                console.error(err)

            }

        }
			
			
			
			
			
			if (isGroup) {

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

 
const bares = getLevelingLevel(sender)

			var bars = `*[▒▒▒▒▒▒▒▒▒▒] ${bares}%*`
			if (bares <= 10) {

				bars = `*[█▒▒▒▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 20) {

				bars = `*[██▒▒▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 30) {

				bars = `*[███▒▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 40) {

				bars = `*[████▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 50) {

				bars = `*[█████▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 60) {

				bars = `*[██████▒▒▒▒] ${bares}%*`

			} else if (bares <= 70) {

				bars = `*[███████▒▒▒] ${bares}%*`

			} else if (bares <= 80) {

				bars = `*[████████▒▒] ${bares}%*`

			} else if (bares <= 90) {

				bars = `*[█████████▒] ${bares}%*`

			} else if (bares <= 100) {

				bars = `*[██████████] ${bares}%*`

			} else if (bares <= 110) {

				bars = `*[██████████]+1 ${bares}%*`

			} else if (bares <= 120) {

				bars = `*[██████████]+2 ${bares}%*`

			} else if (bares <= 130) {

				bars = `*[██████████]+3 ${bares}%*`

			} else if (bares <= 140) {

				bars = `*[██████████]+4 ${bares}%*`

			} else if (bares <= 150) {

				bars = `*[██████████]+5 ${bares}%*`

			} else if (bares <= 160) {

				bars = `*[██████████]+6 ${bares}%*`
			} else if (bares <= 170) {

				bars = `*[██████████]+7 ${bares}%*`

			} else if (bares <= 180) {

				bars = `*[██████████]+8 ${bares}%*`

			} else if (bares <= 190) {

				bars = `*[██████████]+9 ${bares}%*`

			} else if (bares <= 110) {

				bars = `*[██████████]+10 ${bares}%*`

			} else if (bares <= 99999999999999) {

				bars = `*[██████████]+上帝 (Dios) ${bares}%*`
            }
        /*********** FUNCTION RANK ***********/

			const levelRole = getLevelingLevel(sender)
   	     var role = 'Novato ㋡'
        if (levelRole <= 2) {
            role = 'Novato ㋡'
        } else if (levelRole <= 4) {
            role = 'Grado principiante 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Grado principiante 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Grado principiante 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Grado principiante 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends I 忍'
        } else if (levelRole <= 154) {
            role = 'Legends I 忍'
        } else if (levelRole <= 156) {
            role = 'Legends I 忍'
        } else if (levelRole <= 158) {
            role = 'Legends I 忍'
        } else if (levelRole <= 160) {
            role = 'Legends I 忍'
        } else if (levelRole <= 162) {
            role = 'Legends I 忍'
        } else if (levelRole <= 164) {
            role = 'Legends I 忍'
        } else if (levelRole <= 166) {
            role = 'Legends II 忍'
        } else if (levelRole <= 168) {
            role = 'Legends II 忍'
        } else if (levelRole <= 170) {
            role = 'Legends II 忍'
        } else if (levelRole <= 172) {
            role = 'Legends II 忍'
        } else if (levelRole <= 174) {
            role = 'Legends II 忍'
        } else if (levelRole <= 176) {
            role = 'Legends II 忍'
        } else if (levelRole <= 178) {
            role = 'Legends II 忍'
        } else if (levelRole <= 180) {
            role = 'Legends II 忍'
        } else if (levelRole <= 182) {
            role = 'Legends II 忍'
        } else if (levelRole <= 184) {
            role = 'Legends II 忍'
        } else if (levelRole <= 186) {
            role = 'Legends II 忍'
        } else if (levelRole <= 188) {
            role = 'Legends II 忍'
        } else if (levelRole <= 190) {
            role = 'Legends II 忍'
        } else if (levelRole <= 192) {
            role = 'Legends I 忍'
        } else if (levelRole <= 194) {
            role = 'Legends II 忍'
        } else if (levelRole <= 196) {
            role = 'Legends II 忍'
        } else if (levelRole <= 198) {
            role = 'Legends II 忍'
        } else if (levelRole <= 200) {
            role = 'Legends III 忍'
        } else if (levelRole <= 210) {
            role = 'Legends III 忍'
        } else if (levelRole <= 220) {
            role = 'Legends III 忍'
        } else if (levelRole <= 230) {
            role = 'Legends III 忍'
        } else if (levelRole <= 240) {
            role = 'Legends III 忍'
        } else if (levelRole <= 250) {
            role = 'Legends III 忍'
        } else if (levelRole <= 260) {
            role = 'Legends III 忍'
        } else if (levelRole <= 270) {
            role = 'Legends III 忍'
        } else if (levelRole <= 280) {
            role = 'Legends III 忍'
        } else if (levelRole <= 290) {
            role = 'Legends III 忍'
        } else if (levelRole <= 300) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 310) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 320) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 330) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 340) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 350) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 360) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 370) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 380) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 390) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 400) {
            role = 'Legends V 忍'
        } else if (levelRole <= 410) {
            role = 'Legends V 忍'
        } else if (levelRole <= 420) {
            role = 'Legends V 忍'
        } else if (levelRole <= 430) {
            role = 'Legends V 忍'
        } else if (levelRole <= 440) {
            role = 'Legends V 忍'
        } else if (levelRole <= 450) {
            role = 'Legends V 忍'
        } else if (levelRole <= 460) {
            role = 'Legends V 忍'
        } else if (levelRole <= 470) {
            role = 'Legends V 忍'
        } else if (levelRole <= 480) {
            role = 'Legends V 忍'
        } else if (levelRole <= 490) {
            role = 'Legends V 忍'
        } else if (levelRole <= 500) {
            role = 'Legends VI 忍'
        } else if (levelRole <= 600) {
            role = 'Legends VII 忍'
        } else if (levelRole <= 700) {
            role = 'Legends VIII 忍'
        } else if (levelRole <= 800) {
            role = 'Legends IX 忍'
        } else if (levelRole <= 900) {
            role = 'Legends X 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythic VII 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythic VIII 上帝'
        } else if (levelRole <= 8000) {
            role = 'Mythic IX 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythic X 上帝'
        } else if (levelRole <= 10000) {
            role = 'Awakened Mythic 特尔邦贡'
	    } else if (levelRole <= 99999999999) {
   	         role = 'End level 程度❗'
   	     }
			
			
			
	
		
		
		//autoStiker By Samu330
if ((isAntiPorn && isBotGroupAdmins)) {
				if(!mek.message) return
				if (type === MessageType.image) {
					savedFilename = await samu330.downloadAndSaveMediaMessage (mek)
					imgbb('20a14861e4f7591f3dc52649cb07ae02', savedFilename).then(async function(response) {
						anu = await fetchJson(`api${response.url}`)

						if(anu[0].className === 'Porn' && isGroupAdmins)  {
							await samu330.sendMessage(from,'', MessageType.text, {quoted: mek})
							return
							
						} else if(anu[0].className === 'Porn' && !isGroupAdmins) {
							await samu330.sendMessage(from,'', MessageType.text, {quoted: mek})
							setTimeout(async function () {
								samu330.groupRemove(from, [sender])
							}, 2000)
							return
						}
						
						if(anu[0].className === 'Hentai' && isGroupAdmins) {
							await samu330.sendMessage(from,'', MessageType.text, {quoted: mek})
							return

						}  else if(anu[0].className === 'Hentai' && !isGroupAdmins) {
							await samu330.sendMessage(from,'', MessageType.text, {quoted: mek})
							setTimeout(async function () {
								samu330.groupRemove(from, [sender])
							}, 2000)
							return
						}
						
						if(anu[0].className === 'Sexy') return samu330.sendMessage(from,'Cuidado com oq manda em amigo, to com antiporn ativado', MessageType.text, {quoted: mek})
						
						fs.unlinkSync(savedFilename)

					}).catch((error) => console.error(error));
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
			if (messagesC.includes("haces")){
			samu330.updatePresence(from, Presence.composing)
			reply("Nada, aqui sentado esperando mensajes y comandos para ejecutar:D")
	}
			if (messagesC.includes("bot")){
			samu330.updatePresence(from, Presence.composing)
			reply("Que ai🤡")
	}
			if (messagesC.includes("como%20estas")){
			samu330.updatePresence(from, Presence.composing)
			reply("Uff, algo cansado y tu?")
	}
			if (messagesC.includes("bien")){
			samu330.updatePresence(from, Presence.composing)
			reply("que bueno🤠")
	}
			if (messagesC.includes("free%20fire")){
			samu330.updatePresence(from, Presence.composing)
			reply("Esa onda da asco, quien juega eso eh🤨🤮!!")
	}
			if (messagesC.includes("puto")){
			samu330.updatePresence(from, Presence.composing)
			reply("eres")
	}
			if (messagesC.includes("jaja")){
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
		
		
		

			function addMetadata(packname, playstore) {	
				if (!packname) packname = 'WABot';
        			if (!playstore) playstore = 'https://www.youtube.com/channel/UCHD4T8Pfcv5PFVzsAbfAPZA';
				let name = `${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
          				"android-app-store-link": playstore,
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
			
		

if(budy.match('bot') && !botNumber){
rm = [
result = fs.readFileSync(`./temp/Samu.webp`)
]
nk = rm[Math.floor(Math.random() * rm.length)]
  samu330.sendMessage(from, nk, sticker, {
quoted: fimg, "forwardingScore": 9999, "isForwarded": true
  })
}
		
		
if(budy.match('rosas') && !botNumber){
rm = [
result = fs.readFileSync(`./media/rosas.mp3`)
]
nk = rm[Math.floor(Math.random() * rm.length)]
  samu330.sendMessage(from, nk, audio, {
  mimetype: 'audio/mp4', quoted: fliveLoc, duration :-999999999999999, ptt: true
  })
}
			
			
if(budy.match('luna') && !botNumber){
rm = [
result = fs.readFileSync(`./media/luna.mp3`)
]
nk = rm[Math.floor(Math.random() * rm.length)]
  samu330.sendMessage(from, nk, audio, {
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
  if (!isRegister) return reply(mess.only.daftarB)
  if (isBanned) return reply('USTED ES UN USUARIO BANEADO')
  
  uptime = process.uptime()
  const uangku = checkATMuser(sender)
			
				menu = `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
·͙*̩̩͙✧˚̩̥̩̥*̩̩̥͙·̩̩̥͙*̩̩̥͙☆˚̩̥̩̥*̩̩͙‧͙·͙♩　　ꈤꌩꍏꈤ　　♬·͙*̩̩͙˚̩̥̩̥*̩̩̥͙·̩̩̥͙☆*̩̩̥͙˚̩̥̩̥*̩̩͙✧‧͙

🔐Hola *${pushname}* 
Hora: ${jmn}
Fecha: ${calender}
╔═════════════════════════════╗
ٌ‖${samu} [ ${prefix} ]  Prefijo:${samu}✏️
ٌ‖${samu} Tiempo de actividad:${samu} *${kyun(uptime)}*🕐
ٌ‖${samu} Modo:${samu} *ON*✅
ٌ‖${samu} Grupo:${samu} *${groupName}*👥
ٌ‖${samu} Número de grupos:${samu} *${_registered.length}*⚡
ٌ‖${samu} Número de chats:${samu} *${totalchat.length}*🔥
ٌ‖${samu} Numero del Dueño wa.me/+529984907794${samu}🏆
╚═════════════════════════════╝
︵‿︵‿︵‿︵‿︵　　‿︵‿︵‿︵‿︵‿︵‿︵
*SI AI ALGUN ERROR, PORFAVOR AGANMELO SABER PARA SOLUCIONARLO.*
_Para eso usa el comando:_
${prefix}bug
︵‿︵‿︵‿︵‿︵　　‿︵‿︵‿︵‿︵‿︵‿︵

*Informacion del usuario*

☆ ҉ ◢▅◣Ξ◥▅◤Ξ◢▅◣Ξ◥▅◤ ҉ ★
◦ NÚMERO : wa.me/${sender.split("@")[0]}*
◦ Xp : *${getLevelingXp(sender)}*
◦ Nível : *${getLevelingLevel(sender)}*
◦ Clasificación : *${role}*
◦ 💵Cash : Rp *${uangku}*
☆ ҉ ◢▅◣Ξ◥▅◤Ξ◢▅◣Ξ◥▅◤ ҉ ★

${samu}Total de usuarios Premium${samu} : *${prem.length}*


𝗠𝗬 𝗖𝗔𝗡𝗔𝗟 𝗗𝗘 𝗬𝗢𝗨𝗧𝗨.𝗕𝗘: https://youtu.be/chMc57gjmkI

▁ ▂ ▃ ▄ ▅ ▆ ▇ ▌　❝ 𝐚𝐛𝐨𝐮𝐭 𝐦𝐞 ❞　 ▌ ▇ ▆ ▅ ▄ ▃ ▂ ▁

${samu}◦ 🌐Navegador :${samu} *${samu330.browserDescription[1]}*
${samu}◦ 📡servidor :${samu} *${samu330.browserDescription[0]}*
${samu}◦ ✅version :${samu} *${samu330.browserDescription[2]}*
${samu}◦ 🚄Velocidad :${samu} *${process.uptime()}*
${samu}◦ 📲Sistema operativo :${samu} *${samu330.user.phone.device_manufacturer}*
${samu}◦ 🪀version de${samu} *WhatsApp* : *${samu330.user.phone.wa_version}*
	     █║▌│║│║█║█║▌│█║▌│║│║█

_Lista de MENUs_

${bodyM} ${prefix}menu1 *(Menu de Media*
${bodyM} ${prefix}menu2 *(Menu de Sticker)*
${bodyM} ${prefix}menu3 *(Menu de Grupos)*
${bodyM} ${prefix}menu4 *(Menu de descargas)*
${bodyM} ${prefix}menu5 *(Otros comandos)*
${bodyM} ${prefix}menu6 *(Comandos +18)* 
${bodyM} ${prefix}menu7 *(Comandos de logos)*
${bodyM} ${prefix}menu8 *(Comandos de xp)*

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
		     🌸 S̸̢̡̨̨̧̡̧̢̨̨̢̧̧̛̛͖̯̞͚͖͇̫͔̫̘̯̫͓̮̼̝͇͇̮͈̥̙̪̫̣̼̣̺̙̹͓͍̪̹̹̯̣͕̘͔̻͙̠̦̪̥͓̟̤̻̫̮̦̹̥̯͈̦̝̺̮͈̖͍̗̩̺̻̟͔̤̬͕̖͖̞̜̹̦̞͒̿͆͋͗̔̆́͐̏͒͒͂̇͂͌̇́̈͛͊̐̀̾̄̓̑͋͒̍̔̌̒͊̏̽̋̈́͐̒̈́͂͌̀̐͊̄̃̍͛̾̔̈́́͐̿͂̅͊̉̈́̉̆̓͐͛͌̅͐̽̊̒͌̿͋̅̈̂̿͑͆̅̕̕̕̕͘̚͜͜͜͜͝͠͝͝͝͝͝͝͝͝ͅͅͅá̸̡̡̨̨̡̨̡̧̧̨̛͖̺̠̼̻̮̬͔̼̪̻̖̩̝̲͍͙̻͎̜̼̪̩͇͕̗̞̥̜̤̲̬͓̝̖̤̠̘̙͍̩̹̗̥̗͔̩͓͚̦̼̳̳̫͕̭̲̙͓̺̣̠̯̙̹̼͕̝̥͎̣͚̠̦̙̖͈̟̼͔̝͙͉͚̗̟̫̜̪̉̊̆̃̈́̃̎̾̇̂̀̈́͊̈́̇̌̈́̀̓̉̀̐̀͊̐̋͊͒͒̇̋̄̑́̆̃̏̈́͒͛̎͐͒͗́̓́͒̈́͌͋̓̓̓̇̄͆̌̇̈́̓̿̑͒̐̓͆̒̅̎̑̑̽̿̎͋́̿̀͂̇̌͌͘̚̕̚̕̚̚̕͘͜͠͝͝͠͝͝m̶̨̡̧̢̡̡̢̡̡̛̛̛̰̗͖̤̥̦̙̯̩͖̫̩͓̤̖͈̤̬͚̲̯̫̹̱͙̞͓͔̫͖̩͉̲̗̹͚͖̝̺̣̼̺̘̼̳̭̳̥̥̣̫̻̟͖̝̣̞̲͓̮̩̣̻̰̗̣̩̬̺̬̗̻̘̳̗̠̹̠̟̯̻͓̤̓̀͂͆̑͂̑̂̐̓́͐̄̀̀̄̒̀̏̅̋͛̌̎̑̓̉͊͛̆̒̓̒̈́͐͋͆͂͊͒͊̌̀̀̏̔̒̀̌̽̈́͗̑͑̍̊̋̈́͒̅̓̈́̅̓̍̌͛̈́̑̽̈́̌̑͋̀͛̾̃̏̅́̅̄̚̚̚̚͜͜͜͜͜͝͝͝͝͠͝͝͝͝͝ͅͅͅų̶̧̢̨̧̧̛͚̣͙̱̩̳͎͎͍̰͙̠̼̰͙̹̫̻̟̬͚͓̰̭̯̖̻̱̝̣͙̖̙̟̠̱̥͍͔̺̳̠͖̮̠͙̞͇̙̮͖̝̺͔͖̥͎̞̦̠͎̮͕̯̣͕̘̼̖̫̪̼͓̥͚̦̞̜̣̞̻̝͇͕̻͍̤͙͕͉͔̾̃́̐̎̏̽̈́̉̃̃͊͆̋̅̈́̄͊̽͑͐̂̿͋̓̉͛̎̏͐̃͗̽͐̔̃͆̐̽̈́̃͂̐̂̂̈́̂̽̅̆̓̋́̋̂̓̍͌́͊̓̈́̐͛́̂̂̌̏̇͋̈̅͊̾́́̈́̒̒͐͛̉̈̃͒̔͘͘̕̚͜͜͜͝͝͝͝͝͝͠͝3̸̧̢̨̡̡̧̧̢̧̢̡̢̧̛̛̫͇͍͓̹̝͉̥̯͔̻̙̙̠̜̼͔̜̥̯͎̻͈̼̺̹̜̙̘̭̘͚̮̝̪̮͕̠̩͈͚͖̙̪̤͍̫̤̻̮͉̥̘̮̮̫͉͔̠͉̩̜͖̹̟͎̬̬̘̣̘̟͓̘̺̳͍̥͕̥̬̹́̂̅̒̾͑̄͗͒̐̀͛̅̃̉̈́͛̈́̈́͗͗̑̀̆̓͌̔̒̀̒̂̇͆͌͌̇̈́͗̒̉̾̿̽͊̿̏̎͑̃̍̀̽͊͛́̏͂̊͛͋̀̀̽̋̀̂̉̅̓́̇́̽͑̆͂̀͒̈́̅͊̌̈́̉̽́̇̓̚̚͘͘͘̚͜͜͝͝͝͝ͅͅͅ3̴̡̨̢̨̢̢̧̧̢̡̨̨̡̛̭̺̹̬̺̭͖̩̮̹̳̗̱̗̪̜̺̻̝̫͓̖͈͙̠̪͔̗̺͇̩̻̪̗̗̙̱̥͖͇̹̱̟̦̙̣̰͉̘͙̭̙̤̱̠͔͉͎̣͈͔̩͉̭̜̠͖̤̰͙͉̖͇̥̥̟̜͎̹̥̬̤̌̂́̑́̔͑͑̽͆͌̈́͛͌͒̀͗̓̆͐̒͗̐́͋̀̈́̾̓̋̇͐͂͑͌̌̊̇̿̎͑̀̒̿̐͒͂̽̉̽͌̒̀̔͂͛̎͌̈́̀͑̍͊́̃̇̄́͑̐̆̎̀̋̑̎̿̎̋͑̑̈́̌̉͐̓̌͌͆̈́͑͘̚̚͘͜͠͝͠͝ͅͅͅ0̷̢̡̧̧̢̨̢̧̡̢̛̛̛͈̘̤̜̠̜̹̖̙͔̫͕̼͍͔͓̞̫̖͙̺̖̜̹̠̭̺̗̞̦̻͚̹̝̝̭͍̭͍̮̭̳̜̫͕͈̲̝̹̟͍͕̼͓̜̖͍̖̖͕̪̖̜̜͇͍̣͎͉̼̹̺͔͚͉̲̥͔̺̟̦̞͙̫̩̥̤̗̜̒̏̈́͒̔͐̀͋͛̈̽̓͊̀̈́̍̄͗̎͋͒̾̉̄̇̇̈́̓̌̒͆͑̾̾͑̀̃̈̒̽̔́̾̽̃̽̉̽̎̍̀̐̋́̽̏̅̃̾͗͑̏́̊̍͂̇̑̿͆̈̓͗̈̐́̇̈́͒̈͒̋͗͆͘͘͘̕̚̕͘̚͝͠͝͠͝.li 🌸
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
${bodyM} ${samu}${prefix}autost${samu}
${bodyM} ${samu}${prefix}antidelete${samu}
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
	
case 'menu8':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  uptime = process.uptime()
const Menux = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*
*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ********************************
${bodyM} ${prefix}transferir
${bodyM} ${prefix}cartera
${bodyM} ${prefix}buylimit
${bodyM} ${prefix}evento
${bodyM} ${prefix}mining
${bodyM} ${prefix}nivel
${bodyM} ${prefix}leveling
${bodyM} ${prefix}giftlimit
${bodyM} ${prefix}addprem
`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menux, text, {
quoted: fgc})              
  break
				
		
				
				
				
				case 'transferir':

				if (!isRegister) return reply(mess.only.daftarB)

				if (!q.includes('|')) return  reply('Porfavor escribe el comando adecuadamente: .transferir tag|monto')

                const tujuan = q.substring(0, q.indexOf('|') - 1)

                const jumblah = q.substring(q.lastIndexOf('|') + 1)

                if (checkATMuser(sender) < jumblah) return reply(`No tienes suficiente dinero para realizar la transferencia`)

                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`

                fee = 1000 *  jumblah

                hasiltf = jumblah - fee

                addKoinUser(tujuantf, hasiltf)

                confirmATM(sender, jumblah)

                addKoinUser('5219984907794@s.whatsapp.net', fee)

                reply(`*la transferencia de dinero ha sido exitosa*\nde : +${sender.split("@")[0]}\nPara : +${tujuan}\nTotal Transferido : ${jumblah}\nimpuesto : ${fee}`)

                break

				case 'cartera':

				if (!isRegister) return reply(mess.only.daftarB)

				const kantong = checkATMuser(sender)

				reply(`*┏⎆ 「 ATM 」⊰━┓*\n┣⎆ *Nombre* : ${pushname}\n┣⎆ *Numero* : ${sender.split("@")[0]}\n┣⎆ *Dinero* : ${kantong}\n┗━━━━━━━━━━`)

				break

				case 'buylimit':

				if (!isRegister) return reply(mess.only.daftarB)

				payout = body.slice(10)

				const koinPerlimit = 2000

				const total = koinPerlimit * payout

				if ( checkATMuser(sender) <= total) return reply(`lo siento, tu dinero no es suficiente. recoge y comprar más tarde`)

				if ( checkATMuser(sender) >= total ) {

					confirmATM(sender, total)

					bayarLimit(sender, payout)

					await reply(`*「 PAGO EXITOSO 」*\n\n*remitente* : *Samu330*\n*receptor* : ${pushname}\n*compra nominal* : ${payout} \n*precio límite* : ${koinPerlimit}/limit\n*Te queda* : ${checkATMuser(sender)}\n\nproceso exitoso con número de pago:\n${createSerial(15)}`)

				} 

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





				case 'evento':

				     if (isBanned) return reply(mess.only.benned)               

					if (!isGroup) return reply(mess.only.group)

					if (!isOwner) return reply(mess.only.ownerB)

                                        if (args.length < 1) return reply('Escribe 1 para activar')

                                        if (Number(args[0]) === 1) {

                                                if (isEventon) return reply('*Deporsi esta activo* !!!')

                                                event.push(from)

                                                fs.writeFileSync('./src/event.json', JSON.stringify(event))

                                                reply('*「 SUCCSESS 」 Los EVENTOS estan activados en este grupo*')

                                        } else if (Number(args[0]) === 0) {

                                                event.splice(from, 1)

                                                fs.writeFileSync('./src/event.json', JSON.stringify(event))

                                                reply('*「 SUCCSESS 」 Desactivado*')

                                        } else {

                                                reply('*1* para activar y *0* para desactivar')

                                        }

                                        break

                                        case 'mining':
					if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
                                        if (!isRegister) return reply(mess.only.daftarB)

                                        if (isLimit(sender)) return reply('Uuuuu lo sieto pero no tienes limites disponibles')

                                        if (!isEventon) return reply(`Lo siento ${pushname}, No estan activados los eventos`)

                                        if (isOwner) {

                                                const one = 9999

                                                addLevelingXp(sender, one)

                                                addLevelingLevel(sender, 99)

                                                reply(`*Porque eres nuestro Parte del equipo* _bot_.... enviando ${one}Xp para ti`)

                                        } else {

                                                const mining = Math.ceil(Math.random() * 10000)

                                                addLevelingXp(sender, mining)

                                                await reply(`*felicitaciones* ${pushname} usted obtiene *${mining}Xp*`)

                                        }

                                        await limitAdd(sender)

                                        break
                                        
                                        case 'limit':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        checkLimit(sender)
                                        break
				
				
				
				

                                        case 'level':

                if (!isLevelingOn) return reply('NO ESTA ACTIVADO EL LEVELING')

                const userLevel = getLevelingLevel(sender)

                const userXp = getLevelingXp(sender)

                if (userLevel === undefined && userXp === undefined) return reply('NO ESTA ACTIVADO EL LEVELING')

                sem = sender.replace('@s.whatsapp.net','')

                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Nombre : ${sem}\n┣⊱ User XP :  ${userXp}\n┣⊱ Rango :  ${role}\n┣⊱ Progreso: ${bars}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                samu330.sendMessage(from, resul, text, { quoted: fgc})

                .catch(async (err) => {

                        console.error(err)

                        await reply(`Error!\n${err}`)

                    })

            break

            case 'leveling':

                if (!isGroup) return reply(mess.only.group)

                if (!isGroupAdmins) return reply(mess.only.admin)

                if (args.length < 1) return reply('Escribe 1 para activar')

                if (args[0] === '1') {

                    if (isLevelingOn) return reply('*Ya estaba activado*')

                    _leveling.push(groupId)

                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))

                     reply('*ACTIVADO*')

                } else if (args[0] === '0') {

                    _leveling.splice(groupId, 1)

                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))

                     reply('Desactivado')

                } else {

                    reply(' **1* para activar y *0* para desactivar')

                }

            break

            case 'giftlimit': 

				if (!isOwner,!isPrem) return reply('Debes ser usuario premium para usar esta opcion')

				const nomerr = args[0].replace('@','')

                const jmla = args[1]

                if (jmla <= 1) return reply(`El regalo debe ser mas de *1*`)

                if (isNaN(jmla)) return reply(`weee ash🙄\nEl regalo debe de ser un numero`)

                if (!nomerr) return reply(`lo siento formato incorrecto\ningrese los parámetros correctos\nEjemplo : ${prefix}giftlimit @5219984907794 20`)

                const cysz = nomerr + '@s.whatsapp.net'

                var found = false

                        Object.keys(_limit).forEach((i) => {

                            if(_limit[i].id === cysz){

                                found = i

                            }

                        })

                        if (found !== false) {

                            _limit[found].limit -= jmla

                            const updated = _limit[found]

                            const result = `El límite de la cuota de regalos fue exitoso, con SN: ${createSerial(8)} en ${moment().format('DD/MM/YY HH:mm:ss')}
*「 REGALO DE LIMITES 」*
• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`

                            console.log(_limit[found])

                            fs.writeFileSync('./src/limit.json',JSON.stringify(_limit));

                            reply(result)

                        } else {

                                reply(`Lo siento, numero ${nomerr}, no registrado en la base de datos!`)

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




case 'loli':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
	        		if (isBanned) return reply(mess.only.benned)    
			    	if (!isRegister) return reply(mess.only.daftarB)		
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (isLimit(sender)) return reply('Sus limites se han acabado')
					members_id = []
					teks = (args.length > 1) ? body.slice(9).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `☼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mention All 〙✪══'+teks+'╚═〘  *NyanBot* 〙', members_id, true)
					await limitAdd(sender)
					break
				
				
case 'mapa':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Ingresa el nombre del área')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.gambar)
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
if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sam
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
			
			                         	AdiGans = await getBuffer(ppimg)
                                        veri = sender
                                        if (isGroup) {
                                                addRegisteredUser(sender, nombre, edad, time, serialUser)
                                                samu330.sendMessage(from, AdiGans, image, { quoted: ftoko, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nombre:', color(nombre, 'cyan'), 'Edad:', color(edad, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                                        } else {
                                                addRegisteredUser(sender, nombre, edad, time, serialUser)
                                                samu330.sendMessage(from, AdiGans, image, { quoted: ftoko, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nombre:', color(nombre, 'cyan'), 'Edad:', color(edad, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                                        }
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
				const nombregc = args.join(' ')
				const group = await samu330.groupCreate(`${nombregc}`, ["5219984907794@s.whatsapp.net"])
				reply(`*EL GRUPO FUE CREADO CORRECTAMENTE*\nid del grupo: ${group.gid}`)
				samu330.sendMessage(group.gid, "hello everyone", text, {quoted: fliveLoc})
				break
				
				
				
			


				
				case 'sticker':
			case 'stiker':
			case 's':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				await limitAdd(sender)
					break
				
				
				
				
				
				
				
				
				case 'simi':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				await limitAdd(sender)
				break
				
				
				
			case 'hidetag1':
			case 'hidetag':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
				if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? args.join(' ').trim() : `${args.join(' ')}`
					for (let mem of groupMembers) {
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true, MessageType.text)
				break
			
			case 'setname':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
				await samu330.groupUpdateSubject(from, `${args.join(' ')}`)
				samu330.sendMessage(from, `*「 NOMBRE DEL GRUPO CAMBIADO A:」\n${args.join(' ')}*`, MessageType.text)
				break
			case 'setdesc':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
				await samu330.groupUpdateDescription(from, `${args.join(' ')}`)
				samu330.sendMessage(from, `*「 DESCRIPCION DEL GRUPO CAMBIADA A:」\n${args.join(' ')}*`, MessageType.text)
				break
			case 'uptime':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
				runtime = process.uptime()
				teks = `${kyun(runtime)}`
				
				samu330.sendMessage(from, `${teks}`, MessageType.text)
				break
			
			case 'imagen':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
				if (!isRegister) return reply(mess.only.daftarB)
				if (args.length < 1) return reply('Porfavor ingresa una ecuacion para poder calcular')
				calc = args.join(' ')
				op = await fetchJson(`https://api.vhtear.com/calculator?value=${calc}&apikey=${ApiVhtear}`)
				reply(`
       CALCULADORA
╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮
╽ ┌──────────┐ ┃
┃    _${calc}_
┃ ├──────────┤ ┃
┃  *Resultado*:
┃ ├──────────┤ ┃
┃    _${op.result.data}_
╿ └──────────┘ ╿
╰─┨ ⃞📟 𝜍𝛼𝜄𝜍 📟⃞ ┠─╯`)
				break
				
				
			case 'modeanime':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (args.length < 1) return reply('Escriba *1* para activar, y *0* para desactivar')
					if ((args[0]) === '1') {
						if (isAnime) return reply('El modo Antiotakus esta activado deporsi')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Activado en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === '0') {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Modo anime desactivado en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
					reply('Escriba *1* para activar, y *0* para desactivar')
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
						samu330.sendMessage(from, `Para uso en grupos: *${prefix}antidelete activar*`, MessageType.text)
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
				} else if (argz[1] == '0') {
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
				await limitAdd(sender)
                    break
				
		case 'emoji':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURIComponent(emoji[0])
                    } catch {
                        emoji = encodeURIComponent(emoji)
                    }
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${api}`)
                    await samu330.sendMessage(from, ini_buffer, sticker, { quoted: ftoko })
				await limitAdd(sender)
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Samu330`)
		    reply(mess.wait)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${api}&text=${ini_txt}`).then((gambar) => {
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
                    })
				await limitAdd(sender)
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Samu330|Sam y Perry`)
				reply(mess.wait)
                    a = args.join(' ')
                    txt1 = a.split("|")[0];
                    txt2 = a.split("|")[1];
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${api}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
                    })
				await limitAdd(sender)
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Samu330`)
				reply(mess.wait)
                    ini_txt = args.join(' ')
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${api}&text=${ini_txt}`).then((gambar) => {
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
                    })
				await limitAdd(sender)
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':	
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Samu330|Sam y Perry`)
		    reply(mess.wai)
		    a = args.join(' ')
                    txt1 = a.split("|")[0];
                    txt2 = a.split("|")[1];
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${api}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
                    })
				await limitAdd(sender)
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Sam y Perry`)
				reply(mess.wait)
                    ini_txt = args.join(' ')
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${api}&text=${ini_txt}`).then((gambar) => {
                        samu330.sendMessage(from, gambar, image, { quoted: fgc })
                    })
				await limitAdd(sender)
                    break
				
		case 'google':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				await limitAdd(sender)
                    break
				
		case 'wpsearch':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
                    if (args.length == 0) return reply(`Example: ${prefix + command} gatos`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${api}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await samu330.sendMessage(from, ini_buffer, image, { quoted: ftoko })
				await limitAdd(sender)
                    break
				
		case 'translate':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				await limitAdd(sender)
                    break
			
		case 'acordes':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Circulo de amor`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${api}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Chord : \n${get_result.chord}`
                    reply(ini_txt)
				await limitAdd(sender)
                    break
				
		case 'xnxx':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				await limitAdd(sender)
                    break	
			
		 case 'xnxxsearch':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				await limitAdd(sender)
                    break
				
		case 'tagstick':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
npm = `^c`                                                
reply('*Weno ps..... me tengo q ir:) adios:D*')
                                                       exec(npm, (err, stdout) => {              
							       if(err) return samu330.sendMessage(from, "uuuujale, no quiero dormir ahorita:D", text, {quoted: mek})                    
							       if (stdout) {            
								       samu330.sendMessage(from, stdout, text, {quoted: nay})
                                                                                   }                                                                                                                                   })
break




case 'lucky':
if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
if (a === `┃ │  ${a} │  ${a} │ ${a}`) addLevelingLevel(sender, 99)
await reply(`*FELICIDADES!!*\nAs obtenido *99* de XP`)
if (a === `┃ │  ${b} │  ${b} │ ${b}`) addLevelingLevel(sender, 50)
await reply(`*FELICIDADES!!*\nAs obtenido *50* de XP`)
if (a === `┃ │  ${c} │  ${c} │ ${c}`) addLevelingLevel(sender, 30)
await reply(`*FELICIDADES!!*\nAs obtenido *30* de XP`)
if (a === `┃ │  ${e} │  ${e} │ ${e}`) addLevelingLevel(sender, 999)
await reply(`*😵ENHORABUENA!!*\nAs obtenido *999* de XP!😯👏🏻`)
if (a === `┃ │  ${f} │  ${f} │ ${f}`) addLevelingLevel(sender, 9999)
await reply(`*🤑🥳🥳FELICIDADES!!*\nAs obtenido el premio mayor, que es de: *9999* de XP`)
if (a === `┃ │  ${g} │  ${g} │ ${g}`) addLevelingLevel(sender, 0)
await reply(`*vaya, suerte tienes, pero no as ganado xp*😪`)
aaaa = `┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ 
╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰─┨⃞🔮𝉃𝜄𝜐𝉃𝜍𝜅𝉃𝛾🔮⃞ ┠─╯`
reply(`${aaaa}`)
				await limitAdd(sender)
break




				
				
				
	case 'entrabot':
samu330.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Ya entre al grupo😉')
break
				
			case 'fb':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				await limitAdd(sender)
                    break
	
				
case 'play2':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				await limitAdd(sender)
                    break
				
				
case 'playvid':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
                    await samu330.sendMessage(from, get_video, video, { mimetype: 'video/mp4', duration :-999999999999999, filename: `${get_info.title}.mp4`, quoted: fvid })
				await limitAdd(sender)
                    break
				
				
		case 'ytsearch':
				if (isLimit(sender)) return reply('Sus limites se an agotado, porfavor compra mas')
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
                                        break
                                case 'delbad':
                                
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (args.length < 1) return reply( `Escribe ${prefix}delbad [palabra]. Ejemplo: ${prefix}delbad bego`)
                                        let dbw = body.slice(12)
                                        bad.splice(dbw)
                                        fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
                                        reply('Se quito con exito')
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
				await limitAdd(sender)
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
