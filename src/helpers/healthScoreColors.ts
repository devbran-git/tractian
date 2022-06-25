export const setHealthScoreColor = (healthscore: number) => {
  if (healthscore < 70 && healthscore > 49) return '#FFB801';

  if (healthscore < 50) return '#FF4444';

  return '#2AA349';
};
