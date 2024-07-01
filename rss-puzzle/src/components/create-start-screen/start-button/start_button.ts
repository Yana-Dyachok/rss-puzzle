import Button from '../../button/button';
import MainPage from '../../../pages/main-page/main_page';

import './start_button.scss';

class StartButton extends Button {
    private mainPage: MainPage;
    
    constructor() {
        super('start_btn', 'Start');
        this.mainPage = new MainPage();
        this.onClick(() => {
            this.mainPage.drawMainPage();
        });
    }
}

export default StartButton;
