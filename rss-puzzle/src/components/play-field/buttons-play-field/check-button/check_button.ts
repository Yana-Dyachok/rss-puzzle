import Button from '../../../button/button';

class CheckButton extends Button {
    constructor() {
        super('check_btn', 'Check');
        this.setDisabled(true);
    }   
}

export default CheckButton;