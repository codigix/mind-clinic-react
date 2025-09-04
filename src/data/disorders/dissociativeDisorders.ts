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

export const dissociativeDisorders: DisorderDetail[] = [
  {
    id: 'dissociative-identity-disorder',
    name: 'Dissociative Identity Disorder (DID)',
    description: 'Dissociative Identity Disorder (DID), formerly known as Multiple Personality Disorder, is characterized by the presence of two or more distinct identities or personality states that control an individual’s behavior at different times. These identities may have unique names, ages, voices, and behaviors, and they often emerge as a coping mechanism in response to severe trauma, particularly during childhood. Individuals with DID may experience memory gaps when different identities take control, leading to confusion or distress.',
    overview: 'Dissociative disorders are characterized by a disconnection between thoughts, identity, consciousness, and memory. They often develop as a response to trauma, with the most well-known disorder being dissociative identity disorder (DID). Individuals may experience gaps in memory or identity confusion. Treatment involves trauma-focused therapy, such as CBT, and integrating dissociated aspects of identity to regain a sense of wholeness.',
    symptoms: [
      'Presence of two or more distinct identities',
      'Memory loss of everyday events, personal information, or traumatic events',
      'Sudden changes in behavior, voice, or attitude',
      'Feelings of detachment from oneself',
      'Difficulty maintaining a consistent sense of self'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy (e.g., Trauma-Focused Therapy)',
        description: 'Aims to integrate separate identities and address trauma.'
      },
      {
        title: 'Cognitive Behavioral Therapy (CBT)',
        description: 'Helps manage dissociative symptoms and emotional regulation.'
      },
      {
        title: 'Medications',
        description: 'Antidepressants or antianxiety medications may help manage co-occurring symptoms of depression or anxiety.'
      }
    ]
  },
  {
    id: 'dissociative-amnesia',
    name: 'Dissociative Amnesia',
    description: 'Dissociative Amnesia is characterized by an inability to recall important personal information, usually following a traumatic event. This memory loss goes beyond normal forgetfulness and can affect specific periods, events, or even one’s identity. There are different types of dissociative amnesia, such as localized amnesia (forgetting specific events) or generalized amnesia (forgetting everything about oneself). Unlike other forms of amnesia caused by injury or illness, dissociative amnesia stems from psychological stress and trauma.',
    overview: 'The gaps in memory can last from a few minutes to years and may resolve on their own or with treatment. Dissociative amnesia is often triggered by psychological stress or trauma and can cause confusion or distress over memory loss.',
    symptoms: [
      'Inability to recall important personal information',
      'Gaps in memory surrounding traumatic events',
      'Confusion or distress over memory loss',
      'Sudden amnesia triggered by stress',
      'Difficulty maintaining a coherent life narrative'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy (e.g., Trauma-Focused Therapy)',
        description: 'Helps recover lost memories and address underlying trauma.'
      },
      {
        title: 'Cognitive Behavioral Therapy (CBT)',
        description: 'Focuses on coping mechanisms for dealing with memory loss.'
      },
      {
        title: 'Hypnotherapy',
        description: 'May help access repressed memories and treat dissociative symptoms.'
      }
    ]
  },
  {
    id: 'depersonalization-derealization-disorder',
    name: 'Depersonalization/Derealization Disorder',
    description: 'Depersonalization/Derealization Disorder involves persistent or recurrent feelings of detachment from oneself (depersonalization) or a sense that the external world is unreal or distorted (derealization). People with this disorder often feel as though they are observing themselves from the outside, as if in a dream, or that their surroundings are foggy and distant. These sensations can be highly distressing and may interfere with daily functioning.',
    overview: 'Depersonalization/derealization can be triggered by severe stress or trauma and is often associated with other mental health conditions like anxiety and depression. Episodes can last from minutes to years, and they often fluctuate in intensity.',
    symptoms: [
      'Persistent feelings of detachment from one’s body (depersonalization)',
      'Perception that surroundings are unreal or distorted (derealization)',
      'Feeling as if you are watching yourself from the outside',
      'Emotional numbness or lack of connection with reality',
      'Difficulty focusing on daily tasks due to detachment'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive Behavioral Therapy (CBT)',
        description: 'Helps manage feelings of detachment and address underlying stress.'
      },
      {
        title: 'Mindfulness-Based Therapy',
        description: 'Encourages grounding techniques to reconnect with the present moment.'
      },
      {
        title: 'Medications',
        description: 'Antidepressants or anti-anxiety medications may help with co-occurring symptoms.'
      }
    ]
  }
];