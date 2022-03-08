/* eslint-disable @typescript-eslint/no-use-before-define */
(function() {
  // globals
  let canvas;
  let ctx;
  let W;
  let H;
  const mp = 30; //max particles
  let particles = [];
  let angle = 0;
  let tiltAngle = 0;
  let confettiActive = true;
  let animationComplete = true;
  let deactivationTimerHandler;
  let reactivationTimerHandler;
  let animationHandler;

  // objects

  function SetGlobals() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }

  const particleColors = {
    colorOptions: ['#9b78b8', '#c2bfbf', '#8452a3', '#dde0d9', '#b190d1', 'white'],
    colorIndex: 0,
    colorIncrementer: 0,
    colorThreshold: 10,
    getColor: function() {
      if (this.colorIncrementer >= 3) {
        this.colorIncrementer = 0;
        this.colorIndex++;
        if (this.colorIndex >= this.colorOptions.length) {
          this.colorIndex = 0;
        }
      }
      this.colorIncrementer++;
      return this.colorOptions[this.colorIndex];
    },
  };

  function confettiParticle(color) {
    this.x = Math.random() * W; // x-coordinate
    this.y = Math.random() * H - H; //y-coordinate
    this.r = RandomFromTo(5, 15); //radius;
    this.d = Math.random() * mp + 10; //density;
    this.color = color;
    this.tilt = Math.floor(Math.random() * 10) - 10;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function() {
      ctx.beginPath();
      ctx.lineWidth = this.r;
      ctx.lineCap = 'round';
      ctx.strokeStyle = this.color;
      ctx.moveTo(this.x + this.tilt + this.r / 4, this.y);
      ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4);
      return ctx.stroke();
    };
  }

  $(document).ready(function() {
    SetGlobals();
    // InitializeButton();
    InitializeConfetti();

    $(window).resize(function() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    });
  });

  function InitializeButton() {
    $('#stopButton').click(DeactivateConfetti);
    $('#startButton').click(RestartConfetti);
  }

  function InitializeConfetti() {
    particles = [];
    animationComplete = false;
    for (let i = 0; i < mp; i++) {
      const particleColor = particleColors.getColor();
      particles.push(new confettiParticle(particleColor));
    }
    StartConfetti();
  }

  function Draw() {
    ctx.clearRect(0, 0, W, H);
    const results = [];
    for (let i = 0; i < mp; i++) {
      (function(j) {
        results.push(particles[j].draw());
      })(i);
    }
    Update();

    return results;
  }

  function RandomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  function Update() {
    let remainingFlakes = 0;
    let particle;
    angle += 0.01;
    tiltAngle += 0.1;

    for (let i = 0; i < mp; i++) {
      particle = particles[i];
      if (animationComplete) return;

      if (!confettiActive && particle.y < -15) {
        particle.y = H + 100;
        continue;
      }

      stepParticle(particle, i);

      if (particle.y <= H) {
        remainingFlakes++;
      }
      CheckForReposition(particle, i);
    }

    if (remainingFlakes === 0) {
      StopConfetti();
    }
  }

  function CheckForReposition(particle, index) {
    if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {
      if (index % 5 > 0 || index % 2 == 0) {
        //66.67% of the flakes
        repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 20);
      } else {
        if (Math.sin(angle) > 0) {
          //Enter from the left
          repositionParticle(particle, -20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
        } else {
          //Enter from the right
          repositionParticle(
            particle,
            W + 20,
            Math.random() * H,
            Math.floor(Math.random() * 10) - 20,
          );
        }
      }
    }
  }
  function stepParticle(particle, particleIndex) {
    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;
    particle.x += Math.sin(angle);
    particle.tilt = Math.sin(particle.tiltAngle - particleIndex / 3) * 15;
  }

  function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
    particle.x = xCoordinate;
    particle.y = yCoordinate;
    particle.tilt = tilt;
  }

  function StartConfetti() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    (function animloop() {
      if (animationComplete) return null;
      animationHandler = requestAnimFrame(animloop);
      return Draw();
    })();
  }

  function ClearTimers() {
    clearTimeout(reactivationTimerHandler);
    clearTimeout(animationHandler);
  }

  function DeactivateConfetti() {
    confettiActive = false;
    ClearTimers();
  }

  function StopConfetti() {
    animationComplete = true;
    if (ctx == undefined) return;
    ctx.clearRect(0, 0, W, H);
  }

  function RestartConfetti() {
    ClearTimers();
    StopConfetti();
    reactivationTimerHandler = setTimeout(function() {
      confettiActive = true;
      animationComplete = false;
      InitializeConfetti();
    }, 200);
  }

  window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
})();
