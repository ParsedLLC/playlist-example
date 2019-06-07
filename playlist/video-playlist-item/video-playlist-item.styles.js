import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../_shared/colors';

const DIMS = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: DIMS.width,
    flexDirection: 'row',
    marginVertical: 7.5,
    paddingLeft: 5,
  },
  detailContainer: {
    flex: 2,
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: 8,
    height: 64,
  },
  actionContainer: {
    height: 64,
    flexDirection: 'row',
    marginRight: 15,
    alignSelf: 'flex-end',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: 64,
    width: 112,
    zIndex: 8000,
    backgroundColor: colors.darkenedOverlay,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 10,
    fontFamily: 'Museo Sans',
    textAlign: 'left',
  },
  duration: {
    fontWeight: '500',
    fontSize: 10,
    fontFamily: 'Museo Sans',
    color: colors.blueGreen,
  },
  subTitle: {
    marginTop: 5,
    flex: 1,
    textAlign: 'left',
    fontSize: 10,
    fontFamily: 'Museo Sans',
    fontWeight: '500',
    color: colors.white,
    opacity: 0.6,
  },
  actionIcon: {
    marginHorizontal: 8,
  },
  image: {
    width: 112,
    height: 64,
    alignItems: 'center',
  },
});
