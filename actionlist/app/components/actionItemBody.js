import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'react-native-button';
import Communications from 'react-native-communications';
import { Colors } from '../lib/commons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.iuDarkLimeStone,
    padding: 10,
    borderBottomWidth: 0.5,
  },
  text: {
    color: Colors.iuCrimson,
    marginBottom: 2,
  },
  actionContainer: {
    backgroundColor: Colors.iuCrimsonDark,
    padding: 5,
    borderRadius: 8,
    marginRight: 10,
    marginTop: 10,
    width: 100,
  },
  bodyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  routeContainer: {
    backgroundColor: Colors.iuCrimsonDark,
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.iuCrimsonDark,
    marginRight: 10,
    width: 100,
  },
  actionButton: {
    fontSize: 15,
    color: Colors.white,
  },
  routeButton: {
    backgroundColor: Colors.iuCrimsonDark,
    fontSize: 15,
    color: Colors.iuCrimsonDark,
  },
});

const ActionItemBody = rowData => (
  <View style={styles.container}>
    <Text style={styles.text}>{rowData.processType.label}</Text>
    <Text style={styles.text}>{rowData.initiator}</Text>
    <Text style={styles.text}>{rowData.creationDate}</Text>
    <Text style={styles.text}>{rowData.processInstanceStatus.label}</Text>
    <Text style={styles.text}>{rowData.actionRequested.label}</Text>
    <View style={styles.bodyView}>
      <Button
        containerStyle={styles.actionContainer}
        style={styles.actionButton}
        onPress={() => Communications.web(rowData._links.log.href)}
      >Route Log</Button>
      <Button
        containerStyle={styles.actionContainer}
        style={styles.actionButton}
        onPress={() => Communications.web(rowData._links.actionList.href)}
      >Take Action</Button>
    </View>
  </View>
);

ActionItemBody.propTypes = {
  rowData: React.PropTypes.shape({
    processType: React.PropTypes.shape({
      label: React.PropTypes.string,
    }).isRequired,
    actionRequested: React.PropTypes.shape({
      label: React.PropTypes.string,
    }).isRequired,
    initiator: React.PropTypes.string.isRequired,
    lastApprovedDate: React.PropTypes.string.isRequired,
    processInstanceStatus: React.PropTypes.shape({
      label: React.PropTypes.string,
    }).isRequired,
  }).isRequired,
};

ActionItemBody.defaultProps = {
  rowData: {
    processType: { label: {} },
    actionRequested: { label: {} },
    initiator: '',
    lastApprovedDate: '',
    processInstanceStatus: { label: {} },
  },
};

export default ActionItemBody;