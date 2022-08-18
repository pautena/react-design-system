import React from "react";
import { BasicModelInstance } from "~/generators";
import {
  HeaderProps,
  Placeholder,
  PlaceholderProps,
  TableList,
  TableListProps,
} from "../../components";
import { HeaderLayout } from "../header-layout";

export interface ListLayoutProps<T extends BasicModelInstance> {
  loading?: boolean;
  headerProps: HeaderProps;
  listProps: TableListProps<T>;
  emptyPlaceholderProps: PlaceholderProps;
}

export const ListLayout = <T extends BasicModelInstance>({
  loading,
  headerProps,
  emptyPlaceholderProps,
  listProps: { data, ...restListProps },
}: ListLayoutProps<T>) => {
  const isEmpty = data.length === 0;

  return (
    <HeaderLayout loading={loading} headerProps={headerProps}>
      {!isEmpty ? (
        <TableList data={data} {...restListProps} />
      ) : (
        <Placeholder {...emptyPlaceholderProps} />
      )}
    </HeaderLayout>
  );
};
