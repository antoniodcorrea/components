export type FileUploadItem = {
  id: number;
  name: string;
  url: string;
  error?: boolean;
  percentCompleted?: number;
};

export interface ImageUpload {
  uploadFileToServer: (options: {
    file: File;
    setPercentCompleted: (number: number) => void;
  }) => Promise<{ file: string }>;
  removeFileFromServer: (options: { src: string; onRemoved: () => void }) => Promise<void>;
}
