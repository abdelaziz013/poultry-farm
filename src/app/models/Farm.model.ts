/* eslint-disable @typescript-eslint/naming-convention */
interface Attributes {
  FarmName: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
interface Meta {
  pagination: Pagination;
}
export interface FarmResponseData {
  data: Data[];
  meta: Meta;
}
export interface Data {
  id: number;
  attributes: Attributes;
}
 export interface FarmData {
  id: number;
  farmName: string;
}
