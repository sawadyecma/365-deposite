import React, { ErrorInfo } from "react";

interface Props {
  children: JSX.Element;
}
export class ErrorBoundary extends React.Component<
  Props,
  { hasError: boolean }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // NOTE: フォールバックUIを表示するためのstate変更を行う
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  // NOTE: エラー情報をログに記録
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    alert(error);
    console.log("error", error);
    console.log("errorInfo", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
