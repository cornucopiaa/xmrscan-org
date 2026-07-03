declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

// Google Analytics (gtag.js) global, injected via public/index.html
interface Window {
  gtag?: (...args: any[]) => void;
}
