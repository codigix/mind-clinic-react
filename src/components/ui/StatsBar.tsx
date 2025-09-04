import type { StatItem } from '@/types';
import { cn } from '@/lib/utils';
import React from "react";


interface StatsBarProps {
  stats: StatItem[];
  className?: string;
}

export const StatsBar = ({ stats, className }: StatsBarProps) => {
  return (
    <section className={cn("py-0 bg-transparent", className)}>
      <div className="container max-w-7xl mx-auto -mt-12">
        <div
          className="relative z-10 rounded-2xl shadow-lg bg-white/80 backdrop-blur border border-primary/20 px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
          style={{
            boxShadow: '0 8px 32px 0 rgba(41, 41, 41, 0.08)',
          }}
        >
          {stats.map((stat, index) => (
  <React.Fragment key={index}>
    <div className="flex flex-col items-center flex-1 text-center">
      <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
        <stat.icon className="h-8 w-8 text-primary" />
      </span>
      <div className="text-2xl font-bold text-primary leading-tight">{stat.value}</div>
      <div className="text-muted-foreground text-base leading-tight mt-1">{stat.label}</div>
    </div>
    {index < stats.length - 1 && (
      <div className="hidden md:block h-16 w-px bg-primary/10 mx-4" />
    )}
  </React.Fragment>
))}
        </div>
      </div>
    </section>
  );
};
