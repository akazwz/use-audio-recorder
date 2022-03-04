import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useAudioRecorder } from '../src'

const App = () => {
  const { startRecording, status, stopRecording, blob } = useAudioRecorder()
  return (
    <div>
      <text>{status}</text>
      <button>start</button>
      <button>stop</button>
      <audio src={blob ? URL.createObjectURL(blob) : ''} controls/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
