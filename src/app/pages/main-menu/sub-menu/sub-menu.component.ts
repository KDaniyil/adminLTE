import {Component, OnInit, inject} from '@angular/core';
import {CalendarOptions} from '@fullcalendar/core';
import {ModalService} from '@services/modal.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
    textHeader;
    textBody;
    lang = 'it';
    calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        events: [{title: 'Meeting', start: new Date()}]
    };
    modal = inject(ModalService);
    constructor(private translate: TranslateService) {
        translate.setDefaultLang(this.lang);
        translate.use(this.lang);
    }

    ngOnInit(): void {}

    click() {
        this.translate
            .get(['sub.modal-title', 'sub.modal-text'])
            .subscribe((translation) => {
                this.textHeader = translation['sub.modal-title'];
                this.textBody = translation['sub.modal-text'];
            });
        this.modal.open(this.textHeader, this.textBody).subscribe((action) => {
            console.log(action, 'UUUUUUUUUUUUS');
        });
    }

    changeLanguage() {
        this.lang = this.lang === 'it' ? 'en' : 'it';
        this.translate.use(this.lang);
    }
}
