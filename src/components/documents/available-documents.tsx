import React from "react";
import { DisclosureCard, TitleCard } from "../cards";
import { SearchInput } from "../inputs";
import { DocumentItem, DocumentItemModel } from "./document-item";

export interface DocumentCategoryModel {
  id: string;
  title: string;
  documents: DocumentItemModel[];
}

interface AvailableDocumentsProps {
  categories: DocumentCategoryModel[];
  onAddDocument: (documentId: string) => void;
}

export function AvailableDocuments({
  categories,
  onAddDocument,
}: AvailableDocumentsProps) {
  return (
    <TitleCard title="Available Documents">
      <SearchInput />
      <div className="mt-3 border border-orange-500 rounded-lg overflow-hidden">
        {categories.map((category) => (
          <DisclosureCard label={category.title} key={category.id}>
            <div className="flex flex-col gap-y-[10px]">
              {category.documents.map((documentItem) => (
                <DocumentItem
                  key={documentItem.id}
                  id={documentItem.id}
                  title={documentItem.title}
                  onAdd={onAddDocument}
                ></DocumentItem>
              ))}
            </div>
          </DisclosureCard>
        ))}
      </div>
    </TitleCard>
  );
}
