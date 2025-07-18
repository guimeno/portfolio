import React from 'react';

type IconProps = {
  className?: string;
};

export function ReactIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4"></circle>
        <path d="M107.3 45.7c-2.5-.8-5.2-1.4-7.9-1.9-2.8-.5-5.6-.9-8.4-1.3-3.1-.4-6.3-.7-9.5-1-1.3-.1-2.6-.2-3.9-.3-1.3-.1-2.6-.1-3.9-.1-1.3 0-2.6 0-3.9.1-1.3.1-2.6.2-3.9.3-3.2.3-6.4.6-9.5 1-2.8.4-5.6.8-8.4 1.3-2.7.5-5.4 1.1-7.9 1.9-2.5.8-4.9 1.7-7.2 2.7-2.3 1-4.5 2.1-6.6 3.3-2.1 1.2-4 2.5-5.9 3.9-1.8 1.4-3.5 2.9-5.1 4.5-1.6 1.6-3 3.3-4.4 5.1-1.4 1.8-2.6 3.7-3.7 5.7-1.1 2-2 4.1-2.9 6.3-.8 2.2-1.5 4.4-2 6.7-.5 2.3-.9 4.6-1.2 6.9-.3 2.3-.5 4.6-.5 6.9 0 2.3.2 4.6.5 6.9.3 2.3.7 4.6 1.2 6.9.5 2.3 1.2 4.5 2 6.7.9 2.2 1.9 4.3 2.9 6.3 1.1 2 2.3 3.9 3.7 5.7 1.4 1.8 2.8 3.5 4.4 5.1 1.6 1.6 3.3 3.1 5.1 4.5 1.8 1.4 3.8 2.7 5.9 3.9 2.1 1.2 4.3 2.3 6.6 3.3 2.3 1 4.7 1.9 7.2 2.7 2.5.8 5.2 1.4 7.9 1.9 2.8.5 5.6.9 8.4 1.3 3.1.4 6.3.7 9.5 1 1.3.1 2.6.2 3.9.3 1.3.1 2.6.1 3.9.1 1.3 0 2.6 0 3.9-.1 1.3-.1 2.6-.2 3.9-.3 3.2-.3 6.4-.6 9.5-1 2.8-.4 5.6-.8 8.4-1.3 2.7-.5 5.4-1.1 7.9-1.9 2.5-.8 4.9-1.7 7.2-2.7 2.3-1 4.5-2.1 6.6-3.3 2.1-1.2 4-2.5 5.9-3.9 1.8-1.4 3.5-2.9 5.1-4.5 1.6-1.6 3-3.3 4.4-5.1 1.4-1.8 2.6-3.7 3.7-5.7 1.1-2 2-4.1 2.9-6.3.8-2.2 1.5-4.4 2-6.7.5-2.3.9-4.6 1.2-6.9.3-2.3.5-4.6.5-6.9 0-2.3-.2-4.6-.5-6.9-.3-2.3-.7-4.6-1.2-6.9-.5-2.3-1.2-4.5-2-6.7-.9-2.2-1.9-4.3-2.9-6.3-1.1-2-2.3-3.9-3.7-5.7-1.4-1.8-2.8-3.5-4.4-5.1-1.6-1.6-3.3-3.1-5.1-4.5-1.8-1.4-3.8-2.7-5.9-3.9-2.1-1.2-4.3-2.3-6.6-3.3-2.3-1-4.7-1.9-7.2-2.7zM92.5 98.8c-.9.9-2.3 1.4-3.8 1.4-1.5 0-2.9-.5-3.8-1.4l-23.9-23.9c-.9-.9-1.4-2.3-1.4-3.8 0-1.5.5-2.9 1.4-3.8l23.9-23.9c.9-.9 2.3-1.4 3.8-1.4 1.5 0 2.9.5 3.8 1.4.9.9 1.4 2.3 1.4 3.8 0 1.5-.5 2.9-1.4 3.8L72.4 64l20.1 20.1c.9.9 1.4 2.3 1.4 3.8 0 1.4-.5 2.8-1.4 3.9z"></path>
      </g>
    </svg>
  );
}

export function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path d="M2 63.91v62.5h125.4V63.91H2zm100.2-2.8h22.07v1.75H119.4v53.64h-8.83v1.74h31.65V115.7h-40.62v-1.74h9.56V62.1h-9.56v-1.75h22.06v-1.74H102.2v1.74zm-69.93 1.74H55.1v53.66h-8.1l-18.46-22.5v22.5h-8.83V62.1h8.1l18.37 22.5V62.1h8.83v1.75zm-26.94 3.74a3.2 3.2 0 00-3.16 3.16c0 1.75 1.4 3.16 3.16 3.16 1.75 0 3.16-1.4 3.16-3.16 0-1.75-1.4-3.16-3.16-3.16z" fill="#007ACC"></path>
    </svg>
  );
}

export function NextJsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="#000"></path>
    </svg>
  );
}

export function TailwindIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.531-13.867 11.73-22.399 9.598-4.87-1.215-8.352-4.746-12.207-8.66-9.274-9.364-16.533-16.734-32.394-16.734zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.07 13.87 77.871 22.4 80c4.871 1.215 8.352 4.746 12.207 8.66 9.275 9.364 16.536 16.734 32.397 16.734 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.598-4.87-1.215-8.352-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38b2ac"></path>
    </svg>
  );
}

export function FirebaseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.7l11.48 21.48-26.76 47.66zm75.94 16.63L93.1 88.33l12.2-12.76c1.5-1.58 1-3.81-.98-4.5L62.41 39.37l-13.3-24.86c-1.1-2.19-4.21-1.65-4.6.7L20.8 96.15l60.35 18.15c3.18 1 6.36-1.6 5.7-4.75z" fill="#ffa000"></path>
      <path d="M87.27 97.15L60.77 41.85 50.06 26.2l-1.95-3.69c-1.1-2.19-4.21-1.65-4.6.7l-1.74 11.17 36.65 64.47c1.72 3.03 6.08 1.35 6.15-2.2z" fill="#f57f17"></path>
    </svg>
  );
}

export function VercelIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path d="M64 0l64 128H0L64 0z" fill="#000"></path>
    </svg>
  );
}

export function FramerIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M4 0h16v8h-8zm0 8h8l8 8h-8v8l-8-8z" fill="#000"/>
    </svg>
  );
}
