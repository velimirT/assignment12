import React from 'react';
import { Link } from  'react-router-dom';

export default function HomePage ({}){
    return (
          <main className = "home">
              <h1>Welcome to Friends Finder</h1>
              <Link to = "survey">Click here to start our survey</Link>
          </main>
    );
}
