import * as p1 from '@ryancavanaugh/pkg1';
import * as p2 from '@ryancavanaugh/pkg2';
import { Component, Prop, h, Method, State } from '@stencil/core';

import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string = '';

  /**
   * The middle name
   */
  @Prop() middle: string = '';

  /**
   * The last name
   */
  @Prop() last: string = '';

  @State()
  someMsg: string;

  @Method()
  public async callMe(smth: string): Promise<void> {
    this.someMsg = smth;
    // console.log(smth);
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        <p>Hello! I'm {this.getText()}</p>
        <p>{p1.fn()}</p>
        <p>{p2.fn()}</p>
        <p>{this.someMsg}</p>
      </div>
    );
  }
}
