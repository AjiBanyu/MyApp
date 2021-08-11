/*
fungsi index.js di folder pages 
untuk mengimport semua folder2 yang ad di dalam folder pages

*/

// mengimport folder splash 
import Splash from './Splash';
// mengimport folder getstarted
import GetStarted from './GetStarted';
// mengimport folder Register
import Register from './Register';
// mengimport folder Login
import Login from './Login';

// yang nnttinya akan mengexport folder pages yang sudah di import dan dijadikan satu object
// {} kurung kurawal > karna dijadikan sebuah object
export {Splash, GetStarted, Register, Login}