import React from 'react';
import {
  View,
  Picker,
} from 'react-native';

/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { filterActionList } from '../actions/action_items';
import ContentHeader from './contentHeader';

const FilterPicker = ({ filter, value, filterKey, onActionListFiltering }) => (
  <View>
    <ContentHeader title={filter.title} />
    <Picker
      selectedValue={value}
      onValueChange={selectedOption => onActionListFiltering(filterKey, selectedOption)}
    >
      {
        filter.data.map(i => (
          <Picker.Item value={i} label={i} key={i} />
        ))
      }
    </Picker>
  </View>
);

const mapDispatchToProps = dispatch => ({
  onActionListFiltering: (filterType, value) =>
    dispatch(filterActionList({ filterType, value })),
});

FilterPicker.propTypes = {
  onActionListFiltering: React.PropTypes.func.isRequired,
  filter: React.PropTypes.shape({
    title: React.PropTypes.string,
    data: React.PropTypes.arrayOf(React.PropTypes.string),
  }).isRequired,
  value: React.PropTypes.string.isRequired,
  filterKey: React.PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterPicker);
