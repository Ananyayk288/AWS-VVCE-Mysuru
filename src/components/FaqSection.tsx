import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What can I expect from the event?',
      answer: 'Expect keynote sessions, technical talks, hands-on workshops, networking opportunities, sponsor booths, community interactions, giveaways, and real-world insights from AWS experts and community leaders.',
    },
    {
      question: 'Who can attend AWS Community Day?',
      answer: 'Students, Teachers/faculty, developers, software engineers, cloud professionals, startup founders, IT enthusiasts, educators, and anyone interested in cloud technology are welcome to attend.',
    },
    {
      question: 'Do I need prior AWS or cloud experience?',
      answer: 'No! No prior experience is required. While AWS is a part of the event, we focus on exploring various tech domains and emerging technologies beyond AWS as well.',
    },
    {
      question: 'Will food and refreshments be provided?',
      answer: 'Yes. Complimentary refreshments and lunch will be provided. Check the agenda for scheduled meal breaks.',
    },
    {
      question: 'Will Transportation be provided?',
      answer: 'Yes — details regarding local transportation and directions to Vidyavardhaka College of Engineering, Mysuru will be shared with registered attendees.',
    },
    {
      question: 'Do I need to bring a laptop?',
      answer: 'Recommended for workshops. Talks and keynotes can be enjoyed empty-handed with a coffee in the other.',
    },
    {
      question: 'Is there Wi-Fi?',
      answer: 'Yes — venue Wi-Fi credentials are printed on your badge. Sponsors also provide backup networks.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <ScrollReveal variant="fade-left">
            <header className="max-w-3xl">
              <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
                <span className="text-white/40">#</span>08 · FAQ
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Frequently asked <span className="text-gradient-cool">questions.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
                Everything you need to know about tickets, logistics, and what to expect on event day.
              </p>
            </header>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <ScrollReveal key={index} variant="fade-up" delay={index * 80}>
                  <div
                    className="glass overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors hover:border-white/20"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full cursor-pointer items-center justify-between p-5 sm:p-6 text-left transition-colors"
                    >
                      <span className="text-base font-semibold text-white sm:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#A78BFA] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 text-sm leading-relaxed text-white/70 border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
