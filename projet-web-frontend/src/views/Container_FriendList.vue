<template>
  <div style="display:flex; height:100%">
    <div style="background-color: white;display:flex;width:40%"></div>
    <div style="display: flex; justify-content: right;flex-direction: column;align-items: flex-end;width:100%">
      <div
        style="
          display: flex;
          justify-content: flex-end;
          width: 100%;
          background-color: #36393e;
          border-bottom: 1px solid #2b2e31;
          padding-bottom:10px
        "
      >
        <button
          style="margin-right: 10%; margin-top: 15px;margin-bottom:1px"
          @click="changeComponent('waitingFriend')"
          class="addFriend"
        >
          <span>En attente</span>
        </button>
        <button
          style="margin-right: 10%; margin-top: 15px;margin-bottom:1px"
          @click="changeComponent('addFriend')"
          class="addFriend"
        >
          <span>Ajouter un ami</span>
        </button>
        
      </div>
      <div style="width: 100%; display: flex; height:100%">
        <component :is="activeComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import friendListComponent from "../components/Friend_List.vue";
import addFriend from "../components/addFriend.vue";
import waitingFriend from "../components/waitingFriend.vue"
export default {
  data() {
    return {
      activeComponent: friendListComponent,
    };
  },
  components: {
    friendListComponent,
    addFriend,
    waitingFriend,
  },
  methods: {
    changeComponent(name) {
      if (name == "addFriend") {
        this.activeComponent = addFriend;
      }
      if (name == "waitingFriend") {
        this.activeComponent = waitingFriend;
      }
    },
  },
};
</script>

<style scoped>
.addFriend {
  background-color: hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%);
  color: hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%);
  align-items: center;
  text-align: center;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  min-width: 40px;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 0;
  font-weight: 500;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 2px 8px;
  border: 0;
  margin-right: 20%;
  margin-top: 5px;
}
</style>