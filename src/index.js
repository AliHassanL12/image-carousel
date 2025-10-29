import "./css/styles.css";
import attachListeners from "./eventAttacher";
import move from './next';

attachListeners();
setInterval(move.moveNext, 5000);
