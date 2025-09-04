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

export const ocdDisorders: DisorderDetail[] = [
  {
    id: 'obsessive-compulsive-disorder',
    name: 'Obsessive-Compulsive Disorder (OCD)',
    description: 'Obsessive-Compulsive Disorder (OCD) is a chronic condition where individuals experience intrusive and distressing thoughts (obsessions) that lead them to engage in repetitive behaviors (compulsions) in an attempt to reduce anxiety. Common obsessions include fears of contamination, doubts about safety, or the need for things to be in a particular order.',
    overview: 'The compulsions, such as hand washing, checking, or arranging, are performed to alleviate the distress caused by these thoughts, but they offer only temporary relief. OCD affects approximately 2-3% of the population and can severely disrupt daily life, relationships, and work if left untreated. The disorder is often linked to a combination of genetic, neurobiological, and environmental factors.',
    symptoms: [
      'Persistent and intrusive thoughts or fears (e.g., contamination, safety, orderliness)',
      'Repeated behaviors (e.g., excessive hand washing, checking, counting) aimed at reducing anxiety',
      'Inability to control or stop compulsions despite knowing they\'re irrational'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive-Behavioral Therapy (CBT) with Exposure and Response Prevention (ERP)',
        description: 'Proven effective treatment for managing OCD symptoms'
      },
      {
        title: 'Medications',
        description: 'Such as SSRIs to help manage symptoms'
      },
      {
        title: 'Supportive therapies',
        description: 'Such as mindfulness and relaxation techniques'
      }
    ],
    statistics: 'OCD affects approximately 2-3% of the population',
    faqs: [
      {
        question: 'What causes OCD?',
        answer: 'OCD can be caused by a combination of genetic, neurological, and environmental factors.'
      },
      {
        question: 'Is OCD treatable?',
        answer: 'Yes, many individuals with OCD experience significant improvement through therapy and medications'
      }
    ]
  },
  {
    id: 'body-dysmorphic-disorder',
    name: 'Body Dysmorphic Disorder (BDD)',
    description: 'Body Dysmorphic Disorder (BDD) is a mental health condition characterized by an obsessive focus on perceived flaws or defects in physical appearance that are either minor or not noticeable to others.',
    overview: 'Individuals with BDD may spend excessive time in front of mirrors, seek reassurance about their appearance, or undergo unnecessary cosmetic procedures to correct these perceived flaws. BDD can lead to severe emotional distress and impair social, occupational, and other areas of functioning. BDD typically begins during adolescence and is equally common in males and females. It is often associated with anxiety, depression, and other obsessive-compulsive behaviors.',
    symptoms: [
      'Preoccupation with perceived defects in appearance',
      'Excessive grooming or mirror-checking',
      'Avoidance of social situations due to shame or embarrassment',
      'Seeking reassurance or undergoing cosmetic procedures',
      'Emotional distress related to body image'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'Focusing on body image concerns'
      },
      {
        title: 'Medications',
        description: 'Such as SSRIs for anxiety and depression'
      },
      {
        title: 'Supportive therapies',
        description: 'Such as self-esteem building and positive body image work'
      }
    ],
    faqs: [
      {
        question: 'What triggers BDD?',
        answer: 'BDD may be triggered by societal pressures, personal trauma, or underlying anxiety and depression.'
      },
      {
        question: 'Can BDD be treated?',
        answer: 'Yes, a combination of therapy and medication can help reduce the distress associated with BDD.'
      }
    ]
  },
  {
    id: 'trichotillomania',
    name: 'Trichotillomania (Hair-Pulling Disorder)',
    description: 'Trichotillomania, or hair-pulling disorder, is a condition where individuals experience irresistible urges to pull out their hair, often resulting in noticeable hair loss. This behavior is usually a response to anxiety or stress.',
    overview: 'Trichotillomania involves recurrent hair-pulling that leads to noticeable hair loss. The behavior is often a response to anxiety or stress and can result in significant distress and impairment in daily functioning.',
    symptoms: [
      'Repeatedly pulling out hair from the scalp, eyebrows, or other body parts',
      'Noticeable hair loss or bald patches',
      'Feeling relief or satisfaction after pulling hair but also experiencing guilt or shame'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'With habit reversal training'
      },
      {
        title: 'Medications',
        description: 'Such as SSRIs or antipsychotics'
      },
      {
        title: 'Stress management techniques',
        description: 'And mindfulness-based therapies'
      }
    ],
    faqs: [
      {
        question: 'Why do people pull their hair?',
        answer: 'Hair-pulling is often a coping mechanism for dealing with stress, anxiety, or boredom.'
      },
      {
        question: 'Can trichotillomania be cured?',
        answer: 'While there\'s no definitive cure, treatment can help reduce the frequency of hair-pulling behaviors.'
      }
    ]
  },
  {
    id: 'hoarding-disorder',
    name: 'Hoarding Disorder',
    description: 'Hoarding Disorder involves the persistent difficulty in parting with possessions, regardless of their actual value, due to a perceived need to save them. Individuals with hoarding disorder experience distress when faced with the idea of discarding items, which can result in cluttered living spaces and significant impairment in daily life.',
    overview: 'This condition is more than just excessive collecting; it is a chronic and disabling mental health condition. Hoarding Disorder often begins in adolescence and worsens with age. It can lead to unsanitary living conditions, relationship problems, and social isolation.',
    symptoms: [
      'Difficulty discarding items, regardless of value',
      'Accumulation of possessions that clutter living spaces',
      'Emotional attachment to items and distress at the thought of discarding them',
      'Social isolation due to embarrassment over hoarding',
      'Impairment in daily functioning'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'Targeting decision-making and organizational skills'
      },
      {
        title: 'Medications',
        description: 'Such as antidepressants for underlying anxiety or depression'
      },
      {
        title: 'Professional home organization support',
        description: 'To help with practical decluttering'
      }
    ],
    faqs: [
      {
        question: 'What triggers hoarding disorder?',
        answer: 'Hoarding may be triggered by traumatic life events, perfectionism, or attachment to objects as a way of coping with anxiety or stress.'
      },
      {
        question: 'Is hoarding disorder treatable?',
        answer: 'Yes, treatment can help individuals manage hoarding behaviors and reclaim their living spaces.'
      }
    ]
  },
  {
    id: 'excoriation-disorder',
    name: 'Excoriation (Skin-Picking) Disorder',
    description: 'Excoriation Disorder, or skin-picking disorder, involves recurrent skin-picking that leads to skin lesions. Individuals may pick at healthy skin, scabs, or bumps, often as a response to stress or anxiety.',
    overview: 'Excoriation Disorder involves recurrent skin-picking that leads to skin lesions. Individuals may pick at healthy skin, scabs, or bumps, often as a response to stress or anxiety. This behavior can result in significant distress and impairment in daily functioning.',
    symptoms: [
      'Recurrent picking at skin, often causing damage or scarring',
      'Inability to stop picking, despite attempts to reduce the behavior',
      'Feelings of relief after picking but followed by guilt or distress'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'With habit reversal techniques'
      },
      {
        title: 'Medications',
        description: 'Such as SSRIs for underlying anxiety or depression'
      },
      {
        title: 'Stress management and mindfulness-based therapies',
        description: 'To help manage triggers'
      }
    ],
    faqs: [
      {
        question: 'Why do people pick their skin?',
        answer: 'Skin-picking is often a coping mechanism for dealing with anxiety, boredom, or stress.'
      },
      {
        question: 'Is excoriation disorder treatable?',
        answer: 'Yes, therapy and medication can help manage the behavior and reduce skin damage.'
      }
    ]
  }
];