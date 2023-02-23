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

interface Props {
  name: string;
  image: string;
  url: string;
  description: JSX.Element;
  cta: string;
}

function TutorialCard({name, image, url, description, cta}: Props) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        {/* <div className={clsx('card__image')}>
          <Link to={url}>
            <Image img={image} alt={`${name}'s image`} />
          </Link>
        </div> */}
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              <Translate id="tutorial.tryItButton">{cta}</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TutorialCardsRows(props): JSX.Element {
  return (
    <div>
      <div className="row">
        {props.row().map((item) => (
          <TutorialCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
