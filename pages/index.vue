<template>
  <div class="devices-container">
    <h3>Devices</h3>
    <template v-for="(value, device) in devices" :key="device">
      <DeviceController
        :name="device"
        :modelValue="devices[device]"
        @update:modelValue="(val) => updateSwitchStatus(device, val)"
      />
    </template>
  </div>
</template>

<script setup>
import Pusher from "pusher-js";

const devices = reactive({
  "Light A": false,
  "Light B": false,
  "Light C": false,
  "Light D": false,
});

async function updateSwitchStatus(device, value) {
  const { message } = await $fetch("/api/switch", {
    method: "POST",
    body: { name: device, value },
  });
  console.log(message);
}

onMounted(() => {
  const pusher = new Pusher("95f4256352950a4a2c9a", {
    cluster: "ap2",
  });

  const channel = pusher.subscribe("my-channel");
  channel.bind("my-event", function (data) {
    devices[data.name] = data.value;
    console.log("Data from pusher", data);
  });
});
</script>
