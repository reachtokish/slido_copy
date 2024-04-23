"use server";

import db from "@/db/db";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import fs from "fs";
import { headers } from "next/headers";

export async function createSession(formData: any) {
  const data = Object.fromEntries(formData.entries());
  const id = uuidv4();

  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";

  console.log(data);

  const qrCodePath = getQrCode(id, fullUrl);

  const createdSession = await db.session.create({
    data: {
      sessionName: data.sessionName,
      id,
      qrCodeImagePath: `${id}.png`,
    },
  });
}

async function getQrCode(id: any, fullUrl: any) {
  const attachUrl = `${fullUrl}review/${id}`;
  const qrDataUrl = await QRCode.toDataURL(attachUrl);
  var base64Data = qrDataUrl.replace(/^data:image\/png;base64,/, "");
  fs.promises.writeFile(`public/qr_codes/${id}.png`, base64Data, "base64");
  // QRCode.toDataURL('https://google.com', function (err: any, url: any) {
  //   console.log(url)
  // })
}

export async function addReview(formData: any, sessionId: any) {
  const data = Object.fromEntries(formData.entries());
  await db.answers.create({
    data: {
      userName: data.username,
      userId: data.userid,
      rating: Number(data.rating),
      review: data.review,
      sessionId,
    },
  });
}
