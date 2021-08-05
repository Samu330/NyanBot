/* eslint-disable no-async-promise-executor */
/**
 * @ Author: ArugaZ/YogaSakti
 * @ Create Time: 2021-05-31 22:33:11
 * @ Modified by: Danang Dwiyoga A (https://github.com/dngda/)
 * @ Modified time: 2021-07-09 13:31:29
 * @ Description:
 */

import fetch from 'node-fetch'
import FormData from 'form-data'
import { writeFile, readFileSync, unlinkSync } from 'fs'
import fileType from 'file-type'

const { fromBuffer } = fileType


/**
 * Fetch Text from Url
 *
 * @param {String} url
 * @param {Object} options
 */

const fetchText = (url, options) => new Promise(async (resolve, reject) => {
    try {
        const response = await fetch(url, options)
        const text = await response.text()
        return resolve(text)
    } catch (err) {
        console.error(err)
        reject(err)
    }
})

/**
 * Fetch base64 from url
 * @param {String} url
 */
const fetchBase64 = (url, mimetype) => new Promise(async (resolve, reject) => {
    try {
        const res = await fetch(url)
        const _mimetype = mimetype || res.headers.get('content-type')
        res.buffer()
            .then((result_1) => resolve(`data:${_mimetype};base64,` + result_1.toString('base64')))
    } catch (err) {
        console.error(err)
        reject(err)
    }
})


export {
    fetchText,
    fetchBase64,
}
