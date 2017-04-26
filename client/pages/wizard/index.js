// SPIKE
  import React from 'react';
  import { Link } from 'react-router';

  export default () => (
    <div>
      <h1>Repair Wizard</h1>
      <Link to='/parts'>Buy Parts</Link><br/>
      <Link to='/wizard'>Repair Wizard</Link><br/>
      <Link to='/diy'>DIY Library</Link><br/>
    </div>
  );
