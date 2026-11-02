import { Component } from 'react';
export default class RouteErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <main className="route-error section-pad"><h1 tabIndex={-1}>Let’s find your way back.</h1><p>This page could not open. Please try again.</p><a href="/" className="outline-button">Return to UDHBHAV</a></main>;
    return this.props.children;
  }
}
