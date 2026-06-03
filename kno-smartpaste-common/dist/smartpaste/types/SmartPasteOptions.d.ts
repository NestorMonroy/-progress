import { SmartPasteCustomInput } from './SmartPasteCustomInput';
import { SmartPasteField } from './SmartPasteField';
export interface SmartPasteOptions {
    getElement: () => HTMLElement | null;
    customInputs?: Array<SmartPasteCustomInput>;
    getSmartPasteField?: (field: SmartPasteField) => SmartPasteField | null;
    setknoInputValue?: (field: SmartPasteField, value: string) => void;
}
