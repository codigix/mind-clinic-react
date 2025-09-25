import { Header } from '@/components/Header';
import SEO from '@/components/SEO';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { DisorderDetailView } from '@/components/DisorderDetailView';
import {
  moodDisorders,
  anxietyDisorders,
  ocdDisorders,
  traumaDisorders,
  psychoticDisorders,
  neurodevelopmentalDisorders,
  personalityDisorders,
  dissociativeDisorders,
  sleepDisorders,
  substanceDisorders,
  sexualDisorders,
  neurocognitiveDisorders,
  eatingDisorders,
  DisorderDetail
} from '@/data/disorders';

const KnowYourDisorders = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['mood']);
  const [selectedDisorder, setSelectedDisorder] = useState<DisorderDetail | null>(
    moodDisorders.find(d => d.id === 'major-depressive-disorder') || null
  );

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const psychiatricDisorders = [
    {
      id: 'mood',
      title: 'Mood Disorders',
      disorders: moodDisorders
    },
    {
      id: 'anxiety',
      title: 'Anxiety Disorders',
      disorders: anxietyDisorders
    },
    {
      id: 'ocd',
      title: 'Obsessive-Compulsive and Related Disorders',
      disorders: ocdDisorders
    },
    {
      id: 'trauma',
      title: 'Trauma and Stressor-Related Disorders',
      disorders: traumaDisorders
    },
    {
      id: 'psychotic',
      title: 'Psychotic Disorders',
      disorders: psychoticDisorders
    },
    {
      id: 'neurodevelopmental',
      title: 'Neurodevelopmental Disorders',
      disorders: neurodevelopmentalDisorders
    },
    {
      id: 'personality',
      title: 'Personality Disorders',
      disorders: personalityDisorders
    },
    {
      id: 'dissociative',
      title: 'Dissociative Disorders',
      disorders: dissociativeDisorders
    },
    {
      id: 'sleep',
      title: 'Sleep-Wake Disorders',
      disorders: sleepDisorders
    },
    {
      id: 'substance',
      title: 'Substance-Related and Addictive Disorders',
      disorders: substanceDisorders
    },
    {
      id: 'sexual',
      title: 'Sexual Dysfunctions',
      disorders: sexualDisorders
    },
    {
      id: 'neurocognitive',
      title: 'Neurocognitive Disorders',
      disorders: neurocognitiveDisorders
    },
    {
      id: 'eating',
      title: 'Eating Disorders',
      disorders: eatingDisorders
    }
  ];

  return (
    <>
      <SEO
        title="Know Your Disorders | Mental Health Conditions Information"
        description="Learn about various mental health conditions, their symptoms, and treatment options. Get informed about mood disorders, anxiety, OCD, PTSD, and more."
        keywords={['mental health conditions', 'psychiatric disorders', 'mental illness information', 'anxiety disorders', 'mood disorders', 'OCD', 'PTSD', 'bipolar disorder', 'depression symptoms']}
      />
      <div className="min-h-screen">
        <Header />
        <main className="py-0">
          <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
            {/* Left Section - 25% */}
            <div className="w-full lg:w-[25%] h-full">
              <div className="bg-white h-full border-r flex flex-col">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold">Psychiatric Disorders</h2>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4">
                    <div className="space-y-1">
                      {psychiatricDisorders.map((category) => (
                        <div key={category.id} className="border-b">
                          <button
                            onClick={() => toggleSection(category.id)}
                            className="w-full flex items-center justify-between p-3 hover:bg-muted/50 transition-colors"
                          >
                            <span className="font-medium text-left">{category.title}</span>
                            {expandedSections.includes(category.id) ? (
                              <ChevronDown className="h-4 w-4 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="h-4 w-4 flex-shrink-0" />
                            )}
                          </button>
                          {expandedSections.includes(category.id) && (
                            <div className="px-3 pb-3">
                              <div className="space-y-1">
                                {category.disorders.map((disorder) => (
                                  <div
                                    key={disorder.id}
                                    className={`p-2 text-sm rounded cursor-pointer transition-colors ${
                                      selectedDisorder?.id === disorder.id
                                        ? 'bg-primary/10 text-primary font-medium'
                                        : 'text-foreground hover:bg-muted/50'
                                    }`}
                                    onClick={() => setSelectedDisorder(disorder)}
                                  >
                                    {disorder.name}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - 75% */}
            <div className="w-full lg:w-[75%] h-full">
              <div className="bg-white h-full flex flex-col">
                <div className="p-4 border-b">
                  <h2 className="text-2xl font-semibold">Disorder Details</h2>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4">
                    <>
                      {selectedDisorder && <DisorderDetailView disorder={selectedDisorder} />}
                      <div className="text-center mt-8">
                        <button
                          onClick={() => {
                            window.open('https://health.copious.care/drhamzahussain', '_blank');
                          }}
                        >
                        </button>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default KnowYourDisorders;
