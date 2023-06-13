import React from 'react'
import ReactDOM from 'react-dom/client'
import { PortafolioApp } from './PortafolioApp.jsx'
import './styles.css'
import { Provider } from 'react-redux'
import { persiStor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store } >
      <PersistGate loading={null} persistor={ persiStor } >
        <PortafolioApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
