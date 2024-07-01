import './result-block/result_block.scss';
import './source-block/source_block.scss';

import './play_field.scss';
class CreatePlayFieldElements {
    private playField: HTMLDivElement;
     resultBlock: HTMLDivElement;
    private translationBlock: HTMLDivElement;
     translationHint: HTMLDivElement;
    constructor() {
        this.playField = document.createElement('div');
        this.playField.classList.add('play-field_block');
        this.resultBlock = document.createElement('div');
        this.resultBlock.classList.add('play-field_result');
        this.translationBlock = document.createElement('div');
        this.translationBlock.classList.add('play-field_translation-block');
        this.translationHint = document.createElement('h1');
        this.translationHint.classList.add('play-field_translation-hint');
        this.translationBlock.append(this.translationHint)
        this.playField.append(this.translationBlock, this.resultBlock)
    }    
    
    getRootElement(): HTMLDivElement {
        return this.playField;
    }
}

export default CreatePlayFieldElements;
