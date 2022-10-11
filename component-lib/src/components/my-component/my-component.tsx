import {Component, ComponentInterface, Prop} from '@stencil/core';
import { h } from '../../utils/render.interceptor';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  @Prop() hello: string = "hello";
  render() {
    return (
      <div>
        <p>
          SLOT:
          <slot></slot>
        </p>

        <p>This is an input</p>
        <my-input />

        <div>{this.hello}</div>
      </div>
    );
  }
}
