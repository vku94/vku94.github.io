import { h } from 'preact'
import {useCallback, useContext, useMemo, useRef, useState} from 'preact/hooks'
import AppContext from '../../providers/appProvider'
import Error from '../../screens/Error'
import Button from '../../components/Button'
import Input from '../../components/Input'
import extractPlayerCasts from '../../transformers/extractPlayerCasts'
import { generateNote } from '../../core'
import copyToClipboard from '../../utils/copyToClipboard'

function Note () {
    const textRef = useRef(null)
    const [customPlayerName, setCustomPlayerName] = useState('')
    const { reportRawData, selectedSkills, selectedPlayer } = useContext(AppContext)

    const noteText = useMemo(() => {
        const castsObj = extractPlayerCasts(reportRawData, selectedPlayer.id)
        return generateNote(castsObj, customPlayerName || selectedPlayer.name, selectedSkills)
    }, [reportRawData, selectedPlayer, selectedSkills, customPlayerName])

    const handleCustomPlayerNameInput = useCallback((value) => {
        setCustomPlayerName(value)
    }, [])

    const handleCopyToClipboard = useCallback(() => {
        if (textRef.current) {
            copyToClipboard(textRef.current)
        }
    }, [textRef])

    return !!selectedSkills.length && selectedPlayer ? (
        <div className="screen" style={{ flexDirection: 'column' }}>
            <div style={{ marginBottom: '20px', width: '300px' }}>
                <Input label="Custom player name" placeholder="Enter your name buddy" onInput={handleCustomPlayerNameInput} />
            </div>
            <pre ref={textRef} className="mrt-note-result" style={{ margin: '20px' }}>
                {noteText}
            </pre>
            <div style={{ marginTop: '40px', marginBottom: '40px' }}>
                <Button label={'Copy'} onClick={handleCopyToClipboard} />
            </div>
        </div>
    ) : (
        <Error />
    )
}

export default Note
