import React from 'react';
import './ErrorBoundary.less';

interface Props {
  children: React.ReactNode;
  message: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info): void {
    console.log('---------------');
    console.log('---------------');
    console.log(error, info);
    console.log('---------------');
    console.log('---------------');

    this.setState({
      hasError: true,
    });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <div className="ErrorBoundary">{this.props.message}</div>;
    }

    return this.props.children;
  }
}
