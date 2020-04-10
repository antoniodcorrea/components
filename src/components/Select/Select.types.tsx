export interface Value {
  id: number;
  label: string;
  value: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
export interface LoadOptionsFromServerResponse {
  data: Value[];
}

export type LoadOptionsFromServer = (inputValue: any) => Promise<LoadOptionsFromServerResponse>;

export interface Props {
  label: string;
  value?: any;
  grow?: boolean;
  limit?: number;
  apiUrl?: string;
  token?: string;
  optionFilterFieldName?: string;
  onChange?: (e) => void;
}
