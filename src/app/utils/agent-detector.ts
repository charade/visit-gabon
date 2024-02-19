import { Component, OnInit, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-user-agent-detector',
  template: '',
})
export class UserAgent implements OnInit {
  navigator: WritableSignal<string> = signal('');

  ngOnInit(): void {
    const userAgent = window.navigator.userAgent.toLocaleLowerCase();
    switch (true) {
      case userAgent.indexOf('firefox') > -1:
        this.navigator.set('firefox');
    }
  }
}
