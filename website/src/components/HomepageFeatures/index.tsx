import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Type Safe',
    // eslint-disable-next-line
    Svg: require('@site/static/img/shield.svg').default,
    description: (
      <>
        Supports type safety out of the box.
      </>
    ),
  },
  {
    title: 'Easy to use',
    // eslint-disable-next-line
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Zhaikuy lets you focus on your <code>state</code>, and we&apos;ll do the rest.
      </>
    ),
  },
  {
    title: 'Powered by React',
    // eslint-disable-next-line
    Svg: require('@site/static/img/atom.svg').default,
    description: (
      <>
        Make state management easy in your react application
      </>
    ),
  },
  {
    title: 'Small bundle size',
    // eslint-disable-next-line
    Svg: require('@site/static/img/box.svg').default,
    description: (
      <>
        Zhaikuy provides a very small bundle size
      </>
    ),
  },
  {
    title: 'Developer-friendly',
    // eslint-disable-next-line
    Svg: require('@site/static/img/user.svg').default,
    description: (
      <>
        Easy to use API
      </>
    ),
  },
  {
    title: 'Concepts',
    // eslint-disable-next-line
    Svg: require('@site/static/img/db.svg').default,
    description: (
      <>
        Scalable concept of microstores
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" data-feature-image />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
