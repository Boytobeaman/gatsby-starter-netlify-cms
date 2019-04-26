import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { cdn_url } from '../utils'
let image_one =`${cdn_url}/static/main-slider-attached-lid-container.jpg`
let image_two = `${cdn_url}/static/main-slider-nesting-crates.jpg`
let image_three = `${cdn_url}/static/main-slider-folding-crates.jpg`
const items = [
  {
    src: `${image_one}`,
    altText: 'Attached Lid Container',
    srcset: `${image_one}?x-oss-process=image/resize,w_360 360w,${image_one}?x-oss-process=image/resize,w_650 650w,${image_one}?x-oss-process=image/resize,w_850 850w,${image_one}?x-oss-process=image/resize,w_1000 1000w,${image_one}?x-oss-process=image/resize,w_1200 1200w`,
    caption: ''
  },
  {
    src: `${image_two}`,
    altText: 'Nesting Crates',
    srcset: `${image_two}?x-oss-process=image/resize,w_360 360w,${image_two}?x-oss-process=image/resize,w_650 650w,${image_two}?x-oss-process=image/resize,w_850 850w,${image_two}?x-oss-process=image/resize,w_1000 1000w,${image_two}?x-oss-process=image/resize,w_1200 1200w`,
    caption: ''
  },
  {
    src: `${image_three}`,
    altText: 'Folding Crates',
    srcset: `${image_three}?x-oss-process=image/resize,w_360 360w,${image_three}?x-oss-process=image/resize,w_650 650w,${image_three}?x-oss-process=image/resize,w_850 850w,${image_three}?x-oss-process=image/resize,w_1000 1000w,${image_three}?x-oss-process=image/resize,w_1200 1200w`,
    caption: ''
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="w-100" src={item.src} alt={item.altText} srcset={item.srcset} sizes="100vw" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Slider;