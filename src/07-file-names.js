/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return [];
  }
  const ar = [];
  ar.push(names[0]);
  for (let i = 1; i < names.length; i++) {
    if (ar.map((element) => element.slice(0, -3)).includes(names[i])) {
      ar.push(
        `${names[i]
        }(${
          ar.map((element) => element.slice(0, -3)).lastIndexOf(names[i]) + 1})`,
      );
    } else if (ar.includes(names[i])) {
      ar.push(`${names[i]}(1)`);
    } else { ar.push(names[i]); }
  }
  return ar;
}

module.exports = renameFiles;
