import CollectionPreferences from '@awsui/components-react/collection-preferences';
import Pagination from '@awsui/components-react/pagination';
import Table, { TableProps } from '@awsui/components-react/table';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
import useResourcesTable from './resources-table.hook';

interface Props<T> {
  columnDefinitions: readonly TableProps.ColumnDefinition<T>[];
  loadingStep: number;
  loadingSteps: number;
  resources: readonly T[];
  trackBy: keyof T extends string ? keyof T : never;
}

export default function ResourcesTable<T>({
  columnDefinitions,
  loadingStep,
  loadingSteps,
  resources,
  trackBy,
}: Props<T>): ReactElement {
  const {
    ariaLabels,
    cancelLabel,
    collectionPreferencesTitle,
    confirmLabel,
    currentPageIndex,
    handleConfirm,
    handlePaginationChange,
    handleSelectionChange,
    handleSortingChange,
    loading,
    loadingText,
    openEnd,
    pageSizePreference,
    pagesCount,
    preferences,
    selectedItems,
    sortingColumn,
    sortingDescending,
    visibleContent,
    visibleContentPreference,
    wrapLines,
    wrapLinesPreference,
  } = useResourcesTable<T>({
    loadingStep,
    loadingSteps,
  });

  return (
    <Table
      ariaLabels={ariaLabels}
      columnDefinitions={columnDefinitions}
      empty="TODO: empty"
      filter="TODO: filter"
      header={<I18n>Resources</I18n>}
      items={resources}
      loading={loading}
      loadingText={loadingText}
      onSelectionChange={handleSelectionChange}
      onSortingChange={handleSortingChange}
      pagination={
        <Pagination
          currentPageIndex={currentPageIndex}
          onChange={handlePaginationChange}
          openEnd={openEnd}
          pagesCount={pagesCount}
        />
      }
      preferences={
        <CollectionPreferences
          cancelLabel={cancelLabel}
          confirmLabel={confirmLabel}
          onConfirm={handleConfirm}
          pageSizePreference={pageSizePreference}
          preferences={preferences}
          title={collectionPreferencesTitle}
          visibleContentPreference={visibleContentPreference}
          wrapLinesPreference={wrapLinesPreference}
        />
      }
      resizableColumns
      selectedItems={selectedItems}
      selectionType="multi"
      sortingColumn={sortingColumn}
      sortingDescending={sortingDescending}
      stickyHeader
      trackBy={trackBy}
      visibleColumns={visibleContent}
      wrapLines={wrapLines}
    />
  );

  /*
  if (error) {
    return (
      <Alert
        buttonText={<I18n>Retry</I18n>}
        dismissible={false}
        header={<I18n>There was an error loading your resources.</I18n>}
        onButtonClick={handleErrorButtonClick}
        type="error"
        visible
      >
        {error.message}
      </Alert>
    );
  }
  */
}
