import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  Button,
} from 'react-native';
const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1;

type CardType = {
  name: string;
};

const cards = [
  {name: 'Card 1'},
  {name: 'Card 2'},
  {name: 'Card 3'},
  {name: 'Card 4'},
  {name: 'Card 5'},
  {name: 'Card 6'},
  {name: 'Card 7'},
  {name: 'Card 8'},
  {name: 'Card 9'},
  {name: 'Card 10'},
];

const App = () => {
  const _renderViews = (views: CardType[]): JSX.Element[] => {
    return views.map(card => {
      return (
        <View style={styles.cardStyle}>
          <Text>{card.name}</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}>
        {_renderViews(cards)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 15,
  },
});

export default App;
