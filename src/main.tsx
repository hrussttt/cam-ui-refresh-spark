
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Include MJPEG2SD.htm directly in the React application
// This will make it accessible at the root of the application
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Add a favicon link to prevent 404 errors
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = 'favicon.png'; // Use PNG instead of ICO
document.head.appendChild(favicon);
