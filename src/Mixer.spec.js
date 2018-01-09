import React from 'react'
import { mount } from 'enzyme'
import { Button, Div } from './index'

describe('Mixer test', () => {
    it('Button should be mounted', () => {
        const wrapper = mount(<Button />)
        expect(wrapper.find('button').length).toEqual(1)
    })
    it('Div should be mounted', () => {
        const wrapper = mount(<Div />)
        expect(wrapper.find('div').length).toEqual(1)
    })
    it('ClickHandler should be called 1 time: dClk eClk', () => {
        const clickHandler = jest.fn()
        const wrapper = mount(<Button onClick={() => clickHandler()} />, {attachTo: document.getElementById('root')})
        document.body.click()
        wrapper.simulate('click')
        expect(clickHandler.mock.calls.length).toEqual(1)
    })
    it('ClickHandler should be called 2 times: dClk eClk dClk', () => {
        const clickHandler = jest.fn()
        const wrapper = mount(<Button onClick={() => clickHandler()} />, {attachTo: document.getElementById('root')})
        document.body.click()
        wrapper.simulate('click')
        document.body.click()
        expect(clickHandler.mock.calls.length).toEqual(2)
    })
    it('ClickHandler should be called 2 times: dClk eClk dClk eClk', () => {
        const clickHandler = jest.fn()
        const wrapper = mount(<Button onClick={() => clickHandler()} />, {attachTo: document.getElementById('root')})
        document.body.click()
        wrapper.simulate('click')
        document.body.click()
        wrapper.simulate('click')
        expect(clickHandler.mock.calls.length).toEqual(2)
    })
    it('ClickHandler should be called 2 times: dClk eClk dClk dClk', () => {
        const clickHandler = jest.fn()
        const wrapper = mount(<Button onClick={() => clickHandler()} />, {attachTo: document.getElementById('root')})
        document.body.click()
        wrapper.simulate('click')
        document.body.click()
        document.body.click()
        expect(clickHandler.mock.calls.length).toEqual(2)
    })
    it('ClickHandler should be called 3 times: dClk eClk dClk eClk dClk eClk', () => {
        const clickHandler = jest.fn()
        const wrapper = mount(<Button onClick={() => clickHandler()} />, {attachTo: document.getElementById('root')})
        document.body.click()
        wrapper.simulate('click')
        document.body.click()
        wrapper.simulate('click')
        document.body.click()
        wrapper.simulate('click')
        expect(clickHandler.mock.calls.length).toEqual(3)
    })
})