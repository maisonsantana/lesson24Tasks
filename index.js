"use strict";

// Створити абстрактний клас Figeure3D з властивостю ім'я (string не пуста) і методом обчислити об'єм.

// Створити класи нащадки: сфера, куб, *циліндр. Написати сеттери для властивостей.

// Створити функцію getVolume3DFigure, яка приймає будь яку 3d фігуру і повертає її об'єм.

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  set name(name) {
    if (
      typeof name !== "string" ||
      typeof name === " " ||
      typeof name === null
    ) {
      throw new TypeError("Name must be a string!");
    }
    this._name = name;
  }
  getVolume() {
    throw new Error("Dont call method in abstract class!");
  }
}

class Sphere extends Figure3D {
  constructor(radius) {
    super("sphere");
    this.radius = radius;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("Radius must be a number!");
    } else if (typeof radius < 0) {
      throw new RangeError("Radius must be a positive!");
    }
    this._radius = radius;
  }
  getVolume() {
    return (4 / 3) * Math.PI * this._radius ** 3;
  }
}

class Cube extends Figure3D {
  constructor(height, width, length) {
    super("cube");
    this.height = height;
    this.width = width;
    this.length = length;
  }
  set height(height) {
    if (typeof height !== "number") {
      throw new TypeError("Height must me a number!");
    } else if (typeof height < 0) {
      throw new RangeError("Height must be a positive!");
    }
    this._height = height;
  }
  set width(width) {
    if (typeof width !== "number") {
      throw new TypeError("Height must me a number!");
    } else if (typeof width < 0) {
      throw new RangeError("Height must be a positive!");
    }
    this._width = width;
  }
  set length(length) {
    if (typeof length !== "number") {
      throw new TypeError("Height must me a number!");
    } else if (typeof length < 0) {
      throw new RangeError("Height must be a positive!");
    }
    this._length = length;
  }
  getVolume() {
    return this._length * this._width * this._height;
  }
}
function getVolume3DFigure(nameOfFigure) {
  nameOfFigure.getVolume();
}
try {
  const sphere = new Sphere(6);
  const cube = new Cube(2, 2, 2);
  console.log(sphere);
  console.log(cube);
  console.log(sphere.getVolume());
  console.log(cube.getVolume());
} catch (error) {
  console.log(error);
}

