import { Coord, Size } from "../interfaces/measure";

export class Box {
  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) {}

  get topLeft(): Coord {
    return { x: this.x, y: this.y };
  }

  get size(): Size {
    return { width: this.width, height: this.height };
  }

  /**
   * Returns a new box in a coordinate system with origin at the top-left of the given [parent].
   */
  relativeTo(parent: Box): Box {
    return new Box(
      this.x - parent.x,
      this.y - parent.y,
      this.width,
      this.height
    );
  }

  translatedBy(dx: number, dy: number): Box {
    return new Box(this.x + dx, this.y + dy, this.width, this.height);
  }

  scaleCoordinateSystemBy(scalar: number): Box {
    return new Box(
      this.x * scalar,
      this.y * scalar,
      this.width * scalar,
      this.height * scalar
    );
  }
}
