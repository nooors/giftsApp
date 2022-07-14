import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() dispatchVisible = new EventEmitter();
  onView() {
    console.log('emmiting')
    this.dispatchVisible.emit();
    console.log('emmited')

  }
  constructor() { }

  ngOnInit(): void {
  }

}
