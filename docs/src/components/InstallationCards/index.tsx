/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';

const Playgrounds = [
  {
    name: '📦 Gitpod',
    image: require('@site/static/img/installation-cards/gitpod.png'),
    url: 'https://github.com/askui/askui-try-out',
    description: (
      <Translate id="gettingstarted.gitpod.description">
        Gitpod runs askui in a remote Docker container in the cloud. We prepared a Github Repository for you to get you started without any hassle.
      </Translate>
    ),
    cta: 'Try it now!',
  },
  {
    name: '💻 Local Installation',
    image: require('@site/static/img/installation-cards/local.png'),
    url: 'getting-started',
    description: (
      <Translate id="gettingstarted.installlocally.description">
        {
          'Install askui locally to experience it without the limitations of a cloud environment. Run your first instruction on your own machine.'
        }
      </Translate>
    ),
    cta: 'Install on your machine!',
  },
];

interface Props {
  name: string;
  image: string;
  url: string;
  description: JSX.Element;
  cta: string;
}

function PlaygroundCard({name, image, url, description, cta}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className={clsx('card__image')}>
          <Link to={url}>
            <Image img={image} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              <Translate id="playground.tryItButton">{cta}</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstallationCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}
