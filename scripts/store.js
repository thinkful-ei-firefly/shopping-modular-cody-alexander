'use strict';
/*global Item cuid*/

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  const findById = function(id) {
    return items.find(item => item.id === id);
  };

  const addItem = function (name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      console.log('Error, item not added: ' + error);
    }
  };

  const findToggleChecked = function(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  };

  const findAndUpdateName = function (id, newName) {
    try {
      Item.validateName(newName);
      const item = findById(id);
      item.name = newName;
    } catch (error) {
      console.log('Error, item not added: ' + error);
    }
  };

  const findAndDelete = function (id) {
    const foundItem = this.findById(id);
    this.items.splice(items.indexOf(foundItem), 1);
  };

  const toggleCheckedFilter = function () {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function (term) {
    this.searchTerm = term;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  };
}());