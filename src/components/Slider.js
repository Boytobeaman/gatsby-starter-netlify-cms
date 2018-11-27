import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-attached-lid-container.jpg',
    altText: 'Attached Lid Container',
    srcset: 'https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-attached-lid-container.jpg?x-oss-process=image/resize,w_360 360w,https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-attached-lid-container.jpg?x-oss-process=image/resize,w_650 650w,https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-attached-lid-container.jpg?x-oss-process=image/resize,w_850 850w,https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-attached-lid-container.jpg?x-oss-process=image/resize,w_1200 1200w',
    caption: ''
  },
  {
    src: 'https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-nesting-crates.jpg',
    altText: 'Nesting Crates',
    srcset: 'https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-nesting-crates.jpg?x-oss-process=image/resize,w_360 360w,https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-nesting-crates.jpg?x-oss-process=image/resize,w_650 650w,https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-nesting-crates.jpg?x-oss-process=image/resize,w_850 850w,https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-nesting-crates.jpg?x-oss-process=image/resize,w_1200 1200w',
    caption: ''
  },
  {
    src: 'https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-folding-crates.jpg',
    altText: 'Folding Crates',
    srcset: 'https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-folding-crates.jpg?x-oss-process=image/resize,w_360 360w,https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-folding-crates.jpg?x-oss-process=image/resize,w_650 650w,https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-folding-crates.jpg?x-oss-process=image/resize,w_850 850w,https://lu-ali-us-west.oss-us-west-1.aliyuncs.com/static/main-slider-folding-crates.jpg?x-oss-process=image/resize,w_1200 1200w',
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
          <img className="w-100" src={item.src} alt={item.altText} srcset={item.srcset} />
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