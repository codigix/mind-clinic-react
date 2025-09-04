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

export const personalityDisorders: DisorderDetail[] = [
  {
    id: 'borderline-personality-disorder',
    name: 'Borderline Personality Disorder (BPD)',
    description: 'A complex mental health disorder characterized by unstable moods, self-image, and relationships. Individuals with BPD struggle with impulsivity and intense fears of abandonment.',
    overview: 'BPD affects about 1-2% of the general population. It typically emerges by early adulthood and is more often diagnosed in females. Risk factors include childhood trauma, genetics, and neurobiological factors.',
    symptoms: [
      'Intense and unstable interpersonal relationships',
      'Severe mood swings that last hours to days',
      'Impulsive, often self-damaging behaviors',
      'Chronic feelings of emptiness',
      'Distorted self-image or sense of self',
      'Paranoia or dissociation under stress',
      'Recurrent suicidal behavior or self-injury'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Dialectical Behavior Therapy (DBT) is the gold standard. Other approaches may include Cognitive Behavioral Therapy (CBT) and schema-focused therapy.'
      },
      {
        title: 'Medications',
        description: 'Mood stabilizers, antidepressants, or antipsychotics are sometimes used to manage specific symptoms.'
      },
      {
        title: 'Supportive Resources',
        description: 'Structured routines, support groups, and psychoeducation are beneficial.'
      }
    ],
    statistics: 'BPD affects approximately 1-2% of the population; up to 10% of psychiatric outpatients have BPD.',
    faqs: [
      {
        question: 'Can people with BPD recover?',
        answer: 'Yes, with appropriate therapy and support, many people with BPD experience significant improvement over time.'
      },
      {
        question: 'Is BPD caused by trauma?',
        answer: 'While there is a strong association with childhood trauma, not everyone with BPD has a history of trauma.'
      }
    ]
  },
  {
    id: 'narcissistic-personality-disorder',
    name: 'Narcissistic Personality Disorder (NPD)',
    description: 'A disorder characterized by grandiosity, an excessive need for admiration, and a lack of empathy for others.',
    overview: 'NPD generally begins by early adulthood and occurs in about 1% of the population. People with NPD may appear arrogant, require constant praise, and be sensitive to criticism, often due to fragile self-esteem.',
    symptoms: [
      'Grandiose sense of self-importance',
      'Preoccupation with fantasies of unlimited success or power',
      'Belief of being special or unique',
      'Need for excessive admiration',
      'Sense of entitlement',
      'Interpersonally exploitative behavior',
      'Lack of empathy',
      'Envy of others or belief others are envious',
      'Arrogant behaviors or attitudes'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Individual and group therapies focusing on self-esteem, empathy, and interpersonal skills.'
      },
      {
        title: 'Medications',
        description: 'No specific medications for NPD, but antidepressants or mood stabilizers may be used to treat co-occurring conditions.'
      }
    ],
    statistics: 'NPD affects about 1% of the population, more commonly diagnosed in males.',
    faqs: [
      {
        question: 'Is there a cure for NPD?',
        answer: 'Treatment can help manage symptoms and improve functioning, but personality disorders are long-term conditions.'
      }
    ]
  },
  {
    id: 'antisocial-personality-disorder',
    name: 'Antisocial Personality Disorder (ASPD)',
    description: 'A pervasive pattern of disregard for, and violation of, the rights of others. Often associated with deceit, manipulation, and lack of remorse.',
    overview: 'ASPD is more common in males and often manifests in childhood or early adolescence as conduct disorder. It is frequently seen in forensic and correctional settings. Risk factors include genetic vulnerability and a history of childhood abuse or neglect.',
    symptoms: [
      'Repeated law-breaking or criminal behavior',
      'Deceitfulness and lying for personal gain',
      'Impulsivity and failure to plan ahead',
      'Irritability and aggression',
      'Reckless disregard for own or others’ safety',
      'Consistent irresponsibility (work, finances)',
      'Lack of remorse after mistreating others'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'May have limited effectiveness; focus is often on behavior management and harm reduction.'
      },
      {
        title: 'Medications',
        description: 'Mood stabilizers and antipsychotics may help with aggression or impulsivity.'
      }
    ],
    statistics: 'ASPD affects about 1-4% of the general population; significantly higher in prison populations.',
    faqs: [
      {
        question: 'Can people with ASPD have healthy relationships?',
        answer: 'Most individuals with ASPD struggle with forming and maintaining healthy, long-term relationships.'
      }
    ]
  },
  {
    id: 'histrionic-personality-disorder',
    name: 'Histrionic Personality Disorder (HPD)',
    description: 'Marked by constant attention-seeking, excessive emotionality, and a strong need for approval.',
    overview: 'HPD tends to emerge by early adulthood and is thought to be more common in females. Genetic and environmental factors play a role in development.',
    symptoms: [
      'Uncomfortable when not the center of attention',
      'Inappropriately seductive or provocative behavior',
      'Rapidly shifting and shallow emotions',
      'Consistently uses appearance to draw attention',
      'Speech is impressionistic and lacking in detail',
      'Easily influenced by others',
      'Exaggerates the degree of intimacy in relationships'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Supportive and cognitive-behavioral approaches help manage emotional responses and self-esteem.'
      }
    ],
    statistics: 'HPD affects about 1-2% of the population.',
    faqs: [
      {
        question: 'Is histrionic personality disorder treatable?',
        answer: 'Therapy can help individuals manage symptoms and improve relationships, although treatment may be long-term.'
      }
    ]
  },
  {
    id: 'obsessive-compulsive-personality-disorder',
    name: 'Obsessive-Compulsive Personality Disorder (OCPD)',
    description: 'Defined by a preoccupation with orderliness, perfectionism, and control, often at the expense of flexibility and efficiency.',
    overview: 'OCPD is different from OCD, as it involves a personality style rather than overt obsessions and compulsions. It is among the most common personality disorders, affecting up to 8% of the population, and can cause significant interpersonal and occupational difficulties.',
    symptoms: [
      'Preoccupation with details, rules, lists, order, or organization',
      'Perfectionism that interferes with task completion',
      'Excessive devotion to work and productivity',
      'Overconscientiousness or rigid morality',
      'Inflexibility about morality, values, or ethics',
      'Difficulty discarding worthless items',
      'Reluctance to delegate tasks unless done exactly their way',
      'Miserliness in spending towards self and others',
      'Stubbornness and rigidity'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Cognitive-behavioral therapy is most commonly used and helps address perfectionism and control.'
      },
      {
        title: 'Medications',
        description: 'SSRIs may be used if co-occurring anxiety or depression is present.'
      }
    ],
    statistics: 'OCPD is estimated to affect up to 8% of the population, more common in men.',
    faqs: [
      {
        question: 'Is OCPD the same as OCD?',
        answer: 'No, OCPD is a pervasive personality style involving perfectionism and rigidity. OCD is an anxiety disorder defined by obsessions and compulsions.'
      }
    ]
  },
  {
    id: 'paranoid-personality-disorder',
    name: 'Paranoid Personality Disorder (PPD)',
    description: 'A pattern of distrust and suspiciousness such that others’ motives are interpreted as malevolent.',
    overview: 'PPD begins by early adulthood and appears in a variety of contexts. It is more common in men and may be more prevalent in families with psychotic disorders.',
    symptoms: [
      'Suspects, without sufficient basis, that others are exploiting or deceiving them',
      'Preoccupied with unjustified doubts about the loyalty of friends or associates',
      'Reluctant to confide in others',
      'Reads hidden demeaning or threatening meanings into benign remarks',
      'Persistently bears grudges',
      'Perceives attacks on their character and reacts quickly',
      'Has recurrent suspicions regarding fidelity of spouse or partner'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Supportive therapy focused on building trust and reality testing is recommended.'
      },
      {
        title: 'Medications',
        description: 'Antipsychotics may be used if severe symptoms or transient psychosis develop.'
      }
    ],
    statistics: 'PPD is estimated to affect 2-4% of the general population.',
    faqs: [
      {
        question: 'What helps people with PPD engage in therapy?',
        answer: 'Establishing trust and a consistent, nonjudgmental approach can help patients feel safer in the therapeutic relationship.'
      }
    ]
  },
  {
    id: 'schizoid-personality-disorder',
    name: 'Schizoid Personality Disorder',
    description: 'Characterized by detachment from social relationships and a restricted range of emotional expression.',
    overview: 'Schizoid Personality Disorder emerges by early adulthood and may be slightly more common in men. Individuals are often perceived as loners and may function well in careers requiring minimal social contact.',
    symptoms: [
      'Neither desires nor enjoys close relationships, including family',
      'Almost always chooses solitary activities',
      'Little, if any, interest in sexual experiences with others',
      'Takes pleasure in few, if any, activities',
      'Lacks close friends or confidants',
      'Appears indifferent to praise or criticism',
      'Shows emotional coldness or detachment'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Supportive therapy focusing on social skills training and gradual social integration.'
      }
    ],
    statistics: 'Estimated prevalence is under 1%, but true rates may be higher as these individuals often avoid clinical contact.'
  },
  {
    id: 'schizotypal-personality-disorder',
    name: 'Schizotypal Personality Disorder (STPD)',
    description: 'A pattern of acute discomfort in close relationships, cognitive or perceptual distortions, and eccentric behaviors.',
    overview: 'STPD shares features with schizophrenia but does not include psychosis. Individuals may have odd beliefs or magical thinking and often remain socially isolated. Genetics and neurodevelopmental factors contribute.',
    symptoms: [
      'Odd beliefs or magical thinking',
      'Unusual perceptual experiences',
      'Odd thinking and speech',
      'Suspiciousness or paranoid ideation',
      'Inappropriate or constricted affect',
      'Behavior or appearance that is odd or eccentric',
      'Lack of close friends',
      'Excessive social anxiety'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Social skills training and cognitive therapies.'
      },
      {
        title: 'Medications',
        description: 'Low-dose antipsychotics may be useful for perceptual or cognitive distortions.'
      }
    ],
    statistics: 'STPD affects about 3% of the population.',
    faqs: [
      {
        question: 'Is STPD related to schizophrenia?',
        answer: 'It is in the same spectrum, but individuals do not typically experience full-blown psychosis.'
      }
    ]
  },
  {
    id: 'dependent-personality-disorder',
    name: 'Dependent Personality Disorder (DPD)',
    description: 'A pervasive and excessive need to be taken care of, leading to submissive and clingy behavior and fears of separation.',
    overview: 'DPD often emerges in early adulthood and may be slightly more common in women. People with DPD become very dependent on others to take care of their needs.',
    symptoms: [
      'Difficulty making everyday decisions without advice or reassurance',
      'Needs others to assume responsibility for most areas of their life',
      'Difficulty disagreeing with others for fear of losing their support',
      'Difficulty initiating projects due to lack of self-confidence',
      'Goes to excessive lengths to obtain nurturance and support',
      'Feels uncomfortable or helpless when alone',
      'Urgently seeks another relationship when one ends',
      'Unrealistic fear of being left to care for oneself'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Cognitive-behavioral therapy aimed at increasing independence and assertiveness.'
      }
    ],
    statistics: 'Prevalence is estimated at about 0.5% in the general population.',
    faqs: [
      {
        question: 'Is DPD treatable?',
        answer: 'Yes. Therapy can help individuals become more independent and self-confident.'
      }
    ]
  },
  {
    id: 'avoidant-personality-disorder',
    name: 'Avoidant Personality Disorder (AVPD)',
    description: 'A pervasive pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation.',
    overview: 'AVPD often emerges by early adulthood and can significantly interfere with relationships and employment. Risk factors include childhood shyness, rejection, or criticism.',
    symptoms: [
      'Avoids occupational activities involving interpersonal contact due to fears of criticism or rejection',
      'Unwilling to get involved with people unless certain of being liked',
      'Shows restraint in relationships for fear of being shamed or ridiculed',
      'Preoccupied with being criticized or rejected in social situations',
      'Inhibited in new situations due to feelings of inadequacy',
      'Views self as socially inept, unappealing, or inferior',
      'Reluctant to take personal risks or engage in new activities'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Cognitive-behavioral and interpersonal therapies focusing on self-esteem and social skills.'
      },
      {
        title: 'Medications',
        description: 'SSRIs or anti-anxiety medications may be helpful for associated symptoms.'
      }
    ],
    statistics: 'AVPD may affect up to 2.5% of the general population.',
    faqs: [
      {
        question: 'Is AVPD similar to social anxiety disorder?',
        answer: 'They share many features, but AVPD describes a more pervasive and deeply ingrained personality style.'
      }
    ]
  }
];