import React from 'react';
import { TieMotif } from '@/components/ui/TieMotif';

export interface RoleItem {
  title: string;
  function: string;
}

export interface RoleMapColumn {
  header: string;       // e.g. "Leadership", "Management", "Specialist"
  roles: RoleItem[];    // 3–4 roles per column
}

interface IndustryRoleMapProps {
  headline?: string;
  description?: string;
  badge?: string;
  columns: RoleMapColumn[];
}

export function IndustryRoleMap({
  headline = "Roles We Place",
  description = "A cross-section of the positions Corponizers sources across seniority levels in this sector.",
  badge = "ROLE TAXONOMY",
  columns,
}: IndustryRoleMapProps) {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <TieMotif size="sm" />
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{headline}</h2>
          <p className="text-sm text-slate-500 font-normal max-w-2xl leading-relaxed">{description}</p>
        </div>

        {/* Role grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(columns.length, 3)} gap-0 border border-slate-200 rounded-2xl overflow-hidden`}>
          {columns.map((col, colIdx) => (
            <div
              key={col.header}
              className={`flex flex-col ${colIdx > 0 ? 'sm:border-l border-t sm:border-t-0 border-slate-200' : ''}`}
            >
              {/* Column header */}
              <div className="bg-slate-900 px-5 py-3 flex items-center gap-2">
                <span className="text-xs font-black text-white uppercase tracking-widest">{col.header}</span>
              </div>

              {/* Role cards */}
              {col.roles.map((role, roleIdx) => (
                <div
                  key={role.title}
                  className={`px-5 py-4 bg-white hover:bg-sky-50/50 transition-colors ${roleIdx > 0 ? 'border-t border-slate-100' : ''}`}
                >
                  <p className="text-sm font-bold text-slate-900 leading-snug">{role.title}</p>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">{role.function}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-xs text-slate-400 font-normal">
          Role taxonomy is indicative. Corponizers sources across all seniority levels within each function — from specialist individual contributors to C-Suite.
        </p>
      </div>
    </section>
  );
}
