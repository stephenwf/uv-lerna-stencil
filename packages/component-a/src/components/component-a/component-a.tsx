import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'component-a',
  styleUrl: 'component-a.scss'
})
export class ComponentA {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}!
      </div>
    );
  }
}
