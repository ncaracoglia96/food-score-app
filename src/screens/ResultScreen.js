import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { getFoodInfo } from '../api/openFoodFacts';
import { calculateFoodScore } from '../utils/scoring';

export default function ResultScreen({ route }) {
  const { barcode } = route.params;
  const [food, setFood] = useState(null);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getFoodInfo(barcode);
      setFood(data);
      setScore(calculateFoodScore(data));
      setLoading(false);
    }
    fetchData();
  }, [barcode]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!food) {
    return <Text>Food not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{food.product_name}</Text>
      <Text style={styles.score}>Health Score: {score}/100</Text>
      <Text>Ingredients: {food.ingredients_text}</Text>
      {/* Add more info as desired */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  score: { fontSize: 32, color: 'green', marginBottom: 20 },
});
