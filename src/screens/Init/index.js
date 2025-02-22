import { h } from 'preact'
import { useState, useCallback, useMemo } from 'preact/hooks'
import Input from '../../components/Input'
import Button from '../../components/Button'
import '../../styles/index.css'

function Init ({ handleNextStepNav }) {
    const [url, setUrl] = useState('')

    const onInputChange = useCallback((value) => setUrl(value), [])
    const onButtonClick = useCallback(() => handleNextStepNav(url), [url, handleNextStepNav])

    const buttonDisabled = useMemo(() => {
        const regexp = new RegExp(/^https:\/\/www\.warcraftlogs\.com\/reports\/([A-Za-z0-9]+)\?fight=(\d+)*/)
        const valid = regexp.test(url)
        return !valid
    }, [url])

    return (
        <div className="screen">
            <div className="input-control" style={{ width: '100%', maxWidth: '600px' }}>
                <Input placeholder={'Link to Gachi club...'} onInput={onInputChange} />
                <div style={{ display: 'flex' }}>
                    <Button disabled={buttonDisabled} label={'Get fisting'} onClick={onButtonClick} />
                </div>
            </div>
        </div>
    )
}

export default Init
