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

export const moodDisorders: DisorderDetail[] = [
  {
    id: 'major-depressive-disorder',
    name: 'Major Depressive Disorder (MDD)',
    description: 'Major Depressive Disorder (MDD), also known as clinical depression, is a mental health condition characterized by persistent feelings of sadness, loss of interest in daily activities, and a significant impairment in functioning. It affects millions of people globally and can vary in severity from mild to severe.',
    overview: 'MDD is marked by episodes of deep emotional lows that last for at least two weeks and may recur throughout a person\'s life. These episodes can disrupt work, social life, and family life. The causes of MDD are multifactorial, involving genetic predisposition, neurochemical imbalances (especially serotonin and dopamine), and environmental stressors. MDD affects around 7% of adults each year, and women are twice as likely as men to be diagnosed.',
    symptoms: [
      'Persistent sadness or low mood',
      'Fatigue and low energy',
      'Loss of interest in previously enjoyed activities',
      'Difficulty concentrating or making decisions',
      'Changes in appetite or weight',
      'Sleep disturbances (insomnia or excessive sleeping)',
      'Thoughts of suicide or self-harm'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Cognitive Behavioral Therapy (CBT) and interpersonal therapy are commonly used.'
      },
      {
        title: 'Medications',
        description: 'Antidepressants such as SSRIs (Selective Serotonin Reuptake Inhibitors) are frequently prescribed.'
      },
      {
        title: 'Lifestyle Changes',
        description: 'Regular physical exercise, maintaining a consistent routine, and engaging in mindfulness practices can help manage symptoms.'
      },
      {
        title: 'Alternative Therapies',
        description: 'Treatments such as light therapy (especially for seasonal depression) and psychobiotics can complement traditional therapies.'
      }
    ],
    statistics: 'MDD affects around 7% of adults each year, and women are twice as likely as men to be diagnosed.'
  },
  {
    id: 'bipolar-disorder',
    name: 'Bipolar Disorder 1 & 2',
    description: 'Bipolar Disorder is a mental health condition characterized by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression). These shifts in mood can disrupt everyday activities and relationships. Bipolar I involves at least one manic episode, while Bipolar II is defined by hypomanic and depressive episodes without full mania.',
    overview: 'Bipolar Disorder affects roughly 2.8% of the U.S. population annually. The condition can lead to significant shifts in energy, activity levels, and judgment. Genetic, neurobiological, and environmental factors contribute to its development. Early diagnosis and treatment are critical to managing the disorder and preventing extreme mood episodes from leading to detrimental outcomes like job loss or substance abuse.',
    symptoms: [
      'Manic or Hypomanic Episodes: Increased energy, reduced need for sleep, inflated self-esteem, racing thoughts, impulsive decisions',
      'Depressive Episodes: Sadness, fatigue, hopelessness, difficulty concentrating, changes in appetite or sleep patterns, thoughts of suicide'
    ],
    treatmentOptions: [
      {
        title: 'Medication',
        description: 'Mood stabilizers (e.g., lithium), antipsychotics, and antidepressants are commonly prescribed.'
      },
      {
        title: 'Psychotherapy',
        description: 'Cognitive-behavioral therapy (CBT) and family-focused therapy are effective in helping manage mood swings.'
      },
      {
        title: 'Lifestyle Management',
        description: 'Regular sleep schedules, healthy eating, and stress management are important to stabilize moods.'
      }
    ],
    statistics: 'Bipolar Disorder affects roughly 2.8% of the U.S. population annually.'
  },
  {
    id: 'cyclothymia',
    name: 'Cyclothymia',
    description: 'Cyclothymic Disorder is a milder form of bipolar disorder, characterized by chronic mood fluctuations that include periods of hypomanic symptoms and depressive symptoms that don\'t meet the criteria for major episodes. It can last for years and often goes undiagnosed due to its less severe nature.',
    overview: 'Cyclothymia involves mood changes that are less extreme than those in bipolar disorder, but the emotional highs and lows can still disrupt everyday life. Many people with cyclothymia experience rapid mood shifts. Early treatment is crucial, as it can develop into Bipolar I or II without proper intervention.',
    symptoms: [
      'Periods of elevated mood and increased activity',
      'Periods of depressive symptoms (fatigue, low self-esteem)',
      'Mood swings that seem to occur without a clear trigger'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Cognitive-behavioral therapy (CBT) can help manage mood fluctuations.'
      },
      {
        title: 'Medications',
        description: 'Mood stabilizers and sometimes antidepressants are used.'
      },
      {
        title: 'Lifestyle Modifications',
        description: 'Keeping a regular daily routine and managing stress are important.'
      }
    ]
  },
  {
    id: 'seasonal-affective-disorder',
    name: 'Seasonal Affective Disorder',
    description: 'Seasonal Affective Disorder (SAD) is a form of depression that occurs during specific seasons, most commonly in winter, due to reduced sunlight exposure. It often improves during spring and summer when daylight increases.',
    overview: 'SAD primarily affects people in areas with long winters or limited daylight. It is believed to be related to changes in the body\'s circadian rhythms and serotonin levels due to reduced sunlight exposure. While symptoms may resolve with the change of seasons, SAD can significantly impair daily functioning during the affected months.',
    symptoms: [
      'Low energy, oversleeping',
      'Increased appetite, especially for carbohydrates',
      'Irritability, social withdrawal',
      'Difficulty concentrating',
      'Feelings of hopelessness, worthlessness'
    ],
    treatmentOptions: [
      {
        title: 'Light Therapy',
        description: 'Using a special light box to mimic natural sunlight can help regulate mood.'
      },
      {
        title: 'Medications',
        description: 'Antidepressants may be used during the affected season.'
      },
      {
        title: 'Psychotherapy',
        description: 'Cognitive-behavioral therapy can be helpful for managing symptoms.'
      }
    ]
  },
  {
    id: 'dysthymia',
    name: 'Dysthymia (Persistent Depressive Disorder)',
    description: 'Dysthymia, also known as Persistent Depressive Disorder, is a chronic form of depression that lasts for at least two years. The symptoms are less severe than major depression, but they persist for long periods, making it hard to experience joy or satisfaction in life.',
    overview: 'While dysthymia may not cause the intense emotional pain of major depressive episodes, it can cause a persistent, underlying sadness or low mood. This long-lasting form of depression can affect a person\'s ability to function at work or in social situations. It\'s often underdiagnosed due to its subtler symptoms.',
    symptoms: [
      'Continuous low mood or sadness',
      'Low self-esteem, feelings of hopelessness',
      'Difficulty concentrating or making decisions',
      'Sleep disturbances, low energy',
      'Appetite changes'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'Talk therapy, especially CBT, can help patients cope with the chronic nature of dysthymia.'
      },
      {
        title: 'Medications',
        description: 'Antidepressants such as SSRIs are commonly prescribed.'
      },
      {
        title: 'Lifestyle Changes',
        description: 'Regular exercise, good sleep hygiene, and mindfulness practices can help alleviate symptoms.'
      }
    ]
  }
];