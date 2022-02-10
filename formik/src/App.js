import React from 'react';

import Basic from './components/formik';
import Form from './components/form';
import Exemple from './components/field';
import ExampleuseFidle from './components/usefield';
import SignupForm from './components/useFormik';
function App() {
  return (
    <div>
      <Basic/>
      <Form/>
      <Exemple/>
      <ExampleuseFidle/>
      <SignupForm/>
    </div>
  );
}
 
export default App;