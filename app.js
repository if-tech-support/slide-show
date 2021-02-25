new Vue({
  el: '#app',
  data: {
    displayImage: 0,
    style: '',
    images: [
      './img/autumn-219972_1280.jpg',
      './img/clouds-49520_1280.jpg',
      './img/forest-1072828_1280.jpg',
    ],
  },
  methods: {
    next() {
      if (this.displayImage >= this.images.length - 1) {
        this.displayImage = 0;
      } else {
        this.displayImage++;
      }
      this.style = 'slide-right';
    },
    prev() {
      if (this.displayImage === 0) {
        this.displayImage = this.images.length - 1;
      } else {
        this.displayImage--;
      }
      this.style = 'slide-left';
    },
  },
});
