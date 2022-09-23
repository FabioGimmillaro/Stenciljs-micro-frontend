import { Component } from '@stencil/core';
import {h} from "../../utils/render.interceptor";

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
})
export class MyInput {

  render() {
    return (
      <input class={"input"} />
    );
  }

}
