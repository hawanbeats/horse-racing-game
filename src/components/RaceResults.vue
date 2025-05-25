<template>
  <div class="panel race-results">
    <h2 class="panel-title">Race Results</h2>
    
    <div v-if="raceStore.raceResults.length === 0" class="empty-message">
      Race results will appear here
    </div>
    
    <div v-else class="results-container">
      <div v-for="(result, index) in raceStore.raceResults" :key="index" class="race-result">
        <h3 class="result-title">Round {{ index + 1 }} ({{ raceStore.races[index].distance }}m)</h3>
        
        <table class="result-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Horse</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="horse in result" :key="horse.id">
              <td>{{ horse.position }}</td>
              <td>
                <span class="horse-color" :style="{ backgroundColor: horse.color }"></span>
                {{ horse.name }}
              </td>
              <td>{{ horse.condition }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useRaceStore } from '../stores/raceStore';

export default {
  name: 'RaceResults',
  setup() {
    const raceStore = useRaceStore();
    return { raceStore };
  }
};
</script>

<style scoped>
.race-results {
  height: 100%;
}

.empty-message {
  color: #666;
  font-style: italic;
  text-align: center;
  padding: 1rem;
}

.results-container {
  max-height: calc(100% - 50px);
  overflow-y: auto;
}

.race-result {
  margin-bottom: 1.5rem;
}

.race-result:last-child {
  margin-bottom: 0;
}

.result-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #444;
}

.result-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.result-table th, .result-table td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.result-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.horse-color {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.5rem;
}
</style>