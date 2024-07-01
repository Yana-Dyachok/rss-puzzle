import ContinueButton from '../buttons-play-field/continue-button/continue_btn';
import CorrectWord from './correct_word';
import CheckButton from '../buttons-play-field/check-button/check_button';
import './source_block.scss';

class WordsForSourceBlock {
    private correctWord: CorrectWord;
    public sourceBlock: HTMLDivElement;
    constructor( public round: number, public continueBtn: ContinueButton, public words: string[], public checkBtn: CheckButton) {
        this.round = round;
        this.words = words;
        this.continueBtn = continueBtn;
        this.checkBtn = checkBtn;
        this.sourceBlock = document.createElement('div');
        this.sourceBlock.classList.add('play-field_source');
        this.correctWord = new CorrectWord(this.round, this.words, this.continueBtn, this.sourceBlock, this.checkBtn);
        if (this.sourceBlock) {
            this.sourceBlock.addEventListener('click', (event) => {
                const target: HTMLDivElement | null =
                    event.target as HTMLDivElement;
                if (target.classList.contains('play-field_source-card')) {
                    this.correctWord.onClick(target, this.round);
                }
            });
        }
    }

    createCards(): HTMLDivElement {
        const words: string[] = [...this.words];
        const shuffleCards: string[] = words.sort(() => Math.random() - 0.5);
        let indexArray: string[] = [];
        for (let i = 0; i < shuffleCards.length; i++) {
            const card = document.createElement('div');
            card.textContent = shuffleCards[i];
            card.classList.add('play-field_source-card');
            let dataIndex: number = 0;
            for (let j = 0; j < this.words.length; j++) {
                if (this.words[j] === shuffleCards[i]) {
                    if (!indexArray.includes(this.words[j])) {
                        dataIndex = j;
                        indexArray.push(this.words[j]);
                        break;
                    } else {
                        if (indexArray.includes(this.words[j])) dataIndex = j;
                    }
                }
            }
            dataIndex === shuffleCards.length - 1
                ? card.setAttribute('data-source', 'last')
                : card.setAttribute('data-source', dataIndex.toString());
            this.sourceBlock!.append(card);
        }
        return this.sourceBlock!;
    }
}

export default WordsForSourceBlock;
