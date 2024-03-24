import { CommonModule } from '@angular/common';
import { Component, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childInput:string | undefined;
  @Output() sendValue = new EventEmitter<string>();
  sendValueToParent(){
    this.sendValue.emit('Value from parent');
  }
  }

