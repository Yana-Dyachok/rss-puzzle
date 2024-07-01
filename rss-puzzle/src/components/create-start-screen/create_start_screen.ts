import DescriptionStartScreen from './description/description_start-screen';
import StartScreenName from './name/name_start-screen';
import StartButton from './start-button/start_button';
import PuzzleAnimation from './puzzle-animation/puzzle_animation';
import SaveToLocalStorage from '../../utils/local-storage/local_storage';
import './create_start_screen.scss';

class CreateStartScreen {
    private startScreen: HTMLDivElement;
    private name: StartScreenName;
    private description: DescriptionStartScreen;
    private startButton: StartButton;
    private puzzleAnimation: PuzzleAnimation;
    private localStorage: SaveToLocalStorage;

    constructor(localStorage: SaveToLocalStorage) {
        this.localStorage = localStorage;
        this.startScreen = document.createElement('div');
        this.startScreen.classList.add('start-screen_content');
        this.name = new StartScreenName(this.localStorage);
        this.description = new DescriptionStartScreen();
        this.startButton = new StartButton();
        this.puzzleAnimation = new PuzzleAnimation();
        this.createStartScreenElements();
    }

    createStartScreenElements(): void {
        this.startScreen.append(
            this.description.getRootElement(),
            this.name.getRootElement(),
            this.startButton.getRootElement(),
            this.puzzleAnimation.getRootElement()
        );
    }

    getRootElement(): HTMLDivElement {
        return this.startScreen;
    }
}

export default CreateStartScreen;
