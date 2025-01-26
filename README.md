# React Native useState Hook Object Update Re-render Issue

This repository demonstrates a common issue when using the `useState` hook in React Native with objects.  Updating a portion of the object state doesn't always trigger a re-render because JavaScript uses object references.  The solution shows the correct way to force a re-render by creating a new object with the updated values.

## Problem

The provided `bug.js` file shows an example where attempting to update only the `name` property of the `myObject` state using the spread syntax (`...myObject`) doesn't trigger a re-render, because a new object is not created. Thus the reference remains the same. 

## Solution

The `bugSolution.js` file demonstrates the correct approach to update parts of an object state. It uses the spread syntax to create a completely new object, thereby forcing a re-render.  This ensures that changes to the object are properly reflected in the UI.