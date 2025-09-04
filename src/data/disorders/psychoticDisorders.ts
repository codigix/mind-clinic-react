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
  faqs?: { question: string; answer: string }[];
}

export const psychoticDisorders: DisorderDetail[] = [
  {
    id: 'schizophrenia',
    name: 'Schizophrenia',
    overview:
      'Schizophrenia is a chronic mental health disorder that affects how a person thinks, feels, and behaves. It is characterized by episodes of psychosis, which include hallucinations (hearing or seeing things that are not there), delusions (false beliefs), and disorganized thinking.',
    description:
      'Schizophrenia can lead to difficulty in distinguishing between what is real and what is imagined. People with schizophrenia may also experience flattened emotions, reduced motivation, and cognitive difficulties. Schizophrenia affects about 1% of the population and is often first diagnosed in late adolescence or early adulthood. Treatment typically involves medication and psychotherapy to manage symptoms and improve quality of life.',
    statistics:
      'Affects about 1% of the population, often diagnosed in late adolescence or early adulthood.',
    symptoms: [
      'Hallucinations (hearing or seeing things that aren’t there)',
      'Delusions (strong beliefs not based on reality)',
      'Disorganized speech or behavior',
      'Social withdrawal and emotional flatness',
      'Emotional flatness or reduced motivation',
      'Difficulty in functioning at work or in social settings'
    ],
    treatmentOptions: [
      {
        title: 'Antipsychotic medications',
        description: 'Used to manage psychotic symptoms and prevent relapses.'
      },
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'Helps improve coping and social skills.'
      },
      {
        title: 'Family therapy and psychoeducation',
        description: 'Provides support and education for families.'
      },
      {
        title: 'Rehabilitation programs',
        description: 'Aids reintegration into daily activities and improves functioning.'
      }
    ],
    faqs: [
      {
        question: 'What causes schizophrenia?',
        answer: 'Schizophrenia is believed to result from a combination of genetic, environmental, and brain chemistry factors.'
      },
      {
        question: 'Can schizophrenia be cured?',
        answer: 'While there is no cure for schizophrenia, effective treatments can help manage symptoms and improve quality of life.'
      }
    ]
  },
  {
    id: 'schizoaffective-disorder',
    name: 'Schizoaffective Disorder',
    overview:
      'Schizoaffective Disorder is a mental health condition that presents a combination of schizophrenia symptoms, such as hallucinations or delusions, and mood disorder symptoms, either depression or mania.',
    description:
      'Individuals with this disorder experience psychotic episodes, but unlike schizophrenia, these episodes occur alongside periods of significant mood disturbances. Schizoaffective disorder can be challenging to diagnose due to the overlap of psychotic and mood symptoms. It typically starts in early adulthood and can affect daily functioning, relationships, and work. Early treatment can reduce the severity of symptoms and improve the overall quality of life.',
    statistics: undefined,
    symptoms: [
      'Hallucinations and delusions',
      'Periods of mania or severe depression',
      'Disorganized thinking and behavior',
      'Mood swings and emotional instability'
    ],
    treatmentOptions: [
      {
        title: 'Antipsychotic medications',
        description: 'For psychotic symptoms.'
      },
      {
        title: 'Mood stabilizers and antidepressants',
        description: 'For mood-related symptoms.'
      },
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'For managing both psychosis and mood fluctuations.'
      },
      {
        title: 'Psychosocial support and rehabilitation',
        description: 'To improve functioning and quality of life.'
      }
    ],
    faqs: [
      {
        question: 'How is schizoaffective disorder different from schizophrenia?',
        answer: 'Schizoaffective disorder includes significant mood symptoms (depression or mania) in addition to psychotic symptoms, while schizophrenia primarily involves psychosis.'
      },
      {
        question: 'What are the treatments for schizoaffective disorder?',
        answer: 'Treatment typically involves a combination of medications and therapies that address both mood and psychotic symptoms.'
      }
    ]
  },
  {
    id: 'delusional-disorder',
    name: 'Delusional Disorder',
    overview:
      'Delusional Disorder is characterized by persistent delusions (false beliefs) that are not typically accompanied by other symptoms of psychosis, such as hallucinations or disorganized speech. The delusions may center around a variety of themes, including persecution, grandiosity, jealousy, or somatic complaints.',
    description:
      'Unlike schizophrenia, people with delusional disorder typically function well in their daily lives and do not exhibit bizarre behavior aside from their delusions. This disorder is often under-recognized, as individuals may appear to be functioning well socially and occupationally, but the delusions can significantly impair relationships and decision-making.',
    statistics: undefined,
    symptoms: [
      'Strongly held false beliefs that persist despite evidence to the contrary',
      'Themes of persecution, grandiosity, or jealousy',
      'Absence of hallucinations or disorganized speech',
      'Otherwise normal functioning in daily life',
      'Reluctance to discuss delusions with others'
    ],
    treatmentOptions: [
      {
        title: 'Antipsychotic medications',
        description: 'To reduce delusional thinking.'
      },
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'To challenge and modify false beliefs.'
      },
      {
        title: 'Family support and psychoeducation',
        description: 'To help understand and manage the disorder.'
      },
      {
        title: 'Individual therapy',
        description: 'To improve coping and social functioning.'
      }
    ],
    faqs: [
      {
        question: 'What causes delusional disorder?',
        answer: 'The exact cause is unknown, but it may involve genetic, environmental, and neurobiological factors.'
      },
      {
        question: 'Can delusions go away with treatment?',
        answer: 'With proper treatment, delusions can be managed, and individuals can regain a more balanced perspective.'
      }
    ]
  },
  {
    id: 'brief-psychotic-disorder',
    name: 'Brief Psychotic Disorder',
    overview:
      'Brief Psychotic Disorder is a short-term mental health condition in which an individual experiences psychosis, including delusions, hallucinations, disorganized speech, and bizarre behavior.',
    description:
      'These episodes typically last less than one month and occur suddenly, often triggered by a stressful life event. Once the psychotic episode resolves, individuals usually regain their previous level of functioning. While brief, the symptoms can be quite severe during the episode, and it is crucial to differentiate it from longer-lasting psychotic disorders like schizophrenia.',
    statistics: undefined,
    symptoms: [
      'Hallucinations or delusions',
      'Sudden onset of intense distress or confusion',
      'Disorganized thinking and behavior',
      'Rapid recovery once the episode ends'
    ],
    treatmentOptions: [
      {
        title: 'Antipsychotic medications',
        description: 'For short-term symptom management.'
      },
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'To address underlying stress or trauma.'
      },
      {
        title: 'Short-term supportive therapy',
        description: 'During recovery.'
      },
      {
        title: 'Stress management techniques',
        description: 'Relaxation exercises and coping strategies.'
      }
    ],
    faqs: [
      {
        question: 'What causes brief psychotic disorder?',
        answer: 'It is often triggered by a major stressor or trauma, but the exact cause can vary.'
      },
      {
        question: 'Can brief psychotic disorder be treated?',
        answer: 'Yes, with proper treatment, most individuals recover fully after the episode.'
      }
    ]
  },
  {
    id: 'shared-psychotic-disorder',
    name: 'Shared Psychotic Disorder (Folie à Deux)',
    overview:
      'Shared Psychotic Disorder, also known as Folie à Deux, occurs when one person develops delusions as a result of close association with another individual who already has a psychotic disorder. The delusions are shared between two or more people, usually within a close relationship or family.',
    description:
      'This rare disorder involves shared delusional beliefs between two or more individuals, often with close emotional ties. Separation and therapy are key to recovery.',
    statistics: undefined,
    symptoms: [
      'Shared delusional beliefs between two or more individuals',
      'Close emotional ties between those affected',
      'Withdrawal from others who do not share the delusions',
      'Difficulty distinguishing reality from delusion'
    ],
    treatmentOptions: [
      {
        title: 'Separation of the individuals involved',
        description: 'To disrupt the shared delusional beliefs.'
      },
      {
        title: 'Antipsychotic medications',
        description: 'For the primary individual with psychosis.'
      },
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'For both individuals to challenge false beliefs.'
      },
      {
        title: 'Family therapy',
        description: 'To rebuild healthy relationship dynamics.'
      }
    ],
    faqs: [
      {
        question: 'What causes shared psychotic disorder?',
        answer: 'It often occurs in close relationships where one person has a dominant psychotic disorder, and the other(s) adopt their delusional beliefs.'
      },
      {
        question: 'Can shared psychotic disorder be treated?',
        answer: 'Yes, separating the individuals involved and providing appropriate therapy can help resolve the shared delusions.'
      }
    ]
  },
  {
    id: 'schizophreniform-disorder',
    name: 'Schizophreniform Disorder',
    overview:
      'Schizophreniform Disorder is a short-term, acute psychotic disorder with symptoms that are similar to schizophrenia but last for less than six months. Individuals may experience hallucinations, delusions, disorganized thinking, and impaired daily functioning.',
    description:
      'Schizophreniform disorder is often a precursor to schizophrenia if symptoms persist beyond the six-month period. Early intervention can prevent the progression to a more chronic psychotic disorder. Schizophreniform disorder typically develops in late adolescence or early adulthood and may be triggered by significant life changes or stressors.',
    statistics: undefined,
    symptoms: [
      'Hallucinations and delusions',
      'Flattened emotions or lack of motivation',
      'Disorganized speech and behavior',
      'Symptoms last for more than one month but less than six months',
      'Social and occupational impairment'
    ],
    treatmentOptions: [
      {
        title: 'Antipsychotic Medications',
        description: 'To reduce the intensity of psychotic symptoms.'
      },
      {
        title: 'Psychotherapy',
        description: 'Can help the individual cope with symptoms and prevent relapses.'
      },
      {
        title: 'Hospitalization',
        description: 'May be necessary for acute symptom management and stabilization.'
      }
    ],
    faqs: [
      {
        question: 'What is schizopheniform disorder?',
        answer: 'Schizophreniform disorder is a mental disorder characterized by symptoms similar to schizophrenia, such as hallucinations, delusions, and disorganized thinking, but with a shorter duration.'
      },
      {
        question: 'How long does schizopheniform disorder last?',
        answer: 'The symptoms of schizopheniform disorder last for more than one month but less than six months. If symptoms persist longer, a diagnosis of schizophrenia may be considered.'
      },
      {
        question: 'What are the treatment options for schizopheniform disorder?',
        answer: 'Treatment typically includes antipsychotic medications to manage symptoms, and psychotherapy to help the individual cope with the disorder. Hospitalization may be required in some cases for stabilization.'
      }
    ]
  }
];