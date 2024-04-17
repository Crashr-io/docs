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
    title: 'Social Commerce',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Our platform seamlessly synthesizes the most advanced NFT trading tools into the largest multi-chain social network.    
      </>
    ),
  },
  {
    title: 'Problem',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Popular web3 marketplaces lack a pinnacle aspect of commerce; human interaction.
        Without social engagement, transactional experiences become monotonous and isolating. 
      </>
    ),
  },
  {
    title: 'Solution',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Unify interaction and transaction, providing an exciting and engaging experience.
        Welcome to the hub of web3, where you and other enthusiasts can not only buy, sell, and trade, but create, converse, and connect. 
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
