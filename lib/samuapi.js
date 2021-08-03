const axios = require('axios')
const link = 'https://arugaz.herokuapp.com'
const fileyt = 'https://www.solvetic.com/uploads/tutorials/monthly_06_2019/bdb8cc3d4148dc77ac095b705fa64d31.png'
const eroryt = 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/error-t.jpg'

const insta = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/ig?url=${url}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const ytmp3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/youtube?url=${url}`)
    .then((res) => {
		if (res.data.error) resolve({status: 'error', error: res.data.error, link: eroryt})
		resolve({thumb: res.data.result.image, title: res.data.result.title, link: res.data.result.mp3})
    })
    .catch((err) =>{
        reject(err)
    })
})

const ytmp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/youtube?url=${url}`)
    .then((res) => {
		if (res.data.error) resolve({status: 'error', error: res.data.error, link: eroryt})
		resolve({thumb: res.data.result.image, title: res.data.result.title, link: res.data.result.mp4})
    })
    .catch((err) =>{
        reject(err)
    })
})

const fb = async (url) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/fb?url=${url}`)
	.then((res) => {
		if (res.data.error) resolve({status: 'error', link: res.data.result})
		resolve({linkhd: res.data.result.hd, linksd: res.data.result.sd})
	})
	.catch((err) =>{
        reject(err)
    })
})

const stalkig = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/stalk?username=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `User: ${res.data.Username}\nName: ${res.data.Name}\nBio: ${res.data.Biodata}\nFollower: ${res.data.Jumlah_Followers}\nFollowing: ${res.data.Jumlah_Following}\nPost: ${res.data.Jumlah_Post}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const stalkigpict = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/stalk?username=${url}`)
    .then((res) => {
		if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.Profile_pic}`)
    })
    .catch((err) =>{
        reject(err)
    })
})

const wiki = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/wiki?q=${url}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const chord = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/chord?q=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

module.exports = {
    insta,
    ytmp3,
    ytmp4,
	  fb,
    stalkig,
    stalkigpict,
    wiki,
    chord
}
