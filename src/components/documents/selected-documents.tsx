import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { DocumentItem, DocumentItemModel } from "./document-item";
import { FaCheck } from "react-icons/fa6";
import { TitleCard } from "../cards";
import { SearchInput } from "../inputs";
import { EmptyDocumentList } from "./empty-document-list";

export interface SelectedDocumentsProps {
  documents: DocumentItemModel[];
  onRemoveDocument: (documentId: string) => void;
}

export function SelectedDocuments({
  documents,
  onRemoveDocument,
}: SelectedDocumentsProps) {
  return (
    <TitleCard title="Selected Documents">
      <SearchInput />
      <div className="mt-3 ">
        {documents.length > 0 ? (
          <div className="rounded-lg p-2 border border-green-500 flex flex-col gap-y-3">
            {documents.map((documentItem) => (
              <DocumentItem
                key={documentItem.id}
                id={documentItem.id}
                title={documentItem.title}
                startIcon={<FaCheck className="text-green-500 w-4 h-4" />}
                onRemove={onRemoveDocument}
              ></DocumentItem>
            ))}
          </div>
        ) : (
          <EmptyDocumentList />
        )}
      </div>
    </TitleCard>
  );
}
