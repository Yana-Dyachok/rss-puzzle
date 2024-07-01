import Button from '../../button/button';

import './popup_button.scss';

class ReturnButton extends Button {
    constructor() {
        super('popup_btn', 'Return');

        this.onClick(() => {
            const popup: HTMLDivElement | null = document.querySelector('.popup');
            if (popup) {
                popup.remove();
            }
        });
    }
}

export default ReturnButton;
