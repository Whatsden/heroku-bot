const Asena = require("../Utilis/events");
const { getFfmpegBuffer } = require("../Utilis/fFmpeg")
const { MessageType, Mimetype } = require("@adiwajshing/baileys")
Asena.addCommand(
  { pattern: 'once ?(.*)', fromMe: true, desc: 'reply to viewonce' },
  async (message, match) => {
    if (
      !message.reply_message.sticker ||
      message.reply_message === false ||
      message.reply_message.animated
    )
      return await message.sendMessage('hi')
    return await message.sendMessage(
      await getFfmpegBuffer(
        await message.reply_message.downloadAndSaveMediaMessage("photo"),
        "photo.png",
        "photo"
      ),
      { quoted: message.data, viewOnce:true },
      MessageType.image
    )
  }
)