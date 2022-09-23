import { Component, h } from '@stencil/core';

@Component({
  tag: 'micro-home',
  styleUrl: 'micro-home.css',
  shadow: true,
})
export class MicroHome {
  render() {
    return (
      <div class="micro-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <my-component-micro-app>Was gehtn hier?</my-component-micro-app>
        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
