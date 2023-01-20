import React from 'react'
import PopupHeader from './popupHeader'
import SubmitButton from '../buttons/submitButton'
class settingCoVerification extends React.Component {
    state = {
        count: 60,
        countEnded: false
    }
    componentDidMount = () => {
        this.myInterval = setInterval(() => {
            this.setState((prevState) => ({ count: prevState.count - 1 }))
        }, 1000)
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.count === 0 && prevState.count !== this.state.count) {
            clearInterval(this.myInterval)
            this.setState({ countEnded: true, count: 60 })
        }
    }
    displayInputFields = () => {
        return this.props.inputArray.map((element, index) => {
            return (
                <input
                    style={{
                        borderRadius: '15px', display: 'inline-block',
                        width: '70px', height: '70px', fontSize: '30px', outline: 'none', paddingLeft: '25px', border: '2px solid rgb(0,0,0,0.5)'
                    }}
                    type='text'
                    name='code'
                    maxLength='1'
                    key={index}
                    onChange={(e) => { this.props.handleChange(e.target, index, e) }}
                    onFocus={(e) => e.target.select()}
                />
            )
        })
    }
    componentWillUnmount = () => {
        clearInterval(this.myInterval)
    }
    onSendCodeAgainClick = () => {
        this.setState({ countEnded: false })
        this.myInterval = setInterval(() => {
            this.setState((prevState) => ({ count: prevState.count - 1 }))
        }, 1000)
    }
    render() {
        const { countEnded } = this.state
        const { onCloseClick, onSubmit } = this.props
        return (
            <div className='cVC'>
                <PopupHeader onCloseClick={onCloseClick} headTitle='Verify your phone number' />
                <div className='cVW f-jCenter-aCenter-fColumn'>
                    <div className='cVT' style={{ paddingBottom: '20px', fontSize: '17px' }}>Please enter the code that we sent over SMS to {this.props.phoneNumber}</div>
                    <form className='f-jCenter-aCenter-fColumn' onSubmit={(e) => {
                        onSubmit(e)
                    }}>
                        <div className='cVI f-jSpaceAround-aCenter-fRow'>
                            {this.displayInputFields()}
                        </div>
                        {countEnded ? null : <div style={{ paddingTop: '5px' }}>Expires in {this.state.count} seconds</div>}
                        <div>
                            <SubmitButton buttonText='Verify' customStyle={{ width: '150px', borderBottom: 'none', padding: '20px 0px' }} />
                        </div>
                        <div className='cVT' style={{ paddingTop: '10px' }}>Didn't get a text?
                            <span
                                className='cVTL'
                                style={!countEnded ? { textDecoration: 'line-through', cursor: 'text' } : null}
                                onClick={() => {
                                    if (countEnded) {
                                        this.onSendCodeAgainClick()
                                    }
                                }}
                            > Send again
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default settingCoVerification