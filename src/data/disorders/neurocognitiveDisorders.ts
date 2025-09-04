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

export const neurocognitiveDisorders: DisorderDetail[] = [
  { id: 'alzheimers-disease', name: 'Alzheimer\'s Disease', description: '', overview: '', symptoms: [], treatmentOptions: [], statistics: '' },
  {
    id: 'autism-spectrum-disorder',
    name: 'Autism Spectrum Disorder (ASD)',
    description: 'Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social interaction. Individuals with ASD may have difficulty understanding social cues, engaging in typical conversations, or developing relationships.',
    overview: 'ASD typically presents in early childhood, and early diagnosis and intervention can improve outcomes, particularly in language development and social skills. The symptoms of autism exist on a spectrum, with some individuals needing minimal support while others may require substantial assistance with daily living skills.',
    symptoms: [
      'Difficulty with social interactions, including eye contact and understanding social cues.',
      'Delayed language development or repetitive speech patterns.',
      'Restricted and repetitive behaviors or interests.',
      'Sensitivity to sensory input, such as sound, light, or textures.',
      'Challenges in adapting to changes in routine.'
    ],
    treatmentOptions: [
      {
        title: 'Applied Behavior Analysis (ABA)',
        description: 'An evidence-based therapy that helps improve communication, social, and learning skills.'
      },
      {
        title: 'Speech Therapy',
        description: 'To assist with language and communication development.'
      },
      {
        title: 'Occupational Therapy',
        description: 'Helps individuals manage sensory sensitivities and improve fine motor skills.'
      },
      {
        title: 'Social Skills Training',
        description: 'To develop skills for interacting with peers and adults.'
      }
    ]
  },
  {
    id: 'adhd',
    name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
    description: 'Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder that affects attention, impulse control, and hyperactivity. Individuals with ADHD may struggle with sustaining attention, organizing tasks, following through with instructions, and managing time.',
    overview: 'ADHD is most commonly diagnosed in childhood, though symptoms may persist into adulthood. Treatment can help individuals manage symptoms and improve functioning. ADHD often leads to academic and occupational challenges and can impair social relationships if left untreated.',
    symptoms: [
      'Difficulty maintaining attention or focus.',
      'Hyperactivity, such as fidgeting or restlessness.',
      'Impulsiveness, including interrupting others or acting without thinking.',
      'Disorganization and difficulty completing tasks.',
      'Forgetfulness in daily activities.'
    ],
    treatmentOptions: [
      {
        title: 'Medications',
        description: 'Stimulants like methylphenidate or amphetamines are commonly prescribed to manage symptoms.'
      },
      {
        title: 'Behavioral Therapy',
        description: 'Helps individuals develop strategies to manage symptoms and improve focus.'
      },
      {
        title: 'Parent Training',
        description: 'Teaches parents how to support children with ADHD effectively.'
      },
      {
        title: 'School Support Services',
        description: 'Accommodations can help improve academic performance and behavior.'
      }
    ]
  }
];