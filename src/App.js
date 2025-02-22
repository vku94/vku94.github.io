import { h, Component } from 'preact'
import { useState } from 'preact/hooks'
import Input from './components/Input'
import Button from './components/Button'
import Loader from './components/Loader'
import './styles/index.css'

function App () {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="app">
            {isLoading && <Loader/>}
            <div className="header">
                <img src="/public/logo.webp" className="logo" alt="logo" />
                <h2>All rights reserved but probably now</h2>
            </div>
            <div className="intro" style={{ marginTop: '50px' }}>
                <div className="input-control" style={{ width: '100%', maxWidth: '600px' }}>
                    <Input />
                    <div style={{ display: 'flex' }}>
                        <Button label={'Get fisting'} onClick={() => setIsLoading(true)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
