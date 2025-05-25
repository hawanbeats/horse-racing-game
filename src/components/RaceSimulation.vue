<template>
  <div class="panel race-simulation">
    <h2 class="panel-title">
      Race Simulation 
      <span v-if="raceStore.currentRace">
        - Round {{ raceStore.currentRace.id }} ({{ raceStore.currentRace.distance }}m)
      </span>
    </h2>
    
    <div v-if="!raceStore.isRaceStarted && raceStore.currentRaceIndex === -1" class="empty-message">
      Click "Start" to begin the race
    </div>
    
    <div v-else class="race-track">
      <div class="finish-line"></div>
      
      <div 
        v-for="horse in raceStore.currentRace?.horses || []" 
        :key="horse.id" 
        class="horse-track"
      >
        <div 
          class="horse-icon-container"
          :style="{ 
            transform: `translateX(${Math.min(raceStore.currentPositions[horse.id] || 0, raceStore.currentRace?.distance || 0)}px)`,
          }"
        >
          <svg 
            class="horse-icon" 
            viewBox="0 0 512 512"
            :style="{ fill: horse.color }"
          >
            <path d="M448 224v-16c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v16h-32v-16c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v16h-32v-16c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v16H64v-16c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h32v96c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32h256v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-96h32c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16z"/>
            <circle cx="128" cy="160" r="32"/>
            <circle cx="384" cy="160" r="32"/>
          </svg>
        </div>
        <div class="track-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRaceStore } from '../stores/raceStore';

export default {
  name: 'RaceSimulation',
  setup() {
    const raceStore = useRaceStore();
    return { raceStore };
  }
};
</script>

<style scoped>
.race-simulation {
  height: 100%;
}

.empty-message {
  color: #666;
  font-style: italic;
  text-align: center;
  padding: 1rem;
}

.race-track {
  position: relative;
  height: calc(100% - 50px);
  overflow: hidden;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 15px 0;
}

.finish-line {
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #ff0000;
  z-index: 10;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
}

.horse-track {
  position: relative;
  height: 50px;
  margin-bottom: 8px;
}

.horse-icon-container {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: transform 0.1s linear;
  width: 36px;
  height: 36px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.horse-icon {
  width: 100%;
  height: 100%;
}

.track-line {
  position: absolute;
  left: 20px;
  right: 20px;
  top: 50%;
  height: 2px;
  background-color: #e0e0e0;
  z-index: 1;
}
</style>