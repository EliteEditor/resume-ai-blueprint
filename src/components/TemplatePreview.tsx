import React from 'react';
import Link from 'next/link';

interface TemplatePreviewProps {
  title: string;
  description: string;
  selected?: boolean;
  templateId: string;
  accentColor: string;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  title,
  description,
  selected = false,
  templateId,
  accentColor,
}) => {
  return (
    <Link href={`/editor/${templateId}`}>
      <div
        className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 hover:shadow-lg cursor-pointer ${
          selected ? `border-${accentColor}-500` : 'border-gray-200'
        }`}
      >
        {selected && (
          <div className={`absolute top-4 right-4 bg-${accentColor}-500 text-white px-3 py-1 rounded-full text-sm`}>
            Selected
          </div>
        )}
        <div className={`p-6 bg-${accentColor}-900/10 h-[280px]`}>
          {/* Preview content placeholder */}
          <div className="space-y-2">
            <div className={`h-4 w-1/3 bg-${accentColor}-200 rounded`}></div>
            <div className={`h-3 w-2/3 bg-${accentColor}-100 rounded`}></div>
            <div className="space-y-1 mt-4">
              <div className={`h-2 w-full bg-${accentColor}-100/50 rounded`}></div>
              <div className={`h-2 w-5/6 bg-${accentColor}-100/50 rounded`}></div>
              <div className={`h-2 w-4/6 bg-${accentColor}-100/50 rounded`}></div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default TemplatePreview; 