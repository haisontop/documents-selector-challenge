import React from "react";
import { DisclosureCard, TitleCard } from "../cards";
import { SearchInput } from "../inputs/search-input";
import { EmptyDocumentList } from "./empty-document-list";
import { DocumentItem, DocumentItemModel } from "./document-item";
import { SelectedDocuments } from "./selected-documents";
import { AvailableDocuments } from "./available-documents";

export const MOCK_DOCUMENT_CATEGORIES = [
  {
    id: "1",
    title: "Drug Policies",
  },
  {
    id: "2",
    title: "Employee Handbooks",
  },
  {
    id: "3",
    title: "Equipment Selection",
  },
  {
    id: "4",
    title: "Safety Manuals",
  },
  {
    id: "5",
    title: "Sexual Harassment",
  },
];

export const MOCK_DOCUMENTS = [
  {
    id: "1",
    title: "Employee Handbook",
    categoryId: "2",
  },
  {
    id: "2",
    title: "Company Drug Policy",
    categoryId: "1",
  },
  {
    id: "3",
    title: "Tshirt Size Form",
    categoryId: "3",
  },
  {
    id: "4",
    title: "Safety Manual",
    categoryId: "4",
  },
  {
    id: "5",
    title: "Sexual Harassment Training Manual",
    categoryId: "5",
  },
];

export function DocumentSelector() {
  const [selectedDocuments, setSelectedDocuments] = React.useState<
    DocumentItemModel[]
  >([]);

  const groupedDocuments = MOCK_DOCUMENT_CATEGORIES.map((category) => ({
    ...category,
    documents: MOCK_DOCUMENTS.filter(
      (documentItem) => documentItem.categoryId === category.id
    ),
  }));

  const handleRemoveDocument = (documentId: string) => {
    const stagingDocuments = selectedDocuments.filter(
      (documentItem) => documentItem.id !== documentId
    );
    setSelectedDocuments(stagingDocuments);
  };

  const handleAddDocument = (documentId: string) => {
    const targetDocument = MOCK_DOCUMENTS.find(
      (documentItem) => documentItem.id === documentId
    );

    if (
      !selectedDocuments.some(
        (documentItem) => documentItem.id === documentId
      ) &&
      targetDocument
    ) {
      setSelectedDocuments(selectedDocuments.concat(targetDocument));
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <AvailableDocuments
        categories={groupedDocuments}
        onAddDocument={handleAddDocument}
      />
      <SelectedDocuments
        documents={selectedDocuments}
        onRemoveDocument={handleRemoveDocument}
      />
    </div>
  );
}
