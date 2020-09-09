import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

enum BlockStu { show = 'block', close = "none" }

interface IDigStyle {
    top?: string;
    left?: string;
    right?: string;
    shadowColor?: string;
    centerStu?: Boolean,
    width?: string
}

interface IDigShow {
    transform: string;
    opacity: number;
    [props: string]: string | number;
}

@Component({
    selector: 'app-z-dialog',
    templateUrl: './z-dialog.component.html',
    styleUrls: ['./z-dialog.component.less']
})
export class ZDialogComponent implements OnInit {

    @Input() titleH: string;
    @Input() width: string = '30%';
    @Input() closeByShade: Boolean = true;
    @Input() dialogLocat: IDigStyle = {};

    @Output() dialogShowChange = new EventEmitter<Boolean>();

    dialogBoxShow: Boolean = false;
    shadeShow: string = BlockStu.close;
    shadeShowBgc: string = 'rgba(0, 0, 0, .1)';
    dialogShowStyle: IDigShow;
    dialogCloseStyle: IDigShow;
    timer;

    constructor() { }

    @Input()
    set dialogShow(val: Boolean) {
        val ? this.openDialog() : this.closeDialog();
    }

    closeDialog() {
        clearInterval(this.timer);
        this.dialogBoxShow = false;
        this.timer = setTimeout(() => {
            this.shadeShow = BlockStu.close;
            this.dialogShowChange.emit(false)
        }, 400);
    }

    openDialog() {
        clearInterval(this.timer);
        this.shadeShow = BlockStu.show;
        this.timer = setTimeout(() => {
            this.dialogBoxShow = true;
            this.dialogShowChange.emit(true)
        }, 0);
    }

    doClsByShadow() {
        if (this.closeByShade) {
            this.closeDialog()
        }
    }

    dealDiaBox(styleObj: IDigStyle) {
        let obj = {};
        Object.assign(obj, { top: styleObj.top ?? '50%' })
        if (styleObj.left) {
            Object.assign(obj, { left: styleObj.left ?? '50%' })
        } else if (styleObj.right) {
            Object.assign(obj, { right: styleObj.right ?? '50%' })
        } else {
            Object.assign(obj, { left: styleObj.left ?? '50%' })
        }
        Object.assign(obj, { width: styleObj.width ?? '30%' })

        this.shadeShowBgc = styleObj.shadowColor ?? this.shadeShowBgc;
        // 居中
        this.dialogShowStyle = {
            transform: 'translate(-50%, -50%)',
            opacity: 1,
            ...obj
        }
        this.dialogCloseStyle = {
            transform: 'translate(-50%, calc(-50% - 20px))',
            opacity: 0,
            ...obj
        }
        if (typeof (styleObj.centerStu) == 'boolean') {
            if (!styleObj.centerStu) {
                this.dialogShowStyle = {
                    transform: 'translate(0, 0)',
                    opacity: 1,
                    ...obj
                }
                this.dialogCloseStyle = {
                    transform: 'translate(0, -20px)',
                    opacity: 0,
                    ...obj
                }
            }
        }
    }

    ngOnInit(): void {
        this.dealDiaBox(this.dialogLocat);
    }

}
