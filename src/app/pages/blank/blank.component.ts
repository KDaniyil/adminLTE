import {Component, TemplateRef, inject} from '@angular/core';
import {ModalComponent} from '@components/modal/modal.component';
import {ModalService} from '@services/modal.service';
@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    styleUrls: ['./blank.component.scss']
})
export class BlankComponent {
    modal = inject(ModalService);
    openModal1(modalTemplate: TemplateRef<any>) {
        this.modal
            .open('Elimina', '', modalTemplate)
            .subscribe((action) => console.log(action, 'modalAction'));
    }
    openModal2(modalTemplate2: TemplateRef<any>) {
        this.modal
            .open('Congferma', 'Conferma lo status')
            .subscribe((action) => {
                console.log(action, 'Yeeahhh');
            });
    }
}
