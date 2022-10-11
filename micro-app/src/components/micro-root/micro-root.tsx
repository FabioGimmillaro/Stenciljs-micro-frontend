import { Component, h } from '@stencil/core';

@Component({
  tag: 'micro-root',
  styleUrl: 'micro-root.css',
  shadow: true,
})
export class MicroRoot {
  render() {
    return (
      <div>

        <my-component-micro-app></my-component-micro-app>
      </div>
    );
  }
}
