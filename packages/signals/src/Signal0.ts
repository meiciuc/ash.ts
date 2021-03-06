/*
 * Based on ideas used in Robert Penner's AS3-signals - https://github.com/robertpenner/as3-signals
 */
import { SignalBase } from './SignalBase';

/**
 * Provides a fast signal for use where no parameters are dispatched with the signal.
 */
export class Signal0 extends SignalBase<() => void> {
  public dispatch():void {
    this.startDispatch();
    for (let node = this.head; node; node = node.next) {
      node.listener();
      if (node.once) {
        this.remove(node.listener);
      }
    }
    this.endDispatch();
  }
}
