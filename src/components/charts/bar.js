
import {
  Util,
  Shape,
} from 'bizcharts';

function getFillAttrs(cfg) {
  // const attrs = Util.mix(
  //   {
  //     fill: cfg.color,
  //     fillOpacity: cfg.opacity
  //   },
  //   cfg.style
  // );
  return cfg.style;
}

function getRectPath(points) {
  const path = [];

  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    if (point) {
      const action = i === 0 ? "M" : "L";
      path.push([action, point.x, point.y]);
    }
  }

  const first = points[0];
  path.push(["L", first.x, first.y]);
  path.push(["z"]);
  return path;
} // 顶边带圆角

Shape.registerShape("interval", "round-rect", {
  draw(cfg, container) {
    const attrs = getFillAttrs(cfg);
    let path = getRectPath(cfg.points);
    path = this.parsePath(path); // 将 0 - 1 的值转换为画布坐标

    const radius = cfg.style.radius || 4;
    const temp = [];
    temp.push(["M", path[0][1], path[0][2]]);
    temp.push(["L", path[1][1], path[1][2] + radius]);
    temp.push([
      "A",
      radius,
      radius,
      90,
      0,
      1,
      path[1][1] + radius,
      path[1][2]
    ]);
    temp.push(["L", path[2][1] - radius, path[2][2]]);
    temp.push([
      "A",
      radius,
      radius,
      90,
      0,
      1,
      path[2][1],
      path[2][2] + radius
    ]);
    temp.push(["L", path[3][1], path[3][2]]);
    temp.push(["Z"]);
    return container.addShape("path", {
      attrs: Util.mix(attrs, {
        path: temp
      })
    });
  }
});
