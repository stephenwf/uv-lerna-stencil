import {Component, Prop} from '@stencil/core';
import '@stephenwf/component-a';

@Component({
  tag: 'component-b',
  styleUrl: 'component-b.scss'
})
export class ComponentB {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <div>
        <component-a first={"stephen"} last={"fraser"} />
        This is component b
      </div>
    );
  }
}
