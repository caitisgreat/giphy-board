<template>
  <figure class="media-content" :id=id>
    <img :src=src />
  </figure>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
}
</script>
