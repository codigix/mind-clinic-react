export { moodDisorders } from './moodDisorders';
export { anxietyDisorders } from './anxietyDisorders';
export { ocdDisorders } from './ocdDisorders';
export { traumaDisorders } from './traumaDisorders';
export { psychoticDisorders } from './psychoticDisorders';
export { neurodevelopmentalDisorders } from './neurodevelopmentalDisorders';
export { personalityDisorders } from './personalityDisorders';
export { dissociativeDisorders } from './dissociativeDisorders';
export { sleepDisorders } from './sleepDisorders';
export { substanceDisorders } from './substanceDisorders';
export { sexualDisorders } from './sexualDisorders';
export { neurocognitiveDisorders } from './neurocognitiveDisorders';
export { eatingDisorders } from './eatingDisorders';

export interface DisorderDetail {
  id: string;
  name: string;
  description: string;
  overview: string;
  symptoms: string[];
  treatmentOptions: {
    title: string;
    description: string;
  }[];
  statistics?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}