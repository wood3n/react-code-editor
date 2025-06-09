import { loader } from '@monaco-editor/react'
import Diff from './diff';
import Editor from './editor';
import './app.css'

loader.config({ paths: { vs: 'https://unpkg.com/monaco-editor@0.52.2/min/vs' } });

function App() {
  return (
    <>
      <h1>编辑器</h1>
      <Editor />
      <h1>diff</h1>
      <Diff />
    </>
  )
}

export default App
