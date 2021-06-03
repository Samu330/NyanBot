const { default: Axios } = require('axios')
const cheerio = require('cheerio')
const qs = require('qs')
const FormData = require('form-data')

function ssstik(url) {
     return new Promise((resolve, reject) => {
          var BASEurl = 'https://ssstik.io'
          Axios.request({
               url: BASEurl,
               method: 'get',
               headers: {
                    'cookie': '__cfduid=deb9cec7a40793d1abe009bb9961a92d41617497572; PHPSESSID=7ivsp9hc6askg1qocpi8lfpn7n; __cflb=02DiuEcwseaiqqyPC5q2cQqNGembhyZ5QaychuqFzev83; _ga=GA1.2.131585469.1617497575; _gid=GA1.2.1629908100.1617497575; _gat_UA-3524196-6=1',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
                    'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"'
               }
          })
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    const urlPost = $('form[data-hx-target="#target"]').attr('data-hx-post')
                    const tokenJSON = $('form[data-hx-target="#target"]').attr('include-vals')
                    const tt = tokenJSON.replace(/'/g, '').replace('tt:', '').split(',')[0]
                    const ts = tokenJSON.split('ts:')[1]
                    // console.log({ pst: urlPost, tt: tt, ts: ts })
                    var config = {
                         headers: {
                              'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                              'cookie': '__cfduid=deb9cec7a40793d1abe009bb9961a92d41617497572; PHPSESSID=7ivsp9hc6askg1qocpi8lfpn7n; __cflb=02DiuEcwseaiqqyPC5q2cQqNGembhyZ5QaychuqFzev83; _ga=GA1.2.131585469.1617497575; _gid=GA1.2.1629908100.1617497575; _gat_UA-3524196-6=1',
                              'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
                              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
                         },
                         dataPost: {
                              'id': url,
                              'locale': 'en',
                              'tt': tt,
                              'ts': ts
                         }
                    }
                    Axios.post(BASEurl + urlPost, qs.stringify(config.dataPost), { headers: config.headers })
                         .then(({ data }) => {
                              // console.log(data)
                              const $ = cheerio.load(data)
                              const result = {
                                   status: true,
                                   text: $('div > p.maintext').text(),
                                   pic: $('div > img').attr('src'),
                                   videonowm: BASEurl + $('div > a.without_watermark').attr('href'),
                                   videonowm2: $('div > a.without_watermark_direct').attr('href'),
                                   music: $('div > a.music').attr('href')
                              }
                              if ($('div > a.without_watermark_direct').attr('href') !== undefined) {
                                   resolve(result)
                              } else {
                                   reject({ status: false, message: 'Este enlace fue descargado previamente' })
                              }
                         })
                         .catch(reject)
               })
               .catch(reject)
     })
}

exports.ssstik = ssstik
