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

export const neurodevelopmentalDisorders: DisorderDetail[] = [
  {
    id: 'autism-spectrum-disorder',
    name: 'Autism Spectrum Disorder (ASD)',
    description: 'Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by challenges with social communication, restricted interests, and repetitive behaviors. It affects individuals across a wide spectrum of abilities and severity levels, which is why it is described as a “spectrum” disorder.',
    overview: 'ASD presents with varying degrees of difficulty in social interaction, communication, and behavior. The spectrum nature means individuals may have unique strengths and challenges. Early identification and intervention are key to supporting optimal development.',
    symptoms: [
      'Difficulty with social interaction and communication',
      'Repetitive movements or speech (e.g., hand flapping, echolalia)',
      'Sensory sensitivities (e.g., over- or under-reactive to sounds or textures)',
      'Strong preferences for routines and resistance to change',
      'Focused interest in specific topics or objects'
    ],
    treatmentOptions: [
      {
        title: 'Behavioral Therapy',
        description: 'Applied Behavioral Analysis (ABA) and other behavioral therapies help develop social, communication, and learning skills.'
      },
      {
        title: 'Speech and Occupational Therapy',
        description: 'Addresses communication and motor challenges to improve daily functioning.'
      },
      {
        title: 'Medication',
        description: 'Used to manage associated symptoms such as anxiety or hyperactivity.'
      },
      {
        title: 'Specialized Education Plans',
        description: 'Individualized education plans tailored to the unique needs of each person.'
      }
    ],
    faqs: [
      {
        question: 'At what age can autism be diagnosed?',
        answer: 'Autism can often be identified as early as 18 months, with signs becoming clearer by age 2 or 3.'
      },
      {
        question: 'Is autism caused by vaccines?',
        answer: 'No, extensive research has shown no link between vaccines and autism.'
      }
    ]
  },
  {
    id: 'adhd',
    name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
    description: 'ADHD is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. It can affect individuals in childhood, adolescence, and even into adulthood, with symptoms presenting differently depending on the individual.',
    overview: 'ADHD impacts focus, self-control, and other important skills needed in daily life. Symptoms may change with age, and the disorder can persist into adulthood. Early intervention and support can improve outcomes.',
    symptoms: [
      'Difficulty focusing on tasks or following instructions',
      'Impulsivity, often leading to interrupting others or making hasty decisions',
      'Hyperactivity, including fidgeting or an inability to stay seated',
      'Challenges with time management and organization',
      'Forgetfulness or frequently losing items'
    ],
    treatmentOptions: [
      {
        title: 'Behavioral Therapy',
        description: 'Improves organizational skills and helps manage impulses.'
      },
      {
        title: 'Medication',
        description: 'Includes stimulants (e.g., Ritalin, Adderall) or non-stimulants to manage symptoms.'
      },
      {
        title: 'Parent and Teacher Support Programs',
        description: 'Provides consistency in management across home and school.'
      },
      {
        title: 'Cognitive Behavioral Therapy (CBT) for Adults',
        description: 'Addresses time management and self-esteem issues.'
      }
    ],
    faqs: [
      {
        question: 'Can ADHD be outgrown?',
        answer: 'While hyperactivity may decrease with age, inattention and impulsivity often persist into adulthood.'
      },
      {
        question: 'What is the difference between ADHD and ADD?',
        answer: 'ADD is an outdated term for a subtype of ADHD without hyperactivity.'
      }
    ]
  },
  {
    id: 'intellectual-disabilities',
    name: 'Intellectual Disabilities',
    description: 'Intellectual disabilities are characterized by limitations in intellectual functioning and adaptive behavior, affecting skills needed for daily living. These limitations appear before the age of 18 and impact reasoning, problem-solving, and learning abilities.',
    overview: 'Intellectual disabilities can vary in severity and are often identified in early childhood. Early intervention and tailored support can help individuals maximize their potential and independence.',
    symptoms: [
      'Delayed developmental milestones such as walking or talking',
      'Difficulty in understanding social rules and concepts',
      'Trouble with problem-solving or logical thinking',
      'Dependence on support for daily living tasks'
    ],
    treatmentOptions: [
      {
        title: 'Special Education Programs',
        description: 'Tailored to developmental needs to support learning and independence.'
      },
      {
        title: 'Speech, Occupational, and Physical Therapy',
        description: 'Improves adaptive skills and daily functioning.'
      },
      {
        title: 'Behavioral Interventions',
        description: 'Helps manage behavioral challenges and promote positive behaviors.'
      },
      {
        title: 'Family Support and Education',
        description: 'Assists families in navigating care and advocating for their loved ones.'
      }
    ],
    faqs: [
      {
        question: 'What causes intellectual disabilities?',
        answer: 'Intellectual disabilities can result from genetic conditions (e.g., Down syndrome), prenatal issues, or environmental factors such as lead poisoning.'
      },
      {
        question: 'Can intellectual disabilities be treated?',
        answer: 'While intellectual disabilities are lifelong, individuals can develop new skills and adapt with proper support and intervention.'
      }
    ]
  },
  {
    id: 'specific-learning-disorders',
    name: 'Specific Learning Disorders',
    description: 'Specific Learning Disorders (SLD) are conditions that affect a person’s ability to acquire and use academic skills, such as reading, writing, or mathematics. These disorders are not due to intelligence issues but are related to the brain’s ability to process information.',
    overview: 'SLDs are commonly identified in school-aged children and can impact academic performance. With appropriate interventions and accommodations, individuals with SLDs can achieve academic success.',
    symptoms: [
      'Difficulty reading (dyslexia), writing (dysgraphia), or performing math (dyscalculia)',
      'Trouble remembering new information or following instructions',
      'Slow and effortful reading or spelling',
      'Struggles with organizing written work',
      'Problems with number sense or calculating numbers'
    ],
    treatmentOptions: [
      {
        title: 'Specialized Educational Interventions',
        description: 'Includes Individualized Education Programs (IEPs) or 504 plans in school settings.'
      },
      {
        title: 'Tutoring and Support Services',
        description: 'Multisensory learning programs and other supports for specific learning needs.'
      },
      {
        title: 'Behavioral Therapy',
        description: 'Addresses associated emotional or behavioral issues like frustration or low self-esteem.'
      },
      {
        title: 'Assistive Technology',
        description: 'Tools such as audiobooks or speech-to-text software to support learning.'
      }
    ],
    faqs: [
      {
        question: 'Can a child with a learning disorder still do well in school?',
        answer: 'Yes, with the right support and accommodations, children with learning disorders can excel in school.'
      },
      {
        question: 'What are the most common types of learning disorders?',
        answer: 'The most common types include dyslexia (reading disorder), dyscalculia (math disorder), and dysgraphia (writing disorder).'
      }
    ]
  },
  {
    id: 'communication-disorders',
    name: 'Communication Disorders',
    description: 'Communication Disorders involve difficulty in the ability to use, understand, or produce speech and language. These challenges can impact an individual’s ability to effectively communicate and are often noticed during early childhood.',
    overview: 'Communication disorders can affect speech, language, and social communication. Early identification and intervention are important for improving communication skills and overall development.',
    symptoms: [
      'Delayed speech or language development',
      'Difficulty understanding spoken or written language',
      'Challenges with articulation or producing certain sounds',
      'Struggles with word retrieval or organizing thoughts in speech',
      'Stuttering or other fluency issues'
    ],
    treatmentOptions: [
      {
        title: 'Speech Therapy',
        description: 'Improves language comprehension, articulation, and fluency.'
      },
      {
        title: 'Early Intervention Programs',
        description: 'Addresses delays in speech and language for young children.'
      },
      {
        title: 'Behavioral Therapy',
        description: 'Helps children who struggle with social communication.'
      },
      {
        title: 'Supportive Tools',
        description: 'Augmentative and alternative communication (AAC) devices for severe difficulties.'
      }
    ],
    faqs: [
      {
        question: 'What causes communication disorders?',
        answer: 'Communication disorders can result from a variety of causes, including genetic factors, hearing loss, neurological conditions, or developmental delays.'
      },
      {
        question: 'Can communication disorders be treated?',
        answer: 'Yes, many communication disorders can be effectively treated with early intervention and ongoing speech therapy.'
      },
      {
        question: 'How do I know if my child has a communication disorder?',
        answer: 'Signs include difficulty speaking or understanding language, delayed speech milestones, or stuttering. A speech-language pathologist can provide a full assessment.'
      }
    ]
  },
  {
    id: 'tic-disorders',
    name: "Tic Disorders (e.g., Tourette's Syndrome)",
    description: "Tic Disorders are characterized by sudden, repetitive movements or sounds that are difficult to control. Tourette’s syndrome is a type of tic disorder that involves both motor and vocal tics. These tics can vary in frequency and intensity and often begin in childhood.",
    overview: "Tic disorders can impact daily life and self-esteem, especially if tics are frequent or severe. Early intervention and support can help individuals manage symptoms and improve quality of life.",
    symptoms: [
      'Motor Tics: Sudden movements, such as blinking, head jerking, or shoulder shrugging',
      'Vocal Tics: Involuntary sounds, such as grunting, throat clearing, or repetitive speech',
      'Tics may increase with stress or excitement and decrease during calm or focused activities',
      'Tics often change over time and may wax and wane in intensity'
    ],
    treatmentOptions: [
      {
        title: 'Behavioral Therapy',
        description: 'Comprehensive Behavioral Intervention for Tics (CBIT) helps individuals manage and reduce tic behaviors.'
      },
      {
        title: 'Medications',
        description: 'Used to control severe tics that interfere with daily functioning.'
      },
      {
        title: 'Supportive Therapy',
        description: 'Helps with emotional or social challenges resulting from tics.'
      },
      {
        title: 'Relaxation Techniques',
        description: 'Reduces the frequency and intensity of tics.'
      }
    ],
    faqs: [
      {
        question: 'What causes tic disorders?',
        answer: 'The exact cause of tic disorders is not fully understood, but they may be linked to genetic factors, brain abnormalities, and environmental triggers.'
      },
      {
        question: 'Can tics go away?',
        answer: 'In some cases, tics lessen or disappear as a person gets older, though they may persist into adulthood in others.'
      },
      {
        question: 'Is Tourette’s syndrome rare?',
        answer: 'Tourette’s syndrome is relatively rare, but many children experience transient or temporary tics during their development.'
      }
    ]
  }
];