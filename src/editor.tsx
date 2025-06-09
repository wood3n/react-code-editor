import { Editor as MonacoEditor, loader } from '@monaco-editor/react'

loader.config({ paths: { vs: 'https://unpkg.com/monaco-editor@0.52.2/min/vs' } });

function Editor() {
  return (
    <>
      <MonacoEditor
        defaultLanguage='json'
        defaultValue='{ "a": 1, "b": 2 }'
        theme="light"
        options={{
          minimap: {
            enabled: false,
          },
          glyphMargin: false,
          folding: true,
          showFoldingControls: 'always',
          fontSize: 14,
          tabSize: 2,
          formatOnPaste: true,
          lineNumbersMinChars: 3, // 保留至少 2 个字符宽度
          scrollBeyondLastLine: false,
          automaticLayout: true,
          quickSuggestions: true,
          padding: { top: 8, bottom: 8 },
          overviewRulerBorder: false,
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },
          smoothScrolling: true,
          scrollPredominantAxis: false,
        }}
        height={800}
      />
    </>
  )
}

export default Editor
