const { WAConnection } = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require("fs")

const samu330 = new WAConnection()
exports.samu330 = samu330

exports.connect = async() => {
    console.log(chalk.keyword("blue")('◦ Conectando ◦'))
    let auth = './Samu330.json'
    samu330.logger.level = 'warn'
    samu330.on("qr", () => {
        console.log(chalk.keyword("yellow")('⏲  Escanea el codigo...'))
    })
    fs.existsSync(auth) && samu330.loadAuthInfo(auth)
    samu330.on('connecting', () => {
        console.log(chalk.whiteBright("⌛"), chalk.keyword("red")("Estado de NyanBot">
    })
        samu330.on('open', () => {
        console.log(chalk.keyword("green")('╒═══ '), chalk.keyword("blue")('⌈ '), chalk>
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("WA Version : ")>
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("OS Version : ")>
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("Device : "), ch>
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("Model : "), cha>
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("OS Build Number>
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼>
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keywo>
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keywo>
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keywo>
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼>
        const authInfo = samu330.base64EncodedAuthInfo()
        fs.writeFileSync(auth, JSON.stringify(authInfo, null, '\t'))
    })
    await samu330.connect({ timeoutMs: 30 * 1000 })
    return samu330
}
