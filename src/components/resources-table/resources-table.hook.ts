import { CollectionPreferencesProps } from '@awsui/components-react/collection-preferences';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { PaginationProps } from '@awsui/components-react/pagination';
import { TableProps } from '@awsui/components-react/table';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';
import { useCollectionPreferences, usePagination, useTable } from 'use-awsui';

interface Props {
  loadingStep: number;
  loadingSteps: number;
}

interface State<T> {
  ariaLabels: TableProps.AriaLabels<T>;
  cancelLabel: string;
  collectionPreferencesTitle: string;
  confirmLabel: string;
  currentPageIndex: number;
  handleConfirm(
    this: void,
    event: NonCancelableCustomEvent<CollectionPreferencesProps.Preferences>,
  ): void;
  handlePaginationChange(
    this: void,
    event: NonCancelableCustomEvent<PaginationProps.ChangeDetail>,
  ): void;
  handleSelectionChange(
    this: void,
    event: NonCancelableCustomEvent<TableProps.SelectionChangeDetail<T>>,
  ): void;
  handleSortingChange(
    this: void,
    event: NonCancelableCustomEvent<TableProps.SortingState<T>>,
  ): void;
  loading: boolean;
  loadingText: string;
  openEnd: boolean;
  pageSize?: number;
  pageSizePreference: CollectionPreferencesProps.PageSizePreference;
  pagesCount: number;
  preferences: CollectionPreferencesProps.Preferences;
  selectedItems?: readonly T[];
  sortingColumn?: TableProps.SortingColumn<T>;
  sortingDescending?: boolean;
  visibleContent?: readonly string[];
  visibleContentPreference: CollectionPreferencesProps.VisibleContentPreference;
  wrapLines?: boolean;
  wrapLinesPreference: CollectionPreferencesProps.WrapLinesPreference;
}

export default function useResourcesTable<T>({
  loadingStep,
  loadingSteps,
}: Props): State<T> {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const { handleConfirm, pageSize, preferences, visibleContent, wrapLines } =
    useCollectionPreferences();

  const { currentPageIndex, handleChange: handlePaginationChange } =
    usePagination();

  const {
    handleSelectionChange,
    handleSortingChange,
    selectedItems,
    sortingColumn,
    sortingDescending,
  } = useTable<T>();

  return {
    cancelLabel: translate('Cancel') || '...',
    collectionPreferencesTitle: translate('Preferences') || '...',
    confirmLabel: translate('Confirm') || '...',
    currentPageIndex,
    handleConfirm,
    handlePaginationChange,
    handleSelectionChange,
    handleSortingChange,
    loading: loadingStep <= loadingSteps,
    openEnd: false,
    pageSize,
    pagesCount: 1,
    preferences,
    selectedItems,
    sortingColumn,
    sortingDescending,
    visibleContent,
    wrapLines,

    ariaLabels: useMemo(
      (): TableProps.AriaLabels<T> => ({
        selectionGroupLabel: translate('Resources selection') || '',

        allItemsSelectionLabel({
          selectedItems,
        }: TableProps.SelectionState<T>): string {
          if (selectedItems.length === 0) {
            return translate('No resources selected') || '';
          }
          if (selectedItems.length === 1) {
            return translate('1 resource selected') || '';
          }
          return (
            translate('$n resources selected', { n: selectedItems.length }) ||
            ''
          );
        },

        itemSelectionLabel(
          { selectedItems }: TableProps.SelectionState<T>,
          row: T,
        ): string {
          const findRow = (item: T): boolean => item === row;
          if (selectedItems.findIndex(findRow) === -1) {
            return translate('Resource is not selected.') || '';
          }
          return translate('Resource is selected.') || '';
        },
      }),
      [translate],
    ),

    loadingText:
      translate('Loading $step of $total', {
        step: loadingStep,
        total: loadingSteps,
      }) || '...',

    pageSizePreference:
      useMemo((): CollectionPreferencesProps.PageSizePreference => {
        const mapNumberToPageSizeOption = (
          n: number,
        ): CollectionPreferencesProps.PageSizeOption => ({
          label: translate('$n resources', { n }) || '...',
          value: n,
        });

        return {
          title: translate('Select page size') || '...',
          options: [25, 50, 100].map(mapNumberToPageSizeOption),
        };
      }, [translate]),

    visibleContentPreference: useMemo(
      (): CollectionPreferencesProps.VisibleContentPreference => ({
        title: translate('Select visible content') || '...',
        options: [],
      }),
      [translate],
    ),

    wrapLinesPreference: useMemo(
      (): CollectionPreferencesProps.WrapLinesPreference => ({
        description:
          translate(
            'Enable to wrap table cell content. Disable to truncate text.',
          ) || '...',
        label: translate('Wrap lines') || '...',
      }),
      [translate],
    ),
  };
}
