import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <Text style={styles.text}>
      🍎 Score: {score} - High Score: {highScore}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
