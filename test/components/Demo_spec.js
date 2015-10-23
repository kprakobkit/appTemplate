import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Demo from '../../app/components/Demo';

const { renderIntoDocument } = TestUtils;
const demo = React.createFactory(Demo);

describe('Demo', () => {
  it('passes dummy test', () => {
    expect(true).to.equal(true);
  });

  it('renders successfully with class name and message', () => {
    const message = 'hello there';
    const component = renderIntoDocument(demo({ message: message }));
    const rendered = ReactDOM.findDOMNode(component);

    expect(rendered).to.be.ok;
    expect(rendered.className).to.contain('demo');
    expect(rendered.textContent).to.equal(message);
  });
});
