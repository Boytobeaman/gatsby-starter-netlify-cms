import React, { Component } from 'react';
import { Link } from 'gatsby'
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
    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { items } = this.props;
    const slides = items.map((item) => {
      return (
        
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          {item.link_to?(
            <Link className="" to={item.link_to}>
              <LazyLoadImage 
                className="w-100" 
                src={item.src}
                placeholderSrc={item.placeholderImg}
                effect="blur"
                alt={item.altText} 
                srcset={item.srcset} 
                sizes="100vw" />
            </Link>
          ):(
            <LazyLoadImage 
              className="w-100" 
              src={item.src}
              placeholderSrc={item.placeholderImg}
              effect="blur"
              alt={item.altText} 
              srcset={item.srcset} 
              sizes="100vw" />
          )}
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