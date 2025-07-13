// app/projects/page.js
'use client';
import React, { Suspense } from 'react';
import ProjectsInner from './ProjectsInner';

export default function ProjectsPage() {
    return (
        <Suspense fallback={<div>Caricamento progetti…</div>}>
            <ProjectsInner />
        </Suspense>
    );
}
