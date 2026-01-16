declare module '*.pdf';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.svg?react' {
  const content: any;
  export default content;
}

declare module '*.mp4';