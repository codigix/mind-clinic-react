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

export const anxietyDisorders: DisorderDetail[] = [
  {
    id: 'generalized-anxiety-disorder',
    name: 'Generalized Anxiety Disorder',
    description: 'Generalized Anxiety Disorder (GAD) is a common mental health condition characterized by excessive and uncontrollable worry about various aspects of life. Individuals with GAD may experience anxiety for at least six months, making it difficult to manage daily tasks.',
    overview: 'Generalized Anxiety Disorder (GAD) is a chronic condition characterized by persistent, excessive worry about a variety of topics, such as personal health, work, or social interactions. This worry is often disproportionate to the actual situation and can interfere with daily life. Individuals with GAD find it difficult to control their anxiety and may experience physical symptoms, including muscle tension, restlessness, and fatigue. GAD can be triggered by a combination of genetic, environmental, and psychological factors. Research shows that around 6.8 million adults in the United States suffer from GAD, making it a relatively common anxiety disorder. It typically develops gradually and can persist for years if untreated. Long-term GAD can lead to the development of other mental health conditions, such as depression.',
    symptoms: [
      'Chronic worry or fear about various life situations',
      'Restlessness or feeling "on edge"',
      'Muscle tension and physical discomfort',
      'Sleep disturbances or fatigue',
      'Difficulty concentrating due to overwhelming thoughts'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'Proven to help individuals challenge irrational fears and develop healthier coping mechanisms.'
      },
      {
        title: 'Medication',
        description: 'Selective serotonin reuptake inhibitors (SSRIs) like sertraline or fluoxetine can alleviate symptoms.'
      },
      {
        title: 'Relaxation Techniques',
        description: 'Meditation, yoga, and mindfulness-based stress reduction can reduce anxiety.'
      }
    ],
    statistics: 'Around 6.8 million adults in the United States suffer from GAD.'
  },
  {
    id: 'panic-disorder',
    name: 'Panic Disorder',
    description: 'Panic Disorder is a mental health condition marked by recurring and unexpected panic attacks—intense periods of fear and discomfort. Often, the person experiences sudden, overwhelming terror even in the absence of danger. Panic attacks may last a few minutes but can feel much longer. The disorder usually develops in young adulthood and can significantly impact daily functioning.',
    overview: 'Panic Disorder is marked by the recurrence of unexpected panic attacks, which are intense periods of fear or discomfort that can occur suddenly and without warning. These attacks can cause physical symptoms like chest pain, heart palpitations, shortness of breath, and dizziness. Individuals with Panic Disorder often fear future attacks, leading to changes in their behavior and lifestyle to avoid situations where they might experience an attack. This can result in social isolation and significant impairment in daily functioning. Panic Disorder is more prevalent in women and often develops during late adolescence or early adulthood. It is linked to biological vulnerabilities, environmental stressors, and cognitive factors such as a heightened sensitivity to bodily sensations.',
    symptoms: [
      'Sudden, overwhelming fear or discomfort',
      'Palpitations or rapid heartbeat',
      'Sweating, trembling, or shortness of breath',
      'A feeling of impending doom or danger',
      'Fear of having future panic attacks'
    ],
    treatmentOptions: [
      {
        title: 'CBT',
        description: 'Focuses on reducing fear of panic attacks and exposure to feared situations.'
      },
      {
        title: 'Medications',
        description: 'SSRIs and benzodiazepines may help manage symptoms.'
      },
      {
        title: 'Relaxation Training',
        description: 'Deep breathing exercises and progressive muscle relaxation.'
      }
    ]
  },
  {
    id: 'social-phobia',
    name: 'Social Phobia',
    description: 'Social Anxiety Disorder, also called social phobia, involves an extreme fear of social situations. Individuals worry about being judged, embarrassed, or rejected by others. This leads to avoidance of gatherings, public speaking, and even daily interactions.',
    overview: 'Social Anxiety Disorder, also known as Social Phobia, is characterized by an intense fear of being judged or scrutinized in social or performance situations. Individuals with this disorder often avoid social interactions or endure them with significant distress, fearing that they will embarrass themselves or be negatively evaluated by others. This can lead to avoidance of social activities, meetings, or even everyday interactions like talking to strangers. Social Anxiety Disorder is among the most common anxiety disorders, affecting approximately 15 million adults in the United States alone. It often begins during adolescence and, if left untreated, can interfere with academic, occupational, and social functioning.',
    symptoms: [
      'Intense fear of being judged or humiliated in public',
      'Avoidance of social situations, such as public speaking or group gatherings',
      'Physical symptoms like blushing, sweating, trembling, or nausea in social settings',
      'Difficulty making eye contact or initiating conversations'
    ],
    treatmentOptions: [
      {
        title: 'CBT',
        description: 'Teaches individuals to challenge negative thoughts and gradually confront feared situations.'
      },
      {
        title: 'Medications',
        description: 'SSRIs and beta-blockers are commonly prescribed to reduce symptoms.'
      },
      {
        title: 'Exposure Therapy',
        description: 'Gradual exposure to feared situations helps reduce anxiety over time.'
      }
    ],
    statistics: 'Affects approximately 15 million adults in the United States alone.'
  },
  {
    id: 'specific-phobias',
    name: 'Specific Phobias',
    description: 'Specific Phobias involve an irrational and intense fear of a specific object or situation, such as heights, spiders, or flying. This fear is disproportionate to the actual danger posed and can lead to avoidance behaviors that interfere with daily life. Specific Phobias are among the most common anxiety disorders, and they often develop during childhood or adolescence.',
    overview: 'Specific Phobias involve an irrational and intense fear of a specific object or situation, such as heights, spiders, or flying. This fear is disproportionate to the actual danger posed and can lead to avoidance behaviors that interfere with daily life. Specific Phobias are among the most common anxiety disorders, and they often develop during childhood or adolescence. People with phobias may go to great lengths to avoid the feared object or situation, which can significantly disrupt their lives. While the exact cause of specific phobias is unknown, they are believed to result from a combination of genetic, environmental, and developmental factors.',
    symptoms: [
      'Intense fear or anxiety triggered by a specific object or situation',
      'Avoidance of situations that could lead to encountering the phobia',
      'Physical symptoms like sweating, shaking, or rapid heartbeat when exposed to the phobia',
      'Feelings of dread or panic'
    ],
    treatmentOptions: [
      {
        title: 'Exposure Therapy',
        description: 'Gradual and repeated exposure to the feared object or situation helps reduce fear over time.'
      },
      {
        title: 'CBT',
        description: 'Focuses on challenging irrational fears and developing coping mechanisms.'
      },
      {
        title: 'Medications',
        description: 'May be used in severe cases to help manage anxiety.'
      }
    ],
    faqs: [
      {
        question: 'How common are specific phobias?',
        answer: 'Specific phobias affect approximately 12% of adults in the United States at some point in their lives.'
      },
      {
        question: 'Can phobias be cured?',
        answer: 'Yes, with appropriate treatment, phobias can be managed and even cured through exposure therapy and CBT.'
      }
    ]
  },
  {
    id: 'agoraphobia',
    name: 'Agoraphobia',
    description: 'Agoraphobia is characterized by an intense fear of situations where escape may be difficult or help unavailable during a panic attack. This often leads to avoidance of open spaces, public transport, or crowded areas.',
    overview: 'Agoraphobia is characterized by an intense fear of situations where escape may be difficult or help unavailable during a panic attack. This often leads to avoidance of open spaces, public transport, or crowded areas. The condition can severely restrict a person\'s ability to function normally and may result in becoming housebound.',
    symptoms: [
      'Fear of leaving home or being in public spaces',
      'Anxiety about being trapped in a situation',
      'Avoidance of places like malls, buses, or theaters',
      'Panic attacks in feared situations'
    ],
    treatmentOptions: [
      {
        title: 'CBT',
        description: 'Often combined with exposure therapy, is the most effective treatment for agoraphobia.'
      },
      {
        title: 'Medications',
        description: 'In severe cases, medications such as SSRIs may be used to help manage symptoms.'
      }
    ],
    faqs: [
      {
        question: 'Can agoraphobia be treated at home?',
        answer: 'Gradual exposure and practicing relaxation techniques at home are helpful but usually work best alongside professional therapy.'
      },
      {
        question: 'What causes agoraphobia?',
        answer: 'Agoraphobia often develops after one or more panic attacks in public places.'
      }
    ]
  },
  {
    id: 'separation-anxiety-disorder',
    name: 'Separation Anxiety Disorder',
    description: 'Separation Anxiety Disorder is often associated with children but can affect adults as well. It is the excessive fear or anxiety over being separated from loved ones, often leading to avoidance of being apart.',
    overview: 'Separation Anxiety Disorder involves excessive fear or anxiety over being separated from loved ones, often leading to avoidance of being apart. While commonly associated with children, it can significantly impact adults as well, affecting relationships and daily functioning.',
    symptoms: [
      'Distress when anticipating separation',
      'Worry about losing loved ones',
      'Reluctance to be alone',
      'Physical symptoms like headaches, nausea when separated'
    ],
    treatmentOptions: [
      {
        title: 'Therapy',
        description: 'CBT helps individuals manage their fears by addressing the irrational thoughts associated with separation.'
      },
      {
        title: 'Family Therapy',
        description: 'Can also be helpful for children dealing with separation anxiety.'
      }
    ],
    faqs: [
      {
        question: 'Can separation anxiety occur in adults?',
        answer: 'Yes, separation anxiety can occur in adults, particularly after significant life changes or traumatic experiences.'
      },
      {
        question: 'How can I help a child with separation anxiety?',
        answer: 'Gradual exposure, reassurance, and teaching coping strategies can be effective.'
      }
    ]
  }
];