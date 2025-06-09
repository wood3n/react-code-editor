import { DiffEditor, loader } from '@monaco-editor/react'

loader.config({ paths: { vs: 'https://unpkg.com/monaco-editor@0.52.2/min/vs' } });

function Diff() {
  return (
    <>
      <DiffEditor
        originalLanguage='json'
        modifiedLanguage='json'
        original='{ "a": 1, "b": 2 }'
        modified='{ "a": 1, "b": 3 }'
        theme="light"
        options={{
          accessibilityVerbose: false,
          codeLens: false,
          contextmenu: false,
          copyWithSyntaxHighlighting: false,
          automaticLayout: true,
          minimap: {
            enabled: false,
          },
          ignoreTrimWhitespace: true,
          // 右侧显示diff概览区域
          renderOverviewRuler: true,
          // 不需要显示左侧 gutter 区域，增加左侧代码显示区域面积
          renderGutterMenu: false,
          renderSideBySide: true,
          diffCodeLens: false,
          diffAlgorithm: 'legacy',
          diffWordWrap: 'on',
          enableSplitViewResizing: true,
          dragAndDrop: false,
          smoothScrolling: true,
          // 自动折叠相同行
          hideUnchangedRegions: {
            enabled: true,
          },
          scrollbar: {
            verticalScrollbarSize: 8,
            verticalSliderSize: 8,
          },
        }}
        height={800}
      />
    </>
  )
}

export default Diff
