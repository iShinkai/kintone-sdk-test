import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './components/App'
;(() => {
  kintone.events.on('app.record.index.show', (event) => {
    console.log('kintone UI Components')
    const container = document.createElement('div')
    kintone.app.getHeaderSpaceElement().append(container)

    ReactDOM.render(<App />, container)

    return event
  })
})()
