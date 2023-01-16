import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.tagline}</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/general/Introduction/why-askui">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

import {Redirect} from '@docusaurus/router';
export default function Home() {
    return <Redirect to="/docs/general/Getting Started/getting-started" />;
}
