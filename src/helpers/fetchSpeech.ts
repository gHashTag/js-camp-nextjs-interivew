export const fetchSpeechData = async (text: string) => {
  return await (
    await fetch('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Api-Key ${process.env.NEXT_PUBLIC_YANDEX_SPEECH_API_KEY}`
      },
      body: JSON.stringify({
        folderId: process.env.NEXT_PUBLIC_YANDEX_FOLDER_ID,
        text,
        lang: 'ru-RU',
        voice: 'alena',
        format: 'oggopus'
      })
    })
  ).json()
}
