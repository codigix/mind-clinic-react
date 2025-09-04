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
}

export const sleepDisorders: DisorderDetail[] = [
  {
    id: 'insomnia-disorder',
    name: 'Insomnia Disorder',
    description: 'Insomnia Disorder is characterized by persistent difficulty falling asleep, staying asleep, or waking up too early and not being able to go back to sleep. It can be acute or chronic and is often associated with significant distress and impairment in functioning. Common causes include stress, anxiety, depression, poor sleep hygiene, and medical conditions.',
    overview: 'Insomnia can lead to daytime fatigue, irritability, and impaired concentration. It may be short-term (acute) or last for months or years (chronic). Treatment focuses on addressing underlying causes and improving sleep habits.',
    symptoms: [
      'Difficulty falling asleep at night',
      'Waking up frequently during the night',
      'Feeling tired upon waking',
      'Daytime fatigue or sleepiness',
      'Irritability or mood changes'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive Behavioral Therapy for Insomnia (CBT-I)',
        description: 'A first-line treatment that helps address thoughts and behaviors that contribute to sleep issues.'
      },
      {
        title: 'Sleep Hygiene',
        description: 'Improving habits around sleep, such as having a consistent bedtime, avoiding screens, and limiting caffeine.'
      },
      {
        title: 'Medications',
        description: 'Sedative-hypnotics or other sleep aids, though usually recommended for short-term use.'
      },
      {
        title: 'Relaxation Techniques',
        description: 'Meditation and breathing exercises can help reduce anxiety and promote sleep.'
      }
    ]
  },
  {
    id: 'hypersomnolence-disorder',
    name: 'Hypersomnolence Disorder',
    description: 'Hypersomnolence Disorder involves excessive sleepiness during the day despite adequate sleep at night. It may affect daily activities and overall quality of life. This disorder may be caused by neurological issues, sleep disorders like sleep apnea, or substance use.',
    overview: 'People with hypersomnolence disorder may sleep for long periods but still feel unrefreshed. The condition can interfere with work, school, and social life.',
    symptoms: [
      'Prolonged sleep periods (greater than 9 hours) that are non-restorative',
      'Difficulty waking up from a long sleep',
      'Frequent naps that do not relieve sleepiness',
      'Impaired memory, concentration, or alertness during the day'
    ],
    treatmentOptions: [
      {
        title: 'Stimulant Medications',
        description: 'Prescribed to help reduce daytime sleepiness.'
      },
      {
        title: 'Lifestyle Changes',
        description: 'Avoiding activities that cause drowsiness and scheduling naps can help manage symptoms.'
      },
      {
        title: 'Cognitive Behavioral Therapy',
        description: 'To help cope with the condition and manage underlying stress or depression.'
      }
    ]
  },
  {
    id: 'narcolepsy',
    name: 'Narcolepsy',
    description: 'Narcolepsy is a neurological disorder that affects the brain’s ability to regulate sleep-wake cycles. People with narcolepsy experience excessive daytime sleepiness, sudden sleep attacks, and can have episodes of cataplexy, which is a sudden loss of muscle tone often triggered by strong emotions.',
    overview: 'Narcolepsy can significantly impact daily functioning and safety. Symptoms often begin in adolescence or young adulthood and may be misdiagnosed as other conditions.',
    symptoms: [
      'Excessive daytime sleepiness',
      'Sudden loss of muscle tone (cataplexy)',
      'Sleep paralysis',
      'Hallucinations while falling asleep or waking up',
      'Fragmented nighttime sleep'
    ],
    treatmentOptions: [
      {
        title: 'Stimulants',
        description: 'Medications like modafinil are often prescribed to help control daytime sleepiness.'
      },
      {
        title: 'Antidepressants',
        description: 'These can help manage symptoms of cataplexy and sleep paralysis.'
      },
      {
        title: 'Lifestyle Adjustments',
        description: 'Maintaining a regular sleep schedule and taking short naps during the day.'
      }
    ]
  },
  {
    id: 'obstructive-sleep-apnea',
    name: 'Obstructive Sleep Apnea',
    description: 'Obstructive Sleep Apnea (OSA) is a sleep disorder where the airway becomes blocked during sleep, leading to pauses in breathing. These pauses can cause snoring, gasping, or choking and disrupt sleep. OSA can lead to serious health issues if left untreated, including cardiovascular problems.',
    overview: 'OSA is commonly associated with obesity, but it can affect people of all ages and body types. Diagnosis often requires a sleep study. Treatment can greatly improve quality of life and reduce health risks.',
    symptoms: [
      'Loud snoring',
      'Gasping for air during sleep',
      'Episodes of stopped breathing during sleep',
      'Daytime fatigue and poor concentration',
      'Morning headaches'
    ],
    treatmentOptions: [
      {
        title: 'Continuous Positive Airway Pressure (CPAP)',
        description: 'A machine that delivers air pressure to keep the airway open during sleep.'
      },
      {
        title: 'Lifestyle Changes',
        description: 'Weight loss, avoiding alcohol, and quitting smoking can reduce the severity of OSA.'
      },
      {
        title: 'Oral Appliances',
        description: 'Devices that help keep the airway open.'
      },
      {
        title: 'Surgery',
        description: 'In severe cases, surgery may be needed to remove airway blockages.'
      }
    ]
  },
  {
    id: 'circadian-rhythm-disorders',
    name: 'Circadian Rhythm Sleep-Wake Disorders',
    description: 'Circadian Rhythm Sleep-Wake Disorders are conditions where the timing of sleep is disrupted, leading to difficulty falling asleep or waking up at socially acceptable times. This disruption is often due to misalignment between the individual’s internal biological clock and external time cues.',
    overview: 'These disorders can be caused by shift work, jet lag, or delayed/advanced sleep phase syndromes. They can affect mood, performance, and overall health.',
    symptoms: [
      'Difficulty falling asleep or waking up at desired times',
      'Sleepiness during the day',
      'Insomnia during the night',
      'Poor sleep quality or non-restorative sleep',
      'Feeling tired despite sleeping enough hours'
    ],
    treatmentOptions: [
      {
        title: 'Light Therapy',
        description: 'Exposure to bright light at specific times to reset the biological clock.'
      },
      {
        title: 'Melatonin Supplements',
        description: 'To help regulate sleep patterns.'
      },
      {
        title: 'Sleep Schedule Adjustments',
        description: 'Gradually adjusting sleep times to align with social or professional commitments.'
      }
    ]
  },
  {
    id: 'parasomnias',
    name: 'Parasomnias (e.g., Sleepwalking, Night Terrors)',
    description: 'Parasomnias are a group of sleep disorders that involve abnormal behaviors or movements during sleep, such as sleepwalking, night terrors, or talking during sleep. These disorders are more common in children but can occur in adults. They can disrupt sleep and lead to injury or confusion.',
    overview: 'Parasomnias can be triggered by stress, sleep deprivation, or certain medications. Ensuring safety and addressing underlying causes are important for management.',
    symptoms: [
      'Sleepwalking or talking during sleep',
      'Screaming or flailing during sleep (night terrors)',
      'Inability to remember episodes upon waking',
      'Confusion and disorientation upon waking',
      'Injuries or harm due to abnormal sleep behaviors'
    ],
    treatmentOptions: [
      {
        title: 'Safety Measures',
        description: 'Ensuring the sleeping environment is safe by removing obstacles and locking doors.'
      },
      {
        title: 'Cognitive Behavioral Therapy (CBT)',
        description: 'Helps address underlying stress or anxiety contributing to parasomnias.'
      },
      {
        title: 'Medications',
        description: 'Sedatives or antidepressants may be prescribed for severe cases.'
      },
      {
        title: 'Scheduled Awakenings',
        description: 'Waking the person before parasomnia episodes are expected can help prevent them.'
      }
    ]
  }
];