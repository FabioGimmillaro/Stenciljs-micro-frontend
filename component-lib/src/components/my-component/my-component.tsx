import {Component, ComponentInterface} from '@stencil/core';
import {h} from "../../utils/render.interceptor";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  render() {
    return (
      <div>
        <p>This is an input</p>
        <my-input />
      </div>
    );
  }
}
