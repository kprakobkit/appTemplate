import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Demo from '../../app/components/Demo';

const demo = React.createFactory(Demo);

describe('Demo', () => {
  it('passes dummy test', () => {
    expect(true).to.equal(true);
  });
});
