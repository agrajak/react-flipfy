import React, { RefObject } from "react";
const duration = 1000;

function linear(from, to, duration, x) {
  return Math.floor(((to - from) * x) / duration + from);
}

function animFactory(element: HTMLElement, onUpdate?: (x: number) => void, onComplete?: () => void) {
  return new Promise<void>((resolve) => {
    let startAt = null;
    function anim(now) {
      if (startAt == null) {
        startAt = now;
        // onStart
        element.style.position = "absolute";
        element.style.width = "100%";
        element.style.display = "inline-block";
      }
      if (onUpdate) onUpdate(now-startAt);

      if (startAt + duration > now) {
        requestAnimationFrame(anim);
        return;
      }
      // onComplete
      element.style.position = "relative";
      element.style.transform = "";
      if (onComplete) onComplete();
      console.log("resolve promise");
      resolve();
    }
    requestAnimationFrame(anim);
  });
}

interface FlipProviderProps {
  selectors: string[];
}
export class FlipProvider extends React.Component<FlipProviderProps> {
  ref: RefObject<HTMLDivElement>
  constructor(props) {
    super(props);
    this.ref = React.createRef<HTMLDivElement>();
  }

  getRectsFromDOMElement(element, selectors) {
    return selectors.map((selector) =>
      element.querySelector(selector).getBoundingClientRect()
    );
  }

  getRects() {
    return this.getRectsFromDOMElement(this.ref.current, this.props.selectors);
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");

    return this.getRects();
  }

  componentDidUpdate(prevState, prevProps, prevRects) {
    console.log("componentDidUpdate");

    const rects = this.getRects();

    const elements = this.props.selectors.map((selector) =>
      this.ref.current.querySelector(selector) as HTMLElement
    );

    Promise.all([
      elements.map((element, idx) =>
        animFactory(element, (x) => {
          const y = linear(0, rects[idx].top - prevRects[idx].top, duration, x);
          const transform = `translateY(${y}px)`;
          element.style.transform = transform;
        })
      )
    ]).then(() => {
      console.log("all animation done!");
    });

    console.log("prev", prevRects[0].top, "now", rects[0].top);
  }
  render() {
    console.log("onRendered");
    return <div ref={this.ref}>{this.props.children}</div>;
  }
}
