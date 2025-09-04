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

export const eatingDisorders: DisorderDetail[] = [
  {
    id: 'anorexia-nervosa',
    name: 'Anorexia Nervosa',
    description: 'Anorexia Nervosa is an eating disorder characterized by self-imposed starvation, intense fear of gaining weight, and a distorted body image. Individuals severely restrict their food intake, often leading to dangerously low body weight.',
    overview: 'Anorexia most commonly affects adolescent girls and young women, but can occur in all genders and ages. It has the highest mortality rate of any psychiatric disorder, due to both medical complications and suicide risk.',
    symptoms: [
      'Extreme restriction of food intake',
      'Intense fear of gaining weight',
      'Distorted body image or denial of low weight',
      'Preoccupation with food, dieting, and body size',
      'Excessive exercise',
      'Physical symptoms: hair loss, amenorrhea, low blood pressure, weakness'
    ],
    treatmentOptions: [
      {
        title: 'Nutritional Rehabilitation',
        description: 'Supervised weight restoration and healthy eating plans.'
      },
      {
        title: 'Psychotherapy',
        description: 'Cognitive Behavioral Therapy (CBT) and Family-Based Therapy (FBT) are commonly used.'
      },
      {
        title: 'Medical Monitoring',
        description: 'Regular health checks to manage complications.'
      }
    ],
    statistics: 'Anorexia affects about 0.5-1% of women and 0.1% of men in their lifetime.'
  },
  {
    id: 'bulimia-nervosa',
    name: 'Bulimia Nervosa',
    description: 'Bulimia Nervosa is an eating disorder marked by recurrent episodes of binge eating followed by compensatory behaviors such as vomiting, fasting, or excessive exercise to prevent weight gain.',
    overview: 'Bulimia often develops in adolescence or early adulthood. Individuals may appear to have a normal weight, making the disorder harder to detect. It can lead to severe medical complications, especially affecting the digestive system and heart.',
    symptoms: [
      'Frequent episodes of eating unusually large amounts of food in a short period',
      'Feeling a lack of control during binges',
      'Compensatory behaviors: self-induced vomiting, misuse of laxatives, fasting, or excessive exercise',
      'Preoccupation with body shape and weight',
      'Swelling of cheeks/jaw, dental erosion, calluses on knuckles'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'CBT is the most effective treatment. Interpersonal therapy may also help.'
      },
      {
        title: 'Nutritional Counseling',
        description: 'Education on healthy eating patterns and meal planning.'
      },
      {
        title: 'Medications',
        description: 'SSRIs (such as fluoxetine) may reduce binge-purge cycles.'
      }
    ],
    statistics: 'Bulimia affects about 1-2% of women and 0.1-0.5% of men in their lifetime.'
  },
  {
    id: 'binge-eating-disorder',
    name: 'Binge-Eating Disorder',
    description: 'Binge-Eating Disorder is characterized by recurrent episodes of eating large quantities of food, often rapidly and to the point of discomfort, without regular compensatory behaviors.',
    overview: 'It is the most common eating disorder in the U.S. and affects both men and women. Binge-eating often leads to obesity and related health problems, as well as significant emotional distress.',
    symptoms: [
      'Eating unusually large amounts of food in a discrete period',
      'Eating rapidly, even when not hungry',
      'Eating alone due to embarrassment',
      'Feelings of guilt, shame, or distress after overeating',
      'No regular use of compensatory behaviors (e.g., vomiting)'
    ],
    treatmentOptions: [
      {
        title: 'Psychotherapy',
        description: 'CBT is the first-line treatment. Interpersonal therapy and dialectical behavior therapy may also help.'
      },
      {
        title: 'Medications',
        description: 'Certain antidepressants and the medication lisdexamfetamine may be prescribed.'
      },
      {
        title: 'Nutritional Counseling',
        description: 'Helps establish regular eating patterns and address emotional triggers.'
      }
    ],
    statistics: 'Binge-Eating Disorder affects about 3% of adults in their lifetime.'
  },
  {
    id: 'arfid',
    name: 'Avoidant/Restrictive Food Intake Disorder (ARFID)',
    description: 'ARFID is an eating disorder characterized by avoidance or restriction of food intake, leading to significant weight loss, nutritional deficiency, or interference with daily functioning, but without concerns about body shape or weight.',
    overview: 'ARFID often begins in childhood and can persist into adulthood. It may be related to sensory sensitivities, fear of choking or vomiting, or lack of interest in eating. Unlike anorexia, ARFID is not driven by body image concerns.',
    symptoms: [
      'Avoidance or restriction of food intake',
      'Significant weight loss or failure to gain weight',
      'Nutritional deficiencies (e.g., anemia, low vitamins)',
      'Dependence on supplements or tube feeding',
      'Interference with social functioning (e.g., avoiding meals with others)'
    ],
    treatmentOptions: [
      {
        title: 'Nutritional Rehabilitation',
        description: 'Restoring healthy weight and correcting nutritional deficiencies.'
      },
      {
        title: 'Exposure Therapy',
        description: 'Gradual exposure to feared foods or eating situations.'
      },
      {
        title: 'Family-Based Therapy',
        description: 'Involves family in supporting healthy eating behaviors.'
      }
    ],
    statistics: 'ARFID is more common in children but can affect all ages; prevalence is not well established.'
  }
];