declare module 'react-s3-uploader' {
  import { Component, RefObject } from 'react';

  export interface S3Response {
    signedUrl: string;
    publicUrl: string;
    filename: string;
    fileKey: string;
  }

  export interface PostFormSignedUrl {
    url: string;
    fields: {
      Policy: string;
      'X-Amz-Signature': string;
      [key: string]: string;
    };
  }

  export type reactS3UploaderCallback = (signResult: PostFormSignedUrl) => any;

  export interface ReactS3UploaderProps {
    signingUrl?: string;
    signingUrlMethod?: 'GET' | 'POST';
    getSignedUrl?: (file: File, callback: reactS3UploaderCallback) => any;
    accept?: string;
    s3path?: string;
    preprocess?: (file: File, next: (file: File) => any) => any;
    onSignedUrl?: (response: S3Response) => any;
    onProgress?: (percent: number, status: string, file: File) => any;
    onError?: (message: string, file: File) => any;
    onFinish?: (result: S3Response | PostFormSignedUrl, file: File) => any;
    signingUrlHeaders?: {
      additional: object;
    };
    signingUrlQueryParams?: {
      additional: object;
    };
    signingUrlWithCredentials?: boolean;
    uploadRequestHeaders?: object;
    contentDisposition?: string;
    server?: string;
    inputRef?: RefObject<HTMLInputElement> | ((ref: HTMLInputElement) => any ) | null;
    autoUpload?: boolean;
    [key: string]: any;
  }

  class ReactS3Uploader extends Component<ReactS3UploaderProps, any> { }

  export default ReactS3Uploader;
}

declare module 'react-s3-uploader/s3upload' {
  import { ReactS3UploaderProps } from 'react-s3-uploader';

  class S3Upload {
    constructor(options: ReactS3UploaderProps)
  }

  export default S3Upload;
}
