import {Component, h, Host} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return <Host>
      This is Version 1.0
    </Host>;
  }
}
