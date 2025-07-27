// app-dotenv.js

// 1. Load environment variables as early as possible in your application
// This line reads your .env file and populates process.env
require('dotenv').config();

// 2. Access environment variables using process.env
const videoUrl = process.env.VIDEO_URL;
const nodeEnv = process.env.NODE_ENV || 'not set'; // Demonstrating a default if not set

console.log('--- .env File Method (with dotenv) ---');
console.log(`Node Environment (NODE_ENV): ${nodeEnv}`);

if (videoUrl) {
    console.log(`Video URL from .env file: ${videoUrl}`);
    console.log('You can access this video here:');
    console.log(videoUrl);
} else {
    console.error('Error: VIDEO_URL is NOT set in your .env file or environment variables!');
    console.error('Please ensure VIDEO_URL="your_video_url" is present in your .env file.');
}

console.log('------------------------------------');