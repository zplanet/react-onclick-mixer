import React, { Component } from 'react'
import DocumentClickListener from './DocumentClickListener'

const withMixer = (WrappedComponent) => {    
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = { dClk: false, eClk: false, status: false, ps: false }
            this.documentClickHandler = this.documentClickHandler.bind(this)
            this.touch = this.touch.bind(this)
        }
        touch(signal, evt) {
            const newState = Object.assign({}, this.state)

            newState[signal] = true

            if (newState.status) {
                newState.status = false
                newState.ps = true
                if (this.props.onClick) { this.props.onClick(evt) }
            }
            else {
              if (newState.dClk && newState.eClk) {
                newState.dClk = false
                newState.eClk = false

                if (newState.ps) {
                  newState.ps = false
                }
                else {
                  newState.status = true
                  if (this.props.onClick) { this.props.onClick(evt) }
                }
              }
              else {
                newState.ps = false
              }
            }

            this.setState(newState)
        }
        documentClickHandler(evt) {
            this.touch('dClk', evt)
        }
        componentDidMount() {
            DocumentClickListener.append(this.documentClickHandler)
        }
        componentWillUnmount() {
            DocumentClickListener.remove(this.documentClickHandler)
        }
        render() {
            const newProps = Object.assign({}, this.props)
            delete newProps.onClick
            return <WrappedComponent {...newProps} onClick={(evt) => this.touch('eClk', evt)} />
        }
    }
}

export default withMixer
