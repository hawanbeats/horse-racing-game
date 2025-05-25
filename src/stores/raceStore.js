import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useRaceStore = defineStore('race', () => {
  const horses = ref([]);
  const races = ref([]);
  const currentRaceIndex = ref(-1);
  const raceResults = ref([]);
  const isRaceStarted = ref(false);
  const isRacePaused = ref(false);
  const isRaceFinished = ref(false);
  const simulationSpeed = ref(1);
  const positions = ref({});
  const finishedHorses = ref([]);
  
  const horseColors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF',
    '#00FFFF', '#FFA500', '#A52A2A', '#800080', '#008000',
    '#000080', '#808000', '#800000', '#008080', '#000000',
    '#C0C0C0', '#808080', '#FFD700', '#FF6347', '#7CFC00'
  ];

  const currentRace = computed(() => {
    return currentRaceIndex.value >= 0 ? races.value[currentRaceIndex.value] : null;
  });

  const currentPositions = computed(() => {
    return positions.value[currentRaceIndex.value] || {};
  });

  function generateHorses() {
    horses.value = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Horse ${i + 1}`,
      condition: Math.floor(Math.random() * 100) + 1,
      color: horseColors[i]
    }));
  }

  function generateRaces() {
    if (horses.value.length === 0) {
      generateHorses();
    }
    
    const distances = [1200, 1400, 1600, 1800, 2000, 2200];
    races.value = distances.map((distance, index) => {
      const shuffled = [...horses.value].sort(() => 0.5 - Math.random());
      return {
        id: index + 1,
        distance,
        horses: shuffled.slice(0, 10)
      };
    });
    
    resetRaceState();
  }

  function resetRaceState() {
    currentRaceIndex.value = -1;
    raceResults.value = [];
    isRaceStarted.value = false;
    isRacePaused.value = false;
    isRaceFinished.value = false;
    positions.value = {};
    finishedHorses.value = [];
  }

  function startRace() {
    if (races.value.length === 0) return;
    
    isRaceStarted.value = true;
    isRacePaused.value = false;
    isRaceFinished.value = false;
    
    if (currentRaceIndex.value === -1) {
      currentRaceIndex.value = 0;
      initializeRace();
    }
  }

  function pauseRace() {
    isRacePaused.value = true;
  }

  function resumeRace() {
    isRacePaused.value = false;
  }

  function stopRace() {
    resetRaceState();
  }

  function toggleSpeed() {
    simulationSpeed.value = simulationSpeed.value === 1 ? 2 : 1;
  }

  function skipToResults() {
    if (currentRaceIndex.value === -1) return;
    
    const currentRaceHorses = races.value[currentRaceIndex.value].horses;
    const sortedHorses = [...currentRaceHorses].sort((a, b) => b.condition - a.condition);
    
    raceResults.value[currentRaceIndex.value] = sortedHorses.map(horse => ({
      ...horse,
      position: raceResults.value[currentRaceIndex.value]?.length || 0 + 1
    }));
    
    if (currentRaceIndex.value < races.value.length - 1) {
      currentRaceIndex.value++;
      initializeRace();
    } else {
      isRaceFinished.value = true;
    }
  }

  function initializeRace() {
    positions.value[currentRaceIndex.value] = {};
    finishedHorses.value = [];
    
    races.value[currentRaceIndex.value].horses.forEach(horse => {
      positions.value[currentRaceIndex.value][horse.id] = 0;
    });
  }

  function updatePositions() {
    if (isRacePaused.value || !isRaceStarted.value || isRaceFinished.value) return;
    
    const currentRace = races.value[currentRaceIndex.value];
    const currentPositions = positions.value[currentRaceIndex.value];
    
    currentRace.horses.forEach(horse => {
      if (!finishedHorses.value.includes(horse.id)) {
        const progress = (horse.condition / 100) * (1 + Math.random() * 0.2);
        currentPositions[horse.id] += progress * simulationSpeed.value;
        
        if (currentPositions[horse.id] >= currentRace.distance) {
          currentPositions[horse.id] = currentRace.distance;
          finishedHorses.value.push(horse.id);
          
          if (!raceResults.value[currentRaceIndex.value]) {
            raceResults.value[currentRaceIndex.value] = [];
          }
          
          raceResults.value[currentRaceIndex.value].push({
            ...horse,
            position: raceResults.value[currentRaceIndex.value].length + 1
          });
        }
      }
    });
    
    if (finishedHorses.value.length === currentRace.horses.length) {
      if (currentRaceIndex.value < races.value.length - 1) {
        setTimeout(() => {
          currentRaceIndex.value++;
          initializeRace();
        }, 2000);
      } else {
        isRaceFinished.value = true;
      }
    }
  }

  return {
    horses,
    races,
    currentRaceIndex,
    raceResults,
    isRaceStarted,
    isRacePaused,
    isRaceFinished,
    simulationSpeed,
    positions,
    finishedHorses,
    currentRace,
    currentPositions,
    generateHorses,
    generateRaces,
    startRace,
    pauseRace,
    resumeRace,
    stopRace,
    toggleSpeed,
    skipToResults,
    updatePositions
  };
});