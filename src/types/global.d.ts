export {};

declare global {
  interface Window {
    isFlutterWebView?: boolean;
    openpage: { postMessage: (message: string) => void };
    urllaunch: { postMessage: (message: string) => void };
    closepage: { postMessage: (message: string) => void };
    notification: { postMessage: (message: string) => void };
    receiveTokenFromFlutter: (token: string) => void;

    onShareCardReady: { postMessage: (message: string) => void };
    // onSaveComplete?: (success: boolean) => void;
    onSaveComplete?: (result: any) => void;
  }
}
