export default (domElement) => {
    if (domElement) {
        const currentUserSelect = domElement.style.userSelect
        domElement.style.userSelect = 'all'
        if (window.getSelection) {
            if (window.getSelection().empty) {
                // Chrome
                window.getSelection().empty()
            } else if (window.getSelection().removeAllRanges) {
                // Firefox
                window.getSelection().removeAllRanges()
            }
        } else if (document.selection) {
            // IE
            document.selection.empty()
        }

        if (document.selection) {
            const range = document.body.createTextRange()
            range.moveToElementText(domElement)
            range.select().createTextRange()
            document.execCommand('copy')
        } else if (window.getSelection) {
            const range = document.createRange()
            range.selectNodeContents(domElement)
            window.getSelection().addRange(range)
            document.execCommand('copy')
        }
        domElement.style.userSelect = currentUserSelect
    }
}