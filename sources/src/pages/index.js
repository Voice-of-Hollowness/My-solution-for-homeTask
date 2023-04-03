import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="slideshow-container">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
          >
            <div>
              <img src="~/src/img/img1.jpg" alt="Image 1" />
            </div>
            <div>
              <img src="~/src/img/img2.jpg" alt="Image 2" />
            </div>
            <div>
              <img src="~/src/img/img3.jpg" alt="Image 3" />
            </div>
          </Carousel>
        </div>

        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            OnePage Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}


//here well mbe new code 
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Створю сторінки швидко та просто<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
