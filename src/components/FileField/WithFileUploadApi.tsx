import React from 'react';
import axios from 'axios';
import { UploadFileToServer, RemoveFilefromServer } from './types';
import { Props as PropsEnhancedComponent } from './index';

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
  disabled?: boolean;
  onDrop?: (acceptedFiles: File[]) => void;
  onUploaded?: (url: string) => void;
  onRemove?: (url: string) => void;
}

interface State {
  url?: string;
  percentCompleted?: number;
  isUploading: boolean;
  filesToRemove: string[];
  error: boolean;
  success: boolean;
}

export const WithFileUploadApi = (
  BaseComponent: React.ComponentType<PropsEnhancedComponent>
): React.ComponentType<Props> => {
  return class EnhancedComponent extends React.Component<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        url: undefined,
        percentCompleted: 0,
        isUploading: false,
        filesToRemove: [],
        error: false,
        success: false,
      };
    }

    onDrop = acceptedFiles => {
      console.log(acceptedFiles[0]);
    };

    render() {
      const { className, grow, label, textButton, name, accept, removable, maxLength, disabled } = this.props;
      const { error, success } = this.state;

      return (
        <BaseComponent
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
          // onRemove={this.onRemove}
          maxLength={maxLength}
          error={error}
          success={success}
          disabled={disabled}
        />
      );
    }
  };
};
