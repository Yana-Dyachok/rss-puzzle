import Button from '../button/button';

import './login_button.scss';

class LoginButton extends Button {
    constructor() {
        super('login_btn', 'Login');
        this.setDisabled(true); 
    }
}

export default LoginButton;
