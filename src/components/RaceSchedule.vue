<template>
  <div class="panel race-schedule">
    <h2 class="panel-title">Race Schedule</h2>
    
    <div v-if="raceStore.races.length === 0" class="empty-message">
      Click "Generate" to create race schedule
    </div>
    
    <div v-else class="race-items">
      <div v-for="race in raceStore.races" :key="race.id" class="race-item">
        <div class="race-header">
          <span class="race-round">Round {{ race.id }}</span>
          <span class="race-distance">{{ race.distance }}m</span>
        </div>
        
        <div class="race-horses">
          <div class="horse-group">
            <div v-for="horse in race.horses.slice(0, 5)" :key="horse.id" class="scheduled-horse">
              <span class="horse-color" :style="{ backgroundColor: horse.color }"></span>
              {{ horse.name }}
            </div>
          </div>
          
          <div class="horse-group">
            <div v-for="horse in race.horses.slice(5, 10)" :key="horse.id" class="scheduled-horse">
              <span class="horse-color" :style="{ backgroundColor: horse.color }"></span>
              {{ horse.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRaceStore } from '../stores/raceStore';

export default {
  name: 'RaceSchedule',
  setup() {
    const raceStore = useRaceStore();
    return { raceStore };
  }
};
</script>

<style scoped>
.race-schedule {
  height: 50%;
}

.empty-message {
  color: #666;
  font-style: italic;
  text-align: center;
  padding: 1rem;
}

.race-items {
  max-height: 300px;
  overflow-y: auto;
}

.race-item {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.race-item:last-child {
  border-bottom: none;
}

.race-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.race-horses {
  display: flex;
  gap: 1rem;
}

.horse-group {
  flex: 1;
}

.scheduled-horse {
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  font-size: 0.9rem;
}

.scheduled-horse .horse-color {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.5rem;
}
</style>