import ContinueButton from '../buttons-play-field/continue-button/continue_btn';
import CheckButton from '../buttons-play-field/check-button/check_button';
class CorrectWord {
    constructor( public round: number, public words: string[], public continueBtn: ContinueButton, 
        private sourceBlock: HTMLDivElement, public checkBtn: CheckButton ) {
        this.round = round;
        this.words = words;
        this.continueBtn = continueBtn;
        this.checkBtn=checkBtn;
        this.sourceBlock = sourceBlock;
    }

    onClick(card: HTMLDivElement, round: number): void {
        const resultRound: NodeListOf<HTMLDivElement> = document.querySelectorAll('.play-field_result-round');
        const resultCards = Array.from(resultRound);
        const newResultCard = document.createElement('div');
        newResultCard.classList.add('play-field_result-card');
        newResultCard.setAttribute('data-result', card.dataset.source || '');
        newResultCard.textContent = card.textContent || '';
        resultCards[round-1].append(newResultCard);
        const resultElements = resultCards[round-1].children;
        if (this.words.length === resultElements.length) {
            this.checkBtn.setDisabled(false);
            this.checkBtn.onClick(()=>this.checkCorrectPuzzle(resultCards[round-1]))
            if (this.checkCorrectAnswer(resultCards[round-1])) {
                this.continueBtn.setDisabled(false);
                this.continueBtn.showBtn(true);
                this.checkBtn.showBtn(false);
            } else {
                Array.from(resultElements).forEach((el) =>
                    el.classList.remove('correct')
                );
                this.continueBtn.setDisabled(true);
                this.continueBtn.showBtn(false);
                this.checkBtn.showBtn(true);
            }
        } else {
            this.continueBtn.setDisabled(true);
            this.checkBtn.setDisabled(true);
            this.continueBtn.showBtn(false);
            this.checkBtn.showBtn(true);
        }
        this.sourceBlock.removeChild(card);
    }

    private checkCorrectAnswer(resultElements: HTMLDivElement): boolean {
        const wordsArray = Array.from( resultElements.children ) as HTMLDivElement[];
        this.checkCorrectPuzzle(resultElements);
        return wordsArray.every((el) => {
            return el.classList.contains('correct');
        });
    }

    checkCorrectPuzzle(resultElements: HTMLDivElement): void {
        const wordsArray = Array.from( resultElements.children ) as HTMLDivElement[];
        for (let i = 0; i < wordsArray.length; i++) {
            const element = wordsArray[i];
        (element.textContent === this.words[i])?element.classList.add('correct'):element.classList.remove('correct');
        }
    }
}

export default CorrectWord;
