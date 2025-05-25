<template>
  <div class="panel horse-list">
    <h2 class="panel-title">Horse List</h2>
    
    <div v-if="raceStore.horses.length === 0" class="empty-message">
      Click "Generate" to create horse list
    </div>
    
    <ul v-else class="horse-items">
      <li v-for="horse in raceStore.horses" :key="horse.id" class="horse-item">
        <span class="horse-color" :style="{ backgroundColor: horse.color }"></span>
        <span class="horse-name">{{ horse.name }}</span>
        <span class="horse-condition">Condition: {{ horse.condition }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRaceStore } from '../stores/raceStore';

export default {
  name: 'HorseList',
  setup() {
    const raceStore = useRaceStore();
    return { raceStore };
  }
};
</script>

<style scoped>
.horse-list {
  height: 50%;
}

.empty-message {
  color: #666;
  font-style: italic;
  text-align: center;
  padding: 1rem;
}

.horse-items {
  list-style: none;
  max-height: 300px;
  overflow-y: auto;
}

.horse-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.horse-color {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.horse-name {
  flex: 1;
  font-weight: bold;
}

.horse-condition {
  color: #666;
  font-size: 0.9rem;
}
</style>