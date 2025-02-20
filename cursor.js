document.addEventListener('DOMContentLoaded', function () {
   document.getElementsByTagName("body")[0].style = "cursor: none !important";
});

const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");
const $cursor = document.getElementsByClassName("cursor")[0]
var visible = false;

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    if (!visible) {
        TweenMax.to($smallBall, 0, {
            x: e.pageX - 5,
            y: e.pageY - 7
          });


        TweenMax.to($cursor, 1, {
            opacity: 1,
            size: 1
        });

        visible = true;
    }

  TweenMax.to($smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($smallBall, 0.15, {
    scale: 1.6
  });
}
function onMouseHoverOut() {
  TweenMax.to($smallBall, 0.15, {
    scale: 1
  });
}

// make cursor hover on all hoverable elements
const hoverables = document.getElementsByClassName('hover');
for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener('mouseover', () => {
    onMouseHover();
  });
  hoverables[i].addEventListener('mouseout', () => {
    onMouseHoverOut();
  });
}