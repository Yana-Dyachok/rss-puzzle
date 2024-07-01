import Button from '../../../button/button';

class ContinueButton extends Button {
    constructor() {
        super('continue_btn', 'Continue');
        this.setDisabled(true);
    }   
}

export default ContinueButton;
