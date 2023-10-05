import {Component, OnInit, inject} from '@angular/core';
import {ModalService} from '@services/modal.service';

@Component({
    selector: 'app-sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
    modal = inject(ModalService);
    constructor() {}

    ngOnInit(): void {}
    openModalUU() {
        this.modal
            .open('Congferma', 'Conferma lo status')
            .subscribe((action) => {
                console.log(action, 'Yeeahhh');
            });
    }
}
