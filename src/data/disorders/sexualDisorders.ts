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

export const sexualDisorders: DisorderDetail[] = [
  {
    id: 'erectile-dysfunction',
    name: 'Erectile Dysfunction (ED)',
    description: 'Erectile Dysfunction (ED) is the inability to achieve or maintain an erection sufficient for sexual activity. Though often associated with physical health, ED can also be triggered by psychological factors like stress, anxiety, or depression. This condition is common and can occur due to aging, medical conditions, or mental health issues.',
    overview: 'ED can be caused by a combination of physical and psychological factors. It is not an inevitable part of aging and is treatable. Addressing underlying causes and seeking professional help can restore sexual function and confidence.',
    symptoms: [
      'Difficulty in getting an erection',
      'Trouble maintaining an erection during sexual activity',
      'Reduced sexual desire or libido'
    ],
    treatmentOptions: [
      {
        title: 'Medications',
        description: 'Phosphodiesterase inhibitors such as sildenafil (Viagra) or tadalafil (Cialis).'
      },
      {
        title: 'Therapy (CBT)',
        description: 'For psychologically driven ED, cognitive-behavioral therapy can help address anxiety, stress, or relationship problems.'
      },
      {
        title: 'Lifestyle Changes',
        description: 'Reducing alcohol intake, quitting smoking, and regular exercise can improve ED.'
      },
      {
        title: 'Surgical Treatments',
        description: 'In severe cases, penile implants or vascular surgery may be recommended.'
      }
    ],
    faqs: [
      {
        question: 'Is ED a normal part of aging?',
        answer: 'While more common with age, it isn’t a normal part of aging, and treatment can help.'
      },
      {
        question: 'Can stress cause erectile dysfunction?',
        answer: 'Yes, high levels of stress, anxiety, and depression can contribute to ED by disrupting mental focus and emotional wellbeing.'
      }
    ]
  },
  {
    id: 'female-orgasmic-disorder',
    name: 'Female Orgasmic Disorder',
    description: 'Female Orgasmic Disorder refers to the consistent difficulty or inability to reach orgasm despite adequate stimulation. This condition affects women physically and emotionally, often leading to frustration or decreased sexual satisfaction. Causes can be physical, psychological, or relational.',
    overview: 'This disorder can impact self-esteem and relationships. Addressing both physical and emotional factors is important for effective treatment and improved sexual satisfaction.',
    symptoms: [
      'Delayed, infrequent, or absent orgasms',
      'Difficulty in experiencing orgasm during sexual activities',
      'Reduced sexual satisfaction or emotional distress due to the lack of orgasm'
    ],
    treatmentOptions: [
      {
        title: 'Sexual Therapy',
        description: 'Involves counseling to explore any emotional or psychological factors preventing orgasm.'
      },
      {
        title: 'Behavioral Techniques',
        description: 'Sensate focus or other methods to enhance intimacy and reduce pressure during sexual encounters.'
      },
      {
        title: 'Medication',
        description: 'In some cases, hormonal therapy may be recommended for postmenopausal women.'
      },
      {
        title: 'Couples Therapy',
        description: 'Helps address relationship dynamics that may contribute to the disorder.'
      }
    ],
    faqs: [
      {
        question: 'Can stress affect a woman’s ability to orgasm?',
        answer: 'Yes, stress, anxiety, and depression can reduce sexual arousal, making it harder to reach orgasm.'
      },
      {
        question: 'Is female orgasmic disorder treatable?',
        answer: 'Yes, with proper therapy and treatment, many women experience improved sexual satisfaction and orgasmic response.'
      }
    ]
  },
  {
    id: 'premature-ejaculation',
    name: 'Premature Ejaculation',
    description: 'Premature Ejaculation (PE) is one of the most common sexual dysfunctions in men, characterized by ejaculation that occurs sooner than desired during sexual activity. PE can be due to psychological issues such as performance anxiety or stress, as well as physical causes.',
    overview: 'PE can cause distress and impact relationships. Both behavioral and medical treatments are available, and many men benefit from a combination of approaches.',
    symptoms: [
      'Ejaculation that occurs within a minute or sooner of penetration',
      'Inability to delay ejaculation during sexual activity',
      'Feelings of frustration, embarrassment, or avoidance of intimacy due to the condition'
    ],
    treatmentOptions: [
      {
        title: 'Behavioral Therapy',
        description: 'Exercises like the “stop-start” or “squeeze” technique to help control ejaculation timing.'
      },
      {
        title: 'Therapy (CBT)',
        description: 'For men dealing with performance anxiety or stress, CBT helps reduce anxiety and regain control.'
      },
      {
        title: 'Medication',
        description: 'Some antidepressants (SSRIs) and topical anesthetics can help delay ejaculation.'
      },
      {
        title: 'Sexual Counseling',
        description: 'Working with a therapist can improve communication and reduce emotional barriers that may contribute to the problem.'
      }
    ],
    faqs: [
      {
        question: 'Can premature ejaculation be treated without medication?',
        answer: 'Yes, behavioral techniques and therapy can be effective in treating PE without medication.'
      },
      {
        question: 'Is premature ejaculation caused by mental health issues?',
        answer: 'Psychological factors like anxiety and depression can play a significant role in premature ejaculation.'
      }
    ]
  },
  {
    id: 'genito-pelvic-pain-disorder',
    name: 'Genito-Pelvic Pain/Penetration Disorder (GPPPD)',
    description: 'Genito-Pelvic Pain/Penetration Disorder (GPPPD) involves difficulties with vaginal penetration, including pain or fear of pain during intercourse, which can be caused by both physical and psychological factors. This disorder may present as vaginismus, where there’s an involuntary contraction of the vaginal muscles, or dyspareunia, which is characterized by persistent pain during intercourse.',
    overview: 'GPPPD can significantly impact sexual relationships and emotional wellbeing. A multidisciplinary approach, including medical and psychological care, is often most effective.',
    symptoms: [
      'Pain during intercourse, inserting tampons, or during gynecological exams',
      'Involuntary muscle spasms that make penetration difficult or impossible',
      'Fear or anxiety about experiencing pain during sexual activities',
      'Emotional distress or avoidance of sexual intimacy due to fear of pain'
    ],
    treatmentOptions: [
      {
        title: 'Pelvic Floor Therapy',
        description: 'Physical therapy to help relax the muscles around the pelvic area.'
      },
      {
        title: 'Desensitization Therapy',
        description: 'Gradual exposure to penetration with relaxation techniques.'
      },
      {
        title: 'Counseling (CBT)',
        description: 'To address anxiety or past traumas related to intercourse.'
      },
      {
        title: 'Medication',
        description: 'In some cases, pain management or hormonal treatments may be necessary.'
      }
    ],
    faqs: [
      {
        question: 'What causes genito-pelvic pain?',
        answer: 'GPPPD can be caused by physical conditions, like infections, or psychological factors such as anxiety or past trauma.'
      },
      {
        question: 'Can therapy help with vaginismus?',
        answer: 'Yes, therapy can help in addressing both the physical and emotional causes of vaginismus, improving comfort and intimacy.'
      }
    ]
  }
];