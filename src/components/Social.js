import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/gladysleng" target="_blank"><i class="fa fa-github"></i></a>
                <a href="https://www.facebook.com/gladys.leng.5" target="_blank"><i class="fa fa-facebook-square"></i></a>
                <a href="https://Linkedin.com/in/yinleng" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="mailto:gladysyyleng@gmail.com" target="_blank"><i class="fa fa-envelope"></i> </a>
            </div>
        )
    }
}
export default Social