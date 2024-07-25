import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Create',
    Svg: require('@site/static/img/Create.svg').default,
    description: (
      <>
        Create your next trade with zero hurdles, and the lowest fees on-chain.

      </>
    ),
  },
  {
    title: 'Collect',
    Svg: require('@site/static/img/Collect4.svg').default,
    description: (
      <>
        Bringing digital asset diversification to another level, collect all on-chain assets and showcase them to your community.

      </>
    ),
  },
  {
    title: 'Connect',
    Svg: require('@site/static/img/connect3.svg').default,
    description: (
      <>
        Elevate the peer to peer economy by connecting with others and trade up to your dream digital asset.  
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
