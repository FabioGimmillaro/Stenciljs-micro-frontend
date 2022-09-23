import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  connectedCallback() {
    console.log("Try:", 1);
  }
  render() {
    return <slot />;
  }
}
