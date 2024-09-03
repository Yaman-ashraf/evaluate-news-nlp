// js files
import { handleSubmit } from './js/formHandler.js'
import './styles/main.scss';


// alert("I EXIST")
// console.log("CHANGE!!");

// sass files


// Add event listener to the form for handling submissions
document.getElementById('form').addEventListener('submit', handleSubmit);

// Check if the browser supports service workers and register one if it does
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered: ', registration);
            })
            .catch(registrationError => {
                console.log('ServiceWorker registration failed: ', registrationError);
            });
    });
}

import './styles/resets.scss';