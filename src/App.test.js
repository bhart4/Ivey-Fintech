import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FireBaseWrapper from './FireBaseWrapper';
import FireBaseConfig from './../config/FireBaseConfig';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("FireBase Wrapper Class Suite", function() {
  const wrapper = new FireBaseWrapper(FireBaseConfig);

  it('connects to firebase instance', () => {
    expect(wrapper).not.toBe(null);
  });

  it('retrieves db path using getPath method', () => {
    let path = wrapper.getPath('');
    expect(path).not.toBe(null);
  });

  it('takes snapshots of data', () =>{
    let snapshot = wrapper.getSnapshot('');
    console.log(snapshot);
    expect(snapshot).not.toBe(null);
  })
});