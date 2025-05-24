declare global {
  interface Window {
    GPWAverificationPopup?: (el: HTMLElement | null) => void;
  }
}

export {};
