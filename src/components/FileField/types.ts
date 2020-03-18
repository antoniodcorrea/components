export interface UploadFileToServerResponse {
  aspect: number;
  height: number;
  width: number;
  id: number;
  temp: boolean;
  img: {
    original: string;
  };
}

export type UploadFileToServer = (urlApiUpload: string, data: FormData) => Promise<UploadFileToServerResponse>;

export interface RemoveFilefromServerResponse {
  success: boolean;
}

export type RemoveFilefromServer = (urlApiUpload: string, data: string[]) => Promise<RemoveFilefromServerResponse>;
