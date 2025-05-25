<template>
  <div class="app-container">
    <header class="app-header">
      <h1 class="game-title">Horse Racing Game</h1>
      <ControlPanel />
    </header>
    
    <main class="main-content">
      <div class="left-panel">
        <HorseList />
        <RaceSchedule />
      </div>
      
      <div class="center-panel">
        <RaceSimulation />
      </div>
      
      <div class="right-panel">
        <RaceResults />
      </div>
    </main>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel.vue';
import HorseList from './components/HorseList.vue';
import RaceSchedule from './components/RaceSchedule.vue';
import RaceSimulation from './components/RaceSimulation.vue';
import RaceResults from './components/RaceResults.vue';
import { useRaceStore } from './stores/raceStore';

export default {
  name: 'App',
  components: {
    ControlPanel,
    HorseList,
    RaceSchedule,
    RaceSimulation,
    RaceResults
  },
  setup() {
    const raceStore = useRaceStore();
    
    const animate = () => {
      raceStore.updatePositions();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return { raceStore };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
}

.game-title {
  font-size: 1.5rem;
  color: #333;
}

.main-content {
  display: flex;
  flex: 1;
  padding: 1rem;
  gap: 1rem;
}

.left-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.center-panel {
  flex: 2;
}

.right-panel {
  flex: 1;
}

.panel {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.panel-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #444;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.generate-btn {
  background-color: #1e3a8a;
  color: white;
}

.start-btn {
  background-color: #10b981;
  color: white;
}

.pause-btn {
  background-color: #6b7280;
  color: white;
}

.resume-btn {
  background-color: #f59e0b;
  color: white;
}

.stop-btn {
  background-color: #ef4444;
  color: white;
}

.speed-btn {
  background-color: #3b82f6;
  color: white;
}

.skip-btn {
  background-color: #8b5cf6;
  color: white;
}
</style>