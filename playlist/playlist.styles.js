import { StyleSheet } from 'react-native';
import colors from '../_shared/colors';

export const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Museo Sans',
    color: colors.white,
    marginBottom: 12,
  },
  description: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Museo Sans',
    color: colors.white,
    opacity: 0.6,
  },
  comingUp: {
    width: '100%',
    flex: 1,
  },
  flatlistDesign: {
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    flexDirection: 'column',
  },
  flatLists: {
    width: '100%',
    flex: 1,
    paddingTop: 10,
  },
  flatlistContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 0,
    alignItems: 'center',
    flexDirection: 'column',
  },
  descriptionContainer: {
    backgroundColor: colors.lightBackground,
    height: 140,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 60,
    marginBottom: 35,
    marginTop: 25,
  },
  closeButton: {
    position: 'absolute',
    top: 18,
    right: 20,
  },
  playlistHeaderContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  placeholderView: {
    width: 10,
  },
  playlistDescription: {
    justifyContent: 'center',
    flex: 1,
  },
  descriptionText: {
    textAlign: 'center',
  },
  videoDetailsContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});
