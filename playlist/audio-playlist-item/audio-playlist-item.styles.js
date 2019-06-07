import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../_shared/colors';

const DIMS = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: DIMS.width,
    flexDirection: 'row',
    marginLeft: 8,
  },
  detailContainer: {
    alignItems: 'flex-start',
    flex: 2,
    flexDirection: 'column',
    marginTop: 8,
    marginBottom: 8,
  },
  actionContainer: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    marginBottom: 8,
    marginRight: 16,
  },
  title: {
    fontWeight: '500',
    fontSize: 10,
    fontFamily: 'Museo Sans',
    textAlign: 'left',
  },
  audioDuration: {
    height: 10,
    color: colors.white,
    fontFamily: 'Museo Sans',
    fontSize: 8,
    lineHeight: 10,
  },
  audioSubtitle: {
    height: 10,
    color: colors.blueText,
    fontFamily: 'Museo Sans',
    fontSize: 8,
    lineHeight: 10,
  },
  actionStyle: {
    marginBottom: 8,
  },
  updatedFromNow: {
    height: 10,
    color: colors.lightBackground,
    fontFamily: 'Museo Sans',
    fontSize: 8,
    lineHeight: 10,
  },
});
