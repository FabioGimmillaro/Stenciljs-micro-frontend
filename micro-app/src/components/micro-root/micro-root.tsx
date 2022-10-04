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
        <header>
          <h1>Micro Framework :-)</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="micro-home" exact={true} />
              <stencil-route url="/profile/:name" component="micro-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
