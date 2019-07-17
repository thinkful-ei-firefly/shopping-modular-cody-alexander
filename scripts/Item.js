'use strict';

const Item = (function () {
  const validateName = (name) => {
    if (!name) {
      throw TypeError('Name does not exist');
    }
  };

  const create = (name) => {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };
  return {
    validateName,
    create
  };
}());