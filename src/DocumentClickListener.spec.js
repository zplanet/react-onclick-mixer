import DocumentClickListener from './DocumentClickListener'

describe('DocumentClickListener test', () => {
    it('ClickHandler should be called', () => {
        const clickHandler = jest.fn()
        DocumentClickListener.append(() => clickHandler())
        window.document.body.click()
        expect(clickHandler.mock.calls.length).toEqual(1)
    })
    it('ClickHandler should not be called after handler is removed', () => {
        const clickHandler = jest.fn()
        const eventHandler = () => clickHandler()
        DocumentClickListener.append(eventHandler)
        DocumentClickListener.remove(eventHandler)
        window.document.body.click()
        expect(clickHandler.mock.calls.length).toEqual(0)
    })
})