$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform(500, 640, 1100, 15, "black");
    createPlatform(350, 520, 5, 5, "white");
    createPlatform(250, 400, 5, 5, "white");
    createPlatform(400, 300, 20, 5, "white");
    createPlatform(400, 210, 5, 5, "white");
    createPlatform(150, 200, 20, 5, "lime");
    createPlatform(800, 501, 30, 5, "blue");
    createPlatform(690, 460, 30, 5, "blue");
    createPlatform(800, 321, 30, 5, "blue");
    createBadPlatform(900, 250, 30, 5, "red");
    createPlatform(700, 250, 30, 5, "blue");
    createPlatform(800, 160, 30, 5, "lime");
    createPlatform(1050, 250, 30, 5, "blue");
    createPlatform(1350, 300, 5, 5, "lime");

    // TODO 3 - Create Collectables

    createCollectable("database", 1350, 700);
    createCollectable("diamond", 140, 160);
    createCollectable("database", 795, 119);
    createCollectable("database", 1332, 260);

    // TODO 4 - Create Cannons

    createCannon("right", 450, 1600);
    createCannon("top", 1200, 1600);
    createCannon("right", 200, 2500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
