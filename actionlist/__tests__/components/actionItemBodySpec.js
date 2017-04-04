import React from 'react';
import { mount } from 'enzyme';
import { Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import ActionItemBody from '../../app/components/action_item_body';

require('../../testConfig');

jest.unmock('../../app/components/action_item_body');

describe('Action_Item_Body', () => {
  it('correctly passes our props to Text Components in the View Component', () => {
    const props = {
      processType: {
        label: 'process type label',
      },
      actionRequested: {
        label: 'action requested label',
      },
      initiator: 'initiator',
      lastApprovedDate: 'last approved date',
      processInstanceStatus: {
        label: 'process instance status',
      },
    };
    const middlewares = [];
    const initialState = {};
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ActionItemBody {...props} />
      </Provider>);
    expect(wrapper.contains(View));
    expect(wrapper.find(View).find(Text).first().text()).to.equal('process type label');
    expect(wrapper.find(View).find(Text).at(1).text()).to.equal('initiator');
    expect(wrapper.find(View).find(Text).at(2).text()).to.equal('last approved date');
    expect(wrapper.find(View).find(Text).at(3).text()).to.equal('process instance status');
    expect(wrapper.find(View).find(Text).at(4).text()).to.equal('action requested label');
  });
  it('should have correct button titles', () => {
    const props = {
      processType: {
        label: 'process type label',
      },
      actionRequested: {
        label: 'action requested label',
      },
      initiator: 'initiator',
      lastApprovedDate: 'last approved date',
      processInstanceStatus: {
        label: 'process instance status',
      },
    };
    const middlewares = [];
    const initialState = {};
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ActionItemBody {...props} />
      </Provider>);
    expect(wrapper.find(View).find(View).find(Button)
      .first()
        .props().title).to.equal('Route Log');
    expect(wrapper.find(View).find(View).find(Button)
      .at(1)
        .props().title).to.equal('Take Action');
  });
});