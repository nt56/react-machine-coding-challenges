const print = () => {
  for (let i = 1; i <= 10; i++) {
    function demo(i) {
      setTimeout(() => {
        if (i % 2 === 0) {
          console.log(1);
          console.log(2);
        } else {
          console.log(1);
        }
      }, i * 1000);
    }
    demo(i);
  }
};

print();
