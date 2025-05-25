<template>
  <div class="control-panel">
    <button 
      class="button generate-btn" 
      @click="raceStore.generateRaces"
      :disabled="raceStore.isRaceStarted && !raceStore.isRaceFinished"
    >
      Generate
    </button>
    
    <button 
      v-if="!raceStore.isRaceStarted || raceStore.isRaceFinished"
      class="button start-btn"
      @click="raceStore.startRace"
      :disabled="raceStore.races.length === 0"
    >
      Start
    </button>
    
    <button 
      v-else-if="raceStore.isRacePaused"
      class="button resume-btn"
      @click="raceStore.resumeRace"
    >
      Resume
    </button>
    
    <button 
      v-else
      class="button pause-btn"
      @click="raceStore.pauseRace"
    >
      Pause
    </button>
    
    <button 
      class="button stop-btn"
      @click="raceStore.stopRace"
      :disabled="!raceStore.isRaceStarted && raceStore.isRaceFinished"
    >
      Stop
    </button>
    
    <button 
      class="button speed-btn"
      @click="raceStore.toggleSpeed"
      :disabled="!raceStore.isRaceStarted || raceStore.isRaceFinished"
    >
      {{ raceStore.simulationSpeed === 1 ? '2x Speed' : 'Normal Speed' }}
    </button>
    
    <button 
      class="button skip-btn"
      @click="raceStore.skipToResults"
      :disabled="!raceStore.isRaceStarted || raceStore.isRaceFinished"
    >
      Skip to Results
    </button>
  </div>
</template>

<script>
import { useRaceStore } from '../stores/raceStore';

export default {
  name: 'ControlPanel',
  setup() {
    const raceStore = useRaceStore();
    return { raceStore };
  }
};
</script>

<style scoped>
.control-panel {
  display: flex;
  gap: 0.5rem;
}
</style>