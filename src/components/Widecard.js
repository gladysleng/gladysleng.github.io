import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
                <div class="compdet">
                    <span >{this.props.title}</span>
                </div>
            </div>
        )
    }
}
export default Widecard