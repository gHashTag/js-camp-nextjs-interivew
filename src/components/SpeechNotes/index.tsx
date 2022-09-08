//import fs from 'fs'
import React, { useEffect } from 'react'
import { fetchSpeechData } from '../../helpers/fetchSpeech'
import { speechData } from '../../types'

export function SpeechNotes({ children, version, uniqueName }: SpeechNotesT) {
  // const fetchSpeech = async (jsonData: speechData[], currentSpeech: speechData) => {
  //   if (!!currentSpeech && currentSpeech.version < version) {
  //     const speechData = await fetchSpeechData(children)
  //     console.log('🚀 - res', speechData)
  //     // remove old file
  //     // save sound file into public folder
  //     // fetch this in Speech Api
  //     const updatedItem = {
  //       speechFile: 'path to speech',
  //       version,
  //       uniqueName
  //     }
  //     // play speech
  //     const newJsonItem1 = JSON.stringify([
  //       ...jsonData.filter(item => item.uniqueName !== uniqueName),
  //       updatedItem
  //     ])
  //     //   fs.writeFile('../../../public/speechData.json', newJsonItem1, err =>
  //     //     console.log(err)
  //     //   )
  //   } else if (!!currentSpeech) {
  //     // get speech file
  //     // play speech
  //   } else {
  //     const speechData = await fetchSpeechData(children)
  //     console.log('🚀 - res', speechData)
  //     // create speech with children text
  //     // save file
  //     // play this file
  //     const newItem = {
  //       speechFile: 'path to speech',
  //       version,
  //       uniqueName
  //     }
  //     const newJsonItem3 = JSON.stringify([...jsonData, newItem])
  //     //   fs.writeFile('../../../public/speechData.json', newJsonItem3, err =>
  //     //     console.log(err)
  //     //   )
  //   }
  // }

  // useEffect(() => {
  //   fs.readFile('../../../public/speechData.json', 'utf8', function (err, data) {
  //     const jsonData = JSON.parse(data) as speechData[]
  //     const currentSpeech = jsonData.find(speech => speech.uniqueName === uniqueName)

  //     fetchSpeech(jsonData, currentSpeech)
  //   })
  // }, [])
  return <></>
}

interface SpeechNotesT {
  children: string
  version: number
  uniqueName: string
}
