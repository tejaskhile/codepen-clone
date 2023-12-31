import React, { useEffect, useState } from 'react'
import Header from './Header'
import '../App.css'
import Editor from './Editor'

const Home = () => {

  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
  const [srcDoc, setSrcDoc] = useState("")

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc (`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `)
    }, 500)
    return () => clearTimeout(timeout)
  }, [html, css, js])
  
  

  return (
    <>
      <div className='container'>
        <Header/>  
        <div className='codeEditors'>
          <Editor 
          displayName = "HTML"
          language = "xml"
          symbol = "<>"
          value ={html}
          onChange={setHtml}
          />
          <Editor 
          displayName = "CSS"
          language = "css"
          symbol = "#"
          value ={css}
          onChange={setCss}
          />
          <Editor 
          displayName = "JS"
          language = "javascript"
          symbol = "()"
          value ={js}
          onChange={setJs}
          />
        </div>
        <div>
          <iframe
          title='output'
          sandbox='allow-scripts'
          srcDoc={srcDoc} 
          frameborder="0"
          width="100%"
          height="100%"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Home
