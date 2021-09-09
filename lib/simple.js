const fs = require('fs')
const util = require('util')
const path = require('path')
const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')


exports.smsg = (conn, m, hasParent) => {
  if (!m) return m
  let M = m.constructor
	if (m.key) {
		m.id = m.key.id
    m.isBaileys = m.id.startsWith('3EB0') && m.id.length === 12
		m.chat = m.key.remoteJid
		m.fromMe = m.key.fromMe
		m.isGroup = m.chat.endsWith('@g.us')
		m.sender = m.fromMe ? conn.user.jid : m.participant ? m.participant : m.key.participant ? m.key.participant : m.chat
	}
	if (m.message) {
		m.mtype = Object.keys(m.message)[0]
		m.msg = m.message[m.mtype]
		if (m.mtype === 'ephemeralMessage') {
			exports.smsg(conn, m.msg)
			m.mtype = m.msg.mtype
			m.msg = m.msg.msg
		}
		let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
		m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
		if (m.quoted) {
		  let type = Object.keys(m.quoted)[0]
			m.quoted = m.quoted[type]
      if (['productMessage'].includes(type)) {
	  	  type = Object.keys(m.quoted)[0]
  			m.quoted = m.quoted[type]
      }
      if (typeof m.quoted == 'string') m.quoted = { text: m.quoted }
			m.quoted.mtype = type
			m.quoted.id = m.msg.contextInfo.stanzaId
      m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('3EB0') && m.quoted.id.length === 12 : false
			m.quoted.sender = m.msg.contextInfo.participant
		  m.quoted.fromMe = m.quoted.sender == conn.user.jid
			m.quoted.text = m.quoted.text || m.quoted.caption || ''
		  m.quoted.mentionedJid = m.quoted.contextInfo ? m.quoted.contextInfo.mentionedJid : []
			m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false
        let q = await conn.loadMessage(m.chat, m.quoted.id)
        return exports.smsg(conn, q)
      }
      let vM = m.quoted.fakeObj = M.fromObject({
        key: {
          fromMe: m.quoted.fromMe,
          remoteJid: m.chat,
          id: m.quoted.id
        },
        message: quoted,
        ...(m.isGroup ? { participant: m.quoted.sender } : {})
      })
      if (m.quoted.url) m.quoted.download = () => conn.downloadM(vM)
      m.quoted.copy = () => exports.smsg(conn, M.fromObject(M.toObject(vM)))
      m.quoted.forward = (jid, forceForward = false)  => conn.forwardMessage(jid, vM, forceForward)
      m.quoted.copyNForward = (jid, forceForward = false, options = {})  => conn.copyNForward(jid, vM, forceForward, options)
      m.quoted.cMod = (jid, text = '', sender = m.quoted.sender, options = {}) => conn.cMod(jid, vM, text, sender, options)
		}
    if (m.msg.url) m.download = () => conn.downloadM(m)
		m.text = m.msg.text || m.msg.caption || m.msg || ''
    m.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, m,  options)
    m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
    m.forward = (jid, forceForward = false)  => conn.forwardMessage(jid, m, forceForward)
    m.copyNForward = (jid, forceForward = false, options = {})  => conn.copyNForward(jid, m, forceForward, options)
    m.cMod = (jid, text = '', sender = m.sender, options = {}) => conn.cMod(jid, m, text, sender, options)
	}
  return m
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}
