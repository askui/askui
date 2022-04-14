import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';

const FeatureList = [
  {
    title: 'Automate anything',
    Svg: require('../../static/img/icons/engineering_white.svg').default,
    description: (
      <>
        askui enables the automation of all possible UI commands by simulating real interactions. Drag & drop, swipe commands and even color verifications are no longer a problem.
      </>
    ),
  },
  {
    title: 'Simulate human actions',
    Svg: require('../../static/img/icons/brain_white.svg').default,
    description: (
      <>
        Our automation does not access underlying code selectors or the DOM. It performs real mouse movements and element clicks – just like a human would.
      </>
    ),
  },
  {
    title: 'No more selectors',
    Svg: require('../../static/img/icons/selection_white.svg').default,
    description: (
      <>
        Using modern Deep Learning technologies, we identify UI elements based solely on visual features. Screenshots are enough for us as input.
      </>
    ),
  },
  {
    title: 'Runs on all technologies',
    Svg: require('../../static/img/icons/device_white.svg').default,
    description: (
      <>
        By automating solely on visual properties, we enable automation on all UI technologies – whether .NET, Web, Native Mobile, … anything works.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6 margin-vert--md')}>
      <h4 className="margin-vert--none">{title}</h4>
      <Svg
        className={clsx(styles.featureSvg, 'margin-vert--sm')}
        alt={title}
      />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
