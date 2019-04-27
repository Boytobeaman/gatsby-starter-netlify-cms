import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './slider.scss'
import { cdn_url } from '../utils'
let image_one =`${cdn_url}/static/main-slider-attached-lid-container.jpg`
let image_two = `${cdn_url}/static/main-slider-nesting-crates.jpg`
let image_three = `${cdn_url}/static/main-slider-folding-crates.jpg`
let items = [
  {
    src: `${image_one}`,
    altText: 'Attached Lid Container',
    caption: ''
  },
  {
    src: `${image_two}`,
    altText: 'Nesting Crates',
    caption: ''
  },
  {
    src: `${image_three}`,
    altText: 'Folding Crates',
    caption: ''
  }
];
items.forEach(item=>{
  item.srcset = `${item.src}?x-oss-process=image/resize,w_360 360w,${item.src}?x-oss-process=image/resize,w_650 650w,${item.src}?x-oss-process=image/resize,w_850 850w,${item.src}?x-oss-process=image/resize,w_1000 1000w,${item.src}?x-oss-process=image/resize,w_1200 1200w`
  item.placeholderImg = `${item.src}?x-oss-process=image/resize,w_50`
})

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
          <LazyLoadImage 
            className="w-100" 
            src={item.src}
            placeholderSrc={item.placeholderImg}
            effect="blur"
            alt={item.altText} 
            srcset={item.srcset} 
            sizes="100vw" />
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