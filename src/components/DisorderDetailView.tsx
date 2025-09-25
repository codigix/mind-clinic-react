import { DisorderDetail } from '@/data/disorders';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DisorderDetailViewProps {
  disorder: DisorderDetail;
}

export const DisorderDetailView = ({ disorder }: DisorderDetailViewProps) => {
  const [openFAQs, setOpenFAQs] = useState<Set<string>>(new Set());

  const toggleFAQ = (faqKey: string) => {
    setOpenFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(faqKey)) {
        newSet.delete(faqKey);
      } else {
        newSet.add(faqKey);
      }
      return newSet;
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-foreground mb-6">{disorder.name}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-4">{disorder.description}</p>
          
          <p className="text-muted-foreground mb-6">{disorder.overview}</p>
          
          <h2 className="text-2xl font-semibold text-foreground mb-4">Common Symptoms:</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            {disorder.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-semibold text-foreground mb-4">Treatment Options:</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            {disorder.treatmentOptions.map((option, index) => (
              <li key={index}>
                <strong>{option.title}:</strong> {option.description}
              </li>
            ))}
          </ul>
          
          {disorder.statistics && (
            <>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Statistics:</h2>
              <p className="text-muted-foreground mb-6">{disorder.statistics}</p>
            </>
          )}

          {disorder.faqs && disorder.faqs.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Frequently Asked Questions:</h2>
              <div className="space-y-4">
                {disorder.faqs.map((faq, index) => (
                  <div key={index} className="border border-border rounded-lg">
                    <button
                      onClick={() => toggleFAQ(`${disorder.id}-${index}`)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium text-foreground">{faq.question}</span>
                      {openFAQs.has(`${disorder.id}-${index}`) ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                    {openFAQs.has(`${disorder.id}-${index}`) && (
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
          
          <div className="mt-8 pt-6 border-t border-border">
            <div className="bg-primary/5 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Take the Next Step?</h3>
              <p className="text-muted-foreground mb-4">
                If you or a loved one is experiencing symptoms of {disorder.name},
                professional help is available. Book a consultation with our expert team today.
              </p>
              <button
                onClick={() => {
                  window.open('https://web.docterz.in/#/clinics/4849/book_online_appointment ', '_blank');
                }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Book Appointment for {disorder.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};