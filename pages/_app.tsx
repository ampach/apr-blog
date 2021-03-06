import { UniformTracker } from '@uniformdev/optimize-tracker-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/style.css';

// for locally downloaded intent data and tracker from npm
import { localTracker } from '../lib/local-tracker';
import MainHero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import { PersonalizedHero } from '../components/PersonalizedHero';
import { ComponentMapping } from '../lib/ComponentMapping';
import TalkList from '../components/TalkList';
import { RegisterForm } from '../components/RegisterForm';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Tracker } from '@uniformdev/optimize-tracker-common';
import { WhyAttendTestPhotoLocation } from '../components/WhyAttend';
import { IntentVector } from '@uniformdev/optimize-common';
import { PageContext } from '../components/PageContext';

const componentMapping: ComponentMapping = {
  hero: MainHero,
  callToAction: CallToAction,
  personalizedHero: PersonalizedHero,
  talksList: TalkList,
  registrationForm: RegisterForm,
  whyAttend: WhyAttendTestPhotoLocation,
};

export type UniformConfAppProps = AppProps & {
  tracker?: Tracker;
  scoring?: IntentVector;
};

export default function UniformConfApp({ Component, pageProps, tracker, scoring }: UniformConfAppProps) {
  const trackerInstance = tracker || localTracker;

  return (
    <PageContext.Provider value={pageProps.page}>
      <UniformTracker
        trackerInstance={trackerInstance}
        componentMapping={componentMapping}
        isServer={typeof window === 'undefined'}
        initialIntentScores={scoring}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UniformTracker>
    </PageContext.Provider>
  );
}
