export function drawGraph(canvas, scoreglobal) {
    var ctx = canvas.getContext("2d");
    var data = [25, 50, 75, 100];
    var colors = ["#ac2369", "#ced7ef", "#919bc0", "#21244e"];
    var centerX = canvas.width / 2;
    var centerY = canvas.height - ((canvas.height / 2) * 0.9) / 2;
    var radius = (canvas.height / 2) * 0.9;
    var lineWidth = radius * 0.1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < data.length; i++) {
        ctx.beginPath();
        var startAngle = Math.PI * (1 + (i > 0 ? data[i - 1] / 100 : 0));
        var endAngle = Math.PI * (1 + data[i] / 100);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.strokeStyle = colors[i];
        ctx.stroke();
    }
    var needleValue = scoreglobal;
    var needleAngle = Math.PI * (1 + needleValue / 100);
    var needleLength = radius * 0.8;
    var needleWidth = radius * 0.1;
    var needleEndX = centerX + needleLength * Math.cos(needleAngle);
    var needleEndY = centerY + needleLength * Math.sin(needleAngle);
    var baseRadius = needleWidth / 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
        centerX + baseRadius * Math.cos(needleAngle - Math.PI / 2),
        centerY + baseRadius * Math.sin(needleAngle - Math.PI / 2)
    );
    ctx.lineTo(needleEndX, needleEndY);
    ctx.lineTo(
        centerX + baseRadius * Math.cos(needleAngle + Math.PI / 2),
        centerY + baseRadius * Math.sin(needleAngle + Math.PI / 2)
    );
    ctx.arc(
        centerX,
        centerY,
        baseRadius,
        needleAngle + Math.PI / 2,
        needleAngle - Math.PI / 2
    );
    ctx.fillStyle = "#6d2d68";
    ctx.fill();
}