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

export const substanceRelatedAndAddictiveDisorders: DisorderDetail[] = [
  {
    id: 'alcohol-use-disorder',
    name: 'Alcohol Use Disorder (AUD)',
    description: 'A chronic relapsing brain disorder characterized by harmful drinking patterns leading to significant impairment or distress.',
    overview: 'AUD is marked by an inability to control alcohol use despite adverse social, occupational, or health consequences. It ranges from mild to severe, with risk factors including genetics, environmental influences, and mental health conditions. It affects millions globally and is a major public health concern.',
    symptoms: [
      'Drinking more or longer than intended',
      'Persistent desire or unsuccessful efforts to cut down',
      'Spending a lot of time obtaining, using, or recovering from alcohol',
      'Craving or strong urge to use alcohol',
      'Recurrent use resulting in failure to fulfill responsibilities',
      'Continued use despite social or interpersonal problems',
      'Tolerance—the need for increased amounts to achieve intoxication',
      'Withdrawal symptoms when not drinking'
    ],
    treatmentOptions: [
      {
        title: 'Detoxification',
        description: 'Medically supervised withdrawal to safely manage acute withdrawal symptoms.'
      },
      {
        title: 'Behavioral Therapies',
        description: 'Cognitive Behavioral Therapy (CBT), motivational enhancement therapy, and contingency management.'
      },
      {
        title: 'Medications',
        description: 'Naltrexone, acamprosate, and disulfiram can support recovery.'
      },
      {
        title: 'Support Groups',
        description: '12-step programs like Alcoholics Anonymous (AA) and other peer-support groups.'
      }
    ],
    statistics: 'AUD affects about 5-10% of adults worldwide.',
    faqs: [
      {
        question: 'Can AUD be fully cured?',
        answer: 'While there is no "cure," many individuals achieve long-term recovery with treatment and support.'
      },
      {
        question: 'Is AUD hereditary?',
        answer: 'Genetics contribute to risk, but environmental factors also play a major role.'
      }
    ]
  },
  {
    id: 'opioid-use-disorder',
    name: 'Opioid Use Disorder (OUD)',
    description: 'A problematic pattern of opioid use leading to significant impairment or distress, including prescription painkillers and heroin.',
    overview: 'OUD causes compulsive opioid use despite harmful consequences. It has led to a public health crisis due to overdose rates. Treatment requires addressing physical dependence, psychological aspects, and co-occurring conditions.',
    symptoms: [
      'Taking opioids in larger amounts or longer than intended',
      'Unsuccessful efforts to cut down opioid use',
      'Strong craving for opioids',
      'Failure to fulfill major role obligations',
      'Important activities given up or reduced',
      'Use in physically hazardous situations',
      'Tolerance and withdrawal symptoms'
    ],
    treatmentOptions: [
      {
        title: 'Medication-Assisted Treatment (MAT)',
        description: 'Methadone, buprenorphine, and naltrexone to reduce cravings and withdrawal.'
      },
      {
        title: 'Behavioral Therapies',
        description: 'CBT, contingency management, and motivational interviewing.'
      },
      {
        title: 'Support Services',
        description: 'Peer support and recovery coaching.'
      }
    ],
    statistics: 'Millions are affected worldwide with high mortality risks due to overdose.',
    faqs: [
      {
        question: 'Can opioid addiction be treated effectively?',
        answer: 'Yes, with MAT and comprehensive care, many achieve long-term recovery.'
      }
    ]
  },
  {
    id: 'cannabis-use-disorder',
    name: 'Cannabis Use Disorder',
    description: 'A problematic pattern of cannabis use leading to clinically significant impairment or distress.',
    overview: 'Cannabis use disorder includes tolerance, withdrawal, and persistent use despite negative impact. It commonly develops in adolescence or young adulthood.',
    symptoms: [
      'Using cannabis more or longer than intended',
      'Unsuccessful efforts to reduce use',
      'Great deal of time spent on cannabis-related activities',
      'Craving or strong desire to use',
      'Failure to fulfill obligations',
      'Continued use despite social or interpersonal problems',
      'Tolerance and withdrawal symptoms'
    ],
    treatmentOptions: [
      {
        title: 'Behavioral Therapies',
        description: 'CBT, motivational enhancement therapy, and contingency management.'
      },
      {
        title: 'Support Groups',
        description: 'Peer support and counseling.'
      }
    ],
    statistics: 'Prevalence rates vary widely, with increasing concern around heavy use.',
    faqs: [
      {
        question: 'Does cannabis cause addiction?',
        answer: 'Yes, some people develop dependence and addiction, especially with heavy or early onset use.'
      }
    ]
  },
  {
    id: 'stimulant-use-disorder',
    name: 'Stimulant Use Disorder',
    description: 'A pattern of misuse of stimulants such as cocaine or methamphetamine causing significant impairment.',
    overview: 'Stimulant use disorder involves compulsive use despite negative consequences like health deterioration, risk-taking behaviors, and withdrawal symptoms.',
    symptoms: [
      'Taking stimulants in larger amounts or longer than intended',
      'Persistent desire or unsuccessful attempts to cut down',
      'Craving and strong urges',
      'Failure to fulfill obligations',
      'Use in hazardous situations',
      'Tolerance and withdrawal symptoms'
    ],
    treatmentOptions: [
      {
        title: 'Behavioral Therapies',
        description: 'CBT and contingency management have demonstrated effectiveness.'
      },
      {
        title: 'Medications',
        description: 'No FDA-approved medication; off-label options sometimes used.'
      }
    ],
    statistics: 'Millions affected, with ongoing overdose and health risks.',
    faqs: [
      {
        question: 'Is there medication for stimulant addiction?',
        answer: 'Currently no approved medications specifically for stimulant addiction, behavioral therapy is key.'
      }
    ]
  },
  {
    id: 'tobacco-use-disorder',
    name: 'Tobacco Use Disorder',
    description: 'A dependence on tobacco products characterized by an inability to quit despite health risks.',
    overview: 'Tobacco use disorder leads to addiction primarily due to nicotine. It carries major health risks including cancer, cardiovascular disease, and respiratory illnesses.',
    symptoms: [
      'Using tobacco more than intended',
      'Craving or strong desire to use',
      'Withdrawal symptoms on cessation',
      'Persistent desire or unsuccessful attempts to quit',
      'Failure to fulfill obligations due to tobacco use'
    ],
    treatmentOptions: [
      {
        title: 'Behavioral Counseling',
        description: 'Individual and group counseling to support quitting.'
      },
      {
        title: 'Medications',
        description: 'Nicotine replacement therapy, bupropion, and varenicline.'
      }
    ],
    statistics: 'Tobacco causes over 8 million deaths annually worldwide.',
    faqs: [
      {
        question: 'Is quitting tobacco difficult?',
        answer: 'Yes, due to nicotine addiction, but many effective treatments exist.'
      }
    ]
  },
  {
    id: 'gambling-disorder',
    name: 'Gambling Disorder',
    description: 'Persistent and recurrent problematic gambling behavior leading to clinically significant impairment or distress.',
    overview: 'Gambling disorder is recognized as a behavioral addiction. It involves impaired control over gambling, chasing losses, and significant negative impacts on life.',
    symptoms: [
      'Preoccupation with gambling',
      'Need to gamble with increasing amounts',
      'Unsuccessful attempts to stop',
      'Restlessness or irritability when trying to cut down',
      'Gambling to escape problems',
      'Lying to conceal extent of gambling',
      'Jeopardizing relationships or jobs',
      'Relying on others for money due to gambling losses'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive Behavioral Therapy',
        description: 'Focus on changing gambling behaviors and thoughts.'
      },
      {
        title: 'Medications',
        description: 'Some SSRIs or opioid antagonists may help, though evidence varies.'
      },
      {
        title: 'Support Groups',
        description: 'Groups like Gamblers Anonymous provide peer support.'
      }
    ],
    statistics: 'Affects approximately 0.2-0.4% of adults globally.',
    faqs: [
      {
        question: 'Is gambling disorder treatable?',
        answer: 'Yes, with psychotherapy and support, many recover or reduce harm.'
      }
    ]
  },
  {
    id: 'internet-gaming-disorder',
    name: 'Internet Gaming Disorder',
    description: 'Excessive and compulsive engagement in video games leading to impairment or distress.',
    overview: 'Recognized in the DSM-5 as a condition for further study, it shares features with other behavioral addictions, including impaired control, preoccupation, and continued use despite negative consequences.',
    symptoms: [
      'Preoccupation with internet games',
      'Withdrawal symptoms when not gaming',
      'Tolerance (need to play more)',
      'Unsuccessful attempts to reduce gaming',
      'Loss of interest in other activities',
      'Deceiving family members or others about gaming',
      'Use of gaming to escape adverse moods',
      'Jeopardizing relationships or opportunities'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive Behavioral Therapy',
        description: 'Cognitive restructuring and behavioral interventions.'
      },
      {
        title: 'Family Therapy',
        description: 'Involving family to support healthier patterns.'
      }
    ],
    statistics: 'Prevalence estimates vary; more research is ongoing.',
    faqs: [
      {
        question: 'Is internet gaming disorder officially recognized?',
        answer: 'It is listed in DSM-5 as a condition for further research, with growing evidence supporting recognition.'
      }
    ]
  },
  {
    id: 'mobile-addiction',
    name: 'Mobile Addiction',
    description: 'A behavioral addiction characterized by excessive and compulsive use of mobile phones interfering with daily life.',
    overview: 'Mobile addiction involves preoccupation with smartphone use, leading to neglect of personal, social, and occupational responsibilities. It is considered a subtype of behavioral addictions with growing concern worldwide.',
    symptoms: [
      'Excessive use of mobile phone beyond intentions',
      'Feeling anxious without mobile access',
      'Neglecting work, studies, or social interactions',
      'Using phone to escape negative feelings',
      'Failed attempts to reduce usage',
      'Lying about phone use',
      'Decreased sleep due to phone use'
    ],
    treatmentOptions: [
      {
        title: 'Behavioral Interventions',
        description: 'Time management, distraction techniques, and setting usage limits.'
      },
      {
        title: 'Cognitive Behavioral Therapy',
        description: 'Address underlying thoughts driving excessive use.'
      },
      {
        title: 'Mindfulness and Stress Reduction',
        description: 'Helps reduce compulsive phone checking.'
      }
    ],
    statistics: 'Prevalence data is emerging; estimates vary by region and age group.',
    faqs: [
      {
        question: 'Is mobile addiction real?',
        answer: 'Yes, it is increasingly recognized as a behavioral addiction with real impacts.'
      }
    ]
  }
];

export const substanceDisorders = substanceRelatedAndAddictiveDisorders;