var i = 1;
function ping(timeout, err) {
  setTimeout(function() {
    console.log('pong', i);
    i = i + 1;
    if (err) {
      throw new Error(err);
    }
  }, timeout);
}

ping(0);
ping(100);
ping(200);
ping(300);
ping(400);
ping(500);
ping(600);
ping(700);
ping(800);
ping(900);
ping(1000);
ping(1100);
ping(1200);
ping(1300);
ping(1400);
ping(1500);
ping(1600);
ping(1700);
ping(1800);
ping(1900);
ping(2000, 'Testing error');
