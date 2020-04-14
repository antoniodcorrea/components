import React, { Component } from 'react';
import axios from 'axios';
import SelectUi from './SelectUi';
import { LoadOptionsFromServer, Props, Value } from './Select.types';

export class Select extends Component<Props> {
  loadOptionsFromServer: LoadOptionsFromServer = async (inputValue) => {
    const { optionFilterFieldName, apiUrl, token } = this.props;
    const url =
      apiUrl +
      (optionFilterFieldName ? '/' + optionFilterFieldName + '/?' + optionFilterFieldName + '=' + inputValue : '');

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    return axios.get(url, config);
  };

  loadOptions = async (inputValue: string): Promise<Value[]> => {
    const options = await this.loadOptionsFromServer(inputValue);
    const optionsFormatted = options.data.map((item) =>
      Object.assign(item, {
        label: item.name,
        value: item.name,
      })
    );

    return optionsFormatted;
  };

  onChange = (newValues: Value[]): void => {
    const { onChange, limit, value } = this.props;
    const updateValues = !newValues || newValues.length <= limit;
    const updatedValues = updateValues ? newValues : value;

    onChange(updatedValues);
  };

  render = (): React.ReactNode => {
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
