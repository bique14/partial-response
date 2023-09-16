module.exports = function (obj, fields) {
  const fieldList = fields.split(",");

  if (fields === "" || fields === "*") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const filteredObject = obj.map((o) => {
      const result = toFiltered(o, fieldList);
      return result;
    });

    return filteredObject;
  } else {
    const result = toFiltered(obj, fieldList);
    return result;
  }
};

const toFiltered = (obj, fieldList) => {
  const result = {};

  fieldList.forEach((field) => {
    if (obj.hasOwnProperty(field)) {
      result[field] = obj[field];
    }
  });

  return result;
};
