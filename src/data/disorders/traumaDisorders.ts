import { DisorderDetail } from './index';

export const traumaDisorders: DisorderDetail[] = [
  {
    id: 'ptsd',
    name: 'Post-Traumatic Stress Disorder (PTSD)',
    overview:
      'Post-Traumatic Stress Disorder (PTSD) occurs after an individual experiences or witnesses a traumatic event, such as combat, natural disasters, or physical assault.',
    description:
      'PTSD is characterized by flashbacks, nightmares, and intrusive memories of the event, as well as avoidance of reminders and heightened emotional responses. Individuals with PTSD may also experience mood changes, difficulty sleeping, and hypervigilance.',
    statistics:
      'PTSD affects approximately 3.5% of adults in the United States annually. It is more common among military veterans, first responders, and survivors of abuse. Early intervention can significantly improve outcomes for individuals with PTSD.',
    symptoms: [
      'Flashbacks or intrusive memories of the traumatic event',
      'Avoidance of places, activities, or people that trigger memories of the trauma',
      'Hypervigilance and heightened emotional responses',
      'Nightmares and difficulty sleeping'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive-Behavioral Therapy (CBT) with Trauma-Focused approaches',
        description: 'Evidence-based therapy that helps individuals process traumatic experiences and develop coping strategies.'
      },
      {
        title: 'Eye Movement Desensitization and Reprocessing (EMDR)',
        description: 'Specialized therapy that uses bilateral stimulation to help process traumatic memories.'
      },
      {
        title: 'Medications',
        description: 'SSRIs and SNRIs are commonly prescribed to help manage PTSD symptoms.'
      },
      {
        title: 'Supportive therapies',
        description: 'Group counseling and mindfulness practices to provide additional support.'
      }
    ],
    faqs: [
      {
        question: 'What causes PTSD?',
        answer: 'PTSD is caused by exposure to traumatic events such as combat, accidents, assaults, or natural disasters'
      },
      {
        question: 'How long does PTSD last?',
        answer: 'The duration of PTSD varies; it can last for months, years, or even a lifetime without proper treatment.'
      }
    ]
  },
  {
    id: 'asd',
    name: 'Acute Stress Disorder (ASD)',
    overview:
      'Acute Stress Disorder (ASD) is similar to PTSD but occurs within the first month following exposure to a traumatic event.',
    description:
      'Individuals with ASD may experience intense feelings of fear, helplessness, or horror and may re-experience the trauma through flashbacks or nightmares. They often avoid reminders of the event and feel detached or emotionally numb. If untreated, ASD may develop into PTSD.',
    statistics:
      'ASD affects approximately 5-20% of individuals exposed to traumatic events, with higher rates seen in cases of interpersonal violence and severe accidents.',
    symptoms: [
      'Intrusive memories or flashbacks',
      'Dissociative symptoms (e.g., feeling detached or unreal)',
      'Intense anxiety and hyperarousal',
      'Difficulty concentrating or remembering the event'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive-Behavioral Therapy (CBT) with a focus on stress management',
        description: 'Focus on stress management and processing the traumatic experience.'
      },
      {
        title: 'Short-term medications',
        description: 'Anxiety-reducing medications may be prescribed for acute symptom relief.'
      },
      {
        title: 'Supportive therapy and counseling',
        description: 'Individual counseling to provide emotional support and guidance.'
      },
      {
        title: 'Mindfulness and grounding techniques',
        description: 'Practical tools to manage anxiety and stay present.'
      }
    ],
    faqs: [
      {
        question: 'How is ASD different from PTSD?',
        answer: 'ASD is diagnosed in the first month after trauma, whereas PTSD is diagnosed after symptoms persist for longer than one month.'
      },
      {
        question: 'Can ASD be prevented from turning into PTSD?',
        answer: 'Early intervention and treatment can reduce the risk of ASD developing into PTSD.'
      }
    ]
  },
  {
    id: 'adjustment-disorder',
    name: 'Adjustment Disorder',
    overview:
      'Adjustment Disorder is a stress-related condition where an individual has difficulty coping with a significant life change or stressor, such as divorce, job loss, or a major move.',
    description:
      'Symptoms typically arise within three months of the event and can affect emotional or behavioral functioning. Individuals may experience significant distress that exceeds what would normally be expected given the circumstances.',
    statistics:
      'Adjustment Disorder affects approximately 5-20% of individuals in outpatient mental health settings and is one of the most common mental health diagnoses.',
    symptoms: [
      'Feelings of sadness, hopelessness, or being overwhelmed',
      'Anxiety or excessive worry about the future',
      'Difficulty concentrating or completing tasks',
      'Physical symptoms such as headaches or stomach issues'
    ],
    treatmentOptions: [
      {
        title: 'Cognitive-Behavioral Therapy (CBT)',
        description: 'Improve coping skills and develop effective strategies for managing stress.'
      },
      {
        title: 'Stress management techniques',
        description: 'Learn relaxation strategies and practical tools for stress reduction.'
      },
      {
        title: 'Short-term medications',
        description: 'Anxiolytics may be prescribed for severe anxiety symptoms.'
      },
      {
        title: 'Support groups or individual counseling',
        description: 'Connect with others experiencing similar challenges for mutual support.'
      }
    ],
    faqs: [
      {
        question: 'How long does adjustment disorder last?',
        answer: 'Adjustment Disorder typically resolves within six months once the stressor is removed or the individual adapts.'
      },
      {
        question: 'Can adjustment disorder lead to other mental health conditions?',
        answer: 'Without treatment, it may increase the risk of developing anxiety or depression.'
      }
    ]
  },
  {
    id: 'rad',
    name: 'Reactive Attachment Disorder (RAD)',
    overview:
      'Reactive Attachment Disorder (RAD) is a condition seen in children who have experienced severe neglect or abuse, leading to difficulties forming healthy emotional attachments to caregivers. It is typically diagnosed in early childhood.',
    description:
      'It is typically diagnosed in early childhood and characterized by markedly disturbed and developmentally inappropriate social relatedness in most contexts. Children with RAD struggle to form meaningful connections with others.',
    statistics:
      'RAD is relatively rare, affecting less than 10% of children who have experienced severe neglect or abuse. It is more common in institutionalized children or those who have experienced multiple caregiver changes.',
    symptoms: [
      'Inability to form healthy, stable relationships with caregivers or others',
      'Avoidance of comfort or emotional closeness',
      'Inappropriate emotional responses, such as anger or sadness',
      'Limited social interaction or withdrawal from others'
    ],
    treatmentOptions: [
      {
        title: 'Attachment-focused therapy',
        description: 'Specialized therapy for children and caregivers to build secure attachments.'
      },
      {
        title: 'Parenting guidance',
        description: 'Support and training for caregivers in fostering secure attachments.'
      },
      {
        title: 'Play therapy',
        description: 'Therapeutic play to help children express emotions and build relationships.'
      },
      {
        title: 'Family therapy',
        description: 'Improve relational dynamics and communication within the family.'
      }
    ],
    faqs: [
      {
        question: 'What causes RAD?',
        answer: 'RAD is caused by severe early childhood neglect, abuse, or inconsistent caregiving.'
      },
      {
        question: 'Can children recover from RAD?',
        answer: 'With proper treatment, children can develop healthier attachments and emotional responses.'
      }
    ]
  },
  {
    id: 'dsed',
    name: 'Disinhibited Social Engagement Disorder (DSED)',
    overview:
      'Disinhibited Social Engagement Disorder (DSED) is a condition in children where they exhibit overly familiar behavior with strangers, often a result of early neglect or inconsistent caregiving. Unlike RAD, children with DSED may form superficial attachments but lack appropriate boundaries.',
    description:
      'Children with DSED may form superficial attachments but lack appropriate boundaries. They may be overly familiar with strangers and have difficulty forming deep, meaningful relationships.',
    statistics: undefined,
    symptoms: [
      'Overly familiar or inappropriate behavior with unfamiliar adults',
      'Willingness to go with strangers without hesitation',
      'Limited emotional restraint in social situations',
      'Difficulty forming deep, meaningful relationships'
    ],
    treatmentOptions: [
      {
        title: 'Attachment-based therapy',
        description: 'Therapy to establish appropriate social boundaries and healthy attachments.'
      },
      {
        title: 'Cognitive-Behavioral Therapy (CBT) for emotional regulation',
        description: 'CBT to help children manage emotions and behaviors.'
      },
      {
        title: 'Family counseling',
        description: 'Support for consistent and nurturing caregiving.'
      },
      {
        title: 'Social skills training',
        description: 'Teaching healthy relationship-building and boundaries.'
      }
    ],
    faqs: [
      {
        question: 'What causes DSED?',
        answer: 'DSED often results from early childhood neglect or disruptions in caregiving.'
      },
      {
        question: 'How is DSED treated?',
        answer: 'Therapy focusing on attachment, emotional regulation, and social boundaries can help children with DSED.'
      }
    ]
  }
];