'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(520, 20, 10, 270);
  ctx.fillRect(110, 280, 410, 10);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var columnHeight = 150;
  var columnWidth = 40;
  var columnMargin = 50;

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  var step = columnHeight / (max - 0);

  for (var j = 0; j < times.length; j++) {
    ctx.fillStyle = (names[j] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(2, 14, 134, ' + Math.random() + ')';
    ctx.fillRect(120 + ((columnWidth + columnMargin) * j), 240 - (times[j] * step), columnWidth, times[j] * step);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[j], 120 + ((columnWidth + columnMargin) * j), 260);
    ctx.fillText(Math.round(times[j]), 120 + ((columnWidth + columnMargin) * j), 235 - (times[j] * step));
  }
};
