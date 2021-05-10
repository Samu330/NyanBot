#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs -y
apt-get install ffmpeg libwebp -y
apt-get install wget -y
apt-get install imagemagick -y
apt-get install tesseract -y
npm i node-tesseract-ocr
npm i cheerio
npm i
npm i @adiwajshing/baileys@3.4.1
npm start
