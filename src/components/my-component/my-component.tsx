import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop({ reflect: true }) boolean = false;

  @Prop({ reflect: true }) string = 'string';

  @Prop({ reflect: true }) number = 1337;

  render() {
    return <div>😃</div>;
  }
}
