var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ground = createSprite(100, 400, 700, 100);
ground.shapeColor = "green";
var sun = createSprite(76, 76, 70, 70);
sun.shapeColor = rgb(255, 255, 0);
var b1 = createSprite(35, 275, 30, 150);
b1.shapeColor = "grey";
var b2 = createSprite(70, 260, 30, 180);
b2.shapeColor = "grey";
var b3 = createSprite(105, 275, 30, 150);
b3.shapeColor = "grey";
var b4 = createSprite(140, 260, 30, 180);
b4.shapeColor = "grey";
var b5 = createSprite(175, 275, 30, 150);
b5.shapeColor = "grey";
var b6 = createSprite(210, 260, 30, 180);
b6.shapeColor = "grey";
var b7 = createSprite(245, 275, 30, 150);
b7.shapeColor = "grey";
var b8 = createSprite(280, 260, 30, 180);
b8.shapeColor = "grey";
var b9 = createSprite(315, 275, 30, 150);
b9.shapeColor = "grey";
var b10 = createSprite(350, 260, 30, 180);
b10.shapeColor = "grey";
var clouds = createSprite(200, 100, 100, 50);
clouds.shapeColor = "white";
var clouds = createSprite(330, 75, 100, 50);
clouds.shapeColor = "white";




function draw() {
  background(rgb(0, 255, 255));
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
