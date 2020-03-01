import React, { Component } from 'react';
import axios from 'axios';
import SelectUi from './SelectUi';

interface Props {
  label: string;
  value?: any;
  grow?: boolean;
  limit?: number;
  apiUrl?: string;
  token?: string;
  optionFilterFieldName?: string;
  onChange?: (e) => void;
}

export class Select extends Component<Props> {
  loadOptions = inputValue => {
    const { optionFilterFieldName, apiUrl, token } = this.props;
    return axios({
      method: 'get',
      url:
        apiUrl +
        (optionFilterFieldName ? '/' + optionFilterFieldName + '/?' + optionFilterFieldName + '=' + inputValue : ''),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        response.data.map(item => {
          item.label = item.name;
          item.value = item.name;

          return null;
        });

        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  };
gi
  onChange = newValues => {
    const { onChange, limit, value } = this.props;
    const updateValues = !newValues || newValues.length <= limit;
    const updatedValues = updateValues ? newValues : value;

    onChange(updatedValues);
  };

  render = () => {
    const { grow, value, label, limit } = this.props;

    return (
      <div className={'Select ' + (grow ? 'Select--grow' : '')}>
        <SelectUi
          label={label}
          loadOptions={this.loadOptions}
          limit={limit}
          value={value}
          onChange={this.onChange}
          grow={grow}
        />
      </div>
    );
  };
}
