import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../styles/colors';

interface ScoreProps {
  score: number;
}

export default function Score({ score }: ScoreProps): JSX.Element {
  const [highScore, setHighScore] = useState<number>(0);

  useEffect(() => {
    getHighScore();
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      saveHighScore(score);
    }
  }, [score]);

  const getHighScore = async () => {
    try {
      const storedHighScore = await AsyncStorage.getItem('highScore');
      if (storedHighScore !== null) {
        setHighScore(parseInt(storedHighScore));
      }
    } catch (error) {
      console.error('Failed to load the high score from storage', error);
    }
  };

  const saveHighScore = async (newHighScore: number) => {
    try {
      await AsyncStorage.setItem('highScore', newHighScore.toString());
    } catch (error) {
      console.error('Failed to save the high score', error);
    }
  };

  return (
    <View>
      <Text style={styles.text}>
        🍎 Score: {score}
      </Text>
      <Text style={styles.text1}>
        🏆 {highScore}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.tertiary,
  },
});
