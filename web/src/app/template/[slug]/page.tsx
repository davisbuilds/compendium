"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { templates } from "@/lib/content";
import { PdfViewer } from "@/components/PdfViewer";

export default function TemplatePage() {
  const params = useParams();
  const slug = params.slug as string;

  const template = templates.find(
    (t) => t.filename.replace(".pdf", "") === slug
  );

  if (!template) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 p-6">
        <h1 className="text-2xl font-bold">Template not found</h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
            <FileText className="h-8 w-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{template.title}</h1>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              {template.description}
            </p>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="rounded-lg border bg-white p-6 dark:bg-neutral-900">
        <PdfViewer
          src={`/content/templates/${template.filename}`}
          title={template.title}
        />
      </div>
    </div>
  );
}
