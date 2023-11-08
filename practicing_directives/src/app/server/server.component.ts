import { Component , OnInit} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
    styles: ['.stsColor { color : white; }']
})

export class ServerComponent implements OnInit {
    textStatus = false;
    textStatusStr="";
    textStatusArray = ['false'];
    index=0;

    ngOnInit() {
    
    }

    onClickButton() {
        this.index = this.index+1
       if(!this.textStatus) {
            this.textStatus = true;
            this.textStatusStr = 'true';
        } else {
            this.textStatus = false;
            this.textStatusStr = 'false';
        }
        this.textStatusArray.push(this.textStatusStr+"-"+this.index);

    }

    getStatusColor() {
        if(this.textStatusArray.length > 4) {
            return 'blue';
        } else {
            return 'transparent';
        }
    }
}