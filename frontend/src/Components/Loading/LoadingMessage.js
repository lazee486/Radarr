import React from 'react';
import styles from './LoadingMessage.css';

const messages = [
  'Downloading more RAM',
  'Now in Technicolor',
  'Previously on Radarr...',
  'Bleep Bloop.',
  'Locating the required gigapixels to render...',
  'Spinning up the hamster wheel...',
  'At least you\'re not on hold',
  'Hum something loud while others stare',
  'Loading humorous message... Please Wait',
  'I could\'ve been faster in Python',
  'Don\'t forget to rewind your movies',
  'Congratulations! You are the 1000th visitor.',
  'HELP! I\'m being held hostage and forced to write these stupid lines!',
  'RE-calibrating the internet...',
  'I\'ll be here all week',
  'Don\'t forget to tip your waitress',
  'Apply directly to the forehead',
  'Loading Battlestation'
  'We never really grow up, we only learn how to act in public.',
  'Knowledge is knowing a tomato is a fruit; Wisdom is not putting it in a fruit salad.',
  'A good movie always makes me wish it was a series, A good series makes me wonder where saturday went...',
];

let message = null;

function LoadingMessage() {
  if (!message) {
    const index = Math.floor(Math.random() * messages.length);
    message = messages[index];
  }

  return (
    <div className={styles.loadingMessage}>
      {message}
    </div>
  );
}

export default LoadingMessage;
