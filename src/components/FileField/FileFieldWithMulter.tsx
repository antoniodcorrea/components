import React from 'react';
import axios from 'axios';
import { FileField } from '.';

interface UploadFileToServerResponse {
  aspect: number;
  height: number;
  width: number;
  id: number;
  temp: boolean;
  img: {
    original: string;
  };
}

interface RemoveFilefromServerResponse {
  success: boolean;
}

interface Props {
  className?: any;
  url?: string;
  grow?: boolean;
  label?: string;
  textButton?: string;
  name?: string;
  accept?: any;
  removable?: boolean;
  percentCompleted?: number;
  maxLength?: number;
  urlApiUpload?: string;
  onDrop?: (acceptedFiles: File[]) => void;
  onChange?: (url: string) => void;
  onRemove?: (url: string) => void;
}

interface State {
  url?: string;
  percentCompleted?: number;
  isUploading: boolean;
  filesToRemove: string[];
}

export class FileFieldWithMulter extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      url: undefined,
      percentCompleted: 0,
      isUploading: false,
      filesToRemove: [],
    };
  }

  uploadFileToServer = async (urlApiUpload, data): Promise<UploadFileToServerResponse> => {
    let config = {
      onUploadProgress: progressEvent => {
        const { loaded, total } = progressEvent;
        let percentCompleted = Math.round((loaded * 100) / total);

        this.setState({ percentCompleted });
      },
    };

    return axios.post(urlApiUpload, data, config);
  };

  removeFilefromServer = async (urlApiUpload, data): Promise<RemoveFilefromServerResponse> =>
    axios.delete(urlApiUpload, data);

  onRemove = () => {
    const { onRemove, url, urlApiUpload } = this.props;
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Are you sure?')) return;
    if (onRemove) onRemove(url);

    this.removeFilefromServer(urlApiUpload, this.state.filesToRemove).then(response =>
      this.setState({
        url: undefined,
        filesToRemove: [],
      })
    );
  };

  onDrop = acceptedFiles => {
    const { onDrop, urlApiUpload } = this.props;

    if (!acceptedFiles.length) return;
    if (onDrop) onDrop(acceptedFiles);

    this.setState({
      isUploading: true,
      url: undefined,
    });

    let data = new FormData();
    data.append('files', acceptedFiles[0]);

    this.uploadFileToServer(urlApiUpload, data)
      .then(res => {
        this.onChange(res);
      })
      .catch(err => err);
  };

  onChange = res => {
    const { onChange } = this.props;
    this.setState({
      url: res.data.img.original,
      percentCompleted: 0,
      isUploading: false,
    });

    if (onChange) onChange(res.data.img.original);
  };

  render = () => {
    const { className, grow, label, textButton, name, accept, removable, maxLength } = this.props;

    return (
      <FileField
        className={className}
        url={this.state.url}
        grow={grow}
        label={label}
        textButton={textButton}
        name={name}
        accept={accept}
        removable={removable}
        onDrop={this.onDrop}
        percentCompleted={this.state.percentCompleted}
        onRemove={this.onRemove}
        maxLength={maxLength}
      />
    );
  };
}
