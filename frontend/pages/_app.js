import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '../components/layout/layout'

import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [staticState, setStaticState] = useState({
    settings: {
      nightMode: false,
      browser: {}
    },
    caseId: -1,
    nickname: '',
    sentences: [],
    recordCount: 0,
    recordAudio: [],
    recordAudioFile: [],
    result: {},
    reuse: false,
    metaData: {}
  })

  const changeStaticState = (type, data, type2, data2, event) => {
    function changeState() {
      if (type === 'audioData') {
        let recordAudio
        let recordAudioFile

        if (staticState.recordAudio.length === staticState.recordCount + 1) {
          if (data === null) {
            recordAudio = [...staticState.recordAudio.slice(0, -1)]
            recordAudioFile = [...staticState.recordAudioFile.slice(0, -1)]
          } else {
            recordAudio = [...staticState.recordAudio.slice(0, -1), data[0]]
            recordAudioFile = [...staticState.recordAudioFile.slice(0, -1), data[1]]
          }
        } else {
          recordAudio = [...staticState.recordAudio, data[0]]
          recordAudioFile = [...staticState.recordAudioFile, data[1]]
        }

        setStaticState({
          ...staticState, recordAudio, recordAudioFile
        })
      } else if (type === 'settings') {
        if (type2) {
          setStaticState({ ...staticState, settings: { ...staticState.settings, [type2]: data }})
        }
      } else if (type === 'reset') {
        setStaticState({
          settings: {
            nightMode: false,
            browser: {}
          },
          caseId: -1,
          nickname: '',
          sentences: [],
          recordCount: 0,
          recordAudio: [],
          recordAudioFile: [],
          result: {},
          reuse: false,
          metaData: {}
        })
      } else {
        if (type2) {
          setStaticState({ ...staticState, [type]: data, [type2]: data2 })
        } else {
          setStaticState({ ...staticState, [type]: data })
        }
      }
    }
    changeState()
  }

  // ??????????????? ?????? ????????? ?????????, ?????? ????????? ?????? ????????? ??????
  useEffect(() => {
    const reloadHandler = (event) => {
      // ?????? ????????? ????????? ?????? ????????? ??????????????? ?????? ????????? ??????
      console.log(event.target.location.pathname)
      if (event.target.location.pathname.slice(0, 6) !== '/share' && event.target.location.pathname.slice(0, 6) !== '/') {
        event.preventDefault()
        event.returnValue = ''
      }
    }

    const before = () => {
      // ?????? ?????? ????????? ????????? ????????? ???????????????????????? ????????????????????? ????????? ??????
      if (router.pathname.split('/')[1] === 'record' || router.pathname === '/') {
        alert('?????? ?????? ?????? ???????????? ????????? ??? ????????????.')
        return false
      }
      return true
    }

    if (/Android/i.test(navigator.userAgent)) {
      setStaticState({...staticState, settings: { ...staticState.settings, browser: { name: 'android', audioType: 'webm' }}})
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      setStaticState({...staticState, settings: { ...staticState.settings, browser: { name: 'ios', audioType: 'mp4' }}})
    } else if (navigator.userAgent.indexOf("Chrome") > -1) {
      setStaticState({...staticState, settings: { ...staticState.settings, browser: { name: 'chrome', audioType: 'webm' }}})
    } else if (navigator.userAgent.indexOf("Safari") > -1) {
      setStaticState({...staticState, settings: { ...staticState.settings, browser: { name: 'safari', audioType: 'mp4' }}})
    }

    window.addEventListener('beforeunload', reloadHandler)
    router.beforePopState(before)
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')

    if (staticState.settings.nightMode === false) {
      body.style.backgroundColor = '#f3f3f3'
    } else {
      body.style.backgroundColor = 'rgb(28, 28, 30)'
    }
  }, [staticState.settings.nightMode])

  return (
    <Layout nightMode={staticState.settings.nightMode}>
      <Head>
        <title>????????? - AI????????????</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0 user-scalable=no' />
      </Head>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy='beforeInteractive'></Script>
      <Component {...pageProps} staticState={staticState} changeStaticState={changeStaticState} />
    </Layout>
  )
}

export default MyApp
