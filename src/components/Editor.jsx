import React, { useRef } from 'react'
import '../styles/Editor.css'
import '../App.css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

const Editor = (props) => {

  const editor = useRef()
  const wrapper = useRef()
  const editorWillUnmount = () => {
    editor.current.display.wrapper.remove()
    wrapper.current.hydrated = false
  }

  const {
    displayName,
    symbol,
    language,
    value,
    onChange,
  } = props;

  function handleChange(editor, data, value){
    onChange(value)
  }


  return (
    <>
      <div className='editor-container'>
        <div className='title-bar'>
            <div className='title'>
                <span>{symbol}</span>
                <p>{displayName}</p>
            </div>
            <button>
                <i className="fa-solid fa-gear"></i>
            </button>
        </div>
        
          <ControlledEditor
          ref={wrapper}
          className='controlled-editor'
          onBeforeChange={handleChange}
          value={value}
          language
          options={{
            mode: language,
            theme: 'material',
            lineWrapping: true,
            lineNumbers: true,
          }}
          editorDidMount={(e) => editor.current = e}
          editorWillUnmount={editorWillUnmount}
          />
      
        
      </div>
    </>
  )
}

export default Editor
