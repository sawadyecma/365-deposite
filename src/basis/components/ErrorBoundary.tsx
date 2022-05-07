import React, { ErrorInfo } from "react";

export class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  // NOTE: フォールバックUIを表示するためのstate変更を行う
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  // NOTE: エラー情報をログに記録
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("error", error);
    console.log("errorInfo", errorInfo);
    alert(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
