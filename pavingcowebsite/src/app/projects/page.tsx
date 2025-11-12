// src/app/projects/[id]/page.tsx
import React from "react";

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <main className="p-4">
      <h1>Project ID: {params.id}</h1>
    </main>
  );
}
