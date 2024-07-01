import PlayField from '../../components/play-field/play_field';
import ButtonsPlayField from '../../components/play-field/buttons-play-field/buttons_play_field';

class MainPage {
    private playField: PlayField;
    private btnsPlayField: ButtonsPlayField;
    constructor() {
        this.btnsPlayField = new ButtonsPlayField();
        this.playField = new PlayField(this.btnsPlayField.continueBtn, this.btnsPlayField.checkBtn, this.btnsPlayField.autoCompleteBtn);
    }

    drawMainPage = (): void => {
        const container: HTMLDivElement | null = document.querySelector('.container');
        if (container !== null) {
            container.innerHTML = '';
            container.classList.remove('start-screen_container');
            container.append(this.playField.getRootElement(), this.btnsPlayField.getRootElement());
        }
    };
}

export default MainPage;
