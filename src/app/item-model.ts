export class FormItem {
    type: string;
    label: string;
    isVisible: boolean;
    children: FormItem[];

    constructor(type: string, label: string, isVisible: boolean, children: FormItem[]) {
        this.type = type;
        this.label = label;
        this.isVisible = isVisible;
        this.children = children;
    }
}
