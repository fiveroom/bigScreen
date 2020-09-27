import { Component, OnInit, HostListener, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, bufferTime, throttleTime } from 'rxjs/operators';

interface IlocatXY {
    xV: number;
    yV: number;
}

@Component({
    selector: 'app-mini-box',
    templateUrl: './mini-box.component.html',
    styleUrls: ['./mini-box.component.less']
})
export class MiniBoxComponent implements OnInit, AfterViewInit, OnDestroy {

    mouseDownStu: Boolean = false;
    mouseMoveEvent: Subscription;
    clickLocat: IlocatXY = { xV: 0, yV: 0 };


    constructor(private refEle: ElementRef) { }

    ngOnInit(): void {
        console.log(this.refEle)
    }

    @HostListener('mousedown', ['$event']) mouseDown(event: MouseEvent) {
        this.mouseDownStu = true;
        // console.log(`clientX: ${event.clientX}`, event)
    }

    @HostListener('mouseup') mouseUp() {
        this.mouseDownStu = false;
    }

    moveEle(event: MouseEvent) {

    }

    ngAfterViewInit() {
        this.mouseMoveEvent = fromEvent(document, 'mousemove').pipe(
            // throttleTime(300)
        ).subscribe((evt: MouseEvent) => {
            // if(this.mouseDownStu){
            // console.log(`clientX: ${evt.clientX} clientY: ${evt.clientY} pageX: ${evt.pageX} pageY: ${evt.pageY}`, evt)
            // }
        })
    }

    ngOnDestroy() {
        this.mouseMoveEvent.unsubscribe()
    }
}
