import './input_field.scss';
import './error.scss';

class CreateInputField {
    private form: HTMLFormElement;

    constructor() {
        this.form = document.createElement('form');
        this.form.classList.add('login_form');
    }

    private createFormElements() {
        this.appendElements([
            this.createLabel('firstname', 'First name:'),
            this.createInput('text', 'firstname'),
            (Object.assign(document.createElement('div'), { classList: ['login_error first-name_error'] })),
            this.createLabel('surname', 'Surname:'),
            this.createInput('text', 'surname'),
            (Object.assign(document.createElement('div'), { classList: ['login_error surname_error'] })),
        ]);
    }

    private createInput = (type: string, id: string): HTMLInputElement => 
    Object.assign(document.createElement('input'), { type, id, classList: ['login_input'], required: true });

    private createLabel = (forLabel: string, text: string): HTMLLabelElement => 
    Object.assign(document.createElement('label'), { htmlFor: forLabel, textContent: text });

    private appendElements = (elements: HTMLElement[]) => 
    elements.forEach(element => this.form.append(element));

    getRootElement(): HTMLFormElement {
        this.createFormElements();
        return this.form;
    }
}

export default CreateInputField;