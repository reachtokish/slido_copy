"use client"

var QRCode = require('qrcode')

export async function getQrCodePath(id: string) {
  QRCode.toDataURL('I am a pony!', function (err: any, url: any) {
    console.log(url)
  })
}