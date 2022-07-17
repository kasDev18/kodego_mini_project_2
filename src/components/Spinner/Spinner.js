import React from 'react';
import './Spinner.module.css';

export default function LoadingSpinner() {
  return (
    <>
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <span>Loading</span>
      </div>
    </>
  );
}
