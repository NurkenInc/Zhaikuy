import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Code } from '../components/Code/Code';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const heroCode = `import { createStore } from 'zhaikuy'

interface Task {
  id: string
  text: string
  createdAt: Date
}

interface TasksSchema {
  tasks: Task[]
}

const useTasks = createStore<TasksSchema>((set) => ({
  tasks: [],
  addTask: () => set((state) => ({ ...state })),
}))`

function ExampleCode() {
  return (
    <div className='hero-code col col--6' data-hero-code>
      <Code language='ts'>{heroCode}</Code>
    </div>
  )
}

function Hero() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={`hero ${styles.heroBanner}`}>
      <div className='container'>
        <div data-hero-row>
          <div className='hero-info'>
            <h1>{siteConfig.title}</h1>
            <p>{siteConfig.tagline}</p>
          </div>
          <div>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/introduction/installation')}>
                Get Started
            </Link>
          </div>
          <div data-hero-explainer="first-row">
            <Link
              to={useBaseUrl('docs/introduction/examples')}
            >
              Introduction
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Zhaikuy - state management with ease">
      {/* <HomepageHeader /> */}
      <main>
        <div data-hero-banner="banner">
          <Hero />
          <ExampleCode />
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
