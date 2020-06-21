<template>
  <nb-row :style="{flex:1, alignItems: 'center'}">
    <nb-col>
      <text>{{request.id}}</text>
    </nb-col>
    <nb-col>
      <text :style="{fontWeight: 'bold', fontSize: 15, color: '#35654d'}">{{request.status}}</text>
    </nb-col>
    <nb-col>
      <view :style="{marginTop:10}">
        <nb-button block :style="{backgroundColor: '#35654d'}">
          <Icon name="plus" color="#fff" />
        </nb-button>
      </view>
    </nb-col>
  </nb-row>
</template>

<script>
import Icon from "react-native-vector-icons/FontAwesome";

export default {
  props: {
    request: Object
  },
  components: {
    Icon
  }
};
</script>

<style>
</style>