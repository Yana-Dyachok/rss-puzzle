import ContinueButton from './continue-button/continue_btn';
import CheckButton from './check-button/check_button';
import AutoCompleteButton from './auto-complete-button/auto_comp_button';
import './buttons_play_field.scss';

class ButtonsPlayField {
    private buttonsPlayField: HTMLDivElement;
    continueBtn: ContinueButton;
    checkBtn: CheckButton;
    autoCompleteBtn: AutoCompleteButton;

    constructor() {
        this.buttonsPlayField = document.createElement('div');
        this.buttonsPlayField.classList.add('play-field_buttons');
        this.continueBtn= new ContinueButton();
        this.checkBtn= new CheckButton();
        this.autoCompleteBtn= new AutoCompleteButton();
    }

    private createBtnPlayField(): void {
        this.buttonsPlayField.append(this.checkBtn.getRootElement(), this.continueBtn.getRootElement(), this.autoCompleteBtn.getRootElement())  
    }

    getRootElement(): HTMLDivElement {
        this.createBtnPlayField();
        return this.buttonsPlayField;
    }
}

export default ButtonsPlayField;