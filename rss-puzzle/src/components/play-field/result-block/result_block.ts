import { ILevelData } from '../../../interfaces/interfaces';
import ContinueButton from '../buttons-play-field/continue-button/continue_btn';
import CheckButton from '../buttons-play-field/check-button/check_button';
import './result_block.scss';

class ResultBlock {
    private roundElement: HTMLDivElement;
    constructor(
        private levelData: ILevelData, public continueBtn: ContinueButton, public checkBtn: CheckButton, public round: number ) {
        this.levelData = levelData;
        this.continueBtn = continueBtn;
        this.checkBtn = checkBtn;
        this.round = round;
        this.roundElement = document.createElement('div');
        this.roundElement.classList.add('play-field_result-round');
        this.roundElement.setAttribute('data-result-round', `${this.round}`);
        if (this.roundElement) {
            this.roundElement.addEventListener('click', this.onClickHandler);
        }
    }
    
    private onClickHandler = (event: MouseEvent) => {
        const target: HTMLDivElement | null = event.target as HTMLDivElement;
        if (target?.classList.contains('play-field_result-card')&& !target?.classList.contains('done')) {
            this.onClick(target);
        }
    };

    private onClick(card: HTMLDivElement): void {
        const sourceCards: HTMLDivElement | null = document.querySelector('.play-field_source');
        const newSourceCard = document.createElement('div');
        newSourceCard.classList.add('play-field_source-card');
        newSourceCard.setAttribute('data-source', card.dataset.result || '');
        newSourceCard.textContent = card.textContent || '';
        sourceCards!.append(newSourceCard);
        Array.from(
            document.querySelectorAll('.play-field_result-card')
        ).forEach((el) => el.classList.remove('correct'));
        card.parentElement!.removeChild(card);
        this.continueBtn.setDisabled(true);
        this.checkBtn.setDisabled(true);
        this.continueBtn.showBtn(false);
        this.checkBtn.showBtn(true);
    }

    toggleResultClasses(): void {
        Array.from(document.querySelectorAll('.play-field_result-card')).forEach((el)=>{
            el.classList.remove('correct');
            el.classList.add('done');
        })
    }

    getRootElement(): HTMLDivElement {
        return this.roundElement;
    }
}

export default ResultBlock;
