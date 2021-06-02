const { WAConnection } = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require("fs")

const samu330 = new WAConnection()
exports.samu330 = samu330

exports.connect = async() => {
    console.log(chalk.whiteBright('╭─── [ LOG ]'))
    let auth = './Samu330.json'
    samu330.logger.level = 'warn'
    samu330.on("qr", () => {
        console.log(`Escanea el codigo...`)
    })
    fs.existsSync(auth) && samu330.loadAuthInfo(auth)
    samu330.on('Conectado🙋🏻‍♂️', () => {
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("Connecting..."))
    })
    samu330.on('open', () => {
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("WA Version : " + megayaa.user.phone.wa_version))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("OS Version : " + megayaa.user.phone.os_version))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("Device : " + megayaa.user.phone.device_manufacturer))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("Model : " + megayaa.user.phone.device_model))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright("OS Build Number : " + megayaa.user.phone.os_build_number))
        console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[  STATS  ]"), chalk.whiteBright('Bienvenido'))
        const authInfo = megayaa.base64EncodedAuthInfo()
        fs.writeFileSync(auth, JSON.stringify(authInfo, null, '\t'))
    })
    await samu330.connect({ timeoutMs: 30 * 1000 })
    return samu330
}
